---
title: "Type"
---

In order to build programs, we need ways of making sense of data within the computer. 
Looking back to the chapter on [Digital Realities](../../../../part-0-getting-started/1-digital-realities/0-overview), remember that computers are electronic devices and that everything else on top of that is an **abstraction** that we build. So, how do the tools we have allow us to use different kinds of data within our programs?

The answer is that programming languages provide us with a mechanism to assign a **type** to different pieces of data.
All values within a program have a type. The type indicates how the data stored in the computer's memory should be interpreted by the program, and how it can be used.
For example, you can use mathematical operations on numbers, but not text.

There are three basic data types available in a programming language:

- **Textual** data such as `"Fred"`, `"Hello World"`, `"23"` and `"This is text!"`.
- **Whole numbers** such as `1`, `0`, `-5`, and `37`.
- **Real numbers** such as `0.5`, `-126.0`, `3.141516` and `23.981`.

Figure 5.9 shows the concepts related to types.

![Figure 5.9 A type defines how a piece of data in a program is interpreted, and what operations can be performed on the data.](./images/program-creation/Type.png "A type defines how a piece of data in a program is interpreted, and what operations can be performed on the data.")
<div class="caption"><span class="caption-figure-nbr">Figure 5.9: </span>A type defines how a piece of data in a program is interpreted, and what operations can be performed on the data.</div><br/>

## Types -- why, when, and how

As you work with code you will need to be able to classify the different pieces of data within your program using types. This will allow you to determine where you can use the data, and what actions you can perform on it.

Data types are just abstractions that we use to help us create digital realities.
Most of the time you can ignore lower level details, but it can be good to remember that data is really just a binary value, which is itself an abstraction of the current flowing through the circuits within the computer.

Whichever type you are working with, you need to make sure that it will be suitable to capture the information you need.
With whole numbers, check the range of values that the type can support.
Different types of real numbers have different level of precision, which results in a trade-off between the range of numbers they can represent and level of precision they can capture -- you will need to consider this.
With text, you usually use the one data type unless you have a specific requirement for a single character.

## In C#

Types are used to define how data is interpreted and the operations that can be performed on it.
A data type will have a size in memory and, in the case of numbers, a range of valid values.

### Text Types

There are two main text types in C#.
You will use `string` most often, as it describes a sequence of zero or more alphanumeric characters.
`char`, on the other hand, describes a single alphanumeric character.
As we learned in [literals](../05-literal), a literal string value is enclosed in double quotes (`"`), and a character value is enclosed in single quotes (`'`).
This difference in representation helps us to quickly identify what kind of text data a literal value is.

