---
title: Change Calculator Revisited
---

In the control flow chapter we looked at designing the change calculator. 

The design for any program should involve thinking about the data as
well as the tasks involved. You can start by dividing the program's
tasks into functions and procedure, and then look at the data that will
be needed by these in order to achieve their tasks.

#### Designing the tasks for the Change Calculator {#ssub:designing_the_tasks_for_the_change_calculator}

Think about the process of calculating change. At the start you need to
determine the amount of change that needs to be given. Next you need to
determine how many of each kind of coin you are going to give. These
steps can be coded into their own functions and procedures. These
functions and procedures are outlined in the following list, and shown
in the structure chart in
Figure [3.16](#fig:simple-change-structure){reference-type="ref"
reference="fig:simple-change-structure"}.

-   `Get Change Value`: This will be responsible for asking the user to
    enter the cost of the item, and the amount paid. It will then
    calculate the amount of change that needs to be given, in cents.

-   `Give Change`: This will be responsible for the calculations related
    to giving one kind of coin as change. This will involve getting the
    number of coins to give, updating the amount of change remaining,
    and outputting the details (for that coin) to the Terminal.

-   `Coins to Give`: This will be responsible for calculating the number
    of coins to give as change, given an amount of change and the value
    of the coin.

![Structure Chart for the Change Calculator](./images/change-calculator-structure-chart.png)

To understand how this is going to work you now need to think about how
the kinds if data these different tasks are going to need.