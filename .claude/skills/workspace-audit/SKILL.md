---
name: workspace-audit
description: Full local-disk audit of the Cobalt workspace — orphaned files, duplicates, stale docs, gitlink drift, disk bloat
---

# /workspace-audit

Local-disk workspace health check. Built 2026-07-16 after a one-off audit found a 328MB orphaned Python venv, duplicate release-plan data, stale pre-reorg docs, and broken git-submodule entries all sitting undetected in `/Users/ashley/Cobalt`. This skill re-runs that same methodology on demand.

**This is read-only by default.** Report findings; only delete/modify files if Ashley explicitly confirms after reviewing the report — same as the original audit.

Complements the `Cobalt Workspace Archive - Weekly Audit` cloud routine (runs automatically every Friday 9am ET), which only sees what's tracked in the `cobalt-workspace-archive` GitHub repo. This skill covers everything that routine structurally cannot: local-only files, sibling product repos, and the local dev environment.

## What to check

1. **Top-level disk usage** — `du -sh` on every top-level entry in `/Users/ashley/Cobalt`. Flag anything unexpectedly large.
2. **Orphaned untracked files/dirs** — anything untracked in the archive repo (`git status --short`) that's large (>10MB), unreferenced by any doc/skill, and doesn't look like an active sibling repo. Venvs, build caches (`.next/`, `node_modules/` sitting outside a real project), and old exports are the usual suspects.
3. **Duplicate content** — same approach as the cloud routine's check, but across the *whole* workspace including sibling repos and their generated output, not just the archive repo's tracked files. Byte-identical files at different paths.
4. **Stale docs** — root-level and `docs/*.md` files whose content contradicts the current `CLAUDE.md`, or that reference paths/files that no longer exist anywhere on disk (not just in this repo).
5. **Gitlink/submodule drift** — `git ls-tree HEAD` in the archive repo for any `160000` (gitlink) entries; cross-check against `.gitmodules` (should be none, per the 2026-07-16 fix — flag if any reappear).
6. **Sibling repo sanity** — for each of spice-rack, salt, spice, SALTRoadmap, internal-tools, cobalt-release-plan-web: `git status --short` (uncommitted/unpushed work) and a rough size check for anything anomalously large (a single file >20MB outside `node_modules`/`.git` is worth flagging).
7. **Dev environment spot-check** — quick confirmation that Node/npm, Xcode command-line tools, and other environment-dependent tooling mentioned in memory (`new_laptop_environment_rebuild`) still match their last-known state; flag if something that used to work now doesn't, or vice versa.

## Output

A short report, ranked by confidence/impact (same structure as the 2026-07-16 audit): clear wins first, lower-confidence items flagged for Ashley's call, trivial cosmetic items last. Don't delete or modify anything without her explicit go-ahead on each item.

## Usage

```
/workspace-audit
```

Run it whenever — there's no enforced cadence. The Friday cloud routine handles the automatic recurring half of this; this skill is for the local half, whenever it's convenient to run.
