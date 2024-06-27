---
title: Explore event loops
---

With interactive programs you can use control flow to create event loop that allow you to respond to things that change - such as interactive user input, button presses, temperature changes, etc.

For this program, create a graphical application that has the following events:

- Starts with a clear white screen
- When the user presses "c" it clears the screen to a random color
- Has an internal radius - set to 50 to start
  - if the user presses "s", set the radius to 10
  - if the user presses "m", set the radius to 50
  - if the user presses "l", set the radius to 100
- If the user clicks, draw a circle at the current mouse x and mouse y in a random color
- If the user presses "5", draw 100 random circles to the screen
