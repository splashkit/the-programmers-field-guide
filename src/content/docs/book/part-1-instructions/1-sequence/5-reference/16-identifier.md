---
title: "Identifier"
sidebar:
  label: " - Identifier"
---

**Identifier** is the term for the name/word that *identifies* something for the compiler. This could be the **name** of a building block (such as a variable, constant, or method) or words that have special meaning for the compiler. You use identifiers to name the things (building blocks) you create, and to refer to those you want to use.

As identifiers are used to name building blocks, the overall concept relates to many others.
The concept map below shows some of the key relations based on what we have learned so far.

![An identifier is the name of a thing](./images/identifier-concept.png "An identifier is the name of a thing")

## Identifiers -- when, why, and how

Building a digital reality will require you to **name** things within it. As a result, identifiers are really important. The names you give the building blocks you create will help shape how others interact with your code and its concepts.

In general, you want to name things to accurately capture the *thing* you are building. Keeping names clear and accurate will greatly help you and others work with your code.

Programming languages require you to name things without spaces so that the compiler can easily know when an identifier starts and ends. However, most of the time you will need more than one word to be clear and accurate. To achieve this there are several common formats for identifiers:

- **UPPER_CASE**: all upper case letters with underscores (`_`) to separate words.
- **snake_case**: all lower case letters with underscores to separate words.
- **camelCase**: start with a lower case character and use an upper case character for each new word.
- **PascalCase**: use an upper case character at the start of each word.
- **kebab-case**: all lower case letters with hyphens (`-`) to separate words.

Every programming language has **coding conventions** that indicate which format to use for identifiers for different building blocks. In C++ we will use snake_case for procedure names.

:::tip
Following the coding convention of the language is really important. This makes your code look and feel like other code from that language. Doing this will make it easier for others to engage with what you do. Break the convention, and others will doubt the quality of your code and contributions.
:::

## In C++

:::tip[Syntax]
The following diagram shows the C++ syntax for an identifier.

![The C++ syntax of an identifier.](./images/program-creation/IdentifierSyntax.png "The C++ syntax of an identifier")

<CommmonLink type="syntaxDiagramGuide"/>
:::

- Identifiers must start with an underscore (`_`) or a letter. This is because the compiler needs a way of distinguishing identifiers from numbers entered directly into the code.
- An identifier can not contain spaces, or special characters other than underscores.
- After the first character, an identifier can contain zero or more additional characters which are letters, digits, or underscores.

### Keywords

While you can name the building blocks in your program almost anything, there are some reserved words that have special meaning to the language. These are called **keywords**. You cannot use these -- they are taken for another purpose.

Most of the time this doesn't cause any issues, but sometimes you have to work around it. For example `class` is taken, so you can't call anything a `class` which can be a pain if you are building education related software.

The keywords in C# are listed in the table below.
All of these are valid identifiers according to our syntax rule, you just can't use them to name things.

| Reserved Identifiers (Keywords)  |
|----------------------------------|
| `alignas`,`alignof`,`and`,`and_eq`,`asm`,`atomic_cancel`,`atomic_commit`,`atomic_noexcept`,`auto`,`bitand`,`bitor`,`bool`,`break`,`case`,`catch`,`char`,`char8_t`,`char16_t`,`char32_t`,`class`,`compl`,`concept`,`const`,`consteval`,`constexpr`,`constinit`,`const_cast`,`continue`,`contract_assert`,`co_await`,`co_return`,`co_yield`,`decltype`,`default`,`delete`,`do`,`double`,`dynamic_cast`,`else`,`enum`,`explicit`,`export`,`extern`,`false`,`float`,`for`,`friend`,`goto`,`if`,`inline`,`int`,`long`,`mutable`,`namespace`,`new`,`noexcept`,`not`,`not_eq`,`nullptr`,`operator`,`or`,`or_eq`,`private`,`protected`,`public`,`reflexpr`,`register`,`reinterpret_cast`,`requires`,`return`,`short`,`signed`,`sizeof`,`static`,`static_assert`,`static_cast`,`struct`,`switch`,`synchronized`,`template`,`this`,`thread_local`,`throw`,`true`,`try`,`typedef`,`typeid`,`typename`,`union`,`unsigned`,`using`,`virtual`,`void`,`volatile`,`wchar_t`,`while`,`xor`,`xor_eq` |

## Examples

Some example valid identifiers that may be useful for naming things:

| Example Identifiers |
|----------------------------------|
| `draw_game`, `play_splash_screen`, `air_speed`, `write_line`, `read_line`, `bitmap`, `sound_effect`, `name`, `draw_bitmap`, `age`, `player`, `height`, `test`, `cost`, `name3`, `_23`, `i` |

## Activities

Which of the following names are valid identifiers in C++ and why/why not?

1. `_`
2. `__`
3. `_ _`
4. `2_height`
5. `a2-height`
6. `y`
7. `HEIGHT_A`
8. `class`

<details>
  <summary role="button">Answers</summary>
  <ul>
    <li><strong>1: </strong>A single underscore is a valid identifier.</li>
    <li><strong>2: </strong>Two consecutive underscores is a valid identifier.</li>
    <li><strong>3: </strong>This identifier is invalid because it contains spaces.</li>
    <li><strong>4: </strong>This identifier is invalid because it begins with a number.</li>
    <li><strong>5: </strong>This identifier is invalid because it contains a hyphen.</li>
    <li><strong>6: </strong>A single character is a valid identifier.</li>
    <li><strong>7: </strong>This is a valid identifier because it begins with a letter and contains only letters and underscores.</li>
    <li><strong>8: </strong>This is a valid identifier, but you cannot use it to name anything you create as it is a keyword.</li>
  </ul>
</details>
</span>
<br>

:::note[Summary]

- Identifiers are used to **name** things in our programs.
- When you [call a procedure](/book/part-1-instructions/1-sequence/5-reference/11-procedure-call) you specify which procedure you want to execute by using its identifier (name).

:::
