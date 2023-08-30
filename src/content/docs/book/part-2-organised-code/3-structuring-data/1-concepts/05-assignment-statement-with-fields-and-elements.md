---
title: "Assignment Statement (with Fields and Elements)"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---
## Concept

The Assignment Statement allows you to store a value in a Variable or Array. The righthand side of the assignment is an expression that calculates the value to be stored. The lefthand side is a variable or
array element, a place into which the value can be stored. With the addition of the custom types you can now also store values in **fields** of a record or union.

<a id="FigureAssignmentStatementWithFieldsAndElements"></a>

![Figure x.y: You can assign values to a Record or Union’s fields](./images/assignment-statement-with-fields-and-elements.png "You can assign values to a Record or Union’s fields")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>You can assign values to a Record or Union’s fields</div><br/>

:::note

- The Assignment Statement is an **action**, you can command the computer to store a value in a variable, array element, record’s field, or union’s field.
- Enumeration values are stored in a single variable, so they work in the same way as shown in [Section x.y Assignment Statement](#). 
- With a record you can assign values to its fields individually, or you can assign it all of the values from another matching record.
- A union can have its value set via its fields, or you can copy the value from another matching union.

:::

## Record Assignment

The assignment statement can be used to assign a value to a record's fields, or to copy an existing record's values.

<a id="FigureAssignmentRecord"></a>

![Figure x.y: You can assign an individual field or the entire record in one assignment statement](./images/assignment-record.png "You can assign an individual field or the entire record in one assignment statement")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>You can assign an individual field or the entire record in one assignment statement</div><br/>

:::note

- The four examples from [Figure x.y](#FIgureAssignmentRecord) show the following:
  1. You can assign a value to a field of a record. In this case 24 is assigned to `mouse.x`.
  2. A `Point` expression can be assigned to a `Point` variable. This copies the entire
record into the Variable.
  3. It doesn’t matter if the record is in an array, you can still assign a value to an record’s fields.
  4. You can also assign an entire record into an element of an array.
- If the language allows arrays to be copied then you can also copy an entire array of records to a destination.
 

:::

## Union Assignment

The **Union** is similar to a Record in that you can assign values to a union via its fields or by copying another union value into the variable or array element. The difference with the Union is that it has only a single
value, with the different fields giving you different interpretations of that data.

<a id="FigureAssignmentUnion"></a>

![Figure x.y: You can assign an individual field or the entire union in one assignment statement](./images/assignment-union.png "You can assign an individual field or the entire union in one assignment statement")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>You can assign an individual field or the entire union in one assignment statement</div><br/>

:::note

- The four examples from [Figure x.y](#FigureAssignmentUnion) show the following:
  1. You can assign a value to the fields of a [Union](../03-type-declaration#union). This overrides any value currently
stored in the Variable.
  2. It is possible to copy an entire Union value in the assignment.
  3. This works in the same way with arrays, you can write a value to a [Union](../03-type-declaration#union). 
  4. You can also copy an existing union value into an element.
- When accessing the data in a Union you are responsible for ensuring you read back the value you stored as it does not remember the kind of value you stored in the union.- 

:::