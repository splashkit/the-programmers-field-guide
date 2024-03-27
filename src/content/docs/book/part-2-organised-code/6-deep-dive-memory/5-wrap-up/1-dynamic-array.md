---
title: Dynamic Array
---

Here is the code that I worked on with the help of Copilot.

## Dynamic Array Header

This header file contains the struct and template functions that allow us to work with the dynamic array. I saved this in a file named *dynamic-array.hpp*.

```cpp
#ifndef DYNAMIC_ARRAY_HEADER
#define DYNAMIC_ARRAY_HEADER

#include <cstdlib>

/**
 * @brief A dynamic array struct that contains the size, capacity,
 *        and data pointer used to implement this dynamic structure.
 * 
 * @tparam T the type of data to store in the dynamic array
 * @field data a pointer to the data in the dynamic array on the heap
 * @field size the number of elements used in the dynamic array
 * @field capacity the number of elements the dynamic array can hold
 */
template<typename T>
struct dynamic_array
{
  T *data;
  unsigned int size;
  unsigned int capacity;
};

/**
 * @brief Create a new dynamic array with the indicated initial capacity.
 * 
 * @tparam T the type of data the array will store
 * @param capacity its initial capacity, with a default value of 50
 * @return dynamic_array<T>* a pointer to the new dynamic array
 */
template<typename T>
dynamic_array<T> *new_dynamic_array(unsigned int capacity = 50)
{
  dynamic_array<T> *result = (dynamic_array<T>*)malloc(sizeof(dynamic_array<T>));
  // Make sure result was allocated
  if (result == nullptr)
  {
    return result;
  }
  result->data = (T*)malloc(sizeof(T) * capacity);
  result->size = 0;
  // Make sure that data was allocated, if not set capacity to 0
  if(result->data == nullptr)
  {
    result->capacity = 0;
  }
  else
  {
    result->capacity = capacity;
  }
  return result;
}

/**
 * @brief Free the memory allocated to the dynamic array. Once freed
 *        the data in the array will no longer be accessible.
 * 
 * @tparam T the data type of the dynamic array
 * @param array a pointer to the dynamic array to free
 */
template<typename T>
void delete_dynamic_array(dynamic_array<T> *array)
{
  // Ensure that the array is allocated
  if (!array) return;

  // Clear to ensure we remove any data from memory before freeing it
  array->size = 0;
  array->capacity = 0;
  
  // Free the data and the array itself
  free(array->data);
  // Ensure we don't have a dangling pointer
  array->data = nullptr;

  // Free the dynamic array itself
  free(array);
}

/**
 * @brief Resize the capacity of the dynamic array.
 * 
 * If the new capacity is smaller than the current size, the size will be updated to match the new capacity.
 * 
 * @tparam T the type of data in the dynamic array
 * @param array the dynamic array to grow
 * @param new_capacity the new capacity of the dynamic array
 * @returns true if this succeeded, or false if it could not reallocate memory
*/
template<typename T>
bool resize(dynamic_array<T> *array, unsigned int new_capacity)
{
  // Ensure that the array is allocated
  if (!array) return false;

  // Resize the data in the array
  T* new_data = (T*)realloc(array->data, sizeof(T) * new_capacity);
  // Check if the allocation failed
  if (new_data == nullptr)
  {
    // We failed to allocate memory, so we can't resize the array
    return false;
  }

  // Update the array's data and capacity
  array->data = new_data;
  array->capacity = new_capacity;

  // Update the size if the new capacity is smaller than the current size
  if (new_capacity < array->size)
  {
    array->size = new_capacity;
  }

  return true;
}

/**
 * @brief Add an element to the end of the dynamic array
 * 
 * @tparam T the type of data in the dynamic array
 * @param value the value to add to the end of the dynamic array
 * @param array the dynamic array to add the value to
 */
template<typename T>
bool add(dynamic_array<T> *array, T value)
{
  // Ensure that the array is allocated
  if (!array) return false;

  // Check if we need to resize the array, and if we failed to resize the array
  // We double the capacity and add 1 to address issues where capacity is 0 initially
  if (array->size >= array->capacity && !resize(array, array->capacity * 2 + 1))
  {
    // We didn't have space, and we failed to resize the array!
    return false;
  }

  // Add the value to the end of the array
  array->data[array->size] = value;
  array->size++;

  return true;
}

/**
 * @brief read and return the value of the indicated element from the dynamic array.
 * 
 * If the index is out of bounds, the function will return the indicated default value.
 * 
 * @tparam T the type of data in the dynamic array
 * @param array the dynamic array to remove the element from
 * @param index the index of the element to remove
 * @param default_value the value to return if the index is out of bounds
*/
template<typename T>
T get(const dynamic_array<T> *array, unsigned int index, T default_value)
{
  // Check if the index is out of bounds
  if (!array || index >= array->size)
  {
    // The index is out of bounds, so return the default value
    return default_value;
  }

  return array->data[index];
}

/**
 * @brief set the value of the indicated element from the dynamic array.
 * 
 * If the index is out of bounds, the function will do nothing and return false.
 * 
 * @tparam T the type of data in the dynamic array
 * @param array the dynamic array to set the element in
 * @param index the index of the element to change
 * @param value the value to set the element to
 * @returns true when the value is set, or false if this failed
*/
template<typename T>
bool set(dynamic_array<T> *array, unsigned int index, T value)
{
  // Check if the index is out of bounds
  if (!array || index >= array->size)
  {
    // The index is out of bounds, so do nothing
    return false;
  }

  array->data[index] = value;
  return true;
}

#endif
```

## A test program

My test program was as follows:

```cpp
#include <cstdio>
#include "dynamic-array.hpp"

int main()
{
  // Create a dynamic array of int
  // and initialise it to a new dynamic array of 10 elements
  dynamic_array<int> *array = new_dynamic_array<int>(10);

  // Print the size and capacity of the array
  printf("size: %d, capacity: %d\n", array->size, array->capacity);

  // Add 15 values to the array
  for(int i = 0; i < 15; i++)
  {
    add(array, i);
  }

  // Reprint the size and capacity of the array after adding
  printf("size: %d, capacity: %d\n", array->size, array->capacity);

  // Print and update the values in the array, using the get and set functions
  for(int i = 0; i < array->size; i++)
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

  printf("Before resize - size: %d, capacity: %d\n", array->size, array->capacity);
  // Change the size of the array
  resize(array, 5);

  printf("After resize - size: %d, capacity: %d\n", array->size, array->capacity);

  for(int i = 0; i < 20; i++)
  {
    printf("array[%d] =  %d\n", i, get(array, i, -1));
  }

  // Free the array and ensure we do not have a dangling pointer
  delete_dynamic_array(array);
  array = nullptr;

  return 0;
}

#endif
```
