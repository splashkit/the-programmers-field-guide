---
title: Overview
order: 1
---

Consider the `dynamic_array` class we have been using in our code. Part of what makes it so powerful, is the fact that we can create not just `dynamic_array`s, but `dynamic_array`s with elements of _types_ of our choice.

There aren't seperate `dynamic_double_array`, and `dynamic_string_array` and `dynamic_book_array` types - instead, we have a _single_ class - `dynamic_array<T>` that supports taking a type, almost like a procedure parameter.

In this section we will begin exploring a powerful concept that makes this possible - **generics**. Generics allow us to represent variable types in our code - we can write a piece of code once, then substitute in different types.

We will primarily explore this by writing our own generic array class.
