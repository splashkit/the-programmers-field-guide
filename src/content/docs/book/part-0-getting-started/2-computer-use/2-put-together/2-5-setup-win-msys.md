---
title: Set up my Windows (with MSYS)
sidebar:
  attrs:
    class: windows
  label: " - Windows (MSYS)"
---

In this guide, we will walk through the steps to install the necessary applications and tools using **MSYS** (**M**inimal **SYS**tem) on Windows. This will enable you to code in C# and C++ with SplashKit.

:::note[Already have SplashKit installed?]
If you have previously installed SplashKit (before 2024):

- Update SplashKit using your "MSYS2 MINGW64" terminal with the command: `skm update`
- Then you can skip to Step [4: Install SplashKit Globally](#4-install-splashkit-globally).

:::

Now, let's get started!

To get SplashKit and other coding tools installed on Windows, using MSYS, follow the steps outlined below:

## 1. Install MSYS (MSYS2)

Download the installer (32-bit or 64-bit) from the official MSYS2 website: [www.msys2.org](https://www.msys2.org/)

![Gif showing MSYS download](/gifs/setup-windows/install-msys.gif)

To install: double-click the downloaded executable file, and follow the on-screen instructions.  
*It is recommended to use the default install path, but you can customise the other installation options as needed.*

<!-- TODO: Possibly add Gif of installation steps? or an image -->

:::note[MSYS vs MINGW64]
<!-- TODO: Update this, with screenshot and how to pin to task bar -->
You should use the MINGW64 terminal.
:::

## 2. Install git Command Line Tool

To install SplashKit, you will firstly need to install **Git**.

Copy and paste the following command into your **MSYS2 MINGW64** Terminal window to install the `git` command-line tool:

```bash
pacman -S git --noconfirm --disable-download-timeout
```

:::caution[Paste commands into MINGW64 Terminal]
Unfortunately, you won't be able to use `Ctrl` + `V` to paste.

Instead, right click and then select **Paste**.
:::

<!-- TODO: Check if Gif is needed here -->

## 3. Install SplashKit SDK

SplashKit is a beginner's all-purpose software toolkit that will allow you to create fun and exciting programs more easily, especially for Graphical User Interface (GUI) programs.

:::tip[Curious to know more?]
The **SplashKit SDK** is installed using the `skm-install.sh` shell script which is stored in the [**skm**](https://github.com/splashkit/skm) GitHub repository (in the **install-scripts** folder).

It will also add the required paths to your PATH environment variable.
:::

Copy and paste the following command into your MSYS2 MINGW64 Terminal to download and run the SplashKit installer:

```bash
bash <(curl -s https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh)
```

<!-- TODO: Redo this command in the mingw64 terminal -->
![MSYS SKM Install](/gifs/setup-windows/msys-skm-install.gif)

:::danger[My install command is not working. Help!]
If the command above does not produce any response, ensure that your computer is connected to the internet and try disabling your firewall.

***Still no luck?***  
If you still encounter issues, you can download the install script locally by right-clicking on [this link](https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh) and selecting "Save Link As".  

To run the downloaded shell script, open the **MSYS2 MINGW64** Terminal and navigate to the folder where you saved the file. Then run the following command:

```bash
bash skm-install.sh
```

:::

## 4: Install SplashKit Globally

Finally, you will need to install the SplashKit Global Libraries. This will install the SplashKit libraries and library include files into the system's default global locations so that the compiler can find these files when building (compiling) programs created with SplashKit.

To install SplashKit globally, open the MSYS2 MINGW64 terminal as an **administrator**. Then run the following command in the terminal window:

```bash
skm global install
```

![MSYS Global Install](/gifs/setup-windows/msys-global-install.gif)

<!-- Check if directories are the same -->
:::note[What does this command do specifically?]
The command above will add the **SplashKit libraries** into the `/usr/local/lib/` folder, and the required **SplashKit library include files** into the `/usr/local/include` folder.
:::

## 5. Install Visual Studio Code

Visual Studio Code, also commonly known as *VS Code* or just *Code*, is a powerful and versatile code editor that enables efficient coding, debugging, and collaboration for your SplashKit projects!

:::note[VS Code has it all!]
Once you have your code project set up, Visual Studio Code will be the main program you will use to write, build, run and debug your code.
:::

Download and run the installer from: [code.visualstudio.com/Download](https://code.visualstudio.com/Download).

![Gif showing Visual Studio Code installation](/gifs/setup-windows/install-vscode.gif)

:::tip[Open Code from Terminal]
You can open Visual Studio Code from the Terminal by typing `code` and pressing enter. `code .` will open the current folder in Visual Studio Code.
:::

### Recommended Extensions

Visual Studio Code has an extensive library of *Extensions* that let you add improved functionality for languages, debuggers, and tools to support your development workflow.  
Using extensions in VS Code will make it easier and faster to code with whatever language or tools you are using.

#### C# Language Extensions

For **C#** code, we recommended that you install the `C#`, `C# Dev Kit` and `IntelliCode for C# Dev Kit` extensions.

:::tip[How do I install the C# extensions?]

1. Open Visual Studio Code and click on the *Extensions* tab in the left panel (shown in the purple box in the image below).
2. Type "C#" in the Search bar at the top (shown in the blue box).
3. Click "Install" for each of the extensions listed (shown in the green box).

![Visual Studio Code window showing recommended extensions for C#](./images/vscode-extensions/vs-code-csharp-extensions.png)
:::

#### C++ Language Extensions

For **C++** code, we recommended that you install the `C/C++` extension.  

You can also install the `C/C++ Extension Pack` extension which includes multiple extensions bundled together. If you have issues with syntax highlighting, the `Better C++ Syntax` extension is one of the best for this.

:::tip[How do I install the C++ extensions?]

1. Open Visual Studio Code and click on the *Extensions* tab in the left panel (shown in the purple box in the image below).
2. Type "C++" in the Search bar at the top (shown in the blue box).
3. Click "Install" for the "C/C++" extensions (shown in the green box).
4. (Optional) Click "Install" for any other extensions you want to install (shown in the orange box).

![Visual Studio Code window showing recommended extensions for C++](./images/vscode-extensions/vs-code-cpp-extensions.png)
:::

## 6. Install Language Specific Tools

Some coding languages require specific tools/frameworks to be installed to be able to build and run your code files.  
As you will be coding in C# and C++ in this book, let's look at the tools needed for these languages:

### C# Tools

For coding in C#, you will need to install the `.NET` SDK which will allow you to use the *dotnet* terminal command to create, build, and run your C# project code.

Download the latest version of the .NET SDK for Windows from the official .NET website: [dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)

Run the downloaded installer and follow on-screen instructions.

### C/C++ Tools

For coding in C++, you will need to have a C++ compiler installed to build your C++ code into a file you can use to run your program. Commonly used C++ compilers are `g++` and `clang++`, which can be installed with **GCC** (**G**NU **C**ompiler **C**ollection).

You will also need to install **GDB** (**G**NU **D**e**b**ugger), which you can use when debugging C++ programs.

To install GCC and GDB, copy and paste the following commands into your MSYS2 MINGW64 terminal window:

```bash
pacman -S mingw-w64-x86_64-gcc --noconfirm --disable-download-timeout
pacman -S mingw-w64-x86_64-gdb --noconfirm --disable-download-timeout
```

These commands will install the necessary C/C++ compilers and debuggers for your development environment.

<!-- Now, your Windows machine is set up with MSYS, Visual Studio Code, and SplashKit, ready for C# and C++ development. Happy coding! -->
