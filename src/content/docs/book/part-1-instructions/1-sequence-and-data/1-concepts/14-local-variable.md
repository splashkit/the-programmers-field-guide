---
title: "Local Variable"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept

Variables can be declared at a number of different places in your code. [Variables](../12-variable) that are declared within [Methods](../03-method) are called **Local Variables**. Most of the variables in your code will be Local Variables.

<a id="FigureLocalVariable"></a>

![Figure 5.14 Variables declared within a Procedure are Local Variables](./images/storing-and-using-data/variable-local.png "Variables declared within a Procedure are Local Variables")

<div class="caption"><span class="caption-figure-nbr">Figure 5.14: </span> Variables declared within a Procedure are Local Variables</div><br/>

## In C#

:::tip[Syntax]

- [Figure 5.x](#FigureLocallVariableSyntax) below is the syntax for declaring Local Variables in a [Method](../03-method) or [Function](../20-function).
- The Local Variables must be declared before the statements within the Function and Method’s block.
- In C you cannot declare variables after the first statement in the block.
- In this text we will use a common C convention of having all *Local Variables* in **lower case**, with underscores (`_`) used to separate words. So the *My Name* local variable becomes `my_name`


<a id="FigureLocalVariableSyntax"></a>

![Figure 5.x The syntax related to the declaration of local variables within a C# functions and methods.](./images/storing-and-using-data/LocalVariableSyntax.png "The syntax related to the declaration of local variables within a C# functions and methods")
<div class="caption"><span class="caption-figure-nbr">Figure 5.x: </span>The syntax related to the declaration of local variables within a C# functions and methods</div><br/>

:::


## Examples

- See [Variables Listing 5.x](../12-variable#ListingVariableDeclaration) for an example of declaring Local Variables.
- In Listing 5.x:
  - The `test` procedure has two local variables: `my_local` and `another_local`
  - The `main` function has one local variable called `local_int`

## Activities

[TODO]

:::note[Summary]

- Local Variable is the **term** given to a Variable that is declared within a Procedure.
- Variables that are declared within [Methods](../03-method) are called **Local Variables**.
- Local Variables are located within the [Method](../03-method) they are declared in.
- They can only be accessed by instructions in the [Method](../03-method).
- It is **good practice** to use Local Variables to store values. These variables can only be accessed from the instructions **within** the Procedure, this makes it easier to understand how the variable is being used and where it is being changed.
- Space is allocated for the Local Variables when the [Method is called](../02-method-call).
- When the call ends, the Local Variables for that call are destroyed

:::