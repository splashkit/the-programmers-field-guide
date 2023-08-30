---
title: "Overview"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---
## Overview

Chapter x introduced the array, allowing you to store multiple values of the same type in a single variable. This greatly expanded the ways in which you can work with data in your code, but there are more tools you can use to model data in your programs.

This chapter will show you how to create your own data types, allowing you to model the entities<sup>[1](#FootnoteEntities)</sup> related to your program. This means that your code can work with more meaningful values, making it easier to create larger and more complicated programs.

When you have understood the material in this chapter you will be able to define your own data types to model the entities you want to work with in your program.

<hr class="footnote">
<div id="FootnoteEntities" class="footnote"><sup>1</sup>A fancy way of saying the '<em>things</em>' associated with your program.</div>


## Overview of structuring data concepts

To this point, data has been about single values that are either numbers, text, or Boolean values. These values can be used in [Expressions](#) and stored in [Variables](../../../part-1-instructions/1-sequence-and-data/1-concepts/08-variable) and [Array](#) elements. Now as we move to creating larger and more complicated programs you need a more effective means of modelling the data in your code. This chapter introduces concepts that you can use to more accurately model the data and entities associated with your program.

This chapter introduces the following **artefacts**:

- [Enumeration](#): a kind of type used to store one of a list of available options.
- [Record](#): a kind of type used to store multiple fields in a single composite value.
- [Union](#): a kind of type used to store one value of different possible types.

You may need to revise the following programming artefacts:

- [Variable](../../../part-1-instructions/1-sequence-and-data/1-concepts/08-variable).: The idea of storing data within your code.
- [Array](#): Allowing you to store multiple values within your code.
- [Local Variable](#): Storing data in a or [Function](#) or [Method](../../../part-1-instructions/1-sequence-and-data/1-concepts/02-method).
- [Parameter](#): Passing data to a [Function](#) or [Method](../../../part-1-instructions/1-sequence-and-data/1-concepts/02-method).

The following programming terminology will also be used in this Chapter:

- [Expression](#): A value used in a statement.
- [Type](../../../part-1-instructions/1-sequence-and-data/1-concepts/07-type): A kind of data used in your code.

The example program shown in [Listing x.y](#ListingSmallDB) for this chapter will be Small DB, a program that allows the user to enter a number of integer, double, and text values.




<a id="ListingSmallDB"></a>

```bash
acain2-mbp:types acain$ ./SmallDB
-----------------------
  Welcome to Small DB
-----------------------
Please enter 3 values. They can be text or numbers.
Enter value: Fred Smith
Stored in row with id 0
Enter value: 123456
Stored in row with id 1
Enter value:  3.1415
Stored in row with id 2
Row with id 0: has text 'Fred Sm'
Row with id 1: has integer 123456
Row with id 2: has double 3.1415
acain2-mbp:types acain$
```
<div class="caption"><span class="caption-figure-nbr">Listing x.y: </span>Small DB run from the Terminal</div>