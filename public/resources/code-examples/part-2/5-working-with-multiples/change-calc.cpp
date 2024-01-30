/*
 * Program: Simple Change
 * Calculate the ideal change for a given transaction.
 */

#include "splashkit.h"

using std::stoi;
using std::to_string;

/**
 * The maximum number of coins we can have in the machine
 */
const int MAX_COINS_TYPES = 10;

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
 * The data for the machine, storing an array of the 
 * different kinds of coins that it provides.
 *
 * @field coins the array of different kinds of coins
 * @field coin_count the number of coins in the array
 */
typedef struct
{
  coin_data coins[MAX_COINS_TYPES];
  int coin_count;
} machine_data;

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
 * @param machine a reference to the machine with the coins
 */
void give_change(int change_value, machine_data &machine)
{
  int to_give;

  write("Change: ");

  for (int i = 0; i < machine.coin_count; i++)
  {
    coin_data &coin = machine.coins[i];

    // Give Change
    to_give = change_value / coin.value;
    change_value = change_value - to_give * coin.value;
    write(to_string(to_give) + " x " + coin.text);
  }

  write_line();
}

void setup_coins(machine_data &machine)
{
  // There are 6 Australian coins
  machine.coin_count = 6;

  machine.coins[0].text = "$2, ";
  machine.coins[0].value = 200;
  
  machine.coins[1].text = "$1, ";
  machine.coins[1].value = 100;
  
  machine.coins[2].text = "50c, ";
  machine.coins[2].value = 50;

  machine.coins[3].text = "20c, ";
  machine.coins[3].value = 20;

  machine.coins[4].text = "10c, ";
  machine.coins[4].value = 10;

  machine.coins[5].text = "5c";
  machine.coins[5].value = 5;
}

int main()
{
  string again = ""; // used to check if the user want to run again
  string line;

  machine_data machine;
  setup_coins(machine);

  do
  {
    int cost_of_item = read_integer("Cost of item in cents: ");
    int amount_paid = read_integer("Payment in cents: ");

    if (amount_paid >= cost_of_item)
    {
      give_change(amount_paid - cost_of_item, machine);
    }
    else
    {
      write_line("Insufficient payment");
    }

    write("Run again: ");
    again = read_line();
  } while (again != "n" && again != "N");
}