| **Name**  | **Size**                                   |
|-----------|--------------------------------------------|
| `char`    | 2 bytes/16 bits                            |
| `string`  | various<sup>[a](#FootNoteBasicTypes)</sup> |

<hr class="footnote">
<div id="FootNoteBasicTypes" class="footnote">
<sup>a </sup>The size in memory is determined by the number of characters within the string, plus some overhead.
</div>

### Whole Number Types

With whole numbers, you have signed and unsigned versions of the types.
Signed numbers can be positive or negative, whereas unsigned numbers can only be positive.

You can see the main options for whole number data types in C# in the table below.
Typically you will use `int` unless you have a specific reason not to.

| <div style="width:120px">**Name**</div> | **Size** | **Range (lowest .. highest)** |
|---------- |--------------------------|---------------------------------------------------------|
| `byte`    | 1 bytes/8 bits           | 0 .. 255                                                |
| `short`   | 2 bytes/16 bits          | -32,767 .. 32,767                                       |
| `int`     | 4 bytes/32 bits          | -2,147,483,648 .. 2,147,483,647                         |
| `long`    | 8 bytes/64 bits          | -9,223,372,036,854,775,807 .. 9,223,372,036,854,775,807 |
| `uint`    | 4 bytes/32 bits          | 0 to 4,294,967,295                                      |
| `ulong`   | 8 bytes/64 bits          | 0 to 18,446,744,073,709,551,615                         |

### Real Number Types

With real numbers, the precision of a type is defined as the number of **significant digits** it can support.
This is the number of digits the type can support, excluding leading zeros and zeros after the decimal point but before the first non-zero digit (e.g., the number 0.00298008 has 6 significant digits).

One factor to consider when you are using real numbers is that the way they are stored in memory means that you can only represent close approximations of any odd value.
An important consequence of this is that rounding errors can accumulate over time.

| **Name** | **Size**        | **Range (lowest .. highest)**                       | **Significant Digits** |
|----------|-----------------|-----------------------------------------------------|------------------------|
| `float`  | 4 bytes/32 bits | ±1.5 x 10<sup>−45</sup> to ±3.4 x 10<sup>38</sup>   | ~6 to 9 |
| `double` | 8 bytes/64 bits | ±5.0 × 10<sup>-324</sup> to ±1.7 × 10<sup>308</sup> | ~15 to 17 |

:::note[Why aren't real numbers accurate?]
If you're interested in the details of why computers can't accurately represent every number, have a look at [this resource](https://docs.python.org/3/tutorial/floatingpoint.html).
It is written by the python language developers, but the overall explanation applies to C# as well.

If you're not interested, don't worry!
You don't have to understand this to continue on your journey.
The only important thing to remember is that not every floating point number can be represented accurately by a computer, and that these small differences can accumulate if you write a program that does a lot of calculations using floating point numbers.
:::

:::tip[Syntax]
By default, numeric literals will be either `int` or `double`. For other types, C# provides suffix syntax for literals of specific types.

![Figure 5.10 The syntax for literal values of different types in C#.](./images/literal-type.png "Figure 5.10 The syntax for literal values of different types in C#.")
<div class="caption"><span class="caption-figure-nbr">Figure 5.10: </span>Figure 5.10 The syntax for literal values of different types in C#.</div><br/>
:::

### Types in Expressions

You can use mathematical operators to work with values in your code. The following table shows the operators that can be used on each type of data within an expression.

| **Type of data** | Operations Permitted |
|------------------|----------------------|
| Whole Numbers    | `( ) + - / * %`      |
| Real Numbers     | `( ) + - / *`        |  
| Text             | `( ) +`              |

<div class="caption"><span class="caption-figure-nbr">Table 5.3: </span>Operators permitted for each type of basic data in C#</div><br/>

## Example

Let's revisit our table of example expressions, this time adding another column to show what data type each expression is.

| **Example Expression**    | **Value**                               | **Type** |
|---------------------------|-----------------------------------------|----------|
| 73                        | 73                                      |  int     |
| 2.1                       | 2.1                                     |  double  |
| "Hello World"             | "Hello World"                           |  string  |
| "Fred"                    | "Fred"                                  |  string  |
| 3 * 2                     | 6                                       |  int     |
| 1 + 3 * 2                 | 7                                       |  int     |
| (1 + 3) * 2               | 8                                       |  int     |
| 7 - 3 + 1                 | 5                                       |  int     |
| 3 / 2                     | 1                                       |  int     |
| 3.0 / 2.0                 | 1.5                                     |  double  |
| 3 % 2                     | 1                                       |  int     |
| 11 % 3                    | 2                                       |  int     |
| 3 / 2.0                   | 1.5                                     |  double  |
| 1 + (3 / 2.0) + 6 * 2 - 8 | 6.5                                     |  double  |

## Activities

Identify the types of the following data. Where more than one type is possible, write down all the possible types. Where an expression is given, evaluate the expression and determine the type of the overall value.

1. `392`
2. `32 * 3.9`
3. `40001`
4. `"Hello World"`
5. `'m'`
6. `"a" + 'c'`

<details>
  <summary role="button">Answers</summary>
  <ul>
    <li><strong>1: </strong>This value has an <code>int</code> type in C#. It can be used where an <code>int</code> or <code>short</code> is required, but not where a <code>byte</code> is required.</li>
    <li><strong>2: </strong>This is an expression that has an <code>int</code> literal and a <code>double</code> literal. It would evaluate to a <code>double</code>.</li>
    <li><strong>3: </strong>This is an <code>int</code> type. It is too large to be a <code>short</code> or <code>byte</code>.</li>
    <li><strong>4: </strong>This is a textual type, in this case a <code>string</code>.</li>
    <li><strong>5: </strong>This is a textual type, in this case a <code>char</code>.</li>
    <li><strong>6: </strong>The '+' operator acts as a concatenator for two string types, in this case a <code>string</code>  with a <code>char</code> resulting in a <code>string</code>.</li>
  </ul>
</details>

:::note[Summary]

- A type is a **building block** used to describe data.
- There are basic types built into programming languages that you can use, and later you will see how to create your own types.
- The type of a piece of data determines the actions that can be performed on that data.
- A data type determines the amount of memory needed to store a value of that kind.
- Whole numbers are **integers**, defaulting to `int`.
- Real numbers are represented as **floating Point** values. These values have a limited precision, supporting only a certain number of significant digits. The default is `double`.
- Textual values can contain alphanumeric characters. A `string` contains zero or more characters, and a `character` contains exactly one.
- With the exclusion of addition (which concatenates two pieces of text data), you can perform mathematic operations on numeric data, but not on textual data.

:::
