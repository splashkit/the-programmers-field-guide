---
title: Logical Operators
sidebar:
  label: " - Logical Operators"
---

The comparison operators allow you to compare *two* values. This is very useful, but in itself is incomplete. What, for example, do you do when you want to compare three or more values, or you want to check multiple different conditions?

While you are limited to two values with the comparison operators, there are other operators that allow you to **combine** boolean expressions. This will enable you to combine together multiple boolean values into a single boolean expression.

There are four main *logical operators*: **and**, **or**, **xor**, and **not**. The operators **and**, **or**, and **xor** each work on two boolean values, combining them to give a new boolean value. For example, the `and` operator allows you to check if both of the expressions are true. The expression `area > 0 and area < 10` will be true only when area is **both** larger than zero **and** less then ten. The **not** operator works with a single boolean value, allowing you to check if something is not true.

<a id="FigureLogicalOperators"></a>

![Figure x.y: Logical Operators combine Boolean values](./images/logical-operators.png "Logical Operators combine Boolean values")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>Logical Operators combine Boolean values</div><br/>


<a id="TableLogicalOperators"></a>

|  | Description | Operator | Example |
|---|---|---|---|
| **And** | Are both values true? | `&&` | `a && b` |
| **Or** | Is at least one value true? | `\|\|` | `a \|\| b` |
| **Xor** | Is one value true, and the other false? | `^` | `a ^ b` |
| **Not** | Is the value false? | `!` | `! a` |

<div class="caption"><span class="caption-figure-nbr">Table x.y: </span>Logical Operators</div><br/>

<a id="TableLogicalExpressionsExample"></a>

<table>
<thead>
  <tr>
    <th rowspan="2">area</th>
    <th rowspan="2">area > 0</th>
    <th rowspan="2">area < 10</th>
    <th colspan="3">area > 0 ... area < 10</th>
  </tr>
  <tr>
    <th>and</th>
    <th>or</th>
    <th>xor</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>5</td>
    <td>True</td>
    <td>True</td>
    <td>True</td>
    <td>True</td>
    <td>False</td>
  </tr>
  <tr>
    <td>27</td>
    <td>True</td>
    <td>False</td>
    <td>False</td>
    <td>True</td>
    <td>True</td>
  </tr>
  <tr>
    <td>0</td>
    <td>False</td>
    <td>True</td>
    <td>False</td>
    <td>True</td>
    <td>True</td>
  </tr>
</tbody>
</table>

</tbody>
</table>

<div class="caption"><span class="caption-figure-nbr">Table x.y: </span>Example Logical Expressions</div><br/>

## Logical Operators - why, when, and how

You often want to check multiple conditions when you are making a decision. For example, to check if the user has clicked over a button you need to check if they have clicked, and if the mouse is over a particular area. This is a case where **and** is useful.

For example, `MouseClicked(MouseButton.LeftButton) && MouxeX() >= 5 && MouseX() <= 10` will be true when the left button was clicked, and the mouse is 5 to 10 pixels from the left of the window. We can explore this in a **truth table** as shown below. To help fit this on the page, the table header uses some shorthand names for the parts.

| Clicked? | MouseX() | Clicked? | mx > 5 | mx <= 10 | MouseClicked(MouseButton.LeftButton) && MouxeX() >= 5 && MouseX() <= 10 |
|---|---|---|---|---|---|
| Not clicked | 7 | false | true | true | false |
| Clicked | 7 | true | true | true | true |
| Clicked | 11 | true | true | false | false |
| Clicked | 4 | true | false | true | false |

Notice that in this case we need to have all values being true for the result to be true. This matches what we asked for - the mouse must be clicked and the mouse x between 5 and 10.

With or you can check if **any** of a number of conditions are true. For example, has the user asked to quit or have they typed the escape key. This can be achieved with the condition `QuitRequested() || KeyTyped(KeyCode.EscapeKey)`. The following truth table shows the possible combinations for this.

| Quit? | Key Typed? | QuitRequested() \|\| KeyTyped(KeyCode.EscapeKey) |
| --- | --- | --- |
| false | false | false |
| true | false | true |
| false | true | true |
| true | true | true |

In this case you can see that if any one of the values is true then the condition is true. If you ask to quit or you type the escape key, then this condition will be true. If you manage to do both at the same time, that will be true as well.

You can mix and and or, in which case you should use brackets (parenthesis) to clearly show which order to do the operations. For example `KeyDown(KeyCode.SpaceKey) || MouseX() > 50 && MouseClicked(MouseButton.LeftButton)` - we want to make it clear which parts are combined.

If this was `(KeyDown(KeyCode.SpaceKey) || MouseX() > 50) && MouseClicked(MouseButton.LeftButton)` that would require the mouse to be clicked and the space key to be down or the mouse x to be larger than 50. 

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