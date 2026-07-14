# Section: Demographic and Sample Information (+ lines)

<!-- https://classes.saltsoftware.com/course/section.php?id=219 -->

Section outline

When you begin a new transcript by selecting "File menu --> New", you are presented with the header dialog box. Most of the information you enter in this dialogue box is formatted as plus lines and inserted at the beginning of your transcript where it may be added to or edited.

Plus lines begin with a plus sign (+) and are used to provide identification information at the beginning of your transcript (or anywhere else in the transcript). This information typically includes demographic and other identifying information.

Specific information formatted from the header dialogue box includes:

+ Language:
+ Bilingual:
+ ParticipantId:
+ Name:
+ Gender:
+ DOB:
+ DOE:
+ CA:
+ Grade:
+ Ethnicity:
+ ParentEduc:
+ Context:
+ Subgroup:
+ Location:
+ Collect:
+ Examiner:
+ Transcriber:
+ Database:	target language
bilingual languages, e.g., SE for Spanish-English
participant id
target speaker's first name
target speaker's gender (M or F)
target speaker's date of birth
date of elicitation
target speaker's current age (when sample was elicited)
target speaker's grade in school (P,K,1,2,3,â€¦)
target speaker's ethnic background
parent education in years (0-20)
language sample context (Con, Nar, Expo, Pers, etc.)
selection subgroup (Play, FWAY, PGHW, SSS, BUS, etc.)
location where sample was elicited
collection point (1,2,3,...)
examiner's name
transcriber's name
explicitly-defined database to use for comparison


Once formatted from the header dialogue box, the plus lines may be deleted or changed, or you may add additional plus lines. You may enter as many plus lines as you like at any point in your transcript. Just begin each line with a plus sign, "+", The blank space between the + and the beginning of the entry is optional.

Following is the beginning of an example transcript containing plus lines:

   $ Child, Examiner
   + Language: English
   + Name: John
   + Gender: M
   + CA: 7;2
   + Grade: 2
   + Context: Con
   + Examiner: D. Richards
   + recording contains a lot of background noise
   - 0:00
   E Do you have any pet/s?
   C Yes.
   C I have a dog.

For the most part, plus lines are ignored by the SALT program and are included for identification or commenting purposes only. There are a few exceptions.

The language plus line (+Language) specifies the target language. If it is not included, the target language is assumed to be English. The target language determines the standard word lists, the root identification files, and the date format. 
The target speaker's first name (+Name) and gender (+Gender) is used when generating the text-based Performance Report.
Selections within the Database menu look at the contents of specific plus lines to extract information used by SALT to automatically match database records or to include as part of the heading information. They include target language (+Language), bilingual tag (+Bilingual), ethnicity (+Ethnicity), location (+Location), elicitation context (+Context), and subgroup (+Subgroup). These plus lines are all optional but you are encouraged to include those which are appropriate for your sample. For example, language and context should always be included but subgroup may not be appropriate. 
Consider entering your code list and definitions in the transcript header to aid the reader in understanding the codes used in transcription.

The following table provides examples.

Information	Formats	Examples
Target language	+ Language: label	+ Language: English
+ Language: Spanish
+ Language: French
+ Language: anything
Bilingual	+ Bilingual: label	+ Bilingual: SE
+ Bilingual: FE
+ Bilingual: anything
Sampling context	+ Context: label	+ Context: Conversation
+ Context: Con
+ Context: NAR
+ Context: EXPO
+ Context: anything
Selection subgroup	+ Subgroup: label	+ Subgroup: FWAY
+ Subgroup: PGHW
+ Subgroup: Personal
+ Subgroup: Bilingual
+ Subgroup: anything
Location	+ Location: label	+ Location: home
+ Location: school
+ Location: Canada
+ Location: anything
Speaker's name
(target speaker)	+ Name: first name	+ Name: John
Gender
(target speaker)	+ Gender: M
+ Gender: F	+ Gender: M
Date of birth
(target speaker)	+ DOB: mm/dd/yyyy
+ DOB: mm/dd/yy
+ DOB: mm-dd-yyyy
+ DOB: mm-dd-yy
(note that 4-digit year is preferred)	+ DOB: 8/16/1999
+ DOB: 8-16-1999
Date of elicitation	+ DOE: mm/dd/yyyy
+ DOE: mm/dd/yy
+ DOE: mm-dd-yyyy
+ DOE: mm-dd-yy
(note that 4-digit year is preferred)	+ DOE: 6/4/2014
+ DOE: 6-4-2014
Current age
(target speaker)	+ CA: yy;mm;dd
+ CA: yy;mm
+ CA: yy-mm-dd
+ CA: yy-mm	+ CA: 14;9;20
+ CA: 14;10
+ CA: 14-9-20
+ CA: 14-10
Grade in school
(target speaker)	+ Grade: P, K, 1, 2, 3,...	+ Grade: K
+ Grade: 9
Parent education
(in years)	+ ParentEduc: # (0-20)
(where 12 = high school graduate)	+ ParentEduc: 12
Examiner's name	+ Examiner: name	+ Examiner: S. Jones
Database used for comparison (explicitly defined)	+ Database: dbname	+ Database: Expository
+ Database: Narrative Story Retell
Codes (explicitly defined)	+ [code in bracket]: define code	+ [EU]: Error at Utterance Level
