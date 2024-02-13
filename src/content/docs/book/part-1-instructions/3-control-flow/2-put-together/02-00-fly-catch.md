---
title: Fly Catch
---

Our second worked example will look at how we can use control flow with SplashKit to create a small game where the user controls a spider on its web.

| **Name** | *Fly Catch* |
|---|---|
| **Description** | A small game where the user controls a spider using the keys on the keyboard. The user can move the spider around on their web, catching each fly as it appears. Take too long, and the fly escapes. |

## Understanding the Fly Catch Game

Hopefully the short description of the game has given you a sufficient idea what it is. Thinking through this we can start to come up with ideas for how this can be created in our code.

- The player will be a spider.
  - We need an image or shape to represent this.
  - It will need a location on the screen (x and y).
  - The location can change.
  - User input can change the spider location using arrow keys.
  - We need to be able to check when the spider gets the fly.
- There will be a fly.
  - It may not be on the web yet (not drawn).
  - It will need an image or a shape.
  - It will have a location.
  - We set the location. It will stay there until caught, or it escapes.
  - We can use a random time to determine when it escapes.
  - We can then use another random time to determine when it appears again.

:::tip[Computational Thinking]
Remember that you must come up with a structure that you can code into the computer using the things you have seen so far: variables, constants, method calls, assignment statements, and control flow. This is central to computational thinking.
:::

Think through how you could achieve this -- what data do we need? How could the different steps be realised?
