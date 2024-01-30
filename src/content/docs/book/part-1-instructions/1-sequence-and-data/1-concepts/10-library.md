---
title: "Library"
---

A library is a collection of reusable code building blocks. Each programming language comes with a standard set of libraries, and your programs can make use of the code available in these and other libraries.

The image below shows the concepts related to a library.

![A library contains code that can be used by your program](./images/library-concept.png "A library contains code that can be used by your program")

## Libraries -- when, why, and how

Building programs requires many, many, instructions. You can build all of these yourself, but this will reinvent much of what already exists elsewhere. Libraries provide a way of packaging up code to be shared and used by others.

As your programming capabilities grow, you will want to start exploring available libraries and how to use them. For now, we will look at a small part of the C# standard libraries, as well as features of the SplashKit library. This will give you a taste of using other libraries, and help you develop the skills needed to use code that others have provided. This will help you be able to use any library you want to use in the future.

## In C#

We will explore creating our own libraries later in our journey. For now, you can see how to use library code in your program.

:::tip[Syntax]
![The syntax for a C# program.](./images/program.png "The syntax for a C# program")
:::

In a C# project, the **using clause** lets you access the code in a library. Once you add this directive you will be able to directly call any of the methods within that part of the library.

:::note[Summary]

- A library is a **bulding block** that contains building blocks for others to use.
- In C#, libraries provide [methods](../02-method) that perform useful tasks.
- Standard libraries typically provide methods to read and write to standard input and output, and perform data conversions. In C# these are in the `System.Console` and `System.Convert` components in the library.
- SplashKit is an external library that contains code to help you build graphical programs as you start to learn.

:::
