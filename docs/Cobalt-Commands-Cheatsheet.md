# Cobalt Commands Cheatsheet

Quick reference for the Claude Code skills set up in the Cobalt workspace. Mirrors Ashley's CobaltDashboard desktop widget. Type any command below directly in Claude Code chat.

---

## Domain Expert Reviewers (8)

Ask one of these to review a feature, PR, or design decision from that lens.

| Command | Reviewer | Covers |
|---|---|---|
| `/slp-reviewer` | SLP Reviewer | 10+ yr SLP · Clinical logic · Workflows · Compliance |
| `/senior-dev-review` | Senior Dev Review | 15+ yr engineer · Code quality · Architecture · Patterns |
| `/qa-testing-expert` | QA Testing Expert | 12+ yr QA · Testing strategy · Coverage · Edge cases |
| `/product-requirements-expert` | Product Requirements Expert | 10+ yr PM · Scope · Requirements · User value |
| `/security-compliance-expert` | Security Compliance Expert | 12+ yr security · HIPAA · Data protection · Compliance |
| `/devops-infrastructure-expert` | DevOps Infrastructure Expert | 12+ yr DevOps · Deployment · Scaling · Monitoring |
| `/ux-design-expert` | UX Design Expert | 10+ yr UX · Workflows · Accessibility · Design |
| `/release-plan-builder` | Release Plan Builder | Generates the Cobalt release-plan spreadsheet from Linear |

---

## Workflow Commands (13)

| Command | What it does |
|---|---|
| `/start-session` | Load memory · check git · report workspace health |
| `/check-linear` | Pull all Core Team + UI/UX activity from Linear |
| `/pre-dev-check` | Verify Go, Node, Docker · check port availability |
| `/daily-standup` | Linear summary + git summary + release summary |
| `/saltroad-sync` | Stage → commit → push SALTRoadmap changes |
| `/integration-branches` | Show all branches + merge status across dev/staging/master |
| `/update-universe` | Update the release plan dashboard + commit to GitHub |
| `/start-spice-rack` | Start the spice-rack stack (Docker + Go + Next.js) |
| `/stop-spice-rack` | Stop the spice-rack stack |
| `/start-salt` | Start the standalone SALT API stack (port 8080) |
| `/start-salt-editor` | Start the SALT Convention Editor (port 3200) |
| `/run-validation` | Run the SALT24 agreement validation pipeline |
| `/end-session` | Save memories · update component map · commit + push |

---

**Source of truth:** this list mirrors the CobaltDashboard desktop widget (`CobaltDashboardWidget/PageData.swift`). If the two drift apart, treat the widget as current and update this file to match it, not the other way around.

Last synced: 2026-07-16.
