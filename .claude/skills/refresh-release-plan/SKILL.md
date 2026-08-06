---
name: refresh-release-plan
description: Refresh SALTRoadmap's Release Plan tab from cobalt-release-plan-web's latest release-data.json
---

# /refresh-release-plan

Re-syncs SALTRoadmap's "Release Plan" tab with the latest snapshot from `cobalt-release-plan-web`.

SALTRoadmap is now the Cobalt Biz Hub Vite/React app (consolidated 2026-08-05) — the conversion
this skill used to do by hand now has a real, checked-in script that does the identical
transform directly into the app's actual data path, so this skill is just a wrapper around it.

## What it does

1. If you want the source JSON to reflect current Linear state rather than whatever was last
   generated, run `/update-universe` first.
2. Run the conversion script from the SALTRoadmap repo:
   ```bash
   cd /Users/ashley/Cobalt/SALTRoadmap
   node scripts/refresh-release-plan.mjs
   ```
   By default it reads `../cobalt-release-plan-web/public/release-data.json` (a sibling clone).
   Pass a path as an argument to point at a different checkout.
3. It writes `SALTRoadmap/src/data/release-plan-config.js` as an ES module
   (`export const SALT_RELEASE_PLAN = {...}`) and prints releases/features/unscheduled/stale
   counts so you can sanity-check the numbers before committing.

Does **not** commit or push — review the diff, then run `npm run dev` from `SALTRoadmap` and
open `/engineering/release-plan` in a browser to eyeball the render before running
`/saltroad-sync`.

## Usage

```
/refresh-release-plan
```

## Notes

- Model Validation's data (`SALTRoadmap/src/data/validation-config.js`, rendered at `/modeling`)
  is **not** covered by this skill — that content is hand-curated from a spreadsheet + eval
  report, not a mechanical JSON transform, so it doesn't have a repeatable refresh path yet.
- `cobalt-release-plan-web`'s own `components/tabs/*.tsx` use a different (live Linear GraphQL)
  schema than `release-data.json`'s flat static schema — don't reuse their field names here.
