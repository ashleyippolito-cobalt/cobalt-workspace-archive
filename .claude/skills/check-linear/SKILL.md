---
name: check-linear
description: Query Linear for session activity, identify new/changed items, update releases.json
---

Invoke the check-linear agent with optional `--quick` flag for summary mode.

```bash
# Quick mode (30-60s): summary counts + releases snapshot
/check-linear --quick

# Full mode (2-3 min): detailed list of all assigned tasks + UI/UX activity
/check-linear
```

The agent will:
- Query Core Team tasks assigned to you
- Check UI/UX Design project activity (last 24h)
- Update releases.json with current release status
- Report activity summary with blockers and stale items
