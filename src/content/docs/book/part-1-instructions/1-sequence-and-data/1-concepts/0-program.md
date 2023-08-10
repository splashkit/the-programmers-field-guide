---
title: "Program"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept

In most software projects the top level *artefact* you are aiming to create is a **program**. A program is something you can create by writing **source code** in a language like c#, and getting another piece of software, called the **compiler**, to convert your source code into **executable code** (1s and 0s). Executable code is the code that can be run by your computer. The name of the program determines the name of the executable code. For e.g.:

myprogram.cs (your source code) -> compiler -> myprogram.exe (executable code).

Your program consists of a **list of instructions** the computer will perform when that program is run on the computer. When you create a program, you should be thinking about the tasks you want the program to achieve, and the steps you must get the computer to perform when the program is run. These then become the instruction within the source code of program, with each instruction being a [Statement](../1-statement) of what you want performed.

[Figure 5.1](#FigureProgram) below shows a **software program** consisting of instructions (the **source code**) that gets compiled into an **executable program** that is run.

<a id="FigureProgram" class="linkPoint"></a>

![Figure 5.1 A program contains instructions that command the computer to perform actions](../images/program-creation/BasicProgramConcept.png "A program contains instructions that command the computer to perform ")
<div class="caption"><span class="caption-figure-nbr">Figure 5.1: </span> A program contains instructions that command the computer to perform </div><br/>


## In C#

Let's recreate the classic "Hello World" program in C\#, which simply outputs the string "Hello, world!" to the screen. Don't worry too much about the details at present, we'll look more closely at the structure of a program later.

But as you can see in [Listing 5.1](#ListingProgram "The sample 'HellowWorldProgram' C# program"), to create a program in C#, at minimum you need namespace, and a class that contains a Main method (which defines the start-point of your program). The command "Console.WriteLine("Hello, world!") uses the System library to output the string "Hello, world!" to the screen.

<a id="ListingProgram" class="linkPoint"></a>

```csharp
using System;

namespace HelloWorld {
    class HellowWorldProgram {
        static void Main(string[] args) {
            Console.WriteLine("Hello, world!");
        }
    }
}
```
<div class="caption"><span class="caption-figure-nbr">Listing 5.1: </span> The sample "HellowWorldProgram" C# program </div>

## Activities
### Compiling and running your Hello World program in C#

These instructions can be coded into a C# source code file, compiled and run in "Visual Studio Code" (VSC). To do this follow the instructions here:

- [Tutorial: Create a .NET console application using Visual Studio Code](https://learn.microsoft.com/en-us/dotnet/core/tutorials/with-visual-studio-code?pivots=dotnet-7-0)
  - The tutorial also contains an extension exercise which you can try, to modify the program to ask the user to input their name and then output their name along with the date and time

Your "HelloWorld" output should look something like this:

```bash
localhost:HelloWorld vsc-user$ dotnet run
Hello, World!
localhost:HelloWorld vsc-user$
```
<div class="caption"><span class="caption-figure-nbr">Listing 5.2: </span>Output from the "HellowWorldProgram" C# program</div>

## Summary

:::note

- You use a compiler to convert the program’s **source code** into an **executable** file that the user can run (execute).
- The program has an **entry point** that indicates where the program’s instructions start (the Main() method in C#).
- Your program can use code from a [Library](#library) or number of libraries.
- In programming terminology, an instruction is called a [Statement](#statement).

:::