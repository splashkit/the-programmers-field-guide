---
title: Comparisons
sidebar:
  label: " - Comparisons"
---

Comparisons are a common way of generating a boolean value in your code. These [expressions](../../../2-communicating-syntax/1-concepts/03-expression) allow you to compare two values and determine the *truth* of a given condition. For example, the expression shown in Figure x.y is asking if the value in the `area` variable is larger than `23.5` . The result of this expression will be either `true` or `false` depending on the current value stored in `area`. [Table x.y](#TableExpressionValues) lists some example values for this expression, given different values stored in the `area` variable.

<a id="TableExpressionValues"></a>

| Value in area | area > 23.5 |
|---|---|
| 73.2 | true |
| -2.5 | false |
| 23.5 | false |
| 23.501 | true |

<div class="caption"><span class="caption-figure-nbr">Table x.y: </span>Example values for the expression 'area > 23.5'</div><br/>

Programming languages offer a range of different comparison operators. These typically include comparisons to check if values are the same or different, and to check if one value is larger or small than another. The different operators for C# are listed in [Table x.y](#TableOperators).

<a id="TableOperators"></a>

| Kind | Description | Operator |
|---|---|---|
| **Equal** | Are the values the same? | `a == b` |
| **Not Equal** | Are the values different? | `a != b` |
| **Larger Than** | Is the left value larger than the right? | `a > b` |
| **Less Than** | Is the left value smaller than the right? | `a < b` |
| **Larger Or Equal** | Is the left value larger than or equal to the right? | `a >= b` |
| **Less Or Equal** | Is the left value smaller than or equal to the right? | `a <= b` |

<div class="caption"><span class="caption-figure-nbr">Table x.y: </span>Comparison Operators</div><br/>

:::tip

The symbols for less than, and larger than, can be seen **visually**. With less than, notice how the `<` character starts as a small point on the left and gets wider to the right. The left side is *smaller* than the right. In contrast, `>` starts wide and narrows to the point on the right, showing that the left side is *larger* than the right.

:::

:::caution
C# uses `==` for comparison and `=` for assignment. If you mix this up you may accidently be changing the value of a variable rather than comparing it.
:::

:::note

- Comparisons can only be performed between two values.
- The values on either side of the comparison are [expressions](../../../2-communicating-syntax/1-concepts/03-expression), allowing you to calculate the values being compared.

:::

## Comparison - why, when, and how

Boolean values are core to control flow, and comparisons are the main tool you will use to generate these boolean values. As you think through the actions you want the computer to perform, you use these comparisons to make decisions and determine which actions are run. For example, you can ask the user for their name, then compare that name to your name in order to perform an action when the names match. Similarly, in a banking application you can check if an account balance is larger than, or equal to, the amount being withdrawn as part of the decision on how to respond to the user's request.

## Examples

- `guess == target` - does the guess equal the target?
- `guess > target` - is the guess larger than the target?
- `guess <= target` - is the guess smaller than, or equal to, the target?

You can also use comparisons for like like user interaction in SplashKit. In this case, the location of the mouse can be used to determine where the mouse is when the user clicks a mouse button.

|**Method** | **Required Arguments** |**Description** |
|-----------|------------------------|----------------|
|`MouseX`| None | How far from the left of the window is the mouse? |
|`MouseY`| None | How far from the top of the window is the mouse? |

- `MouseX() > 50`
- `MouseX() <= 75`

In order to determine if the mouse was over something like a button, we will need some additional capabilities that let us combine together multiple boolean values in meaningful ways. Lets look at logical operators now, and how we can use them.