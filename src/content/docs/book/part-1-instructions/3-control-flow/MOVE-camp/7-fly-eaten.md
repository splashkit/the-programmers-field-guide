---
title: Fly Catch Eaten
sidebar:
    label: " - Fly Eaten"
---

Our last step shows how to check for the spider catching the fly.

```c++
#include "splashkit.h"

const string GAME_TIMER = "GameTimer";

const int SCREEN_WIDTH = 800;
const int SCREEN_HEIGHT = 600;
const int SPIDER_RADIUS = 25;
const int SPIDER_SPEED = 3;

const int FLY_RADIUS = 10;

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

    open_window("Fly Catch", SCREEN_WIDTH, SCREEN_HEIGHT);

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

        // Test if the spider and fly are touching
        if (circles_intersect(spider_x, spider_y, SPIDER_RADIUS, fly_x, fly_y, FLY_RADIUS))
        {
            fly_appeared = false;
            appear_at_time = timer_ticks(GAME_TIMER) + 1000 + rnd(2000);
        }

        // Draw the game
        clear_screen(COLOR_WHITE);
        // Draw the spider
        fill_circle(COLOR_BLACK, spider_x, spider_y, SPIDER_RADIUS);

        if (fly_appeared)
        {
            // Draw the fly
            fill_circle(COLOR_DARK_GREEN, fly_x, fly_y, FLY_RADIUS);
        }

        // Show it to  the user
        refresh_screen(60);

        // Get any new user interactions
        process_events();
    }
}
```

:::caution
Wow, this is **a lot of code** to write directly within the program! Generally we would have brought in the code organisation features of the language to help make this easier for me, but we haven't covered those yet. The good thing is, once you master these concepts and can create code like this...it is all just going to get easier from here. 

In Part 2 we will see some tools we can use to help us better manage this code and make writing huge chunks of code like this a thing of the past. You will still use control flow, but you be able to divide the code up into clearer sections so you can more easily think through how each section works.
:::
