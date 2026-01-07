---
title: Show the fly
sidebar:
  label: " - Show the Fly"
banner: 
  content: This is an optional tour - use it to extend your understanding.
---

Now we have the spider moving it's going to need a target -- the fly. We can get this working over a few steps, starting with getting the fly drawing, then adding code to time its appearance.

## Drawing the fly

What will we need in the digital reality to help us create the fly?

- It will need a position: `fly_x` and `fly_y`.
- It will need a constant size: let's stick with circles, so `FLY_RADIUS`.

That should be enough to get something to appear. You should be able to plan this out yourself. Review the details on how we added the spider as this will be very similar. Pick a different color, so that you can tell the fly and spider apart.

The one thing that will need some thought is how to position the fly.
We don't want the fly always being in the center of the screen -- we need to randomise its location. To do this you can use the `Rnd` method from SplashKit. For example, `rnd(SCREEN_WIDTH)` will give you a random value from 0 to SCREEN_WIDTH - 1.

## Timing Appearing

One of the game features we wanted was that the fly should not appear straight away, but appear after a short delay (lets say between 1 and 3 seconds). In order to hide the fly, we need to add an **if** statement around the drawing code so that we only draw the fly if it has appeared. We can track if the fly has appeared using a [boolean](/book/part-1-instructions/3-control-flow/5-reference/01-0-boolean-data) variable. This can start `false`, change to `true` when sufficient time has passed.

:::tip[Boolean Variables]
Boolean variables are a great way to remember if something has or should happen. This feature can then exist as something within your digital reality.

In C++ you use the `bool` type for these variables.
:::

To get this working we need to think a little about how we can work with time.

We cannot control time -- computers are great, but we still don't have this capability. However, much like other external events, we can observe the passing of time. The computer keeps track of the time, so we can use that to check how long has elapsed.

SplashKit provides timer functionality that we can use to track time for now. In general, we can create one game timer, start this at the beginning of the game, and then use it to find out how many milliseconds have passed.

| <div style="width:100px">**Method**</div> | **Required Arguments** |**Description** |
|-----------|------------------------|----------------|
|`create_timer`| A name for the timer. | Creates a timer. |
|`start_timer`| The name of the timer to use | Records the current time, so that it can work out how much time has passed. |
|`stop_timer`| The name of the timer to use. | Resets the timer so that it is not recording time. |
|`timer_ticks`| The name of the timer to use. | Returns you the time that has passed in milliseconds since `start_timer` was called. |

We will need to code these steps somewhere within the event loop. They are not really about handing input, so we can create a new logical group for the steps related to **updating the game**. This can be the code for the fly appearing, escaping, and being eaten.

The general logic for how this new group of instructions will fit into the program's sequence this is shown below.

```txt
Steps:
    Open the window - use SCREEN_WIDTH and SCREEN_HEIGHT

    While not quit
        Handle Input
        Update the game
        Draw the game
        Process Events
```

### Putting this together

To make this work we will need:

- A game timer -- we can create a constant to keep track of its name `GAME_TIMER`.
- A variable to track how long needs to pass before we show the fly: `appear_at_time`.
- A boolean to capture if the fly has appeared: `fly_appeared`.

These can be initialised as shown below. We can also change the initialisation of `fly_x` and `fly_y`, as these values should now be set when the fly appears.

```txt
Constants:
    SCREEN_WIDTH = 800
    SCREEN_HEIGHT =  600
    
    SPIDER_RADIUS = 25
    SPIDER_SPEED = 3

    FLY_RADIUS = 15

    GAME_TIMER = "Game Timer"

Variables:
    spider_x (an int) = SCREEN_WIDTH / 2
    spider_y (an int) = SCREEN_HEIGHT / 2
    
    fly_x (an integer) = 0
    fly_y (an integer) = 0
    fly_appeared (a bool) = false
    appear_at_time (a long) = 1000 + rnd(2000)
```

:::caution[The long type]
In this case you will need to use C++'s `long` data type for the time. This is an integer value with a larger range than `int`.
:::

With these new variables added, we can make use of them in our steps.

- We need to create and start the timer before the event loop. This way we are tracking time from the start of the game.
- In update game we will need to:
  - Check if the fly has not appeared, and if the required time is elapsed. If this is true, we then:
    - set `fly_appeared` to be true.
    - assign `fly_x` a random x value (`rnd(SCREEN_WIDTH)`).
    - assign `fly_y` a random y value (`rnd(SCREEN_HEIGHT)`).
- In draw game we can:
  - Only draw the fly if `fly_appeared` is true.

These ideas translate into pseudocode as follows:

```txt
Steps:
    Open the window - use SCREEN_WIDTH and SCREEN_HEIGHT

    Create the GAME_TIMER
    Start the GAME_TIMER
    
    While not quit
        Handle Input

        Update the game
            if not fly appeared, and Timer Ticks of the GAME_TIMER > appear_at_time
                Make the fly appear - set fly_appeared to true
                Give it a new position - set fly_x/y to a new random x/y value

        Draw the game
            Clear the screen white
            Fill a black circle using spider_x, spider_y, and SPIDER_RADIUS

            if fly appeared
                Fill a dark green circle using fly_x, fly_y, and FLY_RADIUS

            Refresh the screen to show it to the user

        Process Events
```

Code this up and test the game a few times. The fly should appear after a short period of time. The amount of time will differ between executions, based on the random value.

:::tip[Coding tips]

- In C++, the "not" operator is the `!` character. So "not fly_appeared" is `!fly_appeared`.
- To create the game timer you can use `create_timer(GAME_TIMER)`.
- Similarly, you can start the timer and get its ticks using `start_timer(GAME_TIMER)` and `timer_ticks(GAME_TIMER)`.
- If you are not sure how long you should wait for the fly to appear, you can print the value of `timer_ticks(GAME_TIMER)` and `appear_at_time` to the terminal while you are testing your program.
- If you have a boolean variable, you can use it directly in the `if` statement. For example, the following code will draw the fly when the value in the `fly_appeared` code is true:

```c++
if (fly_appeared)
{
    // Draw the fly
    // ...
}
```

You do **not** need to code it as `fly_appeared == true`. This would work, but is unnecessary.

:::
