---
title: Selection with switch
---

Many languages provide you with a **switch** or **case** statement that can be used to choose between different paths based upon matching values.

![Switch illustration code](./images/switch-code.png)

:::note[Switch statements ...]

- will select the path where the case matches the value in the switch
- do not have visible conditions, but they are behind the scenes.
- use a condition that checks if the switch's value equals each case.

:::

:::tip

You will use the if statement much more than switch/case, but switch/case can be useful when you have a known list of values to choose between.

:::

## Example

```c++
#include "splashkit.h"

int main()
{
    // You can create boolean variables to store true/false values.
    // There are also keywords for true and false
    bool ready = false;


    write_line(" a - say hello");
    write_line(" b - say bye");
    write_line(" c - say Ni!");
    write_line();
    write("Enter option: ");
    char line = read_char();

    // Switch to the case that matches the value in line
    switch(line)
    {
      case 'A':
      case 'a':
        write_line("Hello");
        break;
      case 'B':
      case 'b':
        write_line("Bye");
        break;
      case 'C':
      case 'c':
        write_line("Ni!");
        break;
      case 'D':
      case 'd':
        write_line("Superpowers unlocked!");
        break;
      default:
        write_line("Please choose one of the indicated options");
        break;
    }
}
```
