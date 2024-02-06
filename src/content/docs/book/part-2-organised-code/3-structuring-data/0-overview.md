---
title: "Overview"
---

In Chapter 2.2, we saw how to organise our code into functions and procedures. This has allowed us to start building larger programs. However, we haven't yet seen the tools we can use to organise data.

Data is a key enabler in helping us build and communicate the things within our digital realities. By organising our data, we can start to capture the things that exist within our code far more clearly than we have with just primitive data line numbers and text.

This chapter will show you how to create your own data types, allowing you to model the entities (things) related to your program. This means that your code can work with more meaningful values, making it easier to see what the program is about and further simplifying how things work.

When you have understood the material in this chapter you will be able to define your own data types to model the entities you want to work with in your program.

## Overview of structuring data concepts

To this point, data has been about single values that are either numbers, text, or Boolean values. These values can be used in [expressions](../../../part-1-instructions/2-communicating-syntax/1-concepts/03-expression) and stored in [variables](../../../part-1-instructions/1-sequence-and-data/1-concepts/08-variable). Now as we move to creating larger and more complicated programs, you need a more effective means of modelling the data in your code. This chapter introduces concepts that you can use to more accurately model the data and entities associated with your program.

This chapter introduces the following **building blocks**:

- [Enumeration](../1-concepts/03-02-enum): used to store one of a list of available options.
- [Struct](../1-concepts/03-01-struct): used to store multiple fields in a single composite value.

You may need to revise the following programming building blocks:

- [Variable](../../../part-1-instructions/1-sequence-and-data/1-concepts/08-variable).: The idea of storing data within your code.
- [Local Variable](../../2-organising-code/1-concepts/03-local-variable): Storing data in a or [Function](../../2-organising-code/1-concepts/04-function-decl) or [Procedure](../../2-organising-code/1-concepts/02-procedures).
- [Parameter](../../2-organising-code/1-concepts/04-parameter): Passing data to a [Function or Procedure](../../2-organising-code/1-concepts/01-0-functions-and-procedures).

The following programming terminology will also be used in this chapter:

- [Expression](../../../part-1-instructions/2-communicating-syntax/1-concepts/03-expression): A value used in a statement.
- [Type](../../../part-1-instructions/1-sequence-and-data/1-concepts/07-type): A kind of data used in your code.

:::tip

Modelling will be a key process in this chapter. You need to be able to picture the digital reality you are creating, and see *entities* (things) within it. You can then start to create these entities in your code.

:::
