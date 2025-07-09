---
title: Explore Game States
sidebar:
    label: " - Explore Game States"
---

Create a small program that explores different game states to allow you to switch between different logic for menus, or other screens within an interactive program.

Use an enumeration to represent the different game states: playing, showing details, or showing menu.

Have a game data struct with the current state (using your enum), the player's location (x and y), and a boolean to indicate if the game should quit.

Make sure to use functions and procedures to initialise the game data and draw the different game states. (See the hints at the end of this page for more details.)

In main, you can have all the code to update the game details. This can check the game state and then check user interaction to see what needs to change.

Loop while quit has not been requested, and the game's quit is false.

When current state is...

- **playing**:
  - Clear the screen to white
  - Draw a circle to represent the player
  - Move the player to a new random position when the user hits the space bar
  - Change the current state to:
    - showing details - when the user presses 1
    - showing menu - when the user presses 2
- **showing details**:
  - Clear the screen to light blue
  - Draw the player circle in a lighter color
  - Draw a small black circle with a radius of 2 at the player location
  - Draw the player location to the screen
  - Change the current state to playing when the user presses space
- **showing menu**:
  - Clear the screen to light green
  - Change the current state to playing when the user presses space
  - Quit the game if the user presses q

:::tip[Hints:]

Make sure to show that you can use the structs and enums that you have created.

Here are some functions and procedures you may want to consider adding:

- A function to initialise all the game data - something like "new game".
- Procedures to draw the game, and different game states:
  - A procedure to draw the game in the "playing" game state.
  - A procedure to draw the game in the "show details" game state.
  - A procedure to draw the game in the "show menu" game state.
  - And a "draw game" procedure which can *switch* based on the current state and should call different draw procedures such as "draw playing", "draw menu", etc.
  - *Each of these procedure above will need to be passed the game data through a parameter.*

:::

:::note[Useful SplashKit functions and types:]

You could consider using the [`point_2d`](https://splashkit.io/api/types/#point-2d) struct from SplashKit to store the x and y location of the player. Then you can use functions like [Random Screen Point](https://splashkit.io/api/geometry/#random-screen-point) to position the player, and [Point To String](https://splashkit.io/api/geometry/#point-to-string) to draw text with the player's position.

The [SplashKit Colors](https://splashkit.io/guides/color/splashkit-colors/) page has a grid with all SplashKit's [Color](https://splashkit.io/api/color/) options in the "Color Palette" section.

:::
