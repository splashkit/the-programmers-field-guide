---
title: Overview
order: 1
---

We've been using a couple of different data structures in our code so far - particularly `fixed_array<T, N>` and `dynamic_array<T>`.

Let's focus on `dynamic_array<T>`. Part of what makes this structure so powerful is that we can create a `dynamic_array` specialized to store _any_ type of our choosing, simply by supplying the type within angle brackets (`<>`).

There are no seperate `dynamic_double_array`, `dynamic_string_array` or `dynamic_book_array` types. Instead, we have a single generic class - `dynamic_array<T>` that takes a type as a _parameter_.

In this section we will begin exploring the powerful concept that makes this possible - **generics**. Generics allow us to represent variable types in our code, and pass types as parameters. We can write a piece of code _once_, then _substitute_ in different types.

We will primarily explore this by writing our own generic array class.
