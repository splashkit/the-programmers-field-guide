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