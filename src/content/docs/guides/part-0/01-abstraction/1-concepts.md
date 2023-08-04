---
title: test
description: test
---

# Concepts

## Programs, what are they?

Computers are everywhere, helping enhance many aspects of our lives. There are computers embedded within many everyday items, most people carry around a computer in their pocket and possibly another on their wrist, and we interact with many differents pieces of software every day.

*Why are computers everywhere?*

In the video below, Steve Jobs, the co-founder of Apple, describes the computer as a tool that acts like a **bicycle for the mind**. From our perspective, this is trying to capture the role of the computer as a tool to *accelerate our thoughts and imaginations*. This sits at the root of the answer to why computers are so useful and so connected to our daily lives. If we can imagine a digital reality, with some constraints, we can create this reality within code.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ob_GX50Za6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Programs allow you to instruct the computer to build a reality - a conceptual model that contains the things you need to make the program do what you want. In a way, a program is a conceptual machine (a bicycle for the mind) with imaginary parts that can perform actions and interact with the real world. This conceptual machine accelerates the capability of your mind to a new level, just like a bicycle does for human movement.

Within programs, you build the *things* you need to achieve your objectives. These *things* are built upon information and instructions which can modify that information based on external stimuli. Programs can receive **inputs** from the real world with devices like buttons, mice, and sensors turning real-world information into digital values that can be used. Motors, displays, speakers, and other devices enable programs to then change things within the real world - we can think of these changes as the **outputs** of the program.

This capability makes computers very useful. If we can imagine a useful digital reality, and create this using programming tools, then this reality will exist within the computers running your program. Your code will get the computer to respond in meaningful ways to inputs, and generate meaningful changes in the real world (outputs).

*Learning to program will give you the skills and tools needed to create digital realities, giving you the tools to shape and harness the bicycle for the mind!*

## Digital Reality

*What do we mean by a "digital reality"?*

Let’s think about some computer programs you have interacted with. Take a word processor, for example. Within this, you can create documents, that contain paragraphs, sentences, words, images, and other resources.  None of these things exist within the computer, but we accept this reality. We can input values from the keyboard and use a mouse, touchscreen, or trackpad to interact with parts of a document. We can see documents on a screen, and print documents to paper to see them in the real world. This is the digital reality created by word processing software.

We can also think about things like banking. Banks run large financial systems, which operate within each bank's computer systems. We can see our accounts that contain our money, and although there is no money within any computer we accept this reality. We also interact with it by transferring to, or accepting funds from, others. These actions change values within these digital realities (programs), but no actual money moves in this process. We can use an ATM to withdraw money, and the computer will power motors within the machine to release actual money in response to changes within the digital reality. This demonstrates how these digital realities exist in and empower our day-to-day lives.

Every computer game you have played is also a digital reality. The characters of these games do not exist within the computer, but they *do* exist within the digital reality created by the program's code. These are great examples of purely fictional realities which we can create with computers. The rules of these realities are then things we can create to entertain people.

Hopefully you can see how powerful this makes computing, and how valuable it can be to understand how digital realities can be created. This understanding underpins any study you do in computing, and computing underpins many things within our lives. Understanding how programs work within the computer, and the things they are constructed from, will help you see how to make the most of these tools in any field.

## Digital Realities and Abstraction

Before we move on, we need to think a little about how these digital realities come into existence.

Generally, you will find that programming textbooks will describe programming in terms of **abstraction**. This comes from thinking about how a computer works and the process we use to create digital realities. To see this, we need to think about what a computer is.

A computer is an electronic device. It operates by controlling voltage through its circuits. Transistors enable us to create gates that control the current. Lots of gates are combined to form the processing units of the computer, where the flow of current can be controlled to achieve computations. Gates are also used to alter the flow of current through memory chips, controlling which parts of the chips retain, gain, or lose current. So, at this level of thinking, a computer is just electrical current flowing through a circuit.

*So how does this become a digital reality?*

The answer is: through **abstraction**. This is our ability to move above events and physical realities, and use our thoughts and imaginations to picture things in an *abstract* way.

