---
title: Task Division
sidebar:
  label: " - Task Division"
---

Other than the `read_integer` function, the code in the change calculator really only has two main actions. We have the overall process of reading the cost and amount paid, and we have giving change. So we can split the code into these two parts. It will help more clearly show these parts, and will allow us to work within a smaller procedure.

## Give Change

The give change logic is coded within an if statement in main at the moment. This code can be cut and pasted into its own procedure. You will need to move the constants either into the procedure, or globally and above the procedure so that they are available to this code.

This procedure can now take care of giving change, when change needs to be given. This means we do not have all the other code here, just the code to give change, The code for the "again" loop, the code to read in the details, and the test to see if change needs to be given remain in main. Now both main and give change have a clear, and more specific, purpose.

```
Procedure: Give Change
Parameters:
    Change Value: an integer with the amount of change to give
Constants:
  NUM_COIN_TYPES = 6

  TWO_DOLLARS = 200
  ONE_DOLLAR = 100
  FIFTY_CENTS = 50
  TWENTY_CENTS = 20
  TEN_CENTS = 10
  FIVE_CENTS = 5
Steps:
    for each kind of coin (i loops 0 < 6)
        Switch based on i
            when 0, coinValue is 200, and coinText is "$2"
            when 1, coinValue is 100, and coinText is "$1"
            when 2, coinValue is 50, and coinText is "50c"
            when 3, coinValue is 20, and coinText is "20c"
            when 4, coinValue is 10, and coinText is "10c"
            when 5, coinValue is 5, and coinText is "5c"

        Calculate the number of coins to give using the coinValue.
        Update the amount of change remaing
        Output the number of coins with the coinText
```

## Main Code

The code inside main can now focus on the overall process: get the details from the user, give change if needed, and repeat if needed. The logic for this is shown below. It is relatively straightforward now that the change calculations are moved out.

```plaintext
Variables:
  cost of item - integer
  amount paid - integer
  again - string (initialise to "")

Steps:

  Do
    Get the details from the user - cost of item and amount paid
    
    If amount paid >= cost of Item
        Give change
    Else
        Output an error message
    
    Ask the user if they want to run again
    Read string from user into again
  While (again != "N" and again != "n")
```

Have a go at adjusting this code yourself. Move the change calculating code out of main into a `give_change` procedure. You will also need to move the constants up to that procedure, or make them global.

:::tip[Summary]

Moving the code into a separate procedure helps to make it, and the remaining code in main, clearer. Main in particular is much simpler now. The code in give change is still a bit complex, and we can return to this later to see if we can refine it further.

:::

Remember you can check out our version of the code in the [wrap up](/book/part-2-organised-code/2-organising-code/5-wrap-up/1-change-calc).
