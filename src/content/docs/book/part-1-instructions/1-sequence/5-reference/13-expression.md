---
title: "Expression"
sidebar:
  label: " - Expression"
---

The term **expression** is used in programming to describe any code that represents a value. This could be a literal value, or a value that needs to be calculated. Expressions are used wherever data must be supplied in code. When a program runs, each expression is **evaluated** to become a single value that can be used by an instruction.

The concepts related to expressions are shown below.

![An expression provides a value to be used in an instruction.](./images/expression-concept.png "An expression provides a value to be used in an instruction.")

## Expressions -- when, why, and how

Whenever an instruction needs data, an expression is needed to provide it. This lets you put whatever data you want in that instruction. For now our data can be hard-coded as a [literal](/book/part-1-instructions/1-sequence/5-reference/14-literal), or can be several literal values combined with mathematical operators to calculate a fixed value. In the next chapter we'll look into [variables](/book/part-1-instructions/2-data/5-reference/10-variable) which allow us to have values that _change_.

When you code an expression, you need to think about the value you need and how you can get it. If you are unsure, draw out the details you have on paper and think through how you can calculate the value you need.

## In C++

An expression is used to define a value.
If a literal value is given, the computer doesn't need to do anything.
However, if an expression uses mathematical operations, the computer will evaluate the expression to a single value.

The following table lists the operators that you can include in expressions in [order of precedence](https://en.wikipedia.org/wiki/Order_of_operations). The operators you can use in any specific expression depend on the kind of data that you are using.
For example, it does not make sense to use the division operator on text data, so C++ will return an error if you try to do this in your code.

| **Operator** | **Description**                          | **Example**    |
---------------|------------------------------------------|----------------|
|      ( )     | Parenthesis                              |  `(1 + 1) * 2` |
|     % * /    | Modulo<sup>[a](#FootnoteOperators)</sup>, multiplication, and division |  `1 / 2 * 5 % 3` |
|      + -     | Addition and subtraction                 |  `10 + 3 - 4` |

<hr class="footnote">
<div id="FootnoteOperators" class="footnote">
<sup>a </sup>The remainder after division. For example, 9 modulo 3 is 0, 10 modulo 3 is 1, 11 modulo 3 is 2, 12 modulo 3 is 0, and so on.
</div>

The following illustration shows some expressions in C++ code.

![An illustration of expressions in code](./images/expression-pano.png)

## Examples

The following table shows some example expressions and the value they evaluate to in C++.
Some of these examples are literal values, and others use mathematical calculations.
Have a look at the table, and note down anything that surprises you.
If you are confused about the last row, remember that C++ will follow the [BOMDAS order of operations](https://en.wiktionary.org/wiki/BOMDAS#:~:text=English-,Phrase,division%2C%20then%20addition%20and%20subtraction).

| **Example Expression**    | **Value**                               |
|---------------------------|-----------------------------------------|
| 73                        | 73                                      |
| 2.1                       | 2.1                                     |
| "Hello World"             | "Hello World"                           |
| "Fred"                    | "Fred"                                  |
| 3 * 2                     | 6                                       |
| 1 + 3 * 2                 | 7                                       |
| (1 + 3) * 2               | 8                                       |
| 7 - 3 + 1                 | 5                                       |
| 3 / 2                     | 1<sup>[b](#FootnoteExpressions)</sup>   |
| 3 / 2.0                   | 1.5<sup>[c](#FootnoteExpressions)</sup> |
| 3.0 / 2.0                 | 1.5                                     |
| 3 % 2                     | 1                                       |
| 11 % 3                    | 2                                       |
| 1 + (3 / 2.0) + 6 * 2 - 8 | 6.5                                     |
<hr class="footnote">
<div id="FootnoteExpressions" class="footnote">
<sup>b </sup>C++ does <a href="https://mathworld.wolfram.com/IntegerDivision.html">integer division</a> when none of the values in an expression contain decimal places.<br/>
<sup>c </sup>If any of the values in an expression have decimal places, the value the expression evaluates to does as well.
</div>

:::tip[When to use quotes]
The convention when describing data is to use double quotes `"` around text, and nothing around regular numbers.
This helps to avoid confusion -- `3` means the _number_*_ 3, and `"3"` means the _text_ 3.
:::

## Try it out

What values do the following expressions evaluate to?

1. `2`
2. `"Learning is fun"`
3. `5 + 3`
4. `16 * 2`
5. `7 / 2`
6. `7 / 2.0`
7. `10 - (1 + 2) * 3`

<details>
  <summary role="button">Answers</summary>
  <ul>
    <li><strong>1: </strong><code>2</code></li>
    <li><strong>2: </strong><code>"Learning is fun"</code></li>
    <li><strong>3: </strong><code>8</code></li>
    <li><strong>4: </strong><code>32</code></li>
    <li><strong>5: </strong><code>3</code>. There are no numbers with decimal places in this expression, so C++ will use integer division.</li>
    <li><strong>6: </strong><code>3.5</code>. C++ won't use integer division here because one of the values in the expression does have a decimal place, even if that decimal value is 0!</li>
    <li><strong>7: </strong><code>1</code>. Order of operations means that C++ will evaluate the brackets first, then the multiplication, then the subtraction.</li>
  </ul>
</details>

:::note[Summary]

- An expression is a term given to code that **represents a value**.
- An expression can be used anywhere a value is needed by an instruction.
- An expression can use **literal** values and calculations.
- A literal value on its own is a valid expression.
- Calculations can use mathematical operators: `+` for addition, `-` for subtraction, `*` for multiplication, `/` for division, and parenthesis `( )` for grouping.
- The computer **evaluates** an expression to determine its value.
- Expressions are evaluated using the [BOMDAS order of operations](https://en.wiktionary.org/wiki/BOMDAS#:~:text=English-,Phrase,division%2C%20then%20addition%20and%20subtraction).

:::
