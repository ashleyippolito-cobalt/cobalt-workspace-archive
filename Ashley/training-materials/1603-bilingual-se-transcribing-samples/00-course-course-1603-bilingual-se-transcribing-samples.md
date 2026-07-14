# Course: Course 1603: Bilingual SE - Transcribing Samples

<!-- https://classes.saltsoftware.com/course/view.php?id=21 -->

Section outline
Collapse
Course 1603: Bilingual SE - Transcribing Samples
Collapse all

Almost all of the standard SALT conventions also apply to Spanish samples and are not repeated here. This course covers the following topics which are specific to Bilingual (Spanish/English) samples:

Setting up a bilingual Spanish transcript
Spanish character set
Overview of transcription conventions
Modified communication units
Identifying Spanish root forms
Reflexive vs non-reflexive pronouns
Plural bound morphemes
Bound pronominal clitics
Omissions
Spanish spelling conventions
Customized codes


Prerequisite: Familiarity with the standard SALT transcription conventions. 

Refer to the summary of transcription conventions for a quick reference of the standard SALT conventions as presented in Courses 1301 - 1308. This information will not be repeated in this course.

Materials Needed:

SALT 24 or SALT 20 software. Older versions of the software may be used though you may notice differences in the menu structures and the reports.
Adobe Reader® or other PDF reader which is needed to view document files.

Collapse
Setting Up a Bilingual Spanish Transcript

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

Collapse
Spanish Character Set

Why should Spanish diacritic characters be used?

The use of Spanish diacritics can mark grammatical differences between identical word forms, therefore potentially altering the meaning of the word and utterance. Including them will make the transcript more valid. The use of an accent mark or tilde can affect how the word gets counted as part of a certain word list (e.g., "el" as the direct article meaning "the" vs. "él" the personal pronoun meaning "he").

Are these characters built into the SALT program?

Although different character sets are not built into SALT, there are a variety of ways to access these characters. The following YouTube videos demonstrate how to insert Spanish characters. The step-by-step exercise at the end of this course includes a section on inserting Spanish characters.

Watch SALT YouTube video demonstrating how to insert Spanish characters

Windows® OS (4:38)

Play Video



Mac OS (2:58)

Play Video

Collapse
Overview of Transcription Conventions

As discussed in previous courses, it is best practice to elicit both English and Spanish samples from bilingual (Spanish/English) speakers.

English samples from these bilingual speakers are transcribed following standard SALT conventions with the following minor exceptions:

Modified communication units are used to segment utterances
Customized codes are used to mark occurrences of code-switching, fragments resulting from segmenting utterances, word-order problems, and imitated vocabulary 

Spanish samples are transcribed following standard SALT conventions with the following changes/additions:

Identify Spanish root forms using the vertical bar used to identify the root form of inflected words.
Use the code [X] to mark reflexive pronoun in order to differentiate them from non-reflexive pronouns.
/S is the only bound morpheme used.
Use the plus sign to mark bound pronominal clitics.
Use the asterisk to mark omitted words, bound morphemes, and clitics.
Use Spanish spelling conventions where necessary.
Use customized codes where necessary.


These topics are explained in detail in the following sections.

Collapse
Modified Communication Units

In SALT transcription, you typically segment utterances into communication units (C-units) as described in Course 1303. The English samples of bilingual (Spanish/English) speakers are segmented into modified communication units (MC-units) which were developed specifically for the bilingual samples to facilitate consistency in the transcription of both Spanish and English samples. When speaking or writing in Spanish, the verb conjugations themselves allow the speaker to eliminate pronouns after the subject has been initially stated. Therefore, to be consistent with the pronoun-drop nature of Spanish, English utterances containing successions of verbs without stated subjects are segmented. It is important to note that segmenting these dependent clauses affects analysis measures based on the utterance length and sentence structure, e.g., decreased mean length of utterance (MLU), decreased subordination index, increased number of utterances.

Modified Communication Units (MC-units) for Bilingual English Samples

Utterances containing successions of verbs without stated subjects are segmented. For example,

   C The gopher look/ed out of the hole.
   C and bit the boy.

   C The frog jump/ed.
   C and land/ed in the water.
   C and got away from the boy.

   C The boy peek/ed in the hole because he was curious.
   C and got bit.

   C The *owl was angry and flew at the boy.

These examples consist of an independent clause and one or more dependent clauses. With regular communication units, these utterances would not be segmented. But with modified communication units, the dependent clauses are segmented if the addition of the implied subject results in an independent utterance.

Special notes:

