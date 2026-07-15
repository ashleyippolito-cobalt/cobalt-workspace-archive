---
name: daily-standup
description: Generate standup summary from Linear activity, git commits, and release updates
---

Invoke the daily-standup agent for automated standup notes.

```bash
# Last 24h (45s)
/daily-standup

# Last 7 days (45s)
/daily-standup --weekly
```

The agent will:
- Summarize Linear activity (tasks in progress, completed, blocked)
- Pull git commits from spice-rack, spice, SALTRoadmap
- Show release status from releases.json
- Generate markdown standup notes ready to post
