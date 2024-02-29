---
title: Segmentation Fault
sidebar:
    label: " - Segmentation Fault"
---

![XKCD comic strip on segmentation faults https://xkcd.com/371/](https://imgs.xkcd.com/comics/compiler_complaint.png)
XKCD comic strip on [segmentation faults](https://xkcd.com/371/)

If you attempt to dereference a pointer and perform an action that is not permitted at that location in memory, this will result in a **segmentation fault**. This all relates to memory protection, and the safeguards that the operating system puts in place to protect memory access.

Programs should only access their own area of memory. This is not something that is inherent to digital systems. In fact, there is no reason why any part of memory cannot be interacted with at any time.

To get around this, the operating system puts in place memory protection safeguards that detect and signal inappropriate memory access. Let's explore a little of how this works so that we can understand errors that may occur.

## Address Space

The address space of a program is organised into different *segments*. We can consider the program as having the following areas in memory:

- Code Segment
- Data Segment
- Stack

The code segment contains the machine code instructions for the program. This should be read only. Global constants and variables are stored in the data segment. While the stack maintains local variables and the details necessary to facilitate function calls.

If you want to look into this in more detail, there is a short guide on geeks for geeks that looks into [memory layout of C programs](https://www.geeksforgeeks.org/memory-layout-of-c-program/).

## Pointers and Segmentation Faults

With pointers, the addresses in your pointer variables can refer to data within any of these segments or to areas that are not accessible to your program. Some of these areas you should not be able to read, and others you should not be able to read or write to.

Memory access is mediated by the operating system. Memory protection means that it can refuse to do what you ask. Attempting to read or write to memory that you should not be able to may result in a fault that will terminate your program.

The `nullptr` is one address that you cannot read from or write to. So when using pointers, where you know that some pointers may refer to *nothing*, you need to add guards to avoid attempting to read or write values from this location.

## Debugging Segmentation Faults

Finding and fixing segmentation faults requires you to find where you are accessing something via an invalid pointer. Fixing the issue usually requires adding in a guard to check against `nullptr` access, or ensuring that the right pointer value in passed in.

Going forward we are going to start using more pointers, and references in other languages, where these kinds of errors will pop up. When they occur, you are always just searching through the code for the spot where you attempt to use a pointer or reference and the variable does not have a valid value.


