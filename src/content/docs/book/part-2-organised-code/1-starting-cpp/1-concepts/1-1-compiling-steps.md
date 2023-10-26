---
title: Compiler Steps
sidebar:
    label: " - Compiler Steps"
---

Understanding how the C/C++ compilers work will help you better understand some issues you may encounter. Remember these C/C++ compilers are relatively primitive, so you have to be a little careful when working with them.

## How the compiler works

The C/C++ compilers work four stages:

1. **Preprocessing**: The code is read from your source code files.
    This may involve some processing of the text itself, which includes
    things like ignoring any comments in the code.
2. **Compiling**: The code is then converted into assembly
    instructions, and an assembly program is output.
3. **Assembling**: The assembly version of the program is converted
    into machine code, and stored in **object files**.
4. **Linking**: In the final step the compiler uses a **Linker** to
    join together the machine code from your program, with other machine
    code you have used from the programming libraries. This then outputs
    an executable program.

We talked briefly about compiling and assembling in [Chapter 0.0](../../../../part-0-getting-started/1-digital-realities/0-overview) so lets just quickly look over the two additional steps.

### Pre-processing

In the first step, the compiler will process your code preparing it for the actual compilation to come. Some parts of the code in your program is written for this preprocessor. The main one is the `#include` code. This is a preprocessor instruction to include the code from another file at this point. In effect, this is like a large copy and paste actions, where the preprocessor uses this instruction to copy the code from the indicated file for the compiler to use.

:::caution

There are other things you can do with the preprocessor, and we will look at some later, but generally I would suggest avoiding trying to do too many tricky things with this. Try to keep your code clean and simple so that others can understand it.

:::

For the includes to work, they need to know where these files can be found. There are some default paths that are searched, which includes the current directory. You can also add a `-I` option to add additional path for the preprocessor to search when it is including something.

### Linking

With the C/C++ compilers, the assembler created what are known as **object files**. These contain machine code for parts of the program that need to be all connected (called **linked**) together. For example, where you call the `write_line` function, the code for this is in a library. The object files where this is used need to know where this machine code is so that it can jump to it at run time. The linking process creates these connections.

For the linker to work, it will need to know the libraries that you use, and where to find them. The `-l` option lets you tell it which libraries you want linked in, and the `-L` option can be used to indicate where the libraries can be found.
