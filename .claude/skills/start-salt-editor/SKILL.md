---
name: start-salt-editor
description: Start the SALT Convention Editor (local AI-assisted SALT transcript editor)
---

Start the SALT Convention Editor (salt-convention-editor-sample). Repo is expected at /Users/ashley/Cobalt/prototypes/salt-convention-editor-sample.

This is a local-only AI-assisted SALT transcript editor. It uses an LLM (OpenAI, Gemini, or OpenRouter) to propose inline edits.

**Known issue (confirmed 2026-07-15):** this repo is not present anywhere on this machine
— not at the path above, not found in a broader disk search. It may not have been
re-cloned after the laptop rebuild (see [[new-laptop-environment-rebuild]]), or the repo
name/location may have changed. Before running the steps below, check for it first:

```bash
ls -d /Users/ashley/Cobalt/prototypes/salt-convention-editor-sample 2>/dev/null || echo "MISSING"
```

If missing, stop and tell the user the repo needs to be located or re-cloned before this
skill can run — don't silently skip to a guessed path.

## 1. Check for .env.local
```bash
ls /Users/ashley/Cobalt/prototypes/salt-convention-editor-sample/.env.local 2>/dev/null || echo "MISSING"
```
If missing, copy from .env.example and warn the user:
```bash
cp /Users/ashley/Cobalt/prototypes/salt-convention-editor-sample/.env.example \
   /Users/ashley/Cobalt/prototypes/salt-convention-editor-sample/.env.local
```
Then tell the user: "⚠️  .env.local created from .env.example — edit it to add your OPENAI_API_KEY (or set LLM_PROVIDER=gemini and run `gcloud auth application-default login`)."

## 2. Install dependencies if needed
```bash
ls /Users/ashley/Cobalt/prototypes/salt-convention-editor-sample/node_modules 2>/dev/null | wc -l
```
If 0, run:
```bash
cd /Users/ashley/Cobalt/prototypes/salt-convention-editor-sample && npm install 2>&1 | tail -3
```

## 3. Start dev server on port 3200
```bash
cd /Users/ashley/Cobalt/prototypes/salt-convention-editor-sample && npm run dev -- --port 3200 > /tmp/salt-editor.log 2>&1 &
echo "PID: $!"
```
Poll until `curl -s http://localhost:3200` responds (up to 30s).

## 4. Print status summary
| Service | URL | Status |
|---|---|---|
| SALT Convention Editor | http://localhost:3200 | ✅ |

Notes:
- Log: /tmp/salt-editor.log
- Needs OPENAI_API_KEY in .env.local (or LLM_PROVIDER=gemini with gcloud ADC)
- To stop: `pkill -f "next dev.*3200"` or `pkill -f "salt-convention-editor"`
- No auth by default (SITE_PASSWORD unset in .env.local)
