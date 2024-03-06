---
title: Knowing Responsibilities
sidebar:
    label: " - Knowing Responsibilities"
---

Objects of a class can store data in **fields**, in the same way that structs contain fields.
Fields are also called **instance variables**, because they are implemented as [variables](<../../../../part-1-instructions/1-sequence-and-data/1-concepts/07-variable/>) declared within the class, and allocated within each instance (object) created from that class.

Just like a variable, every field has a data type, an identifier, and a value.
Most fields are **variable**, meaning their value can be changed.
It is also possible for a field to be **constant**, in which case the value can only be set once.

As we saw with [member functions](../../../../part-2-organised-code/7-member-functions/0-overview), fields are accessible anywhere within the class where they are defined.
That means a field can be accessed and modified (assuming it is not constant) within any of the methods in the same class.
This is one of the concepts that makes classes powerful, as it allows us to share data between methods without needing to see these as parameters.

## Knowing Responsibilities: Why, When, and How

When you think of a role, objects that play this role will need to know things in order to fulfil their responsibilities. These are your knowing responsibilities for the role and define the fields you would create within the class.

## In C#

:::tip[Syntax]
The syntax for a field declaration in a C# class is shown below.

![Syntax for a field declaration](./images/field-syntax-diagram.png)
:::

Hopefully the syntax for declaring a field looks familiar, because it is the same as the syntax for declaring a [variable](../../../../part-1-instructions/1-sequence-and-data/1-concepts/07-variable).

Typically, we declare our fields at the top of our class definition, and then initialise their values inside the class's constructor(s).

:::caution[Reminder]
Remember that **fields** are also called **instance variables** -- there is no difference between the two concepts.
:::
