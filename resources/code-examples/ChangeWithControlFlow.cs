/*
* Program: Simple Change
* Calculate the ideal change for a given transaction.
*/
using static System.Console;
using static System.Convert;

const int NUM_COIN_TYPES = 6;

// Constants for the coin values
const int TWO_DOLLARS = 200;
const int ONE_DOLLAR = 100;
const int FIFTY_CENTS = 50;
const int TWENTY_CENTS = 20;
const int TEN_CENTS = 10;
const int FIVE_CENTS = 5;

string again = ""; // used to check if the user want to run again

do
{
    // Get the data from the user
    Write("Cost of item in cents: ");
    int costOfItem = ToInt32(ReadLine());

    Write("Payment in cents: ");
    int amountPaid = ToInt32(ReadLine());

    if (amountPaid < costOfItem)
    {
        WriteLine("Insufficient payment");
        continue;
    }

    // Calculate the change
    int changeValue = amountPaid - costOfItem;
    int toGive;

    Write("Change: ");

    int coinValue;
    string coinText;

    // Loop for each coin type
    for(int i = 0; i < NUM_COIN_TYPES; i++)
    {
        // Map each loop to its coin value data
        switch (i)
        {
            case 0:
                coinValue = TWO_DOLLARS;
                coinText = "$2, ";
                break;
            case 1:
                coinValue = ONE_DOLLAR;
                coinText = "$1, ";
                break;
            case 2:
                coinValue = FIFTY_CENTS;
                coinText = "50c, ";
                break;
            case 3:
                coinValue = TWENTY_CENTS;
                coinText = "20c, ";
                break;
            case 4:
                coinValue = TEN_CENTS;
                coinText = "10c, ";
                break;
            case 5:
                coinValue = FIVE_CENTS;
                coinText = "5c";
                break;
            default:
                coinValue = 0;
                coinText = "ERROR";
                break;
        }

        // Give Change - using coin value data
        toGive = changeValue / coinValue;
        changeValue = changeValue - toGive * coinValue;
        Write($"{toGive} x {coinText}");
    }

    WriteLine();

    // Ask about running again
    Write("Run again: ");
    again = ReadLine();
} while ( again != "n" && again != "N");
