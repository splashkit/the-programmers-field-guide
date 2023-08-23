---
title: Overview of Sequence and Data
---

At a basic level, programs consist of sequences of instructions that work on data. With a basic terminal program, data can flow into the application from *stdin* and it can flow out via *stdout*.

This chapter examines the following **artefacts** that you can create within your code:

- [Program](../1-concepts#program): A program is a sequence of instructions that when compiled creates an executable file that a user can run.
- [Method](../1-concepts#procedure): A procedure is a named sequence of instructions that will get the computer to perform a task. When you want the task performed you can call the procedure.
- [Variable](../1-concepts#variable): You can **store** a value in a Variable, and **retrieve** the value from the Variable.
- [Constant](../1-concepts#constant): Is similar to a Variable, except that its value cannot change after it is declared.
- [Library](../1-concepts#library): The program can use code from other Libraries. These libraries contain reusable Procedures and Types.
- [Type](../1-concepts#type): A type defines how data is interpreted by the program. The programming language will support a number of basic types by default, and libraries can add other types.

:::note

Programming is about building these abstract models to create digital realities. To help engage with this, the guide categorises different concepts and programming features based on what they get the program to do.

A programming **artefact** is something that can be created and used
within your code. You want to create a way of *picturing* these within your mind as things that exist for you to use and create.

:::

Alongside the artefacts, we need something we can get the computer to *do*.
This section also introduces the following **actions** you can get the computer to perform:

- [Procedure Call](../1-concepts#procedure-call): The instruction to run a procedure.
- [Assignment Statement](../1-concepts#assignment-statement): You use an Assignment Statement to store a value in a Variable.



:::note

In the guide, we use **action** to indicate the different kinds of instructions you can code in your program. You want to study these and understand how they work. Think about what they do, when to use them, and how to combine them with the artefacts you create to achieve a goal.

This is the core of **computational thinking** - the ability to take an idea and work out how to turn it into something that can exist as a functioning digital reality within the computer.

:::

To demonstrate these concepts in action, we will [put them together](./3-put-together.md) to create two different programs: one that calculates change and another that creates a drawing using [splashkit](https://splashkit.io).

The change calculator will demonstrate the process of calculating change for a vending machine. This program will read the cost and amount paid from the user, and will then output the number of coins that need to be returned. The output of several runs of this program are shown below.

```sh
$ dotnet run
Cost of item (in cents): 15
Amount paid (in cents): 500
Change: 2 x $2, 0 x $1, 1 x 50c, 1 x 20c, 1 x 10c, 1 x 5c

$ dotnet run
Cost of item (in cents): 150
Amount paid (in cents): 250
Change: 0 x $2, 1 x $1, 0 x 50c, 0 x 20c, 0 x 10c, 0 x 5c

$ dotnet run
Cost of item (in cents): 175
Amount paid (in cents): 200
Change: 0 x $2, 0 x $1, 0 x 50c, 1 x 20c, 0 x 10c, 1 x 5c
```

In the graphical program, you will create a scene using primitive shapes and will be given the tools to see how you can use this to draw images and play sound effects. With just these tools, you can build a small animation to tell a story.

## Learning Goals [TO DO]

By the end of this section you should be able to:

- Build a small program that involves a sequence of instructions that manipulate and use data.
- Describe programs as sequence and data.
- Describe the program, method, variable, and constant artefacts, how you picture these, and how these are related.
- Use method calls and assignment statements within a program.
- Describe the actions the computer performs when an assignment statement or method call runs.
