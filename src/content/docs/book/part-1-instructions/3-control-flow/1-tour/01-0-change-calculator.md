---
title: Revised Change Calculator
---

For our first project, let's build a change calculator.

This program will perform the steps to calculate the ideal change to give for a purchase. For example, for $6.50 in change it should give you three $2 coins and one 50c coin.

```txt title="Terminal output example (not code)"
Cost of item (in cents): 15
Amount paid (in cents): 500
Change: 2 x $2, 0 x $1, 1 x 50c, 1 x 20c, 1 x 10c, 1 x 5c

Run again? Y/n: Y
Cost of item (in cents): 150
Amount paid (in cents): 250
Change: 0 x $2, 1 x $1, 0 x 50c, 0 x 20c, 0 x 10c, 0 x 5c

Run again? Y/n: Y
Cost of item (in cents): 175 
Amount paid (in cents): 200
Change: 0 x $2, 0 x $1, 0 x 50c, 1 x 20c, 0 x 10c, 1 x 5c

Run again? Y/n: n
```

New requirements:

- Allow the user to give change multiple times
- Ensure that the program does not crash when the user enters unexpected text for the cost or payment.
- Do not calculate change if the payment is insufficient.

To get started, lets refresh our memory on the structure of the change calculator program. The following was the pseudocode that we used to create the program. Read over this to refresh your memory, and see if you can identify a few opportunities to make use of control flow.

:::tip
Duplicated code is always a good place to look to make changes. Control flow can help here in some cases. Are there any cases where code is repeated in the change calculator? Can we somehow convert these to a loop with some extra variables to help track the changing values?
:::

```plaintext
Constants:
    TWO_DOLLARS = 200;
    ONE_DOLLAR = 100;
    FIFTY_CENTS = 50;
    TWENTY_CENTS = 20;
    TEN_CENTS = 10;
    FIVE_CENTS = 5;

Variables:
    costOfItem - integer
    amountPaid - integer
    changeValue - integer
    toGive - integer

Steps:

    Get the details from the user.
        Get the cost (store in costOfItem)
        Get the amount paid (store in amountPaid)
    Calculate the amount of change to provide
        (changeValue = amountPaid - costOfItem)
    Give change
        Give $2 coins
            Calculate the number of $2 coins to give
                (toGive = changeValue / TWO_DOLLARS)
            Update the amount of change remaining to give
                (changeValue = changeValue - toGive * TWO_DOLLARS;)
            Output the number of $2 coins to give - using Write

        Give $1 coins (as with $2 above but with ONE_DOLLAR)
            Calculate the number of $1 coins to give
            Update the amount of change remaining to give
            Output the number of $1 coins to give - using Write

        Give 50c coins (...)
            Calculate the number of 50c coins to give
            Update the amount of change remaining to give
            Output the number of 50c coins to give - using Write

        Give 20c coins
            Calculate the number of 20c coins to give
            Update the amount of change remaining to give
            Output the number of 20c coins to give - using Write

        Give 10c coins
            Calculate the number of 10c coins to give
            Update the amount of change remaining to give
            Output the number of 10c coins to give - using Write

        Give 5c coins
            Calculate the number of 5c coins to give
            Update the amount of change remaining to give
            Output the number of 5c coins to give - using Write
```

## Iterations

Rather than trying to make one big change to this program, we can plan this out as a number of small iterations.

1. Allow it to run multiple times.
2. Add validations.
3. Avoid duplication in calculating and giving change.

That is the initial plan, which we can update as we go.