Using abstraction, we can *imagine* that the presence of current at a certain location in the computer is a **1**, whereas an absence of current at that location is a **0**. This gives us a **binary** value. Individual binary values can be grouped to create larger values. Most modern computers are designed with groups of 64 binary values being their natural unit of data (64-bit computers).

Taking abstraction to the next level, we can use these binary values both to represent data within the computer, and control the computations occurring within its processors. One way we do this is by grouping binary values to represent a number. For example, 8 bits (a **byte**) gives us 256 (2<sup>8</sup>) unique values. Two common ways of interpreting the 256 unique values in a byte is as a number from 0 to 255, or a number from -128 to 127. The actual values of the 8 bits in both cases are the same, but the way we *interpret* them changes depending on the reality we are imagining. We can abstract this idea further, using bytes to represent real numbers (numbers with decimal points) with a fixed degree of accuracy, individual characters of text, colours of images, signals of audio, and basically anything else we can think of.

Abstracting further, we can combine individual values into entities like bank accounts, characters and levels in games, documents in a word processor, or any other *thing* we want to represent within the digital realities we are creating.

By using **abstraction** we can work at higher levels and avoid needing to think about the details of how everything actually works. We can spend our time picturing the reality we want to create and crafting the code needed to produce it.

_**This** is what software development is all about._

### Machine Code

In the real world, the processing components of our computers are made up of gates which control the flow of electrical current. Just like we abstracted electrical current into the idea of *data*, we can abstract electrical current into the idea of *instructions*. For this we again use binary values (0 or 1) and group them together. A group represents a single instruction to the computer, and all of the instructions together are called **machine code**. Each machine code instruction tells the computer to complete a basic computation - adding, subtracting, multiplying, dividing, comparing, or moving values. These very simple actions are performed very quickly, and can be used to create everything you have ever seen a computer do. However, most programs are not written using just these instructions - we need to use abstraction again to see how we can make more meaningful things.

Let’s explore the application of abstraction to the instructions we give computers. This will set the foundation for all of the programming you will learn.

#### Programming in Machine Code

The following snippet shows a chunk of the machine code for a small program. You can see that 1s and 0s are group together. These groups form the instructions followed by the computer when this program is executed. Programs can be written directly in machine code like this, but it is a time consuming task. The task is further complicated by the fact that machine code is unique to each kind of CPU. For example, x86 instructions differ from ARM instructions. This means that programming at this level is entirely dependent on the kind of processor that you are targeting.

```
...
0110 0111 0111 0010 0000 0000 0110 0011 0100 1110 0101 1111 0100 0001 0101 1000
0110 0111 0111 0010 0000 0000 0111 0110 0101 1111 0101 1111 0110 1001 0101 1111
...
```

No one wants to have to work at this level of detail, and fortunately you don't need to. Software developers have created tools to help us to work at higher levels of abstraction and create programs without having to think about low level details. These tools work by taking the code you write and doing the tedious work of converting that code to the machine code of the computer you want to run it on.

:::info

A **HexEditor** is a program that allows you to view the binary values of any file on your computer. You could use this to explore the machine code of any program you have. The following table maps the hexadecimal values to their 4-bit representations. For example, `A` in hexadecimal is the same as `1010` in binary, or the decimal value 10.

  |Binary |  Hex  | Binary |  Hex  | Binary |  Hex  | Binary |  Hex
  --------|-------|--------|-------|--------|-------|--------|-------
  | 0000  | **0** |  0001  | **1** |  0010  | **2** |  0011  | **3**
  | 0100  | **4** |  0101  | **5** |  0110  | **6** |  0111  | **7**
  | 1000  | **8** |  1001  | **9** |  1010  | **A** |  1011  | **B**
  | 1100  | **C** |  1101  | **D** |  1110  | **E** |  1111  | **F**

:::

### Assembly

The next level of abstraction up from machine code is called **assembly**, or **assembler code**. At this level, machine code instructions are given symbolic names that are a bit more understandable for humans. For example, the code `0000 0011` may be given the symbolic name `add`.

