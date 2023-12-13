#ifndef DYNAMIC_ARRAY_HEADER
#define DYNAMIC_ARRAY_HEADER

#include <cstdlib>

/**
 * @brief Implement the dynamic array data structure.
 * 
 * @tparam T 
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
  result->data = (T*)malloc(sizeof(T) * capacity);
  result->size = 0;
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
 * @param array the dynamic array to free
 */
template<typename T>
void delete_dynamic_array(dynamic_array<T> *array)
{
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
 * @brief Get the current size of the dynamic array.
 * 
 * @tparam T the type of data in the dynamic array
 * @param array the dynamic array to get the size of
 * @return unsigned int the size of the dynamic array
 */
template<typename T>
unsigned int size(dynamic_array<T> *array)
{
  return array->size;
}

/**
 * @brief Get the current capacity of the dynamic array.
 * 
 * @tparam T the type of data in the dynamic array
 * @param array the dynamic array to get the capacity of
 * @return unsigned int the capacity of the dynamic array
 */
template<typename T>
unsigned int capacity(dynamic_array<T> *array)
{
  return array->capacity;
}

/**
 * @brief Resize the capacity of the dynamic array.
 * 
 * If the new capacity is smaller than the current size, the size will be updated to match the new capacity.
 * 
 * @tparam T the type of data in the dynamic array
 * @param array the dynamic array to grow
 * @param new_capacity the new capacity of the dynamic array
*/
template<typename T>
bool resize(dynamic_array<T> *array, unsigned int new_capacity)
{
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
  // Check if we need to resize the array, and if we failed to resize the array
  if (array->size >= array->capacity && !resize(array, array->capacity * 2))
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
T get(dynamic_array<T> *array, unsigned int index, T default_value)
{
  // Check if the index is out of bounds
  if (index >= array->size)
  {
    // The index is out of bounds, so return the default value
    return default_value;
  }

  return array->data[index];
}

/**
 * @brief set the value of the indicated element from the dynamic array.
 * 
 * If the index is out of bounds, the function will do nothing.
 * 
 * @tparam T the type of data in the dynamic array
 * @param array the dynamic array to remove the element from
 * @param index the index of the element to remove
 * @param value the value to set the element to
*/
template<typename T>
bool set(dynamic_array<T> *array, unsigned int index, T value)
{
  // Check if the index is out of bounds
  if (index >= array->size)
  {
    // The index is out of bounds, so do nothing
    return false;
  }

  array->data[index] = value;
  return true;
}

#endif