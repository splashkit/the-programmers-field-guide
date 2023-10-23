---
title: Building a C/C++ Program
---

C/C++ are **compiled** languages. Unlike C#, they do not need a runtime environment. This means that you compile and then directly run the resulting program.

To get started, let's build a Hello World program. This will use the SplashKit library to handle user input and output, which we will use for now. When we get to [Chapter 2.7](../../../7-low-level-programming/0-overview), you will understand the concepts needed to use the C input and output functions, as they are very primitive.

The following steps go through the necessary actions to build and run programs using C/C++. We will recap some steps that you can skip if you have already installed SplashKit for C#.

1. Make sure you have a C++ compiler installed.
2. Enter the code for a minimal "Hello World"
3. Compile and run
4. Configure vscode

These steps are outlined in detail below.

## C++ compiler

You can test if you have a C++ compiler installed using the [which](https://man.cx/Which) command. Test if you have **clang++** or **g++**, using the commands shown below. The clang++ compiler is a newer c++ compiler, which generally gives nicer error messages. We will aim to use clang++ where possible.

```zsh
which clang++
which g++
```

To install the c++ compiler you can use the following shell commands:

- Raspberry PI, Linux, and Windows (WSL)
  
  ```zsh
  sudo apt-get install clang
  ```

- macOS
  
  ```zsh
  xcode-select --install
  ```

- Windows (MSys2)
  
  ```zsh
  pacman --disable-download-timeout -S mingw-w64-{x86_64,i686}-gcc mingw-w64-{i686,x86_64}-gdb
  ```

To make use of the SplashKit library, which we need, you also need to make sure that this is installed globally. You can follow the instructions in the [Installation Guide](https://splashkit.io/articles/installation/). The easy way to make SplashKit available to the compiler is to install it in the system default locations. This will require admin access to your computer, so we will try to make sure to also show you how to do this without it being in the global system locations. If you can, the following `skm` action will set up SplashKit for easy access.

```zsh
skm global install
```

## Hello World in C/C++

Now for some C/C++ code to test our compiler set up.

1. Create a new folder for your project
2. Open the folder in vscode
3. Create a new **program.cpp** file

The following shell commands should achieve this:

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

Open the **program.cpp** file, and enter the following code:

```cpp
#include "splashkit.h"

int main()
{
  write_line("Hello World!");
  return 0;
}
```

:::tip
You should be able to connect the `#include` with C#'s `using` and the call to `write_line` should also look familiar.
:::

## Compile and Run

Compiling in C/C++ will require a few more options. The C# and dotnet tools include features that take care of many small details for us, whereas the C/C++ compiler gives you a lot more control.

### Compile on your platform

As the C/C++ compiler works differently on each platform, we will need slightly different shell instructions for each platform. In general, you need to provide the following options:

- `-l` is used to link with an external library. We need to link to **SplashKit** and **SplashKitCPP**.
- `-o` will indicate the name of the executable file to create. By default, the compiler will create an `a.out` file. Usually you want a different name, so you can use this option to set the name. For the following, we will name the file **program**.
- `-Wl,-rpath,` is used to indicate where to find the library files. The `rpath` is the path that the computer will search at runtime, when it is loading libraries. You need to tell this where you have installed the SplashKit library.

Review the details for your computer in the following sections.

#### Raspberry Pi, macOS, Linux, or Windows (WSL)

On the Raspberry Pi, macOS, Linux, or Windows (WSL) you compile with the following command (enter it all on line one):

```zsh
clang++ program.cpp -l SplashKit -l SplashKitCPP -Wl,-rpath,/usr/local/lib -o program
```

#### Windows (MSys2)

**TODO: Test this!**

For Windows (MSys2), you need to use g++. This will create a program you can run from the MSys terminal window.

```zsh
g++ program.cpp -l SplashKit -l SplashKitCPP -o program
```

There are a few more options that you can also include if you want to be able to run the program by double-clicking it in the Windows explorer (enter it all on line one):

```zsh
g++ program.cpp -Wl,--as-needed -static-libstdc++ -static-libgcc -lSplashKit -Wl,-Bstatic -lstdc++ -lpthread -lSplashKitCPP -o program
```

#### Using skm

On all platforms, you can use the **skm** tool to wrap these commands for you. This will allow you to leave out the options for linking in the library, as the skm tool adds these options to the command you pass it.

```zsh
skm clang++ program.cpp -o program
```

### Run your program

When the compiler runs successfully it will output an executable file, the program. With the above commands, we use the `-o` option to indicate the name of the file to create. So when you run these you should see a **program** file appear. This is the machine code for the program all ready to go, so you can run this directly from the terminal. The following shell commands would build and run this on the Raspberry Pi.

```zsh
clang++ program.cpp -l SplashKit -l SplashKitCPP -Wl,-rpath,/usr/local/lib -o program
ls -lha
# Notice the program file
./program
```

:::tip[Program's path]
When you run the program, you will need to give the path to it even though it is in the current folder. This is why we have the **./** in front of the filename here.
:::

Once this is working, you have everything set up and ready to go. Getting this to work can be a bit finicky, as the C/C++ tools were designed for a professional audience and do not include much to make this a user-friendly process. If you have others you are studying this, make sure to ask for help if you get stuck.

## Configure Visual Studio Code

Getting the program compiling and running in the terminal will mean that you now know the steps that we need to facilitate this within an editor like Visual Studio Code.

Visual Studio Code uses [extensions](https://code.visualstudio.com/docs/editor/extension-marketplace) to extend its capabilities to support developers working in a range of languages. To get support with C/C++ we need to install the associated extensions and then configure their settings to get them to link in the required libraries.

The extension you need to install is called the [C/C++ Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack) by Microsoft. Visual Studio Code should automatically show you this in the extensions' pane if you have the program.cpp open. Click the **install** button to install this extension in your editor.

![Visual Studio Code with extensions showing the C/C++ extension to install](./images/vscode-extension.png)


![The settings icon to add the C++ build task](./images/vscode-build-task.png)

