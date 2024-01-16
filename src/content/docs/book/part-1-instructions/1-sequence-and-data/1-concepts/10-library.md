---
title: "Library"
---

A library is a collection of reusable code building blocks. Each programming language comes with a standard set of libraries, and your programs can make use of the code available in these, and other, libraries.

[Figure 5.9](#FigureLibrary) shows the concepts related to a library.

<a id="FigureLibrary"></a>

![Figure 5.9 A library contains code that can be used by your Program](./images/library-concept.png "A library contains code that can be used by your Program")
<div class="caption"><span class="caption-figure-nbr">Figure 5.9: </span>A library contains code that can be used by your Program</div><br/>

## Libraries - why, when, and how

Building programs require many, many, instructions. You can build all of these yourself, but this will reinvent much of what already exists elsewhere. Libraries provide a way of packaging up code to be shared and used by others.

As your programming capabilities grow, you will want to start exploring available libraries and how to use them. For now, we will explore a small part of the standard libraries and features of the SplashKit library. These will give you a taste of using other libraries, and the skills you learn here will help learn how to use code that others have provided - skills you will need to use any library.

## In C#

:::tip[Syntax]
We will explore creating libraries much later in our journey, for now, you can see how to use library code in your program.

In a C# project, the **using clause** lets you access the code in a library. Once you add this directive you will be able to directly call the methods within that part of the library.

<a id="FigureProgramSyntax"></a>

![Figure 5.2 The syntax for a C# program.](./images/program.png "The syntax for a C# program")
<div class="caption"><span class="caption-figure-nbr">Figure 5.2: </span>The syntax for a C# program</div><br/>

:::


:::note[Summary]

- A library is a **bulding block** that contains building blocks for others to use.
- In C#, components in the library provide [Methods](../03-method) that perform useful tasks.
- Standard libraries will provide methods to read and write to standard input and output and perform data conversions. In C# these are in the `System.Console` and `System.Convert` components in the library.
- SplashKit is an external library that contains code to help you build more interesting programs as you start to learn.
- You can use a 

:::