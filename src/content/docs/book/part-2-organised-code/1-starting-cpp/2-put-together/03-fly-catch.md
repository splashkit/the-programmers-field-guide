---
title: Fly Catch
---

**TODO: Update**

<!-- Update to match chapter 2 (add steps with more detail and much less code (only small snippets) and relate back to concepts) -->

## Fly Catch

The C/C++ version of the Fly Catch is provided below. This is even closer to the C# version than the change calculator. One difference is how you access the key codes, in C# you used `KeyCode.LeftKey` for example. In C/C++, this becomes just `LEFT_KEY` with syntax more like a constant. We will look at this in a couple of chapters when we review the ways we can organise data.

```cpp
#include "splashkit.h"

int main()
{
  const string GAME_TIMER = "GameTimer";

  const int SCREEN_WIDTH = 800;
  const int SCREEN_HEIGHT = 600;
  const int SPIDER_RADIUS = 25;
  const int SPIDER_SPEED = 3;

  const int FLY_RADIUS = 10;

  // Set the spider in the center of the screen
  int spiderX = SCREEN_WIDTH / 2;
  int spiderY = SCREEN_HEIGHT / 2;

  // Create the fly
  int flyX = rnd(SCREEN_WIDTH), flyY = rnd(SCREEN_HEIGHT);
  bool flyAppeared = false;
  long appearAtTime = 1000 + rnd(2000);
  long escapeAtTime = 0;

  open_window("Flay Catch", SCREEN_WIDTH, SCREEN_HEIGHT);

  create_timer(GAME_TIMER);
  start_timer(GAME_TIMER);

  // The event loop
  while (!quit_requested())
  {
    // Handle Input
    if (key_down(RIGHT_KEY) && spiderX + SPIDER_RADIUS < SCREEN_WIDTH)
    {
      spiderX += SPIDER_SPEED;
    }
    if (key_down(LEFT_KEY) && spiderX - SPIDER_RADIUS > 0)
    {
      spiderX -= SPIDER_SPEED;
    }

    // Update the Game
    // Check if the fly should appear
    if (! flyAppeared && timer_ticks(GAME_TIMER) > appearAtTime)
    {
      // Make the fly appear
      flyAppeared = true;

      // Give it a new random position
      flyX = rnd(SCREEN_WIDTH);
      flyY = rnd(SCREEN_HEIGHT);
      
      // Set its escape time
      escapeAtTime = timer_ticks(GAME_TIMER) + 2000 + rnd(5000);
    }
    else if (flyAppeared && timer_ticks(GAME_TIMER) > escapeAtTime)
    {
      flyAppeared = false;
      appearAtTime = timer_ticks(GAME_TIMER) + 1000 + rnd(2000);
    }

    // Test if the spider and fly are touching
    if (circles_intersect(spiderX, spiderY, SPIDER_RADIUS, flyX, flyY, FLY_RADIUS))
    {
      flyAppeared = false;
      appearAtTime = timer_ticks(GAME_TIMER) + 1000 + rnd(2000);
    }

    // Draw the game
    clear_screen(color_white());
    // Draw the spider
    fill_circle(color_black(), spiderX, spiderY, SPIDER_RADIUS);

    if (flyAppeared)
    {
      // Draw the fly
      fill_circle(color_dark_green(), flyX, flyY, FLY_RADIUS);
    }

    // Show it to  the user
    refresh_screen(60);

    // Get any new user interactions
    process_events();
  }
}
```

Use these if you get stuck converting this code yourself. Make sure that you have things working before you move on to the next chapter. You should feel confident that your understanding of sequence, data, and control flow applies equally to C/C++ as it did in C#.
