---
title: Activities
---

## Test Your Knowledge

### Petrol Price Information

Here we will be creating some useful information based on petrol prices that the user enters.

In this task, it is up to you to create a program asks the user for how much they paid per litre the last time they purchased petrol, and then update some useful statistics based on all of the previous prices entered by the user.

Your program should:

- Ask the user how much they paid per litre (in cents) the last time they purchased petrol
- Ask the user how many litres they purchased in the same transaction
- Output the average petrol price that the user has paid for petrol ever (in cents)
- Output the total amount the user has ever paid for petrol (in dollars and cents)
- Repeat all of this until the user quits the application

Validation:

- Ensure that your petrol price and petrol litres are positive numerical values

### Sound Player - Changing the Sound

Here we will be expanding upon what we did in the previous activity, and make it so that we can re-enter sound information instead of having the program only work once.

In this task, it is up to you to create a program which will ask the user the filename of a sound file as well as the name they would like to refer to it as. You will then play sound until either it reaches the end of the clip, or the user decides to end it early. On top of this, once the song has finished playing, it should ask if the user wants to either repeat the same song, or re-enter different song information.

You might need the following functions:

- MusicPlaying()
- HasMusic()
- TerminalHasInput()

Your program should:

- Ask the user the file name (including the file extension) of the sound
- Ask the user what they would like to name the sound
- Play the section of the sound the user asked for
  - The sound should play until either it finishes, or the user decides to finish it early
- Ask the user whether they would like to replay the same sound segment, or re-enter new song information

Validation:

- Ensure that the sound clip the user attempts to enter is valid

### Flicking Ball Game

Here we will be making a game where we can "flick" a ball across the screen towards a goal.

In this task, it is up to you to create a game where the player must get a ball into a goal. The player must click somewhere on the screen and the ball should be fired in that direction, with a varying power based on how far the click was away from the ball. The ball should then be affected by "gravity" and constantly fall towards the ground. Once the ball overlaps with the goal, clear the screen and tell the player that they have won!

You might need the following SplashKit functions:

- ProcessEvents()
- MouseDown()
- TriangleRectangleIntersect()

Your program should:

- Place a ball (square) somewhere on the window
- Place a goal (triangle) somewhere else non-trivial on the window
- Fire the ball in the direction that the player clicks on the window with a greater power the further the click is away from the ball
  - Once the ball is moving, it should be affected by "gravity", that being some downwards force
  - If the ball hits the edge of the screen, place the ball back at its initial position and let the player fire again
- Clear the screen once the ball overlaps with the goal and tell the player they have won
