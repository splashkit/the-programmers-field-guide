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

When you want to display something on the terminal, you use either the `write_line` or `write` procedure. There are lots of different versions of these procedures which will allow you to pass many values to be output - so we can think of these as having the following signatures, where `...` is replaced with data of the different basic data types (integers, numbers, text):

```c++
void write_line(...);
void write(...);
```

These procedures differ only slightly. `write_line` writes your text, and then starts a new line. `write` on the other hand just stays on the same line. Here's a table showing the difference:
<table style="margin: auto; display: table;">
  <tr><th>Example code</th><th>Output</th></tr>
  <tr><td>

  ```c++
  write_line("A");
  write_line("B");
  write_line("C");
  ```

  </td><td>

  ```txt
  A
  B
  C
  ```

  </td></tr><tr><td>

  ```c++
  write("A");
  write("B");
  write("C");
  ```

  </td><td>

  ```txt
  ABC
  ```

  </td></tr>
</table>

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
