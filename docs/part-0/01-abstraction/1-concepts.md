---
sidebar_position: 2
---

# Concepts

## Programs, what are they?

Computers are everywhere, helping enhance many aspects of our lives. There are computers embedded within many everyday items, most people carry around a computer in their pocket and possibly another on their wrist, and we interact with software for so many things each day.

*Why are computers everywhere?*

In the video below, Steve Jobs, the co-founder of Apple, describes the computer as a tool that acts like a **bicycle for the mind**. From our perspective, this is trying to capture the role of the computer as a tool to *accelerate our thoughts and imaginations*. This sits at the root of the answer to why computers are so useful and so connected to our daily lives. If we can imagine a digital reality, with some constraints, we can create this reality within code and have it accelerated by computing - which can quickly and reliably undertake the actions we coded within the software.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ob_GX50Za6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Programs allow you to instruct the computer to build a reality - a conceptual model that contains the things you need within the program to make it do what you want. In a way, this is a conceptual machine (a bicycle for the mind) with imaginary parts that can perform actions and interact with the real world in the way we want. Accelerating the capability of your mind to a new level, like a bicycle does for human movement.

Within these programs, you build the *things* you need to achieve your objectives, *things* built upon information and instructions to modify that information based on external stimuli. Programs can receive **inputs** from the real world, with buttons, mice and sensors turning real-world actions and values into digital values that can be used. With motors, displays, speakers, and other devices enabling programs to change things within the real world - which we can think of as the **outputs** of the program.

This capability makes computers very useful. If we can imagine a useful digital reality, and create this using programming tools, then this reality will exist within the computers running your program. Your code will get the computer to respond in meaningful ways to inputs, and generate meaningful changes in the real world (outputs).

*Learning to program will give you the skills and tools needed to create digital realities. Giving you the tools to shape harness the bicycle for the mind!*

## Digital Reality

*What do we mean by a digital reality?*

Let’s think about some computer programs you will have interacted with. Take a word processor, for example. Within this, you can create documents, that contain paragraphs, sentences, words, images, and other resources.  None of these things exist within the computer, but we accept this reality. We can input values from the keyboard and use a mouse, touchscreen, or trackpad to interact with parts of the documents. We can see the documents on a screen, and print documents to paper to see them in the real world. This is the digital reality created by word processing software.

We can also think about things like banking. Banks run large financial systems, which operate within each bank's computer systems. We can see our accounts, that contain our money - though there is no money within any computer. We accept this reality and can interact with it by transferring to or accepting funds from, others. These actions change values within these digital realities (programs) - no actual money moves in this process. We can use an ATM to withdraw money - where the computer powers motors within the machine to release actual money in response to changes within the digital reality. This demonstrates how these digital realities exist and empower our day-to-day lives.

Every computer game you have played is also a digital reality. The characters of these games do not exist within the computer, but **they do exist** within the digital reality created by the program's code. These are great examples of purely fictional realities which we can create with computers. The rules of these realities are then things we can create to entertain people.

Hopefully, you can see how powerful this makes computing, and how valuable it can be to understand how these realities can be created. This understanding underpins any study you do in computing, and computing underpins so many things within our lives. Understanding how programs work within the computer, and the things are constructed from, will help you see how to make the most of these tools in whichever field you work.

### Digital Realities and Abstraction

*Before we move on, we need to think a little about how these digital realities come into existence.*

Generally, you will find that programming textbooks will describe programming in terms of **abstraction**. This comes from thinking about how a computer works and the process we use to create digital realities. To see this, we need to think about what a computer is.

A computer is an electronic device. It operates by controlling voltage through its circuits. Transistors enable us to create gates that control where the current. 

The processing units of the computer combine together lots of gates that control the flow of current to achieve desired computations. Gates are also used to control the flow of current through memory chips, controlling which parts of the chips retain, gain, or lose current. So, at this level, a computer is electrical current flowing through a circuit.

*So how does this become a digital reality?*

The answer is - through **abstraction**. This is our ability to move above events, and physical realities, and use our thoughts and imaginations to picture things in an *abstract* way.

Using abstraction, we can *imagine* that the presence of current at a certain location in the computer as a **1**, whereas absence is **0** - giving us a binary value. Individual binary values can be grouped to create larger numeric values - with most modern computers being designed with groups of 64 binary values being their natural unit of data (64-bit computers).

Taking abstraction to the next level, we can use these binary values both to represent data within the computer and control the computations occurring within the processors.

Grouping binary values gives us a number - for example 8 bits (a **byte**) gives us 256 unique values. An integer with a range of 0 to 255 or -128 to 127 if signed. Each additional bit doubles this range. We can abstract these further to represent real numbers, with a fixed degree of accuracy, and map numbers to characters for text, colours for images, or signals for audio for example.

### Machine Code

The design of the processor allows it to controls the flow of current in response to the current within a certain part of the processor - effectively giving us a value to represent each instruction the computer can perform. We can abstract this to a unique binary value for each instruction - the **machine code** of the computer. These instructions can now be seen as performing computations - adding, subtracting, multiplying, dividing, comparing, or moving values within the computer. These very simple actions are performed very quickly, and can be use to create everything you have ever seen a computer do.

#### Programming in Machine Code

