---
title: Set up my Windows (with WSL)
sidebar:
  attrs:
    class: windows
  label: " - Windows (WSL)"
---

In this guide, we will walk through the steps to install the necessary Applications and Tools on **WSL** (**W**indows **S**ubsystem for **L**inux) *with Ubuntu*. This will enable you to code in C# and C++ with SplashKit.

Now, let's get started!

To set up WSL and install SplashKit and other coding tools on Windows, follow the steps outlined below:

## 1. Install Windows Subsystem for Linux (WSL)

Windows Subsystem for Linux (WSL) is a feature of Windows that allows you to run a Linux environment on your Windows machine, without the need for a separate virtual machine or dual booting.

:::note[WSL 1 vs WSL 2]
*WSL 2 (recommended) is the default version, but you can look at [this article](https://learn.microsoft.com/en-us/windows/wsl/install-manual) if you have issues, or if you are using an older Windows 10 version.*
:::

### Method 1: Command Line

You can install both WSL and Ubuntu from the command-line using the following steps that have been adapted from the instructions provided in the official Microsoft documentation: [Install Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install). This is the recommended method.

Open Terminal, PowerShell or Windows Command Prompt in *administrator mode* by right-clicking and selecting "Run as administrator", then copy and paste the following command to install WSL and Ubuntu:

```bash
wsl --install
```

![Gif showing WSL terminal running wsl --install commands](/gifs/setup-windows/wsl-terminal.gif)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

### Method 2: Microsoft Store

Alternatively, you can install WSL (and Ubuntu) directly from the Microsoft Store if you have this on your Windows computer.

To do this, search "WSL" in the Microsoft Store app (as shown below), or [click this link](https://apps.microsoft.com/store/detail/9P9TQF7MRM4R).

![Gif showing WSL being installed from Microsoft store](/gifs/setup-windows/install-wsl.gif)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

You will also need to download **Ubuntu** from the Microsoft Store. Search "Ubuntu" in the Microsoft Store app, or [click this link](https://apps.microsoft.com/store/detail/9PDXGNCFSCZV).

### Create Ubuntu User Account

Firstly, you need to **Restart** your computer if you haven't done so already.

A terminal window installing Ubuntu should pop up automatically, otherwise open the WSL or Ubuntu app for this window to open.

When prompted, enter your new UNIX username and password.  
For example, with the username "**default-user**", your terminal would look like this:

![Image showing WSL terminal with ubuntu user account set up](./images/setup-windows/terminal-ubuntu-user-account.png)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

You can see in the image above where the "**default-user**" username was first entered (shown in the pink box), and the same username being used with the terminal prompt (shown in the orange box).

:::tip[Troubleshooting tip:]
If you have issues installing the WSL with Ubuntu, go to the [Issues creating Ubuntu user account](https://splashkit.io/troubleshoot/windows-wsl/wsl-issue-1/) page on the SplashKit website for a way to reset the Ubuntu installation and user account setup.
:::

WSL is now setup and ready to use!

:::note[Opening WSL Terminal]
To open a terminal for your WSL, search for "Ubuntu", and click the Ubuntu App (green box below):

![Open Ubuntu Terminal](./images/setup-windows/ubuntu-terminal-open.png)
:::

### Configure 'Windows Terminal'

Note: This step is *optional*, but encouraged.

If you want to be able to have your 'Windows **Terminal**' app automatically open with WSL, you can change the *Default profile* to use WSL (with Ubuntu) using the steps below:

Firstly, open the Terminal app, and click the drop-down arrow at the top of the window (shown in the green box in the image below), then click on "Settings" (shown in the orange box):

![Image showing Terminal App with how to open settings](./images/setup-windows/windows-terminal-settings.png)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

Next, click on the drop-down menu within the *Default profile* section and select either of the **Ubuntu** profiles. *If you're unsure, select the one with the Linux penguin icon* (shown in the pink box):

![Image showing Terminal App with how to change default profile in settings](./images/setup-windows/windows-terminal-default-profile.png)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

Click **Save**. (Don't forget this!)

Now your Terminal app will automatically use the WSL/Ubuntu command line when you open it.

:::note
Don't worry if you have different profiles in your Settings, as long as you can see at least one profile that has "Ubuntu" in the name (if you are using the default setup from [step 1](#1-install-windows-subsystem-for-linux-wsl)).
:::

:::tip[Pin it!]
To make it easier to open each time, you can pin your Terminal to the Taskbar.

- Open the Terminal App.
- Right-click on the Terminal App icon in the taskbar (shown in the orange box in the image below).
- Select "Pin to taskbar" (shown in the pink box):

![Image showing Terminal App pinning to taskbar](./images/setup-windows/terminal-pin-taskbar.png)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>
:::

## Automated Setup

This script will install the following applications and tools:

- Visual Studio Code
- Visual Studio Code Extensions
  - C/C++ Extensions
  - C# Extensions
- .NET SDK
- SplashKit
  - SplashKit Global
- wget
- git
- curl
- clang
- build-essential
- g++
- gdb

:::caution[Uninstall SplashKit in MSYS2 if it has been installed]
Before running the automated script below, make sure to **uninstall SplashKit in the MSYS2/MINGW64 terminal** if you have installed it there.

You can uninstall SplashKit using the command: `skm uninstall`.

This will ensure the automated script below does not try to use the `.splashkit` folder inside the MSYS2 folders accidentally.
:::

Open the **Ubuntu** Terminal and run the following command:

```bash
curl -s "https://programmers.guide/resources/WSL_InstallScript.sh" | bash /dev/stdin
```

:::note
This script may take a while to run (approx. 5-10 mins).

If `curl` is not already pre-installed on your WSL environment, you can run the following command:

```bash
sudo apt install curl
```

Then run the `curl -s "..." | bash /dev/stdin` command again.
:::

Once the automated script has finished running, close and reopen the Terminal.

Run the command `skm` to check SplashKit is installed correctly.

:::tip[Using WSL Terminal]
Once you're finished, you can go to the [Using WSL](#using-wsl) section for more information about accessing files in your C drive with the WSL terminal.
:::

## Manual Steps

## 2. Install Command Line Tools

To install SplashKit on WSL, you will firstly need to install the `git`, `curl`, and `clang` tools using the `apt` command, which works with Ubuntu's **A**dvanced **P**ackaging **T**ool.

Open your WSL Terminal. You can do this by using the Windows Terminal app if you followed the steps above, by searching for "WSL" in the Windows Start menu and then select the **WSL** App, or by using the app for the Linux distribution you installed, such as **Ubuntu**, which is installed by default.

Update the package lists by running the following command in your **WSL Terminal**:

```bash
sudo apt update
```

Next, install the `git` and `curl` tools by running the following command:

```bash
sudo apt install git curl clang
```

![Gif showing command above being run in WSL Terminal](/gifs/setup-windows/wsl-git-curl.gif)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

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
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

:::tip[Troubleshooting tip:]
If you have issues installing the SplashKit SDK, go to [this troubleshooting page](https://splashkit.io/troubleshoot/linux/linux-issue-1/) on the SplashKit website for an alternative installation process.
:::

Close and reopen the WSL Terminal, then run the command below to build SplashKit:

```bash
skm linux install
```

:::note
If prompted, enter your password, type `y`, and press enter to confirm the installation.

This may take a while (approx. 10 mins).

Command above being run in WSL terminal is shown in the next section below.
:::

### Install SplashKit Globally

Finally, you will need to install the SplashKit Global Libraries. This will install the SplashKit libraries and library include files into the system's default global locations so that the compiler can find these files when building (compiling) programs created with SplashKit.

To install SplashKit globally on your WSL, copy and paste the following command into your WSL Terminal window:

```bash
skm global install
```

![Gif showing skm installing globally in WSL Terminal](/gifs/setup-windows/wsl-install-global.gif)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

:::note[What does this command do specifically?]
The command above will add the **SplashKit libraries** into the `/usr/local/lib/` folder, and the required **SplashKit library include files** into the `/usr/local/include` folder.
:::

## 4. Install Visual Studio Code

Visual Studio Code, also commonly known as *VS Code* or just *Code*, is a powerful and versatile code editor that enables efficient coding, debugging, and collaboration for your SplashKit projects!

:::note[VS Code has it all!]
Once you have your code project set up, Visual Studio Code will be the main program you will use to write, build, run and debug your code.
:::

Download and run the installer from: [code.visualstudio.com/Download](https://code.visualstudio.com/Download).

![Gif showing Visual Studio Code installation](/gifs/setup-windows/install-vscode.gif)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

:::tip[Open Code from Terminal]
You can open Visual Studio Code from the Terminal by typing `code` and pressing enter. `code .` will open the current folder in Visual Studio Code.

*You will need to close and reopen your terminal after installing VS Code for the above commands to work.*
:::

### Recommended Extensions

The final step to complete the setup of VS Code is to install a few *Extensions* in VS Code:

[**Set up my VS Code Extensions**](/book/appendix/0-installation/2-7-setup-vscode)

Go to the page linked above, follow the steps to install both the C# and C/C++ recommended extensions, and then come back here and continue to the next step. *You can use the "Back button" in your browser to return to this page.*

## 5. Install Language Specific Tools

Some coding languages require specific tools/frameworks to be installed to be able to build and run your code files.  
As you will be coding in C# and C++ in this book, let's look at the tools needed for these languages:

### C# Tools

For coding in C#, you will need to install the `.NET` SDK which will allow you to use the *dotnet* terminal command to create, build, and run your C# project code.

To install the .NET SDK, open your WSL terminal and run the following commands:

```bash
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

# Install .NET 8.0
sudo apt-get install dotnet-sdk-8.0 dotnet-runtime-8.0
```

:::caution
Make sure that each of these steps works successfully. Paste in the commands one at a time, and check that the output does not indicate there were any errors. You will need to resolve errors as you go, as the later commands will not succeed if the earlier ones fail.

If you have trouble with this, you can try to follow the official instructions for installing this: see the [Install .NET on Linux](https://learn.microsoft.com/en-us/dotnet/core/install/linux) guide.
:::

The script above will install .NET 8.0, but if you want to install an earlier version, you can update the last line with your preferred version.  
*For example*, if you want to use .NET 7.0: `sudo apt install dotnet-sdk-7.0`

:::note
If prompted, enter your password, type `y`, and press enter to confirm the installation.

This may take a while (approx. 10 mins).
:::

:::note[Which SDK version?]
We recommend using *.NET 8.0*, but you can use *.NET 7.0*, or *.NET 6.0* if you have issues with .NET 8.0.
:::

### C/C++ Tools

For coding in C++, you will need a C++ compiler and debugger. WSL comes with GCC (GNU Compiler Collection) and GDB (GNU Debugger) by default, so these may already be installed. The following command will check and install these tools for you:

```bash
sudo apt-get install g++ clang gdb
```

This command installs the necessary C/C++ compilers and debuggers for your development environment if they haven't been installed already.

Your Windows machine is now set up with WSL, Visual Studio Code, and SplashKit, ready for C# and C++ development. Happy coding!

## Using WSL

When you are using WSL, you have a Linux environment running in parallel with Windows. This is why you had to set up a new user account. You were setting up the account within the Linux environment. When you are working in this way, one of the challenges you will have is thinking about where the files are that you are working on, as your Windows and Linux environments will each have their files and folders. To help you get started with this, let's consider how you can access the files in the different environments.

### Accessing Windows Files and Folders from WSL

When you are in the Linux environment, your home directory is not mapped to your Windows home directory. If you want to access files from Windows, you can access this in the **/mnt/c** folder.

```bash
# Output the path to my Linux home
pwd

# Move into my C: on Windows
cd /mnt/c
# Move into my Home (change to use your username!)
cd /mnt/c/Users/andrew/Documents
```

The shell is now in the `C:\Users\andrew\Documents` folder, so I can access the different things I have saved here. When you use this, replace `andrew` with your username. So it will be in the format: `/mnt/c/Users/<username>/Documents`.

:::caution

When you are working in WSL, you are best to keep your projects within the Linux environment and then access these from the Windows environment as described below. Being able to access your Windows files will be useful if you want to copy things from there into your programming projects.

:::

### Accessing WSL Files and Folders from WSL

If you have been working on your projects in WSL, you can access these from Windows using the `\\wsl$` path in the File Explorer. When you access this folder you will see a list of the distributions you have installed in WSL. If you navigate into the `Ubuntu` folder you will have access to the root of your Linux environment. So I can access my Linux home folder using the path `\\wsl$\Ubuntu\home\andrew\Documents`. You will need to change `andrew` to the name of the user you created in Ubuntu, so it will be in the format: `\\wsl$\Ubuntu\home\<username>\Documents`.

One convenient way of accessing your files is to run the `explorer.exe` program from within your WSL terminal. When you do this, you can open a File Explorer and give it a path to open. Running the following commands at the WSL Terminal will let me open my Linux Documents folder in File Explorer.

```bash
# Create Documents folder
mkdir ~/Documents

# Move to my Documents folder in Linux
cd ~/Documents

# Open the current folder in Explorer
explorer.exe .
```

Using this option you can work within your Linux files for your programming projects, and then access these from the File Explorer when needed.

### Accessing WSL Files in File Explorer

*Follow the instructions below to access your WSL folders and files in File Explorer*:

In the left sidebar panel, scroll to the bottom and click on the "Linux" folder (red box below), then navigated into the "Ubuntu" folder (orange box below):

![Initial navigation to WSL Folder in File Explorer](./images/setup-windows/wsl-file-explorer-ubuntu.png)

Next, go into the "home" folder (red box below):

![Navigation to WSL home folder in File Explorer](./images/setup-windows/wsl-file-explorer-home.png)

You will then see a folder with the username that you used to create your WSL/Ubuntu account. Click into this folder to see your WSL folders and files.

:::note
This is the *home* (~) directory for WSL, which is the location that your Ubuntu terminal will start in when you open a new terminal.

Also, if you have issues and need to reinstall/recreate your Ubuntu account, these folders and files will be removed. Make sure to create a backup of any important folders/files beforehand.
:::
