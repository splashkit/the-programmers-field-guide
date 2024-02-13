---
title: Indentation
---

## The importance of style

Modern programming languages are [abstractions](../../../../part-0-getting-started/1-digital-realities/1-concepts/3-digital-realities-and-abstraction) -- while they are written to instruct the computer, they are also designed to be readable by humans.
Given this, it's sensible to take care to make our code as readable to humans as possible.

This is where the concept of code **style** comes in.
Although it has no effect on functionality, style is still an important part of programming.
It relates to how we name the things in our code, how we lay out the code in our source files, which kinds of statements we use in which circumstances, and how to use comments to clarify our intentions.
All of these factors impact the readability of our code and how easy it is for another human to understand its purpose.

We have a [style guide](../../../../../style) that we follow for the code in this guide.
You will find similar style guides in open source and industry projects, and there are tools which can help automate the enforcement of stylistic rules.
It is important to note that style guides are not statements on what is correct in general -- they are just a record of what is being done on a particular project.
In fact, style guides for different projects may contradict each other!
This could be due to the conventions of the programming language being used, or simply the personal preferences of whoever contributed to the style guide.

The important thing is to be **consistent** within the same project.
Just like it would be distracting to read a novel which changed font every few words, it would be distracting to read code written in a mix of styles.

## Style through indentation

Indentation -- the spaces at the beginning of a line of code -- is an important part of code style.
Its primary purpose is to help communicate the structure of your code.
Now that you have added [compound statements](../../1-concepts/02-0-compound-statement) to your tool kit, indentation is something you will need to consider.

The style we use for indentation is **four spaces**.
That is, every time we start a new block the lines of code within it are written with four additional spaces at the start.
For example:

```c#
{
    // In a new block, so lines of code
    // start four spaces in
    {
        // One block further in now,
        // so add another four spaces
    }
}
```

Other popular indentation styles are to use two, six, or eight spaces, or a single tab.

:::caution
Tabs versus spaces for indentation is quite the war amongst programmers.
Beware bringing it up in conversation!

There are pros and cons for each, and ultimately it comes down to personal preference.
The most important thing is to be consistent with the conventions of the project you are working on.
:::

Regardless of the specific style being used, the purpose of indentation is the same -- to visually communicate the different blocks of code.
This helps us to see the flow of the program logic, and the different levels of [scope](../../1-concepts/02-1-scope).

As you continue on your journey, pay attention to code indentation and make sure you are using a consistent style.
You may also want to review the other rules in our [style guide](../../../../../style).

:::note[Summary]

- Code style is an important part of programming.
- Indentation is part of code style, used to visually communicate the blocks of code in a program.
- The most important part of code style is to be consistent.

:::
