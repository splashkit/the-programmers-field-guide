---
title: "Overview"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---
## Overview

The focus so far has been on learning the programming artefacts that you can create within your code. You have seen how to create [Programs](../../1-sequence-and-data/1-concepts/00-program), [Methods](../../1-sequence-and-data/1-concepts/03-method), [Functions](../../1-sequence-and-data/1-concepts/20-function), and [Variables](../../1-sequence-and-data/1-concepts/21-function-call). The actual instructions that you can issue to the computer have been limited to [Method Calls](../../1-sequence-and-data/1-concepts/02-method-call), [Function Calls](../../1-sequence-and-data/1-concepts/21-function-call), and [Assignment Statements](../../1-sequence-and-data/1-concepts/19-assignment-statement). This Chapter will introduce you to the other actions that you can command the computer to perform. It will show you how to control the flow of the instructions, unlocking great power, and making it possible to do things that until now seemed impossible.

When you have understood the material in this chapter you will be able to write code that commands the computer to perform a wider range of actions by controlling the sequence in which the basic commands are performed.

## Overview of Control Flow Concepts

Programming is about designing code that commands the computer to perform actions. Earlier chapters have introduced the [Program](../../1-sequence-and-data/1-concepts/00-program), [Method](../../1-sequence-and-data/1-concepts/03-method) and [Function](../../1-sequence-and-data/1-concepts/20-function) artefacts into which you can enter these instructions, but have not elaborated on the actions that you can perform.

Most of a program’s actual work will be carried out in [Assignment Statements](../../1-sequence-and-data/1-concepts/19-assignment-statement), and through [Method Calls](../../1-sequence-and-data/1-concepts/02-method-call) and [Function Calls](../../1-sequence-and-data/1-concepts/21-function-call). These are the main commands, allowing you to alter values stored in memory and to execute stored instructions. The remaining commands relate to controlling the order in which the computer performs the instructions; called **control flow statements**.

This chapter introduces the following kinds of instructions. You can use these to get the computer to perform certain **actions** within your program.

- [If Statement](../1-concepts/02-branching#if-statement): Run some code if a condition is true.
- [Case Statement](../1-concepts/02-branching#case-statement): Selectively run a branch of code.
- [Compound Statement](../1-concepts/05-compound-statement): Group statements together.
- [Pre-Test Loop](../1-concepts/03-looping#pre-test-loop): Loop after testing a condition.
- [Post-Test Loop](../1-concepts/03-looping#post-test-loop): Loop then test a condition.

In addition to these actions, you will need have a look at an existing artefact:

- [Boolean Data](../1-concepts/01-boolean-data): An existing [Type](../../1-sequence-and-data/1-concepts/06-type) that has either a *true* or *false* value.

You may need to revise the following programming **artefacts**:

- [Program](../../1-sequence-and-data/1-concepts/00-program): The idea of building your own programs.
- [Method](../../1-sequence-and-data/1-concepts/03-method): Creating your own Method, as well as calling Methods from libraries.
- [Function](../../1-sequence-and-data/1-concepts/20-function): Creating your own Functions, as well as calling Functions from libraries.

The following programming terminology will also be used in this Chapter:

- [Statement](../../1-sequence-and-data/1-concepts/01-statement): An instruction performed in your code.
- [Type](../../1-sequence-and-data/1-concepts/06-type): A kind of data used in your code.

The example for this chapter is a guessing game, where the user is guessing a number between 1 and 100. An example of this program executing is shown in [Listing x.y](#ListingGuessingGame)


<a id="ListingGuessingGame"></a>

```bash
acain2-mac:control-flow acain$ ./GuessThatNumber
I am thinking of a number between 1 and 100

Guess 1: 73
The number is less than 73
Guess 2: 10
The number is larger than 10
Guess 3: 52
The number is larger than 52
Guess 4: 60
The number is less than 60
Guess 5: 57
The number is less than 57
Guess 6: 54
The numbar is larger than 54
Guess 7: 56
The number is less than 56
You ran out of guesses... the number was 55

Do you want to play again [Y/n]? n

Bye
acain2-mac:control-flow acain$
```
<div class="caption"><span class="caption-figure-nbr">Listing x.y: </span>Guess that Number run from the Terminal</div>