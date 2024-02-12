---
title: Eat the Fly
sidebar:
  label: " - Eat the Fly"
---

Now to finish this off -- the spider needs to be able to catch the fly.

To achieve this, we need to be able to identify when the spider's circle overlaps the fly's circle. The way to detect this is when the distance between the two center points of the circles is less than the sum of their radii. There are several websites that describe the process, for example [Peter Collingridge's page on Circle-Circle Intersections](https://www.petercollingridge.co.uk/tutorials/computational-geometry/circle-circle-intersections/).

You could calculate this manually, but to help with these checks SplashKit includes some shape testing methods that you can use. These allow you to check for things like two shapes intersecting.

| <div style="width:140px">**Method**</div> | **Required Arguments** |**Description** |
|-----------|------------------------|----------------|
|`CirclesIntersect`| The x, y, and radius of 2 circles (6 arguments) | Returns true if the two circles intersect (overlap) each other. |
|`CircleAtPoint`| The x, y, and radius of a circle, and the x and y value for a point | Returns true if the point is within the circle. |

<!-- **TODO: Add CircleAtPoint to SplashKit** -->

We can incorporate a test for whether the spider and fly overlap into the update game step of the event loop. Here you can test if the spider and fly circles intersect, in which case the spider has caught the fly.

The pseudocode for this would be as follows:

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

            If the fly has appeared, and the spider and fly circles intersect
                The fly is caught
                Set flyAppeared to false
                Set new appearAtTime  

        Draw the game
        Process Events
```

Have a go at implementing this. When you test it see if you can catch a few flies.

## Adding a score

When we tested this we felt it was missing something...the fly disappears when you collide with it, but you do not get any feedback.

To fix this we could add a score. This requires a few changes:

- Add a new variable, initialised to 0 at the start.
- Add code to *draw game* to draw the value of this variable to the screen.
  - You can draw this without a font using [DrawText](https://splashkit.io/api/graphics/#draw-text-no-font-no-size) and passing in the text, color, and position. For example, `DrawText($"Flies Caught: {score}", ColorBlack(), 0, 0);`.
  - Alternatively, you can [load a font](https://splashkit.io/api/graphics/#load-font) and then use the font name and a size to draw using [DrawText](https://splashkit.io/api/graphics/#draw-text-font-as-string) which needs arguments for text, color, font name, font size, and position (x and y). For example, `DrawText($"Flies Caught: {score}", ColorBlack(), GAME_FONT, 18, 0, 0);`.
- Increase the `score` when the fly is caught.

Have a go at implementing this now.

## Further Enhancements

Hopefully this walkthrough has helped you see how you can use control flow to build interactive programs. These control flow features are core to every imperative program.

From what you have now, you should be able to use the tools you have learned to add some small additions to make the game more engaging. For example, you could:

- Add a sound effect for catching the fly.
- Draw the fly and spider using images rather than circles. For this remember to position the image so that its center aligns with the center of the circle. You can use the [Bitmap Width](https://splashkit.io/api/graphics/#bitmap-width-of-bitmap-named) and [Bitmap Height](https://splashkit.io/api/graphics/#bitmap-height-of-bitmap-named) methods to help with this.

:::tip[Small increments]
Notice how we built this program a small piece at a time, always just adding one small feature before testing. This approach to programming helps make each step clear and simple to build, and helps make sure we are catching bugs in our code before they become a bigger problem.
:::
