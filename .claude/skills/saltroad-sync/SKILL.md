---
name: saltroad-sync
description: Stage, commit, push SALTRoadmap changes and flag for manual Vercel deploy
---

Sync SALTRoadmap changes to GitHub. Flags work for Levi to manually deploy to Vercel.

```bash
/saltroad-sync
```

The agent will:
- Stage changes in SALTRoadmap repo
- Create a commit with message including deploy flag
- Push to origin
- Output a summary for manual Vercel deployment notification

**Note:** Vercel does NOT auto-deploy from push. Tell Levi after running this.
