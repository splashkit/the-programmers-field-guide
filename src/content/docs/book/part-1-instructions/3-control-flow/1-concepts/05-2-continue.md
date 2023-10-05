---
title: Continue
sidebar:
    label: " - Continue"
---

The continue statement is used to jump back to the condition of the current loop. This can be very useful for skipping the processing of the current loop, while allowing the loop to continue for the next cycle.

<a id="FigureContinue"></a>

![Figure x.y: The continue Statement allows you to jump to the condition, skipping the remainder of the code in the loop but allowing the loop to continue](./images/statement-continue.png "The continue Statement allows you to jump to the condition, skipping the remainder of the code in the loop but allowing the loop to continue")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>The continue Statement allows you to jump to the condition, skipping the remainder of the code in the loop but allowing the loop to continue</div><br/>

:::note

- The continue statement is an **instruction**, allowing you to jump to the condition of the current loop.
- The continue statement should be coded within a [branching](../03-0-branching) statement that checks if the loop should skip processing of the current cycle.
:::

## Continue - Why, When, How?

Like break, the continue statement isn't something you use often. Most of the time you will want to process something in each loop. You can use continue to skip processing of a particular elements within a loop.

The continue should be placed in a branching statement so that it occurs only for the element you want to skip.

When you use continue in a for loop, the continue will run the post-loop increment to ensure that you move to the next value in the control variable. In a while loop, you need to make sure you have updated the condition so that you do not end up in an infinite loop.
## In C#

:::tip[Syntax]

The continue statement is simply the `continue` keyword terminated by a semicolon (;).

:::

## How does continue work?

The following code loops from 0 to 10, skipping all loops where `i` is larger than 0 and divisible by 3. Therefore, this will print 0, 1, 2, 4, 5, 7, 8, and 10.

```csharp
using static System.Console;
using static System.Convert;

for(int i = 0; i < 11; i++)
{
    if ( i > 0 && i % 3 == 0 )
    {
        continue;
    }
    WriteLine(i);
}
```

The following images show how this works.

**TODO slider here**

The while loop requires us to make sure we have adjusted things so that we dont run the same loop, ending in an infinite loop. The while equivalent of the for loop above is:

```csharp
using static System.Console;
using static System.Convert;

int i = 0;

while (i < 11)
{
    if ( i > 0 && i % 3 == 0 )
    {
        i++;
        continue;
    }

    WriteLine(i);
    i++
}
```

This works the same as the for loop. In this case, we have to add the extra `i++` otherwise it would loop infinitely when i equals 0.
