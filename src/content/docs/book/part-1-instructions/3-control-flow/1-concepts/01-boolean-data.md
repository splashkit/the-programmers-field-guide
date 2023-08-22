---
title: "Boolean Data"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept

The Boolean<sup>[1](#FootnoteGeorgeBool)</sup> Data Type is a [Type](../../../1-sequence-and-data/1-concepts/06-type) used to represent **truth**. A Boolean value will either be **true** or **false**. These values are used extensively in the control flow statements to determine the action to perform.

<a id="FigureBooleanData"></a>

![Figure x.y: Boolean data represents truth](./images/boolean-data.png "Boolean data represents truthe")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>Boolean data represents truth</div><br/>

:::note
- Boolean is an existing **artefact**, it is a [Type](../../../1-sequence-and-data/1-concepts/06-type) that has been defined to represent truth values.
- A Boolean value is either **true** or **false**. You can also think of these as yes and no.
- Boolean values are used in most of the control flow statements.
- The Boolean type can be used in the same way as other types.
:::

<hr/>
<div id="FootnoteGeorgeBool" class="footnote"><sup>1</sup>Named after George Bool's Boolean Logic</div>


## Comparisons

Comparisons are a common way of getting Boolean values in your code. These [Expressions](../../../1-sequence-and-data/1-concepts/04-expression) allow you to compare two values to check for a given condition. For example, the Expression shown in [Figure x.y](#FigureBooleanData) is asking if the value in the `value` variable is larger than `23.5` . The result of this expression will be either `true` or `false` depending on the current value stored in `area`. [Table x.y](#TableExpressionValues) lists some example values for this expression, given different values stored in the `area` variable.

<a id="TableExpressionValues"></a>

| Value in area | area > 23.5 |
|---|---|
| 73.2 | true |
| -2.5 | false |
| 23.5 | false |

<div class="caption"><span class="caption-figure-nbr">Table x.y: </span>Example values for the expression 'area > 23.5'</div><br/>

Programming languages offer a range of different comparison operators. These typically include comparisons to check if values are the same or different, and to check if one value is larger or small than another. The different operators for C and Pascal are listed in [Table x.y](#TableOperators).

<a id="TableOperators"></a>

|  | Description | C | Pascal |
|---|---|---|---|
| **Equal** | Are the values the same? | `a == b`<sup>[2](#FootnoteEqualComparisonOperator)</sup> | `a = b` |
| **Not Equal** | Are the values different? | `a != b` | `a <> b` |
| **Larger Than** | Is the left value larger than the right? | `a > b` | `a > b` |
| **Less Than** | Is the left value smaller than the right? | `a < b` | `a < b` |
| **Larger Or Equal** | Is the left value equal or larger than the right? | `a >= b` | `a >= b` |
| **Less Or Equal** | Is the left value smaller or equal to the right? | `a <= b` | `a <= b` |

<div class="caption"><span class="caption-figure-nbr">Table x.y: </span>Comparison Operators</div><br/>
<hr/>
<div id="FootnoteEqualComparisonOperator" class="footnote"><sup>2</sup>C uses a double equal <code>==</code> for comparison as the single equals (<code>=</code>) is used for assignment</div>

:::note

- Comparisons can only be performed between two values.
- The values on either side of the comparison are [Expressions](../../../1-sequence-and-data/1-concepts/04-expression), allowing you to calculate the values being compared.

:::

## Logical Operators

The comparison operators allow you to compare *two* values. This is very useful, but in itself is incomplete. What, for example, do you do when you want to compare three or more values? While you are limited to two values with the comparison operators, there are other operators that allow you to **combine** Boolean expressions. This will enable you to combine together multiple Boolean values into a single Expression.

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
