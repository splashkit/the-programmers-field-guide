---
title: "Variable"
---

While fixed values are useful, to make programs dynamic you need to be able to work with values that change.

A **variable** is a **building block** you can use to store a value that you can change and read as the program runs.  You can picture a variable as a **container** into which you store a value and retrieve it later.

<a id="FigureVariable"></a>

![Figure 5.17 Variables store a value that can be read and changed](./images/storing-and-using-data/variable-container.png "Variables store a value that can be read and changed")

<Caption><FigureText>Figure 5.17: </FigureText>Variables store a value that can be read and changed</Caption><br/>

## Variables - why, when, and how

A variable allows you to store a value that represents something in your code. You can change the value as that *thing* changes, and read the value when it is needed. When you have something you want to be able to change, you create a variable to store this. The type of the variable needs to match the kind of data you want to store.

You need to initialise the variable with a starting value, and you can then read and store new values within the variable as the program runs and the *thing* the variable represents changes.

This is where you start to build your digital reality. Within this reality, you can capture simple values and change these within your code.

## In C#

A variable declaration creates a variable in your code. [Figure 5.18](#FigureVariableSyntax) shows the syntax for variable declarations in C#.

:::tip[Syntax]

- This is the C# Syntax for creating a variable.
- In C#, the variable declaration starts with the [Type](../06-type) name indicating the kind of data that will be stored.
- Following the type is a list of the identifiers for the variables you are creating.
- You can create one or more variables in a single variable declaration, but all of these variables will have the same type.
- Each variable can be assigned a value when it is declared.
- The **const** modifier can be added to the start of a variable declaration to create a constant.

<a id="FigureVariableSyntax"></a>

![Figure 5.18 The syntax for C# variable declarations.](./images/variable-declaration.png "The syntax for C# variable declarations")
<div class="caption"><span class="caption-figure-nbr">Figure 5.18: </span>The syntax for C# variable declarations</div><br/>

:::

## Examples

### Basic Example

In this program, we want to capture the user's name and greet them using it.

```csharp
using static System.Console;

string name;

WriteLine("Welcome to The Greeting");
WriteLine();
WriteLine("What is your name?")
Write("name: ");
name = Console.ReadLine();

WriteLine();
WriteLine("Hello " + name);
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.14: </span>Example program with varible declaration</div>

### SplashKit Example

The following program captures a radius for a circle and uses that to draw to the screen. To achieve this we need two variables, `line` and `radius`. We use `ReadLine` to read a `string` from the user, and `ConvertToDouble` to convert the text read into a `double` value. This value is stored in the `radius` variable, which can then be used in the call to `FillRadius`.

```csharp
using static SplashKitSDK.SplashKit;

string line;
double radius;

WriteLine("Welcome to Circle Drawer!");
WriteLine();
WriteLine("Enter the radius of the circle to draw.");
WriteLine();
Write("Circle radius: ");
line = ReadLine();

// Convert the text entered to a double
radius = ConvertToDouble(line);

OpenWindow("A House", 800, 600);
ClearScreen(ColorWhite());
FillCircle(ColorBlue(), 400, 300, radius);
RefreshScreen();
Delay(1000);

radius = radius * 2;

ClearScreen(ColorWhite());
FillCircle(ColorBlue(), 400, 300, radius);
RefreshScreen();
Delay(1000);
```



## Activities

[TODO]


:::note[Summary]

- A Variable is an **artefact**, you can create variables to store values in your programs.
- You can think of a Variable like a "box with an item in it". The Variable is the box, its value is the item within it.
- Each Variable has a ...
  - **Name** that can be used to refer to it.
  - **Value** that it is storing.
  - **Type** that determines the size of the Variable and how its value is interpreted.
- You use an [Assignment Statement](../19-assignment-statement) to store a value into the Variable.
- You can **read** the value from Variable in Expressions.
- The Variable is **different** to its value:
  - The Variable is a container into which a value can be stored.
  - You can read the value from the Variable.
  - The Variable **is not** the value, it is a container into which the value is stored

:::