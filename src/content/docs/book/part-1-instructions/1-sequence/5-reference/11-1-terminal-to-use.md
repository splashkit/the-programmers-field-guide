---
title: Terminal procedures to use
sidebar:
    label: " - Terminal procedures"
---

To get started programming, you will need to know a few procedures that you can call. We want to keep things relatively simple, so we will limit ourselves to just a few procedures.

To interact with the user via the terminal you will need the following using directives:

```c++
#include "splashkit.h";
```

Then you will have access to the following procedures for interacting with using in the terminal:

```cs
// Output data to the terminal using
void write_line(...);
void write(...);
```

:::tip
These are procedure declarations - the code used to create a procedure. This code is in the library where these are made. You can call these in your code by using the procedure's name, and passing it the values it asks for.

For example:

```c++
/// This is the signature of write_line in the library
void write_line(string message);
```

To use it you would do something like:

```c++
// The procedure call -- passing in the message "Hello World"
write_line("Hello World");
```

:::

## Example

The following code outputs some text to the terminal.

```c++
#include "splashkit.h"

int main()
{
    write("1.");
    write("2.");
    write("3.");
    write_line();

    write_line("A.B.C.");
}
```
