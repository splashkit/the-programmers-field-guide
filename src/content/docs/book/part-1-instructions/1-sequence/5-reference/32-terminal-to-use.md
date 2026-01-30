---
title: Terminal procedures to use
sidebar:
    label: " - Terminal procedures"
---

Although the C++ standard library contains procedures to print data to the terminal, we will use those provided by SplashKit as they are more similar to equivalent procedures in other programming languages. So, to interact with the user via the terminal you will need the following using directive:

```c++
#include "splashkit.h";
```

When you want to display something on the terminal, you use either the `write_line` or `write` procedure. There are lots of different versions of these procedures which will allow you to pass many values to be output -- so we can think of these as having the following signatures, where `...` is replaced with data of the different basic [data types](/book/part-1-instructions/1-sequence/5-reference/15-type/) (integers, numbers, text):

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
