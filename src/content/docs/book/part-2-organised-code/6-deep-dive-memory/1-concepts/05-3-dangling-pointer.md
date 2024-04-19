---
title: Dangling Pointers
sidebar:
    label: " - Dangling Pointers"
---

We previously discussed the issue of [dangling pointers](../../../4-indirect-access/1-concepts/02-05-scope) in the section on scope when we looked at pointers originally. The issue is compounded when you start to manage memory yourself, as now you can dynamically allocate and free memory.

A dangling pointer occurs when you access a value via a pointer that does not refer to a location in memory that is allocated to your program.

With dynamic memory this can occur due to being overly zealous about releasing memory. You must not release memory before you are finished with it. The problem occurs when you release memory, and then continue to access a value. This is one of the most difficult problems to locate, as it will not cause any problems initially. Making it hard to find where the problem originated.

Take [Figure x.y](#FigureAccessingReleasedMemory) as an example. This demonstrates a case where two pointers refer to one value. It is possible to free that value via one pointer, and then forget that the second refers to the same location. When you read the value from `p2` later, it is *likely* to still be `10`, so the program will continue to run as normal. The issue will only appear later when something else is allocated to use that piece of memory. All of a sudden the value you thought was allocated to `p2` is now changing apparently on its own. Worst of all, the actual cause of the bug could be a hundred of lines of code away from where the problem appears. This is what makes this kind of error very difficult to find.

The solution, once again, is to **take care** with pointers.

<a id="FigureAccessingReleasedMemory"></a>

![Figure x.y: You can still read values from memory even when they are unallocated...](./images/accessing-released-memory.png "You can still read values from memory even when they are unallocated...")
<div class="caption">You can still read values from memory even when they are unallocated...</div><br/>

:::note

Here are some tips to help you avoid accessing released memory:

- When you free memory, spend some time thinking about the things that could be referring to the value you just released.

:::
