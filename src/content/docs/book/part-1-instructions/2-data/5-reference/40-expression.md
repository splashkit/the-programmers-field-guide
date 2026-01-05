---
title: Expressions Updated
---


You do not always need to store values in variables. Sometimes you can just use the value and then forget it. For example, in the above code, we read the initial count from the user. This requires us to read it as text, and then convert that text to a number. Given that we do not ever use the details in `line` again, we do not need to create this variable in the first place. Instead, we could pass the value to the convert function directly as shown below.

```c++
#include "splashkit.h"

int main()
{
    int count;

    write("What is the start count: ");

    // Initialise the count to a user provided value.
    //
    //       Instead of storing in line and using it here, we can call
    //       read_line and pass its result to to_integer directly.
    //               |
    //               v
    count = to_integer(read_line());

    //... the rest of the code would be the same
}
```
