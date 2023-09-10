---
title: "Program"
---

In most software projects the top-level **building block** you are aiming to create is a **program**. A program is something the user can **run**.

Each program consists of the **list of instructions** the computer will perform when that program is run. When you create a program, think about the goal of that program and the steps you need the computer to perform to achieve that goal.

[Figure 5.1](#FigureProgram) shows a sketch of the **program** concept. It shows the program consisting of instructions (written in the **source code**). Key aspects of the program are the starting instruction and the libraries that the program uses.

<a id="FigureProgram" class="linkPoint"></a>

![Figure 5.1 A program contains instructions that command the computer to perform actions](./images/program-concept.png "A program contains instructions that command the computer to perform ")
<div class="caption"><span class="caption-figure-nbr">Figure 5.1: </span> A program contains instructions that command the computer to perform </div><br/>

## Program - why, when, and how

You will need to create a program to be able to run and share each digital reality/piece of software you create. One larger software system may have several programs, but each program will create its own digital reality when it is executed.

Programs are created at the top level - so there it is really just having a file to put the source code in and the project files that `dotnet` creates around these.

When you think about the program, you are thinking **big picture**. What do I want this program to do and, at this stage, what are the steps to achieve this?

The program will **contain** other building blocks like [variables](./12-variable.md) you need to store values. See it as the setting that contains your instructions and data.

Going forward, as you pick up more tools these will expand what you create within your program. For now, it is simply a list of instructions that are followed when the program runs.

## In C#

:::tip[Syntax]
In a C# project, you have one source code file that will contain the program's main code. The following illustration shows the structure of the syntax for this program.

<a id="FigureProgramSyntax"></a>

![Figure 5.2 The syntax for a C# program.](./images/program.png "The syntax for a C# program")
<div class="caption"><span class="caption-figure-nbr">Figure 5.2: </span>The syntax for a C# program</div><br/>

:::

Each program starts with an optional list of **using directives**. These allow you to tell the compiler where you want it to look for [methods](./03-method.md) you are calling. Following this list, you provide a list of instructions that each end with a semicolon (`;`).

:::tip[Directive?]

A directive is an instruction for the **compiler**, rather than an instruction that gets added to the program created by the compiler. You use these to let the compiler know something about the code you are writing.

For example, the **using directive** lets you tell the compiler of parts of the library you want to access in your code. This allows you to access the [methods](./03-method.md) from this part of the library in your code.

:::

## Examples

[Listing 5.x](#ListingHelloWorld) shows a basic Hello World C# Program. You should be able to match this up with the syntax defined in [Figure 5.x](#FigureProgramSyntax). This program uses the `System.Console` code to access the `WriteLine` method, which can be called to output a message to stdout. The important thing to see here is that **all** of this code is the program - each of the lines is a part of the program.

<a id="ListingHelloWorld"></a>

```csharp
using static System.Console;

WriteLine("Hello World!");
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>C# Hello World Program</div>

The following program uses SplashKit to open a window and draw some shapes to it. Once again, the important thing is that the program is **all** of these instructions. They all come together to create the program and make it what it is.

<a id="ListingDrawShapes"></a>

```csharp
using static SplashKitSDK.SplashKit;

OpenWindow("A House", 800, 600);
ClearScreen(ColorWhite());

// Draw a house shape
FillEllipse(ColorBrightGreen(), 0, 400, 800, 400);
FillRectangle(ColorGray(), 300, 300, 200, 200);
FillTriangle(ColorRed(), 250, 300, 400, 150, 550, 300);

RefreshScreen();
Delay(5000);
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>SplashKit House Drawing Code</div>

Data is also key within every program. Can you spot data in the examples above?

We use data to capture the information we need the program to work with. The data in the above examples are all **fixed** or [literal](../06-literal) values. That means these values can not change when the program runs. They are fixed, being literally the value that appears in the code.

:::note[Summary]

- You can create something the user can run from the program's **source code**.
- Most importantly, you can't really *see* the program in the code. The program is **all** of this code together. It is the container that holds the instructions that will run when it is executed.
- The program has an **entry point** that indicates where the program’s instructions start - in this case the first instruction.
- Your program can use code from [libraries](../08-library) giving it access to building blocks others have created.
- Data is also central to the program.
:::
