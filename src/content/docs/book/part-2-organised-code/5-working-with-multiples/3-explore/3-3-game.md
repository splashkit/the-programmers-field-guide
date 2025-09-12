---
title: Rock Dodge Game
sidebar:
    label: " - Rock Dodge"
---

Create a rock dodge game.

The rock dodge game will have:

- a number of rocks being dodged (the system needs to support up to 100 rocks)
- a score
- the position of the player (x and y)
- the time for the next rock to appear
- a number of lives (3 to start)

Each rock will have:

- a position (x and y)
- a size
- a speed

The game will work as follows:

- The player should appear in middle of the lower part of the screen. They...
  - Can move left and right based on input from the user.
  - Must not collide with any of the falling rocks.
  - Get a point for every rock that is created.
- Every update (60 times a second):
  - Update the game:
    - Every one to six seconds, a new rock is added.
      This will occur when the game's *next rock to appear time* is less than the current time (which you can get by calling the [current_ticks()](https://splashkit.io/api/utilities/#current-ticks) function). When this occurs, add a new rock (if there is capacity).

      A new rock is given:
      - A random size (between 20 and 200)
      - A y value that starts it above the top of the screen (y is `- size`)
      - A random position across the screen - from 0 to screen width
      - A random speed (from 1 to 5)

      When a rock is added, add one to the game's score.

      Set the game's *next rock to appear time* to be equal to the current time plus a random value between 1000 and 6000.

    - Add the speed value of each rock to its y position
    - Check if any rock is off the screen, when one does off
      - Add the size of the rock to the game's score.
      - Remove the rock from the game
    - Check if the player has been hit by any rock, when they have:
      - Remove the rock that hit them.
      - Subtract one from their lives.
  - Handle input:
    - Check if the player wants to move, and move them left/right by 3 pixels
  - Draw the game:
    - Clear the screen
    - Draw the score, and number of lives
    - Draw the player - a circle, using the player location and a constant size.
    - Draw each of the rocks - a circle, using the rock location, and the rock's size.
    - Refresh the screen - so the user can see it
- The game ends when the user requests to quit, or they have 0 lives.

:::tip

Use a struct for the **game data**, this can contain the array, the number of rocks, position of the player, the next time a rock will appear, and score. You can then pass this to functions and procedures you create.

Also have a **rock data** struct. You can use this to store the data for one rock, and pass it as a parameter when you are working with a single rock.

You can consider using the [point_2d](https://splashkit.io/api/types/#point-2d) or [circle](https://splashkit.io/api/types/#circle) structs. If you are adventurous you could look at using bitmaps for the rocks and players.

:::
