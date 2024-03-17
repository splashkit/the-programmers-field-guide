---
title: Using the Dynamic Array
sidebar:
    label: " - Using the Dynamic Array"
---

Now that we have the dynamic array we can start to use it within our projects. In this section we can have a look at using moving the code into a header file so that it can be included in other projects easily, and we can then look at how we could have used this in our statistics calculator and our fly catch programs.

## Moving it to a header

In the [structuring code](../../../2-organising-code/0-overview) chapter we saw how to use [header files](../../../2-organising-code/1-concepts/04-function-decl/#header-files) to share code we have created. The dynamic array is the perfect example of something that can be shared. If we put this in a header file, then we can include that header in our statistics calculator code and our fly catch code.

As this is C++ code, and it won't work in C, we can put this in a file with a **.hpp** extension. This helps indicate that it is C++.

With C++ templates, the compiler needs all the code when the template it used. It needs to be able to generate the code from the template for the different type options that we use. As a result, you will need to copy the declarations, and their implementations into the header file.

Remember to add the header guard, to ensure that we do not include this code more than once. Review the previous [header files](../../../2-organising-code/1-concepts/04-function-decl/#header-files) page for the code to handle this.

If you cut and paste the code from the original test, then you can include your new header and make sure that things still work. Once the test runs, you know the header has everything that it needs.

## Statistics Calculator

When we designed the statistics calculator, we used a fixed size array within the `number_data` struct. This limited the user to an arbitrary number of elements. With the dynamic array this limitation could have been avoided. We also remove the need to have a separate `number_data` struct. This can be replaced with our `dynamic_array` which keeps track of the number of elements it is managing.

As a thought exercise, here are the steps I followed to convert the code to using our dynamic array. You could try implementing these yourself to see it in action, but you can probably achieve the same result by extending your test program. When you can see how the dynamic array works, then you can think through how it can apply in a range of different program contexts.

1. Add the header include
2. Remove `MAX_NUMBERS` constant and the `number_data` type declaration.
3. Multi-select the `number_data &` code and replace all instances with the new `dynamic_array<double> *`.
4. Scan the code to change how we access the data:
   - Remove old limited imposed by `MAX_NUMBERS`
   - Remove any code that sets the size, and use `add` instead
     - Use `add` in `populate_array`
     - Adjust `add_data` to use `add` as well
   - Replace any code setting a value in the array with a call to `set`:
     - `data.values[i] = read_double("Enter value: ");` becomes:
     - `set(data, i, read_double("Enter value: "));`
   - Replace any code getting a value from the array with a call to `get`. For example:
     - `printf("%d: %lf\n", i, data.values[i]);` becomes
     - `printf("%d: %lf\n", i, get(data, i, 0.0));`
   - Adjust the places where data.size is used, and access via the pointer. For example:
     - `for (int i = 0; i < data.size; i++)` becomes:
     - `for (int i = 0; i < data->size; i++)`
   - Adjust the code in `remove_value` to use resize, or rewrite the logic to remove an element into the `dynamic_array` and have `remove_value` call that.

:::tip

In the next chapter we will see how to extend the dynamic array further, making it easier to use. If you want to refactor this program, maybe wait until you have seen how you can incorporate member functions.

:::

## Fly Catch

In the fly catch program, we could consider using the dynamic array within the game to manage a number of flies. This would allow you to increase or decrease the number of flies within the game as it progresses. The changes would be similar to those for the statistics calculator, mostly switching from direct array access to using the functions to access the dynamic array features.

:::tip

As with the statistics calculator, the next chapter will boost what we can do to make this transition easier.

:::
