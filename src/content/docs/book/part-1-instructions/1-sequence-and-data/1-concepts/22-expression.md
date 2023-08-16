---
title: "Expressions"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---


## Concept

You can **read** the values from Variables and Constants within Expressions. The value of the expression is calculated by **reading** the values from the Variables and Constants when the expression is calculated[^22].

<a id="FigureExpressions"></a>

![Figure 5.22 Expressions can read values from Function Calls, Variables, and Constants](./images/storing-and-using-data/expression.png "Expressions can read values from Function Calls, Variables, and Constants")

<div class="caption"><span class="caption-figure-nbr">Figure 5.22: </span>Expressions can read values from Function Calls, Variables, and Constants</div> <br/>

## In C#

[TODO]

## Examples

[TODO]

## Activities

[TODO]

:::note[Summary]

- Expression is the term given to the code that calculates values within your Statements.
- You can read values from Function Calls, Variables, and Constants.
- You use the Variable or Constant’s name to access its value within an Expression.
- The Function Call runs the code in the Function, and then reads the result returned.
- There are actually **two expressions** in [Figure 5.22](#FigureExpressions):
  - The first Expression is the value passed to the _sin_ function (𝑑𝑒𝑔 × 𝑃 𝐼 × 180). This value is calculated by reading the values from the 𝑑𝑒𝑔 variable and the 𝑃𝐼 constant. These values are then used in the Expression to determine that value that is passed to the Parameter in _sin_.
  - The second Expression is the result returned from the call to the _sin_ function. This will calculate the sine of the value calculated in the first expression.
- The Expression reads the value of the Variable **at the time** it is executed
- Expressions are used to calculate values that are...
  - Passed to Parameters within [Procedure Calls](#procedure-call).
  - Assigned to Variables within [Assignment Statements](#assignment-statement). 

:::