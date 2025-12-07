---
title: Test Your Knowledge
---

:::tip
Use the [installation guides](/book/part-0-getting-started/1-building-programs/3-guided-tour/1-install/) to install the tools you need.
:::

Here is a fun hello world program to wrap up this section. You can also look through the guide and find other sample code you can download and run now. This is a great way to explore the ideas you are learning.

The code for this part will be using SplashKit functionality to draw images, play sound effects and draw text with a specific font.

:::note[Reminder]
You're not expected to understand how the following code works at this point. It has been created for fun :)

_However_, do feel free to have a read through the code! You'll find a lot of aspects similar to what we covered in the [A Graphical Program](/book/part-0-getting-started/1-building-programs/3-guided-tour/5-1-hello-world-gui/) section.
:::

Create a new `.cpp` file, copy the following code, and paste it in. Compile and run it using the commands you've learned in the [previous sections](/book/part-0-getting-started/1-building-programs/3-guided-tour/3-first-project/):

```c++
#include "splashkit.h"

int main()
{
    // download resources
    download_sound_effect("Hello World", "https://programmers.guide/resources/code-examples/part-0/hello-world-snippet-saddle-club.ogg", 443);
    download_font("main", "https://programmers.guide/resources/code-examples/part-0/Roboto-Italic.ttf", 443);
    download_bitmap("Earth", "https://programmers.guide/resources/code-examples/part-0/earth.png", 443);
    download_bitmap("SmallEarth", "https://programmers.guide/resources/code-examples/part-0/earth-small.png", 443);
    download_bitmap("SplashKitBox", "https://programmers.guide/resources/code-examples/part-0/skbox.png", 443);

    open_window("Hello World: Using Resources with SplashKit", 800, 600);
    play_sound_effect("Hello World");

    clear_screen(color_white());
    draw_text("Anyone remember the \"Hello World\" Saddle Club song?", color_black(), "main", 30, 40, 200);
    refresh_screen();
    delay(2500);

    clear_screen(color_white());

    // H
    draw_bitmap("SmallEarth", 20, 100);
    draw_bitmap("SmallEarth", 20, 130);
    draw_bitmap("SmallEarth", 20, 160);
    draw_bitmap("SmallEarth", 20, 190);
    draw_bitmap("SmallEarth", 20, 220);
    draw_bitmap("SmallEarth", 52, 160);
    draw_bitmap("SmallEarth", 84, 100);
    draw_bitmap("SmallEarth", 84, 130);
    draw_bitmap("SmallEarth", 84, 160);
    draw_bitmap("SmallEarth", 84, 190);
    draw_bitmap("SmallEarth", 84, 220);
    refresh_screen();
    delay(200);

    // E
    draw_bitmap("SmallEarth", 148, 100);
    draw_bitmap("SmallEarth", 148, 130);
    draw_bitmap("SmallEarth", 148, 160);
    draw_bitmap("SmallEarth", 148, 190);
    draw_bitmap("SmallEarth", 148, 220);
    draw_bitmap("SmallEarth", 180, 100);
    draw_bitmap("SmallEarth", 212, 100);
    draw_bitmap("SmallEarth", 180, 160);
    draw_bitmap("SmallEarth", 180, 220);
    draw_bitmap("SmallEarth", 212, 220);
    refresh_screen();
    delay(200);

    // L
    draw_bitmap("SmallEarth", 276, 100);
    draw_bitmap("SmallEarth", 276, 130);
    draw_bitmap("SmallEarth", 276, 160);
    draw_bitmap("SmallEarth", 276, 190);
    draw_bitmap("SmallEarth", 276, 220);
    draw_bitmap("SmallEarth", 308, 220);
    draw_bitmap("SmallEarth", 340, 220);
    refresh_screen();
    delay(200);

    // L
    draw_bitmap("SmallEarth", 404, 100);
    draw_bitmap("SmallEarth", 404, 130);
    draw_bitmap("SmallEarth", 404, 160);
    draw_bitmap("SmallEarth", 404, 190);
    draw_bitmap("SmallEarth", 404, 220);
    draw_bitmap("SmallEarth", 436, 220);
    draw_bitmap("SmallEarth", 468, 220);
    refresh_screen();
    delay(200);

    // O
    draw_bitmap("SmallEarth", 530, 160);
    draw_bitmap("SmallEarth", 622, 160);
    draw_bitmap("SmallEarth", 540, 128);
    draw_bitmap("SmallEarth", 560, 100);
    draw_bitmap("SmallEarth", 592, 100);
    draw_bitmap("SmallEarth", 612, 128);
    draw_bitmap("SmallEarth", 540, 192);
    draw_bitmap("SmallEarth", 560, 220);
    draw_bitmap("SmallEarth", 592, 220);
    draw_bitmap("SmallEarth", 612, 192);
    refresh_screen();
    delay(500);

    // World
    draw_bitmap("Earth", 100, 350);
    refresh_screen(60);
    delay(2000);

    // SplashKit ("Me")
    draw_bitmap("SplashKitBox", 450, 300);
    draw_text("SplashKit!", color_black(), "main", 50, 450, 530);
    refresh_screen(60);
    delay(2000);
}
```

Following a bit of a theme with *writing words out of something other than actual text*, we get this:

<div class="not-content">
  <YouTube id="LVYH18vDQ-w" params="fs=1&start=1&modestbranding=1&rel=0"/>
</div>

&#127759; Yes, that is "HELLO", written using "worlds" &#128516;  
(Because "HELLO" ... "*world*")
