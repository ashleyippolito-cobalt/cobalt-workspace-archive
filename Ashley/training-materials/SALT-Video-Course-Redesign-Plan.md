# SALT Training: AI Video Course Redesign Plan
**Format:** Synthesia AI-generated video series  
**Audience:** Mixed — SLP graduate students (new to LSA) + practicing clinicians (refresher/update)  
**Goal:** Consolidate 22 existing courses into a modern, efficient video-first curriculum built around the SALT platform

---

## Design Principles

1. **Short and scannable.** Each module targets 8–15 minutes. Learners can scan, skip, or replay.
2. **Platform-first.** Every module teaches the workflow as it exists in the SALT web platform — not the legacy desktop software. Where desktop SALT is still relevant, it's noted as a secondary reference.
3. **Layered depth.** Core concepts first, then clinical application — students follow the full path; clinicians can skip to application.
4. **Synthesia-ready.** Scripts written for single on-screen presenter with slide/screen-share support. UI screenshots from the platform replace legacy desktop screenshots.
5. **Updated framing.** Position SALT as a modern, evidence-based, cloud-based tool. Connect to current ASHA practice guidelines and DEI/multilingual assessment standards.
6. **Practice embedded.** Each module ends with a "Try It" prompt. Learners are directed to the platform to complete it.

---

## Module Map: 22 Courses → 10 Videos

| Module | Title | Source Courses | Est. Length |
|--------|-------|---------------|-------------|
| **M1** | Why Language Sample Analysis? | 1101 | 10 min |
| **M2** | Choosing the Right Sample | 1201, 1202 | 12 min |
| **M3** | Creating a Session in the Platform | 1301, 1302 | 10 min |
| **M4** | C-Unit Segmentation | 1303 | 10 min |
| **M5** | Transcription Conventions in the Editor | 1300, 1304, 1305, 1306, 1308 | 15 min |
| **M6** | Generating and Reading Your SALT Report | 1401, 1402, 1403 | 15 min |
| **M7** | Measuring Syntactic Complexity (SI) | 1501 | 10 min |
| **M8** | Scoring Narrative, Expository & Persuasive Samples | 1502, 1503, 1504 | 12 min |
| **M9** | Bilingual Assessment with SALT | 1601, 1602, 1603, 1604 | 15 min |
| **M10** | Putting It All Together: A Full Clinical Case | All | 12 min |

**Total video content:** ~121 minutes (~2 hours)

---

## Module Details

### M1 — Why Language Sample Analysis? *(10 min)*
**Replaces:** 1101 Introduction to LSA

**Learning Objectives:**
- Articulate why LSA is a best-practice assessment tool, especially for culturally and linguistically diverse populations
- Name three advantages of LSA over standardized tests
- Identify the types of information LSA provides that standardized tests cannot

**Key Content:**
- Brief history of LSA and SALT (Dr. Jon Miller, UW-Madison)
- What a language sample reveals: productivity, complexity, accuracy, fluency
- Why LSA matters for equity in assessment — CLD populations, bilingual learners
- Real-world application: school-based SLPs using SALT in practice
- Overview of the SALT platform and what learners will be able to do after this series
- Case preview: introduce "Carter" who will appear across modules

**Synthesia Notes:**
- Side-by-side comparison: "Standardized test" vs "Language sample"
- Brief animated preview of the SALT platform interface — establish visual familiarity early
- Close with the module roadmap graphic

---

### M2 — Choosing the Right Sample *(12 min)*
**Replaces:** 1201 Elicitation - Getting Started, 1202 Elicitation Protocol

**Learning Objectives:**
- Select an appropriate sampling context based on speaker age/grade and clinical goal
- Describe the four SALT elicitation contexts (conversation, narration, exposition, persuasion)
- Follow the SALT elicitation protocol to obtain a consistent, comparable sample

**Key Content:**
- The four sampling contexts and when to use each
- Age/grade starting points (Conversation: PK; Narration: PK; Exposition: 5th; Persuasion: 6th)
- Why consistent elicitation matters for database comparison
- Equipment: digital recorder, foot pedal, environment setup
- Protocol walk-through for each context (key prompts, timing, examiner behavior)
- Common mistakes: excessive prompting, leading questions, stopping too early

