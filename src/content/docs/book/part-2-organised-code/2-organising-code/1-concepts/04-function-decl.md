---
title: "Functions"
---

Functions are used to calculate values. They are almost identical to procedures. They have a name, can accept parameters, contain instructions, and can be called to perform their actions. The *only* difference is what happens at the end. When a function ends, it [returns](../05-return) a value to the caller, whereas a procedure just ends. This means that procedures are called within [statements](../../../../part-1-instructions/2-communicating-syntax/1-concepts/02-statement), whereas functions can be called within [expressions](../../../part-1-instructions/2-communicating-syntax/1-concepts/03-expression).

<a id="FigureFunction"></a>

![Figure 5.20 A Function is just like a Method, except it calculates and returns a value](./images/storing-and-using-data/function.png "A Function is just like a Method, except it calculates and returns a value")

<div class="caption"><span class="caption-figure-nbr">Figure 5.20: </span>A Function is just like a Method, except it calculates and returns a value</div> <br/>

## Functions - Why, When, How

Procedures are great as they let us code actions we want performed within a block of code that we can focus on in isolation of the rest of the program. However, sometimes we need these blocks of code to **calculate** or **get** a value for us. In these cases we can create a function rather than a procedure. You can then code the steps within the function to calculate or get the data needed. Anytime you need this value, you don't need to re-code the actions, you can just call the function you created.

As with procedures, you can put yourself in the place of the function as you create it. You can start by thinking about the information you need, inputs, and then think about the value you return, output. For example, if you were required to determine if a point was within circle, for a `point_in_circle` function, what data would you need and what would you return? You would need to know the location of the point, and the location and size of the circle. Within the function you could then perform the steps to determine the distance between the point and the center of the circle, and return true if this is less than the size of the circle, or false if it is larger. From now on, any time you need to check if a point is within a circle, you can call this function, and it will return that information to you.

:::tip

You can think of procedures as tasks that perform an action, whereas functions are tasks that calculate a value. You use procedures to do this, and functions to get things.

:::

## In C/C++

:::tip[Syntax]

![Syntax for a C/C++ function declaration](./images/function-decl.png)

- In C/C++ function and [procedure](../01-procedures) declarations are very similar.
- In C/C++, a function’s declaration starts with the [type](../06-type) of data the function will return.
- This if followed by the name of the function, and its parameters. In the same way as is done in the [procedure declaration (with parameters)](../03-parameter).
- The body of the function is a `block`, in the same way it was for as procedure.
- You [call](../21-function-call) a function to run its code and get the value it returns.
- See the [return statement](../22-return-statement) to see how to return a result from a function in C/C++.
- The entry point of the program is the `main` function. It returns a number to the operating system that can be used to indicate the success or failure of the program. You can read the value returned from the last program to execute in the terminal using `echo $?`.
- `void` is a type, so in C function and procedure declarations are identical.
- In C/C++ all procedures are functions that return a `void` type.
- The `void` type indicates an empty type. This indicates that procedures return no data to the caller.

:::

### Procedures as void functions

C/C++ do not have a strong distinction between functions and procedures. Instead, in C/C++ all procedures are functions that return a special `void` type. This means that the C/C++ syntax does not include a separate syntax for procedure declarations. Even though C/C++ does not have direct syntax for Methods, the concept is still very important.

## Examples

[Listing 5.x](#ListingFunctionDeclaration) below shows example function declarations.

<a id="ListingFunctionDeclaration"></a>

```cpp
/* Program: test-square.cs */
#include "splashkit.h"

using std::to_string;

double square(double val) 
{
  return val * val;
}

bool pount_in_circle(double pt_x, double pt_y, double c_x, double c_y, double c_radius)
{
  double distance = sqrt(square(pt_x - c_x) + square(pt_y - c_y));
  return distance <= c_radius;
}

int main()
{
  write_line("5 squared is " + to_string(square(5)));

  write_line("A point at 1, 3 is in a circle at 0, 0, with radius 4" + to_string(point_in_circle(1, 3, 0, 0, 4)) );

  return 0;
}

```
<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Example function declaration of a square function</div>

There are three function declarations in this code: `square`, `point_in_circle`, and `main`. Each of these performs a number of steps and returns a value. 

- The `square` function accepts a `val` parameter, and returns the square of this. This is achieved with a single line of code, but helps make the other code more readable.
- In `point_in_circle`, we accept parameters for the point (`pt_x` and `pt_y`) and the circle (`c_x`, `c_y`, and `c_radius`) and return a boolean value indicating if the point is within the circle. To achieve this, we can get the distance from the point to the center of the circle, which we store in a local variable called `distance`, and then compare this with the circle's radius to get the result;
- The `main` function exists in all C/C++ programs. It is the entry point, and returns a value that indicates if the program completed successfully or not. Returning 0 at the end indicates the program succeeded, with any other value is treated as an error code.

Notice we can use the `square` function in the calculation for the `point_in_circle`. Once you have a function that calculates something, you can call it any time you need that value. Here we can use the Pythagorean theorem to determine the distance between the points. This requires us to get the square of the distance from each dimension (x and y), and then calculate the square root of this. For this we can then use the [sqrt](https://en.cppreference.com/w/c/numeric/math/sqrt) function from the math standard library in C.

:::note[Summary]

- A function is a **building block**. Something that you can create and use in your program’s code.
- A function is just like a [procedure](../01-procedures) in that it ...
  - Has a name that is used to call it.
  - Performs instructions when it is executed.
  - Can accept [parameters](../03-parameter) to allow the caller to pass in values.
  - Is can contain [local variables](../02-local-variable).
- Unlike a procedure, a function...
  - Should **not** have any side effects. – Calculates and returns a value.
  - Is called as part of an Expression.
  - You use Functions to calculate values.
  - You use a [function call](../21-function-call) to call a function as part of an [expression](../../../../part-1-instructions/2-communicating-syntax/1-concepts/03-expression).

:::
