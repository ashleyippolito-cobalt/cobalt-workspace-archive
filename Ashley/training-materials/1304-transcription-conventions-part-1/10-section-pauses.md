# Section: Pauses

<!-- https://classes.saltsoftware.com/course/section.php?id=76 -->

Section outline

If you're interested in the frequency and duration of unfilled pauses, enter the length of each significant pause at the point where it occurs in the transcript. Pause length is measured to the nearest second. For the SALT database transcripts, all pauses 2 seconds or longer were marked.

Pauses within utterances

The pause-time information should be entered at the point in the utterance where the pause occurs. Pause-time should be separated with a blank space from any adjacent words. For example,
    E What movie did you watch?
    C It :02 was (um :05) Batman.

Pauses between utterances

Enter the length of the pause in minutes:seconds or :seconds on its own line. This "pause line" must start with either a colon or a semicolon, depending on whether or not there is also a turn change. Use a colon to indicate a pause that results in a turn change and a semicolon when there is no accompanying turn change. Pause time may be entered as:
     :  min:sec     or     ;  min:sec
     :  :sec           or     ;  :sec
     :sec              or     ;sec        { this last format was added beginning with SALT 18 }

For example,

Change in speaker and speaker turn:
    E What are you hold/ing?
    : 0:03
    C A ball.

No change in speaker, change in speaker turn:
    C And then he saw the giant.
    :05 {something fell}
    C Oops.

No change in speaker or in speaker turn:
    C We drive a car.
    ; 0:03
    C We never fly anywhere.

The distinction of colon versus semicolon is important to the analysis of turn length. In the first example it is obvious that there is a turn change after the pause as there is also speaker change. Therefore, the pause line starts with a colon. In the second example there is a turn change despite the fact that there is no speaker change. After the pause, the child continues to speak but the topic is not continued. Therefore, the pause line starts with a colon so that the second child utterance begins a new turn. Notice that a few words describing the nature of the pause-time may be placed in comment braces immediately following the time entry. In the third example there is neither a speaker change nor a turn change. Although there is a significant pause, the same speaker continues with the same line of thought. Therefore, the pause line begins with a semicolon.

Marking pauses without timing them

Enter an empty pause time if you want to mark the occurrence of significant pauses but do not want to time them. For example,

Within-utterances pauses:
    E What movie did you watch?
    C It : was (um :) Batman.

Between-utterance pause, change in speaker turn:
    E What are you hold/ing?
    :
    C A ball.

Between-utterance pause, no change in speaker turn:
    C We drive in a car.
    ;
    C We never fly anywhere.

Self Check
URL
Mark as done
