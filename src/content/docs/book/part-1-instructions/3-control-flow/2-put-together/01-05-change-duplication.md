---
title: Removing Duplication
sidebar:
  label: " - Removing Duplication"
---

Our original programs require lots of duplication, as any repeated action needed to be coded in the sequence we were creating. Control flow has opened up the possibilities to start moving away from explicit instructions for each action, to more general or abstract instructions that utilise data to adjust the way they work.

This will be a common theme as we go forward. In order to create more interesting programs, we need to start using data together with the control flow statements. By doing this you can then change the data, and the processing should work with the new context.

For example, the change calculator currently works with Australian currency. If we could move this to pure data, then we could shift to American currency by just changing the data that informs this control flow.

In this section, we can start this work, but some additional features we will see later can help us progress this further.

:::tip[Refactoring]

The changes we are about to make are designed to improve the way the code is written, rather than adding new functionality. In software development this process is called **refactoring**.

:::

## Identifying duplication and changing data

Any time you see duplicated code this is an opportunity for *refactoring*. In the change calculator there are a couple of places where we have duplication.

- The handling of user input
- The calculation for giving each coin

Our code for handling user input uses the same process, but stores the data in different variables and has different messages that are being provided. Control flow statements alone aren't going to be sufficient for us to consolidate the way this works, so we will have to leave this for the moment and come back to it in another chapter where we look at how we can [organise our code](../../../../part-2-organised-code/2-organising-code/0-overview).

Calculating and outputting the coins, however, looks like something that we could refactor with the current tools we have. The objectives of this is not to reduce the amount of code, but to consolidate the calculations and to empower the data to help drive what happens.

:::tip

Empowering data allows you to create efficient and powerful software. Learning to start making these changes now will help you see the possibilities here. This is all about starting to raise the level of **abstraction**, starting to build more comprehensive digital realities.

:::

### Giving Change

In order to perform this refactoring we need to identify the steps we are currently performing, and the data that is changing in these. Let's quickly look over the pseudocode for this program to help identify these actions and the changing data.

```
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

The changing data in this will be the **value** of the coin and the **text** that is used when this is output. For example, with the 20c coin we need to know the value of the coin is 20 and the text is "20c". The steps can then be refactored to utilise this, as demonstrated in the following pseudocode.

```
  Calculate the number of coins to give using the coinValue.
  Update the amount of change remaing
  Output the number of coins with the coin text
```

This can be implemented in C# as shown below.

```csharp
  // Calculate the number of coins to give using the coinValue.
  toGive = changeValue / coinValue;

  // Update the amount of change remaing
  changeValue = changeValue - toGive * coinValue;

  // Output the number of coins with the coin text
  Write($"{toGive} x {coinText}");
```

Notice this has moved away from the specific coin, and allows us to work with any coin value. Here we are using the `coinValue` and the `coinText` to allow this to work for any coin. 

Now we can **repeat** this once for each coin, which will require us to think about this logic. We can use a [for loop](../../1-concepts/04-3-for-loop) to achieve this, as there is a set number of coins that we need to iterate through. This gives us the following structure:

```
  for each kind of coin
    ...
    Calculate the number of coins to give using the coinValue.
    Update the amount of change remaing
    Output the number of coins with the coin text
```

To create the loop, we need a condition that we can check to determine when the loop ends. This is where we can create a new constant to record the number of coins we need to give change for. We can then loop from 0, *while* the control variable (we will use `i`) is less than that number.

The code for this is shown below.

```csharp
const int NUM_COIN_TYPES = 6;
// ...

for(int i = 0; i < NUM_COIN_TYPES; i++)
//...
```


