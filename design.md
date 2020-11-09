# Design Strategies and Associated Documents
Dated: 11/9/2020
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

### Webpages and Application
The application portion of the player piano front-end is dominated by the index.html file running on SPA or Single Page Application. SPA is known for quick renders and simple implementation work. For the most part, much of the functionality of the device is slaved to python scripts that handle the actual GPIO and MIDI parsing, managing, and functionality. 

Below are the webpages and their respective
1. Home Screen

1. Library Screen
This screen loads the MIDI library allowing for either the upload of a new song, or the

1. Play Screen

Requires the ability to record while playing: records to MIDI file.

1. Calibration Screen

This screen is an automated self-test of the system to record and reiterate playing values(volume modifier) to the system.
In process, it looks like the following: selection of dynamic e.g. fff > play note > microphone feedback > correct solenoid values until correct dB > all notes. 

[POSSIBLE FEATURE] User specifies the volume - perhaps for each of the major dynamics a la p, mp, mf, f. 

1. Help Screen

{WIP} - Not yet implemented. Will consist of a full/half-page of the general get-started information for the user. 

### Server-PWM System (SPS) 

### Server-Feedback System (SFS)
