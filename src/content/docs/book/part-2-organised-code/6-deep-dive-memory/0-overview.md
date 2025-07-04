---
title: "Overview"
---

So far data has been limited by the constraints of the stack. With the stack, the compiler must know how much space to allocate to each variable ahead of time. You are limited to working with a fixed number of values, whether those values are stored in a number of variables or stored in an array. This constraint is not a problem for small programs, but most programs will require the flexibility to work with a variable number of data elements.

This chapter introduces the tools needed to dynamically allocate additional memory for your program to use. With these tools *you* will be able to get space in memory for your program to use as you need it, and the tools you can use to give back this memory when you no longer need it.

Using these tools you will be able to go beyond the limitations of the stack, with greater flexibility and the ability to access larger amounts of memory.

## Concepts related to memory management

This chapter introduces these new ideas:

- The [heap](/book/part-2-organised-code/6-deep-dive-memory/2-trailside/01-heap) is an area in memory that the operating system reserves for dynamic memory allocation.

To access this you may need to revise:

- Review how memory is allocated on the [stack](/book/part-2-organised-code/2-organising-code/2-trailside/05-the-stack).
- [Pointers](/book/part-2-organised-code/4-indirect-access/2-trailside/02-00-pointer) to allow you to indirectly access things values in memory.
- [Arrays](/book/part-2-organised-code/5-working-with-multiples/2-trailside/00-00-array) so that you can store and work with multiple values with ease.

We will see the instructions needed to:

- [Allocate memory](/book/part-2-organised-code/6-deep-dive-memory/2-trailside/03-0-allocating-memory) for our program to use.
- [Free memory](/book/part-2-organised-code/6-deep-dive-memory/2-trailside/04-freeing-memory) to return memory you have been allocated when you have finished with it.

We will also explore revisit the issues around the use of pointers, and explore the new problems that arise from being responsible for memory allocation.
