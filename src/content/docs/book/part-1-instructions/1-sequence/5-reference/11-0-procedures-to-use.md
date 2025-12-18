---
title: Procedures to Use
---

At this point the programs we create will include sequences of procedure calls, with variables that we can use to work with data within our program.

To build programs we will need to have some [procedures](/book/part-1-instructions/1-sequence/5-reference/02-procedure) that we can [call](/book/part-1-instructions/1-sequence/5-reference/03-procedure-call). The great this is that [library](/book/part-1-instructions/1-sequence/5-reference/10-library) creators will describe the procedures that they have created so that we can find and use them. In order to use this documentation we need to know how these procedures will be described.

## Procedure Declarations

Procedures are usually communicated using part of their declaration. We will look at building these ourselves in [Part 2](/book/part-2-organised-code/2-organising-code/0-overview), but for now we need to know some basics so that we can start calling procedures.

![Procedure declaration visualisation](./images/procedure-decl.png)

The above image helps show the components of a procedure declaration. The key parts are:

- The *name* of the procedure. Remember, to call the procedure you use its name.
- The names and types of any *arguments* you will need to pass when you call the procedure. These will be listed after the procedure name in parentheses.
- You can also see the type of data that is returned (where `void` means none).

The following code snippets show example procedure declarations.

```c++
void write_line(string value);
```

```c++
#include "splashkit.h"

int main()
{
    write_line("Hello World");
}
```

The following shows the declaration of the [Open Window](https://splashkit.io/api/windows/#open-window) procedure from the SplashKit documentation.

```c++
window open_window(string caption, int width, int height);
```

You can call the `open_window` procedure using the following code. It will pass "This is the caption" to the `caption` data, 800 to the `width`, and 600 to the `height`. The code will return a `window` value, which for now we can ignore. We _could_ also store it in a `window` variable, which we'll check out in the next chapter.

```c++
#include "splashkit.h"

int main()
{
    open_window("This is the caption", 800, 600);

    delay(1000); // show the window for 1 second
}
```

For the final example let's look at [Fill Circle](https://splashkit.io/api/graphics/#fill-circle) and [Color Red](https://splashkit.io/api/color/#color-red). These have the following declaration on the SplashKit website.

```c++
void fill_circle(color clr, double x, double y, double radius);
color color_red();
```

We can see that their names are `fill_circle` and `color_red`. Will `fill_circle` we need to pass it a `color`, and three `double` values. `color_red` does not need to be passed anything, and will return a `color` value. The following is an example of calling this procedure. Here we use the result of `color_red()` as the value passed into the color for `fill_circle`.

```c++
#include "splashkit.h"

int main()
{
    open_window("This is the caption", 800, 600);
    clear_screen(color_white());

    fill_circle(color_red(), 400, 300, 100);
    refresh_screen();

    delay(1000); // show the window for 1 second
}
```

In the next pages we will list the different procedures that you will use to complete the activities in this chapter both for terminal and graphical programs.
