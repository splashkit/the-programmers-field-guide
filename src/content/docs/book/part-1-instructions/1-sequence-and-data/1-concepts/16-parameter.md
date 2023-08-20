---
title: "Parameter"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept

The instructions within a [Method](../03-method) define the actions that occur when that procedure is called. In most cases these instructions need to be given values to work with. These values can be passed to the Procedure using Parameters. The Parameter is a [Variables](../12-variable) that has its value set in the procedure call.

<a id="FigureParameter"></a>

![Figure 5.16 Parameters allow data to be passed to Procedures](./images/storing-and-using-data/parameter.png "Parameters allow data to be passed to Procedures")

<div class="caption"><span class="caption-figure-nbr">Figure 5.16: </span> Parameters allow data to be passed to Procedures</div> <br/>

## In C#

:::tip[Syntax]

- In C#, Parameters can be declared in any [Function](../20-function) or [Method](../03-method)
- The syntax in [Figure 5.x](#FigureParameterSyntax) shows the C# code for declaring Methods with Parameters
- Parameters in C# are declared in a similar way to other [Variables](../12-variable), with the [Type](../06-type) name appearing first followed by the Parameter’s name.

<a id="FigureParameterSyntax"></a>

![Figure 5.x C# Syntax for Method Declarations (with Parameters)](./images/storing-and-using-data/ParameterSyntax.png "C# Syntax for Method Declarations (with Parameters)")
<div class="caption"><span class="caption-figure-nbr">Figure 5.x: </span>C# Syntax for Method Declarations (with Parameters)</div><br/>

:::

## Examples

- See [Listing 5.x](#ListingParameters) below for an example of a method with parameters.

<a id="ListingParameters"></a>

```csharp
/* Program: parameter-test.cs */

void print_equation(int m, double x, int c) {
    write_line(to_string(m) + " x " + to_string(x) + " + " + to_string(c) + " = " + to_string(m * x));
}

int main() {
  print_equation(2, 5.1, 3);
  print_equation(7, 2.74, -8);
  return 0;
}
```
<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Parameter Tests</div>

## Activities

[TODO]

:::note[Summary]

- Parameter is the **term** given to the [Variables](../12-variable) declared to accept values passed to [Methods](../03-method).
- The **procedure call** assigns values to each of the Procedure’s Parameters.
- Parameters allow you to pass values into a Procedure. 
- Within the Procedure the Parameters can be used in the same way as any other
Variable.
- It is **good practice** to use Parameters to pass values into a Procedure

:::