The followino code shows a chunk of the machine code for a small program. These 1s and 0s are the codes used to instruct the computer when this program is executed. Programs can be written directly in machine code, but this is a time consuming task. This is further complicated by the fact that machine code is unique to each kind of CPU - x86 instructions differ from ARM instructions for example. This means that programming at this level is entirely dependent on the kind of processor that you are targeting.

```
...
0110 0111 0111 0010 0000 0000 0110 0011 0100 1110 0101 1111 0100 0001 0101 1000
0110 0111 0111 0010 0000 0000 0111 0110 0101 1111 0101 1111 0110 1001 0101 1111
...
```

No one wants to have to work at this level of details, and fortunately you do not need to. Software developers have created tools to allow us to work at higher levels of abstraction. This allows us to create programs without having to think about these low level details. These tools work by taking the code you write, and do the hard (but entirely procedural) work of converting that to the machine code of the computer you want to run it on.

:::info

A **HexEditor** is a program that allows you to view the binary values of any file on your computer. You could use this to explore the machine code of any program you have. The following table maps the hexadecimal value to its 4-bit representation. For example, `A` is `1010`, the decimal value 10.

   Binary    Hex    Binary    Hex    Binary    Hex    Binary    Hex
  -------- ------- -------- ------- -------- ------- -------- -------
    0000    **0**    0001    **1**    0010    **2**    0011    **3**
    0100    **4**    0101    **5**    0110    **6**    0111    **7**
    1000    **8**    1001    **9**    1010    **A**    1011    **B**
    1100    **C**    1101    **D**    1110    **E**    1111    **F**

:::

### Assembly

The next level of abstraction up from machine code is called **Assembly**, or **Assembler Code**. Here the numeric machine code instructions are given symbolic names that are, to some degree, more understandable for humans. For example, the code `0000 0011` may be given the symbolic name `add`.

Programs written in this language cannot be executed directly by the computer, it isn't machine code. Instead, assembler code must be converted to machine code by a program called an **Assembler**. This program reads the instructions from the assembler code and outputs machine code. So, for example, anywhere it encounters `add` in the code it can output `0000 0011`.

#### Programming in Assembly

The following code shows an example of some assembler code. This is the assembler code that was used to generate the machine code above. The machine code was 13,344 bytes in size, where the same program in assembler code is only 658 bytes. The assembler reads these 658 bytes, combines it with instructions from program libraries, and outputs machine code.

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

From a programmer's perspective, assembler code is much easier to work with than machine code, though there are still issues with the use of assembler code. Firstly Assembly is bound to the instruction set of the CPU that you are targeting, meaning that if you want to support other kinds of CPU you will need to rewrite the program. The other main issue with assembler code is that while it is more understandable, you are still working with the primitive instructions of the CPU. Working at this level takes considerable effort to write even simple programs.

Assembly languages were first developed in the 1950s, and were known as a **Second Generation** programming languages. This step forward did make programming easier, but the tools have advanced since then and now we can work at an even higher level of abstraction.

### Source Code and the Compiler

The next step in programming language evolution moved from machine level instructions to something more human readable. These languages, known as **Third Generation Languages**, use move advanced programs than assemblers to convert their instructions into machine code. Programs written in these languages have their code converted to machine code by a **compiler**.

A **Compiler** is a program that converts **Source Code** into machine code that is saved into an executable file called a *Program*. The program can then be executed independent of the compiler and the source code.

Internally, a compiler will perform a number of steps:

1.  **Preprocessing**: The code is read from your source code files.
    This may involve some processing of the text itself, which includes
    things like ignoring any comments in the code.

2.  **Compiling**: The code is then converted into assembly
    instructions, and an assembly program is output.

3.  **Assembling**: The assembly version of the program is converted
    into machine code, and stored in **object files**.

4.  **Linking**: In the final step the compiler uses a **Linker** to
    join together the machine code from your program, with other machine
    code you have used from the programming libraries. This then outputs
    an executable program.

#### Programming with a Third Generation Language

The following code is the source code use to build the machine code above.
This code describes a small program that can be used to output a message
to the command line.

```cpp
#include "splashkit.h"

int main()
{
    write_line("Hello");
    return 0;
}
```

This C++ program generates the assembler code, and machine code shown in the previous code listings. This code must be converted by the C++ compiler into machine code before it can be run. It is interesting to note the size of the C++ file: it is only 50 bytes! The compiler converts this 50 bytes into the 13,344 bytes of machine code.

Programs written in a third generation programming language are much easier to understand than their assembler or machine code counterparts. It is also possible that this code can be compiled to run on different types of CPU, making it more portable. Most modern programming languages are third generation programming languages.

The code that a programmer writes in these languages is called **Source Code**. Typically source code is saved into a text file with a file extension that helps identify the language it is written in. For example, programs written in the C++ language are saved into files with a `.cpp` file extension whereas C# programs are saved into files with a `.cs` extension, Python in `.py` and so on.


Abstracting further, we can combine these individual values into entities like bank accounts, characters and levels in games, documents in a word processor, or any other *thing* we want to represent within the digital realities we are creating.

Actions can also be abstracted, building from simple mathematical operations to become actions meaningful to the entities within our reality. We can transfer funds between bank accounts, move players within a game, add pages to documents, and any other action we want or need to perform within the reality we are creating.

By using **abstraction**, we can work at this higher level. Ignoring the details of how this works at the lower levels, at least most of the time. In this way, we spend our time picturing the reality we want to create and crafting the code needed to produce this.

_**This** is what software development is all about._