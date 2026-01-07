---
title: "Summary"
---

This chapter introduced constructs you can use to work with data:

- [Variables](/book/part-1-instructions/2-data/5-reference/10-variable) where you can store values you want to change as the program runs.
- [Constants](/book/part-1-instructions/2-data/5-reference/20-constant) for managing values that do not change.
- [Functions](/book/part-1-instructions/2-data/5-reference/30-function) as a means of calculating or fetching values.

To work with these we have some additional instructions we can use:

- [Assignment Statement](/book/part-1-instructions/2-data/5-reference/11-assignment-statement) to store a new value in a variable.
- [Function Calls](/book/part-1-instructions/2-data/5-reference/31-function-call) to use (call) a function in an expression.

These constructs and tools extend what you have learnt in the [sequence chapter](/book/part-1-instructions/2-data/5-reference/60-summary). You need to think about sequence and data together. Break down your problems into small discrete steps, each of which gets you a little closer toward your goal.

With each piece of data, think "Does this need to change?" If the answer is yes, then use a variable. If no, use a constant or literal value. At the same time, think "What kind of value is this?" If it is a number, is it a whole number (`int`) or a real number (`double`)? This will help you make the many small decisions you need to make as you craft your code.

An overview of these concepts is shown in the concept map below.

![Key concepts from the data chapter](./images/data-summary.png "Summary of Data")

:::note[Summary]

- Constructs are things that exist as *things* in your code that you can use. You can create and use, or access them from libraries.
- Instructions capture the different commands you can get the computer to perform.
- Your program is a **sequence** of instructions that use **data** (in variables, constants, and literals) that get the computer to do something when it is run.

:::

## Examples

### Circle Drawing Example

Let's use SplashKit to look how variables can be used in a graphical program. The following program captures a radius for a circle and uses that to draw to the screen. To achieve this we need two variables, `line` and `radius`. We use `read_line` to read a `string` from the user, and `to_double` to convert the text read into a `double` value. This value is stored in the `radius` variable, which can then be used in the call to `fill_radius`.

Here we also have a `color` variable to store the fill color for the circle. `color` comes from the SplashKit library, and is used to represent color values. In this case we call the `hsb_color` function to calculate the color of the [hue](https://en.wikipedia.org/wiki/Hue) specified by the user.

```c++
#include "splashkit.h"

int main()
{
    string line;
    int radius;
    double hue;
    color fill_color;

    write_line("Welcome to Circle Drawer!");
    write_line();
    write_line("Enter the radius of the circle to draw. (a whole number)");

    // Read value from the user and convert to double for radius
    write("Circle radius: ");
    line = read_line();
    radius = to_double(line);

    // Read value from the user and convert to double for hue
    write_line("What color? Enter hue between 0 to 1");
    write("Hue: ");
    line = read_line();
    hue = to_double(line);
    fill_color = hsb_color(hue, 0.8, 0.8);

    // Draw scene and delay
    open_window("Circle Drawing", 800, 600);
    clear_screen(COLOR_WHITE);
    fill_circle(fill_color, 400, 300, radius);
    refresh_screen();
    delay(5000);
}
```

:::note[Summary]

- Variables are **constructs** you can create to store values in your programs.
- You can think of a variable as a box. The variable is the box, and its value is stored within it.
- Each variable and constant has a ...
  - **name** (identifier) that can be used to refer to it.
  - **type** that determines its size and how its value is interpreted.
  - **value** that it is storing.
- The first time you assign a value to a variable or constant, you are **initialising** it.
- You can **read** the value from variables in your instructions.
- A variable **is not** its value -- it is a container that stores a value, where its value can change over time as you write new values into the variable.

:::
