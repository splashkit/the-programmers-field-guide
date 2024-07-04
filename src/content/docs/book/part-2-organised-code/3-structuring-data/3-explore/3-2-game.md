---
title: Explore Game States
sidebar:
    label: " - Explore Game States"
---

Create a small program that explores different game states to allow you to switch between different logic for menus, or other screens within an interactive program.

Use an enumeration to represent the different game states: playing, showing details, or showing menu. Have a game data struct with the current state (using your enum), the player's location (x and y), and a boolean to indicate if the game should quit.

Make sure to have a function to initialise all the game data - something like "new game". Also have a procedure to draw the game, this can switch based on the current state and should call different draw procedures such as "draw playing", and "draw menu". Each will need to be passed the game data.

In main, you can have all the code to update the game details. This can check the game state and then check user interaction to see what needs to change.

Loop while quit has not been requested, and the game's quit is false.

When current status is...

- playing
  - Clear the screen to white
  - Draw a circle to represent the player
  - Move the player to a new random position when the user hits the space bar
  - Change the current state to:
    - showing details - when the user presses 1
    - showing menu - when the user presses 2
- showing details
  - Clear the screen to blue
  - Draw the player location to the screen
  - Change the current state to playing when the user presses space
- showing menu
  - Clear the screen to green
  - Change the current state to playing when the user presses space
  - Quit the game if the user presses q

:::caution

Make sure to show that you can use the structs and enums that you have created.

:::

:::tip

You could consider using the `point_2d` struct from SplashKit to store the x and y location of the player. Then you can use functions like [Random Screen Point](https://splashkit.io/api/geometry/#random-screen-point) to position the player.

:::
