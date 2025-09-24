---
title: Machine Code
---

In the real world, the processing components of our computers are made up of gates which control the flow of electrical current. Just like we abstracted electrical current into the idea of *data*, we can abstract electrical current into the idea of *instructions*. For this we again use binary values (0 or 1) and group them together. A group represents a single instruction to the computer, and all of the instructions together are called **machine code**. Each machine code instruction tells the computer to complete a basic computation - adding, subtracting, multiplying, dividing, comparing, or moving values. These very simple actions are performed very quickly, and can be used to create everything you have ever seen a computer do. However, most programs are not written using just these instructions - we need to use abstraction again to see how we can make more meaningful things.

Let’s explore the application of abstraction to the instructions we give computers. This will set the foundation for all of the programming you will learn.

## Programming in Machine Code

The following snippet shows a chunk of the machine code for a small program. You can see that 1s and 0s are grouped together. These groups form the instructions that are followed by the computer when this program is executed. Programs can be written directly in machine code like this, but it is a time consuming task. The task is further complicated by the fact that machine code is unique to each kind of [CPU](https://en.wikipedia.org/wiki/Central_processing_unit). For example, instructions for CPUs using the x86 architecture differ from instructions for CPUs using the ARM architecture. This means that programming at this level is entirely dependent on the kind of processor that you are targeting.

```
...
0110 0111 0111 0010 0000 0000 0110 0011 0100 1110 0101 1111 0100 0001 0101 1000
0110 0111 0111 0010 0000 0000 0111 0110 0101 1111 0101 1111 0110 1001 0101 1111
...
```

It is extremely difficult to work at this level of detail, and fortunately you don't need to. Software developers have created tools to help us to work at higher levels of abstraction and create programs without having to think about low level details. These tools work by taking the code you write and doing the tedious work of converting that code into the machine code of the computer you want to run it on.

:::tip[Hex Editor]

A **HexEditor** is a program that allows you to view the binary values of any file on your computer. You could use this to explore the machine code of any program you have. The following table maps the hexadecimal values to their 4-bit representations. For example, `A` in hexadecimal is the same as `1010` in binary, or the decimal value 10.

  |Binary |  Hex  | Binary |  Hex  | Binary |  Hex  | Binary |  Hex
  --------|-------|--------|-------|--------|-------|--------|-------
  | 0000  | **0** |  0001  | **1** |  0010  | **2** |  0011  | **3**
  | 0100  | **4** |  0101  | **5** |  0110  | **6** |  0111  | **7**
  | 1000  | **8** |  1001  | **9** |  1010  | **A** |  1011  | **B**
  | 1100  | **C** |  1101  | **D** |  1110  | **E** |  1111  | **F**

:::