---
title: Dynamic Array - Add and Resize
sidebar:
    label: " - Add and Resize"
---

The add and resize functions will be central to this, and will have the main thinking around dynamic memory management. This will allow you to add new elements to a dynamic array, and to keep adding them even when you exceed the array's initial capacity.

## Resize

Add is going to need resize, so we are best to implement the resize code first. The following prompt should help Copilot get you something close to what we want.

```cpp
/**
 * @brief Resize the capacity of the dynamic array.
 * 
 * If the new capacity is smaller than the current size, the size
 * will be updated to match the new capacity.
 * 
 * @tparam T the type of data in the dynamic array
 * @param array the dynamic array to grow
 * @param new_capacity the new capacity of the dynamic array
 * @returns true if this succeeded, or false if it could not reallocate memory
*/
```

For me, it kept wanting to do silly things like use `malloc` instead of `realloc` and then manually be copying over the data one element at a time. This is slow, inefficient, and unnecessary. I ended up accepting the `malloc` suggestion, then I deleted the `malloc` code and the code to copy the array over and added a new comment at the right location to prompt it to use `realloc`. Similarly, I had to prompt it to update the capacity if the new capacity was smaller. The prompts are below.

```cpp
// Resize the data in the array

// Update the size if the new capacity is smaller than the current size
```

:::tip

The logic for resize should include the following:

- It is using `realloc` to allocate space on the heap based on the new capacity.
- You store the pointer returned from `realloc` in a local variable, and test that this is not null.
- If `realloc` returned null, you are out of memory, so you have to `return false`.
- Otherwise, set the new data and capacity
- Check to make sure that size is still less than or equal to capacity, and if not update the size to be equal to the new capacity
- Finally `return true` on success

:::

## Add

To put values in the array, the user (a programmer) will have to call the `add` method. This will insert the value at the end of the currently used part of the array, and increase the array's size. If there is no capacity to do this, the array will first have to try to resize the array, if that succeeds then it can add as normal.

Here is a starting prompt:

```cpp
/**
 * @brief Add an element to the end of the dynamic array
 * 
 * @tparam T the type of data in the dynamic array
 * @param value the value to add to the end of the dynamic array
 * @param array the dynamic array to add the value to
 * @returns true if this succeeded, false if we cannot resize to fit the new element
 */
```

For me this kept trying to put the resize code in add, rather than calling the resize itself. Here are some of the extra comments that I added.

```cpp
// Check if we need to resize the array, and if we failed to resize the array
// Add the value to the end of the array
```

:::tip

You want to make sure that add has the following:

- It checks if size is at capacity, and resize if it is.
- When we resize, you can resize so that the new capacity is double the current capacity.
- Remember to check if resize fails, which means you are out of memory!
- If the resize fails, we need to return false.
- You need to update the element at `array->size` index
- Then increment `array->size`
- Finally `return true` on success

:::

## Test in main

To test this in main I used the following comment as a prompt.

```cpp
// Add 15 values to the array
```

At this point, `main` is looking like this for me.

```cpp
int main()
{
  // Create a dynamic array of int
  // and initialise it to a new dynamic array of 10 elements
  dynamic_array<int> *array = new_dynamic_array<int>(10);

  // Add 15 values to the array
  for(int i = 0; i < 15; i++)
  {
    add(array, i);
  }

  // Free the array and ensure we do not have a dangling pointer
  delete_dynamic_array(array);
  array = nullptr;

  return 0;
}
```

Make sure your program builds and runs before you move on.

Try working with an initial capacity of `0`. I ended up changing my `add` method to double and `+ 1` so that it works when the capacity was originally 0. As 2 * 0 is still 0.
