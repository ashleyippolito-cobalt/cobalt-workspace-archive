---
name: start-salt
description: Start the salt local development stack (Go API + Postgres)
---

Start the salt local development stack. The repo is at /Users/ashley/Cobalt/salt.

**Context (updated 2026-07-15):** Like spice-rack, salt's Makefile now hard-requires the
project's Nix devshell (`ifndef IN_NIX_SHELL`), and that flake is Linux-only — it will not
evaluate on this Mac (`aarch64-darwin`). The old approach in this skill (build
`salt-sass-server` natively with plain `go build`, bypassing `make`/Nix entirely) still
works **only if you don't need any `make` target** — building via bare `go build` doesn't
go through the Makefile guard, so it's viable for salt specifically, unlike spice-rack
where `run-stack.sh` shells out to `make run-docker` directly. Confirmed: the Nix guard is a
blanket check at the top of the Makefile, so `make fetch-models` unambiguously hits the same
guard as `make run-docker` — it's still blocked on AWS credentials (`#engineering`) regardless.

If a devcontainer becomes available for salt (check whether `cobaltspeech/devbox-main`
covers salt the same way it covers spice-rack — currently blocked, this account can't see
that repo), prefer that over the native-build workaround below.

## Native-build workaround (unverified since the Nix-requirement discovery — confirm `go build` still works before relying on this)

## 1. Start Postgres
```bash
cd /Users/ashley/Cobalt/salt/apps/salt-sass
docker compose up -d postgres
```
Wait until `docker exec salt-sass-postgres-1 pg_isready -U salt -d salt_saas` succeeds.

## 2. Build the binary (bare go build, not via make)
```bash
cd /Users/ashley/Cobalt/salt
GONOSUMDB="github.com/cobaltspeech/*" GOPRIVATE="github.com/cobaltspeech/*" \
  go build -o bin/salt-sass-server ./apps/salt-sass/cmd/salt-sass-server/
```

## 3. Run migrations
```bash
DATABASE_URL="postgres://salt:salt_local@localhost:5432/salt_saas" \
  /Users/ashley/Cobalt/salt/bin/salt-sass-server \
  -config /Users/ashley/Cobalt/salt/apps/salt-sass/configs/salt-sass.config.toml \
  migrate up
```

## 4. Start salt-sass-server (native, port 8080)
```bash
DATABASE_URL="postgres://salt:salt_local@localhost:5432/salt_saas" \
  /Users/ashley/Cobalt/salt/bin/salt-sass-server \
  -config /Users/ashley/Cobalt/salt/apps/salt-sass/configs/salt-sass.config.toml \
  > /tmp/salt-sass.log 2>&1 &
```
Poll until `curl -s http://localhost:8080/health` returns `{"status":"healthy"}`.

## 5. Print status summary
Show a table confirming all services are up:
- Salt SaaS API: http://localhost:8080
- Health: http://localhost:8080/health
- Create job: POST http://localhost:8080/api/salt/v1/jobs/transcribe

Note: Jobs will reach AWAITING_AUDIO → QUEUED state but won't process until the saltier
worker is running (needs AWS model files — run `make fetch-models` from
/Users/ashley/Cobalt/salt once credentials arrive; this will still hit the Nix guard, same
as every other `make` target in this repo).

## Notes
- Log: /tmp/salt-sass.log
- Binary: /Users/ashley/Cobalt/salt/bin/salt-sass-server
- Config: /Users/ashley/Cobalt/salt/apps/salt-sass/configs/salt-sass.config.toml
- Storage: filesystem, writing to /tmp/salt-saas-storage
- Queue: in-memory (no Pub/Sub needed for API layer)
- To stop: `pkill -f "salt-sass-server"` then `cd /Users/ashley/Cobalt/salt/apps/salt-sass && docker compose down`
- Once AWS credentials arrive: `make fetch-models` then `docker compose -f docker-compose.yml up --build saltier-worker` (saltier-worker runs CPU-only by default now — no separate `.local` compose override or Dockerfile needed; GPU is an opt-in overlay via `docker-compose.gpu.yml`)
