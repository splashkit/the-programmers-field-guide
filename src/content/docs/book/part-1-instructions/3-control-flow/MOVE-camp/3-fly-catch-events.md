---
title: Fly Catch Events
---

The following code is our start to the fly catch game. As with the other walkthroughs, try to build this yourself and only use this to help if you get stuck.

```c++
#include "splashkit.h"

const int SCREEN_WIDTH = 800;
const int SCREEN_HEIGHT = 600;
const int SPIDER_RADIUS = 25;

int main()
{
    // Set the spider in the center of the screen
    int spider_x = SCREEN_WIDTH / 2;
    int spider_y = SCREEN_HEIGHT / 2;

    open_window("Fly Catch", SCREEN_WIDTH, SCREEN_HEIGHT);

    // The event loop
    while (!quit_requested())
    {
        // Draw the game
        clear_screen(COLOR_WHITE);
        // Draw the spider
        fill_circle(COLOR_BLACK, spider_x, spider_y, SPIDER_RADIUS);
        // Show it to  the user
        refresh_screen();

        // Get any new user interactions
        process_events();
    }
}
```

:::note
See how the comments and line spacing helps you see the different parts of the code.
:::
