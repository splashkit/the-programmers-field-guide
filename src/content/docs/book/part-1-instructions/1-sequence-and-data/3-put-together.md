---
title: Put Together
---

## Water Bottle Visualiser

Now we have calculated the volume of water in a bottle, let's draw it to the screen.

The following program uses a whole range of constants and variables. The constants set up the dimensions of the bottle, and we let the user provide the `percentFull` so that we can calculate the water level.

To help communicate how this works, there is a comment in the code that uses ASCII art to output the bottle's shape and indicate what the different constants and variables represent. Read through the code and match up the comment with the constants, and their calculations. Notice how easy it is to resize the bottle - you can change the radius or height and the other values will all be updated to reflect this.

Also, look at the drawing code. See how the constants help make it clear what is being drawn. Imagine if this were all just raw values. The code would be a jumble of numbers. Creating constants helps make it clearer what you are doing in the code.

```csharp
using static System.Convert;
using static SplashKitSDK.SplashKit;

string line;
int percentFull;

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

OpenWindow("Your Water Bottle", 600, 600);
ClearScreen(ColorWhite());

// Draw the water
// Circle at the top of the water
FillCircle(ColorBlue(),  BOTTLE_CENTER_X, waterY, BOTTLE_RADIUS);
// Circle at the bottom of the bottle
FillCircle(ColorBlue(),  BOTTLE_CENTER_X, BOTTLE_BASE_Y, BOTTLE_RADIUS);
DrawCircle(ColorBlack(), BOTTLE_CENTER_X, BOTTLE_BASE_Y, BOTTLE_RADIUS);
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

