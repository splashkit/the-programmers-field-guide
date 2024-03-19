---
title: Parameters
---

In Part 2 we saw how to use parameters within our functions and procedures. In C# your methods can also have parameters. These are mostly the same as in C/C++ but the syntax for pass by reference does differ.

## Parameters Why, When, and How?

You will use parameters in C# in the same way you did in C/C++. These allow you to pass values in to methods, and with pass by reference you can change the value of the variable that is passed to it.

## In C#

:::tip[Syntax]
In C#, parameters are very similar to parameters in C/C++. By default, parameters are [passed by value](../../../../part-2-organised-code/4-indirect-access/1-concepts/01-pass-by-ref). You can add the ref keyword to use [pass by reference](../../../../part-2-organised-code/4-indirect-access/1-concepts/01-pass-by-ref) instead.

![Parameter syntax](./images/parameters.png)

:::

## Example

See the examples in the [static method'](../4-static-methods) page. The following example includes a parameter passed by reference. Notice that you also have to use the `ref` keyword in the method call as well. This helps highlight the fact that the value is being passed by reference, and that the passed variable's value may be changed in the call.

```cs
class MyProgram
{
    public static void ChangeName(ref string name)
    {
        name = "Other Name";
    }

    public static void Main()
    {
        string name = "First Name";
        ChangeName(ref name);
    }
}
```

:::note
While you can pass parameters by reference, you will not use this as often as in C/C++. C# uses [reference types](../../../2-abstraction/1-concepts/2-1-value-and-reference-types) for objects, which means you do not need to pass these by reference. We will revisit this in the next chapter.
:::
