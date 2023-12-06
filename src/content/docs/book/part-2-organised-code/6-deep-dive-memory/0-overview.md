---
title: "Overview"
---

So far data has been limited by the constraints of the stack. With the stack, the compiler must know how much space to allocate to each variable ahead of time. You are limited to working with a fixed number of values, whether those values are stored in a number of variables or stored in an array. This constraint is not a problem for small programs, but most programs will require the flexibility to work with a variable number of data elements.

This chapter introduces the tools needed to dynamically allocate additional memory for your program to use. With these tools *you* will be able to get space in memory for your program to use as you need it, and the tools you can use to give back this memory when you no longer need it.

Using these tools you will be able to go beyond the limitations of the stack, with greater flexibility and the ability to access larger amounts of memory.

## Concepts related to memory management

The chapter introduces the following building blocks:

- Heap
- Using pointers to access the heap

You 

- Allocate memory
- Free memory
- 