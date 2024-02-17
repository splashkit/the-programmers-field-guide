---
title: Change Calculator
---

The following code shows our convention of the change calculator. As you can see, most of the changes are just to match the different coding convention.

```cpp
/*
 * Program: Simple Change
 * Calculate the ideal change for a given transaction.
*/

#include "splashkit.h"

using std::stoi;
using std::to_string;

/**
 * Read an integer from the user
 * 
 * @param prompt the message to show the user
 * @returns the integer entered
*/
int read_integer(string prompt)
{
  write(prompt);
  string line = read_line();
  while (!is_integer(line))
  {
      write_line("Please enter a whole number.");
      write(prompt);
      line = read_line();
  }
  return stoi(line);
}

/**
 * Give the user change of the indicated amount.
 * 
 * @param change_value the amount of change to give
*/
void give_change(int change_value)
{
  const int NUM_COIN_TYPES = 6;

  const int TWO_DOLLARS = 200;
  const int ONE_DOLLAR = 100;
  const int FIFTY_CENTS = 50;
  const int TWENTY_CENTS = 20;
  const int TEN_CENTS = 10;
  const int FIVE_CENTS = 5;

  int to_give;

  write("Change: ");

  int coin_value;
  string coin_text;

  for (int i = 0; i < NUM_COIN_TYPES; i++)
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

int main()
{
  string again = ""; // used to check if the user want to run again
  string line;

  do
  {
    int cost_of_item = read_integer("Cost of item in cents: ");
    int amount_paid = read_integer("Payment in cents: ");

    if (amount_paid >= cost_of_item)
    {
      give_change(amount_paid - cost_of_item);
    }
    else
    {
      write_line("Insufficient payment");
    }

    write("Run again: ");
    again = read_line();
  } while (again != "n" && again != "N");
}
```