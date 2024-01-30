---
title: "Statement"
---

Statements are the instructions that we can get the computer to perform. Now that we have added the control flow statements, we have a whole range of different things we can get the computer to do.

Hopefully these seem like very simple actions, and you may be thinking "Surely programs are made of more complex things?". But that is not the case. Individual instructions are very simple. Once you know how they work, you need to practice combining these in different ways to help achieve your goals.

:::tip

Remember. The computer is **unintelligent**. So none of the actions it performs can be complex. It achieves things by doing millions of tiny, insignificant, actions every second.

:::

## Statements - Why, When, and How?

We have already seen that a program, and a compound statement, is a list of statments (instructions) and that the if, case, while, do while, and for loop stataments can also contain statements (the ones they choose between).

The great thing to see now is that you can **combine** these in lots of different ways. An if statement can contain a while loop, that contains a case statement. Anywhere you can put a statement, you can now **choose** between any of these different statements to create a sequence of actions that get the computer to do what you want.

## In C#

:::tip[Syntax]
The following shows the list of things we have seen so far that can exist as statements.

![Syntax for statement, showing a list of options made up of the simple and control flow statements we have seen.](./images/statement-with-control-flow.png)

:::

:::note

- Statement is the **term** given to the instructions in code.
- **Simple Statements** that perform an action. The actions you can perform are:
  - [Method Call](../../../1-sequence-and-data/1-concepts/03-method-call) used to run the code in a Procedure.
  - [Assignment Statement](../../../1-sequence-and-data/1-concepts/08-assignment-statement) used to calculate a value and store it in a Variable.
  - [Jump Statements](../04-jumping) allow you to affect which instruction will be performed next.
  This includes:
    - [Break](../04-jumping#break): to jump out of a Looping Statement.
    - [Continue](../04-jumping#continue): jumps to the condition in a Looping Statement.
    - [Exit](../04-jumping#exit): (return in C) to end the current Function or Procedure.
    - [Goto](../04-jumping#goto): the unstructured jump<sup>[1](#FootnoteRaptor)</sup> to an arbitrary location in the code.
- **Structured Statements** contain statements and control the flow of execution:
  - [Looping Statements](../03-looping): that repeat a statement a number of times.
    - [While Loop](../04-1-while-loop): Test condition before the body, repeating **0 to many** times.
    - [Do While Loop](./04-2-do-while.mdx): Test condition after the body, repeating **1 to many** times.
    - [For Loop](../04-3-for-loop): A variation of the while designed to perform a counting loop.
  - [Branching](../02-branching): that select from a number of optional statements.
    - [If Statement](../02-branching#if-statement): Branch based on a Boolean Data Expression (2 paths).
    - [Case Statement](../02-branching#case-statement): Branch based on an Ordinal Expression (n paths).
<hr class="footnote">
<div id="FootnoteRaptor" class="footnote"><sup>1</sup>Often resulting in death by raptor</div>
:::