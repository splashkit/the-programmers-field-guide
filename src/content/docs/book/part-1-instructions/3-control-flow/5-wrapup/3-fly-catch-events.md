---
title: Fly Catch Events
---

The following code is our start to the fly catch game. As with the other walkthroughs, try to build this yourself and only use this to help if you get stuck.

```csharp
using SplashKitSDK;
using static SplashKitSDK.SplashKit;

const int SCREEN_WIDTH = 800;
const int SCREEN_HEIGHT = 600;
const int SPIDER_RADIUS = 25;

// Set the spider in the center of the screen
int spiderX = SCREEN_WIDTH / 2;
int spiderY = SCREEN_HEIGHT / 2;

OpenWindow("Flay Catch", SCREEN_WIDTH, SCREEN_HEIGHT);

// The event loop
while (!QuitRequested())
{
    // Draw the game
    ClearScreen(ColorWhite());
    // Draw the spider
    FillCircle(ColorBlack(), spiderX, spiderY, SPIDER_RADIUS);
    // Show it to  the user
    RefreshScreen();

    // Get any new user interactions
    ProcessEvents();
}
```

:::note
See how the comments and line spacing helps you see the different parts of the code.
:::
