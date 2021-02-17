# Design Strategies and Associated Documents
Dated: 2/16/2021
## Index:
#### Server Setup & Routing
* Connection to HTML Pages & WIFI Connectivity


#### Webpages and Application
* Home Screen

* Library Screen
 
* Play Screen

* Calibration Screen

* Help Screen


#### Server-PWM System (SPS)
* MIDI File Parsing and Communication

* Solenoid Test Array Interaction



#### Server-Feedback System (SFS)
* Teensy Connection and Protocol


* Teensy-Based Files

## Design

### Server Setup & Routing

Server routing is set up and ready. Familiarization WIFI connection ease of use to be included in minor prototyping and proto-typing. Much of the leg-work is saved for the production leg of the project in the Spring.


### Webpages and Application
The application portion of the player piano front-end is dominated by the index.html file running on SPA or Single Page Application. SPA is known for quick renders and simple implementation work. For the most part, much of the functionality of the device is slaved to python scripts that handle the actual GPIO and MIDI parsing, managing, and functionality. 

Note that there isn't a web development framework being used - if this matters to you, then you know more than I do and might wish to plan a design where the code is converted/redrawn with an easy-to-use one.

Below are the webpages and their respective informational blurbs. Some major features and comments have been included for misc. information.

1. Home Screen

The home screen is the main landing page for all directories leading to any user-directed function. Links are derived from here and so this page will be updated as per pages included as time goes on. 

1. Library Screen

This screen loads the MIDI library allowing for either the upload of a new song, or the playing of a song with the associated features. 

1. Play Screen

{WIP} - Mostly not implemented. Will be based off previous iterations of the device, specifically 19363. 

[FEATURE] Requires the ability to record while playing: records to MIDI file.

1. Calibration Screen

This screen is an automated self-test of the system to record and reiterate playing values(volume modifier) to the system.
In process, it looks like the following: selection of dynamic e.g. fff > play note > microphone feedback > correct solenoid values until correct dB > all notes. 

{WIP} - Not yet implemented. Will be based off previous iterations of the device, specifically 19363. 

[FEATURE] User specifies the volume - perhaps for each of the major dynamics a la p, mp, mf, f. 

1. Help Screen

Consists of a full/half-page of the general get-started information for the user. 

### Server-PWM System (SPS) 

By Using a Django python framework, inside of the webpages of Play will contain a python script that will handle the processing of MIDI information and send the proper information to the PWM. This information has mostly been formatted in the 19363 iteration, so those files will be used to template the future design.

Current design invovles prototyping test file that has, successfully, pinged signals to the PWM board. Fully Pi-to-Solenoid not yet testing, as the wrapper board for the PWM has had issues. These will be rectified and the full scale will be tested.

{WIP} - Template from 19363 - Rudimentary test files available. 

### Server-Feedback System (SFS)

By Using a Django python framework, inside of the webpages of Play, Calibration, and Recoard will contain a python script that will handle the processing of button information sent in from the Teensy boards and send the proper information to the Pi. Some of the final design legwork has been accomplished in previous iterations and so those templates have been prototyped in recent weeks. Further testing to be expected before production leg in the Spring. 

{WIP} - Template from 19363/20363 - Rudimentary test files available. 

