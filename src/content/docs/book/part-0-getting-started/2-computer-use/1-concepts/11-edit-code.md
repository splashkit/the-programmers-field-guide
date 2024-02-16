---
title: Launching an editor from the terminal
sidebar:
    label: Editing code
---

From the terminal you can use all of the commands we have already seen as well as launch graphical programs.

| **Action**          | **Command** | **Description**                                     |
| ------------------- | ----------- | --------------------------------------------------- |
| Open a file to edit | `code`      | Launch Visual Studio Code to edit a file or folder. |

Visual Studio Code (VS Code) is a graphical text editor designed to write source code. You can launch Visual Studio Code using the `code` command in the terminal. The [Visual Studio Code documentation](https://code.visualstudio.com/docs/editor/command-line) describes how to use this in detail, including how to install this shortcut if you have built your own setup.

The `code` command can be passed an argument to indicate the file or folder you want to open. For example, `code .` will launch VS Code and have it open the folder from the current working directory. Use `code Program.cs` to open VS Code with the *Program.cs* file.

```sh
cd ~/Documents/Code/HelloWorld
code .
# launch VS Code with the HelloWorld folder open
```

We will explore how to get this all setup and ready to go in the next section.
