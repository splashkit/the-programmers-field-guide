---
title: Character Arrays - char[]
sidebar:
    label: " - Character Arrays"
banner:
    content: |
        Advanced topic! You may want to skip this and return later...
---

In C/C++, arrays are a contiguous block of memory used to store multiples of a particular data type. By storing an array of characters, we are storing an array of 8-bit integers that map to characters in the ASCII table.

<!-- Some diagram on this -->

The following code creates two c-strings (char arrays). The first is initialised with "Hi", but has space for twenty characters. The second is initialised and has the space to store "Hello".

```cpp
#include "splashkit.h"

int main()
{
  char str_a[10] = "Hi";
  char str_b[] = "Hello";

  write_line(str_a); // prints "Hi"
  write_line(str_b); // prints "Hello"

  // Let's change some of the characters in str_a
  str_a[2] = "!";
  write_line(str_a); // prints "Hi!"

  str_a[8] = "!";
  write_line(str_a); // still prints "Hi!"
}
```

When you run this, it will output the following:

```
Hi
Hello
Hi!
Hi!
```

How does `write_line` know that that `str_a` only had two characters? The array had ten characters, and yet it only printed those two. And then when we assigned a character straight after the `i`, `write_line` printed it as well! Yet it didn't print a character assigned further into the array.

Here's how the memory inside `str_a` looked at the end - notice anything interesting?

|Index | 0  | 1   | 2  | 3 | 4 | 5 | 6 | 7 | 8  | 9 |
|------|----|-----|----|---|---|---|---|---|----|---|
|Value | 72 | 105 | 33 | 0 | 0 | 0 | 0 | 0 | 33 | 0 |
|Letter| H  | i   | !  |   |   |   |   |   |  ! |   |

Let's have a look at how this works.
