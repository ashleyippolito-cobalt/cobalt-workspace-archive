# Section: Setting Up a Bilingual Spanish Transcript

<!-- https://classes.saltsoftware.com/course/section.php?id=180 -->

Section outline

The procedure is almost the same as setting up a document for samples of English-fluent speakers.

Open SALT.
Select File Menu --> New and you are presented with the New Transcript - Header Information dialogue box.



Notice the "Target Language" and "Bilingual" settings on the right side of the dialogue box.
- Select English or Spanish as the Target Language, depending on which target language was elicited.
- Check the box labeled Bilingual and then select SE (for Spanish/English). This ensures that the bilingual reference database is selected by default when generating reports from the Database menu. Note that if the target language is "Spanish" and you check the "Bilingual" box, the "SE" is automatically selected. You must explicitly select "SE" if the target language is "English".
Enter the other Header Information including speakers, gender, current age, grade in school, sampling context, and subgroup/story.
Click OK. Header Information is displayed on the new blank SALT document, and you are ready to begin entering the transcript.


Language settings
The current language is displayed at the right-hand side of the status bar at the bottom of the main window and may vary from transcript to transcript.

Special characters, such as ñ and á, are accepted regardless of the language setting. The language setting affects several parts of the SALT program, including: 1) the contents of the standard word lists (note that the standard word lists include the "Yes/No Words" used to determine the yes/no responses to questions, and the "Filled Pause Words" used to determine the contents of mazes); 2) the availability of the "Analyze menu --> Bound Clitic Tables" if the language uses clitics (Spanish only); 3) the availability of the "Analyze menu --> Grammatical Categories" and "Analyze menu --> Grammatical Category Lists" if the dictionary and rules are available (English only); and 4) the automatic identification of word roots if root identification files are used (Spanish primarily and English).

Determining the language in effect for the current transcript
By default, the language is determined from the +Language entry found in the transcript. The following plus line:

+ Language: Spanish

would set the language for that transcript to Spanish. The standard word lists for Spanish would be used, the Clitic Tables would be available, the Grammatical Category reports would not be available, the Spanish root identification files would be used.

+ Language: English

would set the language for that transcript to English. The standard word lists for English would be used, the Clitic Tables would not be available, the Grammatical Category reports would be available, the English root identification files would be used.

What if the transcript contains more than one language?
If there is a target language for the sample, specify that one and mark productions of the other language as instances of code-switching (see section on Customized Codes).

Otherwise, you can change how SALT determines the language(s) of the sample using the "Setup menu --> Language Settings" dialogue box. This requires two steps: 1) check the box in front of each language to be included; and 2) to force the current language to be specified by the languages selected here, uncheck the box labeled "Get current language from transcript plus line" found in the lower left hand corner of the dialogue box. Changing these settings will affect all transcripts, not just the current one.
