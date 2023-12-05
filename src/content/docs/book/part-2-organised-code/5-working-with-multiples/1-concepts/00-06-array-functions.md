---
title: Returning Arrays
sidebar:
  label: " - Returning Arrays"
---

Returning arrays from functions seems like something you may want to do, but is a challenging problem. As we saw, [copying arrays](../00-04-clone-array) requires you to copy each element to the destination array. This means that it is not possible to directly copy the array into a destination using an assignment statement.

Instead of returning an array, the general way to approach this is to pass the array by reference (or as a pointer) and have the function or procedure populate the array. This way the caller is responsible for allocating the space for the array, and the parameter can then refer to this space and update it with the values it can provide.

While you cannot return the array directly, you can return a structure data value that contains an array. So if you wrap your array in a struct, then you can return that struct from a function that initialises the data. This would take more space and time, as the function's result has to exist and then be copied over the destination variable.

## Example

The following code illustrates how to populate an array by passing it to a procedure by reference (as a pointer) and how we can use a struct to return data.

```cpp
#include <stdio.h>

const int MAX_NUMBER_DATA_VALUES = 100;

typedef struct
{
  double value[MAX_NUMBER_DATA_VALUES];
  int num_values;
} number_data;


void populate(double data[], int size)
{
  printf("Enter %d values (enter between each)\n", size);

  for(int i = 0; i < size; i++)
  {
    scanf("%lf", &data[i]);
  }
}

number_data get_numbers(int count)
{
  number_data result;
  // Ensure count is <= MAX_NUMBER_DATA_VALUES
  if (count > MAX_NUMBER_DATA_VALUES)
  {
    count = MAX_NUMBER_DATA_VALUES;
  }
  
  result.num_values = count;
  populate(result.value, count);
  
  return result;
}

int main()
{
  const int VALUE_SIZE = 3;
  double values[VALUE_SIZE];

  populate(values, VALUE_SIZE);

  number_data db;
  db = get_numbers(10);
}
```
