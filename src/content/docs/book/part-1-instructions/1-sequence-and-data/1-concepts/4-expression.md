---
title: "Expression"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---


## Expression

Some statements need data, this data can be calculated or provided as a literal value in the code. The term **expression** is used in programming to describe the places in a statement where data must be supplied. At run time each expression becomes a value that is used by the statement.

The concepts related to expressions are shown in [Figure 5.5](#FigureExpression).

<a id="FigureExpression"></a>

![Figure 5.5 An expression provides a value to be used in a Statement.](../images/program-creation/Expression.png "An expression provides a value to be used in a Statement.")
<div class="caption"><span class="caption-figure-nbr">Figure 5.5: </span> An expression provides a <strong>value</strong> to be used in a Statement.</div><br/>


## In C##

An [Expression](expression) in C# is a mathematical calculation or [C# Literal](../literal) value. Each expression will have a [Type](../type), and can contain a number of mathematic operators.

[Table 5.1](#TableOperators) lists the operators that you can include in your expressions, listed in order of
precedence<sup>[1](#FootnotePrecedence)</sup>. The operators you can use depend on the kind of data that you are using within the expression.

<a id="TableOperators"></a>
  |  **Operator** | **Description**                          | **Example** 
  ----------------|------------------------------------------|----------------
  |      ( )      | Parenthesis                              |  (1 + 1) * 2
  |     % * /     | Modulo<sup>[a](#FootnoteOperators)</sup>, Multiplication and Division |  1 / 2 * 5 % 3 
  |      + -      | Addition and subtraction                 |  10 + 3 - 4 
<hr class="footnote">
<div id="FootnoteOperators" class="footnote">
<sup>a </sup>The remainder after division. For example 9 modulo 3 is 0, 10 modulo 3 is 1, 11 modulo 3 is 2 etc.
</div>
<div class="caption"><span class="caption-figure-nbr">Table 5.1: </span> C# Operators and Example Expressions</div><br/>


[Table 5.2](#TableExpressions) shows some example expressions, their values, and types. Expressions can be literal values, entered in the code. An Expression can also contain mathematical calculations using standard addition, subtraction, multiplication, division, and groupings.

<a id="TableExpressions"></a>
  |    **Example Expression**   |      **Value**       |   **Type**
  ------------------------------|--------------------- |---------------
  |             73              |         73           |  int
  |            2.1              |         2.1          |  float
  |       "Hello World"         |   \"Hello World\"    |  string<sup>[a](#FootnoteExpressions)</sup>
  |           "Fred"            |      \"Fred\"        |  string
  |           3 * 2             |          6           |  int
  |         1 + 3 * 2           |          7           |  int
  |         (1 + 3) * 2         |          8           |  int
  |         7 - 3 + 1           |          5           |  int
  |           3 / 2             |       1<sup>[b](#FootnoteExpressions)</sup>  |  int
  |          3.0 / 2.0          |         1.5          |  float
  |            3 % 2            |          1           |  int
  |           11 % 3            |          2           |  int
  |          3 / 2.0            |      1.5<sup>[c](#FootnoteExpressions)</sup> |  float
  | 1 + (3 / 2.0) + 6 * 2 - 8   |         6.5          |  float
<hr class="footnote">
<div id="FootnoteExpressions" class="footnote">
<sup>a </sup>This is technically a char* which denotes a reference to a string of characters.<br/>
<sup>b </sup>C# does integer division for int values, rounding the value down.<br/>
<sup>c </sup>If either, or both, values are real (floating point) numbers the result is also a real number
</div>
<div class="caption"><span class="caption-figure-nbr">Table 5.2: </span>Example C# Expressions and their values</div><br/>


## Activities

1. <span class="review">Which of the following statements are expressions? Assume 'x' is a variable that contains the integer value 9. (Line numbers are for reference only).</span>

```csharp
1. x + 12;
2. (x + 12);
3. x + "Hello World";
4. int y;
```
<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Identify the expressions</div>
<details class="review">
  <summary role="button">Answer</summary>
  <ul>
    <li><strong>Line 1:</strong> Yes this statement is an expression, because it performs the calculation 9 + 12 and evaluates to the integer 21.</li>
    <li><strong>Line 2:</strong> Yes this statement is an expression, because it performs the calculation 9 + 12 and evaluates to the integer 21. The brackets can be ignored as they simply group the expression before the evaluation takes place</li>
    <li><strong>Line 3:</strong> Yes this statement is an expression, because the compiler will convert the integer to a string and evaluate the expression by concatenating the two strings "3" and "Hello World" to output "3Hello World"</li>
    <li><strong>Line 4:</strong> No, this is not an expression because no value has been assigned to the variable y</li>
  </ul>
</details>


## Summary

:::note

- An expression is a **term** given to code that calculates a value.
- An expression provides a **value** that is used in a Statement.
- The expression’s value may be calculated or entered directly into the code.
- Calculations can use mathematical operators: + for addition, - for subtraction, * for multiplication, / for division, and parenthesis ( ) for grouping.
- Expressions are evaluated using the BODMAS<sup>[a](#FootnoteBODMAS)</sup> order of operations.
- Values entered directly within an expression are **Literal** values.
<hr/>
<div id="FootnoteBODMAS" class="footnote"><sup>a</sup>BODMAS indicates that expressions are evaluated B brackets first, O orders (which includes powers and square roots), DM for division and multiplication (which are of equal precedence, and are evaluated left-to-right), then AS addition and subtraction (of equal precedence, evaluated left-to-right).</div>

:::

## Further Reading

- [Microsoft C# guide - Statements, expressions, and operators](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/statements)
- [Microsoft C# Language Reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/expressions)


<hr class="footnote">
<div id="FootnotePrecedence" class="footnote">
<sup>1 </sup>Expressions follow the standard mathematical order of precedence (BODMAS).
</div>