---
title: Ragged Arrays
sidebar:
  label: " - Ragged Arrays"
---

In the last section we looked at allocating multidimensional arrays as contiguous blocks of memory (where the contents of the array are all in one block). This can be a convenient way of organising the data, but it may not be the most efficient if you want different sized dimensions throughout the array.

If we consider the 2-dimensional array example we have seen this as a rectangular area, with the same number of rows in each column. This is something we can change now we have dynamic memory allocation. Instead of having the same number of rows in each column, each column can have its own number of elements. This structure is called a **ragged array**, as we do not have a neat rectangle visualisation, the different sized rows make the end ragged.

:::note

While we picture this with 2-dimensional arrays, the same applies to any number of dimensions. Where the dimension is ragged, you would have a pointer and allocate it space independent of the other arrays in that dimension.

:::

## Ragged Array - Why, When, How

You can use ragged arrays when you want to work with each dimension individually. The values will not be in memory in a contiguous block, but you will be able to use the indexes to access values as before.

To implement this you are best to use structs, where each struct has a pointer to the data, and knows the number of elements that are stored there. We will look at how to build this in the put together section on [dynamic arrays](../../2-put-together/02-dynamic-array). You can make a multidimensional array with these by having a dynamic array that contains a dynamic array (and so on until you get to your actual data values).

