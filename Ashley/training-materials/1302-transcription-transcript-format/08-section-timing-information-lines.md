# Section: Timing Information (- lines)

<!-- https://classes.saltsoftware.com/course/section.php?id=60 -->

Section outline

Timing information may be important in assessing a speaker's productivity or fluency. Speech rate and elapsed time are calculated from timing information supplied at the beginning and at the end of the transcript. When timing information is provided, the program calculates speech rate in terms of "utterances per minute" and "words per minute".

Obtaining Timing Information

If you are working with a digitized language sample, the timing information is displayed while the sample is playing. Just note when the sample begins and when it ends. If the timing information is not provided for you, replay the entire sample using a stop watch or clock to measure the length of the sample.

Marking Elapsed Time

Two timing lines are needed, one at the beginning of the transcript to initialize the clock, and one at the end of the transcript to stop the clock. You have the option of inserting other timing lines, perhaps minute markers, in the transcript. Each timing line begins with a hyphen and is followed by the time. The time may be entered as ":seconds" or "minutes:seconds" or "hours :minutes:seconds". Possible timing lines in each of these formats are shown in these examples:

Example: no time passed (initialization)
 - 0:00
Example: five seconds
- 0:05
- :05
Example: two minutes and five seconds
- 2:05
- 2:5
Example: one hour, twelve minutes and fifty seconds
 - 1:12:50
- 72:50

Initializing the Clock

When a new transcript is created using the header dialog box, an initial timing entry of -0:00 is automatically supplied on a line beginning with a hyphen. This is the default initial time and may be edited if you wish to start the clock at some other time. The initial clock time must precede the first utterance. If the initial clock time is missing, the default time of zero is assumed. For example,

$ Child, Examiner
+ CA: 7;2
+ Context: Con
- 0:00

Stopping the Clock

To stop the clock, insert a timing line at the end of your language sample that provides the final clock time. If the initial time is 0:00, then the final time is the elapsed time. If the initial time is not 0:00, then the elapsed time is calculated by subtracting the initial time from the final time. In the following example, the elapsed time is 6 minutes and 10 seconds.

$ Child, Examiner
+ CA: 7;2
+ Context: Con
 - 0:20
E Tell me about your plan/s for the weekend.
 ... dialog ...
E Ok, that/'s all for now.
- 6:30

Marking a Gap in Time - Stopping and Restarting the Clock

If there is an interruption during the language sample, you may need to stop and restart the clock. To do this, insert two timing lines with no utterances between them. The elapsed time between these two timing lines is subtracted from the overall elapsed time. In the following example, the clock is "paused" while the child gets a drink of water. Elapsed time for this transcript is calculated by taking the overall time of the sample, 7:30, and subtracting out the interruption time, 3:30, for a total elapsed time of 4:00.

$ Child, Mother
+ Context: Con
- 0:20
M What are you gonna do?
M You can play with any toy you want.
C I want the truck.
- 3:15 {mom and child leave to get a drink}
- 6:45
M What do you want to do now?
C Read this story.
- 7:50

Adding Extra Timing Lines

You have the option of inserting additional timing lines throughout your transcript. There are several reasons for doing this. If your language sample consists of several sections such as different conversational topics or different narrative stories, you may want to place a timing line between each section. These timing lines may then be used to segment your transcript during analysis, giving you the option of analyzing specific sections. Or you may want to insert timing lines at predefined intervals in your transcript, such as every minute. These timing lines may then be used to define sections of your transcript for analysis based on time. For example,

$ Child, Examiner
- 0:00
E You can play with any toy you want.
C I want the truck.
- 1:00
C I want the red truck.
E Push the truck.
C Truck is going under the bridge.
- 2:00
E Make the truck go over the bridge.
C Ohoh, the truck fell.
- 2:15
