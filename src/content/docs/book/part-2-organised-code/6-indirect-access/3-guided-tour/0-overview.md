---
title: "Overview"
---

The ability to use pointers and dynamically allocate memory gives us new ways to structure our data, but can also be tricky to use. Most of the time it is best to try to avoid having to deal with dynamic memory allocations directly - instead, you can build utility classes that hide this complexity and handle it for you.

We'll explore this in this chapter, primarily through building a [linked list](/book/part-2-organised-code/6-indirect-access/3-guided-tour/01-0-linked-list). This will become our second re-usable utility class alongside our `bounded_array`.

We will also see how pointers allow us to build other, more general structures, when we create a text adventure [maze game](/book/part-2-organised-code/6-indirect-access/3-guided-tour/02-0-maze/).
