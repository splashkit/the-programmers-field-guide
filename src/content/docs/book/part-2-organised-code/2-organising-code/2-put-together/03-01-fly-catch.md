---
title: Fly Catch Revisited
---

In the control flow chapter we got started building a small game. The logic for this was all contained within the main function. With functions and procedures we can start to think about breaking this down.

Looking at the game code we can identify steps to **update game**, **handle input**, and **draw game**. The challenge at the moment is that many of these require us to change values in a number of variables. We do not currently have the tools to do this within separate procedures (but that will come in a couple of chapters).

For now, we can move the steps for **draw game** into a procedure. This will help us get started organising this, and we can progress toward more organised code as we learn some new tools and techniques.

## Draw Game

We have the code for draw game outlined in our logic, so this should be a simple copy and paste action. You then need to add in the parameters that will tell draw game the details that it needs. You should end up with something like this:

```
Procedure: Draw the game
Parameters:
  - spider_x, spider_y - integers for the location of the spider
  - fly_appeared - boolean to say if we draw the fly or not
  - fly_x, fly_y - where to draw the fly
Steps:
    Clear the screen white
    Fill a black circle using spider_x, spider_y, and SPIDER_RADIUS

    if fly appeared
        Fill a dark green circle using fly_x, fly_y, and FLY_RADIUS

    Refresh the screen to show it to the user
```

Have a go at coding this. The code in main is still too long to make it really understandable, but we are making progress. With just a few more tools we will have this all under control. So let's wrap this chapter up so you can move on to the next step, where we can start to organise our data.
