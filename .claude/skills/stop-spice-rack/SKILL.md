---
name: stop-spice-rack
description: Stop the spice-rack local development stack
---

Stop the spice-rack local development stack.

**Context (updated 2026-07-15):** spice-rack now runs inside the `devbox-main` VS Code
dev container (see start-spice-rack skill) via `./run-stack.sh`, which is a foreground
script — the normal way to stop it is just Ctrl+C in that terminal, which triggers its own
cleanup trap (kills the native frontend jobs, then runs `stop-stack.sh` for Docker teardown).

If that terminal isn't available, run this from inside the devcontainer using the Bash tool:
```bash
cd /workspaces/devbox-main/projects/spice-rack
./stop-stack.sh
```

If working directly in the spice-rack repo outside the devcontainer (host mac, no Nix
devshell available), `stop-stack.sh` itself doesn't require the Nix guard — only `make`
targets do. It should still be safe to run from the host to release ports and tear down
Docker:
```bash
cd /Users/ashley/Cobalt/spice-rack
./stop-stack.sh 2>/dev/null || docker compose --env-file .env down
```

Confirm all services are stopped and print a brief summary.
