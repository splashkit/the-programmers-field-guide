---
title: Array Declaration
sidebar:
    label: " - Declaration"
---

Arrays are like any other variable. They can contain any kind of data: primitives like integers, structs like `point_2d`, or any other type you have created. You can declare them anywhere you declare a variable: as local variables, global variables, parameters, and as fields in structs and unions. In each case, you picture the array as containing a fixed number of places in which you can store a value of the indicated type. The following image shows a `data` array that contains four integer values, and another `points` array that contains three `point_2d` values. The image also illustrates the idea of accepting arrays as parameters, using them in local variables, and as fields in your structs.

You should be able to picture arrays anywhere you have data within your program.

![Arrays can contain any data types, and be declared anywhere you declare data](./images/array-decl-idea.png)

## Arrays in C/C++

:::tip[Syntax]

C allows you to declare variables that are arrays. This is done using square brackets (`[...]`), inside which you can indicate the number of elements in the array (*n*). Indexes will then be *0* to *n-1*. For example, `int arr[10];` contains ten elements, accessed by indexes 0 to 9.

![C/C++ array declaration syntax](./images/array-decl.png)

:::

You can initialise an array when it is declared using a list of values in braces (`{...}`). This can only be done to initialise arrays in the variable declaration, and is not valid elsewhere.

The size of the array must be able to be determined at compile time. If you initialise the array, you can leave the number of elements out of the array declaration (in the square brackets) as the compiler can work out the size from the number of elements you provide.

:::caution

Arrays in C/C++ do **not** store anything to remember their length, you must keep track of this yourself. While we work with fixed size arrays, we can use constants to help us remember how many elements are in the array.

:::

## Example

The following example demonstrates the declaration of three arrays, `value`, `my_data`, and `other`, each with five elements as well as a `data` variable from a `number_data` struct. The elements for `data` and `other` are initialised when the arrays are created, while values for `my_data` are provided in the for loop.

The array in `data` can contain a hundred values, but we can use `num_values` to indicate we have only initialised the first three. Notice how we can then use `num_values` in the loop to ensure we do not print values we have not initialised.

```cpp
/* Program: test-array.c */
#include <stdio.h>

typedef struct
{
  int value[100];
  int num_values;
} number_data;

int main()
{
  int value[5] = {0, -1, 2, -3, 4};
  double my_data[5];
  float other[] = {1.2f, 2.5f, 0, -1, 6};
  int i;

  number_data data;

  data.num_values = 3;
  data.value[0] = 102;
  data.value[1] = 701;
  data.value[2] = 192;

  for (i = 0; i < 5; i++)
  {
    printf("Enter my data[%d]: ", i);
    scanf("%lf", &my_data[i]);

    printf("value[%d]: %d\n", i, value[i]);
    printf("other[%d]: %f\n", i, other[i]);
    printf("my_data[%d]: %lf\n", i, my_data[i]);

    if ( i < data.num_values )
    {
      printf("data.value[%d]: %d\n", i, data.value[i]);
    }
  }
  return 0;
}
```

If you compile and run this program you will get something like the following. See how this only prints the first values from the `data.value` array.

```
Enter my data[0]: 87
value[0]: 0
other[0]: 1.200000
my_data[0]: 87.000000
data.value[0]: 102
Enter my data[1]: 29
value[1]: -1
other[1]: 2.500000
my_data[1]: 29.000000
data.value[1]: 701
Enter my data[2]: 01
value[2]: 2
other[2]: 0.000000
my_data[2]: 1.000000
data.value[2]: 192
Enter my data[3]: -2
value[3]: -3
other[3]: -1.000000
my_data[3]: -2.000000
Enter my data[4]: 3
value[4]: 4
other[4]: 6.000000
my_data[4]: 3.000000
```