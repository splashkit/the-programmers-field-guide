---
title: Pointers and References
sidebar:
    label: " - References"
---

Pointers represent the underlying mechanism used to refer to other values in memory. These are always just simple integer values that store the address of a location in memory. As this is a number, things like pointer arithmetic are possible.

While these things are possible, most languages have moved away from these possibilities, and replaced pointers with references. So what is the difference between a pointer and a reference?

## Pointers vs References

Pointers and references both store the address of another value in memory. They are both used to refer to another value.

Pointers require the developer to work with the address directly, while the compiler takes care of this with references. With a pointer, you need to manually get the address and store it in the pointer variable, and you need to dereference the pointer to access its value. With a reference, the compiler takes care of this for you allowing you to access it like a standard variable. This makes references safer than pointers, making it less likely to result in errors that cause the program to crash.

In C/C++ references are more limited than in other languages, so you generally need to mix the use of pointers and references, When we go back to languages like C#, references are an integral part of the way the languages work.
