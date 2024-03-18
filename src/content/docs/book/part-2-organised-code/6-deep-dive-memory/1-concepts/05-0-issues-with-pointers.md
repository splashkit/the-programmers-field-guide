---
title: "Issues with pointers"
---

> With great power comes great responsibility

Pointers give you great flexibility in your programs, allowing you to allocate your program more memory as you need it, and return that allocation when you are finished with it. Conceptually this seems very simple, but pointers are a source of many issues in programs, many of which can result in security vulnerabilities that allow attackers to use the system in ways that were not intended.

There are three main issues we will describe here. First we will revisit the idea of [access violations](../05-1-access-violation) as more frequent use of pointers makes this a greater challenge. Then we will look at [memory leaks](../05-2-memory-leak) which result in programs retaining but not releasing memory appropriately. Finally, we will revisit the [dangling pointer](../05-3-dangling-pointer) issue again to see the additional challenges when working with space on the heap.

If you are starting to feel like these are all a bit too challenging, don't worry you are not alone. More modern languages have removed some flexibility, but taken away many of these problems. It is still great to understand how this works, but you can rest assured that you won't have to deal with these low level issues all the time. Once we get into [Part 3](../../../../part-3-programs-as-concepts/00-part-3-programs-as-concepts) we will switch back to C#, and we will see how these issues are avoided there. Our understanding of memory allocation and pointers will help us better understand what C# is doing for us behind the scenes.
