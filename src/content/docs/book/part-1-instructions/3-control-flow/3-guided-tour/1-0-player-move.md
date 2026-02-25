---
title: Player Move
---

To begin, let's explore control flow concepts one at a time to build up a small program that will allow the user to move a character (drawn as a circle) around on the screen.

Let's start with the following code. This sequence contains the instructions to open a window and draw the player's character.

```c++
#include "splashkit.h"

const int PLAYER_RADIUS = 50;

int main()
{
    open_window("Circle Moving", 1280, 720);

    clear_screen(COLOR_WHITE);

    fill_circle(COLOR_TURQUOISE, 640, 360, PLAYER_RADIUS);

    refresh_screen(60);

    delay(5000);
}
```
