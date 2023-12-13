---
title: Other Languages
---

Each programming language will have a different set of tools needed to get started.

At their core, all of these tools work in more or less the same way, and they will have a set of command line tools to build your code and run associated programs.

Languages like [Python](https://www.python.org) and [Ruby](https://www.ruby-lang.org/en/) are both examples of scripting languages. These use an [interpreter](../../1-digital-realities/1-concepts/6-source-code#compilers-and-interpreters) to read and execute your code. To work with these languages, you need to install their SDK which includes the interpreter and the languages core libraries. 
Scripting languages provide very convenient ways of quickly and easily working with data. However, it is harder to share these programs, as they require the language and its developer tools to run programs.

Languages like C and C++ are compiled, allowing you to build programs that can be run directly within the operating system. They have their own SDKs with a compiler and language libraries. With these you can compile your source code and the compiler will link any code from libraries you use. You can usually control how this linking works, so that you can have shared libraries or just embed the code you need in your program's executable file. You can then distribute the program, with any shared libraries, to users without them needing to have the SDK installed themselves.

[Java](https://java.sun.com) and [C# (.NET)](https://dotnet.microsoft.com) provide an option between scripting and compiled languages. Both Java and C# have a compiler *and* a runtime environment. To build programs using these tools you install an SDK and compile your program into an intermediate language, something closer to machine code designed to work efficiently with the runtime tools. Users install the runtime tools to execute your program, which then run this intermediate code. The advantage of this approach is that your program's intermediate code can run on different operating systems, as it can run anywhere the runtime tools are available.

In all cases, you need to set up somewhere to store your code, and manage settings to help the command line tools know how to build and run your program.
