---
title: Dynamic Array - Data
sidebar:
    label: " - Data"
---

Before we can write any functionality we need to get the data structure in place. We have the plan, so we can capture this in a comment. The following is the comment I added as a prompt to get copilot to help me out.

```cpp
/**
 * @brief A dynamic array struct that contains the size, capacity,
 *        and data pointer used to implement this dynamic structure.
 * 
 * @tparam T the type (typename) of data to store in the dynamic array
 * @field data a pointer to the data in the dynamic array on the heap
 * @field size the number of elements used in the dynamic array
 * @field capacity the number of elements the dynamic array can hold
 */
```

The `@tparam` indicates that you will have a type parameter named `T`. Headerdoc doesn't actually contain tags for fields, but we can still use these to indicate the elements that we need in the struct.

Once you add this in, wait for the suggestion and check to make sure that it looks right.

:::tip

You want to make sure you have:

- A template that declares `T` as a `typename`. See [generics](../../1-concepts/07-generics).
- A `struct` called `dynamic_array`.
- The required three fields

:::

We can add a `main` at the bottom of the code, and put in a comment that you want to create a dynamic array of int. Copilot should then declare this for you.

```cpp
int main()
{
  // Create a dynamic array of int
  dynamic_array<int> *array;

  return 0;
}
```

Make sure this compiles before you move on.

## Creating a new dynamic array

Next we need to have some code that will create new dynamic arrays for us. This can allocate space on the heap, and make sure that the fields are all setup correctly.

Try something like this as the prompt for this function.

```cpp
/**
 * @brief Create a new dynamic array with the indicated initial capacity.
 *        This will return a nullptr if the array cannot be allocated.
 * 
 * @tparam T the type of data the array will store
 * @param capacity its initial capacity, with a default value of 50
 * @return dynamic_array<T>* a pointer to the new dynamic array
 */
```

Copilot will probably generate something close to what you need, but it will probably need some help. For me, it didn't think about the case that the `malloc` failed to allocate memory. So I added a comment `// Make sure that data was allocated, if not set capacity to 0` to ensure it had an if statement when assigning the capacity.

:::tip

In this case you will want to check the following:

- Is it using malloc to create the dynamic array in memory itself. (I put this in a `result` local variable)
- It checks if `result` was allocated, if not it returns the `nullptr`. This will only happen if we are out of memory, but these guards will ensure our code is robust.
- Space is allocated to `result->data` based on the `sizeof(T)` and the `capacity`.
- There are checks that this space was allocated, remember it can fail.
- The `size` is set to 0
- Capacity is set to 0 if you cannot allocate memory to `result->data`, otherwise it is set to the passed in capacity.

:::

Before updating `main`, we should add a `delete_dynamic_array` procedure. We have the memory allocations in mind, so now we can add the code to remove this allocation.

Try the following prompt:

```cpp
/**
 * @brief Free the memory allocated to the dynamic array. Once freed
 *        the data in the array will no longer be accessible.
 * 
 * @tparam T the data type of the dynamic array
 * @param array a pointer to the dynamic array to free
 */
```

Copilot was a bit lazy for me here. I had to add in a few extra prompts to get what I wanted. The main one was getting it to set `size` and `capacity` to 0. While this is not essential, it makes sure that any dangling pointers won't accidentally see the old data as we just left it there when the array was deleted.

```cpp
// Clear to ensure we remove any data from memory before freeing it
```

:::tip

Check to make sure that it has:

- Set `array->size` and `array->capacity` to 0
- Freed `array->data`
- Set `array->data` to point to `nullptr`
- Freed `array`

:::

Once this is in place, you can now update main to initialise and free the dynamic array. The following code includes the updated prompts which can help Copilot build this for you.

```cpp
int main()
{
  // Create a dynamic array of int
  // and initialise it to a new dynamic array of 10 elements
  dynamic_array<int> *array = new_dynamic_array<int>(10);

  // Free the array and ensure we do not have a dangling pointer
  
  return 0;
}
```

When you update the comment about initialising the array, you can remove the `;` from the related line and code and wait a second. It should then give you suggestions on how to make that change. If not, you can call the `new_dynamic_array<int>` function yourself.

Compile and run the program. While there is no output, at least you will know that it was able to create and free the space on the heap.

Once this is working you can move on to adding the resizing the data in the array.
