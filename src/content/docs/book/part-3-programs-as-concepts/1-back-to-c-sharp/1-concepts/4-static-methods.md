---
title: Static methods
---

In C#, all methods must be declared within classes or structs. Normally you will need an [object](../../../../part-2-organised-code/7-member-functions/1-concepts/1-0-struct-members#referring-to-struct-values-as-objects) upon which you will call any method.

This results in one challenge, how do you create methods like `Main` which can be accessed without an object? After all, `Main` needs to be called before we have the chance to create any objects.

To address this challenge, languages like C# allow you to declare `static` methods within a class that can be called on the class itself. This allows methods to be called without any object. `Main` needs to be static so that it can be used as the entry point for the program.

## Static Methods Why, When, and How?

With the object-oriented programming style, you don't often need to create static methods. They are occasionally useful for the situations where you want a general function or procedure that can be accessed anywhere without needing an object.

Here are some examples of static methods we have been using previously:

- The `Console` class has static methods to interact with the terminal. This includes `WriteLine` and `ReadLine`.
- The `Convert` class contains static methods to convert data between common data types.
- The `SplashKit` class contains static methods to call its various functions.

## In C#

:::tip[Syntax]

The following diagram shows the syntax for method declarations in C#. These are the C# equivalent of the [member functions](../../../../part-2-organised-code/7-member-functions/1-concepts/1-2-methods) in C++.

![Syntax for methods in C#](./images/method.png)

:::

## Examples

The following code declares three static methods. Notice that these are very similar to the functions and procedures you have been creating in C/C++.

```cs
class MyProgram
{
    public static void SayHelloTo(string name)
    {
        Console.WriteLine($"Hello {name}!");
    }

    public static string ReadString(string prompt)
    {
        Console.Write($"{prompt}: ");
        return Console.ReadLine();
    }

    public static void Main()
    {
        string name = ReadString("Name");
        SayHelloTo(name);
    }
}
```

As you read over the code you should be able to link the code with concepts you are already familiar with: 

- Variable declarations are the same as we saw in Part 1.
- Parameters use a very similar format as we used in C/C++.
- Methods can return data just like functions in C/C++.
- Methods that do not return data are declared as `void` methods.
- You can call other static methods within the same class without using the class name.
