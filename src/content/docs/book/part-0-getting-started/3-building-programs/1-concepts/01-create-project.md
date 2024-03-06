---
title: Create a Project
---

To create a program we need to write source code, and to write source code we need somewhere to put it. 
While this process may differ slightly between languages, the idea is always the same: gather the code in one place and provide any settings needed.

At this stage, you will be using the C# language, which is part of the open-source [.NET framework](https://dotnet.microsoft.com/en-us/) produced by Microsoft. These tools are free, work cross-platform, and provide us with a great language that we can use to explore programming.

:::note
You need somewhere to save your projects. In this book, we will assume you are saving things in your **~/Documents/Code** folder.  
If you are saving your code elsewhere then make sure to adjust paths as needed.  
If you are using **WSL (with Ubuntu)**, you might need to also create a "**Documents**" folder in your base directory, as it isn't created by default.


If you haven't created a **Code** folder in your documents, then you will need to do this first.
Review the `mkdir` command from [manipulating files](../../../2-computer-use/1-concepts/05-manipulating-files/#making-a-directory-mkdir) to do this using the shell.
:::

## The `dotnet` program

With C#, you will use the `dotnet` program in the Terminal to perform actions like creating a project, adding libraries, building, and running your project. These commands work with project setting files, which are created for you when you use the dotnet program to create a project.

| **Action**          | **Command** | **Description**                                     |
| ------------------- | ----------- | --------------------------------------------------- |
| Create a project | `dotnet new console`      | Creates a C# project in the current folder. |

The `dotnet` program sets up a C# project using the dotnet framework. The `new` argument indicates we want it to create a new project, and `console` indicates the type of program. In this context, "console" is a synonym for the terminal, and tells the `dotnet` tool we would like to write a program that is connected to the terminal with the [standard streams](../../../2-computer-use/1-concepts/09-streams/) for input, output, and error messages.

:::tip
The key thing to remember from this is the command **`dotnet new console`**.
:::

When you run `dotnet new console`, it will create a few files and folders for you in the current director:

* **.vscode** is a folder to hold settings for the Visual Studio Code editor we are going to use, which is also produced by Microsoft and designed to work with `dotnet`. You may not see this folder until you open the project in Visual Studio Code for the first time, which we will do soon.
* **Program.cs** is the initial source code file for the project, which we will look at in the next section.
* **obj** is a folder for storing temporary files related to building your program. If you run `ls obj/` you will see that there are already some files in this folder -- feel free to use `cat` to explore what they contain.
* **Project.csproj** is a file containing settings for the project. This will be named the same as the name of the folder you run it in. So if you run `dotnet new console` in a folder named **HelloWorld** then the *csproj* file will be called **HelloWorld.csproj**.

When you run this command you will have everything you need to get started writing some code.
