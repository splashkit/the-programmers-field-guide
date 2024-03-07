---
title: "Properties"
sidebar:
  label: " - Properties"
---

*If fields are usually private, how do you access these from outside the class?*

C# provides a convenient feature called **Properties** that we can use to give controlled access to things the objects of a class will know. Essentially, properties are a way of adding a member to a class that *looks* and *acts* like a public field to other code, but is not *actually* a public field.

## Properties: Why, When, and How

When coding [knowing responsibilities](../1-2-knowing) in a class you will add fields for any data that you will capture within the objects. As you do this, you can think about whether this knowledge needs to be shared with others outside the class. If you do want to share this knowledge, you can create a property to achieve this.

Properties also give you the ability to make these values read or write only outside the class. Each property will define instructions to be performed when you read and instructions to be performed when you write to the property. If you provide both of these you have a property that can be read and written to. If you only provide one, then the property will be read or write only depending on which part you code.

## In C#

:::tip[Syntax]
The syntax for declaring a property in a C# class is shown in Figure X.

![Figure X](./images/property-syntax-diagram.png)
<div class="caption"><span class="caption-figure-nbr">Figure X: </span>The syntax for property declarations</div><br/>
:::

The start of a property declaration looks exactly like a field declaration: an access modifier followed by a data type and a name.
Then, within curly braces you can declare up to two parts of the property:

1. A `get`, which contains code that is executed when the property is *read*.
2. A `set`, which contains code that is executed when the property is *assigned to*.

Both parts are optional, but can only be used once each in a property.
A property containing only a `get` part is called a **read-only property**, and a property containing only a `set` part is called a **set-only property**.
A property containing both is just called a property, or can be called a **read-write property**.
Most properties are read-write or read-only.

Because `get` is used when the property is read, it must include a **return statement** which returns a value matching the data type of the property.
The `set` part of a property has access to a special variable, `value`, which has the same data type as the property and the value of the right-hand side of the assignment statement in which the property was used.

The code within a `get` or `set` can be as simple or as complicated as you like, and can call other code within the same class or in libraries.
Many properties are written as "wrappers" around a private field, and are used to better control access to the data in that field.
Other properties may instead construct and return new data when they are read.

## Example

We can revisit our `Greeting` class again. Notice the `_message` is private, but we have added a Message property that allows code outside the `Greeting` class to read or write to a `Message` property.

```cs
using static System.Console;

class Greeting
{
    /// <summary>
    /// Each Greeting knows its message, and can use this when it prints the greeting.
    /// </summary>
    private string _message;

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

:::note
We can see a few C# conventions in this example:

* Property names are in PascalCase - starting with a capital letter.

:::

