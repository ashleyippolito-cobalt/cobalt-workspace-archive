# Cobalt Workspace

Clinical speech-language AI platform. HIPAA/FERPA/COPPA-sensitive — no PII in logs or outputs.

## Workspace layout

```
/Users/ashley/Cobalt/
├── spice-rack/       # Main Cobalt SaaS product (SALT + SPICE platform)
├── salt/             # Standalone SALT SaaS transcription stack
├── spice/            # SPICE Go service (speech evaluation)
├── internal-tools/   # Cobalt infra/Nix config (cloned for SSH key PR)
├── SALTRoadmap/      # Cobalt Biz Hub — Vite/React SPA (consolidated 2026-08-05), live at saltroadmap.vercel.app
│   ├── src/                    # Biz Hub app: pages/ (Overview, Product, Engineering, Modeling, Revenue Ops, Rocks-Pebbles-Sand, Stakeholder Feedback), components/, data/
│   ├── development/salt-prototype-suite/  # Legacy React 19 + Vite prototype source (4 build modes) — still used to build mock-up snapshots
│   ├── public/mock-ups/*/      # Built prototype output — one dir per persona (salt-saas/transcriber/transcription-admin/admin)
│   ├── context/handoff-docs/   # CLAUDE.md (authoritative component map), ASHLEYCHANGES.md, DEV_GUIDE.md
│   └── index.html              # Vite SPA entry point (run `npm run dev`, don't open directly)
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

## Running things locally (macOS — Nix devshell is Linux-only)

### spice-rack (main SaaS stack)
Use `/start-spice-rack` slash command. Post-2026-08-04 reorg, the repo's own `QUICKSTART.md`
is the source of truth for this — ports are auto-assigned per-UID via `./setup-env.sh`, but
the defaults you'll typically see are:
- Docker: cobalt-server (:8081), landing page (:8000)
- Control plane: cp-server (:8082), cp frontend (:3001)
- App frontend (:3000)

Binary location: `spice-rack/bin/cobalt-server`, `spice-rack/bin/cp-server`
Logs: `/tmp/cobalt-server.log`, `/tmp/cp-server.log`

To rebuild Go binaries (paths moved to repo root in the 2026-08-04 reorg — no longer under
`app/backend/cmd/` or `controlplane/backend/cmd/`):
```bash
cd /Users/ashley/Cobalt/spice-rack
GONOSUMDB="github.com/cobaltspeech/*" GOPRIVATE="github.com/cobaltspeech/*" \
  go build -o bin/cobalt-server ./cmd/cobalt-server/
GONOSUMDB="github.com/cobaltspeech/*" GOPRIVATE="github.com/cobaltspeech/*" \
  go build -o bin/cp-server ./cmd/cp-server/
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
cd apps/salt-sass && docker compose -f docker-compose.yml up --build saltier-worker
```
`saltier-worker` runs CPU-only by default (`py/saltier/Dockerfile`, no CUDA needed on Mac) —
GPU is an opt-in overlay (`docker-compose.gpu.yml`), not a separate `.local` file.

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
- cobalt.cfg.toml patched: `Bind = ":8081"`, `LocalDir` set for filesystem storage

## Slash commands

| Command | What it does |
|---|---|
| `/start-spice-rack` | Start full spice-rack stack |
| `/stop-spice-rack` | Stop spice-rack stack |
| `/start-salt` | Start salt API stack |
| `/run-validation` | Run SALT24 validation pipeline + open report |

## Design system

Any new SALT UI work (mockups, prototypes, production screens) must follow the **SALT Software Design System** — `.claude/skills/salt-software-design/`. Invoke it with `Skill(skill: "salt-software-design")`, or read `.claude/skills/salt-software-design/readme.md` directly.

This is the "warm Later Refresh" brand approved on the brand board (2026-07-22): cream page (`#FDFBF7`, never white), rose `#C4636B` as the single action color, salmon `#F29CA3` salt-fill accent, Playfair Display (display) + Montserrat (UI) + IBM Plex Mono (transcripts), sentence case everywhere, no emoji, no exclamation marks. Full tokens in `tokens/*.css`, components in `components/core/`, full-screen references in `ui_kits/`.

**This supersedes the old blue/Inter "clinical" direction** (`#0057A8` primary, navy, Inter) that SALTRoadmap's existing prototypes and `tailwind.config.js` currently use — that direction does not appear on the approved brand board. Existing built screens have not been migrated; only new work is expected to follow the new system unless a rebrand pass is explicitly requested.

## Linear

Connected via MCP (OAuth, no static token). Three teams: Core Team, Training, HMIS-Africa.

Key Core Team projects:
- **SALT: Web App Core** — engineering implementation work
- **SALT: UI/UX Design** — mockup/design work; SALTRoadmap repo; people: Ashley (lead), Levi, Guillermo (dev impl), Jeremy Blair (CC/review)
  - CORE-891 UI Mockups (in-progress) → children: CORE-764 Editor, CORE-892 Education, CORE-865 Admin Dashboard, CORE-893 SPICE
  - CORE-894 Mockups ready for dev team → CORE-895 Implement Editor Mockup (assigned: Guillermo Segovia)
