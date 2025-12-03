---
title: Graphical method to use
---

Drawing things to the screen can help you make much more interactive programs. The following methods will give you a start building graphical programs.

To create graphical programs you will need the following using directives:

```cs
using static SplashkitSDK.SplashKit;
using static System.Convert;
```

You can use the same terminal methods as described previously to read values from the user in the terminal. Then you also have access to the following methods to perform drawing actions:

```cs
// Open a window to draw to
public static Window OpenWindow(string caption, int width, int height);

// Clear the current window to the indicated color
public static void ClearScreen(Color clr);
// Show updated drawing
public static void RefreshScreen();

// Get a color
public static Color ColorWhite();
public static Color ColorBlue();
// and many others...

// Draw the outline or fill a circular area
public static void FillCircle(Color clr, double x, double y, double radius);
public static void DrawCircle(Color clr, double x, double y, double radius);

// Draw the outline or fill a rectangular area
public static void FillRectangle(Color clr, double x, double y, double width, double height);
public static void DrawRectangle(Color clr, double x, double y, double width, double height);

// Draw the outline or fill a elliptical area
public static void FillEllipse(Color clr, double x, double y, double width, double height);
public static void DrawEllipse(Color clr, double x, double y, double width, double height);

// Draw the outline or fill a triangular area
public static void FillTriangle(Color clr, double x1, double y1, double x2, double y2, double x3, double y3);
public static void DrawTriangle(Color clr, double x1, double y1, double x2, double y2, double x3, double y3);

// Draw a line (1 pixel wide)
public static void DrawLine(Color clr, double x1, double y1, double x2, double y2);

// Load an image and assign it a name
public static Bitmap LoadBitmap(string name, string filename);
// Draw a loaded image - using its name
public static void DrawBitmap(string name, double x, double y);

// Delay - waiting for a number of milliseconds before continuing
public static void Delay(int milliseconds);
```

:::tip
These are method declarations - the code used to create a method. This code is in the library where these are made. You can call these in your code by using the name of the method, and passing it the values it asks for.

For example:
```cs
# This code creates OpenWindow - a method you can call
public static Window OpenWindow(string caption, int width, int height);
```

To use it you would do something like:
```cs
# The method call -- with caption, width and height
OpenWindow("Window Caption", 800, 600);
```
:::

*What do the different arguments represent?*

When you open a window, you create an area onto which you can draw. The `width` and `height` arguments will determine how large the window is. You could create a 4 by 3 aspect ratio with something like 800 by 600, or a widescreen using 1280 by 720 - though you can create any shape window you want.

Shape drawing methods need a color to know what color shape to draw. You can get a color value by calling the different `Color...` methods such as `ColorRed()`, and pass that as the color argument value. Following the color, the methods indicate where the shape should appear, and its size. The position is indicated use `x` and `y` coordinates. The `x` value represents the distance from the left side of the window, while `y` is the distance from the *top* of the window. Size values will depend on the shape, a rectangle has a width and height, a circle has a radius, triangles have three points, etc.

We will explore this further in the [guided tour](/book/part-1-instructions/1-sequence-and-data/1-tour/00-overview) and [trailside stop](/book/part-1-instructions/1-sequence-and-data/2-trailside/11-2-graphics). For now, it is enough to remember that these methods exist.

## Example

The following example draws a house in a rectangular window.

```csharp
using static SplashKitSDK.SplashKit;

// Open a window, before drawing to it
OpenWindow("A House", 800, 600);

// Clear the screen to white - don't show it yet
ClearScreen(ColorWhite());

// Draw a hill like ellipse - only half of the ellipse is shown
FillEllipse(ColorBrightGreen(), 0, 400, 800, 400);

// Draw a house shape - rectangular walls, triangular roof
FillRectangle(ColorGray(), 300, 300, 200, 200);
FillTriangle(ColorRed(), 250, 300, 400, 150, 550, 300);

// Now show the picture we have drawn to the user
RefreshScreen();

// Wait for 5 seconds
Delay(5000);
```
