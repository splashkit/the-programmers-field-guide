---
title: Set up my macOS
sidebar:
  attrs:
    class: apple
---

Let's get your macOS computer ready to start coding!

:::note[Already have SplashKit installed?]
If you have previously installed SplashKit (before 2024):

- Update SplashKit using your Terminal, with the command: `skm update`
- Then you can skip to Step [5. Install SplashKit Globally](#5-install-splashkit-globally)
:::

Now, to get SplashKit installed on macOS, follow the five steps outlined below:

## 1. Install Xcode Command Line Tools

The Command Line Tools provided by Xcode provide a large amount of developer
tools required to compile and develop applications.

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

**Note:** When you run the command above, if you get something like this:

![A Terminal window showing message that 'Command Line Tools' are already installed](./images/setup-macos/xcode-install.png)

That means you've already installed it, and are ready to move to the next step!

## 2. Install the SplashKit SDK

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

Firstly, download the zip file from: [code.visualstudio.com/Download](https://code.visualstudio.com/Download)

To install, double-click the zip file, then click and drag the **Visual Studio Code** Application file into the ***Applications*** folder:

![Gif showing Visual Studio installation in Finder](/gifs/setup-macos/vs-code-install.gif)

### Recommended Extensions

Visual Studio Code has an extensive library of *Extensions* that let you add improved functionality for languages, debuggers, and tools to support your development workflow.

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

Some coding languages require specific tools/frameworks to be installed as well. As you will be coding in C# and C++ in this book, let's look at the tools needed for these languages:

### C# Tools

For coding in C#, you will need to install the `.NET` framework, also commonly called *dotnet*.

:::tip
We recommend using **.NET 8.0**, which you can download from the Microsoft dotnet website [here](https://dotnet.microsoft.com/en-us/download).
:::

**TODO: Need to include nuGet package?**

### C++ Tools

For coding in C++, you will need to have a C++ compiler installed.  
Commonly used compilers are `g++` and `clang++`.

:::note
If you installed Xcode Command Line Tools successfully in Step 1, then you will already have the necessary compilers installed and ready for coding in C++!
:::

## 5. Install SplashKit Globally

**TODO: Add intro text**

To install SplashKit globally on your machine:  
Copy and paste the following command into your Terminal window:

```bash
  skm global install
```

![Gif showing skm installing globally in Terminal](/gifs/setup-macos/skm-global-install.gif)
