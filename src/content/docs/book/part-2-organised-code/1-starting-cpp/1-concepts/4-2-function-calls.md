---
title: Function Calls
sidebar:
    label: " - Function Calls"
---

In C/C++, functions and procedures are the equivalent of [methods](../../../../part-1-instructions/1-sequence-and-data/1-concepts/02-method) in C#. They are functional units, things we can call on to achieve a task.

:::tip[In C/C++]

Function calls use the same syntax as we have been using for C# methods. To call a function, you use its name (identifier) followed by the required arguments within parenthesis.

![Function call syntax in C/C++](./images/function-call.png)

- A C/C++ function call is similar to a [method call](../02-method-call) in C#.
- You use the name of the [function](../../../2-organising-code/1-concepts/04-function-decl), its [identifier](../../../../part-1-instructions/2-communicating-syntax/1-concepts/04-identifier), to indicate which function is called.
- Following the function’s name is the list of arguments, these are the values that are being passed to the called function.
- The return type of the function determines where the function may be called.
- Procedures, `void` functions, can only be called as a statement.
- Other functions can be used in [expressions](../../../../part-1-instructions/2-communicating-syntax/1-concepts/03-expression).

:::

## Example

The example from the [method call](../../../part-1-instructions/1-sequence-and-data/1-concepts/03-method-call.mdx) page was relatively simple though you can also see example method calls in the other examples in this chapter.

The code below matches the previous example, notice other than changing the names there are no changes in logic. As we are using the same library, we can call the same function calls, in the same order.

```cpp
#include "splashkit.h"

int main()
{
    open_window("Random Color", 800, 600);
    clear_screen(random_color());
    refresh_screen();
    delay(1000 * rnd(10));
}
```

:::tip

Converting these examples between languages is really simple - the logic is the same, so you just need to adjust the small differences to make it work.

:::
