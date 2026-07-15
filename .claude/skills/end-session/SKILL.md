---
name: end-session
description: Run end-of-session wrap-up — save memories, update component map, commit and push changes
---

Run the end-of-session wrap-up sequence. Do all steps in order:

---

## Step 1 — Memory review

Read the current memory index:
- /Users/ashley/.claude/projects/-Users-ashley-Cobalt/memory/MEMORY.md

Then reflect on this conversation. For each item below, decide: is there anything from this session worth saving that isn't already captured?

- **Feedback**: Did the user correct my approach, confirm an unusual choice, or express a preference I should carry forward?
- **Patterns**: Did we solve a recurring problem (a bug pattern, a build quirk, a UI technique) that will come up again?
- **Project state**: Did we make a design decision, hit a deadline, or change the architecture in a way that context matters for future sessions?
- **Reference**: Did we discover where something lives (a file, a dashboard, a Linear project) that I'd otherwise have to re-find?

For each item worth saving: write a new memory file (or update an existing one) using the standard frontmatter format, then add a pointer line to MEMORY.md. Skip anything that's just "we did X today" or is derivable by reading the code.

---

## Step 2 — Component map check

Check git status in SALTRoadmap to see which source files changed this session:

```bash
git -C /Users/ashley/Cobalt/SALTRoadmap diff --name-only HEAD~5..HEAD 2>/dev/null | grep "src/views"
git -C /Users/ashley/Cobalt/SALTRoadmap diff --name-only 2>/dev/null | grep "src/views"
```

For any `src/views/` file that changed, check whether its entry in `/Users/ashley/Cobalt/SALTRoadmap/CLAUDE.md` is stale (wrong line count or wrong tab offsets). If stale, run `wc -l` and grep for key landmarks (`export default`, `subTab ===`, tab name strings) to get current line numbers, then update the component map entry. If a file isn't in the map yet, add it.

Note: CLAUDE.md is gitignored in SALTRoadmap — the update saves locally but won't be committed. That's expected.

---

## Step 3 — Commit and push

For each repo that has uncommitted changes, commit and push:

```bash
# Check all repos
git -C /Users/ashley/Cobalt/SALTRoadmap status --short
git -C /Users/ashley/Cobalt/spice-rack status --short
git -C /Users/ashley/Cobalt/salt status --short
```

For any repo with changes:
1. Run `git diff --stat` to understand what changed
2. Run `git log --oneline -5` to match the commit style
3. Stage the relevant files (prefer specific filenames over `git add .`)
4. Write a concise commit message that explains *why*, not just what
5. Push to the current branch

Do not push to main if the branch is not main without confirming first.

---

## Step 4 — Done summary

Report back in under 10 lines:
- What memories were saved or updated (list by name)
- Which component map entries were updated (or "none needed")
- Which repos were committed + pushed (or "nothing to commit")
- Any blockers or things that need manual follow-up
