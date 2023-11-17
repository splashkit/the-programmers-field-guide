---
title: Build and Run
---

The computer cannot run source code directly. We need a [compiler or interpreter](../../1-digital-realities/1-concepts/6-source-code.md#compilers-and-interpreters). Dotnet uses a combination of both, with your source code being compiled into an intermediate code that is then run within a JIT compiler at runtime - though all of this is abstracted away for us by the `dotnet` tool.

To build and run we need a terminal - and there is one built into vscode! Press **Ctrl-~** and a Terminal should open at the bottom of your window. You can also access this using **Ctrl-P**, typing **Terminal**, and selecting **Terminal: Create New Terminal** from the options shown.

:::tip
Learn the shortcuts - these will help save you time. With programming tools, most things can be done from the keyboard without needing to use your mouse or touch screen.
:::

To build and run the program:

```sh
dotnet build
dotnet run
```

The first step, `dotnet build`, will compile the code, listing any errors you may have. `dotnet run` will then execute your program - showing you the message you printed to the terminal.

:::tip
You can actually skip `dotnet build`. The `dotnet` tool will check your project when you run it. If any of the files have changed, it will build it before it runs it. This isn't something all languages will do, but it is a shortcut we can use with dotnet.
:::

With these simple commands, you can create a project, and build and run it from the terminal.

- `dotnet new console` - create the project
- `dotnet build` - compile the code (can be skipped)
- `dotnet run` - build if needed, then execute your program

Before we wrap up, let's look at the debugger, a really useful tool, and the SplashKit library that makes it easier to build more interesting programs.
