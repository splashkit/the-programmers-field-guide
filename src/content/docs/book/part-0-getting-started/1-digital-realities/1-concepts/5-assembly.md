---
title: Assembly
---

The next level of abstraction up from machine code is called **assembly**, or **assembler code**. At this level, machine code instructions are given symbolic names that are a bit more understandable for humans. For example, the code `0000 0011` may be given the symbolic name `add`.

Programs written in this language cannot be executed directly by the computer, because they aren't in machine code. Instead, assembler code must be converted to machine code by a program called an **assembler**. This program reads the instructions from the assembler code and outputs machine code. So, in our example, anywhere the assembler encounters `add` in the code it would output `0000 0011`.

## Programming in Assembly

The following snippet shows an example of some assembler code. This is the assembler code that was used to generate the machine code we showed you in the [machine code](../4-machine-code) concept. The machine code was 13,344 bytes in size, where the same program in assembler code is only 658 bytes. Before this program can be executed, we need the assembler to read these 658 bytes and translate them into the equivalent machine code.

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

Although, from a programmer's perspective, assembler code is much easier to work with than machine code, there are still some challenges. Firstly, assembly is bound to the instruction set of the CPU that you are targeting, meaning that if you want to support other kinds of CPU you will need to rewrite the program. Secondly, while assembler code is more understandable, you are still working with the primitive instructions of the CPU, and at this level writing even simple programs takes considerable effort.

The assembly languages were first developed in the 1950s and are known as **second generation** programming languages. This step forward made programming easier, but we can use abstraction again and move to a higher level of thinking to achieve more with less effort.