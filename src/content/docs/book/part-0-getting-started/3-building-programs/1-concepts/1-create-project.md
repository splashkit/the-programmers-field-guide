---
title: Create a Project
---

To create a program using source code, we need somewhere to put that code. While this process may differ slightly between languages, the idea is always the same: gather the code in one place and provide any settings needed.

At this stage, you will be using the C# language, which is part of the open-source [.NET]((https://dotnet.microsoft.com/en-us/)dotnet) framework(https://dotnet.microsoft.com/en-us/) produced by Microsoft. These tools are free, work cross-platform, and provide us with a great language that we can use to explore programming.

Let's see how to use the `dotnet` command line tool, and how we can use this to create a project.

:::note
You need somewhere to save your projects. In this book, we will assume you are saving things in your **Documents/Code** folder. If you are saving these elsewhere then make sure to adjust paths as needed.

If you haven't created a **Code** folder in your documents, then you will need to do this first. You can review the `mkdir` command from [manipulating files](../../2-computer-use/1-concepts/5-manipulating-files.md#creating-folders-and-files).
:::

Try the following commands in the terminal to create a new project:

```sh
cd ~/Documents/Code
mkdir HelloWorld
cd HelloWorld
dotnet new console
ls -lha
```

This starts by moving the shell into your **Documents/Code** folder and creating a new **HelloWorld** folder to contain the project. We can then use this folder to store the files that will be related to this project.

The `dotnet` program will do many things for us. The **new** argument indicates we want a new project, and **console** indicates the type of program. In this context, "console" is a synonym for the terminal. This will create a program that is connected to the terminal with the [standard streams](../../2-computer-use/1-concepts/7-streams.md) for input, output, and error messages.

:::tip
The key thing to remember from this is the command **dotnet new console**.
:::

The file list should show something like this:

```sh
total 16
drwxr-xr-x   6 multitool  dev   192B 16 Aug 21:24 .
drwxr-xr-x  91 multitool  dev   2.8K 15 Aug 21:31 ..
drwxr-xr-x   5 multitool  dev   160B 15 Aug 21:32 .vscode
-rw-r--r--   1 multitool  dev   105B 16 Aug 21:24 Program.cs
drwxr-xr-x   7 multitool  dev   224B 16 Aug 21:24 obj
-rw-r--r--   1 multitool  dev   249B 16 Aug 21:24 HelloWorld.csproj
```

When you look at this, you can skip **.** and **..** as these are the [current and parent](../../2-computer-use/1-concepts/3-files-systems.md#tree-metaphor) folders. The **.vscode** folder holds some settings for the Visual Studio Code editor we are going to use - it is also produced by Microsoft and is designed to work with `dotnet`. **Program.cs** is our source code file, which we will look at in the next section. Temporary parts of the build process will go in **obj**, which dotnet has set up with some working files for it to use already. Lastly, the settings for the project are stored in **HelloWorld.csproj**.

You now have everything you need to get started writing the code.
