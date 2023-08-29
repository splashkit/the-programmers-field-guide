---
title: "Comments"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Comments

A program's source code contains instructions for the actions the computer must perform. However, this code is written and maintained by people. It is often useful to be able to place comments in the code to help someone reading that code understand how the code works or what it is trying to achieve. This text is not something that <span class="review">is</span> translated into machine code.

Programming languages support the ability for programmers to embed *comments* into the source code that are ignored by the compiler.

## In C#
As stated, comments allow you to embed documentation and explanatory text within your program’s code. The comments are skipped by the compiler, so they have no affect on the program’s machine code. You write comments to help yourself and other people understand what you intend the program to do, and any thoughts you want to record along with the code.


:::tip[Syntax]

<a href="#FigureCommentsSyntax">Figure 5.13</a> shows the syntax for comments in C#. <span class="review">As you can see there are two types of comments in C#: single line comments that span a single line, and block comments that span multiple lines</span>

- In standard C# the first style of comments must be used, `/* Comment */`
- Most modern C# compilers also allow single line comments using `// Comment`
- Standard C# comments can span multiple lines, these are also known as ‘block comments’.
- A compiler ignores comments when compiling your code.
- You can type almost anything in the comment, represented by the in the diagram.

- *Block comments:* Must begin with `/*` and end with `*/` and contain any text in between
- *Single line comment:* Must begin with `//` and end with an newline and contain any text in between


<a id="FigureCommentsSyntax"></a>

![Figure 5.13 The syntax of comments.](./images/program-creation/CommentsSyntax.png "The syntax of comments")
<div class="caption"><span class="caption-figure-nbr">Figure 5.13: </span>The syntax of comments</div><br/>

:::

## Examples
<div class="review">Example comments are shown within a code block in  <a href="#ListingExampleComments">Listing 5.11</a> below</div>

<a id="ListingExampleComments"></a>
```csharp
/* 
  This method calculates the area of a circle based on the radius 
  Parameters:
  - the radius as a float
  Return value:
  - the area as a float
*/
float calculateCircleArea(float radius) {
    float area;

    // can't calculate for negative radii
    if(radius < 0) {
        // return bad value
        return -1;
    }
    area = PI*square(radius);

    return area;
}
```
<div class="caption"><span class="caption-figure-nbr">Listing 5.11: </span>Example C# comments</div>


## Activities

<div class="review">
1. Is the following a valid comment in C#? Why/why not?
</div>

```csharp
/* 
  /* my comment */ 
*/
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.12: </span>Sample code</div>

:::note[Summary]

- It is good practice to place a comment at the top of your code explaining what the program does.
- Comments should be included to help other people read your code. You will also find these comments useful when you return to your code after a long break.
- Make your comments meaningful, try to capture your intentions and ideas
- Comments have no impact on the output produced by the compiler.

:::