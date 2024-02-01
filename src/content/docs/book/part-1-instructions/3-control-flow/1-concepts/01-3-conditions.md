---
title: Conditions
sidebar:
  label: " - Conditions"
---

You can mix the [logical operators](../01-2-logic-operators) within a single condition. In this case, you should use brackets to clearly show the **order** you want the different elements evaluated in. For example, with the following expression do we want the *or* (`||`) or the *and* (`&&`) to be evaluated first?

- `KeyDown(KeyCode.SpaceKey) || MouseX() > 50 && MouseClicked(MouseButton.LeftButton)`

The results are different depending on the order, so it is important to think this through.
We have two options here:

1. `(KeyDown(KeyCode.SpaceKey) || MouseX() > 50) && MouseClicked(MouseButton.LeftButton)`
2. `KeyDown(KeyCode.SpaceKey) || (MouseX() > 50 && MouseClicked(MouseButton.LeftButton))`

Let's start with the first option where `or` is evaluated first. That means `(KeyDown(KeyCode.SpaceKey) || MouseX() > 50)` will be evaluated first (we can then call this `result`). The overall value of the condition is then determined when the computer evaluates `result && MouseClicked(MouseButton.LeftButton)`. Thinking about this, you may be able to see that this condition will only be true when the left mouse button is clicked, and the space key is down or the mouse's x position is larger than 50.

If you can't see that, don't worry.
We can show you why this is the case by expanding the condition into a truth table.

| Space Key? | MouseX > 50? | Clicked? | Space Key or Mouse X > 50? (A) | A and clicked? |
| --- | --- | --- | --- | --- |
| false | false | false | false | false |
| true | false | false | true | false |
| false | true | false | true | false |
| true | true | false | true | false |
| true | false | true | true | true |
| false | true | true | true | true |
| true | true | true | true | true |

We can compare this to a truth table for the second option, which shows us that it will have an overall value of true when the space key is down, or the mouse x is larger than 50 and the left button is clicked.

| Space Key? | MouseX > 50? | Clicked? | MouseX > 50 and Clicked? (A) | Space Key or A? |
| --- | --- | --- | --- | --- |
| false | false | false | false | false |
| true | false | false | true | true |
| false | true | false | true | true |
| true | true | false | true | true |
| true | false | true | true | true |
| false | true | true | true | true |
| true | true | true | true | true |

In this case our intention is to check whether the user has typed the space key, or they click more than 50 pixels from the left of the window.
That means if the space key is pressed we want the overall condition to be true, no matter what the mouse's x position is or whether the mouse button was clicked.
The first condition doesn't meet this criteria, so, the second condition is what we want.

:::tip
Always make conditions as clear as you can using brackets. Different programming languages have precedence rules that determine what will happen without the brackets, but you should never need to know these. If you do, the code isn't clear enough. Add some brackets, then everyone can see what was intended.
:::
