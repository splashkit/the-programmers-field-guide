---
title: "Method Call"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---


## Concept

A method call is a kind of [Statement](../1-statement) that instructs the computer to run the code in a [Method](../3-method) . This statement uses the method's name to identify the method that must be run. If the method called requires some data, this data is *passed* to the method as part of the method call. <span class="review">The data passed is contained in a [Variable](../variable) called a parameter (or parameters if multiple bits of data need to be passed).</span>

[Figure 5.3](#FigureMethodCall) shows the concepts related to the method call.

<a id="FigureMethodCall"></a>

![Figure 5.3 A method calls runs a method, passing in values for the method to use](./images/program-creation/MethodCall.png "A method calls runs a method, passing in values for the method to use")
<div class="caption"><span class="caption-figure-nbr">Figure 5.3: </span>A method calls runs a method, passing in values for the method to use</div><br/>


## In C#

A method call allows you to run the code in a [Method](../3-method), getting its instructions to run before control returns back to the point where the method was called.


:::tip[Syntax]
[Figure 5.4](#FigureMethodCallSyntax) shows the syntax of a method call.


- A method call consists of a method name followed by an opening brace, followed by zero or more arguments (delimited by a comma character if present), followed by a closing brace.
- An argument contains an expresion.
- A procedure name consists of an identifier.

<a id="FigureMethodCallSyntax"></a>

![Figure 5.4 The syntax of a method call](./images/program-creation/MethodCallSyntax.png "The syntax of a method call")
<div class="caption"><span class="caption-figure-nbr">Figure 5.4: </span>The syntax of a method call</div><br/>
:::


## Examples 

The code in [Listing 5.6](#ListingMethodCalls) contains a C# program with four method calls. Each method call runs the `write_line` method to output text to the Terminal.

The method call starts with the method’s name (its [Identifier](../identifier)) that indicates the method to be called: `write_line`.

Following the identifier is a list of values within parenthesis (called parameters), these are the values (coded as [Expressions](../expressions)) that are passed to the method for it to use.

Remember that C# is case sensitive so using `Write_Line` instead of `write_line` will not work.

<a id="ListingMethodCalls"></a>
```csharp
int main() {
    write_line("Count back from 2...");
    write_line(2);
    write_line(1);
    write_line(0);
}
```
<div class="caption"><span class="caption-figure-nbr">Listing 5.6: </span>Method calls within a C# program</div>

:::note[Summary]

- A method call is an **action** in the form of a statement, which commands the computer to run the code in a method: You can code a method anywhere you can code a statement.
- The [Identifier](../identifier) indicates the [Method](../3-method) to run.
- Data values passed to the method (called parameters) are coded using [Expressions](../expression).
- When the method’s task is complete the program continues with the next [Statement](../1-statement).

:::

## Further reading

- [C# Programming Guide - Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)