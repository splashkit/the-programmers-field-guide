---
title: Loop Giving CHange
sidebar:
  label: " - Loop Giving Change"
---

Our first change is to add the ability for the user to calculate and give multiple lots of change by **repeating** the steps within the program.

Reviewing the control flow concepts, this can be achieved using a loop. We have the choice between a pre-test or post-test loop. Given that we want to run this at least once, the post-test loop would be appropriate (though we could make it work with a pre-test loop).

Thinking in blocks means that you can work through this control flow without having to keep all the details in mind. For example, in the following flowchart we abstract the entire original program to a single block to see how it will fit with the addition of control flow. The changes will need a loop that wraps existing code, allowing these instructions to be run while the user still wants to calculate more change values.

![Flowchart showing a block within a do while that is checking if the user wants to run again.](./images/change-calc-2-loop.png)

With this plan, we can consider what additional variables and constants we would need. In this case, we need some way to capture if the user wants to run the program again. This will be a **variable** that is updated with what the user enters. There are a number of ways we could do this, but the simplest may be just to ask them to enter "Y" or "N" to say if they want to run again. To do this we could add a variable `again` which captures a string value, and we can loop while it does not equal "N" or "n".

:::tip
While you might be thinking the condition for this loop needs to be "repeat while again does not equal 'N' **or** 'n'", in code you would actually need to use `again != "N" && again != "n"`. Otherwise, the condition will always be true, because if `again` is 'N' then `again != "n"` will be true and vice versa. This is a good reminder that how you would describe a condition in English does not always map to how it needs to be written in code.
:::

Thinking through this with the code we have already created, we can position the start of the loop after the variable and constant declarations, and before we read in any data from the user. There is no need to re-create these variables each time, so they can go before the loop.

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
    again - string (initialise to "")

Steps:

  Do
      Get the details from the user.
      Calculate the amount of change to provide 
      Give change
        
      Ask the user if they want to run again
      Read string from user into again
  While (again != "N" and again != "n")
```

Notice how we can combine the blocks, nesting the existing algorithm within the new loop that we add.

Go ahead and try implementing this. Match up the location of the `do while` loop, and use the examples to help you with the syntax. Compile, run, and test. Make sure that you can loop multiple times, and exit when you want.

:::tip
Make sure that you nest the existing code within the loop as a [compound statement](../../1-concepts/02-0-compound-statement). Once you code the loop you can select the existing code in Visual Studio Code and press *tab* to indent it all one level further. You can also right-click and select "Format Document" to help with code layout.
:::
