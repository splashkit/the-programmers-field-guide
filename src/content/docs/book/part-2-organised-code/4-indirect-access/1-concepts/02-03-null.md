---
title: Pointing to Nothing
sidebar:
    label: " - Pointing to Nothing"
---

With pointers, we can set up relationships between things in our code. Sometimes you want may want to indicate that there is nothing for a particular relationship. This could be achieved by having a special address that means the pointer points to *"nothing"*.

Remember, with pointers you have two values. The value of the pointer which is the address of the value pointed to, and you can follow the pointer to read the value at that address. So, it is possible to have a special address value means there is no value to read. Though, the implication of this would be that the program would crash if you did try to read the value that was referred to.

The term **null** is often used to describe the value that points to nothing. Null indicates an invalid or non-binding value, or associated with the value 0.

## In C/C++

C/C++ have two values you can use to represent *nothing* for a pointer - `nullptr` or `NULL`. The `nullptr` is a newer addition to C++ that can be assigned to any pointer value. The older `NULL` constant is just an unsigned `0` value. This means that it can mistakenly be used where a number is expected, whereas the `nullptr` would not be valid in that case.

## Nothing - Why, When, and How

Pointers are used to refer to other locations in memory, allowing you to access other values. In some cases you have optional relationships, where there may not always be a value to refer to. When this occurs, you can use the `nullptr` value within your pointer variables.

When you do this, you need to make sure never to dereference the pointer if it has the `nullptr` value. Doing this would result in an error, so you need to add guards (if statements) to check that your pointer does not have the `nullptr` value.

## Example

The following code demonstrates the use of `nullptr` and a guard to check for valid pointers. The first if statement will set `ptr` to point to nothing, or to the `value` variable. Following this, we use a guard to make sure we do not dereference `ptr` when it refers to nothing.

```cpp
#include "splashkit.h"

int main()
{
  int *ptr = nullptr;
  int value = 999;

  // Sometimes refer to value
  if ( rnd(10) >= 5 )
  {
    ptr = &value;
  }

  write("ptr points to ");

  // Ensure ptr is valid
  if ( ptr != nullptr )
  {
    write_line(*ptr);
  }
  else
  {
    write_line("nothing");
  }
  
}
```

Try removing the guard. What happens when `ptr` does not refer to the `value` variable?
