---
title: Hello World GUI
sidebar:
  label: " - Graphical Hello World"
---

Continuing on from [the previous page](./1-hello-world-cli.md), we will now be using *SplashKit* to create a GUI (**G**raphical **U**ser **I**nterface) Hello World program.

## Add SplashKit package to project

To install the *SplashKit NuGet package* in your project, copy and paste the following command into your Terminal window:

```bash
dotnet add package SplashKit
```

:::note
After running the command above, your `HelloWorld.csproj` file will have been updated to look like this:

![A vscode window showing the program being run in the terminal.](./images/splashkit-package-csproj.png)
:::

Now we can use all the SplashKit functionality in our program &#128526;

## Terminal Hello World *with SplashKit!*

Here we will recreate the *terminal Hello World* program that we did on the previous page, but **using SplashKit** this time!

In your Program.cs file, you can replace the first line with the follow code:

```cs
using static SplashKitSDK.SplashKit;
```

Then run your program again using `dotnet run`.

:::tip[For Example]
Using the following code:

```cs
using static SplashKitSDK.SplashKit;

WriteLine("Hello, World!");
WriteLine("Using SplashKit!");
```

We would get this output in the Terminal (shown in the Green Box):

![A vscode window showing the program being run in the terminal.](./images/cli-hello-world-splashkit.png)

:::

## Graphical Hello World

We are getting to the fun part now!

Using a Graphical User Interface for your program will allow you to create more versatile programs much more easily. And it's fun to see your code come to life with these graphics!

### Using Basic Shapes/Text

Here we will be using the following SplashKit functionality to draw on the Window that will open when the program is run:

- `OpenWindow` to open a GUI window,
- `ClearScreen` to set the background colour,
- `DrawText` to write text,
- `FillRectangle` to draw a filled in Rectangle,
- `FillEllipse` to draw a filled in Ellipse (elongate circle),
- `FillTriangle` to draw a filled in Triangle,
- `FillCircle` to draw a filled in Circle,
- `RefreshScreen` to show the graphics on the lines above it, and
- `Delay` to keep the Window open for a set amount of time.

:::note
You're not expected to understand how the following code works at this point. It has been created for fun, so you can just copy and paste - and enjoy a colourful "Hello World!" GUI program!
:::

Copy the following code and paste into your Program.cs file (replacing existing code) and then run your program using `dotnet run`:

```cs
using static SplashKitSDK.SplashKit;

OpenWindow("My First GUI Program", 640, 480);

ClearScreen(ColorWhite());
DrawText("Hello World! - using SplashKit shapes:", ColorBlack(), 50, 50);

// H
FillRectangle(ColorRed(), 50, 100, 20, 100);
FillRectangle(ColorRed(), 70, 140, 40, 20);
FillRectangle(ColorRed(), 110, 100, 20, 100);

// E
FillRectangle(ColorOrange(), 150, 100, 20, 100);
FillRectangle(ColorOrange(), 170, 100, 40, 20);
FillRectangle(ColorOrange(), 170, 140, 20, 20);
FillRectangle(ColorOrange(), 170, 180, 40, 20);

// L
FillRectangle(ColorGold(), 230, 100, 20, 100);
FillRectangle(ColorGold(), 250, 180, 40, 20);

// L
FillRectangle(ColorGreenYellow(), 310, 100, 20, 100);
FillRectangle(ColorGreenYellow(), 330, 180, 40, 20);

// O
FillEllipse(ColorLimeGreen(), 390, 100, 80, 100);
FillEllipse(ColorWhite(), 410, 120, 40, 60);

// W
FillTriangle(ColorGreen(), 50, 250, 90, 370, 120, 250);
FillTriangle(ColorGreen(), 90, 250, 120, 370, 160, 250);
FillTriangle(ColorWhite(), 70, 250, 90, 310, 110, 250);
FillTriangle(ColorWhite(), 100, 250, 120, 310, 140, 250);
FillRectangle(ColorWhite(), 70, 350, 80, 30);

// O
FillEllipse(ColorBlue(), 170, 250, 80, 100);
FillEllipse(ColorWhite(), 190, 270, 40, 60);

// R
FillTriangle(ColorBlueViolet(), 270, 250, 270, 350, 340, 350);
FillTriangle(ColorWhite(), 252, 250, 252, 350, 320, 350);
FillEllipse(ColorBlueViolet(), 252, 250, 80, 60);
FillEllipse(ColorWhite(), 270, 270, 40, 20);
FillRectangle(ColorWhite(), 252, 250, 20, 100);
FillRectangle(ColorBlueViolet(), 270, 250, 20, 100);

// L
FillRectangle(ColorPurple(), 360, 250, 20, 100);
FillRectangle(ColorPurple(), 380, 330, 40, 20);

// D
FillEllipse(ColorMagenta(), 420, 250, 100, 100);
FillEllipse(ColorWhite(), 440, 270, 60, 60);
FillRectangle(ColorWhite(), 420, 250, 30, 100);
FillRectangle(ColorMagenta(), 450, 250, 20, 101);

// !
FillRectangle(ColorPink(), 550, 250, 20, 60);
FillCircle(ColorPink(), 560, 340, 10);

RefreshScreen();
Delay(5000);
```

...

Hope you like ***RAINBOW*** words!

...

Here is what the code above will create:

![A window showing the GUI output of the program being run in the terminal.](./images/splashkit-gui-shapes-hello-world.png)

Yep... I really did spend the time to write all the letters using just 3 shapes - Rectangles, Ellipses, and Triangles! (Well... 4 if you count the last little Circle on the exclamation mark haha)

But how cool is it?!  
I told you we were getting to the fun part &#128540;

And there's more to come! Let's have a look at using bitmap images and sounds:

### Using Resources

Coming soon...
<!-- TODO: Add about using `skm resources` to create folders -->

<!-- Check best way to link resources in the page, or use https://splashkit.io/api/networking/#download-bitmap etc for this -->

<!-- Bitmaps undecided -->
<!-- Sound will be the start of the Saddle Club theme song - check about copywrite if under 10 seconds -->
