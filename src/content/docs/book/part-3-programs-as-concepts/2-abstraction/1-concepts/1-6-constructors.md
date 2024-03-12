---
title: Constructors
sidebar:
    label: " - Constructors"
---

Constructors are the last thing we need to look at in terms of the code in our classes for now.

A **constructor** is a special method that is called when an object is created. It is used to initialise the fields and perform any actions we need performed when the object is created, and before it is available for others to use.
You can think of a constructor as a kind of doing responsibility.
We briefly explored the idea of [constructors](../../../../part-2-organised-code/7-member-functions/1-concepts/1-1-constructor) in the member functions chapter.

## Constructor: Why, When, and How

It is always a good idea to provide a constructor for your classes. You can use this to initialise all the fields to reasonable values. You can also add parameters to your constructor, allowing the caller to provide values into the constructor when the object is created.

A constructor with no parameters is known as the **default constructor** as this constructor is called when no arguments are passed in to the respective `new` call.

## In C#

:::tip[Syntax]
The syntax for declaring a constructor in a C# class is shown below.

![Syntax for a constructor in C#](./images/constructor-syntax-diagram.png)
:::

The first thing you might notice is that the syntax is practically identical!
There are really just two main differences between a constructor declaration and a regular method declaration:

1. A constructor does not have a unique method name. It has to use the class's name.
2. A constructor does not have a return type.

Using the class's name in place of a method name tells the compiler to interpret the declaration as a constructor rather than standard method.
The reason that a constructor declaration does not need to include a return type is because a constructor, by definition, can only and will always return an **instance** of the class.
Therefore, its return type is implied and does not need to be explicitly stated.

Aside from these two differences, a constructor declaration is the same as a method declaration.
The syntax for a method declaration is hopefully looking familiar, because it is the same as the syntax for [declaring methods](../1-3-doing) you have already seen.

## Example

In the `Greeting` class we created a constructor that accepted a string parameter and used this to set the initial value of the `_message` field.

```cs
using static System.Console;

class Greeting
{
    private string _message;

    /// <summary>
    /// When constructed, the Greeting needs to be told its initial message.
    /// This message can then be used to provide greetings at the terminal.
    /// </summary>
    /// <param name="message">the initial version of the message</param>
    public Greeting(string message)
    {
        _message = message;
    }

    public void Print()
    {
        WriteLine(_message);
    }

    public void Greet(string name)
    {
        WriteLine($"Hello {name}! {_message}");
    }

    /// <summary>
    /// Each Greeting has a message that can be read and updated.
    /// </summary>
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
