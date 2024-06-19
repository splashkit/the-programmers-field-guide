---
title: Dynamic Array
---

The updated code for the dynamic array header file is provided below. This now embeds the functionality within the dynamic array, making it a much more cohesive package to work with.

## Dynamic Array Header

```cpp
#ifndef DYNAMIC_ARRAY_HEADER
#define DYNAMIC_ARRAY_HEADER

#include <cstdlib>
#include <new>

/**
 * @brief A dynamic array struct that contains the size, capacity,
 *        and data pointer used to implement this dynamic structure.
 *
 * @tparam T the type of data to store in the dynamic array
 * @field data a pointer to the data in the dynamic array on the heap
 * @field size the number of elements used in the dynamic array
 * @field capacity the number of elements the dynamic array can hold
 * @field default_value the default value to use when getting an element
 */
template <typename T>
struct dynamic_array
{
    T *data;
    unsigned int size;
    unsigned int capacity;
    T default_value;

    /**
     * @brief Create a new dynamic array with the indicated initial capacity.
     *
     * @param capacity its initial capacity
     */
    dynamic_array(unsigned int capacity, T default_value)
    {
        data = (T *)malloc(sizeof(T) * capacity);
        size = 0;
        this->default_value = default_value;

        // For each of the new elements... call constructor
        for (int i = 0; i < capacity; i++)
        {
            // Call constructor to initialise each of the 10 elements
            new(&this->data[i]) T();
        }


        // Make sure that data was allocated, if not set capacity to 0
        if (data == nullptr)
        {
            this->capacity = 0;
        }
        else
        {
            this->capacity = capacity;
        }
    }

    /**
     * @brief Free the memory allocated to the dynamic array. Once freed
     *        the data in the array will no longer be accessible.
     */
    ~dynamic_array()
    {
        // Clear to ensure we remove any data from memory before freeing it
        size = 0;
        
        // Call destructors on all elements
        for (int i = 0; i < capacity; i++)
        {
            data[i].~T();
        }

        capacity = 0;

        // Free the data and the array itself
        free(data);
        // Ensure we don't have a dangling pointer
        data = nullptr;
    }

    /**
     * @brief Resize the capacity of the dynamic array.
     *
     * If the new capacity is smaller than the current size, the size will be updated to match the new capacity.
     *
     * @param new_capacity the new capacity of the dynamic array
     * @returns true if this succeeded, or false if it could not reallocate memory
     */
    bool resize(unsigned int new_capacity)
    {
        // Call destructors if we are reducing size
        for(int i = capacity - 1; i >= (int)new_capacity; i--)
        {
            data[i].~T();
        }

        // Resize the data in the array
        T *new_data = (T *)realloc(data, sizeof(T) * new_capacity);
        // Check if the allocation failed
        if (new_data == nullptr)
        {
            // We failed to allocate memory, so we can't resize the array
            return false;
        }

        // Call constructors if we increased size
        for(int i = capacity; i < new_capacity; i++)
        {
            new(&new_data[i]) T();
        }

        // Update the array's data and capacity
        data = new_data;
        capacity = new_capacity;

        // Update the size if the new capacity is smaller than the current size
        if (new_capacity < size)
        {
            size = new_capacity;
        }

        return true;
    }

    /**
     * @brief Add an element to the end of the dynamic array
     *
     * @param value the value to add to the end of the dynamic array
     */
    bool add(T value)
    {
        // Check if we need to resize the array, and if we failed to resize the array
        // We double the capacity and add 1 to address issues where capacity is 0 initially
        if (size >= capacity && !resize(capacity * 2 + 1))
        {
            // We didn't have space, and we failed to resize the array!
            return false;
        }

        // Add the value to the end of the array
        data[size] = value;
        size++;

        return true;
    }

    /**
     * @brief read and return the value of the indicated element from the dynamic array.
     *
     * If the index is out of bounds, the function will return the indicated default value.
     *
     * @param index the index of the element to remove
     * @param default_value the value to return if the index is out of bounds
     */
    T &get(unsigned int index)
    {
        return (*this)[index];
    }

    /**
     * Provide array style access to the dynamic array.
     * 
     * @param index the index of the element to get
     * @return const T& the element at the given index
     */
    const T &operator[](unsigned int index) const
    {
        // Check if the index is out of bounds
        if (index >= size)
        {
            // The index is out of bounds, so return the default value
            return default_value;
        }

        return data[index];
    }

    /**
     * Provide array style access to the dynamic array.
     * 
     * @param index the index of the element to get
     * @return T& the element at the given index
     */
    T &operator[](unsigned int index)
    {
        // Check if the index is out of bounds
        if (index >= size)
        {
            // The index is out of bounds, so return the default value
            return default_value;
        }

        return data[index];
    }

    /**
     * @brief set the value of the indicated element from the dynamic array.
     *
     * If the index is out of bounds, the function will do nothing and return false.
     *
     * @param index the index of the element to change
     * @param value the value to set the element to
     * @returns true when the value is set, or false if this failed
     */
    bool set(unsigned int index, T value)
    {
        // Check if the index is out of bounds
        if (index >= size)
        {
            // The index is out of bounds, so do nothing
            return false;
        }

        data[index] = value;
        return true;
    }
};

#endif
```

## A test program

The test program below is assuming the header file above was named *dynamic-array.hpp*:

```cpp
#include <cstdio>
#include "dynamic-array.hpp"
 
int main()
{
    // Create a dynamic array of int
    // and initialise it to a new dynamic array of 10 elements
    dynamic_array<int> *array = new dynamic_array<int>(10, -1);
 
    // Print the size and capacity of the array
    printf("size: %d, capacity: %d\n", array->size, array->capacity);
 
    // Add 15 values to the array
    for (int i = 0; i < 15; i++)
    {
        array->add(i);
    }
 
    // Reprint the size and capacity of the array after adding
    printf("size: %d, capacity: %d\n", array->size, array->capacity);
 
    // Print and update the values in the array, using the get and set functions
    for (int i = 0; i < array->size; i++)
    {
        printf("array[%d] =  %d\n", i, array->get(i));
        array->set(i, i * 2);
    }
 
    // Attempt to access an element out of bounds using get
    printf("array[99] = %d\n", array->get(99));
 
    // Attempt to access an element out of bounds using set
    if (array->set(99, 99))
    {
        printf("array[99] = %d\n", array->get(99));
    }
    else
    {
        printf("Failed to set array[99]\n");
    }
 
    printf("Before resize - size: %d, capacity: %d\n", array->size, array->capacity);
    // Change the size of the array
    array->resize(5);
 
    printf("After resize - size: %d, capacity: %d\n", array->size, array->capacity);
 
    for (int i = 0; i < 20; i++)
    {
        printf("array[%d] =  %d\n", i, array->get(i));
    }
 
    // Free the array and ensure we do not have a dangling pointer
    array->~dynamic_array();
    array = nullptr;

    return 0;
}
```
