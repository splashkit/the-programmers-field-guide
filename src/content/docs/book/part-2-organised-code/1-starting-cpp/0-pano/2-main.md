---
title: Main Function
---

In C++ you have to place your instructions within a function or procedure. This allows you to structure your solution, which we look at in [Organising Code](/book/part-2-organised-code/2-organising-code/0-overview). For now, we just need to create a main function.

![Illustration of main](./images/main-function-pano.png)

:::note[Main...]

- is a function that contains code.
- runs when the program is started.
- should end with `return 0;`

:::

## Example

Here is a C++ version of the test program from the [method call](/book/part-1-instructions/1-sequence-and-data/0-panorama/2-method-call) page. This includes a sequence of method calls.

```cpp
// Give us access to methods in SplashKit library
#include "splashkit.h"

// the main function - which is run when the program starts
int main()
{
    // Call the write_line method - the argument is the text to output
    write_line("Testing method calls");

    int delay_seconds;
    string user_input;

    // Call the write method - the argument is the text to output
    write("How many seconds do you want it to show for? Enter seconds: ");

    // Call read_line - this needs no arguments.
    // It will return the string that the use entered.
    // In this case we store it in user_input.
    user_input = read_line();

    // Call stoi - passing it the text from user_input as the argument.
    // This returns a number which we then store in delay_seconds.
    delay_seconds = stoi(user_input);

    // Call the open window method. This has three arguments
    // - the first is the title of the window. We will make it Test Window
    // - the second is the width - we want 1280 pixels on each line
    // - the last is the height - we want 720 lines in the window
    open_window("Test Window", 1280, 720);

    // Call RandomColor - it needs no data and it returns a color
    // We then call ClearScreen, and pass it the data returned from RandomColor
    clear_screen(random_color());

    // Call the RefreshScreen method
    refresh_screen();

    // Call the Delay method - pass in the number of milliseconds to delay
    delay(delay_seconds * 1000);

    // Return 0 at the end of the program - indicating successful execution of the program
    return 0;
}
```

:::note

Notice how similar the code is. It includes a `main` function that contains the variable declarations and function/procedure calls. The variable declarations and function/procedure calls are similar but with different style case for the names.

:::
