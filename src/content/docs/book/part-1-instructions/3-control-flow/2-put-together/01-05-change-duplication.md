---
title: Removing Duplication
sidebar:
  label: " - Removing Duplication"
---

Our original program required lots of duplication, as any repeated action needed to be coded in the sequence we were creating. Control flow has opened up the possibilities to start moving away from explicit instructions for each action, to more general or abstract instructions that utilise data to adjust the way they work.

This will be a common theme as we go forward. In order to create more interesting programs, we need to start using data together with the control flow statements. By doing this you can then change the data, and the processing should work with the new context.

For example, the change calculator currently works with Australian currency. If we could move this to pure data, then we could shift to American currency by just changing the data that informs this control flow.

In this section we can start this work, but some additional programming tools we will gather later on will us progress this further.

:::tip[Refactoring]
The changes we are about to make are designed to improve the way the code is written, rather than adding new functionality. In software development this process is called **refactoring**.
:::

## Identifying duplication and changing data

Any time you see duplicated code this is an opportunity for *refactoring*. In the change calculator there are a couple of places where we have duplication.

- The handling of user input.
- The calculation for giving each coin.

Our code for handling user input uses the same process, but stores the data in different variables and has different messages that are being provided. Control flow statements alone aren't going to be sufficient for us to consolidate the way this works, so we will have to leave this for the moment and come back to it in another chapter where we look at how we can [organise our code](../../../../part-2-organised-code/2-organising-code/0-overview).

Calculating and outputting the coins, however, looks like something that we could refactor with the current tools we have. The objective of this is not to reduce the amount of code, but to consolidate the calculations and to empower the data to help drive what happens.

:::tip
Empowering data allows you to create efficient and powerful software. Learning to start making these changes now will help you see the possibilities here. This is all about starting to raise the level of **abstraction**, and building more comprehensive digital realities.
:::

### Giving Change

In order to perform this refactoring we need to identify the steps we are currently performing, and the data that is changing in them. Let's quickly look over the pseudocode for this program to help identify these actions and the changing data.

```txt
Give $2 coins
    Calculate the number of $2 coins to give (changeValue / 200)
    Update the amount of change remaining to give
    Output the number of $2

Give $1 coins
    Calculate the number of $1 coins to give
    Update the amount of change remaining to give
    Output the number of $1

Give 50c coins
    Calculate the number of 50c coins to give
    Update the amount of change remaining to give
    Output the number of 50c

Give 20c coins
    Calculate the number of 20c coins to give
    Update the amount of change remaining to give
    Output the number of 20c

Give 10c coins
    Calculate the number of 10c coins to give
    Update the amount of change remaining to give
    Output the number of 10c

Give 5c coins
    Calculate the number of 5c coins to give
    Update the amount of change remaining to give
    Output the number of 5c
```

The changing data in this will be the **value** of the coin and the **text** that is used when this is output. For example, with the 20c coin we need to know the value of the coin is 20 and the text is "20c". The steps can be refactored to utilise this, as demonstrated in the following pseudocode.

```txt
Calculate the number of coins to give using the coinValue.
Update the amount of change remaing
Output the number of coins with the coin text
```

This can be implemented in C# using variables as:

```csharp
// Calculate the number of coins to give using the coinValue.
toGive = changeValue / coinValue;

// Update the amount of change remaing
changeValue = changeValue - toGive * coinValue;

// Output the number of coins with the coin text
Write($"{toGive} x {coinText}");
```

Notice this has moved away from mentioning any specific coin or literal value, and allows us to work with any coin value by using `coinValue` and `coinText` variables.

Now we can **repeat** this once for each coin, which will require us to think about this logic. We can use a [for loop](../../1-concepts/04-3-for-loop) to achieve this, as there is a set number of coins that we need to iterate through. This gives us the following pseudocode:

```txt
  for each kind of coin
    ...
    Calculate the number of coins to give using the coinValue.
    Update the amount of change remaing
    Output the number of coins with the coinText
```

To create the loop, we need a condition that we can check to determine when the loop ends. This is where we can create a new constant to record the number of coins we need to give change for. We can then loop from 0, *while* the control variable (we will use `i`) is less than that number.

The code for this is shown below.

```csharp
const int NUM_COIN_TYPES = 6;
// ...

for(int i = 0; i < NUM_COIN_TYPES; i++)
//...
```

:::tip
You can read a for loop as "for [initializer] while [condition], then [increment]" (at the end of each loop). So this for loop is:

for i = 0; **while** i < NUM_COIN_TYPE; **then** i++
:::

Within the loop, we need to set the values for `coinValue` and `coinText`. For the moment, we can use the control variable `i` to determine which values to use. When `i` is 0, we need to use $2, when it is 1 we need to use $1, and so on.

This is a great example of where we can use a [case statement](../../1-concepts/03-2-case). The following pseudocode shows how this might look:

```txt
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

## New Pseudocode

Putting this all together, we now have the following pseudocode. As you read through this, try to see how the parts are connected. See how data set in one part is used elsewhere, and how the instructions use this data to achieve the result we need.

```
Constants:
    NUM_COIN_TYPES = 6

    TWO_DOLLARS = 200
    ONE_DOLLAR = 100
    FIFTY_CENTS = 50
    TWENTY_CENTS = 20
    TEN_CENTS = 10
    FIVE_CENTS = 5

Variables:
    costOfItem - integer
    amountPaid - integer
    changeValue - integer
    toGive - integer
    again - string (initialise to "")

    coinValue - integer
    coinText - string
    line - string

Steps:

    Do
        Ask the user to enter the cost in cents
        Store their response in line

        While line is not an integer
            Output a message asking for whole numbers only
            Ask the user to enter the cost in cents
            Store their response in line

        Convert line to Int32 and store in costOfItem

        Ask the user to enter the payment in cents
        Store their response in line

        While line is not an integer
            Output a message asking for whole numbers only
            Ask the user to enter the payment in cents
            Store their response in line

        Convert line to Int32 and store in amountPaid
        
        If amountPaid >= Cost Of Item    
            Calculate the amount of change to provide 

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
        else
           Output an error message

        Ask the user if they want to run again
        Read string from user into again
    While (again != "N" and again != "n")
```

Adjust your code to incorporate the new structure. Then test it with different amounts of change to make sure it works as expected. Run it through the [debugger](../../../../part-0-getting-started/3-building-programs/1-concepts/04-debug) to help consolidate your understanding of how it works. Remember you can also use this to help fix any logic issues you have once you sort out any syntax errors.

What we have created ends up being more code, but it is much more flexible.
There is still duplication in this, but with some more programming tools we can improve it further. We are now getting to a point where the amount of code is getting too much to manage in this way, and we need more effective means of managing data within the program. This will be the focus of [Part 2](../../../../part-2-organised-code/00-part-2-programs-as-organised-code), where we will look at [structuring code](../../../../part-2-organised-code/2-organising-code/0-overview), [structuring data](../../../../part-2-organised-code/3-structuring-data/0-overview), and [managing multiples](../../../../part-2-organised-code/5-working-with-multiples/0-overview).

:::tip
Make sure that you understand how this works before progressing. The upcoming concepts will help you manage your code, but you still need to be able to work with the logic as we are here.

Think through this code yourself. Try explaining code to others. Once you can see how code like this works, it will all start to click.

Keep at it. Remember the computer is unintelligent, and all of these instructions work the same each time.
:::
