---
title: "Literal"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---


## Concept

A literal is either a **number value** or **text value** written directly in the code. In other words, it is not calculated when the program runs - the **value** entered is literally the value to be used.  A Literal is a whole, or part of, an [Expression](../04-expression).

[Figure 5.7](#FigureLiteral) shows the concepts relate to Literals.

<a id="FigureLiteral"></a>

![Figure 5.7 Concepts related to Literals.](./images/program-creation/Literal.png "Concepts related to Literals.")
<div class="caption"><span class="caption-figure-nbr">Figure 5.7: </span>Concepts related to Literals.</div><br/>

## In C#

[Figure 5.8](#FigureLiteralSyntax) shows the syntax for the different literal values you can enter into your C# code. Most of these are self evident.

- For example, a whole number can be `127`, `-8711`, `+10` for example. Real numbers are written as `3.1415` for example.

- Within a string, the ∖ character is used to indicate that the next character has a special meaning. <span class="review">We call this '*escaping*' a character.</span>The following list includes the most useful special characters:
  - `\n` creates a new line
  - `\"` creates a double quote character
  - `\%` creates a `%` character
  - `\\` creates a `\` character

:::tip[Syntax]
- A literal can be a whole number, real number, single escaped character, normal character or a string. E.g.:
- A whole number consists of an optional sign, followed by one or more digits.
- A string consists of an opening double quote, followed by any number of optional characters, followed by a closing double quote


<a id="FigureLiteralSyntax"></a>

![Figure 5.8 The syntax of a lteral.](./images/program-creation/LiteralSyntax.png "The syntax of a literal")
<div class="caption"><span class="caption-figure-nbr">Figure 5.8: </span>The syntax of a literal</div><br/>

:::


## Activities

1. <span class="review">Which of the following lines contain literals, and if so, identify them and describe their type (Line numbers are for reference only).</span>

```csharp
1. 19
2. "19"
3. 9a
4. write_line("Hello World");
5. \\n
6. 'c'
7. 'character'
```
<div class="caption"><span class="caption-figure-nbr">Listing 5.8: </span>Identify the literals</div>
<details class="review">
  <summary role="button">Answer</summary>
  <ul>
    <li><strong>Line 1: </strong>This is the literal number 19</li>
    <li><strong>Line 2: </strong>This is the literal string "19"</li>
    <li><strong>Line 3: </strong>This is not a literal. It is malformed because it is neither character, string or number.</li>
    <li><strong>Line 4: </strong>This expression contains the string literal "Hello World"</li>
    <li><strong>Line 5: </strong>This is the backslash-escaped literal character for a newline</li>
    <li><strong>Line 6: </strong>This is the literal character 'c'</li>
    <li><strong>Line 7: </strong>This is not a literal. It is malformed because it is neither a string nor a single character. It contains multiple characters inside opening and closing single quotes (which denote a single character)</li>
  </ul>
</details>


:::note[Summary]

- A Literal is a <span class="review">number or text</span> value entered directly into the program’s source code.
- A Literal can be part or all of an [Expression](../04-expression).
- These values are *hard coded* into the program.
- <span class='review'>The backslash character \ in C# is used to indicate that the character that directly follows it has a special meaning</span>

:::
