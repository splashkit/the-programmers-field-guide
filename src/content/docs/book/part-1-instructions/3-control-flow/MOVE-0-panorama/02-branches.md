---
title: Selection with if
---

Selection, also known as branching, represents one of the control flow mechanisms. This allows you to create a decision that will choose between different paths - selecting which branch of the instructions it will take.

You use selection/branching to add a point in the code where you decide if some code should run or not, or choose between alternate options.

![If example code](./images/if-code.png)

:::note[The if statement...]

- uses the condition to determine which branch to select to run next.
- has one branch to run when the condition is true.
- can optionally have an else branch to run when the condition is false.

:::

:::tip

When you are thinking through your steps, you can now have points where you decide if some code should be run or not. Do this, then do that, then if this is true, do this, otherwise (else) do this other thing, then (after the if) do this next thing.

:::

## Example

The following code uses several if statements to check the data entered.

```c++
#include "splashkit.h"

int main()
{
    string line;
    int value = 0;

    write("Enter a number: ");
    line = read_line();

    // Checks if the Length of the string in line
    // is equal to 0 characters (i.e. is empty)
    if (length_of(line) == 0)
    {
      write_line("You did not enter anything!");
    }

    // Data is valid if the line contains an integer
    bool valid_data = is_integer(line);

    // Add a decision point -- check if validData
    // is true
    if (valid_data)
    {
      // When we have valid data, convert it to a number
      // and store in value
      value = to_integer(line);
    }
    else
    {
      // The code will come through this branch only
      // if the line is not an integer
      write_line("Nice try... that is not a number.");
      value = rnd(1, 1000) - 500;
      write_line("I picked " + to_string(value) + " for you!");
    }

    // Check if value is larger than 100
    if ( value > 100 )
    {
      // Here we know value is > 100
      write_line("That is larger than I thought");
    }
    else
    {
      // here we know value is <= 100
      write_line("Interesting");
    }

    // You can add conditions within the else to have multiple paths
    if (value < 0)
    {
      write_line("A negative number");
    }
    else if (value > 0)
    {
      write_line("A positive number");
    }
    else
    {
      // You only get here if value is not < 0 and
      // value is not > 0...
      // so it is...
      write_line("Zero!");
    }
}
```
