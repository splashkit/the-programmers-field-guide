---
title: Player Profile
sidebar:
    label: " - Player profile"
---

Many games will need a player profile. For this activity, create a program that lets the user enter the player's name, and a number of targets to hit. Then, show a window that displays the player name and the number of targets left to hit. Draw a circle at a random place on the screen, and test if the user has clicked the circle. Subtract one from the targets to be hit, and end when this is 0.

```txt
Welcome to target click.

What is your name: Andrew
What is your target score: ten
Please enter a whole number
What is your target score: 10

Click 10 targets to end the game.
// a window opens, showing the user's name and target
// draw a random circle...
// when it is clicked...
//      generate a new position for the circle
//      and remove one from the number left to hit
// end when there are no targets left to hit
```

:::caution

Make sure you are using this to demonstrate how to build this using functions and procedures. Here are some functions and procedures you may want to consider adding:

- Output details (taking in the two team names and scores)
- Functions to read and validate data from the user (strings, numbers)
- Function to check if the user has clicked inside the target circle
- A procedure to draw the game, that uses a procedure to draw the users information

:::
