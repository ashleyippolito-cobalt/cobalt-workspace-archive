// Batch-run the REAL production hybrid path (procedural pre-pass + residual
// Gemini + merge + guard — mirrors app/api/analyze/route.js) against a
// directory of raw transcript inputs, writing one coded output file per
// input plus a cost/usage summary.
//
// This is a generalized version of gemini-hybrid-run.mjs — same pipeline
// logic, but takes an arbitrary --in/--out directory pair instead of the
// hardcoded andy/fixtures presets, and caps concurrency + sample count so
// cost is bounded and predictable.
//
// IMPORTANT: run this yourself, in your own terminal — do not have an AI
// assistant execute it, since doing so would send real transcript content
// through that assistant's own execution/API path. No BAA covers that.
//
// Segmentation pre-pass: applies lib/presegment.js (re-lines run-on turns at
// C-unit boundaries, byte-for-byte safety-verified) before the hybrid
// pipeline. As of commit 8dbeb53 this is also how /api/analyze itself
// works by default ("hybrid v2") — this script's presegment-then-hybridCode
// flow is the CLI equivalent of that same official wiring, not a bespoke
// version. Defaults ON. Pass --no-presegment to disable and reproduce the
// pre-v2 behavior.
//
// Usage:
//   node scripts/batch-run-corpus.mjs --in <dir> --out <dir> [--limit 25] [--concurrency 5] [--no-presegment]
//
// Requires (in .env.local or the environment):
//   Gemini: gcloud auth application-default login, plus GOOGLE_CLOUD_PROJECT
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function loadEnvLocal() {
  const p = path.join(ROOT, ".env.local");
  if (!existsSync(p)) return;

  for (const line of readFileSync(p, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!m || process.env[m[1]] !== undefined) continue;

    let v = m[2];
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    process.env[m[1]] = v;
  }
}
loadEnvLocal();
process.env.LLM_PROVIDER = "gemini";

