---
title: "Overview"
---

The next part of the journey will be spectacular. We are going to see how to take control of the sequence of instructions that the computer runs. This will greatly enhance what you can do with the computer, giving you the tools you need to start building, small but, much more interesting programs.

So far, you have seen how to create [programs](../../1-sequence-and-data/1-concepts/00-program) and [variables](../../1-sequence-and-data/1-concepts/07-variable) using code. The instructions have been limited to [method calls](../../1-sequence-and-data/1-concepts/03-method-call) and [assignment statements](../../1-sequence-and-data/1-concepts/19-assignment-statement). This chapter will introduce you to a range of new instructions that control the sequence of the instructions the computer is running, unlocking great power, and making it possible to do things that until now seemed impossible.

## Overview of Control Flow Concepts

Programming is about designing code that commands the computer to perform actions. Earlier chapters have introduced the [Program](../../1-sequence-and-data/1-concepts/00-program), [Method](../../1-sequence-and-data/1-concepts/02-method) and [Function](#) artefacts into which you can enter these instructions, but have not elaborated on the actions that you can perform.

Most of a program’s actual work will be carried out in [Assignment Statements](../../1-sequence-and-data/1-concepts/19-assignment-statement), and through [Method Calls](../../1-sequence-and-data/1-concepts/03-method-call) and [Function Calls](#). These are the main commands, allowing you to alter values stored in memory and to execute stored instructions. The remaining commands relate to controlling the order in which the computer performs the instructions; called **control flow statements**.

This chapter introduces the following kinds of instructions. You can use these to get the computer to perform certain **actions** within your program.

- [If Statement](../1-concepts/02-branching#if-statement): Run some code if a condition is true.
- [Case Statement](../1-concepts/02-branching#case-statement): Selectively run a branch of code.
- [Compound Statement](../1-concepts/05-compound-statement): Group statements together.
- [Pre-Test Loop](../1-concepts/03-looping#pre-test-loop): Loop after testing a condition.
- [Post-Test Loop](../1-concepts/03-looping#post-test-loop): Loop then test a condition.

In addition to these actions, you will need have a look at an existing artefact:

- [Boolean Data](../1-concepts/01-boolean-data): An existing [Type](../../1-sequence-and-data/1-concepts/07-type) that has either a *true* or *false* value.

You may need to revise the following programming **artefacts**:

- [Program](../../1-sequence-and-data/1-concepts/00-program): The idea of building your own programs.
- [Method](../../1-sequence-and-data/1-concepts/02-method): Creating your own Method, as well as calling Methods from libraries.
- [Function](#): Creating your own Functions, as well as calling Functions from libraries.

The following programming terminology will also be used in this Chapter:

- [Statement](#): An instruction performed in your code.
- [Type](../../1-sequence-and-data/1-concepts/07-type): A kind of data used in your code.

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