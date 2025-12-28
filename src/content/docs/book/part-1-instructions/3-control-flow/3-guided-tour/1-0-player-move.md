---
title: Player Move
---

To begin, let's explore control flow concepts one at a time as we build up a small program that will allow the user to move a character (drawn as a circle) around on the screen.

Let's start with the following code. This sequence contains the instructions to open a window and draw the player's character.

```cs
using static SplashKitSDK.SplashKit;

const int PLAYER_RADIUS = 50;

OpenWindow("Circle Moving", 1280, 720);

ClearScreen(ColorWhite());

FillCircle(ColorTurquoise(), 640, 360, PLAYER_RADIUS);

RefreshScreen(60);

Delay(5000);
```
