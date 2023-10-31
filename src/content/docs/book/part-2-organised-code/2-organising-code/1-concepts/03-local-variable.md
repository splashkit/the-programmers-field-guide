---
title: "Local Variable"
---

Functions and procedures create new spaces within our code. These blocks of code are isolated from each other, creating separate spaces where things can be created. Anything created within a function or procedure only exists while that procedure is running, much like we saw with the idea of [scope](../../../../part-1-instructions/3-control-flow/1-concepts/02-1-scope), where variables declared within compound statements.

These are now several places where [variables](../../../../part-1-instructions/1-sequence-and-data/1-concepts/07-variable) can be declared in your code. Variables declared within a [function or procedure](../00-functions-and-procedures) are called **local variables**. Most of the variables in your code will be local variables.

<a id="FigureLocalVariable"></a>

![Figure 5.14 Variables declared within a Procedure are Local Variables](./images/storing-and-using-data/variable-local.png "Variables declared within a Procedure are Local Variables")

<div class="caption"><span class="caption-figure-nbr">Figure 5.14: </span> Variables declared within a Procedure are Local Variables</div><br/>

As shown above, you can picture each procedure as containing a number of local variables. These variables are accessible within the procedure's instructions. The procedure's block will define the [scope](../../../../part-1-instructions/3-control-flow/1-concepts/02-1-scope) where these variables are accessible.

## Local Variables - Why, When, How

All the variables we have crated so far would be considered to be local variables. So whenever you need a function or procedure to *remember* something, you create a local variable to store that value. These variables exist only during the execution of the procedure, which is great as that means we never need to think about these variables when we are working elsewhere.

:::tip[Isolation]

One of the key things that makes decomposition work, is the ability to tackle each part of the code in **isolation**. Local variables allow this. They are only accessible withing the function or procedure where they are declared, and they do not exist when that code is not running.

:::

## In C/C++

:::tip[Syntax]

In C/C++ you can declare variables within a statement. Any variable you declare within the statements of a procedure are local variables. You should picture these as existing entirely within the procedure.

:::

## Examples

The following code creates a local variable called `name`. This variable is declared within the `say_hello` procedure - making it a local variable. Picture the `say_hello` procedure as containing the name variable, making the variable only accessible from the instructions within this procedure.

```cpp
#include "splashkit.h"

void say_hello_to(string name)
{
  WriteLine("Hello " + name);
}

int main()
{
  string user_name, friend_name;

  write("Enter your name: ");
  user_name = read_line();

  write("Enter a friend's name: ");
  friend_name = read_line();

  say_hello_to(user_name);
  say_hello_to(friend_name);
  say_hello_to("Wilma");
  say_hello_to("Fred");
}
```

This code creates two local variables within the main function: one for the user's name, and one for a friend's name. These are only accessible within the main function. Inside the `say_hello_to` procedure you should be able to focus just on that code, so you don't need to think about the two variables within main - they do not need to exist for `say_hello_to` to work. Instead, you can just focus on what you want `say_hello_to` to do and the steps that are needed to achieve that.

:::note[Summary]

- Local variable is the **term** given to a variable that is declared within a procedure.
- Variables that are declared within [functions or procedures](../00-functions-and-procedures) are called **local variables**.
- Local variables are located within the function or procedure where they are declared.
- They can only be accessed by the instructions in the function or procedure where they are declared.
- It is **good practice** to use local variables to store values. These variables can only be accessed from the instructions **within** the procedure, this makes it easy to understand how the variable is being used and where it is being changed.
- Space is allocated for each local variables when the [function or procedure is called](../21-function-call).
- When the function or procedure ends, its local variables are destroyed.
:::

**TODO: slider**
