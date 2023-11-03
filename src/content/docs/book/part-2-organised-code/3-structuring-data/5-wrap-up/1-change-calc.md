---
title: Change Calculator
---

```cpp
/*
 * Program: Simple Change
 * Calculate the ideal change for a given transaction.
*/

#include "splashkit.h"

using std::stoi;
using std::to_string;

/**
 * The possible values for the coins given
*/
typedef enum
{
  NO_COIN = 0,
  FIVE_CENTS = 5,
  TEN_CENTS = 10,
  TWENTY_CENTS = 20,
  FIFTY_CENTS = 50,
  ONE_DOLLAR = 100,
  TWO_DOLLARS = 200
} coin_value;

/**
 * The number of coins we can give change for
*/
const int NUM_COIN_TYPES = 6;

/**
 * Each coin has a value and text. This is used to 
 * calculate the number of coins to give in change, and 
 * to determine what text to show the user.
 * 
 * @field value The value of the coin
 * @field text  The coin text for output
*/
typedef struct
{
  coin_value  value;
  string      text;
} coin_type;

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
  int to_give;

  write("Change: ");

  coin_type coin;

  for (int i = 0; i < NUM_COIN_TYPES; i++)
  {
    switch (i)
    {
    case 0:
      coin.value = TWO_DOLLARS;
      coin.text = "$2, ";
      break;
    case 1:
      coin.value = ONE_DOLLAR;
      coin.text = "$1, ";
      break;
    case 2:
      coin.value = FIFTY_CENTS;
      coin.text = "50c, ";
      break;
    case 3:
      coin.value = TWENTY_CENTS;
      coin.text = "20c, ";
      break;
    case 4:
      coin.value = TEN_CENTS;
      coin.text = "10c, ";
      break;
    case 5:
      coin.value = FIVE_CENTS;
      coin.text = "5c";
      break;
    default:
      coin.value = NO_COIN;
      coin.text = "ERROR";
      break;
    }

    // Give Change
    to_give = change_value / coin.value;
    change_value = change_value - to_give * coin.value;
    write(to_string(to_give) + " x " + coin.text);
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