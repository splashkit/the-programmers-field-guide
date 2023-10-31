---
title: "Functions"
---

Functions are used to calculate values. Where each function is a named group of instructions that calculates and returns a value.


<a id="FigureFunction"></a>

![Figure 5.20 A Function is just like a Method, except it calculates and returns a value](./images/storing-and-using-data/function.png "A Function is just like a Method, except it calculates and returns a value")

<div class="caption"><span class="caption-figure-nbr">Figure 5.20: </span>A Function is just like a Method, except it calculates and returns a value</div> <br/>

## In C#

:::tip[Syntax]

- [Figure 5.x](#FigureFunctionSyntax) shows the code for a function in C#.
- [Figure 5.x](#FigureMethodSyntax) shows the code for a method in C#.

C does not have a strong separation of Functions and Methods. Instead, in C all Methods are Functions that return a special `void` Type. This means that the standard C Syntax does not include a separate definition for Method declarations. Even though C does not have direct syntax for Methods, the concept is still very important.

- In C Function and [Method](../03-method) declarations are very similar.
- In C, a Function’s declaration starts with the [Type](../06-type) of data the Function will return.
- This if followed by the name of the Function, and its Parameters. In the same way as is done in the [C Method Declaration (with Parameters)](../16-parameter#FigureParameterSyntax).
- The body of the function is a `block` , in the same was as a C Method Declaration (with Parameters).
- See [C Function Call](../21-function-call) for the syntax needed to call your functions.
- See the [Return Statement](../22-return-statement) to see how to return a result from a function in C.
- `void` is a type, so in C functions and methods are identical. See C Method Declaration (as Function) to see how C handles methods.
- The entry point of the program is the `main` function. It returns a number to the Operating System that can be used to indicate the success or failure of the program. You can read the value returned from the last program to execute in the Terminal using `echo $?`.
- In C all Methods are Functions that return a `void` type.
- The `void` type indicates an empty type. This indicates that Procedures return no data to the caller.



<a id="FigureFunctionSyntax"></a>

![Figure 5.x C# Syntax for a function](./images/storing-and-using-data/FunctionSyntax.png "C# Syntax for a function")
<div class="caption"><span class="caption-figure-nbr">Figure 5.x: </span>C# Syntax for a function</div><br/>

<a id="FigureMethodSyntax"></a>

![Figure 5.x C# Syntax for a method (as a function)](./images/storing-and-using-data/MethodSyntax.png "C# Syntax for a method (as a function)")
<div class="caption"><span class="caption-figure-nbr">Figure 5.x: </span>C# Syntax for a method (as a function)</div><br/>

:::

## Examples

- [Listing 5.x](#ListingFunctionDeclaration) below shows an example function declaration of a square function.

<a id="ListingFunctionDeclaration"></a>

```csharp
/* Program: test-square.cs */
#include <stdio.h>

int square(int val) {
  return val * val;
}

int main() {
  printf("5 squared is %d\n", square(5));
  return 0;
}

```
<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Example function declaration of a square function</div>


## Activities

[TODO]

:::note[Summary]

- A Function is an **Artefact**. Something that you can create and use in your program’s code.
- A Function is just like a [Method](../03-method) in that it ...
- Has a name that is used to call it.
- Performs instructions when it is executed.
- Can accept [parameters](../16-parameter) to allow the caller to pass in values. – Is allowed to create its own [local variables](../14-local-variable).
- Unlike a Method, a Function...
- Should **not** have any side effects. – Calculates and returns a value.
- Is called as part of an Expression.
  - You use Functions to calculate values.
  - You use a [Function Call](../21-function-call) to call a function as part of an [Expression](../23-expression).

:::