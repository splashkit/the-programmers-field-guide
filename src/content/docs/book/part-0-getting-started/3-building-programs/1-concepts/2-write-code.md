---
title: Write Code
---

Now it is time to start writing code. To do this we need a text editor. While you can use any text editor, you want one designed to work with source code. This will give you a whole lot of features designed to make editing code easier.

We will be using [Visual Studio Code](https://code.visualstudio.com) (vscode). This is another great, free, open-source tool from Microsoft. It works well with many languages, including the C# language which we will start with.

Now we have a project open, we need to open that in vscode. You can do this from the terminal as shown below.

```sh
code .
```

This opens the current folder (**.**) in vscode, giving it all of the files it needs to help you write your code. It is always best to open the folder, rather than the source file directly. This gives the editor the bigger picture of your project.

Replace the code you see with the following, and save using **Ctrl-S** (or **Cmd-S** on macOS).

```cs
using static System.Console;

WriteLine("Hello World!");
```

:::tip
Notice the editor trying to help you as you type this. The **IntelliSense** features of the editor use the features of the programming language to provide guidance and shortcuts to speed up your programming.
:::

This code gives you access to functionality in the `System.Console` part of the library, and then instructed the computer to write a line of text to standard output. This is our first program, so now we can build and run this.
