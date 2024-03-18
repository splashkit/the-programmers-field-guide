---
title: The Debugging C Compiler (DCC)
---

## What is a C Compiler?

When working in languages such as C, there is a choice of compilers that you can use, sometimes reffered to as *implementations*. A compiler is just another program that takes your source code and converts it into machine code that can be executed by the computer. The compiler is responsible for translating your code into the correct instructions for the computer to execute.

today, the GCC and Clang compilers are the most popular implementations of the C language. They are both open-source, and are used to compile many of the programs you use every day. For example, GCC is used to compile the Linux kernel, and Clang is used to compile the Chrome browser.

## The Debugging C Compiler

We will be using a compiler called the *Debugging C Compiler* (DCC). This compiler is based upon the GCC compiler, and is designed to help you learn good programming habbits in the C language. It is a fantastic tool to help you learn C, and we will be using it throughout this chapter.

## Installation

### On your Raspberry Pi

TODO: Add instructions for installing DCC on the Raspberry Pi

### On your own computer

You can refer to this handy guide for installation which will stay updated as DCC evolves: [https://github.com/COMP1511UNSW/dcc#installation](DCC Installation Guide)

On Windows we suggest you use WSL2. Follow the [WSL Installation Guide](../../../../part-0-getting-started/2-computer-use/0-installation/2-5-setup-win-wsl#1-install-windows-subsystem-for-linux-wsl) in this book, and then install DCC on your WSL2 instance.

## Using DCC

Let's write a hello world program in C and test that our DCC installation is working! For now, don't worry about not understanding the code below, we are just testing that everything works.

```c
#include <stdio.h>

int main(void) {
    printf("Hello, world!\n");
    return 0;
}
```

Save this code in a file called `hello.c` and then compile it with DCC:

```bash
dcc hello.c -o helloWorld
./helloWorld
```

If you see `Hello, world!` printed in the terminal, success! You have successfully installed DCC and are ready to start learning C.
