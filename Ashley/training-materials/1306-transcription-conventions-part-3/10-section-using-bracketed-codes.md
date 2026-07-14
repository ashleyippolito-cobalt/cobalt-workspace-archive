# Section: Using Bracketed Codes

<!-- https://classes.saltsoftware.com/course/section.php?id=95 -->

Section outline

Codes can be attached to any word or utterance in your transcript to mark features for which there isn't a transcription convention.

Acceptable Codes

A code consists of characters enclosed within square brackets. When you create a custom code do not use a blank space within the code and never split the code between lines. Avoid using symbols which have special meaning in SALT such as transcript-entry and search symbols. In particular, avoid using the @ sign and the = sign as their usage will generate a warning message in SALT. For example,

ACCEPTABLE CODES
[EP:pronoun]
[TopicInit]

	

UNACCEPTABLE CODES
[EP pronoun]
[LEX=FROG]

Word Codes

There are two types of codes - word codes and utterance codes. A word code is any code that is attached to the end of a word without any space between the word and the code. There's no limit to the number of words that may be coded or to the number of codes that may be attached to each word. Word codes are used to mark features of specific words. For example,

    C The big frog were[EW:was] mad.    word-level error
    C Then he[Ref] push/ed him[NoRef] off.    coding pronoun referencing

Utterance Codes

An utterance code is any code that is not attached to a word. They may occur anywhere in the utterance before the end-of-utterance punctuation mark. There's no limit to the number of utterance codes that may be inserted. For example,

    C He book [EU].    utterance-level error
    E What are your plan/s for the weekend [TopicInit]?    utterance which initiates a new topic
    C And [POINT:car] [POINT:garage] here.    coding gestures
