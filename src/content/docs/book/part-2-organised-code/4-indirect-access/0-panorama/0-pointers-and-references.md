---
title: Pointers and References
---

This chapter is all about indirectly accessing values. This is achieved by having variables that store a location of another value in memory. Prior to using indirect access, you always had to access a value directly via the variable where the value in stored. Using indirect access, it is now possible to also access these values from other variables - ones that store the address of the variable.

Here is an illustration of how this works:


Indirect access in C++ is achieved using references or pointers. 

:::note

- A reference is a kind of variable, one that refers to another location in memory.
- In C++, when you read or write to the reference, it actually updates the location it refers to.
- You can, therefore, use a reference to update values passed to it. This is useful for parameters, allowing you to create procedures that update values in memory.

:::