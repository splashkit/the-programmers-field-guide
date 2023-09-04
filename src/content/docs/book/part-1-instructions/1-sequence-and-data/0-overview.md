---
title: Overview of Sequence and Data
sidebar:
  order: 0
---

At a basic level, programs consist of sequences of instructions that work on data. With a basic terminal program, data can flow into the application from *stdin* and it can flow out via *stdout*.

This chapter examines the following **building blocks** that you can create within your code:

- [Program](../1-concepts#program): A program is a sequence of instructions that when compiled creates an executable file that a user can run.
- [Method](../1-concepts#procedure): A procedure is a named sequence of instructions that will get the computer to perform a task. When you want the task performed you can call the procedure.
- [Variable](../1-concepts#variable): You can **store** a value in a Variable, and **retrieve** the value from the Variable.
- [Constant](../1-concepts#constant): Is similar to a Variable, except that its value cannot change after it is declared.
- [Library](../1-concepts#library): The program can use code from other Libraries. These libraries contain reusable Procedures and Types.
- [Type](../1-concepts#type): A type defines how data is interpreted by the program. The programming language will support a number of basic types by default, and libraries can add other types.

:::note[Building Blocks?]

Programming is about building abstract models that create digital realities within the computer. To help engage with this, we have categorised the programming concepts and features based on their role within these models. This aims to guide you on how to think about these as you start to picture how the software works in your mind.

**Building blocks** describe something that can be **created and used** within your code. Think of them as the template for the *things* you can build within the system. When you build a program you will need to picture the *things* you are creating, and how they interact to achieve your desired results.

:::

Alongside the building blocks, we need something we can get the computer to *do*.
This section also introduces the following **instructions** you can get the computer to perform:

- [Procedure Call](../1-concepts#procedure-call): The instruction to run a procedure.
- [Assignment Statement](../1-concepts#assignment-statement): You use an Assignment Statement to store a value in a Variable.

:::note[Instructions?]

**Instructions** are the different actions you can get the computer to perform. The instructions in your code will tell the computer what to do. You want to study these and understand how they work. Think about what they do, when to use them, and how to combine them with the building blocks you create to achieve a goal.

Instructions exist *within* the building blocks you create.

This is the core of **computational thinking** - the ability to take an idea and work out how to turn it into something that can exist as a functioning digital reality within the computer.

:::

To demonstrate these concepts in action, we will [put them together](./3-put-together.md) to create two different programs: one that calculates airspeed and another that creates a drawing using [SplashKit](https://splashkit.io). The airspeed calculator lets you calculate the airspeed velocity of unladen birds, as shown below.

```sh
$ dotnet run
Welcome to the Airspeed Calculator

What is the name of the bird?
Name: Africal Swallow
What is the frequency of its wing stroke? (beats per second)
Frequency: 15
What is the amplitude of its wings? (centimeters)
Amplitude: 21

Africal Swallow
 - f: 15 A: 0.21 Speed: 15.75 m/s
 - f: 15 A: 0.21 Speed: 7.88 m/s
```

In the graphical program, you will create a scene using primitive shapes and will be given the tools to see how you can use this to draw images and play sound effects. With just these tools, you can build a small animation to tell a story.

## Learning Goals

By the end of this section you should be able to:

- Build a small program that involves a sequence of instructions that manipulate and use data.
- Describe programs as sequence and data.
- Describe the program, method, variable, and constant building blocks, how you picture these, and how these are related.
- Use method calls and assignment statements within a program.
- Describe the actions the computer performs when an assignment statement or method call runs.
