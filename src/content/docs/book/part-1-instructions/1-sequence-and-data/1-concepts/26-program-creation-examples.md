---
title: "Program creation examples"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Seven Times Table

This program prints out the seven times table from 1 x 7 to 10 x 7. The description of the program is in [Table 5.x](#TableSevenTimesTable), the pseudocode in [Listing 5.x](#ListingSevenTimesTablePseudoCode), the C# code in [Listing 5.x](#ListingSevenTimesTableCode).

<a id="TableSevenTimesTable"></a>

<div class="caption"><span class="caption-figure-nbr">Program Description</span></div>

|   |   |
|---|---|
| **Name** | *Seven Times Table* |
| **Description** | Displays the 7 times table from `1 x 7` to `10 x 7` |
<div class="caption"><span class="caption-figure-nbr">Table 5.x: </span>Description of the <em>Seven Times Table</em> program</div><br/>

### Pseudocode

<a id="ListingSevenTimesTablePseudoCode"></a>

```bash
------------------------
Program: SevenTimesTable
------------------------
Steps:
  1.  Output 'Seven Times Table' to the Terminal
  2.  Output '------------------------' to the Terminal
  3.  Output '1 x 7 = ', and 1 * 7 to the Terminal
  4.  Output '2 x 7 = ', and 2 * 7 to the Terminal
  5.  Output '3 x 7 = ', and 3 * 7 to the Terminal
  6.  Output '4 x 7 = ', and 4 * 7 to the Terminal
  7.  Output '5 x 7 = ', and 5 * 7 to the Terminal
  8.  Output '6 x 7 = ', and 6 * 7 to the Terminal
  9.  Output '7 x 7 = ', and 7 * 7 to the Terminal
  10. Output '8 x 7 = ', and 8 * 7 to the Terminal
  11. Output '9 x 7 = ', and 9 * 7 to the Terminal
  12. Output '10 x 7 = ', and 10 * 7 to the Terminal
  13. Output '------------------------' to the Terminal
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Pseudocode for the <em>Seven Times Table</em> program</div>

### C# Code

<a id="ListingSevenTimesTableCode"></a>

```csharp
/*
 * Program: seven_times.c
 * Displays the Seven Times Table from 1 x 7 to 10 x 7
 */

#include <stdio.h>

int main() {
    printf("Seven Times Table\n");
    printf("------------------------\n");
    printf(" 1 x 7 = %d\n", 1 * 7);
    printf(" 2 x 7 = %d\n", 2 * 7);
    printf(" 3 x 7 = %d\n", 3 * 7);
    printf(" 4 x 7 = %d\n", 4 * 7);
    printf(" 5 x 7 = %d\n", 5 * 7);
    printf(" 6 x 7 = %d\n", 6 * 7);
    printf(" 7 x 7 = %d\n", 7 * 7);
    printf(" 8 x 7 = %d\n", 8 * 7);
    printf(" 9 x 7 = %d\n", 9 * 7);
    printf(" 10 x 7 = %d\n", 10 * 7);
    printf("------------------------\n");

    return 0;
}
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>C# code for the <em>Seven Times Table</em> program</div>


## Circle Area

This program prints out the area of circles with different radius. The description of the program is in [Table 5.x](#TableCircleArea), the pseudocode in [Listing 5.x](#ListingCircleAreaPseudoCode), the C code in [Listing 5.x](#ListingCircleAreaCode).

<a id="TableCircleArea"></a>

<div class="caption"><span class="caption-figure-nbr">Program Description</span></div>

|   |   |
|---|---|
| **Name** | *Circle Area* |
| **Description** | Displays the Circle Area for circles with radius from 1.0 to 5.0 with increments of 0.5 |
<div class="caption"><span class="caption-figure-nbr">Table 5.x: </span>Description of the <em>Circle Area</em> program</div><br/>

### Pseudocode

<a id="ListingCircleAreaPseudoCode"></a>

```bash
------------------------
Program: CircleArea
------------------------
Steps:
  1.  Output 'Circle Area' to the Terminal
  2.  Output '------------------------' to the Terminal
  3.  Output 'Radius: 1.0 = ', 3.1415 * 1.0 * 1.0 to the Terminal
  4.  Output 'Radius: 1.5 = ', 3.1415 * 1.5 * 1.5 to the Terminal
  5.  Output 'Radius: 2.0 = ', 3.1415 * 2.0 * 2.0 to the Terminal
  6.  Output 'Radius: 2.5 = ', 3.1415 * 2.5 * 2.5 to the Terminal
  7.  Output 'Radius: 3.0 = ', 3.1415 * 3.0 * 3.0 to the Terminal
  8.  Output 'Radius: 3.5 = ', 3.1415 * 3.5 * 3.5 to the Terminal
  9.  Output 'Radius: 4.0 = ', 3.1415 * 4.0 * 4.0 to the Terminal
  10. Output 'Radius: 4.5 = ', 3.1415 * 4.5 * 4.5 to the Terminal
  11. Output 'Radius: 5.0 = ', 3.1415 * 5.0 * 5.0 to the Terminal
  12. Output '------------------------' to the Terminal
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Pseudocode for the <em>Circle Area</em> program</div>

### C# Code

<a id="ListingCircleAreaCode"></a>

```csharp
/*
 * Program: circle_area.c
 * Displays the Circle Area for circles with radius
 * from 1.0 to 5.0 with increments of 0.5
 */

#include <stdio.h>

int main() {
    printf("Circle Area\n");
    printf("------------------------\n");
    printf(" Radius: 1.0 = %4.2f\n", 3.1415 * 1.0 * 1.0);
    printf(" Radius: 1.5 = %4.2f\n", 3.1415 * 1.5 * 1.5);
    printf(" Radius: 2.0 = %4.2f\n", 3.1415 * 2.0 * 2.0);
    printf(" Radius: 2.5 = %4.2f\n", 3.1415 * 2.5 * 2.5);
    printf(" Radius: 3.0 = %4.2f\n", 3.1415 * 3.0 * 3.0);
    printf(" Radius: 3.5 = %4.2f\n", 3.1415 * 3.5 * 3.5);
    printf(" Radius: 4.0 = %4.2f\n", 3.1415 * 4.0 * 4.0);
    printf(" Radius: 4.5 = %4.2f\n", 3.1415 * 4.5 * 4.5);
    printf(" Radius: 5.0 = %4.2f\n", 3.1415 * 5.0 * 5.0);
    printf("------------------------\n");

    return 0;
}
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>C# code for the <em>Circle Area</em> program</div>


## Shape Drawing

This program draws some shapes to the screen using the SwinGame Software Development Kit (SDK). The SwinGame SDK is a library that provides a number of reusable code artefacts that you can use to create 2D games. This SDK is available for both C and Pascal, and work on Linux, Mac, and Windows. The description of the program is in [Table 5.x](#TableShapeDrawing), the pseudocode in [Listing 5.x](#ListingShapeDrawingPseudoCode), the C# code in [Listing 5.x](#ListingShapeDrawingCode).

<a id="TableShapeDrawing"></a>

<div class="caption"><span class="caption-figure-nbr">Program Description</span></div>

|   |   |
|---|---|
| **Name** | *Shape Drawing* |
| **Description** | Draws a number of shapes to the screen using SwinGame |
<div class="caption"><span class="caption-figure-nbr">Table 5.x: </span>Description of the <em>Shape Drawing</em> program</div><br/>

### Pseudocode

<a id="ListingShapeDrawingPseudoCode"></a>

```bash
------------------------
Program: Shape Drawing
------------------------
Steps:
  1.  Call OpenGraphicsWindow with 'Shape Drawing', 800, and 600
  2.  Call ClearScreen
  3.  Call FillRectangle with ColorWrite, 10, 10, 780, and 580
  4.  Call RefreshScreen
  5.  Call Delay with 500
  6.  Call FillCircle with ColorRed, 50, 50, and 25
  7.  Call FillCircle with ColorGreen, 80, 50, and 25
  8.  Call FillCircle with ColorBlue, 110, 50, and 25
  9.  Call RefreshScreen
  10. Call Delay with 500
  11. Call FillTriangle with ColorYellow, 100, 100, 150, 175, 210, and 115
  12. Call RefreshScreen
  13. Call Dealy with 2000
  14. Call ReleaseAllResources
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Pseudocode for the <em>Shape Drawing</em> program</div>

The Lines from the program will do the following:

- **`OpenGraphicsWindow`** opens a Window with the title 'Shape  Drawing' that is 800 pixels wide by 600 pixels high.
- **`ClearScreen`** clears the screen to black.
- **`FillRectangle`** uses the color, the x, y location, and width and height to fill a rectangle.
- **`RefreshScreen`** updates the screen to show what has been drawn. All SwinGame drawing is done offscreen, and only drawn to the screen when RefreshScreen is called.
- **`Delay`** pauses the program for a number of milliseconds, so 500 will wait for half a second.
- **`FillCircle`** uses the color, given x, y location and radius to fill a circle.
- **`FillTriangle`** fills a triangle with the given x, y points (6 values for 3 points).

### C# Code

<a id="ListingShapeDrawingCode"></a>

```csharp
/*
 * Program: shape_drawing.c
 * Draws a number of shapes to the screen using SwinGame
 */

#include <stdio.h>
#include <stdbool.h>
#include "SwinGame.h"

int main() {
    open_graphics_window("Shape Drawing, 800, 600);
    load_default_colors();

    clear_screen();

    fill_rectangle(ColorWhite, 10, 10, 780, 580);

    refresh_screen();
    delay(500);

    fill_circle(ColorRed, 50, 50, 25);
    fill_circle(ColorGreen, 80, 50, 25);
    fill_circle(ColorBlue, 110, 50, 25);

    refresh_screen();
    delay(500);

    fill_circle(ColorYellow, 100, 100, 150, 175, 210, 115);

    refresh_screen();
    delay(2000);

    release_all_resources();

    return 0;
}
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>C# code for the <em>Shape Drawing</em> program</div>

The SwinGame procedure for C are named using the standard C naming scheme. The names are:

- **`open_graphics_window`** opens a Window with the title 'Shape Drawing' that is 800 pixels wide by 600 pixels high.
- **`load_default_colors`** loads default colors for use in your code.
- **`clear_screen`** clears the screen to black.
- **`fill_rectangle`** uses the color, the x, y location, and width  and height to fill a rectangle.
- **`refresh_screen`** updates the screen to show what has been drawn. All SwinGame drawing is done offscreen, and only drawn to the screen when RefreshScreen is called.
- **`delay`** pauses the program for a number of milliseconds, so 500 will wait for half a second.
- **`fill_circle`** uses the color, given x, y location and radius to fill a circle.
- **`fill_triangle`** fills a triangle with the given x, y points (6 values for 3 points).
