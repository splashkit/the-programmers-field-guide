---
title: Put Together (Old)
---

<!-- Keeping to check against after finalising drafts of other pages -->

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

Here is the final version of the Change Calculator converted to C/C++. Notice how it is mostly just a change of coding convention.

The change of library means we cannot use C#'s Convert ToInt32 method, but C provides an equivalent called [stoi](https://en.cppreference.com/w/cpp/string/basic_string/stol). This function converts text to an integer

For both of these examples it would be great to do the conversion yourself. This will really help you see how similar the code is. The main thing is to follow the logic - the way you think about this in C# is the same as the way you think about this in C/C++.

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
    while (!is_integer(line))
    {
      write_line("Please enter a whole number.");
      write("Cost of item in cents: ");
      line = read_line();
    }
    int cost_of_item = stoi(line);

    write("Payment in cents: ");
    line = read_line();
    while (!is_integer(line))
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
    else
    {
      write_line("Insufficient payment");
    }

    write("Run again: ");
    again = read_line();
  } while (again != "n" && again != "N");
}
```

Try opening this code next to the C# version - notice how they are almost identical. The logic is identical, just the coding convention for names, and there are some changes due to the functions provided by the languages' libraries.

## Fly Catch

The C/C++ version of the Fly Catch is provided below. This is even closer to the C# version than the change calculator. One difference is how you access the key codes, in C# you used `KeyCode.LeftKey` for example. In C/C++, this becomes just `LEFT_KEY` with syntax more like a constant. We will look at this in a couple of chapters when we review the ways we can organise data.

```cpp
#include "splashkit.h"

int main()
{
  const string GAME_TIMER = "GameTimer";

  const int SCREEN_WIDTH = 800;
  const int SCREEN_HEIGHT = 600;
  const int SPIDER_RADIUS = 25;
  const int SPIDER_SPEED = 3;

  const int FLY_RADIUS = 10;

  // Set the spider in the center of the screen
  int spiderX = SCREEN_WIDTH / 2;
  int spiderY = SCREEN_HEIGHT / 2;

  // Create the fly
  int flyX = rnd(SCREEN_WIDTH), flyY = rnd(SCREEN_HEIGHT);
  bool flyAppeared = false;
  long appearAtTime = 1000 + rnd(2000);
  long escapeAtTime = 0;

  open_window("Flay Catch", SCREEN_WIDTH, SCREEN_HEIGHT);

  create_timer(GAME_TIMER);
  start_timer(GAME_TIMER);

  // The event loop
  while (!quit_requested())
  {
    // Handle Input
    if (key_down(RIGHT_KEY) && spiderX + SPIDER_RADIUS < SCREEN_WIDTH)
    {
      spiderX += SPIDER_SPEED;
    }
    if (key_down(LEFT_KEY) && spiderX - SPIDER_RADIUS > 0)
    {
      spiderX -= SPIDER_SPEED;
    }

    // Update the Game
    // Check if the fly should appear
    if (! flyAppeared && timer_ticks(GAME_TIMER) > appearAtTime)
    {
      // Make the fly appear
      flyAppeared = true;

      // Give it a new random position
      flyX = rnd(SCREEN_WIDTH);
      flyY = rnd(SCREEN_HEIGHT);
      
      // Set its escape time
      escapeAtTime = timer_ticks(GAME_TIMER) + 2000 + rnd(5000);
    }
    else if (flyAppeared && timer_ticks(GAME_TIMER) > escapeAtTime)
    {
      flyAppeared = false;
      appearAtTime = timer_ticks(GAME_TIMER) + 1000 + rnd(2000);
    }

    // Test if the spider and fly are touching
    if (circles_intersect(spiderX, spiderY, SPIDER_RADIUS, flyX, flyY, FLY_RADIUS))
    {
      flyAppeared = false;
      appearAtTime = timer_ticks(GAME_TIMER) + 1000 + rnd(2000);
    }

    // Draw the game
    clear_screen(color_white());
    // Draw the spider
    fill_circle(color_black(), spiderX, spiderY, SPIDER_RADIUS);

    if (flyAppeared)
    {
      // Draw the fly
      fill_circle(color_dark_green(), flyX, flyY, FLY_RADIUS);
    }

    // Show it to  the user
    refresh_screen(60);

    // Get any new user interactions
    process_events();
  }
}
```

Use these if you get stuck converting this code yourself. Make sure that you have things working before you move on to the next chapter. You should feel confident that your understanding of sequence, data, and control flow applies equally to C/C++ as it did in C#.
