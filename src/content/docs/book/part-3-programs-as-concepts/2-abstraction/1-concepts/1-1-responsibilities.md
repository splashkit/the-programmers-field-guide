---
title: Responsibilities
sidebar:
    label: " - Roles and Responsibilities"
---

When thinking about an object-oriented program, you need to identify the different **roles** you will need objects to play. These roles describe the parts of the program, with each role (class) having several responsibilities.

These responsibilities will relate to either **knowing** something, or **doing** something. Let's explore the kinds of knowing and doing responsibilities a class can have.

## Roles: Why, When, and How

Once you have identified a role, you need to try to capture this role in the name of the class - this will be used as the class **identifier**.
As with the other kinds of identifiers we've encountered, a class's name needs to be unique, meaningful, and concise.

We use a class's name in a few ways.
The first use is when organising the code files on our computer.
Typically, the code for a class is in its own file, and that file is named with the class's identifier.
This makes it easy to find the code for our class definitions when we need it.

The second way we use a class's name is in our code.
A class is a custom data type, so its identifier can be used in the same ways as any other data type identifiers, such as when declaring variables or defining method parameters.

The last way we use a class's name is also in our code.
Because a class is only a blueprint that describes responsibilities, and the variables of this type will be references, we need a way to use that blueprint to create values (objects).

:::tip
At the moment, the main thing to get from this is that each class has a defined purpose. It is a clearly identifiable *thing* in your digital reality. You should be able to picture these *objects* existing, and their responsibilities should be coherent with the abstraction you are trying to create.
:::

## Example

In our updated Hello World program, we have identified the need for an object to play the role of a "Greeting". The "Greeting" objects will have a few responsibilities, which can be captured in a Greeting class.

Greeting objects will have responsibilities to:

* ...know a message (a string).
* ...be constructed with an initial value for its message.
* ...print their message.
* ...print a personalised version of the greeting that contains the text "Hello", a name (passed in as an argument) and the value of message.
* ...provide access to read and change the value of their message.
