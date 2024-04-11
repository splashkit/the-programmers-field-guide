---
title: "Global Variables"
---

Variables and constants can be declared **outside** of functions and procedures, within the program itself. Variables declared in this way are called **global variables**, which should be avoided. Global constants, on the other hand, are a great way of sharing consistent and meaningful values across your program.

![Annotated code illustrating global values](./images/global-pano.png)

:::note

- Global variable is the **term** given to a variable that is declared within a program but outside any function or procedure.
- Global variables can be accessed by any instructions within a program.
- You should **avoid** using global variables. They can be accessed anywhere within a program, making it difficult to locate errors.
- [Constants](../../../../part-1-instructions/1-sequence-and-data/1-concepts/07-variable#constants) **should** be declared globally, and used to give meaning to values that are entered into your code.

:::

## Example

```cpp
#include <string>
using std::string;

// Declare a global constant
const int INCREMENT_AMOUNT = 10;

// Declare (unnecessary) global variables
int x;
string message_text = "Hello world";

void my_procedure()
{
    // you can access x, message_text, and INCREMENT_AMOUNT here
}

int main() 
{
    // you can access x, message_text, and INCREMENT_AMOUNT here
    return 0;
}
```
