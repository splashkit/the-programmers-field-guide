---
title: "Constant"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept

<!-- A Constant is just like a [Variable](../12-variable), but its value cannot be changed. Constants are declared within the Program, and given a value when they are created. Once they are created the value within the Constant cannot be
changed. This is useful for data where you do not want the value changing during the program's execution.

<a id="FigureConstant"></a>

![Figure 5.13 Constants have a value that cannot be changed](./images/storing-and-using-data/constant.png "Constants have a value that cannot be changed")
<div class="caption"><span class="caption-figure-nbr">Figure 5.13: </span> Constants have a value that cannot be changed</div><br/>

## In C#

:::tip[Syntax]

- The syntax in [Figure 5.x](#FigureConstantSyntax) allows you to declare Global Variables and Constants

- Global constants can be declared in two ways, using a [C Variable Declaration](../12-variable) with the `const` modifier or using `#define`.


<a id="FigureConstantSyntax"></a>

![Figure 5.x The syntax for a C# program.](./images/storing-and-using-data/ConstantSyntax.png "The syntax related to the declaration of constants within a C# program")
<div class="caption"><span class="caption-figure-nbr">Figure 5.x: </span>The declaration of global variables within a C# program</div><br/>

:::

## Examples

- See [Listing 5.x](#ListingConstants) below for an example of `#define` and constants.
- With `#define` you are defining a 'value' for the identifier, this identifier is then substituted with the ‘value’ throughout your code. This means you have to pay particular attention to what ‘value’ you use.
- There are a number of conventions, called coding standards, that describe how your code should appear for a given language. In this text we will use a common C convention of having all *Constants* in **UPPER CASE**, with underscores (`_`) used to separate words. So the *Maximum Height* constant becomes`MAXIMUM_HEIGHT`.

An example of a C program with a defined constant and a constant variable is shown in [Listing 5.x](#ListingConstants) below.


<a id="ListingConstants"></a>

```csharp
# include "splashkit.h"

// This defines that the identifier PI should always be replaced
// with the "value" 3.1415
// This is like "replace all" PI with 3.1415 (Notice no =)
#define PI 3.1415

// This defines a global constant that stores the value
// 3.1415 / 180 .... which is 0.01745277778
// Notice the = .... this means "assign to"
// In tihs case there is a DEG_TO_RAD "constant"
const float DEG_TO_RAD  = PI / 100;

int main() {
  write_line(PI);
  write_line(DEG_TO_RAD);

  return 0;
}


```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>C program with a defined constant and constant variable</div>

## Activities

<span class="review"> 

- What does the code in [Listing 5.x](#ListingConstantsActivity) below output?<br>

</span>

<a id="ListingConstantsActivity"></a>

```csharp
const float PI = 3.141;

main() {
  printf("Value of constant PI = %f\n", PI);
  PI = 3.141592;
  myMethod();
}

myMethod() {
  printf("Value of constant PI = %f\n", PI);
}
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Example declaration of constants</div>


<details class="review">
  <summary role="button">Answer</summary>

- No output of the activity in [Listing 5.x](#ListingConstantsActivity) above is produced. The program fails to compile because an attempt is made to change the value of a constant in the main() method.
</details>

:::note[Summary]

A Constant is an **artefact**. You can create Constants in your Program to store values that must not change.

- A Constant is similar to a [Variable](../12-variable), they have a...
  - **Name** that is used to access them.
  - **Value** that can be read in an Expression.
  - **Type** that determines how their data is interpreted.
- You **read** values of Constants in Expressions.
- Constants are useful for data you do not want to change during the program.
- The name of the Constant is an [Identifier](../07-identifier).
- The Constant’s name should reflect the value it is storing.

::: -->