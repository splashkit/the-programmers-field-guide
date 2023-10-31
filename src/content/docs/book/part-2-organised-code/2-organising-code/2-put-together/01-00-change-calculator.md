---
title: Change Calculator Revisited
---

In the [control flow chapter](../../../../part-1-instructions/3-control-flow/0-overview) we looked at designing the [change calculator](../../../../part-1-instructions/3-control-flow/2-put-together/01-0-change-calculator). As part of this, we looked to remove duplication of logic. We can revisit this now that we have new ways of organising our code. We can now have two objectives: (1) review duplication and see what else we can refine, (2) review the structure to see if we can simplify the code further.

## Removing Duplication

In the control flow chapter we were able to use loops and branches to organise parts of the logic. However, there was still some duplicated code that we could not address. The main duplicated logic occurs where we read in values from the user, and this can now be fixed by creating a function.

## Organising Tasks

Now that we have functions and procedures, we should also aim to break the logic of the program down into smaller pieces each with a specific purpose and role. For this part we can review what we have so far and see if we can organise it into smaller parts.
