---
title: Case Statements
sidebar:
    label: " - Case Statements"
---

The case statement is the one statement where there is a difference in C/C++ compared to C#. The syntax is very similar, but there are limitations on the kind of data you can use in the expression. C/C++ can only use ordinal types in the switch statement, meaning we are limited to integer values.

:::note[Syntax]
The syntax is consistent with the C# code, but with a limitation on the kind of value you can use.

![Syntax for the case statement in C/C++](./images/case-statement.png)
:::

## Example

Here is an updated version of the [case statement](../../../../part-1-instructions/3-control-flow/1-concepts/03-2-case#how-does-case-work) example. As our case statement is restricted to comparing integers, we use a simple menu to select between options instead of comparing strings.

```cpp
#include "splashkit.h"

using std::stoi;

int main()
{
    string line;
    int option;

    write_line("What language do you use? ");
    write_line("1 - C#");
    write_line("2 - C");
    write_line("3 - C++");
    write_line("4 - Others");
    write("Enter option: ");

    line = read_line();
    option = stoi(line);

    switch (option)
    {
    case 1:
        write_line("Good choice, C# is a fine language.");
        break;
    case 2:
    case 3:
        write_line("These are great low level languages - we will be using these soon!");
        break;
    default:
        write_line("Well... good luck with that!");
    }

    write_line("Great chat!");
}
```

:::tip
Again, notice that the logic is the same. You **think** the same as you develop and debug this code, even though the language is different. This is a powerful thing to understand, and should help demonstrate that switching programming languages isn't as large a challenge as it may seem.
:::
