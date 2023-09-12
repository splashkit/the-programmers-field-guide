---
title: "Identifier"
---

An identifier is the **term** for the name/word that *identifies* something for the compiler. These can be the **name** of a building block you have created (such as a library, method, variable, or constant) or words that have special meaning for the compiler. You will use identifiers to name the things (building blocks) you create, and to select those you want to use.

[Figure 5.11](#FigureIdentifier) shows the concepts related to an Identifier.

<a id="FigureIdentifier"></a>

![Figure 5.11 An Identifier is the name of a programming artefact such as a Program, Library, or Procedure.](./images/identifier-concept.png "An Identifier is the name of a programming artefact such as a Program, Library, or Procedure.")
<div class="caption"><span class="caption-figure-nbr">Figure 5.11: </span>An Identifier is the name of a programming artefact such as a Program, Library, or Procedure.</div><br/>

## Identifiers - why, when, and how

Building a digital reality will require you to **name** things within this reality. As a result, identifiers become really important. The names you give the building blocks you create will help shape how others interact with your code and its concepts.

In general, you want to name things to accurately capture the *thing* you are building. Keeping this clear and accurate will greatly help you, and others, as you work with the code.

Languages will require you to name things without spaces, so that the compiler can easily separate out your code into identiable tokens. Most of the time you will need more than one word in your identifier to capture its intent. To achieve this there are several different common formats using capitalisation and dashes to break things up:

- **UPPER_CASE** - where you use all upper case with underscores (_) to separate words.
- **snake_case** - lower case, where each word is separated with underscores (_).
- **camelCase** - where you start with a lower case character, and use an uppercase character for each new word.
- **PascalCase** - uses uppercase first characters for each word.
- **kebab-case** - separates words with hyphons.

Languages then have a **coding convention** that indicates how to name methods, variables, and constants (and other building blocks). In C# we use:

- PascalCase for methods
- camelCase for variables (more on this later)
- UPPER_CASE for constants

When you create a [variable](../../../1-sequence-and-data/1-concepts/07-variable), in the variable declration statement, you provide its identifier. You can then use this name to access that variable.

:::tip

Following the coding convention of the language is really important. This makes your code look and feel like other code from that language. Doing this will make it easier for others to engage with what you do. Break the convention, and others will doubt the quality of your code and contributions.

:::

## In C#

In C#, as in most programming languages, identifiers must start with an underscore (`_`) or a letter; in other words your identifiers cannot start with a number or contain other symbols. This is because the compiler needs a way of distinguishing identifiers from numbers entered directly into the code.

In the syntax definition below, an identifier cannot contain spaces, or special characters other than underscores `_`.

:::tip[Syntax]
- An identifier must start with either a single letter A-Z or a-z or an underscore `_`, then can be followed by one or more letters, underscores or digits.

- In the syntax definition an identifier cannot contain spaces, or special characters other than underscores (`_`).
- A letter is any alphabetic character (a to z and A to Z ).
- A digit is a single number (0 to 9).

<a id="FigureIdentifierSyntax"></a>

![Figure 5.12 The syntax of an Identifier.](./images/program-creation/IdentifierSyntax.png "The syntax of an Identifier")
<div class="caption"><span class="caption-figure-nbr">Figure 5.12: </span>The syntax of an Identifier</div><br/>

:::

### Keywords

While you can use most things to name the things you build, there are some reserved words that have special meaning to the language. These are called **keywords**. You cannot use these - they are taken for another purpose.

Most of the time this is ok, sometimes you have to work around it. For example `class` is taken, so you cant call anything a `class` which can be a pain if you are building education related software.

Keywords are identifiers that have special meaning to the language. These are listed in [Table 5.5](#TableKeywords) below.

<a id="TablePermittedOperators"></a>

| Reserved Identifiers (Keywords)  |
|----------------------------------|
| `abstract`, `as`, `base`, `bool`, `break`, `byte`, `case`, `catch`, `char`, `checked`, `class`, `const`, `continue`, `decimal`, `default`, `delegate`, `do`, `double`, `else`, `enum`, `event`, `explicit`, `extern`, `false`, `finally`, `fixed`, `float`, `for`, `foreach`, `goto`, `if`, `implicit`, `in`, `int`, `interface`, `internal`, `is`, `lock`, `long`, `namespace`, `new`, `null`, `object`, `operator`, `out`, `override`, `params`, `private`, `protected`, `public`, `readonly`, `ref`, `return`, `sbyte`, `sealed`, `short`, `sizeof`, `stackalloc`, `static`, `string`, `struct`, `switch`, `this`, `throw`, `true`, `try`, `typeof`, `uint`, `ulong`, `unchecked`, `unsafe`, `ushort`, `using`, `virtual`, `void`, `volatile`, `while` |

<div class="caption"><span class="caption-figure-nbr">Table 5.5: </span> C# Keywords</div><br/>

While all of these are valid identifiers, just not ones you can use to name the things you create.

## Examples

Some example valid identifiers that may be useful for naming things:

| Example Identifiers |
|----------------------------------|
| `DrawGame`, `PlaySplashScreen`, `AirSpeed`, `WriteLine`, `ReadLine`, `Bitmap`, `SoundEffect`, `name`, `DrawBitmap`, `age`, `player`, `height`, `test`, `cost`, `name3`, `_23`, `i`

## Activities

Which of the following names are valid identifiers in C# and why/why not?

1. `_`
2. `__`
3. `_ _`
4. `2_height`
5. `a2-height`
6. `y`
7. `HEIGHT_A`
8. `class`

<div class="caption"><span class="caption-figure-nbr">Listing 5.10: </span>Spot the valid C# identifiers</div>
<details class="review">
  <summary role="button">Answer</summary>
  <ul>
    <li><strong>Line 1: </strong>A single underscore is a valid ientifier</code></li>
    <li><strong>Line 2: </strong>Two consecutive underscores are a valid identifier</li>
    <li><strong>Line 3: </strong>This identifier is invalid because it contains spaces</li>
    <li><strong>Line 4: </strong>This identifier is invalid because it begins with a digit.</li>
    <li><strong>Line 5: </strong>This identifier is invalid because it contains a hyphen.</li>
    <li><strong>Line 6: </strong>A single character is a valid identifier</li>
    <li><strong>Line 7: </strong>This is a valid identifier because it begins with a letter and contains only letters and underscores (all valid)</li>
    <li><strong>Line 8: </strong>This is a valid identifier, but you cannot use it to name anything you create as it is a keyword.</li>
  </ul>
</details>
</span>
<br>

:::note[Summary]

- The **name** used to identify a programming artefact (such as a [program](#program), [library](#library) or [method](../../../1-sequence-and-data/1-concepts/02-method) is an identifier.
- You use identifiers to indicate which libraries you want to access in your program.
- Each [method call](../../../1-sequence-and-data/1-concepts/03-method-call) uses an identifier to determine which method is run.
- Each [assignment statement](../../../1-sequence-and-data/1-concepts/08-assignment-statement) uses an identifier to determine which variable to store a value in.
- When you create a [variable](../../../1-sequence-and-data/1-concepts/07-variable) or constant, you name it - using an identifier.
- To read the value from a [variable](../../../1-sequence-and-data/1-concepts/07-variable), you use its identifier in an [expression](../../../1-sequence-and-data/1-concepts/04-expression).
:::


