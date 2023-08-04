---
sidebar_position: 1
---

# Overview {#Overview}

## Learning Goals [TO DO]{#Learning-Goals}

By the end of this section you should be able to:

- Learning Goal 1
- Learning Goal 2
- etct

## Overview: Program Creation Concepts {#Overview-Program-Creation-Concepts}

Our first program is going to display some text to the Terminal. In this
section you will be introduced to the programming artefacts and
terminology you will need to use to create this program. This first step
is important and will require you to have installed a C++ or Pascal
compiler, see Chapter **???** for instructions.

A programming **artefact** is something that can be created and used
within your code. In this chapter we will look at creating programs, and
using a number of other artefacts. The following artefacts will be
covered in this chapter:

- [Program](concepts#Program): A program is a sequence of instructions that when compiled creates an executable file that a user can run.

- [Procedure](concepts#Procedure): A procedure is a named sequence of instructions that will get the computer to perform a task. When you want the task performed you can call the procedure.

- [Library](concepts#Library): The program can use code from other Libraries. These libraries contain reusable Procedures and Types.

- [Type](concepts#Type): A type defines how data is interpreted by the program. The programming language will support a number of basic types by default, and libraries can add other types.

In addition to these artefacts, you will need to understand some
programming **terminology**. The following terms are discussed in this
section:

- [Statement](concepts#Statement): An **instruction** within the program.

- [Expression](concepts#Expression): A **value** used in a statement.

- [Identifier](concepts#Identifier): The **name** of an artefact.

This section also introduces the following kinds of instructions. You
can use these to get the computer to perform certain **actions** within
your program.

- [Procedure Call](concepts#Procedure-Call): The instruction to run a procedure.

We can then use these concepts, artefacts, and instructions to create a
program that will write some text to the Terminal as shown below:

```bash
dhcp7-206:program-creation acain$ ./OutputTest
Extended Hello World
  1 + 1 = 2
  Area of a circle with radius 3 = 28.27
dhcp7-206:program-creation acain$
```

## Overview: Concepts Related to Storing and Using Data{#Overview-Concepts-Related-to-Storing-and-Using-Data}

Chapter **???**, showed you how you can create
your own procedures, with each procedure performing a task for the program. The procedures that you created did use some data, but in each case the data was entered directly into the code of the program, as a Literal.

This next step introduces the idea of creating your own artefacts that can be used to **store**, or **calculate** a value. Using these artefacts you can start to work with values in a more dynamic way, allowing you to get the computer to perform calculations, and to store and manipulate values.

In this Chapter you will learn how to create the following programming
**artefacts**:

- [Variable](concepts#Variable): You can **store** a value in a Variable, and **retrieve** the value from the Variable.

-  [Constant](concepts#Constant): Is similar to a Variable, except that its value cannot change after it is declared.

-  [Function](concepts#Function): Is similar to a [Procedure](concepts#Procedure), but is used to calculate a value rather than to produce a side effect.

You will learn about the following **terminology**:

- [Global Variable](concepts#Global-Variable): Variables declared within the program's code are called Global Variables.

- [Local Variable](concepts#Local-Variable): Variables declared within a Function or Procedure are called Local Variables.

- [Parameters](concepts#Parameter): Parameters are variables that allow values to be passed into a Function or Procedure.

- [Expressions (with Function Calls, Variables, and Constants)](concepts#Expressions): See how Functions, Constant, and Variables can be used in Expressions.

Additionally, you will learn how to perform the following **actions**:

- [Assignment Statement](concepts#Assignment-Statement): You use an Assignment Statement to store a value in a Variable.

- [Function Call](concepts#Function-Call): This is part of an Expression, and is used to call the Function and to read the returned result.

You may need to revise the following programming artefacts:

- [Program](concepts#Program): The idea of building your own Programs.

- [Procedure](concepts#Procedure): Creating your own Procedure, as well as calling Procedures from libraries.

The following programming terminology will also be used in this Chapter:

- [Statement](concepts#Statement): An instruction performed in your code.

- [Identifier](concepts#Identifier): The name of an artefact, or the text used to identify something meaningful to the language.

This material also requires that you have a good understanding of the following actions:

- [Procedure-Call](concepts#Procedure-Call): A procedure call is an instruction to run a Procedure.

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