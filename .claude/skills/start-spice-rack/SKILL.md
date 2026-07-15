---
name: start-spice-rack
description: Start the spice-rack local development stack (unified SaaS platform)
---

Start the spice-rack local development stack. The repo is at /Users/ashley/Cobalt/spice-rack.

**Context (updated 2026-07-15):** spice-rack's Makefile now hard-requires running inside
the project's Nix devshell (`ifndef IN_NIX_SHELL: $(error ...)`), and the flake only
publishes `devShells` for Linux systems — it does **not** evaluate on `aarch64-darwin`
(this Mac) or any macOS target. There is no way to run `make run-docker` directly on the
host anymore. The old approach (native Go binaries + Docker infra only, bypassing Nix) no
longer applies — the binaries built that way would work, but the Makefile targets that
build/run them will refuse to execute outside the devshell.

**The supported path is a VS Code Dev Container**, documented in
[DEVCONTAINER_SETUP.md](/Users/ashley/Cobalt/spice-rack/DEVCONTAINER_SETUP.md):

1. `git clone git@github.com:cobaltspeech/devbox-main.git` into `~/github/devbox-main`.
2. `code ~/github/devbox-main`, then **Reopen in Container** (Dev Containers extension —
   already installed).
3. Inside the container: `cd /workspaces/devbox-main/projects/spice-rack && ./provision-devcontainer.sh`
   (idempotent, re-run after every rebuild). It installs Nix/Tailscale/direnv *inside* the
   container in userspace mode and runs `direnv allow`.
4. From there, `./run-stack.sh` starts everything (see below for what that launches).

**Current blocker:** `cobaltspeech/devbox-main` is not visible to this GitHub account
(not in the `cobaltspeech` org's repo list, not findable via `gh search repos`) — it may be
team-restricted or not yet pushed. Confirm with whoever wrote DEVCONTAINER_SETUP.md before
this skill can actually run end-to-end.

Host-side prerequisites already done on this machine: Homebrew, `gh` (authenticated),
Nix + direnv + nix-direnv (configured with the Cobalt cache, though unused for spice-rack
specifically since the flake doesn't support macOS), Tailscale (joined to the
`cobaltspeech.com` tailnet), an SSH key added to GitHub, Docker Desktop, and the VS Code
Dev Containers extension.

## Once inside the provisioned devcontainer

Run this using the Bash tool:
```bash
cd /workspaces/devbox-main/projects/spice-rack
./run-stack.sh
```

This is a single long-running foreground script (Ctrl+C tears everything down via its own
trap) that:
- Builds and starts the full Docker stack (postgres, pubsub-emulator, fake-gcs,
  cobalt-server, cp-server, saltier-worker, saltier-waker) via `make run-docker`.
- Waits for migrations (`db-migrate`, `db-grant`, `pubsub-setup`, `fake-gcs-setup`) and for
  cobalt-server's `/healthz`.
- Starts both frontends natively (hot-reload) and a lightweight landing page.
- Optionally forwards Stripe webhooks if the `stripe` CLI is installed and logged in
  (otherwise orgs stay "free" after checkout locally — non-fatal).

Default ports (overridable via `.env` — see `setup-env.sh` for the per-developer
UID-based auto-assignment scheme):
- Landing page: http://localhost:8000/landing.html
- Cobalt Backend (US): http://localhost:8081 (Docker)
- Control Plane Backend: http://localhost:8082 (Docker)
- Cobalt Frontend (US): http://localhost:3000
- Control Plane Frontend: http://localhost:3001

Auth bypass may still be available locally — check `.env`/`AUTH_BYPASS` rather than
assuming, since Clerk-based auth is now in place per spice-rack's CLAUDE.md.

## Notes
- If `.env` doesn't exist yet: `cp .env.example .env` then `./setup-env.sh` before first run.
- `stop-spice-rack` skill handles teardown.
