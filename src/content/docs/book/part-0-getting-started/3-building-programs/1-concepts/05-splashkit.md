---
title: Using SplashKit
---

As we saw in the [Digital Realities](../../../1-digital-realities/0-overview) chapter, programming is about building code artefacts that create capabilities within the computer. Our ability to do this has been expanding over time as developers create and share different building blocks through **libraries** and **frameworks**. These are collections of these building blocks from other programmers, which we can use and build upon in our own work.
This lets us concentrate on the unique features of our program.

[SplashKit](https://splashkit.io) is a library designed to aid in learning programming by providing tools you can use to show windows, draw shapes and images, play sound effects and music, and receive inputs from users.

Creating graphical programs can really aid the learning process. They let you **see** things working, and see when things are *not* working. You will also be able to create programs that are much more engaging and fun to interact with, while still practicing knowledge and skills that can be transferred to any domain.

## Add SplashKit to your project

Languages usually provide a system that lets developers build *packages* to share libraries and their related files. In C#, you can use the [NuGet](https://learn.microsoft.com/en-us/nuget) package management to add a library to your project. To add the SplashKit package to your project you can provide the **add package** argument to the `dotnet` command as shown below.

| **Action**          | **Command** | **Description**                                     |
| ------------------- | ----------- | --------------------------------------------------- |
| Add a package to your program | `dotnet add package <package name>`  | Add "package name" to your program, so you can use the things contained within it. |

For example, you can use the following command at the terminal to add the `splashkit` library to the project in the current folder.

```sh
dotnet add package SplashKit
```

Now you can use the features of [SplashKit](https://splashkit.io) in your code.
