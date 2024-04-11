---
title: "Parameter"
---

You can require callers to pass values to a function or procedure you are creating by adding **parameters**. A parameter is a [variable](/book/part-1-instructions/1-sequence-and-data/1-concepts/07-variable) that has its value set by an [argument](/book/part-1-instructions/1-sequence-and-data/1-concepts/02-method#arguments) in the function/procedure call. The caller must provide a value for each parameter in the function or procedure call.

![Annotated code for a parameter](./images/param-pano.png)

:::note[A parameter:]

- Is the **term** given to a [variable](../../../../part-1-instructions/1-sequence-and-data/1-concepts/07-variable) declared to accept the value from an argument passed to a [function or procedure](../01-0-functions-and-procedures) when it is called.
- Requires the caller to provide an argument for its value when they call the procedure or function.
- Can be used within the function or procedure in the same way as any other variable.
- Is **good practice** to use to require values to be passed into a function or procedure.

:::

## Example

In this program the `read_string` function has a string parameter. This means that callers must provide a single argument with the string to be assigned to the `prompt`.

```cpp
#include "splashkit.h"

/**
* Prompt the user to enter a string, and return the value to the caller.
*
* @param prompt The message to show the user
* @returns      The data entered by the user
*/
string read_string(string prompt)
{
    string result;

    write(prompt);
    result = read_line();

    return result;
}

void main()
{
    string name;
    // The call to read_string has to have one argument
    // the string value is passed to the prompt parameter
    name = read_string("Enter your name: ");
    
    write_line("Hello " + name);

    string message;
    // This makes the function more general - we can use
    // it to read in different string value as long as we
    // provide a prompt for the user
    message = read_string("Enter a message: ");
    //...

    return 0;
}
```
