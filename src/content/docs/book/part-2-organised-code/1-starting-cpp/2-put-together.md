---
title: Put Together
---

As you have seen, the syntax for the statements within your code are almost exactly the same. Have a bit of a practice with this by reimplementing some of your earlier C# programs.

This process can be fairly mechanical:

- Copy your code over.
- Wrap the logic within `int main() {...}`.
- Adjust the includes at the start.
- Adjust SphaskKit identifier names and ReadLine/Write/WriteLine - from PascalCase to snake_case.
- Change conversion method to their C/C++ function equivalents.
- Rename any variables from camelCase to snake_case.

:::tip

Right-click on the variables you want to rename and choose **Rename Symbol** - vscode will then search and replace this within your project!

:::

## Change Calculator

Here is the final version of the Change Calculator converted to C/C++. Have a go at the other examples yourself.

```cpp
/*
* Program: Simple Change
* Calculate the ideal change for a given transaction.
*/

#include "splashkit.h"

using std::stoi;
using std::to_string;

int main()
{
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
        write("Cost of item in cents: ");
        line = read_line();
        while ( ! is_integer(line) )
        {
            write_line("Please enter a whole number.");
            write("Cost of item in cents: ");
            line = read_line();
        }
        int cost_of_item = stoi(line);

        write("Payment in cents: ");
        line = read_line();
        while ( ! is_integer(line) )
        {
            write_line("Please enter a whole number.");
            write("Payment in cents: ");
            line = read_line();
        }
        
        int amount_paid = stoi(line);

        if (amount_paid >= cost_of_item)
        {
            int change_value = amount_paid - cost_of_item;
            int to_give;

            write("Change: ");

            int coin_value;
            string coin_text;

            for(int i = 0; i < NUM_COIN_TYPES; i++)
            {
                switch (i)
                {
                    case 0:
                        coin_value = TWO_DOLLARS;
                        coin_text = "$2, ";
                        break;
                    case 1:
                        coin_value = ONE_DOLLAR;
                        coin_text = "$1, ";
                        break;
                    case 2:
                        coin_value = FIFTY_CENTS;
                        coin_text = "50c, ";
                        break;
                    case 3:
                        coin_value = TWENTY_CENTS;
                        coin_text = "20c, ";
                        break;
                    case 4:
                        coin_value = TEN_CENTS;
                        coin_text = "10c, ";
                        break;
                    case 5:
                        coin_value = FIVE_CENTS;
                        coin_text = "5c";
                        break;
                    default:
                        coin_value = 0;
                        coin_text = "ERROR";
                        break;
                }

                // Give Change
                to_give = change_value / coin_value;
                change_value = change_value - to_give * coin_value;
                write(to_string(to_give) + " x " + coin_text);
            }

            write_line();
        }
        else
        {
            write_line("Insufficient payment");
        }

        write("Run again: ");
        again = read_line();
    } while ( again != "n" && again != "N");
}
```
