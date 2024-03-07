---
title: "Classes and Responsibilities"
---

To come...

<!-- 
FIRST DRAFT, restructuring into smaller concepts

Include idea of static.
-->


### Doing responsibilities

#### Every class can be constructed

Just like a method doesn't do anything until it is called, a class doesn't do anything until it is used to create an entity.
To do this, we call the class's **constructor**.
A constructor is a special method with the same identifier as the class it relates to, which creates and returns an **instance** of the class.

The constructor's job is to make sure all of the data in the class is initialised.
It can do this on its own, by using values passed in as arguments, or a combination of both.
If a constructor does not have any parameters, it is called the **default constructor**.
A class can have multiple constructors using method [overloading](<../../../../part-1-instructions/1-sequence-and-data/1-concepts/03-method-call/#overloading>), which means programmers can write several different ways of initialising a class's data.


Once we have an instance of the class, called an object, we can write code asking it to do things or asking it about the things that it knows.
This is something we will learn more about when we explore the concept of an [object](<../1-objects.md>).


### Showing and hiding responsibilities


## In C#

### Class structure



### Method Declarations


### Property Declarations


## Example



In other words, this class has one private field, one public constructor, one public method, and one public read-write property.

Earlier in our journey we learned that a constructor creates and returns an instance of its class.
Given this, you might be surprised to see that the constructor of Greeting does not contain a `return` statement.
The reason for this is that the compiler already knows exactly what should be returned from a constructor, so it can make sure the right value is returned without being explicitly instructed to do it.

To add this class to your C# project, copy the code above into a file called "Greeting.cs" within a console project.
Run your project...nothing happens!
That is because much like a method that is never called, a class does not do much on its own.
To actually execute this code we need to use the class to create an **object**.
So, let's explore the concept of **objects** next.

## Activities

* List some knowing and doing examples you have in your daily life.
* What other responsibilities could the Greeting class have?
* Think about a class for representing a book. What responsibilities might it have? Would they be public or private?

:::note[Summary]

* Classes are a tool for strurturing code into entities that contain data and methods.
* Each class definition is a blueprint that describes an entity in terms of what it **knows** (data) and what it can **do** (methods).
* A class defines a **custom data type** we can use in our programs when building digital realities.
* Classes have a **name**, and contain zero or more **members**.
* A class member can be a:
  * field
  * constructor
  * method
  * property
* Each class member can be **public** or **private**:
  * **public** members can be accessed by any code that has an instance of the class.
  * **private** members can only be accessed by other code in the same class.
* **Fields** are just like variables, with a scope of the entire class in which they are declared.
* **Methods** are no different from what you have already learned. <!-- TODO: link to previous section on methods? -->
* **Constructors** are special methods which create and return an instance of the class in which they are declared.
  * A **default constructor** is a constructor with no parameters.
* **Properties** are unique to C#, and allow us to write code that looks and acts like a public field.
* Classes can be used to create **objects**.

:::
