---
title: "Global Variable"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept

Variables and Constants can be declared within a Program. Variables declared in this way are called Global Variables. It seems tempting to use Global Variables to share values between procedures, but this is a bad idea. Global Variables should be avoided, and for many programs are unnecessary. The issue with Global Variables is that their values can be changed from anywhere within the program's code. This can make it difficult to locate the source of errors when globals are used.

While Global Variables should be avoided, Constants should be declared globally. As these values can not change, the issues with Global Variables do not affect Constants.

<a id="FigureGlobalVariable"></a>

![Figure 5.15 Variables declared within a Program are Global Variables](./images/storing-and-using-data/variable-global.png "Variables declared within a Program are Global Variables")

<div class="caption"><span class="caption-figure-nbr">Figure 5.15: </span> Variables declared within a Program are Global Variables</div><br/>

## In C#

[TODO]

## Examples

[TODO]

## Activities

[TODO]

:::note[Summary]

- Global Variable is the **term** given to a Variable that is declared within the program.
- Variables that are declared within a Program are called **Global Variables**.
- Global Variables can be accessed by the program’s instructions, and by the instructions in any of the Procedures.
- You should **avoid** using Global Variables. These variables can be accessed anywhere within the Program, making it difficult to locate errors.
- Using Global Variables introduces hidden dependencies between Procedures, breaking the isolated nature of the Procedures.
- Constants **should** be declared globally, and used to give meaning to values entered into your code.

:::