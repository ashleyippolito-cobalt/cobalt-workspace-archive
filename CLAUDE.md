# Cobalt Workspace

Clinical speech-language AI platform. HIPAA/FERPA/COPPA-sensitive — no PII in logs or outputs.

## Workspace layout

```
/Users/ashley/Cobalt/
├── spice-rack/       # Main Cobalt SaaS product (SALT + SPICE platform)
├── salt/             # Standalone SALT SaaS transcription stack
├── spice/            # SPICE Go service (speech evaluation)
├── internal-tools/   # Cobalt infra/Nix config (cloned for SSH key PR)
├── SALTRoadmap/      # UI/UX prototype library — live at saltroadmap.vercel.app
│   ├── development/salt-prototype-suite/  # React 19 + Vite source (4 build modes)
│   ├── mock-ups/*/v2/          # Built output — one dir per persona (salt-saas/transcriber/transcription-admin/admin)
│   ├── context/handoff-docs/   # CLAUDE.md (authoritative), ASHLEYCHANGES.md, DEV_GUIDE.md
│   └── index.html              # Prototype Library landing page (open directly in browser)
├── cobalt-release-plan-web/  # Live Linear-backed release-plan dashboard (Next.js) — source for SALTRoadmap's Release Plan tab
└── Ashley/           # Ashley's personal projects + validation work
    └── validation/             # SALT24 validation tooling + data
        ├── src/pipeline/           # Agreement validation pipeline (Python)
        ├── synthetic_salt_corpus/  # Synthetic SALT transcript generator
        ├── test-artifacts/         # Validation results + handouts
        ├── input/                  # gold/ and novel/ CSV folders
        ├── output/                 # Stats CSVs + plots
        ├── config.yaml             # Pipeline config
        ├── requirements.txt        # Python deps
        └── README.md               # Validation docs
```

## Running things locally (Intel Mac — Nix devshell is Linux-only)

### spice-rack (main SaaS stack)
Use `/start-spice-rack` slash command. Runs:
- Docker: postgres (5532), pubsub-emulator (8085), fake-gcs (4543)
- Native Go: cobalt-server (:8181), cp-server (:8182)
- Native Next.js: app frontend (:3100), control plane frontend (:3101)

Binary location: `spice-rack/bin/cobalt-server`, `spice-rack/bin/cp-server`
Logs: `/tmp/cobalt-server.log`, `/tmp/cp-server.log`

To rebuild Go binaries:
```bash
cd /Users/ashley/Cobalt/spice-rack
GONOSUMDB="github.com/cobaltspeech/*" GOPRIVATE="github.com/cobaltspeech/*" \
  go build -o bin/cobalt-server ./app/backend/cmd/cobalt-server/
GONOSUMDB="github.com/cobaltspeech/*" GOPRIVATE="github.com/cobaltspeech/*" \
  go build -o bin/cp-server ./controlplane/backend/cmd/cp-server/main.go
```

### salt (standalone SALT SaaS)
Use `/start-salt` slash command. Runs:
- Docker: postgres (:5432, container: salt-sass-postgres-1)
- Native Go: salt-sass-server (:8080)

Binary: `salt/bin/salt-sass-server`
Health: `GET http://localhost:8080/health`
Log: `/tmp/salt-sass.log`

To rebuild:
```bash
cd /Users/ashley/Cobalt/salt
GONOSUMDB="github.com/cobaltspeech/*" GOPRIVATE="github.com/cobaltspeech/*" \
  go build -o bin/salt-sass-server ./apps/salt-sass/cmd/salt-sass-server/
```

**Saltier worker (transcription):** blocked on AWS credentials. Once available:
```bash
cd /Users/ashley/Cobalt/salt && make fetch-models
cd apps/salt-sass && docker compose -f docker-compose.yml -f docker-compose.local.yml up --build saltier-worker
```
`Dockerfile.local` at `salt/py/saltier/Dockerfile.local` uses CPU base (no CUDA needed on Mac).

## SALT24 validation pipeline

Compares SALT Software v24 gold-standard outputs against Cobalt model outputs.

```bash
# Quick run (or use /run-validation slash command)
cd /Users/ashley/Cobalt/Ashley/validation
python -m pipeline.cli --gold input/gold --novel input/novel --config config.yaml --out output
```

Metrics: Cohen's kappa (categorical), ICC(3,1), Pearson/Spearman correlation, Bland-Altman.
Output: `Ashley/validation/output/summary_stats.csv`, `Ashley/validation/output/per_measure_stats.csv`, `Ashley/validation/output/plots/`

To swap in new model output: replace CSVs in `Ashley/validation/input/novel/` and re-run.

## Key constraints

- PyTorch has no macOS x86_64 wheels — saltier-worker must run in Docker (Linux container)
- Nix flake (`flake.nix`) only targets `x86_64-linux` — skip `direnv allow` / `nix develop` entirely
- Private Go dep: `github.com/cobaltspeech/codec` — always build with `GONOSUMDB` + `GOPRIVATE` set
- cobalt.cfg.toml patched: `Bind = ":8181"`, `LocalDir` set for filesystem storage

## Slash commands

| Command | What it does |
|---|---|
| `/start-spice-rack` | Start full spice-rack stack |
| `/stop-spice-rack` | Stop spice-rack stack |
| `/start-salt` | Start salt API stack |
| `/run-validation` | Run SALT24 validation pipeline + open report |

## Linear

Connected via MCP (OAuth, no static token). Three teams: Core Team, Training, HMIS-Africa.

Key Core Team projects:
- **SALT: Web App Core** — engineering implementation work
- **SALT: UI/UX Design** — mockup/design work; SALTRoadmap repo; people: Ashley (lead), Levi, Guillermo (dev impl), Jeremy Blair (CC/review)
  - CORE-891 UI Mockups (in-progress) → children: CORE-764 Editor, CORE-892 Education, CORE-865 Admin Dashboard, CORE-893 SPICE
  - CORE-894 Mockups ready for dev team → CORE-895 Implement Editor Mockup (assigned: Guillermo Segovia)
