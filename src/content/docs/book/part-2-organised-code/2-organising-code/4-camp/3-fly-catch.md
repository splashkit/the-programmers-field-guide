---
title: Fly Catch
---

We can only make a small change to the fly catch game for now, but it is a start. Have a go at this yourself. Our version is shown below.

```cpp
#include "splashkit.h"

const string GAME_TIMER = "GameTimer";

const int SCREEN_WIDTH = 800;
const int SCREEN_HEIGHT = 600;
const int SPIDER_RADIUS = 25;
const int SPIDER_SPEED = 3;

const int FLY_RADIUS = 10;

/**
 * Draw the spider and the fly to the screen.
 * 
 * @param spider_x is the x location of the spider
 * @param spider_y is the y location of the spider
 * @param fly_appeared tells us if we need to draw the fly
 * @param fly_x the x location of the fly
 * @param fly_y the y location of the fly
*/
void draw_game(int spider_x, int spider_y, bool fly_appeared, int fly_x, int fly_y)
{
  // Draw the game
  clear_screen(color_white());
  // Draw the spider
  fill_circle(color_black(), spider_x, spider_y, SPIDER_RADIUS);

  if (fly_appeared)
  {
    // Draw the fly
    fill_circle(color_dark_green(), fly_x, fly_y, FLY_RADIUS);
  }

  // Show it to  the user
  refresh_screen(60);
}

int main()
{
  // Set the spider in the center of the screen
  int spider_x = SCREEN_WIDTH / 2;
  int spider_y = SCREEN_HEIGHT / 2;

  // Create the fly
  int fly_x = rnd(SCREEN_WIDTH), fly_y = rnd(SCREEN_HEIGHT);
  bool fly_appeared = false;
  long appear_at_time = 1000 + rnd(2000);
  long escape_at_time = 0;

  open_window("Flay Catch", SCREEN_WIDTH, SCREEN_HEIGHT);

  create_timer(GAME_TIMER);
  start_timer(GAME_TIMER);

  // The event loop
  while (!quit_requested())
  {
    // Handle Input
    if (key_down(RIGHT_KEY) && spider_x + SPIDER_RADIUS < SCREEN_WIDTH)
    {
      spider_x += SPIDER_SPEED;
    }
    if (key_down(LEFT_KEY) && spider_x - SPIDER_RADIUS > 0)
    {
      spider_x -= SPIDER_SPEED;
    }

    if (key_down(DOWN_KEY) && spider_y + SPIDER_RADIUS < SCREEN_HEIGHT)
    {
      spider_y += SPIDER_SPEED;
    }
    if (key_down(UP_KEY) && spider_y - SPIDER_RADIUS > 0)
    {
      spider_y -= SPIDER_SPEED;
    }

    // Update the Game
    // Check if the fly should appear
    if (!fly_appeared && timer_ticks(GAME_TIMER) > appear_at_time)
    {
      // Make the fly appear
      fly_appeared = true;

      // Give it a new random position
      fly_x = rnd(SCREEN_WIDTH);
      fly_y = rnd(SCREEN_HEIGHT);

      // Set its escape time
      escape_at_time = timer_ticks(GAME_TIMER) + 2000 + rnd(5000);
    }
    else if (fly_appeared && timer_ticks(GAME_TIMER) > escape_at_time)
    {
      fly_appeared = false;
      appear_at_time = timer_ticks(GAME_TIMER) + 1000 + rnd(2000);
    }

    if (circles_intersect(spider_x, spider_y, SPIDER_RADIUS, fly_x, fly_y, FLY_RADIUS))
    {
      fly_appeared = false;
      appear_at_time = timer_ticks(GAME_TIMER) + 1000 + rnd(2000);
    }

    draw_game(spider_x, spider_y, fly_appeared, fly_x, fly_y);

    // Get any new user interactions
    process_events();
  }

  return 0;
}
```
