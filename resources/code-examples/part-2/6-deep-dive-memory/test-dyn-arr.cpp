#include <cstdio>
#include "dynamic-array.hpp"

int main()
{
  // Create a dynamic array of int
  // and initialise it to a new dynamic array of 10 elements
  dynamic_array<int> *array = new_dynamic_array<int>(10);

  // Print the size and capacity of the array
  printf("size: %d, capacity: %d\n", size(array), capacity(array));

  // Add 15 values to the array
  for(int i = 0; i < 15; i++)
  {
    add(array, i);
  }

  // Reprint the size and capacity of the array after adding
  printf("size: %d, capacity: %d\n", size(array), capacity(array));

  // Print and update the values in the array, using the get and set functions
  for(int i = 0; i < size(array); i++)
  {
    printf("array[%d] =  %d\n", i, get(array, i, -1));
    set(array, i, i * 2);
  }

  // Attempt to access an element out of bounds using get
  printf("array[99] = %d\n", get(array, 99, -1));

  // Attempt to access an element out of bounds using set
  if (set(array, 99, 99))
  {
    printf("array[99] = %d\n", get(array, 99, -1));
  }
  else
  {
    printf("Failed to set array[99]\n");
  }

  printf("Before resize - size: %d, capacity: %d\n", size(array), capacity(array));
  // Change the size of the array
  resize(array, 5);

  printf("After resize - size: %d, capacity: %d\n", size(array), capacity(array));

  for(int i = 0; i < 20; i++)
  {
    printf("array[%d] =  %d\n", i, get(array, i, -1));
  }

  // Free the array and ensure we do not have a dangling pointer
  delete_dynamic_array(array);
  array = nullptr;

  return 0;
}
