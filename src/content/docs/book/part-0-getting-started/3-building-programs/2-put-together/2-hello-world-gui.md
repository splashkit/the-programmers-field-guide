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

![A vscode window showing the SplashKit included in the project file](./images/splashkit-package-csproj.png)
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

:::caution['dotnet run' not working?]
If you were not able to install SplashKit globally in the installation guide in the [previous chapter](../../2-computer-use/2-put-together/0-0-overview.md), you can use the following command instead:

```bash
skm dotnet run
```

You will need to add `skm` to the front of the commands mentioned in the Concepts [Build and Run](../1-concepts/03-build-and-run.md) page until you are able to get SplashKit installed globally (by [troubleshooting](../../2-computer-use/2-put-together/0-1-troubleshooting-install.md), or asking one of the tutors for help).
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

Copy the following code and paste it into your Program.cs file (replacing existing code) and then run your program using `dotnet run`:

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

And there's more to come! Let's have a look at using bitmap images, fonts and sounds:

### Using Resources

When adding additional resource files to your SplashKit project, such as images, sounds, etc., you *can* just add these files into the same folder as your code files, **but** if you have a lot of files then it is better to sort them into separate folders.

You can run the following command to add these folders to your project:

```bash
skm resources
```

![Gif showing skm resources command being run in vscode terminal](/public/gifs/part-0-chapter-3/skm-resources-command.gif)

The code for this part will be using the following SplashKit functionality to draw images, play sound effects and draw text with a specific font:

- `OpenWindow` to open a GUI window,
- `ClearScreen` to set the background colour,
- `LoadFont` to load a font for use with `DrawText`,
- `DrawText` to write text,
- `LoadSoundEffect` to load a sound effect file (.ogg, or .wav),
- `PlaySoundEffect` to play the loaded sound effect,
- `LoadBitmap` to load an image file (.png),
- `DrawBitmap` to draw the loaded bitmap image,
- `RefreshScreen` to show the graphics on the lines above it, and
- `Delay` to keep the Window open for a set amount of time.

You will also need to download the following resource files, and then move them into your project folder:

<!-- TODO: Check this again: May update this to either be a zip file, or use the Download functions instead -->
| ***Description***         | ***Type***   | ***File*** |
|---------------------------|--------------|------------|
| Hello World Sound Snippet | Sound Effect | <a href="/public/resources/code-examples/part-0/hello-world-snippet-saddle-club.ogg" download>Click to Download</a> |
| Large Cartoon Earth Image | Bitmap Image | <a href="/public/resources/code-examples/part-0/earth.png" download>Click to Download</a> |
| Small Cartoon Earth Image | Bitmap Image | <a href="/public/resources/code-examples/part-0/earth-small.png" download>Click to Download</a> |
| SplashKit Box Icon        | Bitmap Image | <a href="/public/resources/code-examples/part-0/skbox.png" download>Click to Download</a> |
| Roboto Italic Font        | Font         | <a href="/public/resources/code-examples/part-0/Roboto-Italic.ttf" download>Click to Download</a> |

In Visual Studio Code, your Resources folders would look like this:

![A vscode window showing the resource folders in explorer panel](./images/resources-folders-hello-world.png)

:::note[Reminder]
You're not expected to understand how the following code works at this point. It has been created for fun, so you can just copy and paste - and enjoy another "Hello World!" GUI program!
:::

Copy the following code and paste it into your Program.cs file (replacing existing code) and then run your program using `dotnet run`:

