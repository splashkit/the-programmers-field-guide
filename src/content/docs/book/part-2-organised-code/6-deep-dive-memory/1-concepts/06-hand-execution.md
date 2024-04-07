---
title: Hand execution
---
Hand Execution
Play
Running code yourself can be a great way to help you understand how a program works. This is useful both for functioning programs, and for when you are thinking through issues that have arisen.
The idea is to read through the code, and “run” it yourself. So you have to act like a computer (remember that the computer is unintelligent!). This should be an entirely mechanical process. Read each line, perform each action as they occur. An example is shown below.

The main thing you will need is a piece of paper to act as your memory. The computer is unintelligent, but it can “remember” values in variables. We can use our paper to act as memory, while we act as the CPU by performing the instructions that are coded in the program.

Building your understanding
Hand execution, also known as tracing, is a great way to develop your understanding. By acting as the CPU you have to focus on the instructions that the computer performs when it runs the code.
One of the keys to doing this is to remember the computer is unintelligent. All you need to do is follow the steps the computer will perform as it runs the code. You should not really have to “think”. The computer doesn’t.
Use the following steps to get started
Locate the first instruction
Focus on just that one line - the computer runs these instructions one at a time. It doesn’t need to “think” about what is going to happen next. It just performs the instructions one at a time.
Perform the actions from the current line of code:
When you encounter a variable declaration, you need to create space for the variable in memory (on your piece of paper). Create a box somewhere on your page to keep track of that variable’s value. When the instruction use that variable later you will be able to use the value from that box.
With each assignment statement, you need to perform the steps associated: calculate the value of the expression, and store the result in the variable. For the store step, cross out the old value in the variable’s box and write in the new value.
With a method call, you will need to know what the procedure does. For example, if the code calls WriteLine you can indicate what is shown in the Terminal without having to step through the instructions in WriteLine.
With control flow statements, you will need to evaluate their condition and jump to the next instruction. Remember to focus on each instruction one at a time. You only evaluate the condition of the loops when that is the current part being executed.

Tip
Start with big boxes for the variables. You want to make sure you have space for every value the variable is assigned over the execution of the program.
Hand execution is a great way to see if you really understand the actions that each statement performs. Hopefully you have noticed we have been using it a lot to explain how different statements work! As your programs get more complex, you can use hand execution to see how the computer is organising its data. This can be a valuable tool for debugging, but also helpful when initially designing your program’s logic.


<!-- TODO: write this to show how dynamic memory allocation functions operate. Do we add more to the put together section? -->
