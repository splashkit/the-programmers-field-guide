---
title: Doing Responsibilities
sidebar:
  label: " - Doing Responsibilities"
---

Objects of a class will have responsibilities to be able to *do things*.
These responsibilities are coded as **methods** within the class, in the same way we saw in the [member functions](../../../../part-2-organised-code/7-member-functions/1-concepts/1-2-methods) chapter.

A class can have any number of methods.
Methods inside a class are very similar to the [functions and procedure](../../../../part-2-organised-code/2-organising-code/1-concepts/01-0-functions-and-procedures) we coded in procedural programs: they still have an identifier, can have parameters, and can return a value.
Within a class we can also [overload](<../../../../part-1-instructions/1-sequence-and-data/1-concepts/03-method-call/#overloading>) methods, just like we could with functions and procedures in C++.
The only real difference between functions and procedures, and methods is that the methods are inside a class. As the methods are inside a class, they can directly access everything within the class - the things it knows in its fields and the other things it can do with its other methods.
This means that all methods within the same class can call each other.

## Doing: Why, When, and How

In a procedural program you would have thought about the data, and then the functions and procedures that work on that data. With object-oriented programming you think about the different kinds of objects you will have, the things these objects will do and the things they will know. The doing actions will capture the things you previously thought of as functions and procedures.

For example, the Fly objects in our Fly escape game would have a number of things they will need to do in the game. We will the Flies to be able to draw themselves to the screen, tell us if they have collided with the spider, and update themselves where they can appear or escape based on the current time.

As you design an object-oriented program you will need to think about each role, and the actions that it needs to be able to do in order to get the outcomes you want. You have to picture the digital reality you are creating, and see how these objects can act within this reality to generate the required responses or outcomes.

## In C#

:::tip[Syntax]
The syntax for declaring a method in a C# class is shown below. If you look, you should notice this is basically the same as declaring a function or procedure.

![Syntax for declaring a method in C#](./images/method-syntax-diagram.png)
:::

## Example

We can revisit our `Greeting` class again. Each `Greeting` object will have a `Print` and a `Greet` method, one that just prints the greeting and another version that personalises this with the name of the person it is delivered to. The code for this is highlighted within the class shown below.

```cs
using static System.Console;

class Greeting
{
    private string _message;

    public Greeting(string message)
    {
        _message = message;
    }

    /// <summary>
    /// The print method outputs the Greeting's message to the Terminal.
    /// </summary>
    public void Print()
    {
        WriteLine(_message);
    }

    /// <summary>
    /// The Greet method outputs the Greeting's message to the Terminal. This version accepts a 
    /// name parameter that is used to customise the message output.
    /// </summary>
    /// <param name="name">the name of the person receiving the greeting</param>
    public void Greet(string name)
    {
        WriteLine($"Hello {name}! {_message}");
    }

    public string Message
    {
        get
        {
            return _message;
        }
        set
        {
            _message = value;
        }
    }
}
```

:::note
We can see a few C# conventions in this example:

* Method names are written in PascalCase.
* Parameter, and local variabels, use camelCase.

:::
