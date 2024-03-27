---
title: Printing and scanning in C
order: 1
---

So far, we have been printing, or writing, text to the terminal using `write_line` and reading using `read_line`. Both of these functions are from the SplashKit library. These library functions have allowed us to easily read and write strings to the terminal.

In this section, we will explore how printing and reading from the terminal works using the standard C libraries. We haven't looked at these earlier as they are a little messy, and reading requires the use of pointers. Now that we have pointers, we can start to explore how this works.

You might notice throughout this section that the core concepts are very familiar!

## Standard libraries

As we saw in the [preprocessor](../../../../part-2-organised-code/1-starting-cpp/1-concepts/1-1-compiling-steps#pre-processing), these functions are defined in header files, which you can include in your program using the `#include` preprocessor directive.

The standard libraries should be included using `#include<library>`. The following includes the standard input / output (IO) library in the `stdio.h` header file. This includes functions to read and write data from a number of locations.

```c
#include <stdio.h>

int main(void) {
    return 0;
}
```

## The `stdio.h` library

Printing and scanning in C is done using the `stdio.h` library. `stdio` stands for *standard input/output*, and is a library that contains functions for reading and writing to the terminal. The `stdio.h` library is included in the C standard library, and is included in your program when you use the `#include <stdio.h>` preprocessor directive.

## Printing

In C, printing is done *mostly* using the `printf` function.

The core use case of `printf` is to print a string to the terminal, and is quite simple. Let's take a look. To print the string "Hello, world!" to the terminal, you would write:

```c
#include <stdio.h>

int main(void) 
{
  printf("Hello, world!");
  return 0;
}
```

Go ahead and run the above program in your terminal. You should see "Hello, world!" printed to the terminal. But a keen eye will notice a small difference to the behaviour you'd come to expect from C#.

### Adding a newline

In SplashKit (and C#) the write line procedure added a newline character (`\n`) after the string it was printing. In classic C style, `printf` does not automatically print a newline character and there is no standard equivalent to print line. To print a newline character, you must explicitly include it in the string. For example, to print "Hello, world!" followed by a newline character, you would write:

```c
printf("Hello, world!\n");
```

## Format strings

You may be wondering what the f stands for in printf. The f stands for *format*, and denotes that printf is designed to print formatted strings. What is a formatted string? Let's take a look at an example:

```c
#include <stdio.h>

int main(void) 
{
  printf("Hello, %s!\n", "world");
  return 0;
}
```

In the above example, we are printing a formatted string. The first argument to `printf` is always the format string, which is the string that contains the placeholders for the other arguments. The other arguments are the values that will be substituted into the placeholders in the format string.

The `%s` in the format string is a placeholder for a string. The second argument to `printf` is the string that will be substituted into the `%s` placeholder in the format string. So when the program is run, the `%s` placeholder will be replaced with the string `"world"`, and the following will be printed to the terminal.

### Other placeholder types

There are several placeholders that you can use in a format string. Here are some of the most common:

| Placeholder | Description       |
| ----------- | ----------------- |
| `%s`        | C-String          |
| `%d`        | (Decimal) Integer |
| `%lf`       | Double (Long Float)        |
| `%c`        | Character         |

:::caution

Watch out for the `%s` placeholder. This does not work with the `string` type we have been using. `string` is a C++ type, and the `printf` function can only accept the C equivalent of a string.

You can get a C-string from the string type using the `c_str()` method. The mechanics of how this works will be covered in the next part of the book. For now, you can use this code to get a C-string from a C++ `string`.

```cpp
string name = "Fred";
printf("Hello %s!\n", name.c_str());
```

:::

### Example

```c

#include <stdio.h>
#define TODAYS_YEAR 2023

int main(void)
{
  int age = 21;
  double height = 1.8;

  printf("I am %d years old, born in %d, and %.2lf metres tall.\n", age, TODAYS_YEAR - age, height);
}

```

This example embeds a number of values within the format string. These appear in order, so the first `%d` expands to include the integer in age. The second `%d` expands to the result of `TODAYS_YEAR - age`, while the last will format the double in height to have two decimal places.
The result will be:

`I am 21 years old, born in 2002, and 1.80 metres tall.`

## Scanning

Scanning, or reading data from the terminal is done using the `scanf` function. `scanf` is the counterpart to `printf`, and is used to read data from the terminal. They work in similar ways, but there are a few important differences.

For the moment, we can look at reading numbers using `scanf`. C does not have a `string` type, that is something we have been using from `C++`, so we need to look at the next chapter to see how to read a string (or read a line).

### Reading a number

To read an integer from the terminal, you would write something like:

```c
#include <stdio.h>

int main(void)
{
  int age;

  // prompt the user for their age
  printf("Enter your age: ");

  // scan the terminal for an integer (%d), and store it in the age variable
  scanf("%d", &age);

  // print it back out
  printf("You are %d years old.\n", age);
  return 0;
}
```

Let's break down the `scanf` line:

```c
scanf("%d", &age);
```

1. The first component, is the call to the `scanf` function.
2. Next, we have the format string `"&d"`. The format string contains the placeholders to tell scanf what to read, with the values being copied into the other arguments. The same rules apply here as they do for `printf` - the `%d` is a placeholder for a decimal integer (a base-10 integer).
3. Finally, we have the `&age` argument. This is a pointer to the variable where the number (from the `%d` placeholder in the format string) will be stored. The `&` symbol is used to get the *address* of the `age` variable in this case.

### Clearing Errors

When `scanf` encounters an error it stops and does not populate the remaining parameters. To let you know if there are errors, `scanf` returns the number of parameters that it did populate. You can use this to detect any errors and respond appropriately using standard control flow logic.

As `scanf` stops when it encounters errors, you cannot just repeat the call to try to read the data again. The old data is still there, so you will get the same result. Instead, you can clear the buffer to something like the next newline. The following format string achieves this:

```c
scanf("%*[^\n]");
```

The format string contains:

- The `*` indicates that this does not need to be stored to a parameter. This allows you to get `scanf` to skip data you do not want to read.
- Next, the `[...]` indicates a pattern matching expression. It will read as many characters as it can that match the pattern within the brackets.
- In this case the pattern is "not" (`^`) "a newline character" (`\n`). So it will read anything and end at the newline.

This will read up to the newline character, so you need to make sure the remaining newline character can be skipped. This needs a space at the start of the following format string.

You can use this to read an integer as shown below.

```c
int read_integer(const string &prompt)
{
  int result = 0;
  
  printf("%s", prompt.c_str());
  while (scanf(" %d", &result) != 1) // Read value, and try to convert to int
  {
    // Convert failed, as input was not a number
    scanf("%*[^\n]"); // Read past the end of the current line
    printf("Please enter a whole number.\n");
    printf("%s", prompt.c_str());
  }
  
  return result;
}
```

:::tip

The format string and particulars of `printf` and `scanf` are not going to help you greatly with other languages. So there is no need to spend too long exploring all the peculiarities of `scanf` and `printf`.

:::
