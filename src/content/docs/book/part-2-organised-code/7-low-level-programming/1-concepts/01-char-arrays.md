---
title: Character aarrays (low-level strings)
---

## Concept

You've been using strings in C# and C++ for a little while now. Strings are great, they allow us to read, write, manipulate and store textual information. But how do they actually work? How does a computer's memory actually store and manipulate textual information? And how can we do all of this in a low-level programming language like C/C++?

Earlier, middle-level programming languages like C/C++ didn't have a `string` type! Instead, they utilise simple, existing language features and data types to represent strings. in C/C++, a `char[]` (character array) is used. Before we dive deep into character arrays, let's take a look at the `char` data type.

## The `char` data type

in C/C++, chars are just 8-bit integers (or a single byte) used to represent a single character. let's take a look at an 8-bit integer:

## `01001010`

`01001010` is a binary number. It's made up of 8 bits, each of which can be either a `1` or a `0`. To arrive at the decimal integer value it is storing, we start at the right-hand side and work our way left, doubling the value of each bit as we go. If the bit is a `1`, we add the value to our total. If the bit is a `0`, we don't add anything. Let's take a look at the above binary number:

| 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0   | 1   | 0   | 0   | 1   | 0   | 1   | 0   |

So, to arrive at the decimal value of the above binary number, add columns 2, 8, 64 together to arrive at 74. To convert this integer to it's corresponding character, we must then consult the [ASCII table](https://www.asciitable.com/).

## The ASCII table

The ASCII, standing for American Standard Code for Information Interchange, is a character encoding standard for electronic communication. The ASCII table is a standardised lookup table that maps integers to charactersm and is used by all modern computers. It's is a great example of a low-level programming construct as it's a simple, efficient way to map integers to characters. Let's take a look and see what our binary sequence `01001010` maps to:

![Alt text](../ascii.svg)

So we consult our ASCII table, and find that 74 maps to the character `J`! So, the binary number `01001010` is the integer `74`, which is the character `J`! We now have a way to go from `0`s and `1`s to characters!

Now that we know how to store a single character in memory, let's take a look at how we can store a *string* of characters in memory.

## The char[] (character array)

In C/C++, arrays are a contiguous block of memory used to store multiples of a particular data type. By storing an array of characters, we are storing an array of 8-bit integers that map to characters in the ASCII table.

<!-- Some diagram on this -->

## Strings are dynamic

One challenge with strings, is that we often need to store strings of varying lengths. For example, the string `"Hello, world!"` is 13 characters long, whereas the string `"Hello, world, my name is Bob!"` is 27 characters long. If we were to store these strings in a `char[]` array, we would need to know the maximum length of the string before we create the array. This is not ideal, as we often don't know the length of a string before we create it, as the user may enter it at run-time.

There are a few ways to solve this problem, but the simplest is to allocate a block of memory that is large enough to store the largest string we expect to encounter. This is called a *statically allocated* string. Let's take a look at a statically allocated string in C/C++:

```c
#include <stdio.h>

// define a constant for the maximum length of our string
#define MAX_STRING_LENGTH 50

int main(void) {
    // request a block of memory to store a string.
    // the amount of memory requested is the size of a char (8 bits) * the maximum length of our string (50)
    // so we're requesting 400 bits of memory
    // we then assign the charracters ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!'] to the memory block
    char myString[MAX_STRING_LENGTH];
    myString[0] = 'H';
    myString[1] = 'e';
    myString[2] = 'l';
    myString[3] = 'l';
    myString[4] = 'o';

    // print the string (char[]) to the terminal
    printf("myString: %s\n", myString);

    return 0;
}
```

So great! this program should print out "Hello" to the terminal right!?

Well, it will, but we have a problem. How can the C programming language know that the "o" was the final character of that string, if the array has 50 characters? The remaining memory is still allocated to our program and could contain a valid character, or some garbage data.

## The null terminator

In lower-level langauges like C/C++, efficiency is the name of the game. As such, arrays do not store their length, and it is generally up to us as programmers to keep track of how large our arrays are. This is a trade-off, as it allows us to be more efficient with memory, but it also means we need to be more careful when working with arrays.

Because strings are so common, the C/C++ languages have a special way of handeling how we can mark the end of a string, and it is by simply introducing a special character called the *null terminator* (represented by the character `\0`). The null terminator is used to indicate the end of the string, and does not get printed to the terminal. Let's take a look at how we can use the null terminator to solve our problem:

```c
#include <stdio.h>
#define MAX_STRING_LENGTH 50

int main(void) {

    char myString[MAX_STRING_LENGTH];
    myString[0] = 'H';
    myString[1] = 'e';
    myString[2] = 'l';
    myString[3] = 'l';
    myString[4] = 'o';
    myString[5] = '\0';

    // print the string (char[]) to the terminal
    printf("myString: %s\n", myString);

    return 0;
}
```

So great! this program should print out "Hello", and printf will know that the string ends at the "o"!

The great news is that shorthand string construction automatically adds a null terminator for us:

```c
#include <stdio.h>
#define MAX_STRING_LENGTH 50

int main(void) {
    char myString[MAX_STRING_LENGTH] = "Hello"

    printf("myString: %s\n", myString);

    return 0;
}
```

The above program will automatically have a null terminator added to the end of the string!