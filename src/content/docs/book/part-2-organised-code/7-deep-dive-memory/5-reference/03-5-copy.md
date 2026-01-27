---
title: Copying memory
---

There may be times when you want to copy a chunk of memory from one location to another. The C/C++ standard libraries provide us an efficient function that can be used for this:

```
Function: memcpy
Prototype: void *memcpy(void *destination, const void *source, size_t num )
Returns: (void *) the destination is returned, can be ignored.
Parameters:
  - destination: The location where the data is copied to.
  - source: The data to copy.
  - num The number of bytes to copy.
```

The destination and source are void pointers (`void *`) which is C's way of saying "a pointer to anything". You pass in the pointer to where to store the data (the left-hand side of an assignment normally), the source (the right-hand side), and the number of bytes to copy.

To help determine the size of the data to copy, you can use the `sizeof` operator. You can read more on this in the [C++ reference site](https://en.cppreference.com/w/cpp/language/sizeof).

```
Operator: sizeof
Returns: (size_t) the number of bytes for a type
Parameter: a type or expression
```

The following code demonstrates the use of `memcpy` and `sizeof` to copy one array into another.

```cpp
/* program: array-copy.c */

#include <string.h>

int main()
{
  int data[3] = {1, 2, 3};
  int other_data[3];
  int more_data[3];
  
  memcpy(other_data, data, 3 * sizeof(int));
  memcpy(more_data, data, sizeof(data));
  
  return 0;
}
```
