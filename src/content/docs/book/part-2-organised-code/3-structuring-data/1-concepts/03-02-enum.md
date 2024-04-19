---
title: Enumerations
sidebar:
    label: " - Enumerations"
---

An Enumeration allows you to create a type where the value in these variables is restricted to a list of available options. When you declare an enumeration, you are listing the values that are available to this type. The example in [Figure x.y](#FigureCustomTypeEnum) declares a type that can have the value `ADD_COINS` or `REMOVE_COINS`.


<a id="FigureCustomTypeEnum"></a>

![Figure x.y: An Enumeration allows you to define related constants](./images/custom-type-enum.png "An Enumeration allows you to define related constantss")
<div class="caption">An Enumeration allows you to define related constants</div><br/>

:::note

- An enumeration is a kind of **building block** that you can declare.
- Using an enumeration you can declare a kind of value that must come from a list of available options.
- When you declare the enumeration you list the *values* that it may have.
- This is like a list of constants, where values of this type will match one of these constants.

:::

## Enumerations - Why, When, and How

Use enumerations to capture places in your code where the value you want needs to be from a list of available options. A good example of this is the key codes in SplashKit. These are coded as an enumeration, listing the different keys that can be held down. Similarly, the mouse buttons are also an enumeration in SplashKit. These enumerations help you know what value to provide to achieve the result you want. For example, you can use `KEY_RIGHT` for the right arrow key, or `LEFT_BUTTON` for the left mouse button.

Internally, the compiler maps your enumeration options to numeric values. The first option is represented by the value `0`, the second is by the value `1`, and so on. You can specify the values for each option in the enumeration if you want. This can be useful if you have certain values you need each option to be for some reason.

:::tip

Notice how the numeric value has not been important in our previous code. The `KEY_RIGHT` option has a numeric value, but we don't need to worry about this. We just cared that it was the value associated with the right arrow key.

In most cases the value should not be important.

:::

The **size** of an enumeration is based on the size of the integer type used to represent
its values.

## In C/C++

:::tip[Syntax]

In C/C++, you declare the enumeration using the **enum** keyword, and list the available constants within the braces.

![The syntax for an enumeration in C/C++](./images/enum-decl.png)

:::

:::note

- This is the syntax that allows you to declare an enumeration in C.
- The declaration starts `enum` and the identifier for its name.
- Following this is a list of constants between braces (i.e. `{...}`). Each constant must have a unique name, and the by convention is all UPPERCASE.
- As with structs, you need to use the `enum` keyword for the type name. For example, `enum keycode_enum variable_name;`
- You can wrap the enum in a `typedef` so that you can alias the enum to a more convenient name.

:::

## Example

```cpp
#include "splashkit.h"

/**
 * Represents the different warning levels within the program.
 */
enum warning_level_enum
{
  SAFE,
  DANGER,
  EXTREME_DANGER
};

/**
 * Represents the different warning levels within the program.
 *
 * This is an alias of enum warning_level_enum
 */
typedef enum warning_level_enum warning_level;

int main()
{
  warning_level situation = SAFE;
  
  switch (situation)
  {
    case SAFE:
      write_line("Safe");
      break;
    case DANGER:
      write_line("Danger!");
      break;
    case EXTREME_DANGER:
      write_line("Run!");
      break;
    default:
      write_line("Unknown...");
  }

  return 0;
}
```

## Underlying Representation and Casting

While we give names to the different options within our enums, we know that these are actually just integer values. This is why we need the `default` branch in the example code - while it should be one of the valid options it may become any numeric value.

In general, you will work with enumerations through their named options, but sometimes you can take advantage of their underlying representation as a number. For example, you can take advantage of using the numeric values when you read a value from the user.

To do this, you need to tell the compiler to change the type from an integer to the enum type. This is called a **type cast**.

:::tip[Syntax]

There are a few different type casts in C/C++. The simplest are shown in the syntax below, with the type name in parentheses before the expression to convert, or with function call like syntax with the type name and then the expression in parentheses.

![The syntax for the type cast in C/C++](./images/type-cast.png)

:::

The following code demonstrates how to use this idea to read in a warning level value. Here we use the function call type cast syntax. When we do this, we need to make sure that the integer values align with the value in the enumeration.

```cpp
warning_level read_warning_level(string prompt)
{
  write_line(prompt);
  int value = read_integer("1 (safe) and 3 (extreme danger): ");

  // Ensure we have a valid number to map to the enum
  while( value < 1 || value > 3)
  {
    write_line("Please enter a value between 1 and 3");
    value = read_integer(prompt);
  }

  // Cast value to the enum type
  warning_level result = warning_level(value - 1);
  return result;
}
```

:::note

Some languages, including the latest version of C++, let you have enums with different underlying types.

:::
