---
title: Compiler Steps
sidebar:
    label: " - Compiler Steps"
---

Understanding how the C/C++ compiler works will help you better understand some issues you may encounter. Remember that C/C++ compilers are relatively primitive, so you have to be a little careful when working with them.

## How the compiler works

The C/C++ compilers work four stages:

1. **Preprocessing**: the code is read from your source code files.
    This may involve some processing of the text itself, which includes
    things like ignoring any comments in the code.
2. **Compiling**: the code is then converted into assembly
    instructions, and an assembly program is output.
3. **Assembling**: the assembly version of the program is converted
    into machine code, and stored in **object files**.
4. **Linking**: the compiler uses a **linker** to
    join together the machine code from your program with other machine
    code you have used from the programming libraries. This then outputs
    an executable program.

We talked briefly about compiling and assembling in [Part 0](../../../../part-0-getting-started/1-digital-realities/1-concepts/6-source-code) so lets just quickly look over the two steps new with C/C++ compared to C#.

### Pre-processing

In the first step, the compiler will process your code to prepare it for the actual compilation to come. Some parts of the code in your program is written for this preprocessor. The main one is `#include`. This is a preprocessor instruction to *include* the code from another file at this point. In effect, this is like a large copy and paste action.

:::caution
There are other things you can do with the preprocessor, and we will look at some later, but generally we would suggest avoiding trying to do too many tricky things with it. Try to keep your code clean and simple so that others can understand it.
:::

For `#include` to work, the preprocessor needs to know where the included files can be found. There are some default paths that are searched, which includes the current directory. You can also add a `-I` option when compiling to add additional paths for the preprocessor to search.

### Linking

With C/C++ compilers, the assembler creates what are known as **object files**. These contain machine code for parts of the program that need to be all connected (**linked**) together. For example, where you call `write_line`, the code for this is in the SplashKit a library. The object files where `write_line`` is used need to know where the SplashKit machine code is so that it can jump to it at run time. The linking process creates these connections.

For the linker to work, it will need to know which libraries you use and where to find them. The `-l` option lets you tell the linker which libraries you want linked in, and the `-L` option can be used to indicate where those libraries can be found.
