---
title: Building Abstractions
---

In Part 2 we saw how you can embed data and functionality, using fields and methods, as [members within a struct](../../../../part-2-organised-code/7-member-functions/0-overview). While we can focus on organising the logic of our code into [functions and procedures](../../../../part-2-organised-code/2-organising-code/0-overview), and our data into [custom data types](../../../../part-2-organised-code/3-structuring-data/0-overview) we can create more powerful abstractions by taking advantage of the languages' ability to combine these and thereby create larger entities to work with.

In this style of programming we create [objects](../../../../part-2-organised-code/7-member-functions/1-concepts/1-0-struct-members#referring-to-struct-values-as-objects) that **know** and **can do** things. Objects are created from a [class](../1-0-class) type, which provides the template like the [struct](../../../../part-2-organised-code/7-member-functions/1-concepts/1-0-struct-members) did in C/C++.

## Building Abstractions: Why, When, and How?

Let's think about this quickly, and I think you will start to see a little of the advantage of building these larger abstractions (objects). If we think of a procedural program, your main building blocks are functions and procedures, with structs and enums. As your program grows in size you end up with many, many, functions and procedures. To understand what to use you have to remember all of these, and what parameters they require etc.

With object-oriented programming, your main building blocks are now classes (the templates from which objects are created). Each class can contain a number of [methods](../../../../part-1-instructions/1-sequence-and-data/1-concepts/02-method). A large program may still have many classes, but this will probably be similar to the number of structs in a procedural program. You will have a similar number of methods as compared with the functions and procedures, but these are all contained in nice packages -- the classes. Locating the data and methods together just makes lots of sense, even at this basic level.

At a higher level, you now also have the power to create more meaningful *"things"* in your digital reality. You can start to see the entities (objects) in your program. You can think of them as knowing and doing things. This makes it easier to see and share the reality you are creating in your code.

If we think of a Home Automation system, you will have objects for things like Light Bulbs. They will know if they are on or off. You can get them to turn on and turn off, or change color. Picturing this in your mind, you can almost **see** the light bulb. In a word processing program, you will have document objects. They will know their contents, and you would be able to tell them to print, for example. These objects become the reality you are creating.
