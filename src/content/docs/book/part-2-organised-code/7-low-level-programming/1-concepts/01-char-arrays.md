---
title: Character arrays (low-level strings)
---

## Concept

You've been using strings in C# and C++ for a little while now. Strings are great, they allow us to read, write, manipulate and store textual information -- and if you think about most programs you use, they are full of text! But how do strings in C++ or C# actually work? How does a computer's memory store and manipulate textual information? And how can we do all of this in a low-level programming language like C/C++? Before we can answer these questions, let's take a quick look back at strings in C++.

## Strings recap

In C# and C++, strings are a standard data type that allows us to store textual data. We can create a string in C++ by using the `string` type which is included in the `<string>` header file, and use C++ language features like `cout`, or some helper functions from SplashKit to allow us to read and print string data to and from the user, let's take a look at a C++ program that uses the string type to read and print the user's name from the terminal:

```cpp
// gives us access to the string type
#include <string>
// gives us access to SplashKit helper functions
#include "splashkit.h"

int main() {
    // Read in the user's name from the terminal
    write_line("Please enter your name: ");
    string user_name = read_line();

    // print the name string back to the terminal
    write_line("The user's name is: " + user_name);

    return 0;
```

The above program may look simple, but we are using a variety of string-related functionality to achieve our goals which either come with the C++ standard string library, or the SplashKit library. Let's break down some of these functionalities:

* `string` is a data type that allows us to store textual data, and is included in the `<string>` header file. It describes the configuration of how textual data is stored in memory.
* `write_line()` is a SplashKit helper function that allows us to write a line of text to the terminal, it has to keep track of how long the string is.
* `read_line()` is a SplashKit helper function that allows us to read a line of text from the terminal, it's return type is `string`. It handles all of the memory management for us, and returns a valid `string` type that we can use in our C++ program.
* **string concatenation**: in the line `write_line("The user's name is: " + user_name);`, we are using the `+` operator to concatenate (join) two strings together. This is a common operation when working with strings, but is not functionality we should take for granted!

Now that we've shown you a quick recap of how we have used strings in C++ and C#, let's take a look back at how strings are represented in a low-level programming language like C/C++.

## Strings without the C++ String type

Older, middle-level programming languages like C/C++ didn't have a `string` type! Instead, they utilised simple, existing language features and data types to represent strings. If we think about what a string is, it is a simply a bunch of characters (`char`s) in a specific order. Peering into our toolbox, we realise we already have a way to store multiples of a given data type, arrays! And in C, a `char[]` (character array) is used to store strings. Before we dive deep into character arrays, let's first take a look at the `char` data type.

## The char data type

in C/C++, chars are just 8-bit integers (or a single byte) used to represent a single character. let's take a look at an 8-bit integer:

## 01001010

`01001010` is a binary number. It's made up of 8 bits, each of which can be either a `1` or a `0`. To arrive at the decimal integer value it is storing, we start at the right-hand side and work our way left, doubling the value of each bit as we go. If the bit is a `1`, we add the value to our total. If the bit is a `0`, we don't add anything. Let's take a look at the above binary number:

| 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0   | 1   | 0   | 0   | 1   | 0   | 1   | 0   |

So, to arrive at the decimal value of the above binary number, add columns 2, 8, 64 together to arrive at 74. To convert this integer to it's corresponding character, we must then consult the [ASCII table](https://www.asciitable.com/).

## The ASCII table

The ASCII, standing for American Standard Code for Information Interchange, is a character encoding standard for electronic communication. The ASCII table is a standardised lookup table that maps integers to charactersm and is used by all modern computers. It's is a great example of a low-level programming construct as it's a simple, efficient way to map integers to characters. Let's take a look and see what our binary sequence `01001010` maps to:

![Alt text](../ascii.svg)

So we consult our ASCII table, and find that 74 maps to the character `J`! So, the binary number `01001010` is the integer `74`, which is the character `J`! We now have a simple, reproducible method to go from `0`s and `1`s in memory, to characters!

:::note
Not all characters are actually rendered (drawn) on the screen! White-space characters such as spaces, tabs, and newlines are all characters, but they are only used to format text. For example, look at the character `32` in the ASCII table, it is a space! This is why we can have a string like `"Hello, world!"` and the computer knows to print a space between the comma and the `w`!
:::

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
    // we then assign the charracters ['H', 'e', 'l', 'l', 'o']
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

Because strings are so common, the C/C++ languages have a special way of handeling how we can mark the end of a string, and it is by simply introducing a special character called the *null terminator* (represented by the character `\0`). The null terminator is the very first ASCII character at integer 0, and is used to indicate the end of the string, and does not get printed to the terminal. Let's take a look at how we can use the null terminator to solve our problem:

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

This program should print out "Hello", and printf will know that the string ends at the "o"!

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

## Manually interacting with strings

Knowing that strings are just character arrays with a null terminator to mark the end of the string, let's think about how a function like SplashKit's WriteLine might work:

* **Step 1**: We allocates a block of memory to store the string
* **Step 2**: We assign the string literal "Hello" to the string myString (note that string literals automatically add a null terminator)
* **Step 3**: We print the string to the terminal, by looping through the array until we reach the null terminator, and printing each character to the terminal.

```c
#include <stdio.h>
#define MAX_STRING_LENGTH 50

int main(void) {
    char myString[MAX_STRING_LENGTH] = "Hello"

    // use a while loop to print each character in the string
    int i = 0;
    while (myString[i] != '\0') {
        printf("%c", myString[i]);
        i++;
    }

    return 0;
}
```

## Manual string concatenation

```c
int main(void) {
    char first_name[] = "John";
    char last_name[] = "Smith";
    char full_name[50] = first_name + " " + last_name;
}
```

The above program looks simple right? It looks as though we simply take the two character arrays and create the final result "John Smith", and indeed it's a common operation when working with strings to concatenate them - but there's a catch. We aren't including using a string data type, and we can't simply add two arrays together, or string literals and character arrays.

Without all the functionality strings.h provides us, let's look how we can do a task like string concetanation in plain C.

The way to concetenate two strings in C without any libraries is quite simple, and entails looping through the first string, and copying each character into the new string, and then looping through the second string and copying each character into the new string. Let's take a look at how we can manually concatenate two names together (with a space in between):

```c
#include <stdio.h>

#define full_name_length 50

int main(void) {
  // create two char arrays to store the first and last name
  char first_name[] = "John";
  char last_name[] = "Smith";

  // create a new char array to store the full name
  char full_name[full_name_length];

  // copy the first name into the full name, character by character
  int i = 0;
  while (first_name[i] != '\0') {
    full_name[i] = first_name[i];
    i++;
  }

  // add a space to the full name
  // using i++ here is a clever way to first read the value of i, and then increment it as we need it later on.
  full_name[i++] = ' ';

  // Assign each letter of last name to the end of the full name
  int j = 0;
  while (last_name[j] != '\0') {
    full_name[j + i] = last_name[j];
    j++;
  }

  // don't forget the null terminator!
  full_name[j+i] = '\0';

  printf("%s\n", full_name);

  return 0;
}
```