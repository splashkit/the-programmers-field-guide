---
title: Combining Operator
sidebar:
  label: " - Combining Operator"
---

You can mix *and* and *or* within a single condition. In this case you should use brackets (parenthesis) to clearly show the **order** to do the operations. For example, with the following expression do we want the *or* or the *and* to be evaluated first? The results are different depending on the order, so it is important to think this through. In this case the intention is to use this to trigger an action when the user types the space key, or they click more than 50 pixels from the left of the window.

- `KeyDown(KeyCode.SpaceKey) || MouseX() > 50 && MouseClicked(MouseButton.LeftButton)`

This gives two options:

1. `(KeyDown(KeyCode.SpaceKey) || MouseX() > 50) && MouseClicked(MouseButton.LeftButton)`
2. `KeyDown(KeyCode.SpaceKey) || (MouseX() > 50 && MouseClicked(MouseButton.LeftButton))`

Lets start with the first option where or is evaluated first. In this case the `(KeyDown(KeyCode.SpaceKey) || MouseX() > 50)` will be evaluated first (we can then call this `result`). The condition is then continued when the computer evaluates the `result && MouseClicked(MouseButton.LeftButton)`. Thinking about this, you may be able to see that this will require the mouse to be clicked and the space key to be down or the mouse x to be larger than 50.

| Space Key | mx > 50 | Clicked | Space Key Down or Mouse X > 50 (A) | A and clicked? |
| --- | --- | --- | --- | --- |
| false | false | false | false | false |
| true | false | false | true | false |
| false | true | false | true | false |
| true | true | false | true | false |
| true | false | true | true | true |
| false | true | true | true | true |
| true | true | true | true | true |

Where as, `KeyDown(KeyCode.SpaceKey) || (MouseX() > 50 && MouseClicked(MouseButton.LeftButton))` would be true when the space key is down, or the mouse x is larger than 50 and the left button is clicked.

| Space Key | mx > 50 | Clicked | Mouse X > 50 and clicked? (A) | space down \|\| A |
| --- | --- | --- | --- | --- |
| false | false | false | false | false |
| true | false | false | true | true |
| false | true | false | true | true |
| true | true | false | true | true |
| true | false | true | true | true |
| false | true | true | true | true |
| true | true | true | true | true |

:::tip

Always make this as clear as you can, and parenthesis help greatly here. The languages have precidence rules that determine what will happen, but you should never really need to know these. If you do, the code isn't clear enough. Add some parenthesis, then everyone can see what was intended.

:::

### Short Circuit Evaluation

Notice how the 
