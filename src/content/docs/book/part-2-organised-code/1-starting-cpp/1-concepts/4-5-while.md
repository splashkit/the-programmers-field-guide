---
title: While Loops
sidebar:
    label: " - While Loops"
---

The while and do while loops are used in the same way in C/C++ as they are in C#.

:::tip[In C/C++]

![The while and do while loop syntax](./images/while-loop.png)

Notice that the syntax for while and do while are the same in C/C++ as they are in C#.

As with C#, you can use `continue` and `break` within loops to jump back to the condition, or to exit the loop.

:::

## Example

Here is the example event loop from the [while loop](../../../../part-1-instructions/3-control-flow/1-concepts/04-1-while-loop) page.

```cpp
#include "splashkit.h"

int main()
{
    open_window("Circle Test", 400, 400);
    clear_screen(color_white());

    while ( !quit_requested())
    {
        fill_circle(random_color(), rnd(screen_width()), Rnd(screen_height()), rnd(50));
        refresh_screen();

        process_events();
    }
}
```

Here is the c/c++ version of the [do while loop](../../../../part-1-instructions/3-control-flow/1-concepts/04-2-do-while) example.

```cpp
#include "splashkit.h"

int main()
{
    string again;

    do
    {
        write_line("Hello");

        write("Again: ");
        again = read_line();
    } (again == "y" || again == "Y");
}
```
