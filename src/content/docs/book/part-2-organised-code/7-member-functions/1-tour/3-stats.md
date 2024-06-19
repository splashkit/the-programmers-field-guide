---
title: Using Dynamic Array
---

Now that our dynamic array looks and feels more like an array, we should be able to use it with ease across our other programs.

## Stats Calculator

In the stats calculator, we could remove our `number_data` struct altogether and just use a `dynamic_array<double>`. The only real change than is to make sure we call `add` to put values into the array, and remove the management of the size from the calculator's code all together. Otherwise, we just need to switch all code like `data.values[i]` to `data[i]`. Now the program can have any number of values stored on the heap.

You can play around with this if you want, but next let's look at building out the maze game we started earlier.
