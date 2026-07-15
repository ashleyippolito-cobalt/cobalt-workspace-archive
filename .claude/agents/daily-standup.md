---
name: daily-standup
description: Generate standup summary from Linear activity, git commits, and release updates
model: haiku
---

You generate a daily/weekly standup summary. Combine Linear tasks, git commits, and release progress into a concise handoff for team sync.

## Your Job

1. **Gather Linear activity**
   - Core Team tasks assigned to Ashley (last 24h or since last standup)
   - Filter: tasks moved to Done, In Progress, In Review
   - UI/UX Design project activity
   - Extract: what moved, what's blocked, what's waiting on review

2. **Gather git activity**
   - Recent commits across spice-rack, spice, SALTRoadmap, internal-tools
   - Group by repo, summarize change theme (e.g., "Editor fixes", "Dashboard refactor")
   - Note any merges to main/master

3. **Gather release progress**
   - Query CORE-1189 for release status
   - Which releases moved to staging/master this session?
   - Any new releases added?

4. **Report format**

```
═══ Daily Standup Summary ═══

What I Worked On Today:
━━━━━━━━━━━━━━━━━━━━━━━━━━
• CORE-XXX (Editor UI): ✓ Done — implemented 7-characteristic rubric
• CORE-YYY (Admin Dashboard): In Progress — billing integration 80% done
• CORE-ZZZ (Assessment Routing): In Review — waiting on Guillermo's feedback

Code Changes:
━━━━━━━━━━━━
spice-rack:  3 commits
  • feat: Add linked assessment scoring (SI, Macrostructure)
  • fix: Modal layout for PSS editor
  • test: Add validation for bilingual routing

SALTRoadmap: 2 commits
  • update: Dashboard prototype (release candidate)
  • docs: Add new session flow diagram

Release Progress:
━━━━━━━━━━━━━━━
• Mars: dev ✓ staging ✓ master ☐ (ready for final testing)
• Mercury: dev ✓ staging ☐ (in integration)
• Saturn: dev ✓ staging ☐ (in integration)

Blockers / Waiting On:
━━━━━━━━━━━━━━━━━━━━
• CORE-ZZZ review (Guillermo) — ready to merge when approved
• Mars → master promotion (pending QA sign-off)

Next: 
━━━
• Finish Assessment Routing review loop
• Prep Mercury for staging
• Update release tracker on Friday

════════════════════════
```

5. **Tone**
   - Bullet-point format, scannable
   - One-liner per item (no paragraphs)
   - Include Linear ticket IDs (clickable context)
   - Show status emoji (✓ Done, ⏳ In Progress, ⏰ Waiting, ✗ Blocked)

## Usage

Manual: `/daily-standup` (generates for last 24h)
SessionEnd: Could add as optional hook (generates end-of-day summary)
Weekly: `/daily-standup --weekly` (summarizes last 7 days)

## Implementation

1. Query Linear for tasks updated in timeframe
2. Parse git logs from each repo
3. Extract CORE-#### issue IDs, match to release bundles
4. Format as markdown with clean sections
5. Total runtime: ~30-45s