The 3rd example consists of an independent clause (The boy peek/ed in the hole) followed by two dependent clauses. The first dependent clause (because he was curious) cannot stand alone and is not segmented. The second dependent clause is segmented because, with the addition of the implied subject (and HE got bit), this clause can stand alone.
In the last example, the subject was omitted and could not be used to imply the subject in the dependent clause.


Recommended Coding of Segmented Utterances

In order to easily count and retrieve utterances which were segmented as a result of modified communication units, it is recommended that you insert a code at the end of each segmented utterance. For the samples in the SALT Bilingual SE databases, the [F] code was used. For example,

   C The gopher look/ed out of the hole.
   C and bit the boy [F].

   C The frog jump/ed.
   C and land/ed in the water [F].
   C and got away from the boy [F].

   C The boy peek/ed in the hole because he was curious.
   C and got bit [F].

   C The *owl was angry and flew at the boy.


Note that it is good documentation to add a descriptive plus line to the header information if you plan to use this code in the analysis. For example,

   + [F]: fragment due to utterance segmentation

Self Check
URL
Mark as done
Collapse
Identifying Spanish Root Forms

Why Identify Spanish Word Roots/Infinitive Forms?

The morphology of Spanish is so involved that it can make it appear that the speaker is using many more different verbs than they actually are. However, they are really just conjugating the same verb in different ways. The word root identification convention, vertical bar "|", was developed in order to credit Spanish speakers for use of morphological forms as well as to avoid over-inflation of the number of different words (NDW) produced. If a speaker produces a variety of inflected forms of the same word within a transcript (e.g., "es", "son", "eran", "éramos"), each production is transcribed to identify the infinitive form (e.g., "es|ser"). The speaker is given credit morphologically for producing different word forms, but each form is considered an inflected variation of the same root form of the verb, "ser".

Use the Vertical Bar to Identify the Word Roots

Use the vertical bar to identify a different word root than the one that was spoken. Be sure that the vertical bar and the root word directly follow the word used with no spaces between. For example,

   C Había|haber una vez un niño que tenía|tener una rana. 

Root identification instructs SALT to consider the word immediately preceding the "|" symbol as the word that was actually said (i.e., "había" and "tenía"), and the word immediately following to be the root word or infinitive form (i.e., "haber" and "tener").

Diminutives

In Spanish, a diminutive is a word with an added suffix that slightly changes the meaning of the word. Typically, diminutives reference a smaller version of something. The use of diminutives may be so pervasive in some Spanish dialects, however, that the morphological inflection of the diminutive may no longer indicate diminution. They may serve to add an emotional or endearing emphasis and may sometimes be used to convey sarcasm or negativity.

Following is a list of known diminutive suffixes: -ete, -eta, -ico, - ica , -ito, -ita, -illo, -illa, -uco, -uca, -ucho, -ucha, -uelo, -uela

In order to prevent potential mean length of utterance in morphemes (MLUm) inflation for speakers who use a high frequency of diminutives without strictly indicating diminution, it was decided that diminutives (i.e., perrito, casita) should not be counted as bound morphemes. Instead, diminutives are coded as main body words derived from the corresponding root words. Therefore, coding for diminutives follows the root identification convention. For example,

   C El niño dice|decir, "ranita|rana dónde estás|estar"?

   C El perrito|perro tumbó|tumbar las abeja/s.

Superlatives

Superlative forms, which reference a larger version of something, are not as pervasive in the Spanish language as are diminutives.

Some common superlative suffixes include: -ote, -ota, - ísimo, -ísima.

Like diminutives, coding for superlatives follows the root identification convention. For example,

   C Y el niño se[x] subió|subir en un árbol bien grandote|grande.

   C Y el agua estaba|estar friísima|fría.

Note, in the first example that "se" is coded as reflexive (refer to the section on reflexive vs non-reflexive pronouns for details).

Auxiliaries

SALT 18: Prior to SALT 20, auxiliary forms were marked differently than the non-auxiliary forms. The identified root form of the auxiliary was preceded with "aux", e.g., estaba|auxestar.

Using the Root Identification Files to Help Identify Word Roots

Although you can type in the vertical bars and root forms manually, SALT contains lookup files of words and their corresponding word roots which may be used to simplify the identification process. Using the "Edit menu --> Identify Roots" command, these root identification files (RIFs) are used to automatically identify a different word root than the one that was produced. All words not marked with the vertical bar are looked up in the RIF file. If not found, that word is ignored. If found, the user is presented with a list of choices to select from. Depending on the word, the identified root is either attached to the word using the vertical bar convention (e.g., era --> era|ser) or it replaces the word, as in this plural bound morpheme example (e.g., ranas --> rana/s). 

