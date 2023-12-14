---
title: Other Languages
---

In this chapter you have seen how to start working with memory. Hopefully you have noticed that it is pretty challenging, and there are several pitfalls you have to watch out for.

Once you allocate a value on the heap, you are responsible for ensuring that the value is deleted when you are finished with it. Keeping track of this can be very challenging, as the relationships between values in memory are likely to change as the program runs. 

In general, there are three main ways for managing memory that different programming languages will adopt: manual management, reference counting, and garbage collection. Each of these approaches has its own advantages and disadvantages, and are used in different commercial programming languages. Languages like C and C++ use manual memory management, Objective-C and Swift use automatic reference counting, while Java and C# use garbage collection.

## Manual Memory Management

At the lowest level, there are languages that require you to **manually manage memory**. These languages offer basic methods that you can call to allocate and then free memory from the heap. You need to then work out your own strategy for ensuring that you free memory at appropriate times.

To do this effectively you need to establish ideas of ownership, so that you know when a value in memory should be freed. This puts the burden of memory management in the hands of the developers.

This is what we have been doing in this chapter. Learning about this now is great, as they will help you understand how things are working within the libraries and frameworks you use. However, in most cases you probably want to go with a language that handles this for you.

Why do it manually? You can be in control. This is important if performance is essential.

## Reference Counting

Another option is known as **reference counting**. In languages the library will add in additional data, and help keep track of things for you. In these cases, each memory allocation will keep track of the things referring to it, and will delete itself when it is no longer being referred to by anything.

These tools generally require developers to adhere to certain conventions, so that data in memory knows when they are referenced and when they are no longer referenced. Depending on the language, the compiler may be able to add any reference counting code automatically, but it still does require some level of understanding on the developers part.

Why use reference counting? This is an efficient means of managing memory, but can be tricky as you need to understand how it works. Automatic reference counting is used in Apple's Objective-C and Swift languages.

## Garbage Collection

Lastly, there is **garbage collection**. Languages which use this approach, including C#, have a separate task that runs alongside your code keeping track of your memory allocations. The garbage collector runs periodically, and traces through the links within your code to identify and delete memory allocations that are no longer being referenced.

Why use garbage collection? The main reason is convenience and safety. Memory is managed at the cost of some performance. Languages like Java and C# use garbage collection.

<!-- TODO: add generics in other languages -->