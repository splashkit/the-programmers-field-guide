---
title: Using Objects
sidebar:
    label: " - Using Objects"
---

Once you have a reference to an object you can interact with it.
The ways in which code outside an object can interact with an object is limited by the object's **interface**.
An object's interface includes all the public members defined in that object's class blueprint.
That means, any code with a reference to an object can access any of the object's public fields or properties, or call any of the object's public methods.
Any fields and properties accessed through an object act like normal variables, and any methods called within an object run like functions and procedures.

## Accessing fields and properties

:::tip[Syntax]
The syntax for accessing a field or property within an object in C# is shown below.
Note that as a property in C# acts like a field, the syntax is the same for accessing a property.

![The syntax for accessing an object's field](./images/field-access-syntax-diagram.png)
:::

You can use this syntax to interact with a field or property in an object. 
For example, you can use it in an expression, an assignment statement, or as an argument.
This will read, or change, the value like it would with any other variable.
This should look and feel the same as accessing the fields within a struct.

## Calling a method on an object

:::tip[Syntax]
The syntax for calling a method within an object in C# is shown in below.

![The syntax for calling an object's method](./images/class-method-call-syntax-diagram.png)
:::

The syntax to call a method within an object can be used in the same ways any regular method calls can be used.
This includes in an expression, assignment statement, or as an argument.

## Dot notation

The syntax for accessing fields, properties, and methods in a C# object uses what we call **dot notation**.
Dot notation is used in a lot of programming languages.
It got its name because it enables us to access any public member of an object by writing the object's name, then a dot, then the name of the member we want to access.

You might be wondering why we need to do this.
That is, why can't we just call a method or access a field directly using its identifier?
The reason is that the computer needs to know the **context** of your request.

Remember that each object is self-contained, and has its own variables with their own values.
Therefore, if we are accessing a field, we need to tell the computer *which* object's field to access.
Methods also need a context, because although the instructions in a method are the same between different objects of the same type, the computer still needs to know which object's *data* to use when executing those instructions.
Dot notation allows the programmer to provide this context in a relatively concise and human-readable way.

This should be familiar, as we used the same dot notation to access the fields of structs in C/C++. The idea is the same here, but we can access fields, properties, and methods using this same approach now.

## Example

The following code creates and uses a `Greeting` object.

```cs
public class Program
{
    public static void Main()
    {
        Greeting myGreeting;
        myGreeting = new Greeting("Hello World");

        // Call the greeting method
        myGreeting.Greet("Andrew");

        // Call the print method
        myGreeting.Print();

        // Change the message via the property
        myGreeting.Message = "Another Message";

        // Print the new message
        myGreeting.Print();

        // We cannot access the field... it is private
    }
}
```

:::note[Summary]

* Constructors are used to **construct** or **instantiate objects**.
* The **new** operator creates a new object of a class's type and calls its **constructor**.
* An object can also be called an **instance** of a class.
* Constructors return a **reference** to the location in memory of the newly created object.
* A constructor should set an object's **initial state**.
* An object's **interface** is defined by all of its public members, and describes how code outside the object can interact with it.
* Many languages use **dot notation** to access fields and call methods from an object.

:::