The RIF files may be edited to suit your purposes. Note: the active RIFs are selected using the "Setup menu --> Language Settings" option. There are two Spanish RIFs:

"Spanish Verbs" contains a complete list of over 469,000 verbs. The only verbs intentionally left out of the file are "las", "la", "les", "le", "lo", "una", and "uno" due to their word form overlap with specific articles and pronouns. As you are typing your transcript, you should identify the root form of these words when they are used as verbs. You should use this automation feature to identify all the other verbs in your transcript.
"Spanish Nouns and Clitics" which contains approximately 1,300 of the words used most often to retell the story Frog, Where Are You?. Because this is not a complete list, you should identify the plurals, diminutives, superlatives, and bound pronominal clitics as you are typing your transcript. This file may then be used to catch those you miss.


Important Notes

Following the automated root identification, you should read through your transcript to catch words that may have been missed or incorrectly identified. The "Directed Exercise" in the last section of this course contains step-by-step instructions for using the RIF files to automatically identify the root forms.

Self Check
URL
Mark as done
Collapse
Reflexive vs Non-reflexive Pronouns

Reflexive Verbs and Their Conjugations

In Spanish, the personal pronouns ME, TE, SE, OS, and NOS can be used both reflexively and non-reflexively. A reflexive verb is used to reflect action done to oneself, himself, herself, etc, as noted in the examples below. Reflexive pronouns accompany reflexive verbs, and the third person "se" may occur in clauses where the subject is ambiguous (he, she, they). For example, compare "Me cepillo los dientes" (I brush my teeth) versus "Te veo" (I see you). The first is reflexive because the subject is both doing and receiving the action of teeth brushing and the second is not because the action of seeing is falling upon someone else. Following are some additional examples to review reflexive verbs.

Reflexive

	

Translation


me meto
te levantas
nos acostamos
se cae
se caen
se baña
se bañan	I[myself] get into.
You[yourself] get up.
We[ourselves/each other] lie down.
He[himself]/she[herself]/it[itself]/you[yourself](formal) fall(s).
You[yourselves](formal)/they[themselves/each other] fall.
He[himself]/she[herself]/it[itself]/you[yourself](formal) bathe(s).
You[yourselves](formal)/they[themselves/each other] bathe.


When transcribing bilingual Spanish-English samples in SALT, the Spanish Standard Word Lists require that the reflexive personal pronouns are transcribed with the word code [X] attached to the pronoun. The non-reflexive pronouns are transcribed without the [X]. This difference is necessary to avoid giving a speaker credit for using both a reflexive and non-reflexive pronoun simultaneously (since the pronoun words are identical). Therefore, if reflexive pronouns are not coded this way in SALT, they will be counted inappropriately with the non-reflexive personal pronouns instead of with the reflexive personal pronouns. The following is an example of how to correctly use the code [X] to designate the use of reflexive pronouns in an utterance.


   C El niño se[X] fue|ir con el perro.   The boy left with the dog. 
   C El niño dijo|decir, "yo me[X] voy|ir para la casa".   The boy said, "I go home".

In contrast, the code [X] is not used when the pronoun is not reflexive:
   C El perro me ayudó|ayudar a conseguir la rana.   The dog helped me find the frog. 
    C El niño se la lleva|llevar a su casa.   The boy takes her to his home.

Romance Reflexives

"Romance Reflexive" pronouns accompany intransitive verbs. Intransitive verbs do not require a direct object, but they may take one in certain environments (i.e., with romance reflexives). For example, "El perro se[X] cayó". The dog fell. In this example, "se" is a romance reflexive that accompanies the intransitive verb "cayó." "Cayó" is considered intransitive because it can stand on its own or may take the romance reflexive pronoun "se".

El perro cayó|caer.  or  El perro se[x] cayó|caer.

Self Check
URL
Mark as done
Collapse
Plural Bound Morphemes

The plural bound morpheme, /S, is the only bound morpheme marked when transcribing Spanish samples. Use /S to indicate plural inflections of nouns, pronouns, adjectives, and adverbs. The /S is added to the root form without changing the spelling of the stem word as in the following examples:

ranas --> rana/s
abejas --> abeja/s
todos --> todo/s

If the surface form differs from its root form when pluralized, use the singular form of the word followed by the plural bound morpheme, /S, as in the following examples:

