---
title: Guessing Game
---

The following shows the code for the guessing game. Make sure to have a go at implementing this yourself, but you can use this for parts if you get stuck.

```cpp
/*
 * Program: guess-that-number.c
 * This program is an implementation of the "guess that number"
 * game. The computer randomly chooses a number and the player
 * attempts to guess it. (It should never take more than 7 guesses)
 */

#include "splashkit.h"

using std::stoi;
using std::to_string;

const int MAX_NUMBER = 100;
const int MAX_GUESSES = 7;

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
 * Print a line onto the Terminal.
 *
 * @param len the length of the line to print
 */
void print_line(int len)
{
  for (int i = 0; i < len; i++)
  {
    write("-");
  }

  write_line("\n");
}

/**
 * Perform the steps for the guess. Reads the value entered by the user,
 * outputs a message, and then returns true if the got it otherwise it returns
 * false.
 *
 * @param guess_number the sequence number of the guess, this should start at 1
 * @param target the number the user is aiming to guess
 *
 * @return true if the user guesses the number, otherwise false.
 */
bool perform_guess(int guess_number, int target)
{
  int guess;

  guess = read_integer("Guess " + to_string(guess_number) + ": ");

  if (target < guess)
  {
    write_line("The number is less than " + to_string(guess));
  }
  else if (target > guess)
  {
    write_line("The number is larger than " + to_string(guess));
  }
  else
  {
    write_line("Well done... the number was " + to_string(guess));
  }

  return target == guess;
}

/**
 * Implements a simple guessing game. The program generate
 * a random number, and the player tries to guess it.
 */
void play_game()
{
  int my_number, guess_number;
  bool got_it;

  my_number = rnd(MAX_NUMBER) + 1;
  guess_number = 0; // Keep track of the number of guesses

  write_line("I am thinking of a number between 1 and " + to_string(MAX_NUMBER) + "\n");

  do
  {
    guess_number++;
    got_it = perform_guess(guess_number, my_number);
  } while (guess_number < MAX_GUESSES && !got_it);

  if (!got_it)
  {
    write_line("You ran out of guesses... the number was " + to_string(my_number) + "\n");
  }
}

/**
 * Loops the guessing game until the user decided to quite.
*/
int main()
{
  string again = "";

  do
  {
    play_game();

    write_line();
    print_line(50);
    write("Do you want to play again [Y/n]? ");
    again = read_line();
  } while (again != "N" && again != "n");

  write_line("\nBye");
  return 0;
}
```
