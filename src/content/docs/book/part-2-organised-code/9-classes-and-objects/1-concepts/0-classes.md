---
title: "Concept: Classes"
sidebar:
  label: Classes
---

## A new approach to organisation

Sometimes it's not enough just to organise the logic of our code into [methods](<../../../2-organising-code/0-overview/>), and the data in our code into [custom data types](<../../../3-structuring-data/0-overview/>).
**Classes** are a tool we can use to combine these ideas and organise our code into *entities* that contain data and methods.
A class acts a *blueprint* for an entity, defining what the entity **knows** (data) and what it can **do** (methods).
Once we have described an entity as a class, we can use that class as another kind of **custom data type** in our programs.

Classes are powerful, because they allow us to organise our code differently to any other tools we've added to our toolkit so far.
Because they are so different, classes also require us to *think* differently about how we design digital realities.
This can be a big shift, so for now we will focus on what classes are and how they work.
In [Part 3](../../../../part-3-programs-as-concepts/00-part-3-programs-as-concepts) we will explore how to make decisions about using them.

## The elements of a class

Figure X shows a sketch of the **class** concept.
A class describes a group of **responsibilities**, which can either be **knowing** something, or **doing** something.
Just like a [program](<../../../../part-1-instructions-1-sequence-and-data/1-concepts/00-program>), a class may use methods and data from one or more libraries.
A class may also use methods and data from one or more other classes.
We will explore this further in [Part 3, Chapter 3](<../../../../part-3-programs-as-concepts/3-collaboration-encapsulation/0-overview>) with the concept of **collaboration**.

![Figure X](./images/class-concept.png)
<div class="caption"><span class="caption-figure-nbr">Figure X: </span>A class describes an entity that knows things and can do things</div><br/>

A class can have a lot of responsibilities, but each one will relate to either knowing something, or doing something.
Let's explore the kinds of knowing and doing responsibilities a class can have.

### Knowing responsibilities

#### Every class has a name

The first thing a class needs to know about is its name or **identifier**.
As with the other kinds of identifiers we've encountered, a class's name needs to be unique, meaningful, and concise.

We use a class's name in a few ways.
The first use is when organising the code files on our computer.
Typically, the syntax for a class is in its own file, and that file is named with the class's identifier.
This makes it easy to find the code for our class definitions when we need it.

The second way we use a class's name is in our code.
Because a class is only a blueprint that describes responsibilities, we need a way to use that blueprint to create entities.
We do this through a special method called a **constructor**, which has the same identifier as the class it constructs.
As construction is a doing responsibility, this concept will be explained in the next section.

The last way we use a class's name is also in our code.
A class is a custom data type, so its identifier can be used in the same ways as any other data type identifiers, such as when declaring variables or defining method parameters.

#### Classes can know about data

A class stores data in **fields**.
Fields are also called **class variables**, because they have a lot of similarities with the concept of a [variable](<../../../../part-1-instructions/1-sequence-and-data/1-concepts/07-variable/>).
Just like a variable, every field has a data type, an identifier, and a value.
Most fields are **variable**, meaning their value can be changed.
It is also possible for a field to be **constant**, in which case the value can only be set once.

The key difference that makes fields a new concept is their scope.
Fields are accessible anywhere within the class where they are defined.
That means a field can be accessed and modified (assuming it is not constant) within any of the methods in the same class.
This is one of the concepts that makes classes powerful, as it allows us to share data between methods without needing parameters.

### Doing responsibilities

#### Every class can be constructed

Just like a method doesn't do anything until it is called, a class doesn't do anything until it is used to create an entity.
To do this, we call the class's **constructor**.
A constructor is a special method with the same identifier as the class it relates to, which creates and returns an **instance** of the class.

The constructor's job is to make sure all of the data in the class is initialised.
It can do this on its own, by using values passed in as arguments, or a combination of both.
A class can have multiple constructors using method [overloading](<../../../../part-1-instructions/1-sequence-and-data/1-concepts/03-method-call/#overloading>), which means programmers can write several different ways of initialising a class's data.

Once we have an instance of the class, called an object, we can write code asking it to do things or asking it about the things that it knows.
This is something we will learn more about when we explore the concept of an [object](<../1-objects.md>).

#### Classes can do things

As well as its constructor, a class can have any number of methods.
Methods inside a class are very similar to regular methods: they still have an identifier, can have parameters, and can return a value.
Within a class we can also [overload](<../../../../part-1-instructions/1-sequence-and-data/1-concepts/03-method-call/#overloading>) methods, just like we can with regular methods.
The only real difference between regular methods and methods that are inside a class, is that all methods within a class can automatically "see" each other.
This means that all methods within the same class can call each other.

### Showing and hiding responsibilities

Once we have used a class to create an entity, we can write code to access the data within the entity, and execute its functionality.
However, we often don't want our entities to allow just any code to do this.
This is where the concept of **access modifiers** helps us.
An access modifier is a piece of information attached to every field and method within a class, telling the compiler what code can access the field or call the method.
There are several access modifiers we can use, but for now let's focus on the two most basic ones: **public** and **private**.

* **Public** methods and fields in a class can be accessed by any code that has an instance of the class, including within the class itself.
* **Private** methods and fields in a class can only be accessed by other code in the same class.

Deciding what access modifier a field or method in a class should have is one of the things that makes coding with classes challenging.
There are principles and best practices to help make these decisions, which we will explore in Part 3.

## In C#

### Class structure

:::tip[Syntax]
:::

### Fields

### Methods

### Properties

* a special kind of method unique to C#, that lets us group instructions together but call the group of instructions as if they were a field
* purely for getting and setting
* usually associated with a field, but can also construct data within the get

## Example

```cs
class Greeting
{
    private string _text;

    public Greeting(string text)
    {
        _text = text;
    }

    public void PrintGreeting()
    {
        Console.WriteLine(_text);
    }
} 
```

* it's just another way of organising our code and creating our own custom data types
* we use classes as blueprints to make objects (link to next concept)
* we don't really differentiate between functions and procedures -- everything is just a "method" now
* we now have the concept of a class variable
* constructors
* properties
* public vs. private (call forward to encapsulation chapter where we'll talk more about how to decide which one to use)
  * Now here’s where classes give us even more power, we can hide stuff…
* classes don't run in sequence (just like procedural code with methods don't run in sequence) -- call forward to the "looking inside" section?
* `this`??
* no need for a return statement in the constructor -- it's done automatically

:::note[Summary]
summary
:::
