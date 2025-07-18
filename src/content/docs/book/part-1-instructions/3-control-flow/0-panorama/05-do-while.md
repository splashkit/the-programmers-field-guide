---
title: Repeat with do while
---

You can also repeat code using a **do while** loop. This works like the while loop, but the condition appears *after* the loop's instructions. This means that you have to run these instructions at least once.

![Illustration of a do while loop](./images/do-while-code.png)

:::note[The do while loop...]

- runs its instructions and then checks its condition and either goes back the to the start of its instructions, or continues to the next instruction after the loop.
- runs the body 1 or more times.
- is less common than the while loop.

:::

:::tip

As with the while loop, remember that the instructions still run in sequence. So the condition is only checked once at the end of each loop.

:::

:::tip[While or do while]

Most of the time you will use a while loop, but in some cases the do while can be useful. If you are sure the code must run at least once, then you can consider a do while loop.

:::

## Example

The following example shows a menu in the terminal. This is one place where a do while loop can work well.

```cs
using static SplashKitSDK.SplashKit;
using static System.Convert;

string line;

do
{
    WriteLine("1: Say hello");
    WriteLine("2: ...");
    WriteLine("3: Quit");

    line = ReadLine();

    switch(line)
    {
        case "1":
            WriteLine("Hello!");
            break;
        case "2":
            WriteLine("...");
            break;
        case "3":
            break;
        default:
            WriteLine("Please enter a menu option");
            break;
    }
} while(line != "3");


```
