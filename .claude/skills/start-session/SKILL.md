---
name: start-session
description: Load memory, check settings, update repos, verify session readiness
---

Read and load the following memory files in full, then read the global and project Claude settings files, then check for repo updates, then give a brief session-ready summary:

Memory files:
- /Users/ashley/.claude/projects/-Users-ashley-Cobalt/memory/user_profile.md
- /Users/ashley/.claude/projects/-Users-ashley-Cobalt/memory/feedback_style.md
- /Users/ashley/.claude/projects/-Users-ashley-Cobalt/memory/project_cobalt_overview.md
- /Users/ashley/.claude/projects/-Users-ashley-Cobalt/memory/project_cobalt_architecture.md
- /Users/ashley/.claude/projects/-Users-ashley-Cobalt/memory/project_cobalt_pipeline.md

Settings files:
- /Users/ashley/.claude/settings.json
- /Users/ashley/Cobalt/.claude/settings.local.json

Repo update check — run these four commands (they are fast, read-only fetches):
```bash
git -C /Users/ashley/Cobalt/salt fetch origin --quiet 2>/dev/null && git -C /Users/ashley/Cobalt/salt rev-list HEAD..origin/$(git -C /Users/ashley/Cobalt/salt symbolic-ref --short HEAD 2>/dev/null || echo main) --count 2>/dev/null
git -C /Users/ashley/Cobalt/spice fetch origin --quiet 2>/dev/null && git -C /Users/ashley/Cobalt/spice rev-list HEAD..origin/$(git -C /Users/ashley/Cobalt/spice symbolic-ref --short HEAD 2>/dev/null || echo main) --count 2>/dev/null
git -C /Users/ashley/Cobalt/spice-rack fetch origin --quiet 2>/dev/null && git -C /Users/ashley/Cobalt/spice-rack rev-list HEAD..origin/$(git -C /Users/ashley/Cobalt/spice-rack symbolic-ref --short HEAD 2>/dev/null || echo master) --count 2>/dev/null
git -C /Users/ashley/Cobalt/SALTRoadmap fetch origin --quiet 2>/dev/null && git -C /Users/ashley/Cobalt/SALTRoadmap rev-list HEAD..origin/$(git -C /Users/ashley/Cobalt/SALTRoadmap symbolic-ref --short HEAD 2>/dev/null || echo main) --count 2>/dev/null
```

After reading all files and running the fetch, confirm:
1. Email verified: ashley@cobaltspeech.com
2. Memory loaded (list the 5 memory files by name)
3. Permissions active (summarize allowed commands)
4. One-line current project status from project_cobalt_overview.md
5. Repo update status — for each of salt, spice, spice-rack, SALTRoadmap: show "up to date" or "N commits behind" with a note to pull if behind

Keep the summary tight — 15 lines max.
