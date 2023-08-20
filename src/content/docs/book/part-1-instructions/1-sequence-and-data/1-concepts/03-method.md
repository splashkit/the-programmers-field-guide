---
title: "Method"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept

The computer is unintelligent, so performing anything meaningful requires a large number of instructions. Coding all of these directly in the program would be slow and time consuming. To avoid this programming languages offer the capability to group the instructions to perform a task into a **method**.

A method is a list of instructions that gets the computer to perform a specific task. When a method is called it gets control of the computer and instructs it to perform the steps needed. Often these steps require data, so the method may need to be passed data when it is called. When the method finishes its task, control returns back to the code that called the method.

[Figure 5.5](#FigureMethod) shows the concepts related to methods.

<a id="FigureMethod"></a>

![Figure 5.5 A method contains instructions to perform a task, and may need to be passed data in order to do this](./images/program-creation/Method.png "A method calls runs a method, passing in values for the method to use")
<div class="caption"><span class="caption-figure-nbr">Figure 5.5: </span>A method contains instructions to perform a task, and may need to be passed data in order to do this</div><br/>

## In C##

<div class="review">You'll get to see how to define a method in [Method Declaraion](../10-method-declaration)</div>d

## Activities
[TODO]

:::note[Summary]

- A method is an **artefact**, something that can be created in code.
- A method is a programming artefact that can be called to perform a certain task.
- The name of a method is an [Identifier](../07-identifier).
- Each [Library](../08-library) will contain a number of methods to perform common tasks.
- The standard library will include methods to write values to the Terminal.
- The SwinGame libraries contain methods that can draw images on the screen,
play sounds, and perform other tasks needed to create small games.
Methods are also known as **subroutines**, **sub-programs**, **methods** or **sub-methods**.

:::

## Further Reading

- [C# Programming Guide - Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)