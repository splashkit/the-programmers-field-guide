/*
* Program: Simple Change
* Calculate the ideal change for a given transaction.
*/
using static System.Console;
using static System.Convert;

const int TWO_DOLLARS = 200;
const int ONE_DOLLAR = 100;
const int FIFTY_CENTS = 50;
const int TWENTY_CENTS = 20;
const int TEN_CENTS = 10;
const int FIVE_CENTS = 5;

Write("Cost of item in cents: ");
int costOfItem = ToInt32(ReadLine());

Write("Payment in cents: ");
int payment = ToInt32(ReadLine());

int changeValue = costOfItem - payment;
int toGive;

Write("Change: ");

// Give $2
toGive = changeValue / TWO_DOLLARS;
changeValue = changeValue - toGive * TWO_DOLLARS;
Write($"{toGive} x $2, ");

// Give $1
toGive = changeValue / ONE_DOLLARS;
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
toGive = changeValue / TEN_CENTS;
changeValue = changeValue - toGive * TEN_CENTS;
Write($"{toGive} x 5c");

WriteLine();
