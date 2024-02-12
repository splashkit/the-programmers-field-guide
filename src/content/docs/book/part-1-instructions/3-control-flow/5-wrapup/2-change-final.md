---
title: Final Change Calculator
---

Our version of the final change calculator code is shown below. Remember there are several ways that you can get this working. If you got this working yourself you are well on the way to seeing how this all comes together.

Remember to use this to help you build your own solution.

```csharp
/*
* Program: Simple Change
* Calculate the ideal change for a given transaction.
*/

// using static System.Console;
using static System.Convert;
using static SplashKitSDK.SplashKit;

const int NUM_COIN_TYPES = 6;

const int TWO_DOLLARS = 200;
const int ONE_DOLLAR = 100;
const int FIFTY_CENTS = 50;
const int TWENTY_CENTS = 20;
const int TEN_CENTS = 10;
const int FIVE_CENTS = 5;

string again = ""; // used to check if the user want to run again
string line;

do
{
    Write("Cost of item in cents: ");
    line = ReadLine();
    while (!IsInteger(line))
    {
        WriteLine("Please enter a whole number.");
        Write("Cost of item in cents: ");
        line = ReadLine();
    }
    int costOfItem = ToInt32(line);

    Write("Payment in cents: ");
    line = ReadLine();
    while (!IsInteger(line))
    {
        WriteLine("Please enter a whole number.");
        Write("Payment in cents: ");
        line = ReadLine();
    }
    
    int amountPaid = ToInt32(line);

    if (amountPaid >= costOfItem)
    {
        int changeValue = amountPaid - costOfItem;
        int toGive;

        Write("Change: ");

        int coinValue;
        string coinText;

        for(int i = 0; i < NUM_COIN_TYPES; i++)
        {
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

            // Give Change
            toGive = changeValue / coinValue;
            changeValue = changeValue - toGive * coinValue;
            Write($"{toGive} x {coinText}");
        }

        WriteLine();
    }
    else
    {
        WriteLine("Insufficient payment");
    }

    Write("Run again: ");
    again = ReadLine();
} while ( again != "n" && again != "N");
```

:::note
See how the indentation helps you see the structure of the program. The cases are indented within the switch, the switch within the for, which is within the if in the do while.

Indentation is really important to help you see and work with your code.
:::
