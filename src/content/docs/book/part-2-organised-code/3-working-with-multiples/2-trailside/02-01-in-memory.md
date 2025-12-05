---
title: Strings Up Close
sidebar:
    label: " - Up Close"
---

You've been using strings in C++ and C# for a little while now. Strings are great, they allow us to read, write, manipulate and store textual information -- and if you think about most programs you use, they are full of text! But how do strings in C++ or C# actually work? How does a computer's memory store and manipulate textual information? And how can we do all of this in a low-level programming language like C/C++? Before we can answer these questions, let's take a quick look back at strings in C++.

## Strings recap

In C# and C++, strings are a standard data type that allows us to store textual data. We can create a string in C++ by using the `string` type which is included in the `<string>` header file, and use some helper functions from SplashKit to allow us to read and print string data to and from the user, let's take a look at a C++ program that uses the string type to read and print the user's name from the terminal:

```cpp
// gives us access to the string type
#include <string>
// gives us access to SplashKit helper functions
#include "splashkit.h"

int main() 
{
  // Read in the user's name from the terminal
  write_line("Please enter your name: ");
  string user_name = read_line();

  // print the name string back to the terminal
  write_line("The user's name is: " + user_name);

  return 0;
}
```

The above program may look simple, but we are using a variety of string-related functionality to achieve our goals which either come with the C++ standard string library, or the SplashKit library. Let's break down some of these functionalities:

* `string` is a data type that allows us to store textual data, and is included in the `<string>` header file. It describes the configuration of how textual data is stored in memory.
* `write_line()` is a SplashKit helper function that allows us to write a line of text to the terminal, it has to keep track of how long the string is.
* `read_line()` is a SplashKit helper function that allows us to read a line of text from the terminal, it's return type is `string`. It handles all of the memory management for us, and returns a valid `string` type that we can use in our C++ program.
* **string concatenation**: in the line `write_line("The user's name is: " + user_name);`, we are using the `+` operator to concatenate (join) two strings together. This is a common operation when working with strings, but is not functionality we should take for granted!

Now that we've shown you a quick recap of how we have used strings in C++ and C#, let's take a look back at how strings are represented in memory.

## Building our own string

If we think about what a string is, it is a simply a bunch of characters (`char`s) in a specific order. Peering into our toolbox, we realise we already have a way to store multiples of a given data type, arrays! In C, a `char[]` (character array) is used to store strings. Before we dive deep into character arrays, let's first take a look at the `char` data type.
