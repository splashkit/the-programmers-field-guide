---
title: Write Code
---

Now it is time to start writing code. To do this we need a text editor. While you can use any text editor, you want one designed to work with source code. This will give you a whole lot of features designed to make editing code easier.

We will be using [Visual Studio Code](https://code.visualstudio.com) (vscode). This is another great, free, open-source tool from Microsoft. It works well with many languages, including the C# language which we will start with.

Now we have created a new project using `dotnet`, we need to open it in vscode. You can do this from the terminal as shown below.

```sh
code .
```

This opens the current folder (**.**) in vscode.
It is always best to open the folder, rather than the source file directly, as this gives the editor the bigger picture of your project.

In the left-hand side of the vscode window you will see the contents of your HelloWorld project folder.
Double click on **Program.cs** to open it in the source code editor.
Replace the code you see with the following, and save using **Ctrl-S** (or **Cmd-S** on macOS).

```cs
using static System.Console;

WriteLine("Hello, World!");
```

:::tip
There are two ways your editor is trying to help you as you type this.

First, it changes the colour of the text.
This is called **syntax highlighting**, and helps programmers read code by using different colours for different elements of the code.
Any good programming text editor will allow you to set the colour scheme, either with a design created by someone else or your own.

Secondly, as you type the editor gives you suggestions.
This is the **IntelliSense** feature, which tries to provide guidance and shortcuts to speed up your programming.
Once you see the IntelliSense popup, you can use the **arrow keys** on your keyboard to choose between options and the **tab** key to select one.
Try it out!
:::

This code gives you access to functionality in the `System.Console` part of the C# library, and then instructs the computer to write a line of text to the standard output stream.
This is our first complete program, so now let's build and run it!