ellos --> él/s
felices --> feliz/s
flores --> flor/s
ratones --> ratón/s

Note that articles, such as "las" and "unos", are not marked for plurality as they are stand-alone morphemes. Also note that when "unos" and "unas" are used as pronouns, they are marked for plurality. For example,

1) C Detrás del tronco estaban|estar unas rana/s bebé/s.
2) C Una/s se[X] quedaron|quedar con su rana.


In the first utterance, "unas" is an article and is not slashed. In the second utterance, "unas" is a pronoun and is marked for plurality.

Other plural descriptors are marked. For example,

C Estaban|estar contento/s todo/s los animal/s.

Self Check
URL
Mark as done
Collapse
Bound Pronominal Clitics

About Pronominal Clitics

Pronominal clitics are unstressed object pronouns which can be prosodically bound, morphosyntactically bound, or both. Pronominal clitics must occur with a verb, because they are verb-related as direct or indirect objects. They can be located preceding the verb as a proclitic ,e.g., lo buscó, or positioned after the verb as an enclitic, e.g., buscarlo. Pronominal clitics can move within an utterance, which changes the form but not necessarily the content of the utterance. Accordingly, these pronouns can occur as freestanding clitics or as bound clitics.

Why code for bound pronominal clitics?

Spanish has great word order flexibility. The Spanish language is not as dependent on word order for meaning as is the English language. The freedom of movement that pronominal clitics possess is an important aspect in individual differences across language development and dialect. For example, a speaker could say "give it to me" in two ways:

1a) me lo das
1b) dímelo

Regardless of which version the speaker produces, (1a) or (1b), the content remains constant. Due to strict rules of spelling convention, (1a) is written as three separate words, and (1b) is written as one word. Herein lies the temptation to assign three words to (1a), and only one word to (1b). However, both versions should receive the same morphological credit in order to limit over-inflation of MLU and control the effects of dialectical variation. To do this, bound (not freestanding) pronominal clitics are identified with a plus sign '+'.

As an example, "dímelo" (1b) is coded for bound clitics in the following manner so that it's counted as three words:

2b) di+me+lo

The "+" symbol indicates the use of bound clitics by the respective personal pronouns. Whether or not pronouns indicate clitic-usage, they are still analyzed as separate main body words and separate root words. Thus, (1a) and (2b) will be given equal weight in the analysis. Both possess the same verb and object pronouns; they have equal morphological value.

It should be clear that pronominal clitics can be bound or they can be freestanding, depending on the order of the pronoun(s) in relation to the verb. What is constant is that pronominal clitics always appear with a verb, even though they do not always stand immediately next to the verb.

For example:

C Dámelo|dar+me+lo . Give it to me.
C Me lo das|dar.  Give it to me.
C Él está|estar  gritándole|gritar+le  a la rana. He is screaming at the frog.
C Él le está|estar gritando|gritar a la rana. He is screaming at the frog.

Bound morphemes versus bound pronominal clitics

Bound morphemes are marked with a slash, e.g., rana/s, and bound pronominal clitics are marked with a plus sign, e.g., buscar+lo. Bound morphemes receive morpheme credit but not word credit. Thus "rana/s" would be counted as one word with two morphemes. Bound clitics receive both word and morpheme credit. Thus "buscar+lo" would be counted as two words and two morphemes.

Self Check
URL
Mark as done
Collapse
Omissions

An omission occurs when a word or bound morpheme, which is obligatory for grammatical correctness, is absent. Omitted words, bound morphemes, and clitics are not included in calculations such as "mean length of utterance", "number of different words", or "words per minute". You should mark omissions, however, because they may be an important indicator of poor syntax. 

Omitted Words

The asterisk symbol (*) is used to indicate an omitted word. At the point in the transcript where the word was omitted, type an asterisk followed by the omitted word. There should be no blank spaces between the asterisk and the omitted word. For example,

WHAT WAS SAID
El niño estaba viendo la rana.
Él trataba de salvar.
Fueron el parque.


La rana es de niño.

	TRANSCRIPTION
C El niño estaba|estar viendo|ver *a la rana.
C Él *lo trataba|tratar de salvar.
C Fueron *a el parque.
C La rana es de *el niño.



Omitted Plural Bound Morphemes

A slash followed by an asterisk is used to indicate the omission of a bound morpheme in obligatory context. Type the slash, the asterisk, and the missing bound morphemes at the point in the transcript where they've been omitted. For example,

