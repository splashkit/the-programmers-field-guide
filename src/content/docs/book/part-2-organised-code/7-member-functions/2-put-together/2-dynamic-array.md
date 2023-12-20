---
title: Dynamic Array (v2)
---

In [Chapter 2.6](../../../6-deep-dive-memory/2-put-together/02-0-dynamic-array) we built out a dynamic array that captured the code needed to dynamically allocate memory. The main issue was that our dynamic array did not look like an array. We had to use functions and procedures to access it.

Now that we have member functions, we can refactor this code so that everything for the dynamic array is nicely packaged with the struct. Other programmers can then easily see the features of the dynamic array as they use it. What is more, we can override the array access modifiers so that our dynamic array *looks like* a normal array. Once we have this in place, the dynamic array can easily be added to our existing projects where we previously had fixed length arrays.

## Moving 