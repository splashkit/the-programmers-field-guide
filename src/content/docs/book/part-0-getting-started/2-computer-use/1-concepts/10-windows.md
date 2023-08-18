---
title: Using X Windows
---

If you have been working through this on the multitool Raspberry Pi image, you will have only had access to the terminal interface. Now it is time to fire up the graphical user interface.

:::note

If you have been using macOS or Windows, there are a few things here that you will need. Make sure to read the section on [launching the editor from the terminal](#launching-editor-from-terminal).

:::

### Launch the graphical interface

The graphical environment is like everything else, it is a program that we can run on the computer. In Unix, the graphical interface is known as **X Windows**. To start this running you can use the `startx` command.

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Open graphical environment   | `startx`    | Open the graphical user interface |

This is really simple to use. Just type `startx` and run it as a command in the terminal. You will see the environment change and you can now use your mouse and interact with the computer as you are used to. Click items in menus, use buttons, drag windows around, etc.

:::tip

One of the cool things with X Windows is that you can choose between different **window managers**. Each window manager will give you a different look and feel. This is something to jot down now and play with in the future.

:::

### Open a graphical terminal

### Launching editor from terminal

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Open a file to edit.     | `code`       |Launch Visual Studio Code to edit a file or folder.|


You can launch Visual Studio Code using the `code` command in the Terminal. The [Visual Studio Code documentation](https://code.visualstudio.com/docs/editor/command-line) describes how to use this in detail, including how to install this shortcut if you have built your own setup.

To open Visual Studio Code (vscode) you run the `code` command and you can pass it one argument to indicate the file or folder you want to open. For example, `code .` will open vscode and have it open the folder from the current working directory. Use `code Program.cs` to open vscode with the *Program.cs* file.

```sh
cd ~/Documents/Code/HelloWorld
touch Program.cs
code .
# launch vscode with the HelloWorld folder open
```


### Changing the default start environment

### Accessing other terminals

