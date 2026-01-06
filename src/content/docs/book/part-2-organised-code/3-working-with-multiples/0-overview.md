---
title: Overview
---

Previous chapters have introduced a number of programming building blocks you can create within your code. We have seen how to work with sequences and data, added control flow, organised code with functions and procedures, structured data, and used references and pointers. However, when it comes to working with data, you have been working with individual values. This chapter introduces the concepts and practices that make it easy to work with multiple values in your code.

When you have understood the material in this chapter you will be able to work with multiple values, allowing your programs to work with and manage many data values.

:::tip

This is another big chapter. Unlocking these ideas will open up a world of new possibilities. It will require some time and effort to really understand, as this brings together many things we have already been working on. Keep working at it, and you will see how easy it can be to manage multiple values.

:::

## Concepts related to managing multiple values

Data is an important part of any program. Earlier chapters have shown how to store and work with data. These chapters covered both the [types](/book/part-1-instructions/1-sequence/5-reference/06-type) of data you can work with, and means of storing and exchanging data using [variables](/book/part-1-instructions/2-data/5-reference/10-variable). So far, each variable has stored a single value, making it difficult to work with multiple values. This chapter introduces the concepts needed start working more effectively with multiple values.

The chapter introduces the following building blocks:

- [Array](/book/part-2-organised-code/3-working-with-multiples/5-reference/00-00-array): A kind of variable that is used to store multiple values. The individual values in the array are called *elements*.
- [String](/book/part-2-organised-code/3-working-with-multiples/5-reference/02-00-string): We will see how strings are achieved using arrays. This will help you understand the existing string type we have been using.

We will revise the following instructions to see how they work with arrays:

- [For Loop](/book/part-2-organised-code/3-working-with-multiples/5-reference/01-for-loop): A loop that can be used to easily repeat a block of code for each element of an array.
- [Expressions](/book/part-2-organised-code/3-working-with-multiples/5-reference/00-03-expressions-with-arrays): Expressions can read the value from the element of an array.
- [Assignment Statement](/book/part-2-organised-code/3-working-with-multiples/5-reference/00-02-assign-element): The assignment statement can be used to assign a value to an element in an array.

You may need to revise the following building blocks:

- [Variable](/book/part-1-instructions/2-data/5-reference/10-variable): The idea of storing data within your code.
- [Local Variable](/book/part-2-organised-code/1-structuring-code/5-reference/03-local-variable): Storing data in a function or procedure.
- [Parameter](/book/part-2-organised-code/1-structuring-code/5-reference/04-function-decl#examples): Passing data to a function or procedure.

We will use a simple statistics calculator as an example in this chapter. Using this calculator, the user will be able to enter a number of values, and the program calculates some statistics. An example of this program executing is shown in [Listing x.y](#ListingStatsCalculatorTerminalRun)

<a id="ListingStatsCalculatorTerminalRun"></a>

```
$ ./StatsCalc
How many values do you want to enter: 10
Enter value  1: Hello World
Please enter a number.
Enter value 1: 1
Enter value 2: 2
Enter value 3: 3
Enter value 4: 4
Enter value 5: 5
Enter value 6: 6
Enter value 7: 7
Enter value 8: 8
Enter value 9: 9
Enter value 10: 10

Calculating statistics...

Sum:        55.00
Mean:       5.50
Variance:   9.17
Max:        10.00
$
```

<div class="caption">Statistics Calculator run from the terminal</div>
