---
title: Expression
---

[Expressions](../../../1-sequence-and-data/1-concepts/04-expression) were covered in the previous chapter, so this is just a quick recap as expressions are a key component of programming language syntax.

## Expressions -- when, why, and how

Statements need data, and this data can be calculated using different mathematical operations, method calls, variables, and so on. To handle this, all values within statements are coded as **expressions**. This means you have the full range of calculation options in method arguments as you have in assignment statements.

You have already seen expressions in use:

- Each assignment statement has an expression on the right-hand side of the assignment operator.
- Method calls require expressions for each argument.

Once you learn how to form an expression, you can use this knowledge anywhere you need a value in your program.

## Expressions can contain expressions

Expressions may contain method calls, which in turn may require values as arguments (expressions). This means that an expression may contain other expressions, and a single line of code might contain multiple expressions. When this happens, the expressions are evaluated "inside out".

Have a look at the following code:

```csharp
line = "5.2";
radius = ToDouble(line);
radius = radius + 3 * GAP;
OpenWindow("Hello " + name, 200 + Rnd(500), 300 + Rnd(ToDouble(otherData)));
```

There are four lines of code, all of which include one or more expressions.
Let's look at each line in more detail.

- **Line one** is an assignment statement. This uses **one** expression -- the literal `"5.2"`.
- **Line two** is another assignment statement, but it contains **two** expressions:
  1. The assignment statement overall uses an expression as its right-hand side.
  2. The `line` variable's value is passed as an argument to the `ToDouble` method call. Arguments are expressions within the method call. As there is one argument, that is one expression. Because this expression is "inside" the first expression, it is evaluated first.
- **Line three** has **one** expression -- the value saved to the variable in the assignment statement. There are no additional method calls, so while this accesses multiple values it is still just one expression.
- **Line four** contains **six** expressions. This is messy code, but it is valid. You would be better using some variables to help make sense of this if it were real code. Can you identify the six expressions?
  - `OpenWindow` accepts 3 arguments (3 expressions).
  - The second argument to `OpenWindow`, `200 + Rnd(...)`, contains a method call with one argument. That argument (`500`) is another expression (+1 expression).
  - The second argument to `OpenWindow`, `300 + Rnd(...)`, also contains a method call with one argument (`ToDouble(otherData)`) (+1 expression).
  - Within the second argument there is a call to `ToDouble(...)`. This again requires one argument (`otherData`), so there's one more expression (+1 expression).

:::note[Summary]

- An expression is a term given to code that calculates a value, and can be any combination of literal values, method calls, and calculations.
- Expressions are pretty standard across most languages. Once you get the hang of these there may be small differences between languages, but they are mostly the same.

:::
