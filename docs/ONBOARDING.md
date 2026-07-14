# Claude Code & Cobalt Workspace — Setup Guide for New MacBook

**Created:** July 14, 2026  
**Purpose:** Complete setup documentation to restore your Claude Code environment, all projects, configurations, and workflows on a new device without losing progress.

---

## Quick Start

After you set up Claude Code on your new MacBook:

1. **Clone the main repo** (if not already done):
   ```bash
   git clone https://github.com/ashleyippolito/MISLProject.git ~/Cobalt
   ```

2. **Copy your Claude configuration** from this guide (see "Claude Code Configuration" section below).

3. **Copy memory files** from `~/.claude/projects/` (see "Memory System" section).

4. **Set up your environment** (Git config, Node/Python/Go, SSH keys).

5. **Run `/start-session`** to verify everything loaded correctly.

---

## 1. Primary Working Directory

```
/Users/ashley/Cobalt/
├── spice-rack/           # Main unified SaaS platform (Go + Next.js)
├── spice/                # Standalone SPICE app (being phased out)
├── salt/                 # Standalone SALT SaaS (no longer active)
├── SALTRoadmap/          # Prototype Library UI/UX (React 19 + Vite)
├── internal-tools/       # Cobalt Nix/infra config (for SSH key PR)
├── Ashley/               # Personal work + validation pipeline
│   └── validation/       # SALT24 agreement validation (Python)
└── CLAUDE.md             # Project instructions (authoritative)
```

---

## 2. Claude Code Configuration

### Global Settings (`~/.claude/settings.json`)

Your global settings file. This is in the home directory and persists across all projects. Copy the configuration below into `~/.claude/settings.json` on your new MacBook:

```json
{
  "permissions": {
    "allow": [
      "Read",
      "Bash(git status)",
      "Bash(git log *)",
      "Bash(git diff *)",
      "Bash(git branch *)",
      "Bash(ls *)",
      "Bash(find *)",
      "Bash(grep *)",
      "Bash(python *)",
      "Bash(python3 *)",
      "Bash(pip *)",
      "Bash(pip3 *)",
      "Bash(npm run *)",
      "Bash(npx *)",
      "Bash(node *)",
      "Bash(gh pr *)",
      "Bash(gh issue *)",
      "Bash(jq *)"
    ]
  },
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "echo '{\"systemMessage\": \"Account email verified: ashley@cobaltspeech.com\"}'",
            "statusMessage": "Verifying account email..."
          }
        ]
      }
    ]
  },
  "effortLevel": "medium",
  "model": "haiku"
}
```

### Project Settings (`/Cobalt/.claude/settings.local.json`)

Your Cobalt project has extensive local settings. This is stored in `/Users/ashley/Cobalt/.claude/settings.local.json`.

**Key permissions in this file** (these are Cobalt-specific):
- Git operations: `git remote`, `git add`, `git reset`, `git commit`, `git rm`
- Bash commands for development: Go builds, npm runs, Docker, curl
- Linear MCP access: issue/comment/attachment operations
- Transcriber Portal localhost screenshots
- SALTRoadmap deployment commands
- Admin dashboard dev server access

**When you clone the repo on the new MacBook**, this file will already be in the repo, so git will restore it automatically. You don't need to manually copy it.

---

## 3. Memory System — Critical for Continuity

Your memory files live in `~/.claude/projects/-Users-ashley-Cobalt/memory/`. These contain all your learned preferences, architectural notes, and project context.

### Current Memory Files (save these on your new device)

**User & Feedback:**
- `user_profile.md` — Your role (engineer/manager/founder), tech stack, communication style
- `feedback_style.md` — Your autonomy preferences, communication tone, Git commit style
- `feedback_gh_cli.md` — Use git + GitHub web URL for PRs (gh CLI not installed)
- `feedback_git_email.md` — Global git email: `ashley@cobaltspeech.com`
- `feedback_agent_suggestions.md` — Proactively suggest domain experts when you ask for work

**Cobalt Project Context:**
- `project_cobalt_overview.md` — High-level product summary, workspace layout
- `project_cobalt_architecture.md` — Tech stack, three-tier data model, key patterns
- `project_cobalt_pipeline.md` — Python validation pipeline, how to run it
- `project_saltlite_architecture.md` — Freemium prototype implementation
- `project_saltroadmap.md` — Prototype Library structure, build modes, Vercel deploy
- `project_saltroadmap_two_views.md` — index.html tabs (Prototype Library + Product Roadmap)
- And 20+ other memories on patterns, features, and architectural decisions

**Action:** Copy the entire `~/.claude/projects/-Users-ashley-Cobalt/memory/` directory to your new MacBook in the same location. This preserves all context.

---

## 4. Git & GitHub Configuration

### Git Global Config

Set your git email globally:
```bash
git config --global user.email "ashley@cobaltspeech.com"
git config --global user.name "Ashley Ippolito"
```

### GitHub Access

- **Current branch in Cobalt:** `ashley/prototype-library-hub`
- **Main branch:** `main`
- **GitHub URL:** `https://github.com/ashleyippolito/MISLProject.git`

**Note:** You use git + GitHub web for PRs, not `gh` CLI. No need to install gh CLI.

---

## 5. Environment & Tools

### Required Installations

```bash
# Node.js (for SALTRoadmap and spice-rack frontend)
node --version  # Should be v18+

# Python (for validation pipeline)
python3 --version

# Go (for spice-rack backend)
go version  # Go 1.24+

# Git
git --version
```

### Environment Setup for Cobalt Development

The `/Cobalt/CLAUDE.md` file in the repo has full details, but key points:

1. **spice-rack (main SaaS):**
   ```bash
   cd /Users/ashley/Cobalt/spice-rack
   GONOSUMDB="github.com/cobaltspeech/*" GOPRIVATE="github.com/cobaltspeech/*" \
     go build -o bin/cobalt-server ./app/backend/cmd/cobalt-server/
   ```

2. **SALTRoadmap (Prototype Library):**
   ```bash
   cd /Users/ashley/Cobalt/SALTRoadmap/development/salt-prototype-suite
   npm run dev:salt-saas  # or dev:transcriber, dev:transcription-admin, dev:general-admin
   ```

3. **Validation pipeline:**
   ```bash
   cd /Users/ashley/Cobalt/Ashley/validation
   python -m pipeline.cli --gold input/gold --novel input/novel --config config.yaml --out output
   ```

### SSH Keys

If you're using SSH for Git and internal tools (Tailscale, Cobalt infrastructure):
- Copy your `~/.ssh/` directory to the new MacBook
- Ensure permissions: `chmod 600 ~/.ssh/id_rsa` and `chmod 644 ~/.ssh/id_rsa.pub`

---

## 6. Slash Commands & Skills You Use

These are available in Claude Code on your new MacBook:

**Session Management:**
- `/start-session` — Load memory files, verify settings, check repo updates
- `/end-session` — Run end-of-session checkpoint

**Development Stacks:**
- `/start-spice-rack` — Start Docker + native Go/Next.js servers
- `/stop-spice-rack` — Stop the stack
- `/start-salt` — Start SALT SaaS API server
- `/start-salt-editor` — Start SALT Convention Editor (port 3200)
- `/run-validation` — Run SALT24 validation pipeline + open report

**Code Work:**
- `/code-review` — Review current diff for bugs and cleanups
- `/verify` — Run end-to-end verification of a code change
- `/simplify` — Simplify code without hunting for bugs

**Workflow:**
- `/loop` — Run a task on recurring interval (e.g., check deploy status)
- `/schedule` — Create scheduled cloud agents

---

## 7. Agent Types Available

These specialized agents are at your fingertips on the new MacBook:

**Product & Requirements:**
- `check-linear` — Query Linear for session activity, identify new items
- `daily-standup` — Generate standup from Linear activity + git commits
- `release-plan-builder` — Generate release plan spreadsheet from Linear

**Engineering & Code:**
- `Explore` — Fast code search agent (file patterns, grep, cross-file lookup)
- `Plan` — Software architect for design + implementation plans
- `senior-dev-review` — Senior engineer reviews for best practices

**Domain Experts:**
- `devops-infrastructure-expert` — DevOps review
- `security-compliance-expert` — Security + HIPAA/FERPA review
- `ux-design-expert` — UX/Design expert
- `qa-testing-expert` — QA/Testing expert
- `slp-reviewer` — Speech-Language Pathologist expert

---

## 8. MCP Connections (OAuth)

You have Linear connected via MCP (OAuth, no static token).

**On the new MacBook:**
- Claude Code will prompt you to authorize Linear the first time you use a Linear tool
- No token to copy — OAuth flow handles it
- **Workspace:** Linear at `https://linear.app/cobaltspeech`

Other MCP servers (Asana, Figma, Notion, etc.) — you may have these configured but aren't actively using them for Cobalt work.

---

## 9. Project Tracking & Linear

### Key Linear Projects

- **SALT: Web App Core** — Engineering implementation
- **SALT: UI/UX Design** — Mockup/design work (SALTRoadmap)
- **CORE-1189** — Releases umbrella (release planning source)

### Cobalt Release Plan

The release plan is generated from Linear data. File location: `cobalt-release-plan.json` (often on Desktop or Desktop/cobalt-release-plan-web/).

On the new MacBook, you'll regenerate this from Linear as needed using the `release-plan-builder` agent.

---

## 10. Quick Reference: What's Where

| What | Where |
|---|---|
| Main Cobalt repo | `~/Cobalt/` (clone from GitHub) |
| SALTRoadmap | `~/Cobalt/SALTRoadmap/` |
| Validation pipeline | `~/Cobalt/Ashley/validation/` |
| Claude global settings | `~/.claude/settings.json` |
| Claude project settings | `~/Cobalt/.claude/settings.local.json` |
| Memory files | `~/.claude/projects/-Users-ashley-Cobalt/memory/` |
| Git email | `ashley@cobaltspeech.com` |
| Primary device email | ashley@cobaltspeech.com |

---

## 11. Onboarding Checklist for New MacBook

- [ ] Clone `https://github.com/ashleyippolito/MISLProject.git` to `~/Cobalt/`
- [ ] Copy `~/.claude/settings.json` from this guide
- [ ] Copy `~/.claude/projects/-Users-ashley-Cobalt/memory/` directory
- [ ] Set git config: `git config --global user.email "ashley@cobaltspeech.com"`
- [ ] Install Node, Python, Go, Git
- [ ] Copy SSH keys to `~/.ssh/` if needed
- [ ] Log into Claude Code and run `/start-session`
- [ ] Verify Linear OAuth works (use any Linear tool)
- [ ] Test one `/start-spice-rack` or `/start-salt` to confirm dev stack works
- [ ] Update any local `CLAUDE.md` instructions if they've changed in the repo

---

## 12. No-Waste Guarantee

**You're not losing anything:**
- All git history is in the remote repo
- Memory files are copied (step 3 above)
- Settings are documented here
- All project code is in GitHub
- Local development config (cobalt.cfg.toml, .env files) can be regenerated from the repo + local setup instructions

Just follow the checklist and run `/start-session` on the new MacBook — Claude will load all your memory and context automatically.

---

## Questions or Issues?

If you hit any setup snags on the new device, add your question to the bottom of this file, commit it, and share the updated doc. Claude can then read it in context and help troubleshoot.

**Good luck with the migration! 🚀**
