---
title: Dynamic Array - Get and Set Elements
sidebar:
    label: " - Get and Set Elements"
---

We can put data into the array, so the next step will be getting data out of the array.

## Get

We are getting close to a functional dynamic array. The data is all in the array, but we can't access it. The `get` function will let us read the data from the array.

Here is the prompt that I used to get this function started.

```cpp
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
```

We need a default value, as this is a template function, so we do not know what a valid default value looks like.

The code inside `get` should be quite small, and for me Copilot did ok with this. I added in comments to `// Check if the index is out of bounds` and when it is, I noted `// The index is out of bounds, so return the default value`.

:::tip

Notice how you have to know what you are doing. Here you want to make sure that:

- The dynamic array is passed as a `const` pointer, as we do not change the array.
- It checks for out of bounds. If you are using an `unsigned int` then you only need to guard against `index >= array->size`.
- When index is not value, make sure it returns the default value from the parameter
- Otherwise, it can result the element from `array->data[index]`.

:::

We can extend main to now print out the values from the valid indexes, but we should also test printing out invalid indexes. Try coming up with prompts to get Copilot to help you with this. You want to make sure that you can see the data from within the array now, and that accessing invalid data does not crash but does output the indicated default value.

## Set

The last function for this part is `set`. This is used to update a value in the array. You can use the following to help prompt Copilot.

```cpp
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
```

When checking this, think about possible issues. The main things will be the array index, but also the possibility that `array` may be a `nullptr`.

Once you have this implemented, update main so that you change the values in the array and then re-print them. When you have this working, you have a usable dynamic array. In the test we have got it working with an array of `int`, but it will also work with an array of any other type name.
