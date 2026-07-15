---
name: integration-branches
description: Track integration branches and their merge status across dev/staging/master
---

View the status of all integration branches (dev, staging, master) and which branches are ahead/behind.

```bash
/integration-branches
```

The agent will:
- Fetch latest from all repos (spice-rack, spice, SALTRoadmap)
- Show merge status for each integration branch
- Flag branches that need merging
- List commits ahead/behind each branch
