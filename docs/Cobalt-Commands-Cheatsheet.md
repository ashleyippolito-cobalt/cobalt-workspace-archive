# Cobalt Workspace Commands Cheatsheet

**Last updated:** July 7, 2026

---

## Session Management

| Command | What it does | Duration |
|---------|-------------|----------|
| `/start-session` | Load memory, read settings, check git status, report workspace health | 30s |
| Auto on SessionStart | `check-linear --quick` (Linear activity + update releases.json) | 30s |
| Auto on SessionEnd | `session-summary` (workspace health checkpoint) | 15s |

---

## Linear & Release Tracking

| Command | What it does | Use when |
|---------|-------------|----------|
| `/check-linear` | Full report: all Core Team tasks assigned to you + UI/UX project activity | You want deep insight on what's happening |
| `/check-linear --quick` | Summary: task counts + recent activity (auto-runs SessionStart) | SessionStart (automatic) |

**Output:** Updates `releases.json` with current release state (Mars, Mercury, Saturn, Lyra, Pluto, Orion, etc.)

---

## Code & Repository Management

| Command | What it does | Use when |
|---------|-------------|----------|
| `/session-summary` | Show uncommitted changes + unpushed commits across all repos (auto-runs SessionEnd) | SessionEnd (automatic) |
| `/saltroad-sync` | Check SALTRoadmap → stage → commit → push. **Flags for manual Vercel deploy (tell Levi).** | You've updated prototypes and need to ship |

**Repos monitored:** spice-rack, spice, SALTRoadmap, internal-tools, cobalt-release-plan-web

---

## Pre-Dev & Branch Management

| Command | What it does | Use when |
|---------|-------------|----------|
| `/pre-dev-check` | Verify Go, Node, Docker, port availability before starting stack | Before `/start-spice-rack` |
| `/integration-branches` | Show all active branches + merge status (dev/staging/master) | You need to promote branches or clean up |
| `/daily-standup` | Generate summary: Linear tasks + git commits + release progress (last 24h) | End of day or weekly sync |
| `/daily-standup --weekly` | Same as above but for last 7 days | Weekly team standup |

---

## Domain Experts (7 reviewers)

| Command | Expertise | Use when |
|---------|-----------|----------|
| `/slp-reviewer` | 10+ yr SLP: clinical logic, workflows, compliance | Validating clinical features, checking assessment logic |
| `/senior-dev-review` | 15+ yr engineer: code quality, architecture, patterns | Code review, architectural decisions, performance concerns |
| `/qa-testing-expert` | 12+ yr QA: testing strategy, coverage, edge cases | Feature planning, before shipping, regression prevention |
| `/product-requirements-expert` | 10+ yr PM: scope, user value, adoption risk | Requirements gathering, scope planning, prioritization |
| `/security-compliance-expert` | 12+ yr security: HIPAA, encryption, audit logs | Data handling code, compliance audits, before shipping |
| `/devops-infrastructure-expert` | 12+ yr DevOps: deployment, scaling, monitoring | Deployment plans, scaling decisions, production issues |
| `/ux-design-expert` | 10+ yr UX: workflows, accessibility, design consistency | Design review, UX specs, accessibility audit |

---

## Local Development

| Command | What it does | Prerequisites |
|---------|-------------|----------------|
| `/start-spice-rack` | Start full SaaS stack (Docker + Go + Next.js) | `/pre-dev-check` passed |
| `/stop-spice-rack` | Stop spice-rack stack | spice-rack running |

**Stack details:**
- Docker: postgres (5532), pubsub-emulator (8085), fake-gcs (4543)
- Go servers: cobalt-server (8181), cp-server (8182)
- Next.js frontends: app (3100), control plane (3101)
- Logs: `/tmp/cobalt-server.log`, `/tmp/cp-server.log`

To rebuild Go binaries manually:
```bash
cd /Users/ashley/Cobalt/spice-rack
GONOSUMDB="github.com/cobaltspeech/*" GOPRIVATE="github.com/cobaltspeech/*" \
  go build -o bin/cobalt-server ./app/backend/cmd/cobalt-server/
```

