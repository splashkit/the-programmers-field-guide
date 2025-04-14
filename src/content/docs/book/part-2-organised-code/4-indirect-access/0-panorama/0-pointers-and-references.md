---
title: Pointers and References
---

This chapter is all about indirectly accessing values. This is achieved by having variables that store a location of another value in memory. Prior to using indirect access, you always had to access a value directly via the variable where the value in stored. Using indirect access, it is now possible to also access these values from other variables.

Indirect access makes it possible to set up relationships between entities in your programs, and to use parameters to update passed in values.

Here is an illustration of how this works:

![Visualisation of indirect access to value](./images/reference-pano.png)

Indirect access in C++ is achieved using **references** or **pointers**. A pointer is very flexible, and allows you to change what it points to as well as allowing you to use the pointer to access the value it refers to. This makes pointers very powerful, but also very dangerous. References are safer, but less flexible. 

:::note

- A reference is a kind of variable, one that refers to another location in memory.
- In C++, when you read or write to the reference, it actually updates the location it refers to.
- This is useful for parameters, allowing you to create procedures that update values in memory.
- Pointers store a memory address - you can use this to refer to a value in memory.
- The `&` operator is used to get the address of a variable.
- With pointers, you need to use the `*` operator to read the value it refers to.

:::

## Example

The following demonstrates accessing a string value directly via its variable, and indirectly via a reference and also via a pointer.

```cpp
#include "splashkit.h"

int main()
{
    string name = "Test name";
    string &ref = name; //string & is a reference
    string *ptr = &name; //string * is a pointer. & gets name address

    // Another string variable
    string other = "other";

    // Read the name in 3 different ways
    write_line(name);
    write_line(ref);
    write_line(*ptr); //Use * to read the value the pointer refers to

    // Update via reference
    ref = "test update";
    write_line(name);

    // Update via a pointer
    *ptr = "ptr update"; // Use * to update the value referred to
    write_line(name);

    // You cannot change what the reference refers to...

    // but you can change what ptr refers to
    ptr = &other; // Without * we can change what ptr refers to

    // Now when we de-reference ptr we access `other`
    write_line(*ptr);

    return 0;
}
```

Running this will output:

```plaintext
Test name
Test name
Test name
test update
ptr update
other
```
