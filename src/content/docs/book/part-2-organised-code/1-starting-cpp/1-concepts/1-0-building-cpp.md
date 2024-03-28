---
title: Building a C/C++ Program
---

C/C++ are **compiled** languages. Unlike C#, they do not need a runtime environment. This means that you compile and then directly run the resulting program.

To get started, let's build a Hello World program.
For now, we will use the SplashKit library to handle user input and output, as they are a bit easier to work with.
[Later on](../../../9-low-level-programming/0-overview) you will understand the concepts needed to use the native C input and output functions, which are very primitive.

The following steps go through the necessary actions to build and run programs using C/C++.
These steps assume that you have followed the [Installation instructions from part 0](../../../../part-0-getting-started/2-computer-use/0-installation/0-overview) on setting up the C/C++ tools for your operating system.

## Hello World in C/C++

To get started, we need to:

1. Create a new folder for the project.
2. Open the folder in VS Code.
3. Create a new **program.cpp** file.

The following shell commands should achieve this, assuming your code is stored in the `~/Documents/Code` path:

```zsh
cd ~/Documents/Code
mkdir HelloWorldCPP
cd HelloWorldCPP
touch program.cpp
code .
```

:::tip[File extensions]
Source code is written in text files, but we use different extension for these files to help indicate which language we are using. The **.cs** extension indicated a C# code file, whereas now we use the **.cpp** extension to indicate that this is a C++ source code file.
:::

In VS Code, open the **program.cpp** file, and enter the following code:

```cpp
#include "splashkit.h"

int main()
{
    write_line("Hello World!");
    return 0;
}
```

:::tip
You should be able to connect the `#include` with C#'s `using`, and the call to `write_line` should also look familiar.
:::

## Compile and Run

Compiling in C/C++ is a little more involved. This is because the C# and dotnet tools include features that take care of many small details for us, whereas the C/C++ compiler gives you a lot more control.

### Compile your program

As the C/C++ compiler works differently on each platform, we will need slightly different shell instructions for each of them. In general, you need to provide the following options:

- `-l` is used to link with an external library. We need to link to the **SplashKit** library.
- `-o` will indicate the name of the executable file to create. By default, the compiler will create an `a.out` file. Usually you want a different name, so you can use this option to specify one. For our hello world program we will name the file **program**.

If you have SplashKit installed globally it will be installed in paths that the compiler should search automatically. Given this, you should be able to compile your program using the following command:

```zsh
clang++ program.cpp -l SplashKit -o program
```

If you do not have the library installed globally, then you will need to tell the compiler where to find the different files you are referring to. This can be achieved using the following command line options: 

- `-I <path>` lets you add a folder to search for header files you have included (such as with `#include "splashkit.h"`). For SplashKit you use `-I ~/.splashkit/clang++/include`.
- `-L <path>` lets you add a folder to search for libraries. For SplashKit you use `-L ~/.splashkit/lib/linux`, `-L ~/.splashkit/lib/macos`, or `-L ~/.splashkit/lib/win64`.
- `-Wl,-rpath,` is used to indicate where to find the library files. The `rpath` is the path that the computer will search at runtime, when it is loading libraries. You need to tell this where you have installed the SplashKit library. (Linux, macOS, and WSL only)

```zsh
# Exampl of compiling on Linux
clang++ program.cpp -I ~/.splashkit/clang++/include -L ~/.splashkit/lib/linux -l SplashKit -Wl,-rpath,~/.splashkit/lib/linux -o program
```

If you are using MSys2, there are a few more options that you can also include if you want to be able to run the program by double-clicking it in the Windows explorer instead of only from within MSys2. These settings ensure that the program will embed aspects of MSys2 needed to run it independently.

```zsh
clang++ program.cpp -Wl,--as-needed -static-libstdc++ -static-libgcc -lSplashKit -Wl,-Bstatic -lstdc++ -lpthread -o program
```

:::tip[When all else fails...]
When you install splashkit it includes `skm` a set of scripts to help compile and run programs. If you get stuck, you can use `skm` to compile your program and this will add in the necessary compiler options for you.

```zsh
skm clang++ program.cpp -o program
```

:::

### Run your program

When the compiler runs successfully it will output an executable file: the program. With the above commands, we used the `-o` option to indicate the name of the file to create. So, when you compile your code you should see a **program** file appear. This is the machine code for the program all ready to go, so you can run this directly from the terminal. For example, the following shell commands would build and run out hello world program on the Raspberry Pi.

```zsh
clang++ program.cpp -l SplashKit -o program
ls -lha
# Notice the program file
./program
```

:::tip[Program's path]
When you want to run the program, you need to specify the path to it even though it is in the current folder. This is why we have the **./** in front of the filename here. If your programming isn't running, make sure you included this.
:::

Once this is working, you have everything set up and ready to go. Getting this to work can be a bit finicky, as the C/C++ tools were designed for a professional audience and do not include much to make this a user-friendly process. If you have others you are studying with, make sure to ask for help if you get stuck.

:::caution
Remember to make sure you save, compile, and then run your program as you make changes. If you forget to save the file, or you forget to compile it then you will be running the old version of the program and not what you have coded.

Remember: **save**, **compile**, and then **run**.
:::
