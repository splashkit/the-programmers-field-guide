---
title: Fly Catch Move
sidebar:
    label: " - Move Spider"
---

This code adds in the details to move the spider left and right on the screen.

```c++
#include "splashkit.h"

const int SCREEN_WIDTH = 800;
const int SCREEN_HEIGHT = 600;
const int SPIDER_RADIUS = 25;
const int SPIDER_SPEED = 3;

int main()
{
    // Set the spider in the center of the screen
    int spider_x = SCREEN_WIDTH / 2;
    int spider_y = SCREEN_HEIGHT / 2;

    open_window("Fly Catch", SCREEN_WIDTH, SCREEN_HEIGHT);

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

        // Draw the game
        clear_screen(COLOR_WHITE);
        // Draw the spider
        fill_circle(COLOR_BLACK, spider_x, spider_y, SPIDER_RADIUS);
        // Show it to  the user
        refresh_screen(60);

        // Get any new user interactions
        process_events();
    }
}
```

:::note
Remember the event loop runs these instructions over and over, with the if statements checking for changes in the user input.
:::
