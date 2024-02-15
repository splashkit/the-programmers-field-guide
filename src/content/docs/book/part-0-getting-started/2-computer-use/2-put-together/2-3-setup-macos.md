---
title: Set up my macOS
sidebar:
  attrs:
    class: apple
  label: " - macOS"
---

In this guide, we will walk through the steps to install the necessary Applications and Tools that you will need to code in C# and C++ with SplashKit.  
We will be using the **Terminal** app, with the **zsh** shell. You can also use the **bash** shell if you prefer.

:::note[Already have SplashKit installed?]
If you have previously installed SplashKit (before 2024):

- Update SplashKit using your Terminal, with the command: `skm update`
- Then you can skip to Step [3. Install SplashKit Globally](#3-install-splashkit-globally)

:::

Now, let's get started!

To get SplashKit and other coding tools installed on macOS, follow the steps outlined below:

## 1. Install Command Line Tools

The *Xcode* Command Line Tools Package is a small self-contained package, available for download separately from *Xcode*, that allows you to do command line development in macOS. It consists of the macOS SDK and command-line tools such as `clang`, which are installed in the `/Library/Developer/CommandLineTools` directory.

To install these tools, copy the command below:

```bash
xcode-select --install
```

Then, open your **Terminal** app and paste the copied text.

![Gif showing Spotlight Search to open Terminal and pasting Xcode install command](/gifs/setup-macos/terminal-xcode-install.gif)

:::note[How do I find the Terminal on my Mac?]

1. Press ***Command*** (⌘) + ***Space bar*** to open the Spotlight Search.  
2. Start typing "Terminal".  
3. Click the **Terminal** app.

:::

**Note:** After running the command above, if you get something like this:

![A Terminal window showing message that 'Command Line Tools' are already installed](./images/setup-macos/xcode-install.png)

That means you've already installed Xcode, and are ready to move to the next step!

## 2. Install SplashKit SDK

SplashKit is a beginner's all-purpose software toolkit that will allow you to create fun and exciting programs more easily, especially for Graphical User Interface (GUI) programs.

:::tip[Curious to know more?]
The **SplashKit SDK** is installed using the `skm-install.sh` shell script which is stored in the [**skm**](https://github.com/splashkit/skm) GitHub repository (in the **install-scripts** folder).

It will also add the required paths to your PATH environment variable.
:::

Copy and paste the following command into your Terminal window to download and run the SplashKit installer:

```bash
bash <(curl -s https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh)
```

![Gif showing skm installing in Terminal](/gifs/setup-macos/skm-install.gif)

:::danger[My install command is not working. Help!]
If the command above does not produce any response, ensure that your computer is connected to the internet and try disabling your firewall.

***Still no luck?***  
If you still encounter issues, you can download the install script locally by right-clicking on [this link](https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh) and selecting "Save Link As".

To run the downloaded shell script, open the Terminal and navigate to the folder where you saved the file. Then run the following command:

```bash
bash skm-install.sh
```

:::

## 3. Install SplashKit Globally

Finally, you will need to install the SplashKit Global Libraries. This will install the SplashKit libraries and library include files into the system's default global locations so that the compiler can find these files when building (compiling) programs created with SplashKit.

To install SplashKit globally, copy and paste the following command into your Terminal window:

```bash
skm global install
```

![Gif showing skm installing globally in Terminal](/gifs/setup-macos/skm-global-install.gif)

:::note[What does this command do specifically?]
The command above will add the **SplashKit libraries** into the `/usr/local/lib/` folder, and the required **SplashKit library include files** into the `/usr/local/include` folder.
:::

## 4. Install Visual Studio Code

Visual Studio Code, also commonly known as *VS Code* or just *Code*, is a powerful and versatile code editor that enables efficient coding, debugging, and collaboration for your SplashKit projects!

:::note[VS Code has it all!]
Once you have your code project set up, Visual Studio Code will be the main program you will use to write, build, run and debug your code.
:::

First you will need to download the zip file from: [code.visualstudio.com/Download](https://code.visualstudio.com/Download)

To install: double-click the downloaded zip file, then click and drag the **Visual Studio Code** Application file into the ***Applications*** folder.

![Gif showing Visual Studio installation in Finder](/gifs/setup-macos/vs-code-install.gif)

### Add 'code' command to PATH

You can install the `code` command to allow you to open any file or folder in a new Visual Studio Code window, right from your Terminal!

Follow the steps in the [**Launching from the command line**](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) section of the *Visual Studio Code on macOS* article to install this command.

:::caution['zsh: command not found: code']
If you are having issues with the `code` command not working after following the steps above, you can run the following command (adapted from the [Alternative Manual Instructions](https://code.visualstudio.com/docs/setup/mac#_alternative-manual-instructions) section).

```zsh
cat << EOF >> ~/.zshrc
export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
EOF
```

:::

### Recommended Extensions

The final step to complete the setup of VS Code is to install a few *Extensions* in VS Code:

[**Set up my VS Code Extensions**](../2-7-setup-vscode)

Go to the page linked above, follow the steps to install both the C# and C/C++ recommended extensions, and then come back here and continue to the next step. *You can use the "Back button" in your browser to return to this page.*

## 5. Install Language Specific Tools

Some coding languages require specific tools/frameworks to be installed to be able to build and run your code files.  
As you will be coding in C# and C++ in this book, let's look at the tools needed for these languages:

### C# Tools

For coding in C#, you will need to install the `.NET` SDK which will allow you to use the *dotnet* terminal command to create, build, and run your C# project code.

Download the latest version of the .NET SDK for macOS from the official .NET website: [dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)

:::note[No SplashKit Global Install?]
If you have had issues installing the SplashKit global libraries, or you are using an older version of SplashKit, you will need to use **.NET 8.0**, as this is the version used with the `skm` commands mentioned in the [No SplashKit Global Install](../3-0-troubleshooting-install/#no-splashkit-global-install) troubleshooting guide.
:::

Run the downloaded installer and follow on-screen instructions.

### C/C++ Tools

For coding in C++, you will need to have a C++ compiler installed to build your C++ code into a file you can use to run your program. Commonly used C++ compilers are `g++` and `clang++`.

:::note
If you installed Xcode Command Line Tools successfully in Step 1, then you will already have the necessary compilers installed and ready for coding in C++!
:::

## 6. Check Environment Variables

Through this installation process, some steps *should* have edited your computer's environment variables, or your "Shell Profile" file.

To ensure the required *paths* will be added to your **PATH** environment variable each time you open a new Terminal shell, you will need to check that your **"Shell Profile" file** contains the following lines:

```bash
export PATH="$HOME/.splashkit:$PATH"
export PATH="/usr/local/share/dotnet:$PATH"
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
```

:::tip[Shell Profiles]
The two most common shell profiles are **zsh** (Default shell since macOS Catalina) and **bash**:

- If you are using `zsh` (Z Shell) then the *"Shell Profile"* files are: `.zshrc` or `.zprofile`.
- If you are using `bash` (Bash Shell) then the *"Shell Profile"* files are: `.bash_profile` or `.bashrc`.

:::

If you are missing any of the lines above, you can edit your "Shell Profile" file in a few ways:

### Using '*nano*' in the Terminal

To open the file in the "nano" shell, copy and paste the following command in your Terminal:

```bash
nano .zshrc
```

The result of the command above will look similar to this:

![Terminal window showing nano opening .zshrc file](./images/setup-macos/nano-zshrc.png)

Now, to edit the file directly inside the **nano** terminal window, you can just move the cursor down to the last line and paste the missing command.  
Once you're finished, press ***Control*** (^) + ***X*** to exit **nano** and follow the prompts to save the changes.

For example, if the last line was missing:

![Gif showing .zshrc file being edited using nano command](/gifs/setup-macos/nano-edit-zshrc.gif)

### Using 'code' to open .zshrc file in Visual Studio Code

You can open your `.zshrc` file in Visual Studio Code using the `code` command, to edit and add any missing lines.

To do this, copy and paste the following command in your Terminal:

```bash
code ~/.zshrc
```

![Gif showing 'code ~/.zshrc' command opening file in VS Code](/gifs/setup-macos/code-zshrc-open.gif)
