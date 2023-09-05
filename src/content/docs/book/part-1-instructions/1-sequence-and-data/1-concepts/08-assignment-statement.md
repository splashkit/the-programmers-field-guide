---
title: "Assignment Statement"
---

The Assignment Statement is an **instruction** that stores a value in a [Variable](../12-variable). You use this instruction any time you want to update the value of a variable.

<a id="FigureAssignmentStatement"></a>

![Figure 5.19 Assignment Statements assign values to Variable](./images/storing-and-using-data/statement-assignment.png "Assignment Statements assign values to Variable")

<div class="caption"><span class="caption-figure-nbr">Figure 5.19: </span> A Assignment Statements assign values to Variable</div> <br/>

The assignment statement performs two actions. First, it calculates the value of the expression (calculation) on the right-hand side of the assignment operator (the `=`). Once it has the value, it stores the value (assigns it) to the variable on the left-hand side of the assignment operator.

## Assignment Statement - why, when, and how

When you create a variable, you have identified a value that you want to be able to change as the program runs. The **assignment statement** lets you store a value in the variable. When designing your program, you can use the assignment statement to store updated values for your variables as they change.

For example, you can decide to ask the user for their name. You need a variable to store the value, and the assignment statement lets you read a response from the user and store the result in a variable. In this case, the **right-hand side** of the assignment would be a call to `ReadLine`, which reads input from standard in and returns it to you. In this case, the assignment statement would allow you to store that value in a `name` variable, for example, which you can use later whenever you want to refer to the user's name.

```csharp
using static System.Console;

// Declare a variable - somewhere we can store a string
string name;

Write("Enter your name: ");

// Assign a value to name
//
// name is the left-hand side - where to store the value
// |
// |    ReadLine() is the right-hand side. It is called
// |      |        to get the value to assign to name
// v      v
name = ReadLine();
```

It is important to remember this has **2 actions**:

1. Calculate the value on the right-hand side
2. Store it in the variable on the left-hand side.

This means you can update the value of a variable. For example:

```csharp
using static System.Convert;
using static System.Console;

string line;
int count;

Write("What is the start count: ");

// Read in a line from the user
line = ReadLine();

// Initialise the count to a user provided value.
count = ToInt32(line);

WriteLine($"Count is {count}");

// Add one to count
//
// count is the left-hand side - where to store the value
// |
// |    count + 1 is calculated first...
// |      |
// v      v
count = count + 1;

WriteLine($"After count = count + 1... count is now {count}");

// We can use shorthand to do this too
//
// count is the left-hand side - where to store the value
// |
// |  This means... count = count + 5
// |  |
// v  v
count += 5;

WriteLine($"After count += 5... count is now {count}");

// We can make this shorter for + 1
//
// count is the left-hand side - where to store the value
// |
// | This means... count = count + 1
// | |
// v v
count++;

WriteLine($"After count += 5... count is now {count}");

```

The following shows the output if you run this at the Terminal and enter **17** as the start count. The different shorthand assignments aim to help you with the common operations of updating a variable based on its current value. The example shows the use of `+=` and `++` and there are the equivalent versions for subtraction (`-=` and `--`) and for multiplication and division (`*=` and `\=`).

```bash
What is the start count: 17
Count is 17
After count = count + 1 ... count is now 18
After count += 5 ... count is now 23
After count++    ... count is now 24
```

You do not always need to store values in variables. Sometimes you can just use the value and then forget it. For example, in the above code, we read the initial count from the user. This requires us to read it as text, and then convert that text to a number. Given then we do not ever use the details in `line` again, we do not need to create this variable in the first place. Instead, we could pass the value to the convert function directly as shown below.

```csharp
using static System.Convert;
using static System.Console;

int count;

Write("What is the start count: ");

// Initialise the count to a user provided value.
//
//       Instead of storing in line and using it here, we can call
//       ReadLine and pass its result to ToInt32 directly.
//               |
//               v
count = ToInt32(ReadLine());

//... the rest of the code would be the same
```

## In C#

:::tip[Syntax]

- The C# syntax for an assignment statement is shown in [Figure 5.x](#FigureAssignmentStatementSyntax) below
- In C# assignment is indicated by the equals sign ( = ).
- The left-hand side of the assignment must be a valid variable, this is where the value is to be stored.
- The right-hand side of the assignment is an expression. It calculates the value that will be stored in the variable.
- There are multiple versions of the assignment, giving short-hand ways of using the current value.
  - `=` is the standard assignment, this stores the value of the expression in the Variable.
  - `+=` increments the variable’s value, where `a += n;` is equivalent to `a = a + n`
  - `-=` decrements the variable’s value, where `a -= n;` is equivalent to `a = a - n`
  - `*=` multiplies the value in the variable by a given factor, where `a *= n;` is equivalent to `a = a * n`
  - `/=` divides the value in the variable by a factor, where `a /= n;` is equivalent to `a = a / n`
- The `++` and `--` operators allow you to add or remove one from a variable's current value.


<a id="FigureAssignmentStatementSyntax"></a>

![Figure 5.x The syntax for an assignment statement](./images/storing-and-using-data/AssignmentStatementSyntax.png "The syntax for an assignment statement")
<div class="caption"><span class="caption-figure-nbr">Figure 5.x: </span>The syntax for an assignment statement</div><br/>

:::

## Examples

See [Listing 5.x](#ListingAssignmentStatement) below for an example assignment statements.

<a id="ListingAssignmentStatement"></a>

```csharp
#include "splashkit.h"
/* Program: assignment_tests.cs 
 * Demonstrates assignment to a variable
 */

int my_data = 10, days_in_month, days_remaining;

WriteLine($"my_data_is {my_data}");

my_data = my_data + 1; // add 1 to my_data and store in my_data
WriteLine($"my_data_is {my_data}");

my_data++; // add 1 to my_data and store in my_data
WriteLine($"my_data_is {my_data}");

my_data *= 2; // double my_data and store in my_data
WriteLine($"my_data_is {my_data}");

days_in_month = 365 / 12; // assign days_in_month a calculated value
WriteLine($"On average there are {days_in_month} days in a month.");

// assign days_remaining a calculated value
days_remaining = 365 - days_in_month * 12;
WriteLine($"The remaining {days_remaining} days are distributed to a few months");
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Assignment Tests</div>

## Activities

[TODO]

:::note[Summary]

- An Assignment Statement is an **instruction** you can get the computer to perform.
- The _right-hand side_ of the assignment is used to calculate the value to be stored.
- The _left-hand side_ of the assignment is a **[Variable](../12-variable)** into which the value is stored.
- When the Assignment Statement is executed the Expression is evaluated first, and then the resulting value is stored in the variable.
- It's important to remember that the Variable is a location to store a value.
- When the Variable appears on the left-hand side of an assignment it is used to store the resulting value. If the variable appears on the right-hand side its value is being used as part of the calculation.

:::
