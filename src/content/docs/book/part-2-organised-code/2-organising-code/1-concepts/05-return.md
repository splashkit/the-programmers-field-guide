---
title: Return
---


The return statement, ends the current [Function](#) or [Method](../../../1-sequence-and-data/1-concepts/02-method). This is useful for skipping the rest of the processing of the Function or Procedure, exiting it early and returning to the calling code.

<a id="FigureExit"></a>

![Figure x.y: Exit ends the current Function or Procedure](./images/statement-exit.png "Exit ends the current Function or Procedure")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>Exit ends the current Function or Procedure</div><br/>

:::note

- Exit is an **action**, allowing you to jump out of the current [Function](#) or [Method](../../../1-sequence-and-data/1-concepts/02-method), and return to the calling code.
- The Exit should be coded within a [Branching](../02-branching) statement that checks if the Function or Method should end.

:::

:::note[C#]

C’s version of the exit statement is the [Return Statement](#). The return statement also provides the value that will be returned when exiting from a Function. As this sets the value ♢ to be returned you must have a return statement as the last action within a Function.

:::



- The Return Statement is used to end a [Function](../20-function), or [Method](../03-method), and to return a value.
- Methods can end completing all of their instructions.
- Functions that return a value must have a `return` to indicate the value to be returned by the caller.
- The [Expression](../23-expression) in the Return Statement is optional so that you can use the statement to end a Method.
- When the Return Statement is executed the current Function or Method ends, and the value of the Expression is returned to the Function Call.

## In C#

:::tip[Syntax]

- [Figure 5.x](#FigureReturnStatementSyntax) shows code for a function declaration in C#.

<a id="FigureReturnStatementSyntax"></a>

![Figure 5.x C# Syntax for a return statement](./images/ReturnStatementSyntax.png "C# Syntax for a return statement")
<div class="caption"><span class="caption-figure-nbr">Figure 5.x: </span>C# Syntax for a return statement</div><br/>

:::

## Examples

- [Listing 5.x](#ListingReturnStatement) illustrates the point that `return` ends the current function, with only the first `printf` call being run in the `test_return()` Function

<a id="ListingReturnStatement"></a>

```csharp
/* Program: test-return.cs */
#include <stdio.h>

int test_return() {
    printf("test-return started\n");
    return 3;
    printf("Cannot be run as code returned above!");
}

int main() {
  printf("Calling test_return - the value %d is returned\n", test_return());
  return 0;
}
```
<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Example illustrating return in action</div>


## Activities


:::note[Summary] 

- The Return Statement is used to end a Function, or Method, and to return a value to the caller

:::