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

### Advanced Unit Converter & Calculator

NEED TO ADD

### Creating a Key Collection Game

In this project, you will need to develop a simple puzzle game where the player needs to move a character around a window and collect 3 randomly placed keys in the correct order based on their colour. Once each of the keys have been collected, the game should check if you have collected it in the correct order and if not; all keys should be deleted and 3 new keys should be placed in the level in random locations. Once all keys have been collected in the correct colour order, you should stop taking movement input and write "WIN" on the window.

Some SplashKit functions you might need:

- Rnd()
- KeyDown()
- BitmapCollision()

Your program needs to:

- Spawn the character bitmap in the center of the window
- Spawn three key bitmaps of different colours at random locations throughout the window, making sure to not initially overlap with the character
- Allow the player to move their character around with WASD
- If the player moves to the edge of the window, they should wrap around to the other side of the window
- Allow the player to collect a key once their character has overlapped with the key
- Check to see if keys have been collected in the correct colour order
  - If so, stop taking input and display "WIN" on the window
  - If not, spawn the keys in different random locations again with the same colours, making sure to not initially overlap with the character