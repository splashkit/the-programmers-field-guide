---
title: Fly Catch
---

Our second worked example will look at how we can use these control flow concepts with SplashKit to create a small game where the user controls a spider on its web.

|   |   |
|---|---|
| **Name** | *Fly Catch* |
| **Description** | A small game where the user controls a spider using the keys on the keyboard. The user can move the spider around on their web, catching each fly as it appears. Take too long, and the fly escapes. |

<div class="caption"><span class="caption-figure-nbr">Table x.y: </span>Description of the <em>Fly Catch</em> program.</div><br/>

## Understanding the Fly Catch Game

Hopefully the short description of the game has given you a sufficient idea of the game. Thinking through this we can start to come up with ideas for how this can be created in our code.

- The player will be a spider.
  - We need an image or shape to represent this.
  - It will need a location on the screen (distance from the left and top - x and y)
  - The location can change
  - User input can change the spider location
  - We need to be able to check when the spider gets the fly
- There will be a fly
  - It may not be on the web yet
  - It will need an image or a shape
  - It will have a location
  - We set the location - and it will stay there until caught or it escapes
  - We can use a random time to determine when it escapes
  - 


:::tip[Computational Thinking]

Remember that you must come up with a structure that you can code into the computer. You need to constrain your thoughts to the things you have seen so far - variables, constants, method calls, assignment statements, and control flow. This is central to computational thinking.

:::