function parseArgs(argv) {
  const args = { limit: 25, concurrency: 5, presegment: true };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--in") args.in = argv[++i];
    else if (a === "--out") args.out = argv[++i];
    else if (a === "--limit") args.limit = Number(argv[++i]);
    else if (a === "--concurrency") args.concurrency = Number(argv[++i]);
    else if (a === "--no-presegment") args.presegment = false;
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
if (!args.in || !args.out) {
  console.error("Usage: node scripts/batch-run-corpus.mjs --in <dir> --out <dir> [--limit 25] [--concurrency 5] [--no-presegment]");
  process.exit(1);
}

const { chatJsonSchema, getModel } = await import("../lib/llmCore.js");
const { EditListSchema, dropNoOpEdits } = await import("../lib/editsSchema.js");
const { guardEdits } = await import("../lib/conventionGuard.js");
const { applyEdits } = await import("../tests/promptAssertions.js");
const { runProcedural } = await import("../lib-procedural-v1/index.js");
const { presegment } = await import("../lib/presegment.js");
const { mergeEdits } = await import("../lib-procedural-v1/hybrid.js");
const { estimateCost, formatUSD } = await import("../lib/openaiPricing.js");

const totals = { calls: 0, prompt_tokens: 0, completion_tokens: 0 };
function trackUsage(usage) {
  if (!usage) return;
  totals.calls += 1;
  totals.prompt_tokens += usage.prompt_tokens ?? 0;
  totals.completion_tokens += usage.completion_tokens ?? 0;
}

const residualSystem = readFileSync(path.join(ROOT, "lib-procedural-v1", "prompts", "llm-residual.system.txt"), "utf8");

// hybridCode mirrors gemini-hybrid-run.mjs exactly — same production path,
// unmodified logic, just factored so it can run over an arbitrary file set.
async function hybridCode(transcript) {
  const { edits: procEdits } = runProcedural(transcript);
  const procHints = JSON.stringify({
    procedural_edits: procEdits.map((e) => ({ kind: e.kind, anchor: e.anchor, replacement: e.replacement, rule_ref: e.rule_ref })),
  });
  const residualUser = `${transcript}\n\n--- PROCEDURAL HINTS ---\n${procHints}`;
  const { parsed, usage } = await chatJsonSchema({ system: residualSystem, user: residualUser, schema: EditListSchema, reasoningEffort: "high" });
  trackUsage(usage);
  const llmEdits = dropNoOpEdits(parsed?.edits || []).map((e) => ({
    ...e,
    replacement: (e.replacement || "").replace(/[""]/g, '"'),
  }));
  const { edits: llmGuarded } = guardEdits(transcript, llmEdits, { stage: "llm", sweep: false });
  const { edits: merged } = mergeEdits(transcript, procEdits, llmGuarded);
  let { edits: guarded, dropped: guardDropped } = guardEdits(transcript, merged);
  const resurrected = guardDropped.flatMap((e) => e._absorbs || []);
  if (resurrected.length) {
    ({ edits: guarded } = guardEdits(transcript, [...guarded, ...resurrected]));
  }
  guarded = guarded.map(({ _absorbs, ...e }) => e);
  return applyEdits(transcript, guarded);
}

mkdirSync(args.out, { recursive: true });
console.log(`HYBRID batch | provider=gemini model=${getModel()} | in=${args.in} out=${args.out} limit=${args.limit} concurrency=${args.concurrency}`);

const ids = readdirSync(args.in)
  .filter((f) => f.endsWith(".txt"))
  .sort()
  .slice(0, args.limit);

let i = 0;
let okCount = 0;
let errCount = 0;
const t0 = Date.now();
const MAX_RETRIES = 3;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Retries any failure (rate limits, transient network/API errors) with
// exponential backoff (1s, 2s, 4s) before giving up. A real, paid batch run
// shouldn't lose a sample to a one-off blip.
async function hybridCodeWithRetry(transcript, id) {
  let lastErr;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await hybridCode(transcript);
    } catch (e) {
      lastErr = e;

      if (attempt < MAX_RETRIES) {
        const delayMs = 1000 * 2 ** (attempt - 1);
        console.log(`${id} retry ${attempt}/${MAX_RETRIES} after error: ${String(e?.message || e).slice(0, 80)}`);
        await sleep(delayMs);
      }
    }
  }

  throw lastErr;
}

async function worker() {
  while (i < ids.length) {
    const name = ids[i++];
    const id = name.replace(/\.txt$/, "");
    try {
      let raw = readFileSync(path.join(args.in, name), "utf8").replace(/^﻿/, "");

      if (args.presegment) {
        raw = await presegment(raw, { onUsage: trackUsage });
      }

      const coded = await hybridCodeWithRetry(raw, id);
      writeFileSync(path.join(args.out, name), coded);
      okCount++;
      console.log(`${id} ok`);
    } catch (e) {
      errCount++;
      writeFileSync(path.join(args.out, `${id}.ERROR.txt`), String(e?.message || e));
      console.log(`${id} ERR (after ${MAX_RETRIES} attempts) ${String(e?.message || e).slice(0, 80)}`);
    }
  }
}

await Promise.all(Array.from({ length: Math.min(args.concurrency, ids.length) }, worker));

const elapsed = ((Date.now() - t0) / 1000).toFixed(0);
const cost = estimateCost(getModel(), totals);

console.log(`\nDONE ${ids.length} samples (${okCount} ok, ${errCount} errors) in ${elapsed}s`);
console.log(
  `USAGE ${totals.calls} LLM calls | ${totals.prompt_tokens} in / ${totals.completion_tokens} out (incl. thinking) | ` +
  `cost ${formatUSD(cost.totalCost)} (${formatUSD(cost.inputCost)} in + ${formatUSD(cost.outputCost)} out)`
);

writeFileSync(
  path.join(args.out, "_run_summary.json"),
  JSON.stringify({
    model: getModel(),
    sampleCount: ids.length,
    okCount,
    errCount,
    elapsedSeconds: Number(elapsed),
    usage: totals,
    estimatedCostUsd: cost.totalCost,
  }, null, 2)
);
