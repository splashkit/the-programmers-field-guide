---
title: Goto
sidebar:
    label: " - Goto"
---

The last jump statement is the goto statement. It is an **unstructured** jump, allowing you to jump anywhere in the code. This is a statement you need to be aware of, but not one that should be used.

Why?

The following comic demonstrates the hazards of using the goto statement.

![The dangers of using goto, from http://xcd.com/292](https://imgs.xkcd.com/comics/goto.png "The dangers of using goto, from http://xkcd.com/292")
<div class="caption">Image from <a href="http://xkcd.com/292" target="_blank">http://xkcd.com/292</a></div>

Seriously, the goto statement isn't something that you are ever likely to need. It breaks the sequence of code, and makes it much harder to reads. If you ever think you need it, there will be other better ways to achieve your goals.

:::note[Summary]

- Goto is an **instruction** that allows you to jump to another instruction.
- You need to be aware of the goto statement, but you should not use it.

:::
