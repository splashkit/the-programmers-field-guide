---
title: "Type (recap)"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---
## Concept

This chapter is all about types, so its is important to have a good understanding of what a type is. A type is a specification for a class of data, describing how it is stored and interpreted.

<a id="FigureTypeRecap"></a>

![Figure x.y: Type defines the size and interpretation if values in your code](./images/type-recap.png "Type defines the size and interpretation if values in your code")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>Type defines the size and interpretation if values in your code</div><br/>

:::note

- A Type is a kind of `artefact`, describing the format and interpretation of values.
- Types specify the following:
  - The size (number of bits) needed to store values of this type.
  - How the bits of the type are interpreted.
  - The operations that can be performed on values of this type.
- You can think of a Type as a blueprint, specifying data layout.
- The interpretation of a value depends on its Type, for example `10100101` is `Ñ` if the value is a Character type, but the same value would be `165` if it is an Integer type.
- You can create your own types...

::: 