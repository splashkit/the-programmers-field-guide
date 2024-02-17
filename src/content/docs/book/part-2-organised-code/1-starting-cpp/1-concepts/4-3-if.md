---
title: If Statements
sidebar:
    label: " - If Statements"
---

In C/C++, the if statement is used in the same way it is in C#: to branch between two instruction paths based on a condition.

:::note[Syntax]

The syntax of the if statement is the same in C/C++ and C#.

![The syntax of if statements in C/C++](./image/../images/if-statement.png)

:::

Conditions here are formed as boolean expressions, as they were in C#. C/C++ also uses the same comparisons and boolean operators as C#.

| Kind | Description | Operator |
|---|---|---|
| **Equal** | Are the values the same? | `a == b` |
| **Not Equal** | Are the values different? | `a != b` |
| **Larger Than** | Is the left value larger than the right? | `a > b` |
| **Less Than** | Is the left value smaller than the right? | `a < b` |
| **Larger Or Equal** | Is the left value larger than or equal to the right? | `a >= b` |
| **Less Or Equal** | Is the left value smaller than or equal to the right? | `a <= b` |

|  | Description | Operator | Example |
|---|---|---|---|
| **And** | Are both values true? | `&&` | `a && b` |
| **Or** | Is at least one value true? | `\|\|` | `a \|\| b` |
| **Xor** | Is one value true, and the other false? | `^` | `a ^ b` |
| **Not** | Is the value false? | `!` | `! a` |

:::tip
These are the kinds of things you need to check when you learn a new language. As C# was based on the C syntax, much of this is the same.
:::

## Example

Here is the same example we worked through on the [if statement](../../../../part-1-instructions/3-control-flow/1-concepts/03-1-if#multiple-if-statements-combined) page. To get this working, we need to use the SplashKit library to get access to `read_line` and `write_line`.

```cpp
#include "splashkit.h"

int main()
{
    string language;

    write("What language do you use? ");
    language = read_line();

    if (language == "C#")
    {
        write_line("Good choice, C# is a fine language.");
    }
    else if (language == "C" || language == "C++")
    {
        write_line("These are great low level languages - we will be using these soon!");
    }
    else
    {
        write_line("Well... good luck with that!");
    }

    write_line("Great chat!");
}
```
