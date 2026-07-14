# SALT Training Series — Course Review Overview

**Reviewed document:** `SALT-Training-Course.docx` (AI Video Course Redesign — 10 modules, ~121 min)
**Reference sources:** `Outlier codes.docx` (authoritative special-case coding), the SALT platform codebase (validator, scoring engine, AI-analyze spec), and the local `.SLT` practice files.
**Reviewer lens:** instructional designer + technical fact-check against the app.
**Course purpose (clarified):** teach clinicians/researchers to transcribe and code SALT conventions in the platform. UI target = a planned/wireframe redesign, not the currently shipped app.

---

## 1. Executive summary

The course is **structurally strong but technically unsafe to ship as written.** The instructional design (sequencing, the Carter case spine, consistent module template, pacing) is above average. But the content that matters most for this audience — the actual coding conventions and the **outlier/special cases where real transcribers fail** — contains factual errors that would cause learners to produce transcripts the scoring engine mis-parses.

Three classes of issue, in priority order:

1. **Convention/notation errors (must fix — wrong regardless of UI).** Mazes, omissions, error codes, and the morpheme set are taught in forms the scoring engine does not accept.
2. **Outlier special cases (must add — the heart of the request).** The course covers ~2–3 of ~16 documented special cases, and misquotes several it does touch.
3. **UI descriptions (sync risk, not errors).** The scripts describe a redesigned UI that isn't built yet; ship sequencing and wireframe reconciliation needed.

Plus a secondary **engine-vs-spec discrepancy** for the product team (below).

---

## 2. Instructional design assessment

### Strengths (keep)
- **Consistent module architecture** (Objectives → Key Content → Synthesia Notes → recap → "Up Next") — low extraneous cognitive load.
- **Carter case spine** (M1 → M10) and the **María case** (M9) — concrete anchors that model transfer. Best pedagogical decision in the document.
- **Worked examples** (C-unit segmentation, morpheme table) are concrete and correctly leveled — *when the coding is correct* (see §3–4).
- **Clinical "why" is consistently surfaced** ("tool, not a verdict"; equity framing in M9).
- **Production realism** — pacing (125–150 wpm), pause conventions, accessibility basics, a real roadmap.

### Gaps (fix)
- **Assessment is essentially absent.** Design principles promise a "Try It" per module; the scripts contain none. Only M5 has a knowledge check — and its answer is wrong (§5). For a clinical-skills course (and any CEU pathway) this is a blocker, not a nice-to-have.
- **"Layered depth" (students vs. clinicians) is claimed but not delivered** — no signposting for skip/replay paths. Either add chapter markers or drop the claim.
- **Objectives use unmeasurable verbs** ("understand," "articulate") with no matching assessment. Run an objective → content → assessment alignment pass.
- **No spaced/cumulative retrieval** across modules; recaps restate objectives rather than prompt recall.
- **M5 is overloaded** and gets heavier once the outlier cases are added — it needs to split (§7).

---

## 3. Convention/notation errors (Class A — fix regardless of UI)

These are data-format facts enforced by the validator and scoring engine. They are also wrong against the **standard SALT convention**, not just this app. A redesigned UI still feeds the same engine, so these remain errors in the wireframe world too.

| Course teaches | Correct (engine + standard SALT) |
|---|---|
| Mazes in square brackets `[um]` | Mazes use **parentheses** `(um)`; `[ ]` is reserved for **error codes** |
| `[EO]` = "omission error" | `[EO:form]` = **overgeneralization** (`goed\|go[EO:went]`) |
| Omissions wrapped `*word*` | Omission is **prefix-only**: `*am`, `*the` |
| Morphemes incl. `/ER`, `/EST` | `/ER` `/EST` are **not marked**; set is `/S /Z /3S /ING /ED /EN` + contractions; course **omits `/EN`** |
| Unintelligible `X/XX/XXX` = 1/2/3 **syllables** | = 1 word / multi-word / **full utterance** scope |
| Coordinators incl. `then` | Coordinators = **and / but / so / or**; course omits `or` |
| Timed pause `(2.5)` | Pause = `:NN` (`:03`); between-speaker `;:04` |
| `[D]` dialectal variation | **Not implemented** in this app |
| 3 error codes `[EW] [EU] [EO]` | Also `[EP]` pronoun error, `[FP]`, etc.; `[EO]` mislabeled |
| (not taught) | `\|` root-ID operator (`cuz\|because`); `>2 omissions → drop `*`, use `[EU]``; required `$`/`-` header |

---

## 4. Outlier / special-case coverage (the core gap)

Diffed against `Outlier codes.docx`. The outlier doc and the engine agree; the course disagrees with both.

