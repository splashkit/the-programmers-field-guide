---
title: "Global Variables"
---

Variables and constants can be declared **outside** of functions and procedures, within the program itself. Variables declared in this way are called **global variables**.
It may seem tempting to use global variables to share values between functions and procedures, but this is a **bad** idea. Global variables should be **avoided**, and for many problems are unnecessary.

The issue with global variables is that their values can be changed from *anywhere* within the program's code. This can make it difficult to locate the source of errors when global variables are used in larger programs. There are some cases where you will need to use global variables, but you should always have looked for several ways not to before accepting that you really do need them.

While global **variables** should be avoided, constants **should** be declared globally. The value of a constant cannot change, so the issues with global variables do not apply. Global constants actually *help* ensure that values remain consistent throughout the program. As a result, most constants generally end up being global.

![Programs can contain variables and constants](./images/program-var-const.png "Programs can contain variables and constants")

## In C/C++

:::tip[Syntax]
The syntax is the same for any [variable or constant](../../../1-starting-cpp/1-concepts/4-1-variable-constant), whether it is global or not.
<!-- TODO: make "constant" a link to the page in P2C1 when the concept has been added -->
All that changes is where the declaration is -- for the variable or constant to be global it must be declared **outside** a function or procedure.
:::

## Example

```cpp
#include "splashkit.h"

using std::to_string;

// Declare a global constant
const int INCREMENT_AMOUNT = 10;

// Declare (unnecessary) global variables
int x;
string message_text = "Hello world";

void my_procedure()
{
    write_line("In my procedure");

    message_text = "Hello Jupiter";
    write_line("Value of global variable x = " + to_string(x));

    x = x + INCREMENT_AMOUNT;
    write_line("Value of global variable message = " + message_text);
    
    write_line("Ending my procedure");
}

int main() 
{
    x = 9;
    write_line("Value of global variable x = " + to_string(x));
    write_line("Value of global variable message = " + message_text);
    
    x = 3;
    my_procedure();
    write_line("Value of global variable x = " + to_string(x));
    write_line("Value of global variable message = " + message_text);

    return 0;
}
```

Reading through the above code, look at **main**, and try to answer the following questions:

1. What does the program output to the terminal?
2. What is the value of `x` when the program completes?

<details>
  <summary role="button">Answers</summary>
  
1. Program output:

  ```bash
  Value of global variable x = 9
  Value of global variable message = Hello world
  In my procedure
  Value of global variable x = 3
  Value of global variable message = Hello Jupiter
  Ending my procedure
  Value of global variable x = 13
  Value of global variable message = Hello Jupiter
  ```

2. Value of `x` at program completion: 13.
</details>
</span>

Is this what you expected?
Would it be easy to understand how `x` was being changed in this program?
We would argue definitely not!
This is an issue that only gets worse as the size and complexity of a program increases.

:::note[Summary]

- Global variable is the **term** given to a variable that is declared within a program but outside any function or procedure.
- Global variables can be accessed by any instructions within a program.
- You should **avoid** using global variables. They can be accessed anywhere within a program, making it difficult to locate errors.
- [Constants](../../../../part-1-instructions/1-sequence-and-data/1-concepts/07-variable#constants) **should** be declared globally, and used to give meaning to values that are entered into your code.

:::
