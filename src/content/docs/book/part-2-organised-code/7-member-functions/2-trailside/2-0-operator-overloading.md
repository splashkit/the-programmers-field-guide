---
title: Operator Overloading
---

While not directly related to structs, objects, and member functions, operator overloading is an interesting addition that can help us when we build out our dynamic array.

**Operator overloading** refers to the ability of a programming language to allow programmers to define how operators work with their data types. This allows you to say how thinks like `+` and `-` may work, or how array indexing works using `[]` operators.

## Operator Overloading - Why, When, and How

C++ allows you to override a whole range of operators. So we could, for example, override the `+` operator in our dynamic array to allow you to add elements to it, or we could choose the `<<` operator to achieve the same effect. Both of these are **awful ideas**.

Operator overloading can be great if you have numeric values you are working with, and the standard mathematical symbols make sense in that context. In most other cases, you should use methods with names that make it clear what you want to achieve.

:::caution

It can be easy and tempting to use operator overloading, but you should avoid it unless you have a clear case where an operator really makes sense for your data type. In all cases, you should have methods that perform the same task so that the operator is not the only way to achieve your ends.

:::

Some operators you may want to consider overloading are the comparison operators and the array subscript operator. For the moment, we will only look at the array subscript operator and the comparison operators, but similar syntax applies for other operators you can overload.

## In C++

:::tip[Syntax]

In many ways, an operator overload is just like any other method declaration. In this case you don't get to pick a name, instead you assign this to the operator. Where the operator is used, this code will be called.

The array subscript operator must exist as a member of a struct, this provides the context upon which the index operation is performed. Arguments for the parameter list must then be applied within the `[...]`.

Comparison operators are declared outside a struct, and needs to be passed two parameters - one for the left-hand side of the operator, and one for the right-hand side.

![The syntax for an array subscript operator](./images/operator.png)

:::

## Example

The following code add comparison operators to the die, allowing you to compare it with other die (only for `<`) and to integer values. The different comparison operators are implemented in terms using the code in the less than operator, though in this case it is easy enough to have implemented each with its own code.

```cpp
#include "splashkit.h"

using std::to_string;

/**
 * A die is a struct that represents a single dice object 
 * with a given number of sides. The die can be rolled, and the 
 * current value of the die can be retrieved.
 */
struct die
{
  // The number of sides on the die
  unsigned int sides;

  // The current value of the die
  int value;

  /**
   * Creates a new die with the given number of sides.
   * 
   * @param sides The number of sides on the die.
   */
  die(unsigned int sides)
  {
    if ( sides < 1 )
    {
      sides = 1;
    }

    // store in sides in current object
    this->sides = sides;
    this->value = 1;
  }

  /**
   * Rolls the die, generating a new value.
   */
  void roll()
  {
    value = rnd(sides) + 1;
  }

  /**
   * Returns the current value of the die.
   * Const here indicates that this method does not change the die.
   * 
   * @return The current value of the die.
   */
  int current_value() const
  {
    return value;
  }
};

/**
 * Compare a die's current value to a given integer
 */
bool operator<(const die &lhs, const int &rhs)
{
  return lhs.current_value() < rhs;
}

bool operator<(const die &lhs, const die &rhs)
{
  return lhs.current_value() < rhs.current_value();
}

bool operator>(const die &lhs, const int &rhs)
{
  // the left hand side is greater than the right hand side, when
  // the right hand side is less than the left hand side
  return rhs < lhs;
}

bool operator<=(const die &lhs, const int &rhs)
{
  // The lhs is <= the rhs when the rhs is not less than the lhs
  // eg 5 <= 4 is false, because 4 < 5 is true (!true = false)
  // eg 5 <= 5 is true, because 5 < 5 is false (!false = true)
  return !(rhs < lhs);
}

bool operator>=(const die &lhs, const int &rhs)
{
  // The lhs is >= the rhs when the lhs is not less than the rhs
  // eg 5 >= 4 is true, because 5 < 4 is false (!false = true)
  // eg 5 >= 5 is true, because 5 < 5 is false (!false = true)
  // eg 3 >= 4 is false, because 3 < 4 is true (!true = false)
  return !(lhs < rhs);
}

int main()
{
  die d(6);
  string message;

  for(int i = 0; i < 10; i++)
  {
    d.roll();
    if (d >= 5) message = "Nice roll!";
    else if (d <= 2) message = "Too bad!";
    else message = "Meh";

    write_line("Dice value: " + to_string(d.current_value()) + " " + message);
  }

  return 0;
}
```

Notice that we switched the die onto the stack so that it was easy to get a reference to this. If you retain the pointer, you need to dereference it before you can do the comparison, eg. `*d >= 5`.
