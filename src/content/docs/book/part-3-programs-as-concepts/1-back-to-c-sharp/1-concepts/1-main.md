---
title: Main Method
---

When we were programming with C# in Part 1 we were using a language feature called [Top Level Statements](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/program-structure/top-level-statements). This feature lets you program instructions without needing to explicitly create a Main method - the C# equivalent of [main](.././../../../part-2-organised-code/1-starting-cpp/1-concepts/2-main-function) in C/C++.

Generally, these top level statements would only be used for small program scripts. Usually we would create a C# program that includes a Main method coded into a class.

The code for a Hello World program using a `Main` method is shown below.

```c#
namespace MyProject
{
    public class MyProgram
    {
        public static void Main()
        {
            Console.WriteLine("Hello World");
        }
    }
}
```

Let's have a look at this line by line:

- `namespace MyProject`: C# programs have their code organised into [namespaces](../2-namespace). This code creates a namespace called `MyProject` that can be used to contain the code for the project. The following block (`{...}`) defines the scope of the namespace.
- `public class MyProgram`: This declares a class within the `MyProject` namespace. We will look at [classes](../../../2-abstraction/1-concepts/1-0-class) in the next chapter.
- `public static void Main()`: This declares a method named `Main`. This will be the entry point for the program, like the main function in C/C++. You cannot code methods outside of classes in C#.
- `Console.WriteLine("Hello World");`: This calls the `WriteLine` method on the `Console` class, and outputs the message `Hello World` to the terminal.

This code shouldn't look too strange, and we can connect this with things we have already learnt:

- The class is similar to the [structs](../../../../part-2-organised-code/3-structuring-data/1-concepts/03-01-struct) we have been coding in C/C++ with [member functions](../../../../part-2-organised-code/7-member-functions/0-overview).
- The main [method](../../../../part-1-instructions/1-sequence-and-data/1-concepts/02-method) is like a [procedure](../../../../part-2-organised-code/2-organising-code/1-concepts/01-0-functions-and-procedures) in C/C++. We call this a **method** as it is coded into a class.
- `Console.WriteLine("Hello World");` is a [method call](../../../../part-1-instructions/1-sequence-and-data/1-concepts/03-method-call).

Once you get into a method things are very much the same as we coded before - you still use control flow statements to code the logic of the program. As methods exist within classes, these will be accessed as we saw in [member functions](../../../../part-2-organised-code/7-member-functions/0-overview).

For the moment, you can code up a C# program and code your logic in Main.

## Other versions of Main

In C# there are several ways you can code main, as shown below. You can declare it as `void` if you don't want to return a specific exit code to the operating system, or you can use `int` as the return type like in C/C++. Similarly, you can code it with no parameters or with an array of strings where you want to access any arguments passed to the program when it is run.

```c#
public static void Main() { }
public static int Main() { }
public static void Main(string[] args) { }
public static int Main(string[] args) { }
```

Most of the time you will use the `public static void Main() { }` version.
