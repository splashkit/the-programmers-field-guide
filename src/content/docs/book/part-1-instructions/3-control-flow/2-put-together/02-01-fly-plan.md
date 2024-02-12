---
title: Fly Catch Plan
sidebar:
    label: " - A Plan"
---

As always, we will approach the design and development of the Fly Catch program using an iterative process. This will involve designing and building the program a little at a time. Despite this, we still need an overall goal to help guide our actions and to give us an idea of how we can achieve the features we want.

:::tip
For this you want to think about the most important features.
The other features we can work out along the way.
:::

## Feature Plan

The key features are the spider, fly, event loop, and timer.

### The Spider

For the spider, we only need to know its location on the screen and its size. We can update the location to move the spider around, and use its size to test when it overlaps with the fly.

To test when the spider is over the fly we can give the spider and the fly a bounding circle (the area where we consider the spider or fly to be). It will then be easy to check if they touch by seeing if the two circles intersect.

### The Fly

Like the spider, the fly needs a location and a bounding circle. We also need to know if the fly has appeared. This can be a [boolean](../../1-concepts/01-0-boolean-data) variable that we can toggle when it appears, escapes, or is eaten.

When the fly appears, we can set its location. We should only draw the fly when it has appeared. In this way it won't be drawn for the user to see until we toggle the appeared value.

### Event loop

The game will run on an event loop. This loop can check for events like user interactions (arrow keys) and times passing, and react to them. For example:

- Has the user pressed an arrow key? Move the spider.
- Has the spider eaten the fly? Hide the fly.
- Is it time for the fly to appear? Show the fly.
- Is it time for the fly to escape? Hide the fly.

### Time

We will need code to track how much time has elapsed. You can get the current time (an integer) using the `CurrentTime` method in SplashKit.

We can use an `appearAt` variable to track the time when the fly should appear. This can start as the current time plus a random amount of time. When the current time is larger than the `appearAt` time, we toggle the `appeared` variable and give the fly a random location on the screen.

When the fly appears, we can set a second time tracking variable `escapeAt` to be the current time plus another random amount. This sets the time when the fly escapes. If the current time is larger than `escapeAt`, then the fly can disappear, and we can set the `appearAt` to a new random time.

## Iterations

The above plan gives us an idea for how each aspect can be built, along with some ideas for variables and how they will work. Now we can start to plan out a few iterations.

:::tip[Plans change]
No need to spend too long on these plans. You should be flexible to change as you start to build this -- that is the point of iterating.
:::

For this project lets start with the following planned iterations:

- Basic drawing and event loop -- get something showing.
- Move the spider.
- Show the fly.
- Let the fly escape.
- Let the spider eat the fly.
- Make it look pretty.

:::tip
Always aim to have something you can test early. This will help give you confidence that things are working, and motivation as you see it starting to come together.
:::