| Outlier special case (ground truth) | Course | Verdict |
|---|---|---|
| `/'s` (=is) vs `/z` (poss.) vs `/s` (plural) vs `/s/z` (plural-poss.) | Only `/Z`, `/S`; never explains `/'s`="is" or `/s/z` | Partial / muddled |
| Omitted **morpheme** = `/*` after slash (`boy/*z bed`) | Teaches `*word*`, `run*ed` | **Wrong** |
| Time/measurement possessive → `/z` (`week/z time`, `two week/s/z salary`) | — | Missing |
| No `/s` on no-singular words (`woods`, `pants`, `clothes`, `glasses`) | PANTS, GLASSES | Partial ✓ |
| No marking irregular plurals (`mice`, `leaves`, `wolves`, `knives`…) | MICE, GEESE | Partial ✓ |
| No marking possessive pronouns (`his`, `hers`, `its`, `ours`…) | HIS, HERS | Partial ✓ |
| Full contraction set `/'s /'re /'ll /'m /'d /n't /'t /'ve` + non-standard `/h's /d's /d'd /'us` | Only `/N'T` | Missing (~93%) |
| **Don't slash contractions where the root sound changes** (`won't`, `don't`); don't mark `/ain't` | — (implies you slash all) | Missing + contradicts |
| `let/'us`, not `let/'s` | — | Missing |
| Omitted contracted word: `*I/'ll` vs `*I *will` | — | Missing |
| `[EW]` = **Extraneous** word ("no grammatical replacement" test) | Generic "word error" | Wrong label |
| `[EO]` = **overgeneralization**, format `prod\|root[EO:correct]` (`falled\|fall[EO:fell]`) | "omission error" | **Wrong (critical)** |
| Don't slash a bound morpheme in error (`bited\|bite[EO:bit]`, not `bite/ed`) | — | Missing |
| **Gerund after a preposition → do NOT `/ing`** (`kept on singing`, `after eating`) | — | Missing (high-frequency) |
| Gerund as complement (`found the guard sleeping`) | — | Missing |
| Emphasis repetitions → redefine with `\|` (`laughed_laughed_laughed\|laugh/ed`) | — | Missing |
| No bound morphemes on proper names (`Mothers_Day`, `Children's_Museum`) | Underscores taught, no-slash rule not | Missing |
| `like` as filler = `[FP]`, inside a maze; simile/estimate exceptions (`like her dad`, `like six dogs`) | Plain `[like]` maze | Wrong + missing `[FP]` |

**Net:** the course covers 2–3 of ~16 special cases. The outlier set is large and high-value enough to be **its own module/companion**, not an M5 add-on.

---

## 5. Worked-example errors to fix first (learners copy these verbatim)

1. **M5 self-check, Utterance 3** — "He runned to the store." Course answer `C He run*ed to the store` teaches an **invented notation**. `/*` = omitted morpheme; overgeneralization is `[EO]`. Correct: `C He runned|run[EO:ran] to the store.` *(A graded item teaching a fabricated code — highest-severity line in the document.)*
2. **M5 omissions** — `C She *is* run/ing` → omission is prefix-only: `C She *is run/ing`.
3. **M5 "like"** — `[like]` → `(like[FP])`; add the simile/estimate exceptions.

---

## 6. UI alignment (Class B — wireframe sync, not errors)

The scripts describe a redesigned UI ("MarkPanel," 5-step coding "WorkflowPanel," color-coding toggle, consent modal, "Path Choice" screen + amber disclaimer, `.SLT` upload, paste-transcript). Since the target is a planned redesign, these are **sync risks, not course errors** — but three actions remain:

1. **Sequencing.** Don't release the course before the redesigned UI ships (roadmap Week 8 "replace old course links" assumes it exists). Today's editor is an AI-suggestion ProseMirror editor with none of these elements.
2. **Reconcile against the actual wireframes.** Already in code (course is consistent): 7 sample types, narrative/fable subgroups (FWAY, PGHW…), database auto-recommend + advanced settings, ReportView measures. Found **nowhere** (verify they're in the design): MarkPanel, 5-step WorkflowPanel, color toggle, consent modal, Path Choice, `.SLT` upload, paste-transcript, per-type info buttons, second-speaker/"Examiner" control, participant-ID field, live C-unit footer.
3. **SD bands contradict the engine.** Course teaches "−2 SD = clinical flag"; engine colors at **±1.0 / ±1.5 SD**. Carter's −1.8 NDW renders **red**, not "borderline." Recompute the course's bands (and Carter's interpretation) to ±1.0/1.5, or get a product decision to change the engine.

---

## 7. Product/engine note (separate from the course)

The outlier doc lists `/n't` (`did/n't`) as a standard contraction, but the frontend validator's `VALID_BOUND_MORPHEMES` (`saltValidator.js:16-35`) has `'T` but **not** `'N'T` — so `did/n't` may be flagged. Engine/spec bug; worth a SALT ticket so the convention doc and validator agree.

---

## 8. Prioritized punch list

**Blockers (before any production):**
1. Fix all Class A notation errors (§3) across M4/M5 scripts and Carter's excerpt.
2. Fix the three worked examples (§5), especially the self-check answer.
3. Add the outlier special cases (§4) — recommend a dedicated **"Outlier Codes & Edge Cases"** module/companion; keep M5 for core conventions.

**High:**
4. Build the assessment layer the design principles promise (Try It + per-module checks + a performance-based capstone in M10).
5. Resolve the SD-band contradiction (§6.3) and recompute Carter's numbers.
6. Gate course release on the redesigned UI; reconcile invented UI against the wireframes (§6.1–6.2).

**Medium:**
7. Fix unmeasurable objectives; add cumulative retrieval; deliver or drop the dual-audience "layered depth" claim.
8. File the validator `/n't` ticket (§7).

---

## 9. Suggested next steps (available on request)

- **Validate worked examples against the local `.SLT` practice files** (1303–1308) to catch any remaining mis-codings.
- **Draft corrected content** — rewrite M5 convention sections + the broken self-check, and script a new "Outlier Codes" module from `Outlier codes.docx` in the existing Synthesia tone/format.

---

*Sources: `SALT-Training-Course.docx`; `Outlier codes.docx`; `app/frontend/src/lib/convention-editor/saltValidator.js`, `statsCounter.js`, `src/prompts/convention-editor/analyze.system.txt`; `app/backend/internal/saltscores/` (scores.go, constants.go, macroscores.go); `app/frontend/src/components/salt/lsa/` (new-session-salt.tsx, results-view.tsx, reports/normative-cell.tsx).*
