---
title: Character Arrays - char[]
sidebar:
    label: " - Character Arrays"
---

In C/C++, arrays are a contiguous block of memory used to store multiples of a particular data type. By storing an array of characters, we are storing an array of 8-bit integers that map to characters in the ASCII table.

<!-- Some diagram on this -->

The following code creates two c-strings (char arrays). The first is not initialised, and has space for twenty characters. The second is initialised and has the space to store "hello".

```cpp
#include <stdio.h>

int main()
{
  char name[20];
  char other[] = "Hello";

  printf("Enter your name: ");
  scanf("%s", name);

  printf("%s %s\n", other, name);
}
```

When you run this, it will output a hello message that includes the user's name. For example:

```
Enter your name: Andrew
Hello Andrew
```

How does the `printf` function know the number of characters in the user's name? The array had twenty characters, and yet it only printed the six characters from the name.

Let's have a look at how this works.
