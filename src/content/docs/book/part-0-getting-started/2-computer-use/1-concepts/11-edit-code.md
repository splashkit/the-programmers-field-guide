---
title: Editing code
---

## Launching an editor from terminal

From the terminal you can use all of the commands we have already seen as well as launch graphical programs.

| **Action**          | **Command** | **Description**                                     |
| ------------------- | ----------- | --------------------------------------------------- |
| Open a file to edit | `code`      | Launch Visual Studio Code to edit a file or folder. |

Visual Studio Code (vscode) is a graphical text editor designed to write source code. You can launch Visual Studio Code using the `code` command in the terminal. The [Visual Studio Code documentation](https://code.visualstudio.com/docs/editor/command-line) describes how to use this in detail, including how to install this shortcut if you have built your own setup.

The `code` command can be passed an argument to indicate the file or folder you want to open. For example, `code .` will launch vscode and have it open the folder from the current working directory. Use `code Program.cs` to open vscode with the *Program.cs* file.

```sh
cd ~/Documents/Code/HelloWorld
code .
# launch vscode with the HelloWorld folder open
```
