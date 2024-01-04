---
title: Fly Catch the Escape
sidebar:
    label: " - fly escape"
---

Our last step shows how to check for the spider catching the fly.

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
long escapeAtTime = 0;

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
  if (! flyAppeared && TimerTicks(GAME_TIMER) > appearAtTime)
  {
    // Make the fly appear
    flyAppeared = true;

    // Give it a new random position
    flyX = Rnd(SCREEN_WIDTH);
    flyY = Rnd(SCREEN_HEIGHT);
    
    // Set its escape time
    escapeAtTime = TimerTicks(GAME_TIMER) + 2000 + Rnd(5000);
  }
  else if (flyAppeared && TimerTicks(GAME_TIMER) > escapeAtTime)
  {
    flyAppeared = false;
    appearAtTime = TimerTicks(GAME_TIMER) + 1000 + Rnd(2000);
  }

  // Test if the spider and fly are touching
  if (CirclesIntersect(spiderX, spiderY, SPIDER_RADIUS, flyX, flyY, FLY_RADIUS))
  {
    flyAppeared = false;
    appearAtTime = TimerTicks(GAME_TIMER) + 1000 + Rnd(2000);
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

:::caution

Wow, this is **a lot of code** to write directly within the program, even for me! Generally I would have brought in the code organisation features of the language to help make this easier for me, but we haven't covered those yet. The good thing is - once you master these concepts and can create code like this... it is all just going to get easier from here. In Part 2 we will see some tools we can bring to help us better manage this code. Then writing huge chunks of code like this will be a thing of the past. You will still use control flow, but you will have need tools you can use to divide the code up into clearer sections so you can more easily think through how those parts work.

:::
