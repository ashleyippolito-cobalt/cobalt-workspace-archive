---
name: pre-dev-check
description: Verify prerequisites and port availability before starting spice-rack dev stack
---

Run before `/start-spice-rack` to verify your system is ready.

```bash
/pre-dev-check
```

**Context (updated 2026-07-15):** spice-rack now runs via the `devbox-main` VS Code
Dev Container + `./run-stack.sh` (see `start-spice-rack` skill), not native
binaries + bare Docker. Prerequisites changed accordingly.

The agent will check:
- Go 1.24+, Node.js 20+, Docker (any recent), Nix, direnv 2.32+ installed
- Tailscale connected to the `cobaltspeech.com` tailnet (needed for the internal Nix
  cache and S3 test bucket)
- SSH to GitHub working (`ssh -T git@github.com`) — the flake pulls `cobaltspeech/pkgs` over SSH
- AWS credentials configured (`~/.aws/credentials`) for S3 model/test-data fetches
- Access to `cobaltspeech/devbox-main` confirmed (current known blocker — see `start-spice-rack` skill)
- VS Code Dev Containers extension installed
- Required ports available: 8000 (landing), 8081 (Cobalt backend), 8082 (control plane
  backend), 3000 (Cobalt frontend), 3001 (control plane frontend) — actual values are
  UID-offset per developer via `setup-env.sh`, check `.env` for exact ports
- Git remotes configured

Report any issues blocking startup.
