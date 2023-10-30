---
title: Overview
---

Previous chapters have introduced a number programming artefacts for you to create within your code. However, when it comes to working with data in your programs you have been limited in the way you deal with multiple values. This chapter introduces the concepts and practices that make it easier to work with multiple values in your code.

When you have understood the material in this chapter you will be able to work with multiple values more easily, allowing your programs to work with many data values.

## Concepts related to managing multiple values

Data is an important part of any program. Earlier chapters have shown how to store and work with data. These chapters covered both the **Types** of data you can work with, and means of storing and exchanging data using **Variables**. So far each Variable has stored only a single value, making it difficult to work with multiple values. This chapter introduces the concepts needed start working more effectively with multiple values.

The chapter introduces the following **artefacts**:

- **Array**: A kind of variable that is used to store multiple values. The individual values in the array are called *elements*.
- **String**: An existing **Type** that stores textual data.

The following **actions** are then needed to work with Arrays:

- **For Loop**: A **Pre-Test Loop** that can be used to easily repeat a block of code for each element of an array.
- **Expressions (With Arrays)**: Expressions can read the value from the element of an array.
- **Assignment Statement (With Arrays)**: The assignment statement can be used to assign a value to an element in an array.

You may need to revise the following programming artefacts:

- **Variable**: The idea of storing data within your code.
- **Local Variable**: Storing data in a **Function** or **Procedure**.
- **Parameter**: Passing data to a Function or Procedure.

The following programming terminology will also be used in this Chapter:

- **Expression**: A value used in a statement.
- **Type**: A kind of data used in your code.

The example for this chapter is a statistics calculator, where the user enters 10 values, and the program calculates some statistics. An example of this program executing is shown in [Listing x.y](#ListingStatsCalculatorTerminalRun)


<a id="ListingStatsCalculatorTerminalRun"></a>

```bash
acain-mbp:array acain$ ./StatsCalc
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
acain-mbp:array acain$
```
<div class="caption"><span class="caption-figure-nbr">Listing x.y: </span>Statistics Calculator run from the terminal</div>