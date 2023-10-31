---
title: The C Preprocessor
order: 1
---

Before we go on to look at the C language, let's take a moment to look at the C Preprocessor. The C Preprocessor is a program that automatically runs prior to the C compiler, and is responsible for processing preprocessor directives.

Preprocessor directives are special instructions that begin with a `#` symbol. The preprocessor will process these directives and then pass the resulting code to the compiler.

## C Preprocessor vs C# Interpreter

In C#, (and most modern languages) the compiler and interpreter are combined into a single step. The compiler will compile your code into an intermediate language called CIL, and then the interpreter will execute the CIL code.

In C, the preprocessor and compiler are separate stages of compilation. Some of the preprocessor's job is to:

- Process preprocessor directives, such as #include and #define
- Remove comments
- Replace macros with their definitions

## `#define`

A common preprocessor directive is `#define`. `#define` is used to define a macro, which is a name that is substituted for a sequence of characters. For example, we could define a macro called `PI` that is substituted for the value `3.14159`:

```c
#include <stdio.h>
#define PI 3.14159

int main(void) {
    printf("%f\n", PI);
    return 0;
}
```

When the preprocessor processes the above code, it will replace all instances of `PI` with `3.14159`. So when the compiler comes along, it has no idea that there was ever a macro called `PI` - it just sees `3.14159`:

```c
int main(void) {
    printf("%f\n", 3.14159);
    return 0;
}
```

## A simple way to think about #include and #define

This may all sound a bit confusing, but it's actually quite simple. Let's look at a simple example of a preprocessor directive:

```c
#include <stdio.h>

int main(void) {
    printf("Hello, world!\n");
    return 0;
}
```

Above is a simple C program that prints "Hello, world!" to the terminal. The first line of the program is a preprocessor directive that tells the preprocessor to include the contents of the `stdio.h` header file in our program. The `stdio.h` header file contains the definition of the `printf` function, which we use in our program.

So before the program is compiled, the preprocessor **includes** the `stdio.h` (standard I/O library) into our program so we can use it.

:::note
Whenever you see a `#xxx` at the start of a line, you know that it is a preprocessor directive.
:::
