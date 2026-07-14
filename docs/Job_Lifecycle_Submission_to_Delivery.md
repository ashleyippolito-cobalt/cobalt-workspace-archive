# SALT Transcription Job Lifecycle: Submission to Delivery

## Complete workflow from client upload through automated delivery

---

## 1. JOB SUBMITTED

**Who:** Client (via SALT portal)  
**What:** Uploads audio file → Client portal → System receives file

**Status in Queue:** Not yet visible  
**System actions:**
- File assigned `id: "CLIENT-SAMPLETYPE-XXXXXX"` (e.g., "PI-CON-042613")
- File added to database with `state: "awaiting_transcription"` 
- Status badge: **"New Upload"** (gray)
- File is **unassigned**

---

## 2. ENTERS QUEUE

**Where:** Job Queue Manager → "All" filter shows it  
**What:** Carol can now see it

**Current state:**
- `state: "awaiting_transcription"`
- `assignedTo: null` (unassigned)
- Shows with **amber highlight** (rush deadline) or normal
- Appears in:
  - "All (8)" filter count
  - "Unclaimed (3)" filter  
  - Stats: "3 unassigned · 2 in progress"

**Carol's options:**
- Assign directly to a transcriber using dropdown
- Let transcriber self-claim based on their bucket

---

## 3. TRANSCRIBER CLAIMS

**Who:** Transcriber (e.g., Maria G.)  
**Method:** 
- Carol assigns: "Maria G." button → file moves to Maria's claimed queue
- OR Maria self-claims from her "Open Queue" in Transcriber Portal

**Status transitions:**
```
state: awaiting_transcription → in_transcription
assignedTo: null → "Maria G."
Status badge: "Unclaimed" → "First Transcription" (blue)
```

**What shows:**
- File now in "In Progress (2)" filter
- Maria sees it in her "My Work" section
- Carol sees: "Maria G." in the Transcriber column

**Job history entry logged:**
```
"Claimed by transcriber" → Maria G. · Jun 22 · 10:00 AM
"Initial transcription started" → Maria G. · Jun 22 · 10:02 AM
```

---

## 4. INITIAL TRANSCRIPTION UNDERWAY

**Duration:** Typically 40 mins - 2 hours (depends on audio length & complexity)

**If Maria has questions:**
- Sends message to admin in Notes panel
- Admin responds with guidance
- Maria can mark specific utterances as [?] for admin review

**If Maria gets stuck:**
- Carol can click **"Release"** button → file goes back to "Unclaimed"
- File re-enters queue for another transcriber
- History: "Released back to queue · Returned from active work"

**If emergency (sick, unavailable):**
- Carol clicks **"Hold"** → file status becomes **"On Hold"** (gray, red text)
- Maria is unassigned, can work on other jobs
- History: "Put on hold · Held by admin"

---

## 5. INITIAL TRANSCRIPTION COMPLETE

**Who:** Maria (transcriber)  
**Action:** Marks transcript as complete in her interface

**Status transitions:**
```
state: in_transcription → awaiting_review
assignedTo: "Maria G." (stays assigned)
Status badge: "First Transcription" → "Second Check" (amber)
```

**What happens:**
- File moves out of Maria's "My Work"
- File re-enters Job Queue Manager as "Ready to Check"
- Now needs a quality reviewer (might be Maria, might be Carol, Tanya, James)
- Appears in "Second Check" (amber) filter

**Job history:**
```
"Initial transcription complete" → Jun 22 · 11:42 AM
"Second check started" → Ready for review
```

---

## 6. SECOND CHECK / QUALITY REVIEW

**Who:** Quality reviewer (e.g., Carol S. or Tanya M.)  
**Action:** Claims for second check → validates all transcription

**Status transitions:**
```
state: awaiting_review → in_review
assignedTo: "Tanya M." (new person, usually different from first pass)
Status badge: "Second Check" → "In Revision" (purple)
```

**Reviewer does:**
- Line-by-line check of transcription accuracy
- Corrects errors, marks unclear sections
- Validates SALT annotations
- Can message admin if there's an issue that blocks completion

**If reviewer releases it back:**
- Carol clicks **"Release"** → back to "Unclaimed" / awaiting_review
- Different reviewer can claim it
- History: "Released back to queue"

**Duration:** 30 mins - 1.5 hours

---

## 7. SECOND CHECK COMPLETE ← Carol's Control Gate

**Who:** Reviewer (Tanya M.)  
**Action:** Finishes validation

**Status transitions:**
```
state: in_review → finished
Status badge: "In Revision" → "Ready to be Finalized" (green) ← NEW
```

**What shows:**
- File appears in green row at **TOP of Job Queue Manager**
- Automatically sorted above all other jobs
- Cannot be missed (prominent green highlight)
- Stats update: "2 finished" shows in header

**Carol now sees:**
- Green-highlighted row with file ID
- All transcript details visible
- "Finalize" button in Actions column (green, enabled)

**Job history entry logged:**
```
"Second check complete" → Jun 22 · 12:45 PM
```

---

## 8. CAROL REVIEWS & FINALIZES ← Carol's Approval Step

