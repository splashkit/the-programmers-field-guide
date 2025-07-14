---
title: Indentation and nested control flow
---

Control flow statements can be nested within each other.

![Illustration of indentation](./images/indentation.png)


:::note[Indentation...]

- involves indenting code so that you can easily see the control flow structure.
- uses spaces or tabs to show which statements are inside other control flow statements.
- is not used by the compiler, but is *essential* for the human readers.
- is really important!

:::

:::tip

Always indent your code as you progress. Periodically you can use VS Code's "Format Document" shortcut to help you out. Right-click on your code and select "Format Document". This will adjust the indentation, to make sure that it aligns with your control flow.

:::

## Example

```cs
using static SplashKitSDK.SplashKit;
using SplashKitSDK;

const int MOVE_SPEED = 3;

OpenWindow("Movement", 800, 600);

// Event loop
double x = 400;
Color clr = ColorBlack();

while( !QuitRequested() )
{
  ProcessEvents();

  if (KeyDown(KeyCode.RightKey))
  {
    x += MOVE_SPEED;
  }

  if (KeyDown(KeyCode.LeftKey))
  {
    x -= MOVE_SPEED;
  }

  if (KeyTyped(KeyCode.SpaceKey))
  {
    clr = RandomColor();
  }

  ClearScreen(ColorWhite());
  FillCircle(clr, x, 300, 50);
  RefreshScreen(60);
}
```

The following code shows an example of using the mouse, and its position as part of a program. This uses the distance from the player to the mouse to set the direction of a ball which is thrown when the mouse is clicked.

```cs
// Code in the program is all lined up on the left...
using static SplashKitSDK.SplashKit;
using SplashKitSDK;

const int BALL_RADIUS = 5;
const int PLAYER_RADIUS = 20;

// Used to calculate distance from player - mouse for
// Ball speed. speed = distance / DIST_TO_SPEED_RATIO.
const double DIST_TO_SPEED_RATIO = 30;
// as above for the line drawn to show direction of shot
const double DIST_LINE_RATIO = 10;

OpenWindow("Ball Throw", 800, 600);

bool ballFired = false;

double playerX = 400, playerY = 300;
double ballX = playerX;
double ballY = playerY;
double ballXSpeed = 0;
double ballYSpeed = 0;

while (!QuitRequested())
{
  // Code in this while loop is indented one tab
  ProcessEvents();

  if (MouseClicked(MouseButton.LeftButton) && !ballFired)
  {
    // This is inside the if inside the while...
    // So this is indented two tabs
    ballFired = true;

    ballXSpeed = (MouseX() - playerX) / DIST_TO_SPEED_RATIO;
    ballYSpeed = (MouseY() - playerY) / DIST_TO_SPEED_RATIO;
  }

  // Here we are back in the while... indented one tab

  if (ballFired)
  {
    // inside the if in the while... so two tabs
    ballX += ballXSpeed;
    ballY += ballYSpeed;

    // check if off screen
    if (ballX + BALL_RADIUS < 0 || // off left
        ballX - BALL_RADIUS > ScreenWidth() || // off right
        ballY + BALL_RADIUS < 0 || // off top
        ballY - BALL_RADIUS > ScreenHeight()
        ) // off bottom
    {
      // Inside an if in an if in a while... so 3 tabs
      ballFired = false;
      ballX = playerX;
      ballY = playerY;
    }
  }

  // back just in the while... one tab

  ClearScreen(ColorWhite());
  FillCircle(ColorLightGreen(), playerX, playerY, PLAYER_RADIUS);
  FillCircle(ColorBlack(), ballX, ballY, BALL_RADIUS);

  if ( ! ballFired )
  {
    // indented 2 tabs...

    // Show direction of travel
    DrawLine(ColorBlack(), 
      playerX, playerY, 
      playerX + (MouseX() - playerX) / DIST_LINE_RATIO,
      playerY + (MouseY() - playerY) / DIST_LINE_RATIO
    );
  }

  // indented 1 tab

  RefreshScreen(60);
}

// Back in the program - indented 0 tabs
WriteLine("I hope you enjoyed this program!");
```
