---
title: Hello from another language
---

To wrap up this tour, lets also compile a small C++ program. When we get to [Part 2](/book/part-2-organised-code/00-part-2-programs-as-organised-code) we will be switching language. While you are getting things setup, best to test this is working as well!

## Creating a project

The C++ language aims to be very flexible, meaning you have to do lots yourself. As a result, there is no project concepts. All you need is a file with your code in it. We could put these all in one folder, or keep using a folder for each project.

Let's create a code folder called **CppCode**. This can be used for any small C++ code files we want to work with.

```zsh
# Remember to use /c/Users/<username>/Documents/Code for MSys
cd ~/Documents/Code
mkdir CppCode

cd CppCode

# Create an empty HelloWorld.cpp file
touch HelloWorld.cpp

# Open folder in VS Code
code .
```

## Write the code

We can keep this simple. Add the following code for a simple command line program that outputs Hello World.

```cpp
#include "SplashKit.h"

int main()
{
    write_line("Hello World");
    return 0;
}
```

:::caution

As with C#, we will be using SplashKit for terminal input and output initially. Avoid using the `printf` or `cout` and `cin` for now, but we will come back to this once we have moved beyond the basics. This will also simplify moving between languages, as we can keep using the SplashKit library from both. 

Once you have the basics, we can come back to explore the language itself in more detail.

:::

## Compile and Run

When you are using C++ you will have to compile your code each time you change it. So you need to do two steps to run the code: compile then run.

Save your code and then try to compile and run it with the following:

```zsh
clang++ HelloWorld.cpp -o hello -l SplashKit
./hello
```

The `clang++` command runs the compiler. You pass it the file to compile, along with arguments to set the name of the program to create (`-o hello`) and to link it with any libraries you use `-l SplashKit`. We will explore this further in the later parts, but for now make sure this works, and you see the output message when it runs.

Once you have this running you should have everything ready to go!