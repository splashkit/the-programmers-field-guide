---
title: "Concept: Classes"
sidebar:
  label: Classes
---

## A new approach to organisation

Sometimes it's not enough just to organise the logic of our code into [functions and procedures](<../../../2-organising-code/0-overview/>), and the data in our code into [custom data types](<../../../3-structuring-data/0-overview/>).
**Classes** are a tool we can use to combine these ideas and organise our code into *entities* that contain both data and procedures and functions.
They describe a *blueprint* for an entity, defining what the entity **knows** (the data) and what it can **do** (the functions and procedures).

Classes are a powerful tool, because they allow us to organise our code differently to any other tools we've added to our toolkit so far.
Because they are so different, classes also require us to *think* differently about how we design digital realities.
This can be a big shift, so for now we will focus on what classes are and how they work.
In [Part 3](../../../../part-3-programs-as-concepts/22-part-3-programs-as-concepts) we will explore how to make decisions about using them.

* it's just another way of organising our code and creating our own custom data types
* we use classes as blueprints to make objects (link to next concept)
* we don't really differentiate between functions and procedures -- everything is just a "method" now
* we now have the concept of a class variable
* constructors
* properties
* public vs. private (call forward to encapsulation chapter where we'll talk more about how to decide which one to use)
* classes don't run in sequence (just like procedural code with methods don't run in sequence) -- call forward to the "looking inside" section?
* `this`??

## A simple class

```cs
class Message
{
    private string _text;

    public Message(string text)
    {
        _text = text;
    }

    public void PrintMessage()
    {
        Console.WriteLine(_text);
    }
} 
```
