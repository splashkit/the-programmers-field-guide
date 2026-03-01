---
title: Arrays in Fly Catch
banner: 
  content: This is an optional tour - use it to extend your understanding.
---

Our fly catch game currently has the spider chasing a single fly. Now that we have arrays, we can quickly change this to allow the spider to chase a number of flies.

## Changing the data

Open up your version of the fly catch code, and review the `game_data` struct. This struct contains the spider and the fly. To change the game to have multiple flies, you need to change the `fly` field from a single `fly_data` value to an array of values. We can use a `dynamic_array`, so that we can easily add and remove flies.

We also need to decide how many flies to create at the start of the game. How many is up to you, but make it a constant that can be adjusted easily.

The result should look something like this:

```cpp
const int INITIAL_FLY_COUNT = 5;

struct game_data
{
  spider_data spider;
  dynamic_array<fly_data> flies;
};
```
_Make sure to also add the `splashkit-arrays.h` header!_

This change will break the code, but there aren't too many places we need to update. We will need to update the way we initialise the game, update the flies, and draw the flies. The great thing is that we already have the code to initialise, update, and draw a single fly, so these changes will only need to add the code to loop through the array and perform the action on each element.

## Initialising the game

In `main` we currently initialise the game by assigning a value to the spider and fly. With the change to an array we no longer have a fly, we have multiple flies.

Embed the code that initialises a fly within a loop, adding a new fly to the array each time.

To start we have:

```cpp
game.spider = new_spider();
game.fly = new_fly();
```

We still need to create new flies, but there are multiple. So we need a `for` loop that starts at 0, and loops while `i < INITIAL_FLY_COUNT`. The result is:

```cpp
game.spider = new_spider();
for(int i = 0; i < INITIAL_FLY_COUNT; i++)
{
  add(game.flies, new_fly());
}
```

Notice how this code nests the action we performed to initialise one fly within a loop that repeats the code for each element of the array.

## Updating the flies

We need to make similar changes in the `update_game` code. In `update_game`, we check if the fly was caught and if so re-initialize it, then afterwards update the fly.

This same code can just be moved into a `for` loop - looping `i` from 0 to `length(game.flies)`. Within the loop, `game.fly` needs to become the fly in the array: `game.flies[i]`.

## Drawing the flies

The last place we need to change is `draw_game`. This code will draw each of the flies from the array. As with update game, you need to add in a loop and then access each of the fly one at a time from the array.

With these changes you should be able to compile and run the game. You should see multiple flies appearing on the screen at a time. Try playing around with the number of flies.

:::tip

Notice how nicely it works having functions and procedures that work with individual values - like `new_fly`, `draw_fly`, and `update_fly`. When you switch to an array, you just add a loop, and call the function/procedure. The function/procedure captures the action for a single value, and the loop repeats it once for each element in the array.

:::

## What next?

The `dynamic_array` makes it easy to add and remove flies. You could try:
 - Removing flies as the game continues to increase the difficulty
 - Adding extra flies as bonuses whenever the player catches multiple quickly
 - Adjusting the logic in `update_game` to actually _remove_ flies that have escaped, and _add_ new flies every so often (rather than rescheduling the "same" flies). This is conceptually clearer, and again makes our digital reality richer.
