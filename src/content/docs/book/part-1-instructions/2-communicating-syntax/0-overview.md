---
title: Overview
---

To come...



<!-- At a basic level, programs consist of sequences of instructions that work on data. With a basic terminal program, data can flow into the application from *stdin* and it can flow out via *stdout*.

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

In addition to these artefacts, you will need to understand some
programming **terminology**. The following terms are discussed in this
section:

- [Statement](../1-concepts#statement): An **instruction** within the program.

- [Expression](../1-concepts#expression): A **value** used in a statement.

- [Identifier](../1-concepts#identifier): The **name** of an artefact.

This section also introduces the following kinds of instructions. You
can use these to get the computer to perform certain **actions** within
your program.

- [Procedure Call](../1-concepts#procedure-call): The instruction to run a procedure.

We can then use these concepts, artefacts, and instructions to create a
program that will write some text to the Terminal as shown below:

```bash
dhcp7-206:program-creation acain$ ./OutputTest
Extended Hello World
  1 + 1 = 2
  Area of a circle with radius 3 = 28.27
dhcp7-206:program-creation acain$
```

## Overview: Concepts Related to Storing and Using Data

Chapter **???**, showed you how you can create
your own procedures, with each procedure performing a task for the program. The procedures that you created did use some data, but in each case the data was entered directly into the code of the program, as a Literal.

This next step introduces the idea of creating your own artefacts that can be used to **store**, or **calculate** a value. Using these artefacts you can start to work with values in a more dynamic way, allowing you to get the computer to perform calculations, and to store and manipulate values.

In this Chapter you will learn how to create the following programming
**artefacts**:

-  [Function](../1-concepts#function): Is similar to a [Procedure](../1-concepts#procedure), but is used to calculate a value rather than to produce a side effect.

You will learn about the following **terminology**:

- [Global Variable](../1-concepts#global-variable): Variables declared within the program's code are called Global Variables.

- [Local Variable](../1-concepts#local-variable): Variables declared within a Function or Procedure are called Local Variables.

- [Parameters](../1-concepts#parameter): Parameters are variables that allow values to be passed into a Function or Procedure.

- [Expressions (with Function Calls, Variables, and Constants)](../1-concepts#expressions): See how Functions, Constant, and Variables can be used in Expressions.

Additionally, you will learn how to perform the following **actions**:

- [Assignment Statement](../1-concepts#assignment-statement): You use an Assignment Statement to store a value in a Variable.

- [Function Call](../1-concepts#function-call): This is part of an Expression, and is used to call the Function and to read the returned result.

You may need to revise the following programming artefacts:

- [Program](../1-concepts#program): The idea of building your own Programs.

- [Procedure](../1-concepts#procedure): Creating your own Procedure, as well as calling Procedures from libraries.

The following programming terminology will also be used in this Chapter:

- [Statement](../1-concepts#statement): An instruction performed in your code.

- [Identifier](../1-concepts#identifier): The name of an artefact, or the text used to identify something meaningful to the language.

This material also requires that you have a good understanding of the following actions:

- [Procedure-Call](../1-concepts#procedure-call): A procedure call is an instruction to run a Procedure.

By the end of this material we will have worked through an example where you create a program that calculates change for a vending machine. This program will read the cost and amount paid from the user, and will then output the number of coins that need to be returned. The output of several runs of this program are shown below

```bash
acain2-mac:storing-using-data acain$ ./SimpleChange
Cost of item (in cents): 15
Amount paid (in cents): 500
Change: 2 x $2, 0 x $1, 1 x 50c, 1 x 20c, 1 x 10c, 1 x 5c
acain2-mac:storing-using-data acain$ ./SimpleChange
Cost of item (in cents): 150
Amount paid (in cents): 250
Change: 0 x $2, 1 x $1, 0 x 50c, 0 x 20c, 0 x 10c, 0 x 5c
Cost of item (in cents): 175
Amount paid (in cents): 200
Change: 0 x $2, 0 x $1, 0 x 50c, 1 x 20c, 0 x 10c, 1 x 5c
```

## Learning Goals [TO DO]

By the end of this section you should be able to:

- Learning Goal 1
- Learning Goal 2
- etct
 -->
