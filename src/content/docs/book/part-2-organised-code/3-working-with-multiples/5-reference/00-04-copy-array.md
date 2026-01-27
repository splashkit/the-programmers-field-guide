---
title: Copying an Array
sidebar:
    label: " - Copying an Array"
---

Some languages allow you to copy the entire contents of an array into another array using a standard assignment statement, but often this is something that you need to take care of yourself.

<br/>

<a id="FigureArrayCopy"></a>
![Elements of an array can be copied across in the assignment statement](./images/mmv-array-copy.png)
<div class="caption">All of the elements of an array can be copied across in the assignment statement</div><br/>

You **cannot** use the assignment statement to copy arrays in C/C++. Instead, this can be achieved by manually copying the array yourself, element by element.

:::note

While you cannot copy arrays, you can copy struct values even when they contain arrays.

:::

The following code demonstrates the use of a `for` loop to copy the elements from one array into another.

```cpp
/* program: array-copy.c */

int main()
{
  int data[3] = {1, 2, 3};
  int other_data[3];

  // assign each element from data into other_data
  for (int i = 0; i < 3; i ++)
  {
      other_data[i] = data[i];
  }
  
  return 0;
}
```
