---
title: Let the Fly escape
sidebar:
  label: " - Let the Fly Escape"
---

The fly escaping can be similar logic to the fly appearing. We can create an `escapeAtTime` variable, and use this to record when the fly should no longer appear. To make sure this works, we need to make sure we also reset the `appearAtTime` to a value in the future. Otherwise, when the fly escapes it will automatically appear again and escape immediately over and over as the two conditions would both be true.

## Escape Time

To get this to work we need:

- `escapeAtTime`
  - created at the start and set to 0.
  - updated in the code where the fly appears to represent the time the fly will escape (which should be in the future).
- To add a check to the update game steps to see if the fly has appeared and the time is past the escape time.
  - When it is, we can set `flyAppeared` to `false` and calculate a new `appearAtTime`.

For this to work, we need to be able to calculate times in the future. To do this, we can read the current time and then add some additional time to this value. That will then be a time in the future. For example, the following C# code will work for updating the `appearAtTime`:

```csharp
appearAtTime = TimerTicks(GAME_TIMER) + 1000 + Rnd(2000);
```

This code reads the current time, adds one second (1000 milliseconds), and then another random amount of time between 0 and 2 seconds. So, using this code the `appearAtTime` will be 1 to 3 seconds after the current time.

To integrate these ideas into our program, the pseudocode would be as follows:

```txt
Constants:
    SCREEN_WIDTH = 800
    SCREEN_HEIGHT =  600
    
    SPIDER_RADIUS = 25
    SPIDER_SPEED = 3

    FLY_RADIUS = 15

    GAME_TIMER = "Game Timer"

Variables:
    spiderX (an int) = SCREEN_WIDTH / 2
    spiderY (an int) = SCREEN_HEIGHT / 2
    
    flyX (an integer) = 0
    flyY (an integer) = 0
    flyAppeared (a bool) = false
    appearAtTime (a long) = 1000 + Rnd(2000)
    escapeAtTime (a long) = 0

Steps:
    Open the window - use SCREEN_WIDTH and SCREEN_HEIGHT

    Create the GAME_TIMER
    Start the GAME_TIMER
    
    While not quit
        Handle Input

        Update the game
            if not fly appeared, and Timer Ticks of the GAME_TIMER > appearAtTime
                Make the fly appear
                Give it a new position
                Set escapeAtTime to a random time 2 to 7 seconds in the future
            else if the fly has appeared, and the GAME_TIMER ticks are > escapeAtTime
                Remove the fly - set flyAppeared to false
                Set appearAtTime to a random time 1 to 3 seconds in the future

        Draw the game
        Process Events
```

Notice that in this we do not need to change how the game is drawn. We just update the details in the game's data and the existing drawing code will use that to show what the game currently looks like. That is the benefit of writing a data-driven program.

Code this up and make sure it works. You should see the fly appear, then disappear, then reappear, over and over.

:::tip[Keep the reality in mind]
As before, when you are thinking though this code you want to keep the digital reality we are creating in mind. The game plays out in the data, and we control how this works.
:::
