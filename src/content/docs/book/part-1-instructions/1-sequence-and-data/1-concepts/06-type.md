---
title: "Type"
---

In order to build programs, we need ways of making sense of data within the computer. 
Looking back to the chapter on [Digital Realities](../../../../part-0-getting-started/1-digital-realities/0-overview), remember that computers are electronic devices and that everything else on top of that is an **abstraction** that we build. So how do the tools we have allow us to have different kinds of data within our programs?

To cater for this, programming languages provide us with a mechanism to assign a **type** to different pieces of data. This allows us to treat that data as if it were a value of that type. For example, you can add and multiply numbers and concatenate strings.

All values within a program will have a **type**. The type indicates how the data stored in the computer's memory is interpreted by the program. There are three *basic* data types available in a programming language, as shown in [Figure 5.9](#FigureType).

- **Textual** data such as `"Fred"`, `"Hello World"`, `"23"` and `"This is text!"`.
- **Whole numbers** such as `1`, `0`, `-5`, and `37`.
- **Real numbers** such as `0.5`, `-126.0`, `3.141516` and `23.981`.

The concepts related to expressions are shown in [Figure 5.9](#FigureType).

<a id="FigureType"></a>

![Figure 5.9 A types define how values are interpreted and the operations that can be performed on the data.](./images/program-creation/Type.png "A types defines how values are interpreted and the operations that can be performed on the data.")
<div class="caption"><span class="caption-figure-nbr">Figure 5.9: </span>A types define how values are interpreted and the operations that can be performed on the data.</div><br/>

## Types - why, when, and how

As you work with code, you will need to be able to classify the different pieces of data within your program using types. This allows you to see these values as text, numbers, colors, and other types. The type will determine what action you can perform on the data and will need to match the expected type for things to work.

At a low level, it is good to remember that all of these map back to a binary value which is the abstraction of the current flowing through the circuits within the computer. Most of the time you can ignore these details, as you live and work within the digital realities you create.

Whichever type you are working with, you need to make sure that it will be suitable to capture the information you need. With whole numbers, check the range of values that the type can support. Real numbers have different precisions, allowing them to capture large ranges but with only limited levels of precision. With text, it is usually a string, unless you have a specific requirement for a single character. 

## In C#

Types are used to define how data is interpreted and the operations that can be performed on the data. [Tables 5.3](#TableBasicTypes) shows the three basic types of data, the associated C# type, size in memory, and other related information. [Table 5.4](#TablePermittedOperators) shows the operators that are permitted for each Type.

- C# uses the name `int` for the type you typically use for whole numbers.
- C# uses the name `double` for the type you typically use for real numbers.
- C# uses the names `string` and `char` for the type associated with text. String if you want zero or more characters, or char for a single character.


### Whole Number Types

With whole numbers, you have signed and unsigned versions of the types. You can see the main options in the table below.

<a id="TableBasicTypes"></a>

| *Name*                    | *Size*            | *Range (lowest .. highest)*| 
|----------------|------------------------------------------|----------------|
|`byte`                   | 1 bytes/8 bits |        0 .. 255       | 
|`short`                   | 2 bytes/16 bits |        -32,767 .. 32,767       | 
|`int`                     | 4 bytes/32 bits |    -2,147,483,648 .. 2,147,483,647    |
|`long`                | 8 bytes/64 bits |  -9,223,372,036,854,775,807 ..  9,223,372,036,854,775,807 |
| `uint` | unsigned 4 bytes/32 bits |    0 to 4,294,967,295 |
| `ulong` | unsigned 8 bytes/64 bits |    0 to 18,446,744,073,709,551,615 |

### Real Number Types

With real numbers, the precision is expressed as the number of significant digits it can support. This indicates the number of digits the type can support. The way these are stored means that you get close approximations of any odd value. This means that rounding errors can accumulate over time.

| *Name*                    | *Size*            | *Range (lowest .. highest)*  |  *Significant Digits* |
|----------------|------------------------------------------|----------------|-------------|
|  `float`            |       4 bytes/32 bits    |     ±1.5 x 10<sup>−45</sup> to ±3.4 x 10<sup>38</sup>        |          ~ 6 to 9 |
| `double`             |     8 bytes/64 bits     |   ±5.0 × 10<sup>-324</sup> to ±1.7 × 10<sup>308</sup> |         ~ 15 to 17 |

### Text Types

| *Name*                    | *Size*            |
|----------------|------------------------------------------|
|   `char`                  |   2 bytes/16 bits     |
|  `string`                  | various<sup>[a](#FootNoteBasicTypes)</sup>       |

<hr class="footnote">
<div id="FootNoteBasicTypes" class="footnote">
<sup>a </sup>The size in memory is determined by the number of characters within the string, and some overhead.
</div>
<div class="caption"><span class="caption-figure-nbr">Tables 5.3: </span> C# Data Types</div><br/>

### Types in Expressions

You can use mathematical operators to work with values in your code. The following table shows the type and the operators that can be used on that type in an expression.

<a id="TablePermittedOperators"></a>

| Type                   | Operations Permitted            | Notes
|----------------|------------------------------------------|----------------
|   Whole Numbers       | `( ) + - / * %`       | Division rounds down if all values are whole numbers.
|  Real Numbers        | `( ) + - / *`       |  
| Text                | `( ) +`          |  You can use `+` for concatenation.

<div class="caption"><span class="caption-figure-nbr">Table 5.4: </span> C# Permitted Operators by Type</div><br/>

:::tip[Syntax]
By default, numeric literals will be either `int` or `double`. For other types, C# provides suffix syntax for literals of specific types. With `byte` and `short` there are no specific suffixes required, the `int` literal just has to be in range the required range.

<a id="FigureTypeSyntax"></a>

![Figure 5.10 The syntax of a Type.](./images/literal-type.png "The syntax of a Type")
<div class="caption"><span class="caption-figure-nbr">Figure 5.10: </span>The syntax of a Type</div><br/>

:::

## Activities

Identify the types of the following data. Where more than one type is possible, write down all the possible types. Where an expression is given, evaluate the expression and determine the type of the returned value. Line numbers are for reference only:<

```csharp
1. 392
2. 32 * 3.9
3. 40001
4. "Hello World"
5. 'm'
6. "a" + 'c'
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.9: </span>Identify the data types</div>
<details>
  <summary role="button">Answer</summary>
  <ul>
    <li><strong>Line 1: </strong>This value has an <code>int</code> type in C#. It can be used where an <code>int</code> or <code>short</code> is required, but not where a <code>byte</code> is required.</li>
    <li><strong>Line 2: </strong>This is an expression that has an <code>int</code> literal and a <code>double</code> literal. It would evaluate to a <code>double</code>.</li>
    <li><strong>Line 3: </strong>This is an <code>int</code> type. It is too large to be a <code>short</code> or <code>byte</code>.</li>
    <li><strong>Line 4: </strong>This is a textual type, in this case a <code>String</code>.</li>
    <li><strong>Line 5: </strong>This is a textual type, in this case a <code>char</code>.</li>
    <li><strong>Line 6: </strong>The '+' operator acts as a concatenator for two string types, in this case a <code>string</code>  with a <code>char</code> resulting in a <code>string</code></li>
  </ul>
</details>

:::note[Summary]

- A type is an **building block** used to describe how data is captured in the program.
- There are basic types built into the language that you can use, and later you will see how to create your own types.
- The type determines the basic actions that can be performed on the value.
- The type determines the amount of memory needed to store a value of that kind
- Whole numbers are **Integers** - defaulting to `int`.
- Real numbers are represented as **Floating Point** values. These values have a limited precision, supporting only a certain number of significant digits. The default is `double`.
- Textual values can contain numbers as text characters. For example, the text `"23"` is the character `'2'` followed by the character `'3'` - it is not the number `"23"`.
- You can perform mathematic operations on numeric data, but not on textual data.

:::
