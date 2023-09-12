---
title: "Global Variable"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept

Variables and Constants can be declared within a [Program](../00-program). [Variables](../12-variable) declared in this way are called Global Variables. It seems tempting to use Global Variables to share values between procedures, but this is a bad idea. Global Variables should be avoided, and for many programs are unnecessary. The issue with Global Variables is that their values can be changed from anywhere within the program's code. This can make it difficult to locate the source of errors when globals are used.

While Global Variables should be avoided, Constants should be declared globally. As these values can not change, the issues with Global Variables do not affect Constants.

<a id="FigureGlobalVariable"></a>

![Figure 5.15 Variables declared within a Program are Global Variables](./images/storing-and-using-data/variable-global.png "Variables declared within a Program are Global Variables")

<div class="caption"><span class="caption-figure-nbr">Figure 5.15: </span> Variables declared within a Program are Global Variables</div><br/>

## In C#

:::tip[Syntax]

- The syntax in [Figure 5.x](#FigureGlobalVariableSyntax) allows you to declare Global Variables and Constants

<a id="FigureGlobalVariableSyntax"></a>

![Figure 5.x The syntax related to the declaration of global variables within a C# program.](./images/storing-and-using-data/GlobalVariableSyntax.png "The syntax related to the declaration of global variables within a C# program")
<div class="caption"><span class="caption-figure-nbr">Figure 5.x: </span>The syntax related to the declaration of global variables within a C# program</div><br/>

:::


## Examples

- See [Variables Listing 5.x](../12-variable#ListingVariableDeclaration) for an example of declaring Global Variable and Constants.
- In Variables Listing 5.x ...
  - `global_float` and `global_int` are Global Variables. These can be accessed in both the `test` method and `main`
  - `PI` is a [Global Constant](../13-constant), with the value 3.1415. This can be read in both the `test` procedure and `main`
- Global variables should be avoided.



## Activities


<span class="review">An example of the declaration of global variables is also shown in [Listing 5.x](#ListingGlobalVariables) below. Line numbers are for reference only</span>


<a id="ListingGlobalVariables"></a>

```csharp
int x = 9;
String message = "Hello world";

main() {
  printf("Value of global variable x = %d\n", x);
  printf("Value of global variable message = %s\n", x);
  x = 3;
  myMethod();
}

myMethod() {
  // Global variables declared above are visible in my methods and functions
  message = "Hello Jupiter";
  printf("Value of global variable x = %d\n", x);
  x = x+1;
  printf("Value of global variable message = %s\n", x);
}
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Example declaration of global variables</div>

<span class="review">
- What does the program shown in [Listing 5.x](#ListingGlobalVariables) output to the terminal?<br/>
- What is the value of x when the program completes?
</span>
<br/>
<details class="review">
  <summary role="button">Answer</summary>
  
- Program output
  ```bash
  Value of global variable x = 9
  Value of global variable message = Hello world

  Value of global variable x = 3
  Value of global variable message = Hello Jupiter

  ```
- value of x at program completion: 4;
</details>
</span>
<br>


:::note[Summary]

- Global Variable is the **term** given to a Variable that is declared within the program.
- [Variables](../12-variable)  that are declared within a [Program](../00-program) are called **Global Variables**.
- Global Variables can be accessed by the program’s instructions, and by the instructions in any of the Procedures.
- You should **avoid** using Global Variables. These variables can be accessed anywhere within the Program, making it difficult to locate errors.
- Using Global Variables introduces hidden dependencies between [Methods](../03-method), breaking the isolated nature of the Procedures.
- [Constants](../13-constant) **should** be declared globally, and used to give meaning to values entered into your code.

:::