---
title: Converting Code
---

When you switch programming languages, you need to learn how that language works. What we have learnt about C#, converts quite easily to C++. Let's have a quick look at the main differences.

![Illustration of converting our code to C++](./images/cs-to-cpp-pano.png)

:::note[Different languages...]

- have different naming conventions. In C# method names use `PascalCase`, while the equivalent functions/procedures use `snake_case` in C++.
- use different names for their types. C# and C++ include int, double, bool, and string.
- have different control flow statements, though most are similar. The control flow statements we have used in C# are the same in C++.
- support different capabilities when working with strings. In C# we used string interpolation to create strings, while in C++ you have to use concatenate to join together the parts of the strings.
- have different libraries. The C# and C++ languages have different libraries, but the SplashKit library is available across both languages.

:::

:::tip

We are focusing on building your mental model of programming, so the features we have explored so far are common across most imperative programming languages.

:::

:::note[The C++ code for...]

- Variable and constant declarations **use the same syntax** we were using in C#. Declare variables using `int age; string name;` and constants using `const int MAX_WIDTH = 300`. Our C++ coding convention will use `snake_case` variable names.
- Function and procedure calls **use the same syntax** `write_line("Hello World");`. Our C++ coding convention will use `snake_case` for function and procedure names.
- If statements **remain the same** as we were doing in C#.
- Switch case statements *are similar*, but are limited to integer values. So no more switch based on a string, for example.
- While loops **remain the same** as we were doing in C#.
- Do while loops **remain the same** as we were doing in C#.
- For loops **remain the same** as we were doing in C#.

:::

## Example

The following code is the C++ version of the [menu code](/book/part-1-instructions/3-control-flow/3-guided-tour/1-3-menu) from the control flow chapter.

```cpp
#include "splashkit.h"

int main()
{
  string line;
  int choice;

  do
  {
    write_line("1: Addition");
    write_line("2: Subtraction");
    write_line("3: Multiplication");
    write_line("4: Division");
    write_line("5: Quit");
    write("Enter your choice: ");
    line = read_line();

    while (!is_integer(line))
    {
      write_line("Please enter a whole number");
      write("Enter your choice: ");
      line = read_line();
    }

    choice = stoi(line);

    switch (choice)
    {
      case 1:
        write_line("Addition");
        break;
      case 2:
        write_line("Subtraction");
        break;
      case 3:
        write_line("Multiplication");
        break;
      case 4:
        write_line("Division");
        break;
      case 5:
        write_line("Quit");
        break;
      default:
        write_line("Invalid choice");
        break;
    }
  } while (choice != 5);
}
```
