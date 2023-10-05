---
title: "Looping"
---

There are two main ways of controlling the sequence of actions in a program: **branching**, which we have just explored, and **looping** or **repetition**. The language's looping statements allow you to jump back and repeat instructions that have already been performed. Different statements let you loop 0 to many or 1 to many times.

<a id="FigureLooping"></a>

![Figure x.y: Looping commands the computer to repeat a path](./images/looping.png "Looping commands the computer to repeat a path")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>Looping commands the computer to repeat a path</div><br/>

As with the branching statements, one important aspect is that these looping statements can fit within a sequence. They each have a single entry and an exit point, thereby allowing us to embed them within the overall sequence that occurs within the program.

:::note

- Looping statements are all kinds of **instruction**. You can command the computer to repeat the steps within a given path.
- Several steps are performed in each loop:
  - The instructions within the loop are executed.
  - The *condition* is checked, and the instructions are either run again or the loop ends.
- The *condition* may be checked **before** or **after** the instructions are executed, giving two kinds of loops:
  - [Pre-Test Loop](#pre-test-loop): Repeats instructions 0 or more times.
  - [Post-Test Loop](#post-test-loop): Repeats instructions 1 or more times.
- As with [branching](../03-0-branching), the looping statements have a single entry and a single exit in keeping with the principles of **structured programming**.
- These use the same jump mechanism at a lower level, but allow you to create loops that repeat given steps.

:::

## Pre-Test Loop

The pre-test loop is a looping statement that allows code to be run 0 or times. The loop checks the condition at the start, and if the condition is True the loop's body is executed. At the end of the loop's body the computer jumps back to the condition, checking it again to determine if the loop's body should execute again. If the condition is False when it is checked the loop jumps ends, and the control jumps to the next statement in the code.

<a id="FigurePreTestLoop"></a>

![Figure x.y: The Pre-Test Loop checks the condition, then runs the loop’s body](./images/loop-pre-test.png "The Pre-Test Loop checks the condition, then runs the loop’s body")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>The Pre-Test Loop checks the condition, then runs the loop’s body</div><br/>

:::note

- A pre-test loop is an **instruction** that creates a loop in the code’s sequence.
- The standard pre-test loop is the **while statement**.
- A pre-test loop allows instructions to be run 0 or more times.
- The condition is checked when the loop’s code is entered, and it is checked again at the end of each loop.
- This is achieved in C# using a [while](../04-1-while-loop) or [for](../04-3-for-loop) loop.

:::

## Post-Test Loop

The post-test loop is a looping statement that allows code to be run 1 or times. The post-test loop places the condition after the body of the loop. This means that the first time through the body of the loop must
execute before the condition is checked. When it gets to the end of the body, the loop's condition is checked and the computer either jumps back to the start of the loop to repeat the body, or the loop ends and control flows to the next statement in the code.

<a id="FigurePostTestLoop"></a>

![Figure x.y: The Post-Test Loop runs the loops body, then checks the condition](./images/loop-post-test.png "The Post-Test Loop runs the loops body, then checks the condition")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>The Post-Test Loop runs the loops body, then checks the condition</div><br/>

:::note

- A post-test loop is an **instruction** that creates a loop in the code’s sequence.
- A post-test loop allows instructions to be run 1 or more times.
- The condition is checked **after** the loop’s body is executed, with control jumping back to the start if needed.
- This is achieved in C# using a [do while](../04-2-do-while) loop.

:::

Lets look now at these different loops, and how they work within the computer.
