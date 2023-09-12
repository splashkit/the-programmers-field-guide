---
title: Expression
---

[Expressions](../../../1-sequence-and-data/1-concepts/04-expression) were covered in the previous chapter. So this is just a quick recap as expressions are a key component of programming language syntax.

Statements need data, and in each case this data can be calculated using different mathematical operations, method calls, variables, and so on. To handle this, all values within statements are coded as **expressions**. This means you have the full range of calculation options in method arguments as you have in assignment statements.

Expressions are places where values are **required** within the language syntax. Within the expression you may access values from multiple variables, literals, or method calls.

- Each assignment statement has an expression on the right-hand side of the assignment operator.
- Method calls require expressions for each argument.

Once you learn how to form an expression, you can use this same knowledge anywhere you code a value in your program.

## Expressions can contain expressions

Expressions may contain method calls, which in tern may require values as arguments (expressions). This means that an expression may contain other expressions. When you look at one line of code, there could be multiple expressions in play. In each case those expressions are evaluated in order to calculate the value being used.

The following code illustrates four lines of code that include expressions.

- The first assignment statement has **one** expression - the literal `"5.2"`.
- The second line has **two** expressions:
  - The assignment statement has an expression - the result of `ToDouble` is the value for this expression.
  - The `line` variable's value is passed as an **argument** to the `ToDouble` method call. Arguments are expressions within the method call. As there is one argument, that is one expression.
- Line three has **one** expression - the value saved to the variable in the assignment statement. There are no additional method calls, so while this accesses multiple values it is still just one expression.
- This is messy code, but it is valid. You would be better using some variables to help make sense of this if it were real code. Can you identify the six expressions?
  - `OpenWindow` is accepting 3 arguments (3 expressions)  
  - `200 + Rnd(...)` is the second argument. This has a method call, with one argument (+1 expression).
  - `300 + Rnd(...)` is the third argument. This also has a method call that requires a value (+1 expression).
  - `ToDouble(...)` is a method call that requires one agument (+1 expression).

```csharp
line = "5.2";
radius = ToDouble(line);
radius = radius + 3 * GAP;
OpenWindow("Hello " + name, 200 + Rnd(500), 300 + Rnd(ToDouble(otherData)));
```


:::note[Summary]
- An expression is a **term** given to the values you calculate within the statements in your code.
- Expressions are pretty standard across most languages, once you get the hang of these there will be small differences between languages but they are mostly the same.
:::