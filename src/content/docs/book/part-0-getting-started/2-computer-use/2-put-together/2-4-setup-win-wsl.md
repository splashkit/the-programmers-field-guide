---
title: Set up my Windows (with WSL)
sidebar:
  attrs:
    class: windows
  label: " - Windows (WSL)"
---

In this guide, we will walk through the steps to install the necessary applications and tools on **WSL** (**W**indows **S**ubsystem for **L**inux) with Ubuntu. This will enable you to code in C# and C++ with SplashKit.

<!-- Is this part below needed here? -->
Ensure that you have WSL installed and configured on your Windows machine.

Now, let's get started!

To set up WSL and install SplashKit and other coding tools on Windows, follow the steps outlined below:

## 1. Install Windows Subsystem for Linux (WSL)

Windows Subsystem for Linux (WSL) is a feature of Windows that allows you to run a Linux environment on your Windows machine, without the need for a separate virtual machine or dual booting.

<!-- TODO: Update install instructions to be a bit clearer -->
To install WSL on your Windows computer, follow the instructions provided in the official Microsoft documentation: [Install Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

<!-- TODO: Check if this Gif is needed -->
![Gif showing WSL being installed from Microsoft store](/gifs/setup-windows/install-wsl.gif)

Make sure to choose the WSL version that suits your needs (WSL 1 or WSL 2) and follow the instructions provided.

<!-- Possible alternative to above - need to make things less vague -->
<!-- :::tip[Two versions of WSL available]
You can read [this article](https://learn.microsoft.com/en-us/windows/wsl/compare-versions) to compare the two versions of WSL and choose the one that best suits your needs.

If you're still unsure, choose WSL 2.
::: -->

<!-- TODO: Update Gif to be clearer -->
![Gif showing WSL terminal running setup commands](/gifs/setup-windows/wsl-terminal.gif)

## 2. Install Command Line Tools

To install SplashKit on WSL, you will firstly need to install the `git` and `curl` tools using the `apt` command, which works with Ubuntu's **A**dvanced **P**ackaging **T**ool.

Update the package lists by running the following command in your **WSL Terminal**:

```bash
sudo apt update
```

This ensures that you have the latest information about available packages.

:::note[Where is the WSL Terminal?]
You can open your WSL Terminal by searching for "WSL" in the Windows Start menu and selecting the appropriate WSL distribution.
:::

As mentioned above, `git` and `curl` are required to download the SplashKit installer.

Install these tools by running the following command:

```bash
sudo apt install git curl
```

![Gif showing command above being run in WSL Terminal](/gifs/setup-windows/wsl-git-curl.gif)

## 3. Install SplashKit SDK

SplashKit is a beginner's all-purpose software toolkit that will allow you to create fun and exciting programs more easily, especially for Graphical User Interface (GUI) programs.

:::tip[Curious to know more?]
The **SplashKit SDK** is installed using the `skm-install.sh` shell script which is stored in the [**skm**](https://github.com/splashkit/skm) GitHub repository (in the **install-scripts** folder).

It will also add the required paths to your PATH environment variable.
:::

Copy and paste the following command into your WSL Terminal to download and run the SplashKit installer:

```bash
bash <(curl -s https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh)
```

![Gif showing skm installing in WSL Terminal](/gifs/setup-windows/wsl-skm-install.gif)

:::danger[My install command is not working. Help!]
If the command above does not produce any response, ensure that your computer is connected to the internet and try disabling your firewall.

***Still no luck?***  
If you still encounter issues, you can download the install script locally by right-clicking on [this link](https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh) and selecting "Save Link As".

To run the downloaded shell script, open the **Git Bash** Terminal and navigate to the folder where you saved the file. Then run the following command:

```bash
bash skm-install.sh
```

:::

## 4. Install SplashKit Globally

Finally, you will need to install the SplashKit Global Libraries. This will install the SplashKit libraries and library include files into the system's default global locations so that the compiler can find these files when building (compiling) programs created with SplashKit.

To install SplashKit globally on your WSL, copy and paste the following commands into your WSL Terminal window:

```bash
skm linux install
skm global install
```

![Gif showing skm installing globally in WSL Terminal](/gifs/setup-windows/wsl-install-global.gif)

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

<!-- TODO: Need some clarification from Aditya here -->
1. Download the latest version of the .NET SDK for Linux from the official .NET website: [dotnet.microsoft.com/download](https://learn.microsoft.com/en-us/dotnet/core/install/linux)
2. Open your WSL Terminal and navigate to the folder where you downloaded the SDK.
3. Install the SDK by running the following commands:

```bash title="Dotnet Installation script"
# Get Ubuntu version
declare repo_version=$(if command -v lsb_release &> /dev/null; then lsb_release -r -s; else grep -oP '(?<=^VERSION_ID=).+' /etc/os-release | tr -d '"'; fi)

# Download Microsoft signing key and repository
wget https://packages.microsoft.com/config/ubuntu/$repo_version/packages-microsoft-prod.deb -O packages-microsoft-prod.deb

# Install Microsoft signing key and repository
sudo dpkg -i packages-microsoft-prod.deb

# Clean up
rm packages-microsoft-prod.deb

# Update packages
sudo apt update

sudo apt-get install dotnet-sdk-<version>
```

Replace `<version>` with the actual version you wish to download.  
*For example:* `sudo apt install dotnet-sdk-8.0`

### C/C++ Tools

For coding in C++, you will need a C++ compiler and debugger. WSL comes with GCC (GNU Compiler Collection) and GDB (GNU Debugger) by default. Ensure they are installed by running the following commands:

<!-- TODO: Check about clang++ for the below commands -->

```bash
sudo apt-get install g++
sudo apt-get install gdb
```

These commands will install the necessary C/C++ compilers and debuggers for your development environment.

<!-- Now, your Windows machine is set up with WSL, Visual Studio Code, and SplashKit, ready for C# and C++ development. Happy coding! -->
