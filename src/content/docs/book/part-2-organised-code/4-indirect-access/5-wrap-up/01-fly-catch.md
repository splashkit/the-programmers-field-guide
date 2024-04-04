---
title: Fly Catch
---

The updated code for the fly catch program is shown below. In this we now finally have the program broken down into the sections to help us manage its code better. Having the ability to pass by reference has made this much easier to work with.

Changes include:

- Added handle input
- Added update game, and update fly
- Changed existing struct parameters to use pass by reference with constant references, so these are not incorrectly updated.

Pay attention to the new functions and procedures and how reference parameters provide access to data from within variables passed from the calling function or procedure's code.

```cpp
#include "splashkit.h"

const string GAME_TIMER = "GameTimer";

const int SCREEN_WIDTH = 800;
const int SCREEN_HEIGHT = 600;
const int SPIDER_RADIUS = 25;
const int SPIDER_SPEED = 3;

const int FLY_RADIUS = 10;

/**
 * The fly can appear and escape (disappear), but is otherwise
 * located on the screen at a certain point.
 * 
 * @field appeared  indicates if the fly is shown
 * @field x its distance from the left of the window (to the center)
 * @field y its distance from the top of the window (to the center)
 * @field appear_at_time  the time when the fly will appear
 * @field escape_at_time  the time when the fly will escape
*/
typedef struct
{
  bool appeared;
  double x;
  double y;

  long appear_at_time;
  long escape_at_time;
} fly_data;

/**
 * The spider has a location on the screen.
 * 
 * @field x the distance from the left side of the window
 * @field y the distance from the top of the window
*/
typedef struct
{
  double x;
  double y;
} spider_data;

/**
 * The game involves a spider and a fly. The player is 
 * controlling the spider and the fly is trying to escape.
 * 
 * @field spider  the data about the spider
 * @field fly     the data for the fly
*/
typedef struct
{
  spider_data spider;
  fly_data    fly;
} game_data;

/**
 * Draw the spider on the screen
 * 
 * @param spider  the spider's data
*/
void draw_spider(const spider_data &spider)
{
  fill_circle(color_black(), spider.x, spider.y, SPIDER_RADIUS);
}

/**
 * Draw the fly if it has appeared
 * 
 * @field fly the fly data
*/
void draw_fly(const fly_data &fly)
{
  // Exit if the fly has not appeared
  if (!fly.appeared)
  {
    return;
  }

  // Draw the fly
  fill_circle(color_dark_green(), fly.x, fly.y, FLY_RADIUS);
}

/**
 * Draw the spider and the fly to the screen.
 * 
 * @param game the game data
*/
void draw_game(const game_data &game)
{
  // Draw the game
  clear_screen(color_white());

  // Draw the spider
  draw_spider(game.spider);

  // Draw the fly
  draw_fly(game.fly);

  // Show it to  the user
  refresh_screen(60);
}

/**
 * Initialise a new spider and return it to the caller.
 * The spider will be in the center of the screen.
 * 
 * @return an initialised spider
*/
spider_data new_spider()
{
  spider_data result;

  // Set the spider in the center of the screen
  result.x = SCREEN_WIDTH / 2;
  result.y = SCREEN_HEIGHT / 2;

  return result;
}

/**
 * Initialise and return new fly data. This will not have appeared,
 * but will be at a random position, and will appear within 1
 * to 3 seconds.
 * 
 * @return the newly initialised fly
*/
fly_data new_fly()
{
  fly_data result;

  result.x = rnd(SCREEN_WIDTH);
  result.y = rnd(SCREEN_HEIGHT);

  result.appeared = false;

  result.appear_at_time = 1000 + rnd(2000);
  result.escape_at_time = 0;

  return result;
}

/**
 * Indicates if it is time for the fly to appear.
 * 
 * @param fly the fly to check
 * @param current_time  the current time
*/
bool time_to_appear(const fly_data &fly, long current_time)
{
  return !fly.appeared && current_time > fly.appear_at_time;
}

/**
 * Indicates if it is time for the fly to escape.
 * 
 * @param fly the fly to check
 * @param current_time  the current time
*/
bool time_to_escape(const fly_data &fly, long current_time)
{
  return fly.appeared && current_time > fly.escape_at_time;
}

/**
 * Tests if the spider has caught the fly. This is calculated
 * by checking if the spider and fly circles intersect.
 * 
 * @param spider  the spider data
 * @param fly     the fly data
 * @return true if the spider has caught the fly.
*/
bool spider_caught_fly(const spider_data &spider, const fly_data &fly)
{
  return fly.appeared && circles_intersect(
    spider.x, spider.y, SPIDER_RADIUS, 
    fly.x, fly.y, FLY_RADIUS);
}

/**
 * Handle user input and update the location of the spider in response.
 *
 * @param spider  a reference to the spider to be moved
 */
void handle_input(spider_data &spider)
{
  if (key_down(RIGHT_KEY) && spider.x + SPIDER_RADIUS < SCREEN_WIDTH)
  {
    spider.x += SPIDER_SPEED;
  }
  if (key_down(LEFT_KEY) && spider.x - SPIDER_RADIUS > 0)
  {
    spider.x -= SPIDER_SPEED;
  }

  if (key_down(DOWN_KEY) && spider.y + SPIDER_RADIUS < SCREEN_HEIGHT)
  {
    spider.y += SPIDER_SPEED;
  }
  if (key_down(UP_KEY) && spider.y - SPIDER_RADIUS > 0)
  {
    spider.y -= SPIDER_SPEED;
  }
}

/**
 * Update a fly in the game. Make it appear and escape as needed.
 *
 * @param fly   a reference to the fly data to update
 * @param current_time  the current time in the game 
 */
void update_fly(fly_data &fly, long current_time)
{
  // Check if the fly should appear
  if (time_to_appear(fly, current_time))
  {
    // Make the fly appear
    fly.appeared = true;

    // Give it a new random position
    fly.x = rnd(SCREEN_WIDTH);
    fly.y = rnd(SCREEN_HEIGHT);

    // Set its escape time
    fly.escape_at_time = current_time + 2000 + rnd(5000);
  }
  else if (time_to_escape(fly, current_time))
  {
    fly.appeared = false;
    fly.appear_at_time = current_time + 1000 + rnd(2000);
  }
}

/**
 * Update the game - updating the fly and seeing if it was caught.
 *
 * @param game  a reference to the game data to update
 * @param current_time  the current time in the game
*/
void update_game(game_data &game, long current_time)
{
  update_fly(game.fly, current_time);

  if ( spider_caught_fly(game.spider, game.fly) )
  {
    game.fly.appeared = false;
    game.fly.appear_at_time = current_time + 1000 + rnd(2000);
  }
}

int main()
{
  game_data game;

  game.spider = new_spider();
  game.fly = new_fly();
  
  open_window("Flay Catch", SCREEN_WIDTH, SCREEN_HEIGHT);

  create_timer(GAME_TIMER);
  start_timer(GAME_TIMER);

  // The event loop
  while (!quit_requested())
  {
    handle_input(game.spider);
    update_game(game, timer_ticks(GAME_TIMER));
    draw_game(game);

    // Get any new user interactions
    process_events();
  }

  return 0;
}
```
