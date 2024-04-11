---
title: "Procedures"
---

A procedure is a group of instructions that **do something**. In your program, you can define your own procedures, allowing you to divide a program's tasks into separate steps.

![Annotated sample code showing a procedure declaration](./images/procedure-pano.png "Procedures")

:::note[A procedure:]

- Is a **building block** that you can create and use in your code.
- Contains code to perform a certain task. When you want the task performed, you call the procedure.
- Has a name that is the identifier used to call the procedure.
- May have a number of parameters that allow you to pass values to it.
- Will have a **side effect** when it runs. This means that a procedure changes something when it is executed.
- Has instructions which are are **isolated** from the other code in your program.
- Must be coded within the program - not within other functions or procedures.
- Starts with `void`, then the *name* of the procedure, and a list of parameters in parentheses. This is followed by the block of code to run when the procedure is called.

:::

## Example

The following shows an example of a `say_hello_to` procedure, which is called from the main function.

```cpp
#include "splashkit.h"

/**
* Output a message to say hello to a give user name.
*
* @param name   The name to say hello to
*/
void say_hello_to(string name)
{
    write_line("Hello " + name);
}

int main()
{
    say_hello_to("Bob");
    say_hello_to("Alexis");
    // etc...

    return 0;
}
```
