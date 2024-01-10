---
title: Water Bottle
---

As with the Airspeed Velocity code, this is our version of the water bottle visualiser. Use it if you get stuck building your own version of this. As always, it is not important that your code matches this exactly. What is important is that you use this example to work through the thinking and coding skills needed to create programs using the concepts from this chapter.

```csharp
using static System.Convert;
using static SplashKitSDK.SplashKit;

const int WINDOW_WIDTH = 600;
const int WINDOW_HEIGHT = 600;

/*-------------------------------------\
| Water bottle shape...
|
| BOTTLE_LEFT_X     BOTTLE_RIGHT_X
|        |             | 
|        v             v 
|          ___________
|         /           \
|   ^    |      x      | <-- x = BOTTLE_CENTER_X
|   |    |\___________/|       + BOTTLE_TOP_Y
|   |    |             |
|   |    | ___________ |
|   |    |/           \|
|   |    |             | <-- waterY
|   |    |\___________/| ^
|   |    | ___________ | | waterHeight
|   |    |/           \| v
|   v    |             | <-- BOTTLE_BASE_Y
|         \___________/
| BOTTLE_HEIGHT
|         <-----x-----> BOTTLE_RADIUS
|        BOTTLE_DIAMETER        
\-------------------------------------*/

const int BOTTLE_RADIUS = 80;
const int BOTTLE_HEIGHT = 400;
const int BOTTLE_DIAMETER = BOTTLE_RADIUS * 2; 
const int BOTTLE_CENTER_X = WINDOW_WIDTH / 2;
const int BOTTLE_LEFT_X = BOTTLE_CENTER_X - BOTTLE_RADIUS;
const int BOTTLE_RIGHT_X = BOTTLE_CENTER_X + BOTTLE_RADIUS;
const int BOTTLE_BASE_Y = WINDOW_HEIGHT - BOTTLE_RADIUS - 5; // 5 pixel gap
const int BOTTLE_TOP_Y = BOTTLE_BASE_Y - BOTTLE_HEIGHT;

string line;
int percentFull;

WriteLine("Water Bottle Visualiser!");
WriteLine();
WriteLine("How full us your bottle? (0-100)");
WriteLine();
Write("Percent: ");
line = ReadLine();

// Convert the text entered to a double
percentFull = ToInt32(line);

double waterHeight = BOTTLE_HEIGHT * (percentFull / 100.0);
double waterY = BOTTLE_BASE_Y - waterHeight;

OpenWindow("Your Water Bottle", WINDOW_WIDTH, WINDOW_HEIGHT);
ClearScreen(ColorWhite());

// Draw the water
// Circle at the top of the water
FillCircle(ColorBlue(),  BOTTLE_CENTER_X, waterY, BOTTLE_RADIUS);

// Circle at the bottom of the bottle
FillCircle(ColorBlue(),  BOTTLE_CENTER_X, BOTTLE_BASE_Y, BOTTLE_RADIUS);
DrawCircle(ColorBlack(), BOTTLE_CENTER_X, BOTTLE_BASE_Y, BOTTLE_RADIUS);

// Draw the rest of the water
FillRectangle(ColorBlue(), BOTTLE_LEFT_X, waterY, BOTTLE_DIAMETER, waterHeight);
DrawCircle(ColorBlack(), BOTTLE_CENTER_X, waterY, BOTTLE_RADIUS);

// Outline bottle
// Draw the left wall of the bottle
DrawLine(ColorBlack(), BOTTLE_LEFT_X, BOTTLE_BASE_Y, BOTTLE_LEFT_X, BOTTLE_TOP_Y);
// Draw the right wall of the bottle
DrawLine(ColorBlack(), BOTTLE_RIGHT_X, BOTTLE_BASE_Y, BOTTLE_RIGHT_X, BOTTLE_TOP_Y);
DrawCircle(ColorBlack(), BOTTLE_CENTER_X, BOTTLE_TOP_Y, BOTTLE_RADIUS);

RefreshScreen();
Delay(5000);
```
