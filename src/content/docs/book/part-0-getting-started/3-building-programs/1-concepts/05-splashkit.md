---
title: Using SplashKit
---

As we saw in the [Digital Realities](../../../1-digital-realities/0-overview) chapter, programming is about building code artefacts that create capabilities within the computer. Our ability to do this has been expanding over time as developers create and share abstractions through **libraries** and **frameworks**. These are collections of artefacts from other programmers, which we can use and build upon in our own work.
This lets us concentrate on the unique features of our program.

[SplashKit](https://splashkit.io) is a library designed to aid in learning programming by providing tools you can use to show windows, draw shapes and images, play sound effects and music, and receive inputs from users.

Creating graphical programs really aids the learning process. They let you **see** things working, and see when things are *not* working. You will also be able to create programs that are much more engaging and fun to interact with, while still practicing knowledge and skills that can be transferred to any domain.

## Add SplashKit to your project

Languages usually provide a system that lets developers build *packages* to share libraries and their related files. In C#, you can use the [NuGet](https://learn.microsoft.com/en-us/nuget) package management to add a library to your project. To add the SplashKit package to your project you can provide the **add package** argument to the `dotnet` command as shown below.

```sh
cd ~/Documents/Code
mkdir TestSplashKit
cd TestSplashKit
dotnet new console

dotnet add package SplashKit

code .
```

These commands create a new project and add the SplashKitSDK package. An SDK is a **Software Development Kit** - a tool kit for developers to use.

Now you can use the features of [SplashKit](https://splashkit.io) in your code. Open **Program.cs** in VS Code and update it to appear as shown here.

```cs
using static SplashKitSDK.SplashKit;

OpenWindow("My First Window", 320, 240);
ClearScreen(ColorWhite());
FillCircle(ColorRed(), 160, 120, 60);
RefreshScreen();
Delay(5000);
```

Save your changes and then build and run the program using `dotnet run`.  When you do run it, it will open a small window with a white background and a filled red circle in the middle.

Try setting a breakpoint on line 3, and running this in the debugger. You will be able to see each instruction in action.
