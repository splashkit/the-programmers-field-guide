---
title: Initial Design
sidebar:
    label: " - Initial Design"
---

:::note
Your goal in this stage is to come up with an idea for the [sequence](../../1-concepts/01-sequence) of instructions needed to achieve our goal.
:::

Put yourself in the place of the computer. You (as the computer) need to calculate and output these change values. Remember the computer is **unintelligent**. You cannot rely upon your knowledge, or remember anything that is not stored in a variable or constant. Try to think about the information you are using and the steps you are performing to make sure you can capture what needs to be done in your code.

This is another example of **computational thinking**. It is all about breaking ideas down into the small steps that the computer can perform. Outside of programming, these skills will help you become better at planning and thinking through tasks in a methodical manner.

If we are going to build this as a program, we need to carefully think through the process of calculating change:

> First you need to determine the amount of change that needs to be given. Then you need to determine how many of each kind of coin you are going to give.

The main steps will need to be:

1. Determine how much change to give.
    * Get the cost.
    * Get the amount paid.
    * Calculate the amount of change to provide.
2. Give change.

Getting the cost and the amount paid can be done by asking the user.
Then, calculating the amount of change needed is a simple expression (the amount paid minus the cost).
The tricky part is step two, so we need to break down "give change" into individual steps.

### Breaking steps down

At a high level, we need to work out how many of each coin to give. The secret is to realise that we need to start with the coin with the largest value, and then work down from there. By starting with the largest value, we make sure that we remove the largest amount from the change value each time. Using this approach with the $6.50 example, we remove 3 x $2 first, leaving 50c remaining. If we had started with 5c first, we would have given 130 5c coins!

The number of coins to give out can be calculated by dividing the amount of change to be given by the value of the current coin. Then, reduce the amount of change that remains to be given.

So, the steps to give change will be:

* Give $2 coins:
  * Calculate the number of $2 coins to give.
  * Update the amount of change remaining to give.
  * Output the number of $2 coins to give.
* Give $1 coins:
  * Calculate the number of $1 coins to give.
  * Update the amount of change remaining to give.
  * Output the number of $1 to give.
* Give 50c coins:
  * Calculate the number of 50c coins to give.
  * Update the amount of change remaining to give.
  * Output the number of 50c to give.
* Give 20c coins:
  * Calculate the number of 20c coins to give.
  * Update the amount of change remaining to give.
  * Output the number of 20c to give.
* Give 10c coins:
  * Calculate the number of 10c coins to give.
  * Update the amount of change remaining to give.
  * Output the number of 10c to give.
* Give 5c coins:
  * Calculate the number of 5c coins to give.
  * Update the amount of change remaining to give.
  * Output the number of 5c to give.

## Pseudocode

At this point, we can capture our ideas in structured text that we can later convert to code. This structured text is known as **pseudocode** - as it is not really code.

:::tip[Andrew's Tip]
Pseudocode is not our goal, but can be useful to communicate ideas. Here I am able to use this to try to communicate how I am thinking about this program and how it will work. I don't think code, instead I think in structured steps that we can later convert to code.
:::

We can capture the above as the initial **pseudocode** for the change calculator.
To keep things simple, we will keep all of our calculations in cents.

:::caution[Integer Division]
Remember that [when you do division between two integers, you get an integer](../../../1-sequence-and-data/1-concepts/06-type#example). So 650 / 200 is 3.
This "trick" is what makes our change calculator work.
If you used the `double` data type, then you will get fractions of coins which will not help.
:::

```txt
Get the details from the user
    Get the cost
    Get the amount paid

Calculate the amount of change needed

Give change
    Give $2 coins
        Calculate the number of $2 coins to give 
            (to give = amount of change needed / 200)
        Update the amount of change remaining to give
        Output the number of $2

    Give $1 coins
        Calculate the number of $1 coins to give
            (amount of change needed / 100)
        Update the amount of change remaining to give
        Output the number of $1

    Give 50c coins
        Calculate the number of 50c coins to give
            (amount of change needed / 50)
        Update the amount of change remaining to give
        Output the number of 50c

    Give 20c coins
        Calculate the number of 20c coins to give
            (amount of change needed / 20)
        Update the amount of change remaining to give
        Output the number of 20c

    Give 10c coins
        Calculate the number of 10c coins to give
            (amount of change needed / 10)
        Update the amount of change remaining to give
        Output the number of 10c

    Give 5c coins
        Calculate the number of 5c coins to give
            (amount of change needed / 5)
        Update the amount of change remaining to give
        Output the number of 5c
```

:::tip[Detail is key]
Notice the steps are small and require no interpretation. You are on the right track when you can list the instructions in this kind of detail.
:::

Now that we have a sequence of instructions, we need to think about how the different programming tools we can use to bring these steps to life within our program.
