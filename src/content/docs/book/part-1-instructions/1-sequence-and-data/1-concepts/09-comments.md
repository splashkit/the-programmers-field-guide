---
title: "Comments"
---

A program's source code contains instructions for the computer to perform. However, this code is written and maintained by people. It is often useful to be able to place comments in the code to help someone reading that code understand how it works or what it is trying to achieve. This text is not something to be translated into machine code, it is for us humans.

Programming languages support the ability to embed *comments* into the source code that are then ignored by the compiler.

## Comments - why, when, and how

Comments do not change how your program runs, so why bother? Getting things working is great, but you want to capture your thought process as you step through your code. Adding comments lets you put these notes in the code as you go.

Some good practices include adding comments outlining the steps within your code. This becomes more important as your programs get bigger and more complex.

## In C#

As stated, comments allow you to embed documentation and explanatory text within your program’s code. The comments are skipped by the compiler, so they do not affect the program’s machine code. You write comments to help yourself and other people understand what you intend the program to do, and any thoughts you want to record along with the code.

:::tip[Syntax]

<a href="#FigureCommentsSyntax">Figure 5.13</a> shows the syntax for comments in C#. There are two types of comments, single line comments, and block comments that span multiple lines.

- **Block comments** begin with `/*` and end with `*/` and contain any text in between these, including new lines.
- **Single line comment** begin with `//` and end with a new line.

<a id="FigureCommentsSyntax"></a>

![Figure 5.13 The syntax of comments.](./images/program-creation/CommentsSyntax.png "The syntax of comments")
<div class="caption"><span class="caption-figure-nbr">Figure 5.13: </span>The syntax of comments</div><br/>

:::

## Example

Example comments are shown within a code block in <a href="#ListingExampleComments">Listing 5.11</a> below</div>

<a id="ListingExampleComments"></a>

```csharp
/* 
 * This program calculates the area of a circle based on the radius. 
 * Variables:
 *  - the radius as a double
 *  - the area as a double
 *  - a line string to read text from the user
 */

using static System.Convert;
using static System.Console;

// Setup constants and variables
const double PI = 3.1415;
string line;
double radius, area;

// Get data from the user
Write("Radius: ");
line = ReadLine();
radius = ToDouble(line);

// Calculate area
area = PI * radius * radius;

// Output area
WriteLine(area);
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.11: </span>Example C# comments</div>


## Activities

1. Is the following a valid comment in C#? Why/why not?

```csharp
/* 
  /* my comment */ 
*/
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.12: </span>Sample code</div>

:::note[Summary]

- It is good practice to place a comment at the top of your code explaining what the program does.
- Comments should be included to help other people read your code. You will also find these comments useful when you return to your code after a long break.
- Make your comments meaningful by trying to capture your intentions and ideas
- Comments have no impact on the output produced by the compiler.

:::
