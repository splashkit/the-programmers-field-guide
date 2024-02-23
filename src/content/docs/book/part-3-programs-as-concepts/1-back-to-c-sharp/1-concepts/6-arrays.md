---
title: Arrays and Lists
---

As in C/C++, C# includes arrays though it also includes classes to help you manage collections.

Arrays are fixed size, but do include member functions that allow you to query the array for its [Length](https://learn.microsoft.com/en-us/dotnet/api/system.array.length?view=net-8.0) amongst other things.

The [List<T>](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-8.0) class from the `System.Collections.Generic` namespace is the equivalent of the dynamic array we created in the [member functions](../../../../part-2-organised-code/7-member-functions/2-put-together/2-dynamic-array) chapter.

## In C#

:::tip[Syntax]
![Syntax for array declaration](./images/array-decl.png)
:::

## Example

This first example shows how to use the array class to work with a fixed size array.

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
        string[] names = new string[5];

        for(int i = 0; i < names.Length; i++)
        {
            names[i] = ReadString("Name");
        }

        for(int i = 0; i < names.Length; i++)
        {
            SayHelloTo(names[i]);
        }
    }
}
```

If you want a variable length array, then you use a List. This is like the dynamic array from Part 2, and uses [generics](../../../../part-2-organised-code/6-deep-dive-memory/1-concepts/07-generics) to allow you to configure what it stores. The following creates a List of strings, and keeps adding to it while the user enters data. Notice that the List class uses a `Count` property to give you access to the number of elements it contains.

```cs
using System.Collections.Generic;

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
        List<string> names = new List<string>();
        
        string line;
        while(true)
        {
            line = ReadString("Enter a name (empty to end): ");
            if ( line.Length > 0 )
            {
                names.Add(line);
            }
            else
            {
                break;
            }
        }

        for(int i = 0; i < names.Count; i++)
        {
            SayHelloTo(names[i]);
        }
    }
}
```