Programs written in this language cannot be executed directly by the computer, because they aren't in machine code. Instead, assembler code must be converted to machine code by a program called an **assembler**. This program reads the instructions from the assembler code and outputs machine code. So, in our example, anywhere the assembler encounters `add` in the code it would output `0000 0011`.

#### Programming in Assembly

The following snippet shows an example of some assembler code. This is the assembler code that was used to generate the machine code we showed you above. The machine code was 13,344 bytes in size, where the same program in assembler code is only 658 bytes. Before this program can be executed, we need the assembler to read these 658 bytes and translate them into the equivalent machine code.

```asm
.cstring
LC0:
  .ascii "Hello\0"
  .text
.globl _main
_main:
  pushl	%ebp
  movl	%esp, %ebp
  pushl	%ebx
  subl	$20, %esp
  call	___i686.get_pc_thunk.bx 
"L000001$pb":
  leal	LC0-"L000001$pb"(%ebx), %eax
  movl	%eax, (%esp)
  call	L_write_line$stub
  addl	$20, %esp
  popl	%ebx
  popl	%ebp
  ret
```

From a programmer's perspective, assembler code is much easier to work with than machine code. There are still some issues though. Firstly, assembly is bound to the instruction set of the CPU that you are targeting, meaning that if you want to support other kinds of CPU you will need to rewrite the program. The other main issue with assembler code is that while it is more understandable, you are still working with the primitive instructions of the CPU. Working at this level takes considerable effort to write even simple programs.

Assembly languages were first developed in the 1950s and were known as **second generation** programming languages. This step forward does make programming easier, but we can use abstraction again and move to a higher level of thinking to achieve more with less effort.

### Source Code and the Compiler

The next step in programming language was to make languages even more human readable. These languages, known as **third generation languages**, use move advanced programs than assemblers to convert their instructions into machine code. Programs written in these languages have their code converted to machine code by a **compiler** or **interpreter**.

A **compiler** is a program that converts **source code** into machine code and saves it as an executable file called a *program*. The program can then be executed independent of the compiler and the source code. An **interpreter** skips the intermediate steps of translating and saving all of the machine code in advance, and just executes the code as the program is read. This is slower, and means you can't run the program without also having the interpreter, but it does give you additional flexibility that can be hard to achieve otherwise.

In this journey we will focus on compiled languages.

Internally, a compiler will perform a number of steps:

1. **Preprocessing**: The compiler reads your code. This may involve some processing to do things like ignoring comments, which are notes written in your code files for the benefit of programmers.
1. **Compiling**: The compiler coverts your code into assembly instructions and outputs an assembly program.
1. **Assembling**: The assembly program is converted into machine code and stored in **object files**.
1. **Linking**: The compiler uses a **linker** to join together the machine code of your program with other machine code from programming libraries your program refers to. It then outputs an executable program.

At the end of this process you have an executable that you can run on your computer.

#### Programming with a Third Generation Language

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

Programs written in a third generation programming language are much easier to understand than their assembler or machine code equivalents. It is a more portable form of code, as it can be compiled to run on different types of CPU. Most modern programming languages are third generation languages.

The code that a programmer writes in these languages is called **source code**. Typically, source code is saved into a text file with a file extension that helps identify the language it is written in. For example, programs written in the C++ language are saved into files with a `.cpp` file extension. C# programs are saved into files with a `.cs` extension, Python in `.py` and so on.

## Abstracting further

*Can we abstract things further?*

Programming langauges haven’t evolved to higher levels of abstraction. Instead, we create our own abstractions within them. To communicate our abstractions we can use visual representations such as flow charts, sequence diagrams, class diagrams, and other visual notations. These help us to convey our ideas and thoughts about the digital realities that we are creating.

So, now it comes to us. The tools you will learn on your journey make it possible to create the things we need within the computer to construct whatever digital reality we want. As we learn the tools of programming and use them to build software, we are creating the next levels of abstraction.
