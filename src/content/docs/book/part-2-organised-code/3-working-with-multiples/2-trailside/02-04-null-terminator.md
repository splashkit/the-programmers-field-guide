---
title: The Null Terminator
sidebar:
    label: " - Null Terminators"
---

One challenge with strings, is that we often need to store strings of varying lengths. For example, the string `"Hello, world!"` is 13 characters long, whereas the string `"Hello, world, my name is Bob!"` is 27 characters long. If we were to store these strings in a `char[]` array, we would need to know the maximum length of the string before we create the array. This is not ideal, as we often don't know the length of a string before we create it, as the user may enter it at run-time.

There are a few ways to solve this problem, but the simplest is to allocate a block of memory that is large enough to store the largest string we expect to encounter. This is called a *statically allocated* string. Let's take a look at a statically allocated string in C/C++:

```c
#include <stdio.h>

// define a constant for the maximum length of our string
const int MAX_STRING_LENGTH = 50;

int main(void)
{
  // request a block of memory to store a string.
  // the amount of memory requested is the size of a char
  // (8 bits) * the maximum length of our string (50)
  // so we're requesting 400 bits of memory
  char my_string[MAX_STRING_LENGTH];

  // Now we can assign the characters ['H', 'e', 'l', 'l', 'o']
  my_string[0] = 'H';
  my_string[1] = 'e';
  my_string[2] = 'l';
  my_string[3] = 'l';
  my_string[4] = 'o';

   // print the string (char[]) to the terminal
  printf("my_string: %s\n", my_string);
  
  return 0;
}
```

So great! This program should print out "Hello" to the terminal. Right?!

Well, it will, but we have a problem. How can the C programming language know that the "o" was the final character of that string, if the array has 50 characters? The remaining memory is still allocated to our program and could contain valid characters, or some garbage data.

To get around this issue, the C language decided to add a special terminator character to the string to indicate where it ends.

## The null terminator

In C/C++, arrays do not store their lengths, and it is generally up to us as programmers to keep track of how large our arrays are. This is a trade-off, as it allows us to be more efficient with memory, but it also means we need to be more careful when working with arrays.

Because strings are so common, the C/C++ languages have a special way of handling how we can mark the end of a string, and it is by simply introducing a special character called the *null terminator* (represented by the character `\0`). The null terminator is the very first ASCII character at integer 0, and is used to indicate the end of the string. It does not get printed to the terminal, but tells any code working with the array to stop there. Let's take a look at how we can use the null terminator to solve our problem:

```c
#include <stdio.h>
const int MAX_STRING_LENGTH = 50;

int main(void) 
{
    char my_string[MAX_STRING_LENGTH];
    my_string[0] = 'H';
    my_string[1] = 'e';
    my_string[2] = 'l';
    my_string[3] = 'l';
    my_string[4] = 'o';
    my_string[5] = '\0';

    // print the string (char[]) to the terminal
    printf("my_string: %s\n", my_string);

    return 0;
}
```

This program should print out "Hello", and printf will know that the string ends when it gets to the `'\0'` after the "o"!

The great news is that string constants automatically include the extra null terminator, so "Hello" is 6 characters. The five we can see, and the null terminator. 

C also include shorthand ways to initialise strings using string constants, which therefore automatically add the null terminator for us:

```c
#include <stdio.h>
const int MAX_STRING_LENGTH = 50;

int main(void)
{
    char my_string[MAX_STRING_LENGTH] = "Hello";

    printf("my_string: %s\n", my_string);

    return 0;
}
```

The above program will automatically have a null terminator added to the end of the string!

:::caution

The idea of using a null terminator is the source of a number of cybersecurity issues. Watch out for any C/C++ function that accepts a char[] and not its size. Relying on the presence of the null terminator makes the code susceptible to unexpected behaviour if you can somehow remove the terminator.

:::
