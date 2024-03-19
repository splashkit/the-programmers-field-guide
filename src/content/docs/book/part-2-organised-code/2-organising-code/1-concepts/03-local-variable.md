---
title: "Local Variable"
---

Functions and procedures create new spaces within our code. These blocks of code are isolated from each other. This means that anything created within a function or procedure only exists while that function or procedure is running, much like we saw with the idea of [scope](../../../../part-1-instructions/3-control-flow/1-concepts/02-1-scope) within compound statements.

These are now several places where [variables](../../../../part-1-instructions/1-sequence-and-data/1-concepts/07-variable) can be declared in your code. Variables declared within a function or procedure are called **local variables**, because they are **local** to function or procedure they are declared in. Moving forward, most of the variables in your code will be local variables.

![Variables declared within a procedure are local variables](./images/local-var-concepts.png "Variables declared within a procedure are Local Variables")

As shown above, you can picture each procedure as containing a number of local variables. These variables are accessible within the procedure's instructions. That is, the procedure's block defines the [scope](../../../../part-1-instructions/3-control-flow/1-concepts/02-1-scope) where these variables are accessible.
The same applies to functions.

## Local Variables -- when, why, and how

Whenever you need a function or procedure to *remember* something, you create a local variable to store that value. These variables exist only during the execution of the procedure or function, which is great as that means we never need to think about these variables when we are working elsewhere.

:::tip[Isolation]
One of the key things that makes decomposition work is the ability to tackle each part of the code in **isolation**. Local variables are key to this -- they are only accessible within the function or procedure where they are declared, and they literally do not exist when that code is not running.
:::

## In C/C++

:::tip[Syntax]
The syntax for a variable declaration in C/C++ was covered [earlier](../../../1-starting-cpp/1-concepts/4-1-variable-constant), but we will include it again here for convenience.

![The syntax for a variable declaration in C/C++](./images/variable-decl.png)
:::

The syntax for declaring a local variable is the same as declaring any other kind of variable.
The only difference is conceptual -- any variable you declare within the statements of a function or procedure or function are local variables, and should be pictured as existing entirely within the function or procedure.

## Examples

The following code creates a local variable called `name`. This variable is declared within the `say_hello` procedure, making it a local variable. Picture the `say_hello` procedure as *containing* the `name` variable, making the variable only accessible from the instructions within this procedure.

```cpp
#include "splashkit.h"

void say_hello()
{
    string name;
    name = read_line();
    write_line("Hello " + name);
}

int main()
{
    write_line("Calling procedures is fun");

    write("Enter your name: ");
    say_hello();

    write("Enter a friend's name: ");
    say_hello();

    // write("Hello " + name) would break our code, as the name variable 
    //                        is out of scope! It only exists in say_hello.
}
```

:::note[Summary]

- Local variable is the **term** given to a variable that is declared within a function procedure.
- Local variables are limited in **scope** to the function or procedure where they are declared.
- It is good practice to use local variables to store values. This makes it easy to understand how the variable is being used and where it is being changed.
- Space is allocated on the **stack** for a function or procedure's local variables when the function or procedure is called.
- When a function or procedure ends, its local variables are destroyed.

:::

**TODO: slider**