WHAT WAS SAID
El perro le dio mucho besitos.
Era la rana con ocho hijo.	TRANSCRIPTION
C El perro le dio|dar mucho/*s besito|beso/s.
C Era|ser la rana con ocho hijo/*s.

 
Omitted Pronominal Clitics

Pronominal clitics are obligatory with reflexive verb pronouns, so it is necessary to account for a speaker's omissions. There are two options for marking the speaker's failure to use a pronominal clitic in an obligatory context, 1) as an omission of a word (unbound), or 2) as an omission of a bound clitic. It doesn't make much difference which way you mark this type of omission since omissions are not included in any of the calculations based on words. The important thing is to mark that the omission occurred. To mark the omitted clitic as a word (unbound), type an asterisk and then type the omitted pronominal clitic. To mark the omitted bound clitic, type the clitic marker followed by the asterisk (+*) and then type the omitted clitic.

Consider the following example:
    E Qué pasó|pasar?   Examiner asks, "What happened?"

Here the speaker should respond "Él se levantó tarde" or "Él levantóse tarde" (he woke himself up late). Instead the speaker said, "Él levantó tarde". This omission of the obligatory reflexive pronoun/clitic "se" should be coded as:
    C Él *se levantó|levantar tarde.    He woke up late.
or
    C ÉI levantó|levantar+*se tarde.   He woke up late.

Omitted Something - Not Sure What

Sometimes it is impossible to determine the specific words, bound morphemes, or pronominal clitics that are missing. If you know what part of speech is missing you can mark the omissions like this:

WHAT WAS SAID
La botella no estaba la rana.
Se escondieron en enorme roca.	TRANSCRIPTION
C *PREP la botella no estaba|estar la rana.
C Se escondieron|esconder en *ARTICLE enorme roca.


If you are unable to determine what part of speech is missing, flag the utterance with the error code [EU] to indicate that there is something wrong with this utterance. The [EU] code indicates an utterance-level error. Coded utterances can be counted and called up later for further analysis.

Self Check
URL
Mark as done
Collapse
Spanish Spelling Conventions

Spelling consistency is very important for a reliable and representative sample. Since each word with even a slightly different spelling appears as a different word in the analysis, it is important to follow some standard spelling conventions to ensure consistency within and across transcripts.

Be aware that the SALT editor's error check does not monitor spelling consistencies.

Abbreviations
Abbreviated words should either be spelled out or left as an abbreviation but without the period, e.g., Sra, Señora.
Bound Morphemes
Use /s for regular plural inflections, e.g., rana/s.
Proper Names and Titles
Enter proper names or titles as a single linked word, e.g., the book title "El Niño y La Rana" should be transcribed as El_Niño_y_La_Rana.
Routine Phrases
Routine phrases are phrases which are used as a single unit. In the following examples, the routine phrases are transcribed as single words using the underscore character.
C Y le iba|ir a decir "buenas_noches rana".
C De_repente salió|salir un búho.
Hyphenated Words
The hyphen has recently been added as a legal word character. You may choose to use the hyphen in place of the underscore character. Just be consistent in how you use them.
Self Check
URL
Mark as done
Collapse
Customized Codes

In addition to the error codes ([EO:word], [EW:word], and [EU]), the following codes were consistently included when transcribing the English and Spanish samples in the SALT Bilingual SE reference databases:

[CS] is a word code attached to all code-switched words (Spanish words in English transcripts or English words in Spanish transcripts).
[I] marks the child's vocabulary which is provided by the examiner and then imitated by the child.


The following codes were used in the English samples to mark Spanish-influenced English:

[WO] is an utterance-level code signifying words or phrases within an utterance which are out of order in Standard English. The content (semantics) of the utterance is correct; however the word order is awkward, e.g., C And then fall down the dog and the boy [WO].
[EW] marks extraneous or unnecessary words in the utterance that, if omitted, would make the utterance syntactically correct, e.g., C And he shout/ed and[EW] to the frog.
[F] is placed at the end of each utterance lacking a stated subject as a result of segmenting utterances using modified communication units (refer to section in this course on Modified Communication Units).
Collapse
Step-by-Step Exercise

Use SALT to complete this exercise where you will enter a short Spanish transcript and automatically identify root forms and reflexive pronouns.

SALT 24: Exercise

SALT 20: Exercise

Collapse
Final Quiz & Certificate of Completion
Final Quiz
To do 

The final quiz has 10 questions. You must answer 8 of them correctly to pass.

30-second Feedback
 Not available unless: The activity Final Quiz is complete and passed
Certificate of Completion
Show more 
 Not available unless: The activity 30-second Feedback is marked complete ...
