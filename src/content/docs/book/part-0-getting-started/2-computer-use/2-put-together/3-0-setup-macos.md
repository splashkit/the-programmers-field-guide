---
title: Set up my macOS
sidebar:
  attrs:
    class: apple
---

*Let's get your macOS computer ready to start coding!*

In this guide, we will go through all the steps to install the required Applications and Tools that you will need to code in C# and C++ with SplashKit.  
We will be using the **Terminal** app, with the **zsh** shell. You can also use the **bash** shell if you prefer.

:::note[Already have SplashKit installed?]
If you have previously installed SplashKit (before 2024):

- Update SplashKit using your Terminal, with the command: `skm update`
- Then you can skip to Step [5. Install SplashKit Globally](#5-install-splashkit-globally)
:::

Now, to get SplashKit and other coding tools installed on macOS, follow the steps outlined below:

## 1. Install Xcode Command Line Tools

The Command Line Tools provided by Xcode provide a large amount of developer tools required to compile and develop applications.

:::tip[Why Xcode Command Line Tools?]
By installing Xcode Command Line Tools, you will effectively install a large variety of tools (terminal commands you can use) all at once.  
Most importantly for these installation steps, you will need the **git** tool (used for *Step 2*) and the **C++ compilers** (mentioned in *Step 4*).
:::

To install these tools, copy the command below:

```bash
xcode-select --install
```

Then, open your **Terminal** app and paste the copied text.

![Gif showing Spotlight Search to open Terminal and pasting Xcode install command](/gifs/setup-macos/terminal-xcode-install.gif)

:::note[How do I find the Terminal on my Mac?]

1. Press ***Command + Space bar*** to open the Spotlight Search.  
2. Start typing "Terminal".  
3. Click the **Terminal** app.
:::

**Note:** After running the command above, if you get something like this:

![A Terminal window showing message that 'Command Line Tools' are already installed](./images/setup-macos/xcode-install.png)

That means you've already installed Xcode, and are ready to move to the next step!

## 2. Install the SplashKit SDK

SplashKit is a beginner's all-purpose software toolkit that will allow you to create fun and exciting programs more easily, especially for Graphical User Interface (GUI) programs.

:::tip[Curious to know more?]
The **SplashKit SDK** is installed using the `skm-install.sh` shell script which is stored in the [**skm**](https://github.com/splashkit/skm) GitHub repository (in the **install-scripts** folder).

This install script uses the `git` command (**that we installed with Xcode in Step 1!**) to access and download the contents of the GitHub repository.  
It will also add the required paths to your PATH environment variable.
:::

Copy and paste the following command into your Terminal window:

```bash
bash <(curl -s https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh)
```

![Gif showing skm installing in Terminal](/gifs/setup-macos/skm-install.gif)

:::danger[My install command is not working. Help!]
What if the command above does nothing? (as shown in the image below)

![A Terminal window showing no response to bash install command](./images/setup-macos/skm-install-no-response.png)

Make sure your computer is connected to the internet and try disabling your firewall.

***Still no luck?***  
Download the install script locally by right-clicking on [this link](https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh) and selecting "Save Link As".  

To run the downloaded shell script, open the Terminal and navigate to the folder where you saved the file and then use the command: `bash skm-install.sh`.  
For example, if the file is in your *Downloads* folder:
![A Terminal window running local install script file](./images/setup-macos/local-bash-skm-install.png)
:::

## 3. Install Visual Studio Code

Visual Studio Code, also commonly known as *VS Code* or just *Code*, is a powerful and versatile code editor that enables efficient coding, debugging, and collaboration for your SplashKit projects!

:::note[VS Code has it all!]
Once you have your code project set up, Visual Studio Code will be the main program you will use to write, build, run and debug your code.
:::

First you will need to download the zip file from: [code.visualstudio.com/Download](https://code.visualstudio.com/Download)

To install: double-click the zip file, then click and drag the **Visual Studio Code** Application file into the ***Applications*** folder:

![Gif showing Visual Studio installation in Finder](/gifs/setup-macos/vs-code-install.gif)

### Recommended Extensions

Visual Studio Code has an extensive library of *Extensions* that let you add improved functionality for languages, debuggers, and tools to support your development workflow.  
Using extensions in VS Code will make it easier and faster to code with whatever language or tools you are using.

#### C# Language Extensions

For **C#** code, we recommended that you install the `C#`, `C# Dev Kit` and `IntelliCode for C# Dev Kit` extensions.

:::tip[How do I install the C# extensions?]

1. Open Visual Studio Code and click on the icon in the left panel (shown in the purple box in the image below).
2. Type "C#" in the Search bar at the top (shown in the blue box).
3. Click "Install" for each of the extensions listed (shown in the green box).

![Visual Studio Code window showing recommended extensions for C#](./images/setup-macos/vs-code-csharp-extensions.png)
:::

#### C++ Language Extensions

For **C++** code, we recommended that you install the `C/C++` extension.  

You can also install the `C/C++ Extension Pack` extension which includes multiple extensions bundled together. If you have issues with syntax highlighting, the `Better C++ Syntax` extension is one of the best for this.

:::tip[How do I install the C++ extensions?]

1. Open Visual Studio Code and click on the icon in the left panel (shown in the purple box in the image below).
2. Type "C++" in the Search bar at the top (shown in the blue box).
3. Click "Install" for the "C/C++" extensions (shown in the green box).
4. (Optional) Click "Install" for any other extensions you want to install (shown in the orange box).

![Visual Studio Code window showing recommended extensions for C++](./images/setup-macos/vs-code-cpp-extensions.png)
:::

## 4. Install Language Specific Tools

Some coding languages require specific tools/frameworks to be installed to be able to build and run your code files.  
As you will be coding in C# and C++ in this book, let's look at the tools needed for these languages:

### C# Tools

For coding in C#, you will need to install the `.NET` framework, also commonly called *dotnet*. You will use this to create, build, and run your C# project code.

:::tip
We recommend using **.NET 8.0**, which you can download from the Microsoft dotnet website [here](https://dotnet.microsoft.com/en-us/download).
:::

### C++ Tools

For coding in C++, you will need to have a C++ compiler installed to build your C++ code into a file you can use to run your program.  
Commonly used compilers are `g++` and `clang++`.

:::note
If you installed Xcode Command Line Tools successfully in Step 1, then you will already have the necessary compilers installed and ready for coding in C++!
:::

## 5. Install SplashKit Globally

Now we need to install the SplashKit libraries and library include files into the system default global locations so that when building (compiling) programs created with SplashKit, the compiler can find these files automatically.

To install SplashKit globally on your machine:

Copy and paste the following command into your Terminal window:

```bash
skm global install
```

![Gif showing skm installing globally in Terminal](/gifs/setup-macos/skm-global-install.gif)

:::note[What does this command do specifically?]
The command above will add the **SplashKit libraries** into the `/usr/local/lib/` folder, and the required **SplashKit library include files** into the `/usr/local/include` folder.
:::

## 6. Check Environment Variables

Through this installation process, some steps *should* have edited your computer's environment variables. We now need to ensure the required *paths* have been added to your **PATH** environment variable.

If the previous steps have installed correctly, you should see the following lines in your `.zshrc` file (or `.bashrc` if you are using `bash` instead of `zsh`):

```bash
export PATH="$HOME/.splashkit:$PATH"
export PATH="/usr/local/share/dotnet:$PATH"
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
```

You can check this using the following command in your Terminal:

```bash
nano .zshrc
```

The result of the command above will look similar to this:

![Terminal window showing nano opening .zshrc file](./images/setup-macos/nano-zshrc.png)

If you are missing any of these lines, you can edit the file directly in the **nano** terminal window.  
For example, if the last line was missing:

![Gif showing .zshrc file being edited using nano command](/gifs/setup-macos/nano-edit-zshrc.gif)

## 7. Testing SplashKit Install

:::tip[Coming Soon]
Test your install with `skm test`.
:::
