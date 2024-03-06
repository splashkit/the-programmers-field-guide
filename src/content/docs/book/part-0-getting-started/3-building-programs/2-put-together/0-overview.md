---
title: Building Your First Program
---

Let's quickly recap the steps needed to build your own program. To create a program with C# you need to:

1. Create a new folder for the project
2. Use `dotnet new console` to create the initial project files
3. Add used packages using `dotnet add package`
4. Write the code in **Program.cs**
5. Build and run using `dotnet run`

The following commands show these steps in the terminal.

```sh
cd ~/Documents/Code
mkdir TestSplashKit
cd TestSplashKit
dotnet new console

dotnet add package SplashKit

code .
dotnet build
dotnet run
```

:::caution[Paths in Windows MSYS2]
Remember to adjust the path to your Documents' folder if you are using MSYS2 on Windows. You will need to change `~/Documents/Code` to be something line `/c/Users/andrew/Documents/Code` - where you need to change `andrew` to match your username. In each case you will need to change `~` to be `/c/Users/<username>`.

For me, the first step of the above will become:

```sh
cd /c/Users/andrew/Documents/Code
# Everything else remains the same
```
:::

You can also run this in the debugger, which will let you step through the program, seeing each instruction in action.

We will go through the steps above in more detail on the next pages.

:::tip
Make sure to **save** your source code files in VS Code before you build and run your project. The tab at the top of the file will show a filled circle at the right of the file name if the file has unsaved changes.
:::
