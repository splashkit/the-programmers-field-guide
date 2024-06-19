---
title: Fly Catch Show Fly
sidebar:
    label: " - Show Fly"
---

Here we have added the code to show the fly.

```csharp
using SplashKitSDK;
using static SplashKitSDK.SplashKit;

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
int flyX = Rnd(SCREEN_WIDTH), flyY = Rnd(SCREEN_HEIGHT);
bool flyAppeared = false;
long appearAtTime = 1000 + Rnd(2000);

OpenWindow("Flay Catch", SCREEN_WIDTH, SCREEN_HEIGHT);

CreateTimer(GAME_TIMER);
StartTimer(GAME_TIMER);

// The event loop
while (!QuitRequested())
{
    // Handle Input
    if (KeyDown(KeyCode.RightKey) && spiderX + SPIDER_RADIUS < SCREEN_WIDTH)
    {
        spiderX += SPIDER_SPEED;
    }

    if (KeyDown(KeyCode.LeftKey) && spiderX - SPIDER_RADIUS > 0)
    {
        spiderX -= SPIDER_SPEED;
    }

    // Update the Game
    // Check if the fly should appear
    if (!flyAppeared && TimerTicks(GAME_TIMER) > appearAtTime)
    {
        // Make the fly appear
        flyAppeared = true;

        // Give it a new random position
        flyX = Rnd(SCREEN_WIDTH);
        flyY = Rnd(SCREEN_HEIGHT);
    }


    // Draw the game
    ClearScreen(ColorWhite());
    // Draw the spider
    FillCircle(ColorBlack(), spiderX, spiderY, SPIDER_RADIUS);

    if (flyAppeared)
    {
        // Draw the fly
        FillCircle(ColorDarkGreen(), flyX, flyY, FLY_RADIUS);
    }

    // Show it to  the user
    RefreshScreen(60);

    // Get any new user interactions
    ProcessEvents();
}
```

:::note
See how we can use boolean variables to remember if things have happened, and then in conditions within control flow statements.
:::