**Synthesia Notes:**
- Decision-tree flowchart: "What context should I use?"
- Show the platform's **Sample Type picker** (M3 will go deeper) to connect elicitation choice to platform workflow
- Display SALT database table (language, age range, grade, # samples)

---

### M3 — Creating a Session in the Platform *(10 min)*
**Replaces:** 1301 Transcription - Getting Started, 1302 Transcript Format

**Learning Objectives:**
- Complete the New Session wizard: speaker, audio, sample type, database
- Understand how platform session setup maps to traditional SALT transcript header fields
- Choose between transcribing yourself and sending to the transcription team

**Key Content:**
- **New Session wizard walkthrough** (NewSessionSalt — 4 steps):
  - Step 1: Speaker — select from caseload or add new; second speaker role (Examiner, Parent, Teacher, etc.)
  - Step 2: Audio — upload MP3/WAV/M4A/.SLT, record in-browser, or type/paste a pre-coded transcript
  - Step 3: Sample Type — Narrative, Conversation, Expository, Persuasion, Fable, Play, Other; subgroup picker (FWAY, PGHW, etc.)
  - Step 4: Database — auto-recommended; advanced settings for age matching and SD interval
- **Path Choice:** "Transcribe it yourself" vs. "Send to transcription team" — when to choose each
- What happens to the transcript header automatically (gender, examiner, participant ID, speaker-key line)
- Connecting platform fields to the underlying SALT transcript format

**Synthesia Notes:**
- Use annotated platform screenshots for each wizard step
- Show the "Second speaker: Examiner [Change]" inline pattern — clinicians will encounter this immediately
- Show the Path Choice tiles — highlight the amber disclaimer on "Transcribe it yourself" and explain why it's there (accuracy is the clinician's responsibility)

---

### M4 — C-Unit Segmentation *(10 min)*
**Replaces:** 1303 Transcription - Utterance Segmentation

**Learning Objectives:**
- Define a communication unit (C-unit)
- Apply C-unit segmentation rules using grammatical structure, intonation, and conjunction cues
- Correctly handle edge cases: fragments, elliptical answers, sentence tags
- Use the platform editor to segment utterances correctly

**Key Content:**
- C-unit definition: independent clause + all its modifiers (including subordinate clauses)
- The conjunction rule: coordinating (and, but, so, then) → new C-unit; subordinating (because, that, when) → same C-unit
- Conditional structures: if/then → same C-unit
- Fragments and elliptical responses → separate C-units if intonation signals complete thought
- Sentence tags → do NOT separate
- **Platform connection:** the WorkflowPanel's Step 2 (Segmentation) guides you through this in the editor; the C-unit count in the editor footer updates live
- **MarkPanel Terminators group:** `.  !  ?  ~  ^  >` — use these to end each C-unit line

**Synthesia Notes:**
- Color-coded transcript excerpts: each C-unit in a different color
- Show the platform editor with the WorkflowPanel open to Step 2 — connect the concept to the tool
- Quick-reference tip card: coordinating vs. subordinating conjunctions

---

### M5 — Transcription Conventions in the Editor *(15 min)*
**Replaces:** 1300 Quick Start, 1304 Conventions Pt. 1, 1305 Pt. 2, 1306 Pt. 3, 1308 Practice Samples

**Learning Objectives:**
- Mark bound morphemes (inflectional only) using the slash (/) convention
- Identify and code mazes and part-words
- Apply error codes, omissions, and unintelligible markers
- Use the platform's MarkPanel and syntax color coding to transcribe efficiently

**Key Content:**

*Bound Morphemes:*
- Why inflectional, not derivational (Roger Brown/MLUm rationale)
- The 8 inflectional morphemes: /S, /Z, /S/Z, /ED, /ING, /ER, /EST, /3S
- Common traps: irregular plurals, possessive pronouns, -s words that are one entity
- **MarkPanel:** the purple "Bound morphemes" group — /S /ED /ING /3S /Z /N'T buttons; click with cursor on target word or at cursor position

*Mazes:*
- Definition + bracket coding: [um], [I I], [he — the boy]
- **MarkPanel:** the amber "Mazes" group — (UM)/(UH)/wrap buttons
- Why maze % matters clinically

*Error codes, omissions, unintelligibles:*
- [EW] word-level error, [EU] utterance-level, [EO] omission error
- Omissions: `*word*` for omitted required elements
- Unintelligible: X / XX / XXX
- **MarkPanel:** red "Error codes," pink "Omissions," orange "Unintelligible" groups
- **Syntax color coding toggle** in the toolbar — turns on live highlighting so you can visually audit your transcript

