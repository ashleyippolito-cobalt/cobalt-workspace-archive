---
name: refresh-release-plan
description: Refresh SALTRoadmap's Release Plan tab from cobalt-release-plan-web's latest release-data.json
---

# /refresh-release-plan

Re-syncs SALTRoadmap's "Release Plan" tab with the latest snapshot from `cobalt-release-plan-web`. Built 2026-07-16 to replace the one-off Python script originally used to build that tab — same conversion, now a repeatable command.

## What it does

1. Reads `/Users/ashley/Cobalt/cobalt-release-plan-web/public/release-data.json`. If you want this to reflect current Linear state rather than whatever was last generated, run `/update-universe` first.
2. Transforms it into the shape SALTRoadmap's Release Plan tab expects:
   - `releases` → `releases`
   - `features_by_release` → `features`
   - `not_in_a_release` → `unscheduled`
   - `summary.stale_flagged_count` → `staleCount`
3. Writes the result to `/Users/ashley/Cobalt/SALTRoadmap/data/release-plan-config.js` as `window.SALT_RELEASE_PLAN = {...}`, preserving the header comment convention used by the other `data/*.js` files.
4. Reports releases/features/unscheduled/stale counts so you can sanity-check the numbers before committing.

Does **not** commit or push — review the diff in SALTRoadmap (`index.html#release`) and run `/saltroad-sync` when you're happy with it.

## Usage

```
/refresh-release-plan
```

## Implementation

```python
import json

with open('/Users/ashley/Cobalt/cobalt-release-plan-web/public/release-data.json') as f:
    data = json.load(f)

payload = {
    'snapshot_date': data['snapshot_date'],
    'generated_date': data['generated_date'],
    'source': data['source'],
    'releases': data['releases'],
    'features': data['features_by_release'],
    'unscheduled': data['not_in_a_release'],
    'staleCount': data['summary']['stale_flagged_count'],
}

body = json.dumps(payload, indent=2, ensure_ascii=False).replace('</script', '<\\/script')

header = (
    "// ─────────────────────────────────────────────────────────────────────────────\n"
    "// SALT RELEASE PLAN — data for the \"Release Plan\" tab\n"
    "//\n"
    "// Static snapshot copied from cobalt-release-plan-web's public/release-data.json.\n"
    "// Refresh via the refresh-release-plan skill, not by hand — it re-derives this\n"
    "// exact conversion. Run /update-universe first for current Linear state.\n"
    "//\n"
    "// releases[]    — the named release packages (major + minor/sub-releases)\n"
    "// features[]    — line items grouped under each release\n"
    "// unscheduled[] — open Core Team issues not yet assigned to a release\n"
    "// ─────────────────────────────────────────────────────────────────────────────\n\n"
)

with open('/Users/ashley/Cobalt/SALTRoadmap/data/release-plan-config.js', 'w', encoding='utf-8') as f:
    f.write(header + "window.SALT_RELEASE_PLAN = " + body + "\n")

print(f"releases={len(payload['releases'])} features={len(payload['features'])} "
      f"unscheduled={len(payload['unscheduled'])} stale={payload['staleCount']}")
```

After running, syntax-check the output before trusting it — Node isn't installed on this machine, so use the `osascript -l JavaScript` + `new Function(code)` trick (extract the inline `<script>` block and the new data file, run each through JavaScriptCore) rather than assuming it's valid. Then open `SALTRoadmap/index.html#release` in a browser to eyeball the render before committing.

## Notes

- Model Validation's data (`SALTRoadmap/data/validation-config.js`) is **not** covered by this skill — that content is hand-curated from a spreadsheet + eval report, not a mechanical JSON transform, so it doesn't have a repeatable refresh path yet.
- `cobalt-release-plan-web`'s own `components/tabs/*.tsx` use a different (live Linear GraphQL) schema than `release-data.json`'s flat static schema — don't reuse their field names here.
