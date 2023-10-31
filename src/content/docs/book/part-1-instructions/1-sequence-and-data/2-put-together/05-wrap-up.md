---
title: Wrap Up
---


Programming with sequence and data involves two things:

1. Thinking about the values you will need in your program.
2. Thinking about the sequence of steps you will need to get the outcome you want.

You need to think about both of these together. The data you have, and need, will help you think about the steps to acheive this. Break down your problems into small discete steps, each performing a small step toward your goal.

With each piece of data, think "Does this need to change?" If the answer is yes, then use a variable. If no, use a constant. At the same time, think "What kind of value is this?" If it is a number, is it a whole number (`int`) or a real number (`double`)? This will help you make the many small decisions you need to make as you craft your code.

## Airspeed Code

```csharp
using static System.Console;
using static System.Convert;

const double STROUHAL_LOW_EFFICIENCY = 0.4;
const double STROUHAL_HIGH_EFFICIENCY = 0.2;

string birdName, line;
double freq, amp;

# Display program details
WriteLine("Welcome to the Airspeed Calculator");
WriteLine();

# Read in the name, frequency and amplitude
WriteLine("What is the name of the bird?");
Write("Name: ");
birdName = ReadLine();

WriteLine("What is the frequency of its wing stroke? (beats per second)");
Write("Frequency: ");

// Read and convert frequency to double
line = ReadLine();
freq = ToDouble(line);

WriteLine("What is the amplitude of its wings? (centi)");
Write("Amplitude: :");
line = ReadLine();
amp = ToDouble(line);

// calculate the air speed, given a fixed Strouhal value
double resultMax, resultMin;
resultMax = freq * amp / STROUHAL_HIGH_EFFICIENCY;
resultMin = freq * amp / STROUHAL_LOW_EFFICIENCY;

// output the airspeed of the bird
WriteLine($"Bird {birdName} ");
WriteLine($" - f: {freq} A: {amp} Speed: {resultMax} m/s");
WriteLine($" - f: {freq} A: {amp} Speed: {resultMin} m/s");

```

## Water Bottle Code

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
