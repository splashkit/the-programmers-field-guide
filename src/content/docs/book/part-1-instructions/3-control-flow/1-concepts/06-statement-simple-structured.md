---
title: "Statement (Simple and Structured)"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Statement (Simple and Structured)

Statements are the actions that we can get the computer to perform.

<a id="FigureStatementSimpleAndStructured"></a>

![Figure x.y: A Statement may also be a Looping or Jumping Statement](./images/statement-simple-and-structured.png "A Statement may also be a Looping or Jumping Statement")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>A Statement may also be a Looping or Jumping Statement</div><br/>

:::note

- Statement is the **term** given to the instructions in code.
- **Simple Statements** that perform an action. The actions you can perform are:
  - [Method Call](../../../1-sequence-and-data/1-concepts/03-method-call) used to run the code in a Procedure.
  - [Assignment Statement](#) used to calculate a value and store it in a Variable.
  - [Jump Statements](../04-jumping) allow you to affect which instruction will be performed next.
  This includes:
    - [Break](../04-jumping#break): to jump out of a Looping Statement.
    - [Continue](../04-jumping#continue): jumps to the condition in a Looping Statement.
    - [Exit](../04-jumping#exit): (return in C) to end the current Function or Procedure.
    - [Goto](../04-jumping#goto): the unstructured jump<sup>[1](#FootnoteRaptor)</sup> to an arbitrary location in the code.
- **Structured Statements** contain statements and control the flow of execution:
  - [Looping Statements](../03-looping): that repeat a statement a number of times.
    - [Pre-Test Loop](../03-looping#pre-test-loop): Test condition before the body, repeating **0 to many** times.
    - [Post-Test Loop](../03-looping#post-test-loop): Test condition after the body, repeating **1 to many** times.
  - [Branching](../02-branching): that select from a number of optional statements.
    - [If Statement](../02-branching#if-statement): Branch based on a Boolean Data Expression (2 paths).
    - [Case Statement](../02-branching#case-statement): Branch based on an Ordinal Expression (n paths).
<hr class="footnote">
<div id="FootnoteRaptor" class="footnote"><sup>1</sup>Often resulting in death by raptor</div>
:::