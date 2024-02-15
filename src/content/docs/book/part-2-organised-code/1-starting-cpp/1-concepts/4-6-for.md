---
title: For Loops
sidebar:
    label: " - For Loops"
---

The C# for loop is based on the C for loop, so it is no surprise that its syntax is the same. Again, you think and use this the same as you did in C#. That is why it is so important to focus on the concepts and ideas that underlie the code.

:::note[Syntax]
The for loop in C/C++ has the separate sections for the initialiser, condition, and increment, as we saw in C#.

![The for loop syntax in C/C++](./images/for-loop.png)
:::

Here is our [example for loop](../../../../part-1-instructions/3-control-flow/1-concepts/04-3-for-loop#simple-for-loop) from C#, translated to C/C++.

## Example

```cpp
#include "splashkit.h"

using std::stoi;

int main()
{
    int target;

    write("Count to: ");
    target = stoi(read_line());

    for(int i =  0; i < target; i++)
    {
        write_line(i);
    }
}
```