```cs
using static SplashKitSDK.SplashKit;

// load resources
LoadSoundEffect("Hello World", "hello-world-snippet-saddle-club.ogg");
LoadFont("main", "Roboto-Italic.ttf");
LoadBitmap("Earth", "earth.png");
LoadBitmap("SmallEarth", "earth-small.png");
LoadBitmap("SplashKitBox", "skbox.png");

OpenWindow("Hello World: Using Resources with SplashKit", 800, 600);
PlaySoundEffect("Hello World");

ClearScreen(ColorWhite());
DrawText("Anyone remember the \"Hello World\" Saddle Club song?", ColorBlack(), "main", 30, 40, 200);
RefreshScreen();
Delay(2500);

ClearScreen(ColorWhite());

// H
DrawBitmap("SmallEarth", 20, 100);
DrawBitmap("SmallEarth", 20, 130);
DrawBitmap("SmallEarth", 20, 160);
DrawBitmap("SmallEarth", 20, 190);
DrawBitmap("SmallEarth", 20, 220);
DrawBitmap("SmallEarth", 52, 160);
DrawBitmap("SmallEarth", 84, 100);
DrawBitmap("SmallEarth", 84, 130);
DrawBitmap("SmallEarth", 84, 160);
DrawBitmap("SmallEarth", 84, 190);
DrawBitmap("SmallEarth", 84, 220);
RefreshScreen();
Delay(200);

// E
DrawBitmap("SmallEarth", 148, 100);
DrawBitmap("SmallEarth", 148, 130);
DrawBitmap("SmallEarth", 148, 160);
DrawBitmap("SmallEarth", 148, 190);
DrawBitmap("SmallEarth", 148, 220);
DrawBitmap("SmallEarth", 180, 100);
DrawBitmap("SmallEarth", 212, 100);
DrawBitmap("SmallEarth", 180, 160);
DrawBitmap("SmallEarth", 180, 220);
DrawBitmap("SmallEarth", 212, 220);
RefreshScreen();
Delay(200);

// L
DrawBitmap("SmallEarth", 276, 100);
DrawBitmap("SmallEarth", 276, 130);
DrawBitmap("SmallEarth", 276, 160);
DrawBitmap("SmallEarth", 276, 190);
DrawBitmap("SmallEarth", 276, 220);
DrawBitmap("SmallEarth", 308, 220);
DrawBitmap("SmallEarth", 340, 220);
RefreshScreen();
Delay(200);

// L
DrawBitmap("SmallEarth", 404, 100);
DrawBitmap("SmallEarth", 404, 130);
DrawBitmap("SmallEarth", 404, 160);
DrawBitmap("SmallEarth", 404, 190);
DrawBitmap("SmallEarth", 404, 220);
DrawBitmap("SmallEarth", 436, 220);
DrawBitmap("SmallEarth", 468, 220);
RefreshScreen();
Delay(200);

// O
DrawBitmap("SmallEarth", 530, 160);
DrawBitmap("SmallEarth", 622, 160);
DrawBitmap("SmallEarth", 540, 128);
DrawBitmap("SmallEarth", 560, 100);
DrawBitmap("SmallEarth", 592, 100);
DrawBitmap("SmallEarth", 612, 128);
DrawBitmap("SmallEarth", 540, 192);
DrawBitmap("SmallEarth", 560, 220);
DrawBitmap("SmallEarth", 592, 220);
DrawBitmap("SmallEarth", 612, 192);
RefreshScreen();
Delay(500);

// World
DrawBitmap("Earth", 100, 350);
RefreshScreen(60);
Delay(2000);

// SplashKit ("Me")
DrawBitmap("SplashKitBox", 450, 300);
DrawText("SplashKit!", ColorBlack(), "main", 50, 450, 530);
RefreshScreen(60);
Delay(2000);
```

Following a bit of a theme with *writing words out of something other than actual text*, we get this:

<!-- Testing embedded video -->
<!-- TODO: upload video to SplashKit youtube instead -->
<!-- May update this to be a png of the final images on the window if/when a full video has been created -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/nYVyxuZOqpo?si=PtXf2TXsQXCpZNkL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

&#127759; Yes, that is "HELLO", written using "worlds" &#128516;  
(Because "HELLO" ... "*world*")

:::tip[Hooray!]
You have now successfully run terminal and graphical programs in C#!

Next we will have a look at the Debugger, to help you when things don't run quite so smoothly.
:::
