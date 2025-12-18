---
title: Graphics Procedures
sidebar:
    label: " - Graphics Procedures"
---

This journey should be fun. While reading and writing text from the terminal can demonstrate all the programming features, it doesn't have as much of a *fun factor*. Creating visual and interactive programs will help you **see** that your programs are working as you expected.

To help you achieve this, we created the [SplashKit](https://splashkit.io) library. This library is designed to support your journey as you learn to program. It does not take any control away from you but empowers you to make interactive, multimedia programs.

Let's detour briefly to explore how graphics work, and how you can use them within SplashKit. There are additional articles about this on the [splashkit.io](https://splashkit.io) website.

:::tip[Why Games?]
Programming is about getting the computer to do what you want it to do. This will involve calculations and data manipulation. For many programs, these values are what is important. For example, we want to calculate values for our bank account balance in a banking application, or record marks for a grading system. When things go wrong it requires you to be able to see what the expected value was, and then think through these calculations to see what happened.

With games, we make it much easier to **see** problems. You still need to go back through the code and understand why, but you can **see** that it is wrong. The player is in the wrong location. They didn't pick up the item when they should have, or they did when they shouldn't have. This **visual** aspect *should* help you engage with your program. You will be drawing your digital reality to the screen, which helps you connect with these abstractions in your code.

The programming knowledge and coding skills you gain by building these games will *directly* apply to building any other kind of program. So we encourage you to build some games and have some fun while you are learning.

Don't worry if you are not interested, or able, to engage with these visuals. We provide examples and projects that do not require you to use these ideas.
:::

## Graphics

SplashKit provides procedures you can call to create windows and draw images and shapes for the user to see.

### Open a Window

To draw, you need something to draw onto. The base interactive component in SplashKit is a **Window**.

| <div style="width:120px">**Procedure**</div> | **Required Arguments** | **Description** |
|-------------|------------------------|----------------|
| [open_window](https://splashkit.io/api/windows/#open-window) | the title, width, and height of the window | Opens a window for you to draw to. |
| [clear_screen](https://splashkit.io/api/graphics/#clear-screen) | a color | Clears everything on the current window, making it the indicated color. |
| [delay](https://splashkit.io/api/utilities/#delay) | an integer | Delays for the number of milliseconds from the argument. |
These procedures have the following declarations.

```c++
// These need:
// #include "splashkit.h";

window open_window(string caption, int width, int height);
void clear_screen(color clr);
void delay(int milliseconds);
```

The `open_window` procedure can be called to create a new window for the user to interact with, and for your code to draw upon. This procedure requires three arguments: the window’s title, its width and its height. For example, `open_window("House Drawing", 800, 600);` will open a window that is 800 pixels wide and 600 pixels high with the title "House Drawing", as shown in the following image. Please note that the house and hill are drawn by additional code.

![Window with dimensions illustrated](./images/window-dimensions.png)

To test this out, try out the following code for a program that opens a new window using SplashKit. In this program we are also using the SplashKit procedure `delay`. This makes the program wait so that we can see what is happening. When you compile and run this, you will see the window open and the program delay for 5 seconds. Try changing the title and size of the window.

```c++
#include "splashkit.h"

int main()
{
    open_window("Window title to change", 800, 600);

    delay(5000); // wait 5 sections (5000 milliseconds)

}
```

### Pixels and Coordinates

The images you see on your computer’s screen are made up of dots called **pixels**: picture elements. The screen has many pixels arranged into a grid (columns and rows), meaning that each pixel has its own unique location represented as a combination of an `x` and `y` value, where `x` indicates the column or distance from the left of the screen, and `y` the row or distance from the top of the screen. Each pixel also has its own color, which we can change individually or in combination with other pixels to form images on the screen.

:::caution
If you've studied any mathematics, you might be used to the coordinate (0, 0) being at the bottom-left, or even the middle of your coordinate system.
In computer graphics (0, 0) is at the **top left** of the screen.
Forgetting this can create some interesting graphics!
:::

The following image shows an example of how the computer would draw rectangles using the SplashKit instructions to draw a filled (`fill_rectangle`) and outlined (`draw_rectangle`) rectangle.
Both of these instructions require a color, an x and y value, and a width and a height.
It uses this information, and the knowledge that position (0, 0) is the top left of the screen, to know where these shapes should be drawn.
So, the blue filled rectangle is drawn at x 1, y 1, is 7 pixels wide, and 3 pixels high.
The magenta outlined rectangle is drawn 10 pixels from the left of the screen, 1 pixel from the top, 7 pixels wide, and 3 pixels high.

![Pixel locations are based on x and y locations](./images/window-pixels.png)

:::tip[Why the top down?]
The answer is simply **history**. The original monitors were based on Cathode Ray Tubes (CRTs) and drew to the screen from left to right, and top to bottom, matching the writing style of Western cultures.
:::

### Double Buffering

In a graphical program the computer still executes code in [sequence](/book/part-1-instructions/1-sequence/5-reference/01-sequence).
If we were to show the result of every drawing instruction immediately, we would get some very odd looking programs.

For example, to draw a house on a hill we might combine an ellipse, a triangle, and a rectangle.
If the computer showed us the result of drawing each individual shape, we would see these three shapes pop up individually.
In a program drawing only three shapes this might happen too quickly for a human to see, but the problem would eventually become obvious if you added enough complexity to the graphics.

Instead of having each element we draw appear individually, we just want the whole picture to appear at once.
To achieve this, SplashKit uses a technique called **double buffering**, illustrated in the image below. With double buffering, the computer first draws the shapes to an off-screen surface.
It then waits for a command to display that surface to the user. With SplashKit, the command for this is `refresh_screen`.

![Illustration of double buffering, and the need to call refresh screen.](./images/refresh-screen.png)

| <div style="width:70px">**Procedure**</div> | **Required Arguments** | **Description** |
|-----------|------------------------|----------------|
| [refresh_screen](https://splashkit.io/api/graphics/#refresh-screen) | none | Present what has been drawn to the user. |

```c++
// These need:
// #include "splashkit.h"

void refresh_screen();
```

### Drawing to a Window

Now that we understand how to refer to positions on the screen, and how SplashKit uses double buffering to display graphics, let's do some drawing of our own.

There are several procedures in SplashKit that you can use to draw shapes to the window.
These procedures typically require arguments that allow you to control where the shape appears, its size, and its color.

| <div style="width:70px">**Procedure**</div> | *Required Arguments** | **Description** |
|-----------|------------------------|----------------|
| [color_white](https://splashkit.io/api/color/#color-white), [color_blue](https://splashkit.io/api/color/#color-blue), ... | None | Returns a value that represents the color indicated in the name of the procedure. See the [dolor](https://splashkit.io/api/color/) page for the complete list.  |
| [fill_circle](https://splashkit.io/api/graphics/#fill-circle), [draw_circle](https://splashkit.io/api/graphics/#draw-circle) | A color and three numeric values for the location (x and y) and radius of the circle. | Draws a filled or hollow circle to the screen. |
| [fill_rectangle](https://splashkit.io/api/graphics/#fill-rectangle), [draw_rectangle](https://splashkit.io/api/graphics/#draw-rectangle) | A color and four numeric values for the location (x and y), width, and height of the rectangle | Draws a filled or hollow rectangle to the screen. |
| [fill_ellipse](https://splashkit.io/api/graphics/#fill-ellipse), [draw_ellipse](https://splashkit.io/api/graphics/#draw-ellipse) | A color and four numeric values for the location (x and y), width, and height of the ellipse | Draws a filled or hollow ellipse to the screen. |
| [fill_triangle](https://splashkit.io/api/graphics/#fill-triangle), [draw_triangle](https://splashkit.io/api/graphics/#draw-triangle) | A color and six numeric values for the location (x and y) or each point of the triangle. | Draws a filled or hollow triangle to the screen. |
|[draw_line](https://splashkit.io/api/graphics/#draw-line) | A color and four numeric values for the location (x and y) of the start and end of the line. | Draws a line from one point to another. |

These procedures have the following declarations:

```c++
// These need:
// #include "splashkit.h"

color color_white();
color color_blue();
// and many others...

void fill_circle(color clr, double x, double y, double radius);
void draw_circle(color clr, double x, double y, double radius);

void fill_rectangle(color clr, double x, double y, double width, double height);
void draw_rectangle(color clr, double x, double y, double width, double height);

void fill_ellipse(color clr, double x, double y, double width, double height);
void draw_ellipse(color clr, double x, double y, double width, double height);

void fill_triangle(color clr, double x1, double y1, double x2, double y2, double x3, double y3);
void draw_triangle(color clr, double x1, double y1, double x2, double y2, double x3, double y3);

void draw_line(color clr, double x1, double y1, double x2, double y2);
}
```
The following code draws a house on a hill using some basic shapes in SplashKit.  
Try running it, then modify the drawing to make it your own.

```c++
#include "splashkit.h"

int main()
{
    open_window("Shapes by ...", 800, 600);

    clear_screen(color_white());
    fill_ellipse(color_bright_green(), 0, 400, 800, 400);
    fill_rectangle(color_gray(), 300, 300, 200, 200);
    fill_triangle(color_red(), 250, 300, 400, 150, 550, 300);
    refresh_screen();

    delay(5000);
}
```

:::tip[Autocomplete]
If you are ever unsure of what a procedure requires, you should be able to get Visual Studio Code to show you a list of the arguments you need to provide. To do this, type the start of the procedure name then press `ctrl-space`. There are usually a couple of different ways to draw a shape in SplashKit, which you can explore by pressing the up/down arrows to navigate the pop-up list. An example with C++ is shown below. Try it out for yourself as you modify you first shape drawing program.

![Use `ctrl-space` to bring up the autocomplete for procedures you want to call.](./images/auto-complete.png "TODO: replace with C++ example")
:::

## Working with Resources

SplashKit provides procedures to help you work with resources such as images, sounds, fonts, and animations. There are procedures to load these into your program, and draw them to the screen or play them from your speakers.

SplashKit organises these files in a **Resources** folder containing sub-folders for each different kind of resource. For example, the **Resources/images** folder is used to store the images you want to work with. The SplashKit library comes with an `skm` script that you can use in the terminal to help set up your project. Running `skm resources` in the root folder of your project will create these resource folders for you.

### Drawing images

| <div style="width:100px">**Procedure**</div> | **Required Arguments** |**Description** |
|-----------|------------------------|----------------|
| [load_bitmap](https://splashkit.io/api/graphics/#load-bitmap) | the name of the bitmap and its filename | This loads the image (bitmap) into your program. You can use the name to access this bitmap in other procedure calls. The filename can be the full path to a file, or the filename of a file in the **Resources/images** folder.  |
| [draw_bitmap](https://splashkit.io/api/graphics/#draw-bitmap-named) | the image name, and two numbers for the coordinate to draw to | This draws the image you loaded with the given name, at the coordinates you provided (x and y). The coordinates indicate the top left corner of the bitmap when it is drawn. |

These procedures have the following declarations:

```c++
// These need:
// #include "splashkit.h"

bitmap load_bitmap(string name, string filename);
void draw_bitmap(string name, double x, double y);
```

To draw an image:

1. Copy the image into the **Resources/images** folder.
2. Load the image in your code using `load_bitmap`.
3. Draw the image using its name in `draw_bitmap`.

The following code shows how you might follow these steps in a simple program.

```c++
#include "splashkit.h"

int main()
{
    // Copy "background.png" to Resources/images

    open_window("Drawing Test", 800, 600);

    load_bitmap("bkg", "background.png");
    clear_screen(color_white());
    draw_bitmap("bkg", 10, 20);
    refresh_screen();

    delay(5000);
}
```

### Drawing text

You might want to be able to draw text to the screen to display messages to the user. For static text, you are best to embed this within an image, as drawing an image is easier and faster than drawing text. For dynamic text (i.e., any text that changes as the program runs) you will need to use a text drawing procedure. In SplashKit you can draw simple text with fixed characters, or load a font and use that to draw the text.

| <div style="width:100px">**Procedure**</div> | **Required Arguments** |**Description** |
|-----------|------------------------|----------------|
| [load_font](https://splashkit.io/api/graphics/#load-font) | the name of the font and its filename | This loads the font into your program. You can use the name to access this font in other procedure calls. The filename can be the full path to a file, or the filename of a file in the **Resources/fonts** folder. |
| [draw_text](https://splashkit.io/api/graphics/#draw-text-no-font-no-size) | some text, a color, x, and y | This draws the provided text in the indicated color at the given coordinates (x and y). The coordinates indicate the top left of the text. This will draw using the built-in font. |
| [draw_text](https://splashkit.io/api/graphics/#draw-text-font-as-string) | some text, a color, a loaded font's name, font size (int), x, and y | This draws the provided text in the indicated color, with the named font, at the indicated size. The coordinates (x and y) will be the top left of the text. |

These procedures have the following declarations:

```c++
// These need:
// #include "splashkit.h"

void draw_text(string text, color clr, double x, double y);
void draw_text(string text, color clr, string fnt, int font_size, double x, double y);
font load_font(string name, string filename);
```

Several online sites provide free fonts for personal projects. The [Google Fonts](https://fonts.google.com) site is a good option. The font files should be **true type fonts**, which usually have a **ttf** file extension. Find the font you want to draw with and download it into your **Resources/fonts** folder. Load the font, and use the drawing procedures to render text to your window.

The following code draws "Hello World" to the screen using the built-in font, and the [Roboto-Light font from Google Fonts](https://fonts.google.com/specimen/Roboto).

```c++
#include "splashkit.h"

int main()
{
    // Copy "Roboto-Light.ttf" to Resources/fonts

    open_window("Text Drawing Test", 200, 200);

    load_font("main", "Roboto-Light.ttf");

    clear_screen(color_white());

    draw_text("Hello World", color_black(), 10, 20);
    draw_text("Hello World", color_black(), "main", 20 /*font size*/, 20, 30);

    refresh_screen();
    delay(5000);
}
```

![A window showing "Hello World" written in the two fonts.](./images/draw-text-new.png)

:::tip[Summary]

* SplashKit is a library which helps you make interactive multimedia programs.
* SplashKit uses **double buffering**, so you have to call `refresh_screen` to make anything you draw in code appear to the user.
* The easiest way to use resources like images and sounds in your SplashKit program is to run `skm resources` in the terminal in the root folder of your project, and place the resource in the relevant folder.

:::
