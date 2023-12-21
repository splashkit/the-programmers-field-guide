---
title: Dynamic Array (v2)
---

In [Chapter 2.6](../../../6-deep-dive-memory/2-put-together/02-0-dynamic-array) we built out a dynamic array that captured the code needed to dynamically allocate memory. The main issue was that our dynamic array did not look like an array. We had to use functions and procedures to access it.

Now that we have member functions, we can refactor this code so that everything for the dynamic array is nicely packaged with the struct. Other programmers can then easily see the features of the dynamic array as they use it. What is more, we can override the array access modifiers so that our dynamic array *looks like* a normal array. Once we have this in place, the dynamic array can easily be added to our existing projects where we previously had fixed length arrays.

## Design Overview

A means of visually capturing the design for our updated `dynamic_array` struct can help make it easy to communicating how the code is to work. The following is a basic **UML class diagram**, which we can use to capture the details of our struct.

![Overview of the dynamic array struct](./images/../../1-concepts/images/dynamic-array-design.png)

The diagram shows the details of our struct in a rectangle that is divided into three sections. At the top we have the details of the type, its name and annotations to indicate things like the fact this is a struct. The middle section indicates the things objects of this type will know - the fields of the struct. The bottom third lists the constructors, destructor, and methods that capture what the objects can do.

In this case we have:

1. At the top:
    - An annotation indicating this is a struct: `<<struct>>`
    - The name of the type: Dynamic Array - which we will code as `dynamic_array`
2. In the middle, fields for:
    - Size, which is an unsigned int - coded as `unsigned int size;`
    - Capacity, an unsigned int - coded as `unsigned int size;`
    - Data, of the template type T - coded as `T *data;`
    - Default Value, that is of type T - coded as `T default_value;`
3. At the bottom, methods for:
    - Constructor, with parameters for initial capacity and default value.
    - A destructor
    - Resize - which accepts a new capacity and will resize the data array.
    - Add - which adds an element to the data in the dynamic array.
    - Get - retrieves an element from the array.
    - Set - changes a value in the array at a given index.
    - Operator[] returning both a T reference (`T&`) and a constant T reference (`const T&`).

The great thing is that we already have all the logic for this in the functions and procedures we build in the [previous chapter](../../../6-deep-dive-memory/2-put-together/02-0-dynamic-array). So our task is mostly about moving things around.

## Moving to Methods

We have functions and procedure, but we want methods. How do we achieve this change?

1. Move the function/procedure into the struct's definition. This will particularly apply to the constructor and destructor.
2. Rename the method as needed.
3. Remove the struct parameter - we are now in the struct so we no longer need this parameter.
    ```cpp
    bool resize(dynamic_array<T> *array, unsigned int new_capacity)
    // becomes
    bool resize(unsigned int new_capacity)
    ```
4. Change code that was reading or writing a value to a field. These no longer need to access the fields via the struct parameter (which we have already removed), and can access them via the `this` pointer, or by using the field name directly.
    ```cpp
    array->data = new_data;
    array->capacity = new_capacity;
    // becomes
    this->data = new_data;
    this->capacity = new_capacity;
    // or even just
    data = new_data;
    capacity = new_capacity;
    ```
5. We also had some additional checks that the parameter referred to a valid pointer (e.g. `if (!array) return false;`). It is possible that a call will occur on a `nullptr`, so we could check that `this` is valid, or we could remove these checks with a resulting error if the user does call it on an invalid pointer.
    ```cpp
    if (!array) return false;
    // becomes
    if (!this) return false;
    // or we can remove these for now
    ```
6. Tidy up the constructor and destructor. Remove the code that allocated and freed the space for the struct itself, as this will now be handled by the `new` or `delete` call that triggers the constructor / destructor.
7. Make sure everything is indented correctly, has meaningful identifiers, and compilers.

You will also need to adjust the test program. This should require only a few changes:

1. Change the constructor to call `new dynamic_array<int>(...)`. We named this in a similar way before, so it is just a case of removing the `_` between `new` and `dynamic_array`.
2. Function and procedure calls need to move to method calls. This is just about reordering things a little. For example:
    ```cpp
    add(array, i);
    // becomes
    array->add(i);
    ```
