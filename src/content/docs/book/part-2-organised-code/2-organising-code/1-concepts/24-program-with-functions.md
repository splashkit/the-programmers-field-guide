---
title: "Program (with functions)"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept

You can declare your own [Functions](../20-function) within the program's code.

<a id="FigureProgramWithFunctions"></a>

![Figure 5.23 You can declare your own Functions in your program's code](./images/storing-and-using-data/program-with-functions.png "You can declare your own Functions in your program's code")

<div class="caption"><span class="caption-figure-nbr">Figure 5.23: </span>You can declare your own Functions in your program's code</div>

## In C#

- A C# program may contain declarations for custom [Functions](../21-function)
- The function must be declared before it is used

:::tip[Syntax]

- [Figure 5.x](#FigureProgramWithFunctionsSyntax) shows code for a function declaration in C#.

<a id="FigureProgramWithFunctionsSyntax"></a>

![Figure 5.x C# Syntax for a program (with functions)](./images/storing-and-using-data/ParameterSyntax.png "C# Syntax for a program (with functions)")
<div class="caption"><span class="caption-figure-nbr">Figure 5.x: </span>C# Syntax for a program (with functions)</div><br/>

:::

## Examples

- [Listing 5.x](#ListingProgramWithFunctions) below shows an example of declaring a function in a C# program.

<a id="ListingProgramWithFunctions"></a>

```csharp
// ... header missing
double farenheight_to_celsius(double farenheight) {
  return (5.0 / 9.0) * (farenheight-32);
}

int main() {
  double input_temp;
  string line;

  write("Please enter temperature in Farenheight: ");
  line = read_line();
  input_temp = convert_to_double(line);

  write_line("This is " + to_string(farenheight_to_celsius(input_temp)) + " in Celsius");
  return 0;
}
```
<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Example of declaring a function in a C# program</div>

## Activities

[TODO]

:::note[Summary]

- A Program is an **Artefact**, you create Programs that the user can execute. Internally these programs contain other artefacts such as [Methods](../03-method), [Functions](../20-function), and [Variables](../12-variable).
- You can declare your own function within your program’s code.
- With C and Pascal the Function must be declared before it is used.

:::