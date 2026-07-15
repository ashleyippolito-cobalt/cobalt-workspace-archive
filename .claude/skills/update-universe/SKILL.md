---
name: update-universe
description: Update release plan dashboard with live Linear data and commit to GitHub
---

# /update-universe

Updates the Cobalt Release Plan dashboard with comprehensive live Linear data and commits to GitHub.

## What it pulls from Linear

- **CORE-1189 umbrella** — the Releases issue
- **All named release bundles** — Mars, Mercury, Saturn, Lyra, Pluto, Earth, Orion, Neptune, Rust, Transcriber Portal 1.1, etc.
- **Sub-releases** — child releases under major releases (e.g., Bull under Orion)
- **All features/line items** — from each release's bundle manifest
- **Unscheduled Core Team items** — open issues (In Progress, In Review, In QA, Todo) not part of any release
- **Issue metadata** — status, assignee, project, priority, labels for each item

## What it does

1. Queries Linear API comprehensively (all releases, manifests, unscheduled)
2. Filters out scheduled items and their parents
3. Updates `/Users/ashley/Cobalt/Ashley/cobalt-release-plan-web/public/release-data.json`
   (confirmed 2026-07-15: the repo lives under `Ashley/`, not at the Cobalt root)
4. Commits and pushes to GitHub
5. Vercel auto-redeploys within seconds — unverified from local files; if it turns out
   Vercel isn't auto-deploying from this repo (as is the case for SALTRoadmap, see
   `saltroad-sync` skill), flag it manually the same way

## Usage

```bash
/update-universe
```

Or use before starting session:
```bash
/start-session
```

Both will refresh the release plan dashboard.

## Requirements

- LINEAR_API_KEY in environment (from https://linear.app/settings/api)
- Git configured with push access to cobalt-release-plan-web

## Example output

```
🔄 Fetching release data from Linear...
✓ Found 8 releases
✓ Release data saved to public/release-data.json
  • Releases: 8
  • Unscheduled items: 24
  • Updated: Jan 3, 2025, 2:45 PM
✓ Committed and pushed to GitHub
```

The dashboard will show fresh data within seconds.