---

## Workspace Structure

```
/Users/ashley/Cobalt/
├── spice-rack/                  ← Main unified SALT+SPICE SaaS
├── spice/                       ← Speech evaluation backend
├── SALTRoadmap/                 ← Design library + prototypes
├── internal-tools/              ← Nix infrastructure config
├── Ashley/
│   ├── cobalt-release-plan-web/ ← Release coordination dashboard
│   └── claude_agent_office/     ← Build artifacts (kept for rerun)
├── CLAUDE.md                    ← Project instructions & constraints
├── AGENTS.md                    ← Available agents overview
├── ARCHIVE.md                   ← Archived projects + recovery docs
└── releases.json                ← Release state (auto-updated)
```

---

## Key Constraints

- **HIPAA/FERPA/COPPA:** No PII in logs or outputs
- **Go deps:** Always build with `GONOSUMDB` + `GOPRIVATE` set for private codec packages
- **Nix:** `flake.nix` targets Linux only — macOS users run Docker
- **SALTRoadmap:** Push to GitHub manually; Levi handles Vercel deploy (no auto-deploy hooks)
- **PyTorch:** No macOS x86_64 wheels — saltier-worker must run in Docker

---

## Important Contacts & Notes

**Levi:** Manual Vercel deploys for SALTRoadmap. After `/saltroad-sync` pushes, notify Levi.

**Email:** ashley@cobaltspeech.com

**Linear:** Connected via MCP (OAuth). Three teams: Core Team, Training, HMIS-Africa.

---

## Typical Session Flow

```
1. Session starts
   → Automatic: check-linear --quick (what's new in Linear?)
   → Automatic: releases.json updated

2. Work in spice-rack / SALTRoadmap / other repos

3. End of day (before leaving)
   → Automatic: session-summary (what changed?)
   → If you touched SALTRoadmap:
      /saltroad-sync → stages → commits → pushes
      → Tell Levi to deploy Vercel

4. Session ends
```

---

## Quick Reference: 13 Agents

**Automation (6 - auto or on-demand):**
| Agent | Type | Duration |
|-------|------|----------|
| check-linear | Query Linear | 30s–3m |
| session-summary | Monitor workspace | 15s |
| saltroad-sync | Git sync | 20s |
| pre-dev-check | System health | 5-10s |
| daily-standup | Report generator | 45s |
| integration-branches | Branch tracker | 15s |

**Domain Experts (7 - on-demand validation):**
| Agent | Expertise | Duration |
|-------|-----------|----------|
| slp-reviewer | Clinical validation | 2-5m |
| senior-dev-review | Code quality | 3-10m |
| qa-testing-expert | Testing strategy | 5-15m |
| product-requirements-expert | Product/scope | 5-15m |
| security-compliance-expert | HIPAA/security | 5-15m |
| devops-infrastructure-expert | Deployment/scaling | 5-15m |
| ux-design-expert | UX/accessibility | 5-15m |

---

## Memory Files (Auto-Loaded)

These load automatically on `/start-session`:
- `user_profile.md` — Your role, skills, tools, use cases
- `feedback_style.md` — Communication & autonomy preferences
- `project_cobalt_overview.md` — Cobalt product overview
- `project_cobalt_architecture.md` — Tech stack, data model, patterns
- `project_cobalt_pipeline.md` — Validation pipeline info
- `session_automation_setup.md` — This automation setup

---

## Archived (Recoverable from Git)

If needed, these can be recovered from git history:
- `validation/` — SALT24 agreement validation pipeline (Python)
- `salt/` — Standalone SALT SaaS transcription platform
- `prototypes/` — Convention editor sample (salt-convention-editor-sample)
- `mislmockup/` — MISL prototype

See `ARCHIVE.md` in repo for recovery instructions.

---

**Questions?** Check `CLAUDE.md` for workspace setup or ask Claude Code directly.
