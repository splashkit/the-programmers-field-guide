---
title: Ragged (aka Jagged) Arrays
sidebar:
  label: " - Ragged Arrays"
---

In the last section we looked at allocating multidimensional arrays as contiguous blocks of memory (where the contents of the array are all in one block). This can be a convenient way of organising the data, but it may not be the most efficient if you want different sized dimensions throughout the array.

If we consider the 2-dimensional array example we have seen this as a rectangular area, with the same number of rows in each column. This is something we can change now we have dynamic memory allocation. Instead of having the same number of rows in each column, each column can have its own number of elements. This structure is called a **ragged array**, as we do not have a neat rectangle visualisation, the different sized columns make the ends ragged (or jagged).

![A ragged array](./images/ragged.png)

:::note

While we picture this with 2-dimensional arrays, the same applies to any number of dimensions. Where the dimension is ragged, you would have a pointer and allocate it space independent of the other arrays in that dimension.

:::

## Ragged Array - Why, When, How

You can use ragged arrays when you want to work with each dimension individually. The values will not be in memory in a contiguous block, but you will be able to use the indexes to access values as before.

To implement this you need to create an array of pointers, then each pointer can be allocated its own space with its own size. As C/C++ does not keep any data for you on the size of these arrays/allocations, you are best to use structs, where each struct has a pointer to the data, and knows the number of elements that are stored there. We will look at how to build this in the put together section on [dynamic arrays](../../2-put-together/02-0-dynamic-array). You can make a multidimensional array with these by having a dynamic array that contains a dynamic array (and so on until you get to your actual data values).

## In C/C++

In C/C++ you can create a ragged array using an array of pointers. The following code creates an array of 3 pointers, and initialises these to have 4, 2, and 3 elements on the heap. Notice how the use the array accessing syntax in C/C++ lets you treat these pointers as if they are arrays.

```cpp
#include <stdio.h>
#include <stdlib.h>

int main()
{
  int sizes[3] = { 4, 2, 3 };
  
  // an array of 3 integer pointers
  int *data[3];

  for(int i = 0; i < 3; i++)
  {
    // Use size from sizes array (4, 2, 3)
    data[i] = (int*) malloc(sizeof(int) * sizes[i]);

    for(int j = 0; j < sizes[i]; j++)
    {
      // initialise with some data
      data[i][j] = i * 10 + j;
    }
  }

  for(int i = 0; i < 3; i++)
  {
    for(int j = 0; j < sizes[i]; j++)
    {
      printf("%d,", data[i][j]);
    }

    printf("\n");
  }

  for(int i = 0; i < 3; i++)
  {
    free(data[i]);
    data[i] = NULL;
  }

  return 0;
}
```

Running the above program will output:

```text
0,1,2,3,
10,11,
20,21,22,
```

In this example we are using the idea of **parallel arrays**. This refers to the case where you have two arrays where the index in both arrays relate to the one entity. Here we use this with the `sizes` array and the `data` array to keep track of the size of each dimension.

:::tip

The neater alternative is probably to have a struct that maintains the size and the pointer, but we will leave that for the coming put together section on [dynamic arrays](../../2-put-together/02-0-dynamic-array).
:::
