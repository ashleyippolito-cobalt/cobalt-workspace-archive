---
name: integration-branches
description: Track integration branches and their merge status across dev/staging/master
---

View the status of all integration branches (dev, staging, master) and which branches are ahead/behind.

```bash
/integration-branches
```

**Context (confirmed 2026-07-15):** the three repos don't share one branch model —
check per repo rather than assuming dev/staging/master everywhere:
- **spice-rack** — has all three: `dev`, `staging`, `master`
- **spice** — has `dev` and `master` only, no `staging` branch
- **SALTRoadmap** — single-branch (`main` only), deployed via Vercel, not part of an
  integration pipeline at all; skip it for merge-status purposes

The agent will:
- Fetch latest from spice-rack and spice (SALTRoadmap has no integration branches to track)
- Show merge status for each integration branch that actually exists per repo
- Flag branches that need merging
- List commits ahead/behind each branch
