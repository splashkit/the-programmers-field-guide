---
title: "Overview"
---

The next part of the journey will be spectacular! We are going to see how to take control of the sequence of instructions that the computer runs. This will greatly enhance what you can do with the computer, giving you the tools you need to start building, small but, much more interesting programs.

So far, you have seen how to create [programs](../../1-sequence-and-data/1-concepts/00-program) and [variables](../../1-sequence-and-data/1-concepts/07-variable) using code. The instructions have been limited to [method calls](../../1-sequence-and-data/1-concepts/03-method-call) and [assignment statements](../../1-sequence-and-data/1-concepts/19-assignment-statement). This chapter will introduce you to a range of new instructions that control the sequence of the instructions the computer is running, unlocking great power, and making it possible to do things that until now seemed impossible.

## Overview of Control Flow Concepts

Programming is about designing code that commands the computer to perform actions. Earlier chapters have introduced the [program](../../1-sequence-and-data/1-concepts/00-program) building block into which you can enter these instructions, but have not elaborated on the actions that you can perform.

Most of a program’s actual work will be carried out with [assignment statements](../../1-sequence-and-data/1-concepts/08-assignment-statement), and through [method calls](../../1-sequence-and-data/1-concepts/03-method-call). These are the main commands, allowing you to alter values stored in memory and to execute stored instructions. The new commands we look at in this chapter relate to controlling the order in which the computer performs the instructions; known as **control flow statements**.

This chapter introduces the following **instructions**. You can use these to get the computer to perform certain actions within your program.

- [Compound Statement](../1-concepts/02-compound-statement): Used to group statements together.
- [If Statement](../1-concepts/03-1-if): Run some code if a condition is true.
- [Case Statement](../1-concepts/03-2-case): Selectively run a branch of code.
- [While Loop](../1-concepts/04-1-while-loop): Loop after testing a condition.
- [Do While Loop](../1-concepts/04-2-do-while): Loop then test a condition.
- [For Loop](../1-concepts/04-3-for-loop): A structured loop designed to iterate a set number of times.

In addition to these actions, you will need have a look at a new type:

- [Boolean Data](../1-concepts/01-0-boolean-data): An existing [type](../../1-sequence-and-data/1-concepts/06-type) that has either a *true* or *false* value.

You may need to revise the following programming **building blocks**:

- [Program](../../1-sequence-and-data/1-concepts/00-program): The idea of building your own programs.
- [Method](../../1-sequence-and-data/1-concepts/02-method): Creating your own Method, as well as calling Methods from libraries.
- [Function](#): Creating your own Functions, as well as calling Functions from libraries.

The following programming terminology will also be used in this chapter:

- [Statement](../../2-communicating-syntax/1-concepts/02-statement): An instruction performed in your code.
- [Type](../../1-sequence-and-data/1-concepts/06-type): A kind of data used in your code.

In putting it together, we will see how we can put all of these tools together to improve our change calculator and build a small game.

<a id="ListingChangeCalc"></a>

```bash
$ dotnet run

Cost of item in cents: 450
Payment in cents: 1000
Change: 2 x $2, 1 x $1, 1 x 50c, 0 x 20c, 0 x 10c, 0 x 5c
Run again: yes
Cost of item in cents: 220
Payment in cents: 400
Change: 0 x $2, 1 x $1, 1 x 50c, 1 x 20c, 1 x 10c, 0 x 5c
Run again: n
```
<div class="caption"><span class="caption-figure-nbr">Listing x.y: </span>Change Calculator run from the Terminal</div>

## Learning Goals

By the end of this chapter you should be able to:

- Use branching and looping control flow statements.
- Design algorithms to achieve required outcomes.
- Demonstrate how a given algorithm functions and explain the purpose of the embedded control flow statements.
- Use the debugger to explore control flow within a program.
