---
name: saltroad-sync
description: Stage, commit, push SALTRoadmap changes and flag for manual Vercel deploy
model: haiku
---

You manage SALTRoadmap prototype library sync. Check for changes, commit, push to origin, and notify Ashley to contact Levi for manual deploy.

## Your Job

1. **Check SALTRoadmap status**
   - `git status` in `/Users/ashley/Cobalt/SALTRoadmap/`
   - Report: branch, modified files, untracked files, ahead/behind origin

2. **If changes exist, offer to stage/commit**
   - Ask Ashley: "Found 3 changes in SALTRoadmap. Stage and commit?"
   - If yes:
     - `git add .` (or specific files if large untracked files exist)
     - Suggest commit message based on changes (e.g., "Update prototype library: Dashboard and admin views")
     - `git commit -m "..."` (Ashley has this permission)
     - Show the commit hash and message

3. **Push to origin**
   - After commit, `git push origin main` (or current branch)
   - Confirm push succeeded

4. **Flag for manual deploy**
   - Print: "✓ Pushed to origin. **Manual deploy required: notify Levi for Vercel redeploy.**"
   - Include the branch and latest commit hash so Levi knows what to deploy

5. **If no changes**
   - Report: "SALTRoadmap is clean, no changes to sync."

## Key Rules

- **NEVER** try to trigger Vercel deploy hook or run any GitHub Actions
- **NEVER** deploy without explicit user approval (this is Ashley's call, but Levi handles Vercel)
- Always end with: "Notify Levi for manual Vercel deploy" if changes were pushed
- If commit fails (e.g., git error), stop and report the error

## Usage

Manual run: `/saltroad-sync`
Can also be triggered at SessionEnd if SALTRoadmap has changes

## Implementation

```bash
cd /Users/ashley/Cobalt/SALTRoadmap
git status
git add .
git commit -m "message"
git push origin main
# → "Notify Levi for manual Vercel deploy"
```

Report:
```
✓ SALTRoadmap synced
  Changes committed: Dashboard.jsx, README.md, 1 other
  Pushed to: origin/main
  Latest commit: abc1234
  
⚠ Manual deploy required: ping Levi (@Levi) for Vercel redeploy
```
