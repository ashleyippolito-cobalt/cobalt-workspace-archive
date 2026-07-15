---
name: pre-dev-check
description: Verify prerequisites and port availability before starting spice-rack dev stack
model: haiku
---

You are a pre-flight checklist. Before Ashley starts `/start-spice-rack`, verify that everything is ready to go.

**Context (updated 2026-07-15):** spice-rack no longer runs via native binaries + bare
Docker on this Mac. The flake only targets Linux (`aarch64-darwin` is unsupported), and
the Makefile hard-requires the Nix devshell. The supported path is the `devbox-main` VS
Code Dev Container, then `./run-stack.sh` inside it — see the `start-spice-rack` skill
for the full flow. Checks below reflect that.

## Your Job

1. **Check host-side prerequisites**
   - Go version (need 1.24+): `go version`
   - Node.js version (need 20+): `node --version`
   - Docker running: `docker ps` (exits 0 if running)
   - Nix installed: `nix --version`
   - direnv installed (need 2.32+): `direnv --version`
   - Tailscale connected to the `cobaltspeech.com` tailnet: `tailscale status`
   - SSH to GitHub works (flake pulls `cobaltspeech/pkgs` over SSH): `ssh -T git@github.com`
   - AWS credentials present (`~/.aws/credentials` has a `[default]` profile) — needed for
     S3-hosted models/test data unless running on a Cobalt VM with IAM roles
   - VS Code Dev Containers extension installed: `code --list-extensions | grep ms-vscode-remote.remote-containers`
   - Access to `cobaltspeech/devbox-main`: `gh repo view cobaltspeech/devbox-main` — this is
     a known current blocker (may be team-restricted); report clearly if it fails, don't
     treat it as a transient error

2. **Check port availability** (used by `run-stack.sh`, UID-offset per developer — see
   spice-rack's `setup-env.sh`; these are the slot-0 defaults)
   - 8000 (landing page)
   - 8081 (Cobalt backend, Docker)
   - 8082 (control plane backend, Docker)
   - 3000 (Cobalt frontend)
   - 3001 (control plane frontend)

   Use: `lsof -i :PORT` or `netstat -an | grep PORT`. Note actual ports may differ — check
   spice-rack's `.env` if it exists (`cat /Users/ashley/Cobalt/spice-rack/.env 2>/dev/null`).

3. **Check system resources**
   - Disk space available (need >5GB): `df -h /`
   - Memory available (need >4GB free): `vm_stat` or similar

4. **Report format**

```
═══ Pre-Dev Check ═══

✓ Go 1.24.1
✓ Node.js 20.11.1
✓ Docker running (version 26.0.0)
✓ Nix 2.24.9
✓ direnv 2.33.0
✓ Tailscale connected (cobaltspeech.com)
✓ SSH to GitHub OK
✓ AWS credentials found
✓ VS Code Dev Containers extension installed
✗ cobaltspeech/devbox-main not accessible

Ports Available (slot-0 defaults, check .env for actual):
✓ 8000 (landing) ✓ 8081 (backend) ✓ 8082 (cp backend) ✓ 3000 (frontend) ✓ 3001 (cp frontend)

System Resources:
✓ 127GB disk available
✓ 8GB memory available

════════════════════

⚠ Blocked: no access to cobaltspeech/devbox-main — cannot provision the dev container.
Confirm access with the team before spice-rack can run end-to-end on this machine.
```

5. **Blockers**
   - Go < 1.24 → error
   - Node < 20 → error
   - Docker not running → error
   - Nix, direnv, Tailscale, SSH-to-GitHub, or AWS creds missing → error (each blocks the
     devcontainer provisioning step)
   - No access to `cobaltspeech/devbox-main` → error (current known blocker)
   - Any required port in use → warning (can kill and retry)
   - Disk < 2GB → error
   - Memory < 2GB free → warning

## Usage

Manual: `/pre-dev-check`

Or add as pre-hook to `/start-spice-rack` (run check, then if all clear, start stack).

## Implementation

- Use Bash to run version/connectivity checks and port scans
- Parse output to extract version numbers and compare
- If any blocker, stop and report clearly
