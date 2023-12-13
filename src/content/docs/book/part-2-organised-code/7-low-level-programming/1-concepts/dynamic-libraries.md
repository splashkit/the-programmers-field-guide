---
title: Compiling Dynamic Libraries
---

So far, we have been compiling C source code into executable programs that we can then run. These programs are a machine-readable format that computer's CPUs can execute. We can think of this as *compiling* source code into programs that users can run.

If you want to read more on compilation, check out:
<!-- TODO: Link to compilation intro -->

<!-- TODO: Review the analogy -->
## Taking a step back

One anology for compilation could that of someone baking a cake. You assemble raw ingredients (flour, eggs, sugare, etc.) together, and bake them in an oven. The result is a cake, which is something that people can eat. In this analogy, the raw ingredients are the source code, the oven is the compiler, and the cake is the executable program. While the raw ingredients are incredibly important to the cake, they are not the cake itself. The cake is the result of the raw ingredients being assembled together and baked in an oven.

A shared library can be thought of as a pre-baked cake, or a program that has been pre-compiled. We can then use this pre-baked cake in other programs, without having to bake it again. This is useful for a number of reasons, but the main one is that it allows us to share code between programs. If we have a function that we want to use in multiple programs, we can compile it into a library, and then link that library into each program. This means that we don't have to write the function multiple times, and if we want to change the function, we only have to change it once. It is commonly used for sharing platform-specific code between programs, and for organising large programs into smaller, more manageable chunks.

## Compiling to libraries

<!-- replace with splashkit library -->

<!-- .h -> names things -->
<!-- .c -> defines things -->
<!-- .so -> compiled library -->

A simple example of a shared library are some of the standard libraries we've been using so far. The `printf` function (used to print text to the terminal) is one of the most commonly used functions in C. It's so useful that it makes little sense for C programmers to have to implement the function over and ocer. As such, the C language provides the `printf` function for us, and it is defined in the `stdio.h` library. When we write `#include <stdio.h>` at the top of our source code, we are telling the compiler to link the compiled code in `stdio.h` into our program. This means that we can use the `printf` function in our program, without having to write it ourselves.

:::note
Have a think of some other useful libraries (in the standard library or otherwise!)
:::

## Compiling a library in C

To compile C source code into a library in C, we use our trusty C compiler, but with a few extra flags. There's also a few extra steps involved, and if you don't follow them closely, it's likely you'll run into some errors. So get ready to pay attention!

:::tip
Play close attention to the file names and directories used!
:::

### Step 1: Write your library

Step 1 simply involves writing some C code that you wish to share, or *pre-bake*. For our simple example, let's write a function that prints a message to the terminal. We'll call it `print_message` and it will simply print to the terminal. Save the file in your working directory as `my_library.c`:

```c
#include <stdio.h>

void print_message() {
    printf("Hello from my library!\n");
}
```

Next, let's create our actual program source file which will use this library. Save the file in your working directory as `my_program.c`:

```c
// A c program that uses the library

#include <stdio.h>

// we need to tell the compiler that the function is defined externally
extern void print_message();

int main() {
    print_message();
    return 0;
}
```

### Step 2: Compile the library

Next, we compile our library into an object file with **position independent code**. Position independent code is code that can be executed from any memory address. This is important because we don't know where the library will be loaded into memory when we link it into another program. To compile our library into position independent code, we use the `-fpic` flag to `gcc`.

We also use the `-c` flag. This tells gcc to compile the source code into an objcet file, but not to create an executable program. This is an important step in creating a shared library.

```bash
gcc -c -fpic my_library.c
```

The above command should generate a object file in your working directory called `my_library.o`.

### Step 3: Creating a shared library

Next, we will generate a shared object from our `my_library.o` file by using the `-shared` flag.

```bash
gcc -shared -o libmylibrary.so mylibrary.o
```

### Step 4: Using the library

Now that we have compiled our shared library, we can link it into another program. To do this, we tell `gcc` where to find the shared library, and use the `-l` flag to instruct `gcc` to link it in!

```bash
gcc -L <working_directory> -o program my_program.c -lmylibrary
```

Let's break this down a bit more:

1. `gcc` -> The C compiler
2. `-L <working_directory>` -> Tells `gcc` where to find the shared library. In this case, it's the current working directory where you created the `.so` file.
3. -o program -> Tells `gcc` to compile the source code in `my_program.c` into an executable program called `program`.
4. `my_program.c` -> The source code for our program.
5. `-lmylibrary` -> Tells `gcc` to link the compiled code in `libmylibrary.so` into the executable program.

<!-- add -rpath -->
<!-- export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/Users/jake/Repos/the-programmers-fieldguide/src/content/docs/book/part-2-organised-code/7-low-level-programming/1-concepts/libraries -->


If you see your message from the my_library.c file printed, you have successfully compiled a shared library in C!