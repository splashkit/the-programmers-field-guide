---
title: Fly Catch Event Loop
sidebar:
  label: " - Event Loop"
---

With the basic details drawn, we can now place this within the [event loop](../../1-concepts/04-1-while-loop/#keeping-graphical-programs-running). This will loop **while** the user has not asked to quit, with each loop drawing the game and processing any events the user has performed. This is captured in the following flowchart.

![The flow chart showing the event loop for the fly catch game](./images/fly-catch-events.png)

Notice how this will keep the program running. While nothing may be changing on the screen, the computer is looping over and over to check if the user has done anything.

