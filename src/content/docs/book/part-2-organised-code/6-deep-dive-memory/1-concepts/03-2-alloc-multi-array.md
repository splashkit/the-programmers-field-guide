---
title: Allocating Multidimensional Arrays
sidebar:
    labels: " - Multidimensional Arrays"
---

Memory allocations allow you to ask for a number of bytes, and this can be used to create arrays that contain multiple values. In some cases you may want to allocate space for a multidimensional array, so how can that be done?

## Multiple array indexes

Memory is always managed as a sequence of bytes, with each byte having an address that indicates its distance from the start of memory. So how are multidimensional arrays represented?

```cpp
int data[2][3];
```
