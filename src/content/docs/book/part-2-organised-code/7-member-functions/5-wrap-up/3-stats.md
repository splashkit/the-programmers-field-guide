---
title: Stats Calculator
---

The updated code that makes use of the dynamic array with member functions, and array access modifiers is provided below. Notice how the code is much easier to follow. The dynamic array now knows its size, and can add, get, and set elements.

```cpp
/* stats-calc.cpp */

#include <stdio.h>
#include "dynamic-array.hpp"

/**
 * Read an integer from the user
 *
 * @param prompt the message to show the user
 * @returns the integer entered
 */
int read_integer(const char *prompt)
{
  int result = 0;

  printf("%s", prompt);
  while (scanf(" %d", &result) != 1) // Read value, and try to convert to int
  {
    // Convert failed, as input was not a number
    scanf("%*[^\n]"); // Read past the end of the current line
    printf("Please enter a whole number.\n");
    printf("%s", prompt);
  }

  return result;
}

/**
 * Read a double value from the user
 *
 * @param prompt the message to show the user
 * @returns the double entered
 */
double read_double(const char *prompt)
{
  double result = 0;

  printf("%s", prompt);
  while (scanf(" %lf", &result) != 1) // Read value, and try to convert to int
  {
    // Convert failed, as input was not a number
    scanf("%*[^\n]"); // Read past the end of the current line
    printf("Please enter a whole number.\n");
    printf("%s", prompt);
  }

  return result;
}

/**
 * Populate the array with values entered by the user
 *
 * @param data the array of values
 */
void populate_array(dynamic_array<double> &data)
{
  int size = read_integer("How many values do you want to enter? ");

  for (int i = 0; i < size; i++)
  {
    data.add(read_double("Enter value: "));
  }
}

/**
 * Output the values in the array
 *
 * @param data the array of values
 */
void print(const dynamic_array<double> &data)
{
  for (int i = 0; i < data.size; i++)
  {
    printf("%d: %lf\n", i, data[i]);
  }
}

/**
 * Calculate the sum of the values in the array
 *
 * @param data the array of values
 * @return the sum of the values
 */
double sum(const dynamic_array<double> &data)
{
  int i;
  double result = 0;

  for (i = 0; i < data.size; i++)
  {
    result += data[i];
  }

  return result;
}

/**
 * Calculate the mean of the values in the array
 *
 * @param data the array of values
 * @returns the mean of the values
 */
double mean(const dynamic_array<double> &data)
{
  if (data.size > 0)
    return sum(data) / data.size;
  else
    return 0;
}

/**
 * Calculate the largest value in the array
 *
 * @param data the array of values
 * @returns the largest value, or 0 if there are no values
 */
double max(const dynamic_array<double> &data)
{
  // Ensure there is data
  if (data.size == 0)
    return 0;

  // Assume the first value is the largest
  double result = data[0];

  // Check the rest of the values
  for (int i = 1; i < data.size; i++)
  {
    if (data[i] > result)
    {
      result = data[i];
    }
  }

  return result;
}

/**
 * Add a value to the array
 *
 * @param data the array of values
 */
void add_data(dynamic_array<double> &data)
{
  double value = read_double("Enter a value to add: ");

  if (!data.add(value))
  {
    printf("Sorry, out of memory\n");
  }
}

/**
 * Remove a value from the array
 *
 * @param data the array of values
 */
void remove_value(dynamic_array<double> &data)
{
  print(data);

  int index = read_integer("Enter the index of the value to remove: ");

  if (index >= 0 && index < data.size)
  {
    for (int i = index; i < data.size - 1; i++)
    {
      data[i] = data[i + 1];
    }
    
    data.resize(data.size - 1);
  }
  else
  {
    printf("Sorry, that is not a valid index.\n");
  }
}

// Implements a statistics calculator. The program reads in values entered by the user
// and then calculates the sum, mean, variance, and max
int main()
{
  dynamic_array<double> data(10, 0.0);

  populate_array(data);

  printf("\nCalculating statistics...\n\n");

  printf("Sum:        %4.2f\n", sum(data));
  printf("Mean:       %4.2f\n", mean(data));
  printf("Max:        %4.2f\n", max(data));

  add_data(data);

  print(data);

  remove_value(data);

  print(data);

  return 0;
}
```