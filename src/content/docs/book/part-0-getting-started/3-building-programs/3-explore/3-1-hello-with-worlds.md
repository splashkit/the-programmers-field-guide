---
title: Hello with Worlds
---

:::tip
Use the [installation guides](/book/appendix/0-installation/0-overview) to install the tools you need.
:::

Here is a fun hello world program to wrap up this section. You can also look through the guide and fine other sample code you can download and run now. This is a great way to explore the ideas you are learning.

The code for this part will be using SplashKit functionality to draw images, play sound effects and draw text with a specific font.

:::note[Reminder]
You're not expected to understand how the following code works at this point. It has been created for fun, so you can just copy and paste - and enjoy another "Hello World!" GUI program!
:::

Create a new project, copy the following code, and paste it into your Program.cs file (replacing existing code). Run this program using `dotnet run`:

```cs
using static SplashKitSDK.SplashKit;

// download resources
DownloadSoundEffect("Hello World", "https://programmers.guide/resources/code-examples/part-0/hello-world-snippet-saddle-club.ogg", 443);
DownloadFont("main", "https://programmers.guide/resources/code-examples/part-0/Roboto-Italic.ttf", 443);
DownloadBitmap("Earth", "https://programmers.guide/resources/code-examples/part-0/earth.png", 443);
DownloadBitmap("SmallEarth", "https://programmers.guide/resources/code-examples/part-0/earth-small.png", 443);
DownloadBitmap("SplashKitBox", "https://programmers.guide/resources/code-examples/part-0/skbox.png", 443);

OpenWindow("Hello World: Using Resources with SplashKit", 800, 600);
PlaySoundEffect("Hello World");

ClearScreen(ColorWhite());
DrawText("Anyone remember the \"Hello World\" Saddle Club song?", ColorBlack(), "main", 30, 40, 200);
RefreshScreen();
Delay(2500);

ClearScreen(ColorWhite());

// H
DrawBitmap("SmallEarth", 20, 100);
DrawBitmap("SmallEarth", 20, 130);
DrawBitmap("SmallEarth", 20, 160);
DrawBitmap("SmallEarth", 20, 190);
DrawBitmap("SmallEarth", 20, 220);
DrawBitmap("SmallEarth", 52, 160);
DrawBitmap("SmallEarth", 84, 100);
DrawBitmap("SmallEarth", 84, 130);
DrawBitmap("SmallEarth", 84, 160);
DrawBitmap("SmallEarth", 84, 190);
DrawBitmap("SmallEarth", 84, 220);
RefreshScreen();
Delay(200);

// E
DrawBitmap("SmallEarth", 148, 100);
DrawBitmap("SmallEarth", 148, 130);
DrawBitmap("SmallEarth", 148, 160);
DrawBitmap("SmallEarth", 148, 190);
DrawBitmap("SmallEarth", 148, 220);
DrawBitmap("SmallEarth", 180, 100);
DrawBitmap("SmallEarth", 212, 100);
DrawBitmap("SmallEarth", 180, 160);
DrawBitmap("SmallEarth", 180, 220);
DrawBitmap("SmallEarth", 212, 220);
RefreshScreen();
Delay(200);

// L
DrawBitmap("SmallEarth", 276, 100);
DrawBitmap("SmallEarth", 276, 130);
DrawBitmap("SmallEarth", 276, 160);
DrawBitmap("SmallEarth", 276, 190);
DrawBitmap("SmallEarth", 276, 220);
DrawBitmap("SmallEarth", 308, 220);
DrawBitmap("SmallEarth", 340, 220);
RefreshScreen();
Delay(200);

// L
DrawBitmap("SmallEarth", 404, 100);
DrawBitmap("SmallEarth", 404, 130);
DrawBitmap("SmallEarth", 404, 160);
DrawBitmap("SmallEarth", 404, 190);
DrawBitmap("SmallEarth", 404, 220);
DrawBitmap("SmallEarth", 436, 220);
DrawBitmap("SmallEarth", 468, 220);
RefreshScreen();
Delay(200);

// O
DrawBitmap("SmallEarth", 530, 160);
DrawBitmap("SmallEarth", 622, 160);
DrawBitmap("SmallEarth", 540, 128);
DrawBitmap("SmallEarth", 560, 100);
DrawBitmap("SmallEarth", 592, 100);
DrawBitmap("SmallEarth", 612, 128);
DrawBitmap("SmallEarth", 540, 192);
DrawBitmap("SmallEarth", 560, 220);
DrawBitmap("SmallEarth", 592, 220);
DrawBitmap("SmallEarth", 612, 192);
RefreshScreen();
Delay(500);

// World
DrawBitmap("Earth", 100, 350);
RefreshScreen(60);
Delay(2000);

// SplashKit ("Me")
DrawBitmap("SplashKitBox", 450, 300);
DrawText("SplashKit!", ColorBlack(), "main", 50, 450, 530);
RefreshScreen(60);
Delay(2000);
```

Following a bit of a theme with *writing words out of something other than actual text*, we get this:

<div class="not-content">
  <YouTube id="LVYH18vDQ-w" params="fs=1&start=1&modestbranding=1&rel=0"/>
</div>

&#127759; Yes, that is "HELLO", written using "worlds" &#128516;  
(Because "HELLO" ... "*world*")
