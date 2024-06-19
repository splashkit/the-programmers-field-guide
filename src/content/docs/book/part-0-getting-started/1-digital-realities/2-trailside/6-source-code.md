---
title: Source Code and the Compiler
sidebar:
    label: Source Code
---

The next step in programming language was to make languages even more human readable. These languages, known as **third generation languages**, use more advanced programs than assemblers to convert their instructions into machine code. The code that a programmer writes in these languages is called **source code**. Programs written in these languages are converted to machine code by a **compiler** or **interpreter**.

## Compilers and Interpreters

A **compiler** is a program that converts **source code** into machine code and saves it as an executable file called a *program*. The program can then be executed independent of the compiler and the source code. An **interpreter** is a program similar to a compiler, but skips the intermediate steps of translating and saving all the machine code in advance. Instead, an interpreter just executes the code as the program is read. This is slower, and means you can't run the program without also having the interpreter, but it does give you additional flexibility that can be hard to achieve otherwise.

When you're *writing* code, you won't notice any difference between compiled and interpreted languages.
The difference only matters when you want to *run* your program.
To run a program written in a compiled language, you need to use the compiler to convert the source code into an executable program.
To run a program written in an interpreted language, you need to run the interpreter program and tell it to execute your source code.

In this journey we will focus on compiled languages.
Internally, a compiler will perform a number of steps:

1. **Preprocessing**: The compiler reads your code. This may involve some processing to do things like ignoring comments, which are notes written in your code files for the benefit of programmers.
2. **Compiling**: The compiler coverts your code into assembly instructions and outputs an assembly program.
3. **Assembling**: The assembly program is converted into machine code and stored in **object files**.
4. **Linking**: The compiler uses a **linker**, which is another program, to join together the machine code of your program with other machine code from any **programming libraries** your program refers to. It then outputs an executable program.

:::note
A **programming library** is a collection of code that is distributed for others to use.
There are lots of programming libraries to help you create different kinds of digital realities without having to implement everything from scratch.

For example, in this book we will use the [SplashKit](https://splashkit.io/) programming library to help us create graphical programs.
:::

At the end of this process you have an executable that you can run on your computer.

## Programming with a Third Generation Language

The following snippet is the source code for a small program that can be used to output a message
to the command line.

```cpp
#include "splashkit.h"

int main()
{
    write_line("Hello");
    return 0;
}
```

When compiled, this C++ program generates the assembler code and machine code shown in the previous code snippets. This code must be converted by the C++ compiler into machine code before it can be run. It is interesting to note the size of the C++ file: it is only 50 bytes! The compiler converts this 50 bytes into the 13,344 bytes of machine code.

Most modern programming languages are third generation languages. Programs written in a third generation programming language are much easier for us to understand than their assembler or machine code equivalents. Source code is also a more portable form of code, as it can be compiled to run on different types of CPU. 

Typically, source code is saved into a text file with a file extension that helps identify the language it is written in. For example, programs written in the C++ language are saved into files with a `.cpp` file extension. C# programs are saved into files with a `.cs` extension, Python in `.py` and so on.
