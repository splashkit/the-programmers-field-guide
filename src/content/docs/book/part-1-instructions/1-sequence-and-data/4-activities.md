---
title: Activities
---

Having explored this leg of the journey you are now approaching a rest stop and a chance to practice and reflect.

## Test Your Knowledge

The following activities describe a program that you can create using the concepts we have learnt so far. Use these to validate that you have developed the knowledge and skills needed to create programs that involve sequence and data.

As you work through this, you need to draw together several aspects important to programming. Focus on the **programming process and tools**, building your program in several iterations that involve you understanding, designing, implementing and testing your program. Focus on **syntax** as you memorise the syntax for the different instructions, and pick up some methods you can use in the libraries we are using. Lastly, focus on the **programming concepts** associated with the instructions, building blocks, and terminology developed through this chapter. In particular, focus on the idea of sequence, the use of variable, constant, data types, and method building blocks, and the terminology for expressions, literals.

### Unit Converter

Here we will be putting together everything we learnt across the last section into something that might help us - A unit converter!

In this task, it is up to you to create a program that takes in a number of millimeters, and converts them into metric units such as centimeters, meters, and kilometers, as well as imperial units such as inches, feet, and miles.

For your reference:

- There are 10 millimeters in a centimeter
- There are 100 centimeters in a meter
- There are 1000 meters in a kilometer
- There are 25.4 millimeters in an inch
- There are 12 inches in a foot
- There are 5280 feet in a mile

Your program should:

- Ask the user how many millimeters they would like to convert.
- Output the resultant conversions for both metric and imperial units

### Sound Player

Here we will be trying out some SplashKit functionality and playing a song (or part thereof) back to us!

In this task, it is up to you to create a program which will ask the user the filename of a sound file, the name they would like to refer to it as, and for how long they would like to play it. You will then play the sound back at 50% volume for the specified time, then again at 100% volume.

NOTE:
Your sound files need to be stored under: [PROJECTNAME]\bin\Debug\net8.0\sounds (If you don't have a sounds folder, create one)

You might need the following SplashKit functions:
new Music();
SplashKit.LoadMusic();
SplashKit.Delay();
SplashKit.StopMusic();

Your program should:

- Ask the user the file name (including the file extension) of the sound
- Ask the user what they would like to name the song
- Ask the user how long they would like the song to play for in seconds
- Play the section of the song the user asked for at 50%, then 100% for the time specified by the user

### Game Splash Screen

Here we will be creating the beginning of any good game; a splash-screen/title animation!

In this task, it is up to you to create a short sequence of SplashKit events, such as shapes, colours, images, sound/music, and delays to act as an introduction or title animation to a game.

You might need the following SplashKit functions:


Your program should:

- Welcome the user to the game with an appropriate title
- Play an introductory animation users shapes, colours, images, sound/music, and delays