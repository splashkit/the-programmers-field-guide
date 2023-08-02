---
sidebar_position: 1
---

# Overview

## Learning Goals

## Overview

Chapter ???, showed you how you can create
your own procedures, with each procedure performing a task for the program. The procedures that you created did use some data, but in each case the data was entered directly into the code of the program, as a Literal.

This next step introduces the idea of creating your own artefacts that can be used to **store**, or **calculate** a value. Using these artefacts you can start to work with values in a more dynamic way, allowing you to get the computer to perform calculations, and to store and manipulate values.

In this Chapter you will learn how to create the following programming
**artefacts**:

- [Variable](/docs/part-1/sequence-data/concepts#Variable): You can **store** a value in a Variable, and **retrieve** the value from the Variable.

-  [Constant](/docs/part-1/sequence-data/concepts#Constant): Is similar to a Variable, except that its value cannot change after it is declared.

-  [Function](/docs/part-1/sequence-data/concepts#Function): Is similar to a [Procedure](/docs/part-1/sequence-data/concepts#Procedure), but is used to calculate a value rather than to produce a side effect.

You will learn about the following **terminology**:

- [Global Variable](/docs/part-1/sequence-data/concepts#Global-Variable): Variables declared within the program's code are called Global Variables.

- [Local Variable](/docs/part-1/sequence-data/concepts#Local-Variable): Variables declared within a Function or Procedure are called Local Variables.

- [Parameters](/docs/part-1/sequence-data/concepts#Parameters): Parameters are variables that allow values to be passed into a Function or Procedure.

- [Expressions (with Function Calls, Variables, and Constants)](/docs/part-1/sequence-data/concepts#Expressions): See how Functions, Constant, and Variables can be used in Expressions.

Additionally, you will learn how to perform the following **actions**:

- [Assignment Statement](/docs/part-1/sequence-data/concepts#Assignment-Statement): You use an Assignment Statement to store a value in a Variable.

- [Function Call](/docs/part-1/sequence-data/concepts#Function-Call): This is part of an Expression, and is used to call the Function and to read the returned result.

You may need to revise the following programming artefacts:

- [Program](/docs/part-1/sequence-data/concepts#Program): The idea of building your own Programs.

- [Procedure](/docs/part-1/sequence-data/concepts#Procedure): Creating your own Procedure, as well as calling Procedures from libraries.

The following programming terminology will also be used in this Chapter:

- [Statement](/docs/part-1/sequence-data/concepts#Statement): An instruction performed in your code.

- [Identifier](/docs/part-1/sequence-data/concepts#Identifier): The name of an artefact, or the text used to identify something meaningful to the language.

This material also requires that you have a good understanding of the following actions:

- [Procedure-Call](/docs/part-1/sequence-data/concepts#Procedure-Call): A procedure call is an instruction to run a Procedure.

By the end of this material we will have worked through an example where you create a program that calculates change for a vending machine. This program will read the cost and amount paid from the user, and will then output the number of coins that need to be returned. The output of several runs of this program are shown in Figure
[5.1](#storing-using-simple-change)

<a id="storing-using-simple-change"></a>

![Figure 5.1 The Change Calculator running in the Terminal](./images/SimpleChange.png "storing-using-simple-change")