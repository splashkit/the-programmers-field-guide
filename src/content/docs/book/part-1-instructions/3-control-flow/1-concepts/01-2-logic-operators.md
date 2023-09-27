---
title: Logical Operators
sidebar:
  label: " - Logical Operators"
---

The comparison operators allow you to compare *two* values. This is very useful, but in itself is incomplete. What, for example, do you do when you want to compare three or more values? 

While you are limited to two values with the comparison operators, there are other operators that allow you to **combine** Boolean expressions. This will enable you to combine together multiple Boolean values into a single Expression.

There are four main *logical operators*: **and**, **or**, **xor**, and **not**. Each of these operators works on two Boolean values, combining them to give a new Boolean value. For example, the and operator allows you to check if both of the expressions are true. The expression `area > 0` and `area < 10` will be true only when area is both larger than zero and less then ten.

<a id="FigureLogicalOperators"></a>

![Figure x.y: Logical Operators combine Boolean values](./images/logical-operators.png "Logical Operators combine Boolean values")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>Logical Operators combine Boolean values</div><br/>


<a id="TableLogicalOperators"></a>

|  | Description | C | Pascal |
|---|---|---|---|
| **And** | Are both values True? | `a && b` | `a and b` |
| **Or** | Is at least one value True? | `a \|\| b` | `a or b` |
| **Xor** | Is one value True, and the other False? | `a ^ b` | `a xor b` |
| **Not** | Is the value False? | `!a` | `not a` |

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


:::note
- [Table x.y](#TableLogicalExpressionsExample) has some example expressions.
- The tables in [Figure x.y](#FigureLogicalOperators) show the values of the different logical operators. These are known as Truth Tables.
- [Table x.y](#TableLogicalOperators) outlines the different logical operators, and how they are coded in C and Pascal.
:::
