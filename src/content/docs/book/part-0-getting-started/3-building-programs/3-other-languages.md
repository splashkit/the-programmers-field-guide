---
title: Other Languages
---

Each language will have a different set of tools needed to get started.

At their core, all of these tools work in more or less the same way. They will have a set of command line tools to build your code and run associated programs.

Languages like [Python](https://www.python.org) and [Ruby](https://www.ruby-lang.org/en/) are both examples of scripting languages. These use an [interpreter](../1-digital-realities/1-concepts/6-source-code.md#compilers-and-interpreters) to read and execute your code. To work with these languages, you need to install their SDK which includes the interpreter and the languages core libraries. 

These languages provide convenient **REPL** tools. A REPL is a program that provides a **Read, Execute, Print, Loop**. This will *read* your instruction from the terminal, *execute* it, *print* the result from the instrucion, and then *loop* back to read so that you can enter a new instruction. This is much like the terminal, execept you are writing instruction using the programming laanguage.

Scripting languages provide very convenient ways of quickly and easily working with data. It is harder to share these programs, as they require the language and its developer tools to run programs.

Languages like C and C++ are compiled, allowing you to build programs that can be run directly within the operating system. They have their own SDKs with the compiler and language libraries. With these you can compile your source code and have it link in any code from libraries you use. You can usually control how this linking works, so that you can have shared libraries or just embed the code you need in your program's executable file. You can then distribute the program, with any shared libraries, to users without them needing to have the SDK installed themselves.

[Java](https://java.sun.com) and [C# (.NET)](https://dotnet.microsoft.com) provide an option between scripting languages and these compiled languages. Both Java and C# have both a compiler and a runtime environment. To build programs using these tools you install an SDK and compile your program into an intermediate language, something closer to machine code designed to work efficiently with the runtime tools. Users install the runtime tools to execute your program, which then run the intermediate code. The advantage of this approach is that your program's intermediate code can run on different operating systems, as it can run anywhere the runtime tools are available.

In all cases, you need to setup somewhere to store your code and need to manage the settings to help the command line tools know how to build and run your program.

:::tip

There is an [experimental .NET REPL](https://github.com/jonsequitur/dotnet-repl) you can play around with. You can install and run this as shown here.

```sh
dotnet tool install -g dotnet-repl
dotnet repl
```

:::
