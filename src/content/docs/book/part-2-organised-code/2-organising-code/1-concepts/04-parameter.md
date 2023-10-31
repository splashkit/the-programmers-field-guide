---
title: "Parameter"
---

The instructions within a [procedure](../01-procedures) define the actions that occur when that procedure is called. In most cases, these instructions need to be given values to work with. These values can be passed to the procedure using **parameters**. A parameter is a [variable](../../../../part-1-instructions/1-sequence-and-data/1-concepts/07-variable) that has its value set by an [argument](../../../../part-1-instructions/1-sequence-and-data/1-concepts/02-method#arguments) in the procedure call.

<a id="FigureParameter"></a>

![Figure 5.16 Parameters allow data to be passed to Procedures](./images/procedure-decl-with-params.png "Parameters allow data to be passed to Procedures")

<div class="caption"><span class="caption-figure-nbr">Figure 5.16: </span> Parameters allow data to be passed to functions and procedures</div> <br/>

## Parameters - Why, When, How

In most cases your functions and procedures will need to know things in order to perform their actions. Perhaps the easiest way to think about this is as if you were asked to do the task. If I asked you to bin something, you would need me to tell you want to dispose of. In a program, this could be coded as a `dispose` procedure, where the *thing* to dispose would be the parameter.

As you start to create a procedure, think about what it will need to be told in order to perform its actions. Code these as parameters, and you can then pass the actual values to use as arguments.

Think about the different functions and procedure we have been calling already. When you call `open_window` you passed its arguments for the title, width, and height of the window. This means there are three parameters in this procedure, the first accepting the value for the title, the second the width, and the third the height. The `open_window` code uses these values when it creates the window you see appear on the screen.

## In C/C++

:::tip[Syntax]

- In C/C++, parameters can be declared in any [function or procedure](../00-functions-and-procedures)
- The syntax in [Figure 5.x](#FigureParameterSyntax) shows the C/C++ code for declaring parameters within a procedure.
- Parameters in C/C++ are declared like other [variables](../../../../part-1-instructions/1-sequence-and-data/1-concepts/07-variable), with the [type](../../../../part-1-instructions/1-sequence-and-data/1-concepts/06-type) followed by the parameter’s name.

<a id="FigureParameterSyntax"></a>

![Figure 5.x C/C++ syntax for a procedure declaration with parameters](./images/procedure-decl-with-params.png "C/C++ Syntax for a procedure declaration with parameters")
<div class="caption"><span class="caption-figure-nbr">Figure 5.x: </span>C/C++ syntax for a procedure declaration with parameters</div><br/>

:::

## Example

See [Listing 5.x](#ListingParameters) below for an example of a procedure with parameters.

<a id="ListingParameters"></a>

```cpp
/* Program: Print an equation with its solution */

void print_equation(int m, double x, int c) 
{
  double solution = m * x + c;
  write_line( to_string(m) + " x " + to_string(x) + " + " + to_string(c) + " = " + to_string(solution));
}

int main() 
{
  print_equation(2, 5.1, 3);
  print_equation(7, 2.74, -8);
  return 0;
}
```
<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Parameter Tests</div>

The `print_equation` procedure accepts three parameters: `m`, `x`, and `c`. This means that when `print_equation` is called, it must be passed three argument value. The first value will be passed to the `m` parameter, the second to `x`, and the third to `c`.

You can also look at the example code in the [functions page](../04-function-decl). Both the `square` and `point_in_circle` functions accept parameters in order to achieve their tasks. The `square` function needs to be told the value you want to square, while the `point_in_circle` needs to know the location of the point (`pt_x` and `pt_y`) and the location and size of the circle (`c_x`, `c_y`, `c_radius`). 

The great thing about parameters is that it really helps you generalise what your function can do. By accepting a value parameter, the `square` function can be used to square any `double` value. Similarly, by accepting parameters for the point and circle, the `point_in_circle` function can work for any point in any circle.

**TODO: Add slider here**

:::note[Summary]

- Parameter is the **term** given to a [variable](../12-variable) declared to accept the value from an argument passed to a [function or procedure](../00-functions-and-procedures) when it is called.
- The **procedure call** must provide argument values for each of the procedure’s parameters. These arguments are assigned to the procedures parameters, so that the procedure can use these when it runs.
- Parameters allow you to pass values into a [function or procedure](../00-functions-and-procedures). 
- Within the function or procedure, the parameters can be used in the same way as any other
variables.
- It is **good practice** to use parameters to pass values into a function or procedure.

:::
