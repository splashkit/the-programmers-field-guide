---
title: For each
---

In C#, arrays know their length. This makes it easier for the language to provide features that work with arrays. One such feature is the `foreach` loop that makes it easy to iterate over the elements of an array or list.

## For each -- why, when, and how

So far we have been using the `for` loop to iterate over the elements of an array by using an integer variable that we move across the valid indexes of the array. Most of the time you only use the index variable to read the value from the array. The `foreach` loop provides an alternative that takes care of accessing the values in the array for you.

Most of the time you will be able to use a `foreach` loop when you are working with an action you want to perform `for each` element in the collection. So this will quickly become your go-to loop when you work with collections.

You will not be able to use the `foreach` loop in cases where you want to work with elements at different positions in the collection, or when you need to know the index of the element you are working with. In these cases you will still use the standard for loop.

:::note
Your objects in C# will be [reference types](../../../2-abstraction/1-concepts/2-1-value-and-reference-types) which means you will be able to use the `foreach` loop to access and work with the objects in the array or list. We will revisit this in the next chapter.
:::

## In C#

:::tip[Syntax]
The syntax of the `foreach` loop is shown below.
This starts with `foreach`, then in the brackets you provide a variable and a collection.
The loop then iterates over the elements of the collection for you.

![Syntax of the foreach loop](./images/foreach.png)
:::

## Examples

The following code demonstrates the use of the `foreach` loop to print out the values from a List.

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

        foreach(string name in names)
        {
            SayHelloTo(names[i]);
        }
    }
}
```
