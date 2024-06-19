---
title: Change Calculator
---

Here is our updated version of the change calculator. This change introduces structs and enumerations to help us manage the data within the change calculator.

```cpp
/*
 * Program: Simple Change
 * Calculate the ideal change for a given transaction.
 */

#include "splashkit.h"

using std::stoi;
using std::to_string;

/**
 * The different kinds of coins in the system
 */
typedef enum
{
  NO_COIN = -1,
  TWO_DOLLARS,
  ONE_DOLLAR,
  FIFTY_CENTS,
  TWENTY_CENTS,
  TEN_CENTS,
  FIVE_CENTS
} coin_kind;

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
  int value;
  coin_kind kind;
  string text;
} coin_data;

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
 * Initialise a new coin of the indicated kind
 *
 * @param kind  The kind of coin to setup
 * @return coin data of the indicated kind
 */
coin_data new_coin(coin_kind kind)
{
  coin_data coin;

  coin.kind = kind;

  switch (kind)
  {
  case TWO_DOLLARS:
    coin.text = "$2, ";
    coin.value = 200;
    break;
  case ONE_DOLLAR:
    coin.text = "$1, ";
    coin.value = 100;
    break;
  case FIFTY_CENTS:
    coin.text = "50c, ";
    coin.value = 50;
    break;
  case TWENTY_CENTS:
    coin.text = "20c, ";
    coin.value = 20;
    break;
  case TEN_CENTS:
    coin.text = "10c, ";
    coin.value = 10;
    break;
  case FIVE_CENTS:
    coin.text = "5c";
    coin.value = 5;
    break;
  default:
    coin.text = "ERROR";
    break;
  }

  return coin;
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

  for (int i = 0; i < NUM_COIN_TYPES; i++)
  {
    coin_data coin = new_coin(coin_kind(i));

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
