---
title: Revised Change Calculator
---

For our first project, lets revisit and enhance the change calculator. The [original version](../../../1-sequence-and-data/2-put-together/01-00-change-calculator) used sequence and data, but did not take advantage of control flow. Hopefully your testing identified some issues with this program's code -- control flow can help us address these now.

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
                (toGive = changeValue / 200)
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
