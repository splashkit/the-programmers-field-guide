---
title: "Statement"
---

Statements are instructions that we can get the computer to perform. Now that we have added control flow statements to our tool kit we have a whole range of different things we can get the computer to do.

Hopefully these seem like very simple actions, and you may even be thinking "Surely programs are made of more complex things?". The answer is no! Individual instructions are very simple. Once you know how they work, you need to practice combining them in different ways to help achieve your goals.

:::tip
Remember. The computer is **unintelligent**, so none of the actions it performs can be complex. It achieves things by doing millions of tiny, insignificant, actions every second.
:::

## Statements -- when, why, and how?

We have already seen that a [program](/book/part-1-instructions/1-sequence-and-data/2-trailside/00-program) is just a list of statements, as is a [compound statement](/book/part-1-instructions/3-control-flow/2-trailside/02-0-compound-statement).
[If](/book/part-1-instructions/3-control-flow/2-trailside/03-1-if), [case](/book/part-1-instructions/3-control-flow/2-trailside/03-2-case), [while](/book/part-1-instructions/3-control-flow/2-trailside/04-1-while-loop), [do while](/book/part-1-instructions/3-control-flow/2-trailside/04-2-do-while), and [for](/book/part-1-instructions/3-control-flow/2-trailside/04-3-for-loop) loop statements also contain statements, which are only run under certain conditions.

The great thing to see now is that you can **combine** these in lots of different ways. An `if` statement can contain a `while` loop, that contains a `case` statement. Anywhere you can put a statement, you can now choose between any of these different statements to create a sequence of actions that get the computer to do what you want.

## In C#

:::tip[Syntax]
The following diagram shows the list of things we have seen so far that can exist as statements.

![Syntax for statement, showing a list of options made up of the simple and control flow statements we have seen.](./images/statement-with-control-flow.png)

:::

:::note[Summary]

- A statement is a single instruction in code.
- **Simple Statements** that perform an action. The actions you can perform are:
  - [Method Call](/book/part-1-instructions/1-sequence-and-data/2-trailside/03-method-call): run the code in a method.
  - [Assignment Statement](/book/part-1-instructions/1-sequence-and-data/2-trailside/08-assignment-statement): store a value in a variable.
  - [Jump Statements](/book/part-1-instructions/3-control-flow/2-trailside/05-0-jumping): alter which instruction will be performed next.
  This includes:
    - [Break](/book/part-1-instructions/3-control-flow/2-trailside/05-1-break): jump out of a looping statement.
    - [Continue](/book/part-1-instructions/3-control-flow/2-trailside/05-2-continue): jump to the condition in a looping statement.
    - [Goto](/book/part-1-instructions/3-control-flow/2-trailside/05-3-goto): jump<sup>[1](#FootnoteRaptor)</sup> to an arbitrary location in the code.
- **Structured Statements** contain statements and control the flow of execution:
  - [Looping Statements](/book/part-1-instructions/3-control-flow/2-trailside/04-0-looping): repeat a statement a number of times.
    - [While Loop](/book/part-1-instructions/3-control-flow/2-trailside/04-1-while-loop): test condition **before** the body, repeating **0 to many** times.
    - [Do While Loop](/book/part-1-instructions/3-control-flow/2-trailside/04-2-do-while): test condition **after** the body, repeating **1 to many** times.
    - [For Loop](/book/part-1-instructions/3-control-flow/2-trailside/04-3-for-loop): a variation of the while designed to perform a counting loop.
  - [Branching](/book/part-1-instructions/3-control-flow/2-trailside/03-0-branching): select from a number of optional statements.
    - [If Statement](/book/part-1-instructions/3-control-flow/2-trailside/03-1-if): branch based on a boolean expression (2 paths).
    - [Case Statement](/book/part-1-instructions/3-control-flow/2-trailside/03-2-case): branch based on the value of an expression (n paths).

<hr class="footnote">
<div id="FootnoteRaptor" class="footnote"><sup>1</sup>Often resulting in death by raptor</div>
:::