3. Delete the object at the end:
    ```cpp
    delete_dynamic_array(array);
    // becomes
    delete array;
    ```

That should be all that is required. No real change of logic, just a move to see the dynamic array as an entity in its own right. One that knows and can do things.

## Adding Operators

Operators are one new feature we can now add into this design. We can make our dynamic array really look and feel like an array by allowing others to use the standard array access operator `[]`.

If you look at the design above, you will see we plan to add two versions of this operator. One that returns a reference and another that returns a const reference. This relates to the two ways in which the access operator may be used.

When the array access operator is used to *read* a value (i.e. when it is used in an expression like `int d = array[0];`) the compiler will use the version with a `const T&` result. If you want to update the value, such as in an assignment statement or using an increment operator (e.g. `array[0] = 5;` or `array[1]++;`), then the `T&` version is returned so that the code updates the value within the array (via the reference we return).

Implementing only one of these operators will result in the other usage scenario not being supported. So in order to support both, we need to provide the two implementations.

We already have a `get` method with the code that we will need to access an individual element. The problem with `get` at the moment is that it requires the index and a default to return if the index is invalid.

If you look at the above design, the plan now is to move the default value into the struct itself. By doing this, get does not need to be told what value to return when the index is invalid, it can get it from the field in these cases. To make this change, add the `default_value` field and initialise it in the constructor to a value provided by the caller.

Now you can go ahead and create the operators. Copilot should be able to help you with this, though for me, it didn't add any array bounds checks, so I had to do that myself. The code for one version is shown below, you will need to duplicate this for the other version as you cannot get these operators to call each other.

```cpp
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
```

:::tip

We are now starting to encounter some less elegant parts of the C++ language. In this case we need to use pointers to allocate things on the heap, but we then have to use ugly syntax to access nice features like the array access operator.

:::

Now let's extend the test program again. The problem at the moment is the `array` in main is a pointer. We cannot use the array access operator directly with the pointer, as the compiler will then treat this as if it were an array of dynamic arrays... Not what we want.

There are a few ways to get around this:

1. Change to an object on the stack and pass things around by reference.
2. Dereference the pointer to use the array access. So `array->get(i)` would become `(*array)[i]`. The `(*array)` gets you to the dynamic array object, so the `[i]` will now call our operator code.
3. Give up and just use `array->get(i)`, it isn't that bad.

Ideally we could work with these language features together, but this is a limitation of C/C++. When we switch to C#, which is a newer language, it does not have pointers but uses references to make this all work a little more smoothly.

For now, I suggest you add a separate test to the end of the code where we allocate a second dynamic array on the stack and test out the array access operator there.

```cpp
#include <cstdio>
#include "dynamic-array-2.hpp"

int main()
{
  // Create a dynamic array of int
  // and initialise it to a new dynamic array of 10 elements
  dynamic_array<int> *array = new dynamic_array<int>(10, 0);

  //...

  // Print and update the values in the array, using the get and set functions
  for(int i = 0; i < array->size; i++)
  {
    // Get the data from the array - using the array access operator
    // Though it is probably worse then using array->get(i)!
    printf("array[%d] =  %d\n", i, (*array)[i]);
    array->set(i, i * 2);
  }

  //...

  // Free the array and ensure we do not have a dangling pointer
  delete array;
  array = nullptr;

  // Test an array on the stack
  dynamic_array<int> array2(5, 0);

  array2.add(1);
  array2.add(2);
  array2.add(3);

  array2[1] = 20;

  for(int i = 0; i < array2.size; i++)
  {
    printf("array2[%d] = %d\n", i, array2[i]);
  }

  return 0;
}
```

## Using vector

Building your own dynamic array is a fantastic way to understand how things work at a relatively low level in your programs. However, for real systems you do not want to be building these things from scratch. C++ includes a library with classes that are designed for this purpose. For example, the [vector](https://cplusplus.com/reference/vector/vector/) class is the C++ version of our dynamic array.

If you go on to do more C++ programming, you should spend some time learning to use these. For now, our objective is learning to program (not learning C/C++). So add this as a future to-do, and stay focused on thinking about how all of these things work within any program code.
