---
title: Click Game
sidebar:
    label: " - Click Game"
---

For this activity, create a program that lets the user enter a number of targets to hit. Then, show a window that displays the number of targets left to hit, using a health-bar style graphic (a partially filled bar, based on proportion of initial target remaining). Draw a circle on the screen, and test if the user has clicked the circle. When they do click it, subtract one from the targets to be hit, ending when this is 0.

```txt
Welcome to target click.

What is your target score: ten
Please enter a whole number
What is your target score: 10

Click 10 targets to end the game.
// a window opens, showing number of targets
//      show target using a "health bar" style visualisation.
// draw a target circle...
// when it is clicked...
//      Remove one from the number left to hit
// end when there are no targets left to hit
```

:::tip[Hints:]

Here are some functions and procedures you may want to consider adding:

- Functions to [read and validate data from the user](/book/part-2-organised-code/2-organising-code/1-tour/00-2-explore-functions) (numbers)
- A procedure to play the game *(optional)*
- A procedure to draw the game, that uses a procedure to draw the target bar
- A procedure to draw the target bar - using parameters for position and proportion of bar to be filled. This can be drawn with two rectangles - using the proportion to be filled for one dimension of the second rectangle.
- A function (target hit) to check if the user has clicked, and the mouse is inside the target circle.

:::

:::note[Useful SplashKit functions:]

You can use the [Point In Circle](https://splashkit.io/api/geometry/#point-in-circle-with-values) function to test if the mouse is in the circle. See [Mouse X](https://splashkit.io/api/input/#mouse-x) and [Mouse Y](https://splashkit.io/api/input/#mouse-y) to get the location of the mouse.

:::