**What Carol does:**
- Sees green "Ready to be Finalized" row at top
- Quickly reviews the transcript one last time
- Clicks green **"Finalize"** button

**Status transitions:**
```
state: finished → ready_for_client
Status badge: "Ready to be Finalized" → (removed from queue)
```

**What happens:**
- ✅ File **LEAVES the Job Queue Manager** (no longer in active queue)
- ✅ File moves to **"Finalized Jobs"** section (below the main queue)
- ✅ Shows with green "Approved" checkmark badge
- Stats update: "Finalized Jobs — Ready for Client (1 approved)"

**Job history:**
```
"Finalized by admin" → Jun 22 · 1:30 PM
Detail: "Approved for client delivery"
```

---

## 9. FINALIZED JOBS SECTION

**What Carol sees:**
- New collapsible section showing all approved-but-not-yet-sent jobs
- Table columns: File ID, Client, Type, Language, Audio Min, Transcriber, Finalized At, Status
- Each job shows: ✓ **Approved** badge
- Jobs stay here awaiting automated delivery

**Why separate?**
- Removes them from the active "in-flight" queue
- Carol knows she's handled them
- System knows they're ready for automated delivery
- Clean separation: "working on" vs. "approved & pending delivery"

---

## 10. AUTOMATED DELIVERY TO CLIENT (24-hour SLA)

**Who:** System (automated)  
**Action:** Within 24 hours of finalization, system:
- Composes SALT clinical report
- Packages transcript + report
- Sends to client's portal / email
- Logs delivery timestamp
- Removes from "Finalized Jobs" section

**Final state:**
```
state: ready_for_client → delivered
Location: Removed from Transcription Services
Log: Delivery archived in audit trail
```

---

## Heidi's Visibility Throughout

| Phase | Heidi Sees |
|-------|-----------|
| 1. Submitted | Nothing yet |
| 2. In Queue | Dashboard stats: "8 in-flight" |
| 3. Claimed | Dashboard stats update |
| 4. Transcribing | Dashboard stats |
| 5. Ready to Check | Dashboard stats |
| 6. Reviewing | Dashboard stats |
| 7. Ready to Finalize | **"Transcripts Finalized" card appears** on dashboard with link |
| 8. Carol Finalizes | Card still shows; Heidi can click "View" → see Finalized Jobs section |
| 9. Finalized Jobs | Heidi monitors in Transcription Services (read-only) |
| 10. Delivered | Dashboard card disappears (automatically delivered) |

---

## SLA & Hold/Release Examples

### Example 1: Rush Job (7-day deadline)
```
Jun 15 · Upload → Due Jun 22 (7 days)
Jun 15 · Carol assigns to Maria
Jun 16 · Maria gets stuck on audio quality issue
Jun 16 · 2:00 PM: Carol clicks "Release" 
Jun 16 · 2:05 PM: James claims it (faster transcriber for rush)
Jun 17 · Complete + Second Check
Jun 18 · Carol Finalizes
Jun 19 · Auto-delivered with 3 days to spare ✓
```

### Example 2: On Hold for Resubmission
```
Jun 15 · Upload → Due Jun 25 (10 days)
Jun 15 · Carol assigns to Maria
Jun 16 · Maria finds audio too corrupted, marks with [unintelligible]
Jun 16 · Reviewer tries second check, same issue
Jun 17 · Carol clicks "Hold" (flag to client for resubmit)
Jun 20 · Client resubmits cleaner audio
Jun 20 · Carol clicks "Unhold" → file back in queue for new pass
Jun 21 · Complete + Second Check
Jun 22 · Carol Finalizes
Jun 23 · Auto-delivered ✓
```

### Example 3: Multiple Release Cycles
```
Jun 15 · Upload → Due Jun 25
Jun 15 · Carol assigns to Maria → In Transcription
Jun 16 · 11 hours: Maria still working (complex case)
Jun 16 · Carol: "This is taking too long" → Release
Jun 16 · James claims → In Transcription (fresh transcriber)
Jun 17 · James completes faster
Jun 17 · Tanya does Second Check
Jun 18 · Carol Finalizes
Jun 19 · Auto-delivered with 6 days to spare ✓
```

---

## Key Decision Points Carol Controls

| At State | Carol's Options |
|----------|-----------------|
| **Unclaimed** | Assign to transcriber OR let self-claim |
| **First Transcription** | Release back / Hold / Let continue |
| **Second Check** | Release back / Hold / Let continue |
| **In Revision** | Release back / Hold / Let continue |
| **Ready to Finalize** ← **HERE** | **Finalize** (move to approved) |
| **Finalized Jobs** | Monitor / Audit trail / Done |

---

## Summary

**Typical timeline:** 2-3 days from submission to delivery

**Carol's key actions:**
1. **Assign** jobs to transcribers at start
2. **Monitor** progress with Release/Hold as needed
3. **Finalize** when both passes are complete
4. **Monitor** Finalized Jobs section until automated delivery

**Heidi's role:**
- See pipeline health on dashboard
- Monitor finalized jobs awaiting delivery
- Audit trail of all approvals

---

**Document generated:** June 29, 2026
