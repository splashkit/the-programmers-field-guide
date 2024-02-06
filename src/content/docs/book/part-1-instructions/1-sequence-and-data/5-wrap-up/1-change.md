---
title: Change Calculator
---

Here is what we came up with for the change calculator code. We decided not to have a separate `line` variable, but it would probably have been better to include that. We made sure to lay out the code with gaps and comments to help us see the different steps.

Your code is probably very similar to this as we were both working from the same pseudocode plan. Your program does not need to be exactly the same as this, but hopefully reviewing this and comparing it with your program will give you confidence that you are on the right path.

```csharp
/*
* Program: Simple Change
* Calculate the ideal change for a given transaction.
*/
using static System.Console;
using static System.Convert;

// Constants for the coin values
const int TWO_DOLLARS = 200;
const int ONE_DOLLAR = 100;
const int FIFTY_CENTS = 50;
const int TWENTY_CENTS = 20;
const int TEN_CENTS = 10;
const int FIVE_CENTS = 5;

// Get the data from the user
Write("Cost of item in cents: ");
int costOfItem = ToInt32(ReadLine());

Write("Payment in cents: ");
int amountPaid = ToInt32(ReadLine());

// Calculate the change
int changeValue = amountPaid - costOfItem;
int toGive;

// Give Change
Write("Change: ");

// Give $2
toGive = changeValue / TWO_DOLLARS;
changeValue = changeValue - toGive * TWO_DOLLARS;
Write($"{toGive} x $2, ");

// Give $1
toGive = changeValue / ONE_DOLLAR;
changeValue = changeValue - toGive * ONE_DOLLAR;
Write($"{toGive} x $1, ");

// Give 50c
toGive = changeValue / FIFTY_CENTS;
changeValue = changeValue - toGive * FIFTY_CENTS;
Write($"{toGive} x 50c, ");

// Give 20c
toGive = changeValue / TWENTY_CENTS;
changeValue = changeValue - toGive * TWENTY_CENTS;
Write($"{toGive} x 20c, ");

// Give 10c
toGive = changeValue / TEN_CENTS;
changeValue = changeValue - toGive * TEN_CENTS;
Write($"{toGive} x 10c, ");

// Give 5c
toGive = changeValue / FIVE_CENTS;
changeValue = changeValue - toGive * FIVE_CENTS;
Write($"{toGive} x 5c");

// End the line... then end the program
WriteLine();
```

:::tip[Andrew's tip]
The comments helped me track the steps as I went. These will make it easier when I come back to look at this in a few months, when I have forgotten what I was doing now.
:::