*Other conventions:*
- Dialectal variation [D]
- Proper nouns / compound words: underscore (Big_Al's)
- Timed pauses: (2.5)
- **MarkPanel Specialized Conventions accordion:** pauses, overlaps, comments, idiosyncratic forms

**Synthesia Notes:**
- Show the platform editor with MarkPanel open and color coding ON — the visual differentiation (amber mazes, purple morphemes, red codes) is the key teaching tool
- Demonstrate clicking a MarkPanel button with cursor on a word vs. with no selection
- End with a 3-question self-check (show utterance → pause → reveal coded answer)

---

### M6 — Generating and Reading Your SALT Report *(15 min)*
**Replaces:** 1401 Analysis Fundamentals, 1402 Linking Transcripts, 1403 Special Coding

**Learning Objectives:**
- Complete the WorkflowPanel's 5-step process through to Generate Report
- Understand the consent acknowledgment step and why it exists
- Interpret key measures in the SALT report: MLUw, NDW, maze %, SD scores
- Use the report for clinical decision-making and progress monitoring

**Key Content:**
- **WorkflowPanel recap:** 5 steps — Transcription → Segmentation → Errors & Omissions + Morphology → Extra (optional) → Validate & Score
- Step 5 final checklist — what to verify before generating
- **Consent modal:** why accuracy acknowledgment is required; clinician retains responsibility
- **ReportView walkthrough:** standard measures, database comparison, SD scores
  - MLUw: sentence length vs. peers
  - NDW: vocabulary diversity
  - Maze %: fluency/formulation
  - Reading SD scores: within range / borderline (-1 to -2 SD) / significant flag (below -2 SD)
- Clinical case: Carter's expository report — walk each measure
- Progress monitoring: collecting follow-up samples and comparing over time in the platform

**Synthesia Notes:**
- Annotated ReportView screenshots with callouts on SD scores
- "What does -2 SD mean clinically?" callout graphic
- Show the consent modal — normalize it, explain it briefly, move on

---

### M7 — Measuring Syntactic Complexity: The Subordination Index *(10 min)*
**Replaces:** 1501 SI - Subordination Index

**Learning Objectives:**
- Define SI and explain what it measures beyond MLU
- Identify main vs. subordinate clauses in a transcript
- Use the platform's SI scoring panel to code and calculate SI
- Interpret SI scores relative to age-matched peers

**Key Content:**
- SI = total clauses ÷ total C-units; why it's more sensitive than MLU alone
- Main vs. subordinate clause identification; the conjunction distinction revisited
- **WorkflowPanel Extra step → Score SI:**
  - Each C-unit gets a code: [SI-0] through [SI-3] or [SI-X] (excluded)
  - Live composite score calculates automatically as you code
  - Collapsible "Scoring rules" accordion for edge cases
- Interpreting SI in the report: what below-average SI tells you clinically
- Intervention implications when SI is low

**Synthesia Notes:**
- Show the SI panel in the platform — the per-C-unit code selectors and the live composite counter
- Worked example: code 4–5 C-units live in the panel to show the composite updating

---

### M8 — Scoring Narrative, Expository & Persuasive Samples *(12 min)*
**Replaces:** 1502 NSS, 1503 ESS, 1504 PSS

**Learning Objectives:**
- Apply NSS, ESS, or PSS scoring using the platform's scoring panels
- Understand what each characteristic measures and how to distinguish score levels
- Connect discourse scores to intervention targets

**Key Content:**
- Why discourse-level scoring matters beyond sentence-level measures
- **WorkflowPanel Extra step → Score NSS / PSS / ESS:**
  - Split view: left = scoring panel, right = transcript for reference
  - Each characteristic: 0–5 buttons + NA + expandable Proficient/Emerging/Minimal criteria
  - Score color scale (dark red → green) and live composite shown in header
- **NSS** (Narrative, max 35): Introduction, Character Development, Mental & Emotional States, Referencing/Listener Awareness, Conflict/Resolution & Event/Reaction, Cohesion, Conclusion
- **ESS** (Expository, max 50): Object, Preparations, Start, Course of Play, Rules, Scoring, Duration, Strategy, Terminology, Cohesion
- **PSS** (Persuasion, max 35): Issue ID & Desired Change, Supporting Reasons, Other Point of View, Compromises, Conclusion, Cohesion, Effectiveness
- Note: the platform shows the relevant scoring tab automatically based on sample type — Narrative → NSS tab, Expository → ESS, Persuasion → PSS
- Connecting low scores to specific intervention targets

**Synthesia Notes:**
- Show the NSS scoring panel in the platform — open the criteria accordion for one characteristic to demonstrate how to distinguish score levels
- Show the color scale: point out that it makes patterns visible at a glance
- "The criteria accordion is your guide — when in doubt, open it"

---

### M9 — Bilingual Assessment with SALT *(15 min)*
**Replaces:** 1601 Bilingual SE Introduction, 1602 Eliciting, 1603 Transcribing, 1604 Practice Samples

**Learning Objectives:**
- Explain the rationale for collecting language samples in both languages for bilingual learners
- Differentiate language disorder from language difference in bilingual children
- Create bilingual sessions in the platform and select the appropriate database
- Interpret bilingual database comparison results

**Key Content:**
- The clinical challenge: overdiagnosis vs. underdiagnosis in bilingual populations
- Rojas & Iglesias (2009): making the case for bilingual LSA
- **Platform workflow for bilingual assessment:**
  - Create two sessions for the same speaker — one English, one Spanish
  - In the Database step, select the bilingual Spanish or bilingual English reference database
  - Same elicitation protocol in both languages
- Transcription considerations: code-switching (transcribe as produced, not an error), Spanish morpheme conventions, [D] for dialectal variation
- Case study: María (age 7;3) — compare English vs. Spanish reports in the platform
- Interpreting the bilingual database comparison: why bilingual norms differ from monolingual norms
- Clinical decision: below-average in BOTH languages (even vs. bilingual norms) = disorder signal

**Synthesia Notes:**
- Show the Database selection step in the platform — highlight the bilingual database options
- Show two ReportViews side by side: María in English (low) vs. María in Spanish (typical)
- Strongest equity framing in the series — open with a caseload statistic on bilingual learners

---

### M10 — Putting It All Together: A Full Clinical Case *(12 min)*
**Replaces:** Synthesis across all courses

**Learning Objectives:**
- Complete the full SALT platform workflow end-to-end for a real clinical case
- Integrate multiple measures (MLUw, NDW, maze %, SI, ESS) into a clinical summary
- Communicate SALT findings to parents, teachers, and IEP teams

**Key Content:**
- Full case walkthrough: Carter (5th grade, expository concern, word retrieval history)
- Session setup in the platform → audio upload → editor → 5-step workflow → SI scoring → ESS scoring → Generate Report
- Reading Carter's report: what the numbers say together
- Writing the clinical summary in plain language
- SALT in the IEP: connecting report findings to measurable goals, using follow-up samples for progress monitoring
- Where to go from here: the platform's Education section, SALT reference databases

**Synthesia Notes:**
- Use a "case file" visual throughout — build Carter's picture progressively
- Show the full platform flow in screenshots: New Session → Editor → WorkflowPanel all 5 steps → Report
- End with the SALT workflow checklist as a take-home graphic

---

## Synthesia Production Notes (All Modules)

### Presenter Style
- Single AI presenter, professional but warm tone
- Business casual — positions SALT as a modern clinical tool
- Recommend a female presenter to align with the SLP field's demographics (80%+ female)

### Visual Templates to Build
1. **Platform screenshot overlays** — annotated screenshots of NewSessionSalt, SaltEditorView (with MarkPanel and WorkflowPanel), and ReportView for modules 3–10
2. **Transcript excerpt card** — white background, monospace font, matching the platform's color coding: amber mazes, purple morphemes, red error codes, pink omissions, orange unintelligibles, blue speaker labels
3. **Decision flowchart** — sampling context selection (M2), analysis workflow (M6)
4. **Scoring rubric visual** — matches the platform's 0–5 color scale (dark red → green)
5. **"Clinical connection" callout box** — recurring element tying convention to clinical meaning

### Color Coding Alignment
Match platform colors in all transcript visuals:
- Speaker label: blue
- Maze: amber
- Bound morpheme: purple
- Error code: red
- Omission: pink
- Unintelligible: orange
- Terminator: gray

### Pacing
- 125–150 words/minute for Synthesia AI narration
- Build in 2–3 second pauses after key definitions (`[pause]` markers in scripts)
- Each module: brief recap restating learning objectives as achieved

### Accessibility
- All transcript examples shown as text on screen
- Closed captions enabled on all videos
- Downloadable PDF quick-reference companion for each module

---

## Implementation Roadmap

| Phase | Action | Timeline |
|-------|--------|----------|
| 1 | Capture platform UI screenshots for all annotated slides | Week 1 |
| 2 | Finalize module scripts (see companion document) | Weeks 1–2 |
| 3 | Build Synthesia slide templates (color coding aligned to platform) | Week 2 |
| 4 | Record M1, M2, M10 first (bookend modules) | Week 3 |
| 5 | Record M3–M9 (core content) | Weeks 4–6 |
| 6 | QA review with 1 SLP + 1 SLP student using the platform | Week 7 |
| 7 | Upload to platform Education section, replace old course links | Week 8 |

---

*Companion document: SALT-Video-Scripts.md contains ready-to-paste Synthesia scripts for all 10 modules.*
