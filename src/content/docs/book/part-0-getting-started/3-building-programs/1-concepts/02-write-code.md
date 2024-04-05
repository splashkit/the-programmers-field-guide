---
title: Write Code
---

Once you have the project setup, the next step is to start writing code. To do this we need a text editor. While you can use any text editor, you want one designed to work with source code. This will give you a whole lot of features designed to make editing code easier.

For now we will just focus on the tool itself, and we will look at the details of the code in the next part.

We will be using [Visual Studio Code](https://code.visualstudio.com) (VS Code). This is another great, free, open-source tool from Microsoft. It works well with many languages, including the C# language which we will start with.

Once you have created a new project using `dotnet`, you can open it in VS Code. It is important to always **open the folder** that contains your project. This allows VS Code to read your *csproj* file to get the settings it needs. You can do this from the terminal as shown below.

```sh
code .
```

This opens the current folder (**.**) in VS Code. It is always best to open the folder, rather than the source file directly, as this gives the editor the bigger picture of your project.

The following image shows what you will see in VS Code. In the left-hand side of the VS Code window you will see the list of files in your project folder. You can open a file by double-clicking on it in the explorer on the left. For example, double-clicking on **Program.cs** will open it in the source code editor as shown below.

![Visual Studio Code](../2-put-together/images/vscode-cli-hello-world-output.png)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

Once you have updated the code, you need to save it before you can build and run it. You can click **Save** in the File menu or by pressing the **Ctrl-S** (or **Cmd-S** on macOS) shortcut keys.

:::tip
When using VS Code, there are two ways it will try to help you as you type your code.

1. First, it changes the colour of the text.

    This is called **syntax highlighting**, and helps programmers read code by using different colours for different elements of the code.
    Any good programming text editor will allow you to set the colour scheme, either with a design created by someone else or your own.

2. Secondly, as you type the editor gives you suggestions.

    This is the **IntelliSense** feature, which tries to provide guidance and shortcuts to speed up your programming.
    Once you see the IntelliSense popup, you can use the **arrow keys** on your keyboard to choose between options and the **tab** key to select one.
:::

Once the code is saved, you are now ready to build and run your program!
