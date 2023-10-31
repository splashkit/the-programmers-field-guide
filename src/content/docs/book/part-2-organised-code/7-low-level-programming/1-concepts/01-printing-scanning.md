---
title: Printing and scanning in C
order: 1
---

So far, we have been printing, or writing text to the terminal using WriteLine from C# and SplashKit. These library functions have allowed us to easilly print strings, or string variables to the terminal. In this section, we will explore how printing and reading from the terminal works in the lower level language C. You might notice throughout this section that the core concepts are very familiar!

## Including libraries

<!-- TODO: Fix link -->
If you haven't yet, please read the [C Preprocessor](/docs/book/part-2-organised-code/7-low-level-programming/1-concepts/00-preprocessor) section before continuing, but to quickly recap:

C, just like C#, has a standard library of functions that you can use in your programs. These functions are defined in header files, which you can include in your program using the `#include` preprocessor directive. For example, to include the `stdio.h` header file, you would write:

```c
#include <stdio.h>

int main(void) {
    return 0;
}
```

## The `stdio.h` library

Printing and scanning in C is done using the `stdio.h` library. `stdio` stands for *standard input/output*, and is a library that contains functions for reading and writing to the terminal. The `stdio.h` library is included in the C standard library, and is automatically included in your program when you use the `#include <stdio.h>` preprocessor directive.

## Printing

In C, printing is done *mostly* using the `printf` function.

The core use case of `printf` is to print a string to the terminal, and is quite simple. Let's take a look. To print the string "Hello, world!" to the terminal, you would write:

```c
#include <stdio.h>

int main(void) {
    printf("Hello, world!");
    return 0;
}
```

Just like in C#, the double-quotation marks `"` are used to denote a string. The `printf` function is then used to print the string to the terminal.

Go ahead and run the above program in your terminal. You should see "Hello, world!" printed to the terminal. But a keen eye will notice a small difference to the behaviour you'd come to expect from C#.

### Printing with a newline

In C#, `Console.WriteLine` automatically prints a newline character `\n` after the string. In classic C style, `printf` does not automatically print a newline character. To print a newline character, you must explicitly include it in the string. For example, to print "Hello, world!" followed by a newline character, you would write:

`printf("Hello, world!\n");`

## Format printing

You may be wondering what the f stands for in printf. The f stands for *format*, and denotes that printf is designed to print formatted strings. What is a formatted string? Let's take a look at an example:

```c
#include <stdio.h>

int main(void) {
    printf("Hello, %s!\n", "world");
    return 0;
}
```

In the above example, we are printing a formatted string. The first argument to `printf` is always the format string, which is the string that contains the placeholders for the other arguments. The other arguments are the values that will be substituted into the placeholders in the format string.

The `%s` in the format string is a placeholder for a string. The second argument to `printf` is the string that will be substituted into the `%s` placeholder in the format string. So when the program is run, the `%s` placeholder will be replaced with the string `"world"`, and the following will be printed to the terminal.

### Other placeholder types

There are many different placeholder types that you can use in a format string. Here are some of the most common:

| Placeholder | Description       |
| ----------- | ----------------- |
| `%s`        | String            |
| `%d`        | (Decimal) Integer |
| `%lf`       | Long Float        |
| `%c`        | Character         |

### An advanced example

```c

#include <stdio.h>
#define TODAYS_YEAR 2023

int main(void) {
    int age = 21;
    double height = 1.8;

    printf("I am %d years old, born in %d, and %.2lf metres tall.\n", age, TODAYS_YEAR-age, height);
}

```

will print:

`I am 21 years old, born in 2002, and 1.80 metres tall.`


## Scanning

Scanning, or reading data from the terminal is done using the `scanf` function. `scanf` is the counterpart to `printf`, and is used to read data from the terminal. They work in similar ways, but there are a few important differences.

### Reading a string

To read an integer from the terminal, you would write something like:

```c
#include <stdio.h>

int main(void) {
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

Let's break down the scanf line:

`scanf("%d", &age);`

1. The first component, is the call to the scanf function.
2. Next, we have the format string `"&d"`. This is the format string that contains the placeholders for the other arguments. The same rules apply here as they do for `printf` - the `%d` is a placeholder for a decimal integer (a base-10 integer).
3. Finally, we have the `&age` argument. This is the variable that will be substituted into the `%d` placeholder in the format string. The `&` symbol is used to denote the *address* of the variable. We will explore this in more detail in a later section.
