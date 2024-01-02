---
title: Activities
---

Now it is time to build something yourself. Use the concepts and processes that we have described throughout Part 1 to design and implement at least one of these programs.

If you have access to others learning to program, this can be a great time to talk them through how you approached this. Share the challenges you faced, and the strategies you used. Listen to how they approached things, and try to learn from their experiences.

If you have access to others with more experience, explain your programs to them and use them to help you when your rubber ducky debugging doesn't help you find the solution to your current problem. Don't let them give you the answer, get them to ask you questions to help you find the answer yourself. After all, you want to master these skills to help ensure you understand how computers works and how to make effective use of them.

## Projects

Here are some project ideas to get you going.

**TODO: Add activities**

### Reaction Time

Create a graphical application to capture reaction times. Show a shape and record the time it takes for the user to hit the space bar after the shape is drawn.

- Ask the user how many tests they want to perform in the terminal at the start.
- Give the user the instructions in the terminal
  - Ask the user to hit the space key after they see something on the screen (a circle maybe)
  - Get them to acknowledge this before continuing
- Show the window, where you will draw something.
- Use some timing code to delay and show the shape for the start of the reaction test.
- Record how long the user took to respond
- Print out a log of the times to the terminal
- Print the average reaction time at the end of the program, after the indicated number of tests.

### Accuracy Test

Create a graphical application that gets the user to indicate the midpoint between two circles.

- Ask the user how many tests they want to perform in the terminal at the start.
- Give the user the instructions in the terminal
  - Ask the user to click the mid-point between two circles
  - Get them to acknowledge this before continuing
- Show the window
- Draw two random circles (of fixed size)
- Get the coordinate the user clicks, and output how far off they were for both the x and y coordinate in the test. Keep a sum of these two differences so that you can output a summary at the end.
- Print the average x and y offsets at the end of the program, after the indicated number of tests. 

## Test Your Knowledge

### Task 1 - 

NEED TO ADD

### Task 2 - Creating a 3-Song Sound/Music Player

In this project, you will need to build a simple 3-song music player, where the user will be able to set up to three of chosen sound clips. The program will continously ask if the user wants to choose a sound slot, and then either set the slot to a new sound, or play the existing sound. When setting a new sound, the program should ask the user where the sound is located, the file name, sound name, and for how long they would like the sound to play.

Some SplashKit functions you might need:
OpenAudio()
PlayMusic()
FreeMusic()
LoadMusic()
MusicNamed()

Your program needs to:

- Ask the user which sound slot they would like to select, showing information about the sound if previously entered
- Once a slot is selected, ask if the user would like to set a new sound for the slot, or play the current sound in the slot
  - If there is no sound in the selected slot, it should skip asking this and instead skip to setting a new sound for the slot
- When setting a new sound, ask the user for the path where the sound is located, the file name for the sound, and for how long (in seconds) they would like the sound to play for
- When playing a sound, the sound should only play for the amount of time the user has defined
- If the user fills all three sound slots, the program should additionally praise the user on their full sound library

### Task 3 - Creating a Key Collection Game

In this project, you will need to develop a simple game where the player needs to move a character around a window and collect 3 randomly placed keys in the correct order determined by you. Once all the keys have been collected, if keys are collected in the wrong order, all keys should be deleted and 3 new keys should be placed in the level in random locations. Once all keys have been collected in the correct order, you should stop taking movement input and write "WIN" on the window.

Some SplashKit functions you might need:
Rnd(min: int, max: int)
KeyDown(KeyCode key)
Some kind of sprite collision, or maybe using rectangles and circles

Your program needs to:

- Spawn the character in the center of the window
- Spawn three keys of different colours at random locations throughout the window, making sure to not initially overlap with the character
- Allow the player to move their character around with WASD
- Not allow the player to move their character outside of the window
- Allow the player to collect a key once their character has overlapped with the key
- Check to see if keys have been collected in the correct order
  - If so, stop taking input and display "WIN" on the window
  - If not, spawn the keys in different random locations again, making sure to not initially overlap with the character