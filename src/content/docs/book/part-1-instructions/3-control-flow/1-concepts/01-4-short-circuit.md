---
title: Short Circuit Evaluation
sidebar:
  label: " - Short Circuit Evaluation"
---

If you think about the details of how the logical operators work, you may notice that sometimes you know the result before you evaluate all parts. For example, if you know that one side of an **and** operator is false, then you know the result is false. Similarly, if you know one side of an **or** is true then you know the result is also true.

Programming languages can take advantage of this fact to avoid processing unnecessary parts of these expressions. This improves performance, and knowledge of this feature can be handy when designing your code.

## Short Circuit Evaluation -- when, why, how

Guarding from potential failures using **and** is probably the most convenient use of short circuit evaluation. In this case you can use the fact that **false and ...** is false, meaning that the computer will not attempt to evaluate the `...` part no matter what it contains.

When you have a condition that may fail, order the elements of your expression to test for it. For example, the following scenario looks a case where there may be a divide by zero error. We can avoid this error by first checking that the value is not 0 (`!= 0`). Then, if the value is zero, short circuit evaluation means that the program will skip the code which would have resulted in the error.

- **Idea:** test if `b / a` is larger than 1.
- **Problem:** this will fail with an error if `a == 0`.
- **Solution:** test to ensure `a` is not 0.
- **Code:** `a != 0 && b / a > 1.0`.

| a | b | a != 0 | b / a > 1.0 | a != 0 && b / a > 1.0 |
| --- | --- | --- | --- | --- |
| 1 | 5 | true | true | true |
| 5 | 1 | true | false | false |
| 0 | 1 | false | Divide by 0 error | false |

The truth table above shows the results for a sample of values. For the final case, where `a` is 0, the code `b / a > 1.0` would raise a "divide by zero" error, causing the program to terminate. This is avoided by the guard `a != 0`, which for this example is false (because a does equal zero). This results in the remainder of the condition being skipped, as `false and ...` is always false, thereby avoiding the error.

:::tip
The use of **and** as a guard condition is a relative simple pattern that you will be able to use any time issues like this arise. Try to keep this in mind as you progress.
:::

Comparisons and logical operators give you the tools you need to work with boolean data in your programs. Now we need to look at how to harness these conditions to control the actions that are performed in your code.
