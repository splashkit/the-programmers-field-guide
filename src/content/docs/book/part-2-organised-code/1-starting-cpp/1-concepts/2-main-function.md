---
title: Main function 
---

In C#, we were able to code instructions directly within the program code. In C/C++ and many other languages, you organise code into groups.

When you start organising code in this way, you need to indicate where the program starts. The `main` function forms the starting point for a C/C++ program. The code within the braces (`{ ... }`) is what runs when the program starts.

The code below shows `main`, and its code for the hello world program. When this program is run, it will start running the code within this function's braces, starting with the call to `write_line`.

```cpp
#include "splashkit.h"

int main()
{
    // The code within these braces is run when the program starts
    write_line("Hello World");
    return 0;
}
```

We will go into details on how this works in the [next chapter](../../../2-organising-code/0-overview). For now, you will just need to enter this code as is, and make sure any instructions you want to run occur between the starting `{` and the `return 0; }` command that appears at the end. 
