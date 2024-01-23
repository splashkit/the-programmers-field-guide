---
title: Overview of Sequence and Data
---

At a basic level, programs are sequences of instructions that work on data.
They can receive data as input, and produce data as output.
For example, in a basic terminal program data can flow in and out from [standard input](../../part-0-getting-started/2-computer-use/1-concepts/07-streams).
Using SplashKit, data might flow in from a mouse and keyboard, and out as a visualisation, animation, or sound.

Programs are made up of **building blocks**.
Building blocks describe something that can be **created and used** within code.
Think of them as the template for the *things* you can build in a program.
This chapter examines the following building blocks:

- [Program](1-concepts/00-program): a sequence of instructions that when compiled creates an executable file that a user can run.
- [Method](1-concepts/02-method): a named group of instructions in a program that will get the computer to perform a task. When you want the task performed you can call the method.
- [Variable](1-concepts/07-variable): allows you to **store** and **retrieve** values within a program.
- [Constant](1-concepts/07-variable#constants): similar to a variable, except that its value cannot change after it is stored.
- [Library](1-concepts/10-library): a collection of reusable code that can be used in programs.
- [Type](1-concepts/06-type): defines how data is interpreted by a program. A programming language will support a number of basic types by default, and libraries can add other types.

:::tip[Overwhelmed?]
When you start learning programming you encounter a lot of new terms.
Don't worry if you can't remember them all!
As you keep learning and practicing you will get better.
A cheat sheet or concept map written in your own words can be a useful reference, so consider making one as you continue your journey.
:::

Building blocks are created and used in programs, but on their own they don't *do* anything.
For that we need **instructions**.
This chapter introduces two instructions you can use in your code to get the computer to do something:

- [Method Call](1-concepts/03-method-call): tells the computer to execute the instructions in a method.
- [Assignment Statement](1-concepts/08-assignment-statement): tells the computer to store a value in a variable or constant.

:::tip[Thinking for the computer]
The instructions in your code tell the computer what to do.
You want to study these and understand how they work.
As you learn about an instruction, think about what it does, when to use it, and how to combine it with building blocks and other instructions to achieve a goal.

This is the core of **computational thinking** -- the ability to take an idea and work out how to turn it into a functioning digital reality.
:::

To demonstrate these concepts in action, we will [put them together](./2-put-together/00-overview) to create two different programs: one that calculates airspeed and another that creates a drawing using [SplashKit](https://splashkit.io). The airspeed calculator lets you calculate the [airspeed velocity of unladen birds](https://www.youtube.com/watch?v=uio1J2PKzLI&ab_channel=6o18948oo3312612oo), as shown below.

```sh
$ dotnet run
Welcome to the Airspeed Calculator

What is the name of the bird?
Name: African Swallow
What is the frequency of its wing stroke? (beats per second)
Frequency: 15
What is the amplitude of its wings? (centimeters)
Amplitude: 21

African Swallow
 - f: 15 A: 0.21 Speed: 15.75 m/s
 - f: 15 A: 0.21 Speed: 7.88 m/s
```

In the graphical program, you will create a scene using primitive shapes and will be given the tools to see how you can extend this to draw images and play sound effects. With just these basic tools, you can build a small animation to tell a story.

## Learning Goals

By the end of this chapter you should be able to:

- Build a small program using a sequence of instructions that use data.
- Describe programs as sequence and data.
- Describe the program, method, variable, and constant building blocks, how you picture these, and how they are related.
- Use method calls and assignment statements within a program.
- Describe the actions the computer performs when executing an assignment statement or method call instruction.
