---
title: "Assignment Statement"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept

The Assignment Statement calculates a value, and stores it in a [Variable](../12-variable). You use an assignment statement to store values in variables.

<a id="FigureAssignmentStatement"></a>

![Figure 5.19 Assignment Statements assign values to Variable](./images/storing-and-using-data/statement-assignment.png "Assignment Statements assign values to Variable")

<div class="caption"><span class="caption-figure-nbr">Figure 5.19: </span> A Assignment Statements assign values to Variable</div> <br/>

## In C#

:::tip[Syntax]

- The C# syntax for an assignment statement is shown in [Figure 5.x](#FigureAssignmentStatementSyntax) below
- In C# assignment is indicated by the equals sign ( = ).
- The left hand side of the assignment must be a valid variable, this is where the value is to be stored.
- The right hand side of the assignment is an expression, this calculates the value that will be stored in the Variable.
- There are multiple versions of the assignment, giving short hand ways of using the current value.
  - `=` is the standard assignment, this stores the value of the expression in the Variable.
  - `+=` increments the variable’s value, where `a += n;` is equivalent to `a = a + n`
  - `-=` decrements the variable’s value, where `a -= n;` is equivalent to `a = a - n`
  - `*=` multiplies the value in the variable by a given factor, where `a *= n;` is equivalent to `a = a * n`
  - `/=` divides the value in the variable by a factor, where `a /= n;` is equivalent to `a = a / n`
- The `++` and `--` operators allow a variables value to be increments or decremented.


<a id="FigureAssignmentStatementSyntax"></a>

![Figure 5.x The syntax for an assignment statement](./images/storing-and-using-data/AssignmentStatementSyntax.png "The syntax for an assignment statement")
<div class="caption"><span class="caption-figure-nbr">Figure 5.x: </span>The syntax for an assignment statement</div><br/>

:::

## Examples

- See [Listing 5.x](#ListingAssignmentStatement) below for an example assignment statements.

<a id="ListingAssignmentStatement"></a>

```csharp
#include "splashkit.h"
/* Program: assignment_tests.cs 
 * Demonstrates assignment to a variable
 */

int main() {
  int my_data = 10, days_in_month, days_remaining;
  write("my_data_is ");
  write_line(my_data);

  my_data = my_data + 1; // add 1 to my_data and store in my_data
  write("my_data_is ");
  write_line(my_data);

  my_data++; // add 1 to my_data and store in my_data
  write("my_data_is ");
  write_line(my_data);

  my_data *= 2; // double my_data and store in my_data
  write("my_data_is %d\n", my_data);

  days_in_month = 365 / 12; // assign days_in_month a calculated value
  printf("On average there are " + to_string(days_in_month) + " days in a month.");

  // assign days_remaining a calculated value
  days_remaining = 365 - days_in_month * 12;
  write_ln("The remaining " + to_string(days_remaining) + " days are distributed to a few months " + days_remaining); // CHECK THIS

  return 0;
}
```
<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Assignment Tests</div>

## Activities

[TODO]

:::note[Summary]

- An Assignment Statement is an **action** you can get the computer to perform.
- The _right hand side_ of the Assignment is an **[Expression](../23-expression)** that calculates the value to be stored.
- The _left hand side_ of the Assignment is a **[Variable](../12-variable)** into which the value is stored.
- When the Assignment Statement is executed the Expression is evaluated first, and then the resulting value is stored in the variable.
- Its important to remember that the Variable is a location at which to store a value.
- When the Variable appears on the left hand side of an assignment it is being use to store the resulting value. If the variable appears on the right hand side its value is being used as part of the expression.

:::