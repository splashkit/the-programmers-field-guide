---
title: The Stack
---

As we saw in the control flow chapter, [the stack](../../../../part-1-instructions/3-control-flow/1-concepts/02-1-scope) is the name of a location in memory where the computer stores local variables. Each block creates a new scope that allows local variables to be added to the top of the stack. When the block ends, its memory allocation in the stack is freed to be used by other variables.

With function and procedure calls, we add a new kind of block that can be added to the stack. In addition to local variables, the stack maintains all the data needed to make function and procedure calls work. We saw this a little in the original details on [method calls](../../../../part-1-instructions/1-sequence-and-data/1-concepts/03-method-call) where we saw how the program counter was maintained on the stack for a single method call.

Usually, when we picture the stack we are thinking about function and procedure calls. When a function/procedure is called, it is added to the top of the stack. If it calls another function/procedure then that is added to the top of the stack. Only one of these is running at a time -- whichever is at the top. When a function or procedure ends, control returns to the calling function or procedure, as the old function/procedure is removed from the top of the stack.

## The Stack in the Debugger

When you are in the debugger, you should be able to get a view of the stack. This will show you the current list of function/procedure calls, and will allow you to "walk" up and down the stack looking at the different local variables and their values at this point in the program.

More modern languages than C/C++ will also output a **stack trace** when a program crashes. This is a list that shows the state of the stack when the program crashed, which can help you identify the location of the issue. The first line in the stack trace will be the function/procedure that was running when it crashed, and then each line below this will show you the other functions and procedures that were on the stack at the time.

## Key Things to Remember

The main thing to remember for now is the **lifetime** of the variables in the stack. When a function or procedure ends, the data it has on the stack is lost. It will be overwritten by the next function or procedure that executes and needs to store local variables.
