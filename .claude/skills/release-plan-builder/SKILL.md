---
name: release-plan-builder
description: Generate Cobalt release-plan spreadsheet from Linear (XLSX with 4 tabs)
---

Generate the release plan dashboard spreadsheet from live Linear data.

```bash
/release-plan-builder
```

The agent will:
- Query CORE-1189 "Releases" umbrella
- Extract all named release bundles (Mars, Mercury, Saturn, etc.)
- Read open Core Team issues
- Generate 4-tab XLSX workbook:
  1. **Release Packages** — major/minor nesting
  2. **Features by Release** — with environment checkboxes + stale-status flags
  3. **Not in a Release** — open unassigned issues
  4. **Legend** — status definitions

Default output: `~/Desktop/cobalt-release-plan.xlsx` (or wherever you ask for — the agent takes the path in plain language, e.g. "save to my Desktop").

Use when you need to refresh the release dashboard from Linear.
