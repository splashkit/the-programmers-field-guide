---
title: Sequence
---

Within a program, one of the main things you need to see is that everything runs in **sequence**.

At a low level, the computer executes each of its machine code instructions one at a time. This is central to the way the computer works and is therefore central to the way we need to think about its operation (**computational thinking**). 

The computer's processor maintains a **program counter** that is used to record the instruction the computer is currently performing. Once it finishes the current instruction, the computer adds one to the program counter, moving it to the **next instruction** in the program. Some instructions will let you control which instruction is next, but this just lets you adjust the sequence, at its core, it is performing one step and then the next. We will see one such instruction in this chapter, and the next chapter will focus on the different instructions you can use to control this sequence.

Keeping this simple idea in mind will be important throughout your programming journey, and beyond. The computer is unintelligent and will follow the **sequence** of actions that you define. It will not interpret, adapt, or otherwise deviate from what you tell it to do.

## Sequence - why, when, and how

Designing a program will require you to be able to identify a **sequence** of instructions that will allow you to get the computer to achieve the result you want. This is the process of creating an **algorithm** - a finite sequence of instructions that a computer can use to perform a required task or calculate a required output. In this, you have to work within the constraints of the computer. The instructions within the program/algorithm will be unambiguous, and require no intelligence to perform. After all, we want this to run in the computer and the computer is unintelligent.

This design process is known as **computational thinking**. You need to think about the available instructions and building blocks, and creatively come up with the code to create the building blocks and **sequence** instructions to use this abstract machinery you have created to achieve an outcome.

In this chapter, you will be able to create the following **building blocks**

- [Programs](../00-program) the user can run
- [Variables](../07-variable) to store values

You will be able to use the following **building blocks** that others have created:

- [Methods](../02-method) that can be called to perform an action or fetch/calculate a value.
- [Libraries](../10-library) that provide you with building blocks others have created.

You will be able to instruct the computer to:

- [Call methods](../03-method-call) to run their instructions.
- [Assign variables](../08-assignment-statement) a value

By putting these together you will be able to build some small programs that show visualisations and calculate values. The next chapter in your journey will then explore how we can make these more dynamic by controlling the sequence of actions.
