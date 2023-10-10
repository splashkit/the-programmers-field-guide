---
title: Loop Giving CHange
sidebar:
  label: " - Loop Giving CHange"
---

Our first change is to add the ability for the user to calculate and give multiple lots of change by **repeating** the steps within the program.

Reviewing the control flow concepts, this can be achieved using a loop. We have the choice between a pre-test or post-test loop. Given that we want to run this at least once, the post-test loop would be appropriate (though we could use a pre-test loop).

Thinking in blocks means that you can work through this control flow without having to keep all the details in mind. The following flowchart shows the additions that we can make to realise this step. The changes will need a loop that will wrap the existing code, allowing these instructions to be run while the user has chosen to run this again.

![Flowchart showing a block within a do while that is checking if the user wants to run again.](./images/change-calc-2-loop.png)

With this plan, we can consider what additional variables and constants we need to achieve this. In this case, we need some way to capture if the user wants to run the 