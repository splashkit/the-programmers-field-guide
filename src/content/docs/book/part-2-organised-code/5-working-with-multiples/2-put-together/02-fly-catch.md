---
title: Arrays in Fly Catch
---

Our fly catch game currently has the spider chasing a single fly. Now that we have arrays, we can quickly change this to allow the spider to chase a number of flies.

## Changing the data

Open up your version of the fly catch code, and review the `game_data` struct. This struct contains the spider and the fly. To change the game to have multiple flies, you need to change the `fly` field from a single `fly_data` value to an array of values.

To create an array, you need to know how many elements it will contain. This is fixed for the duration of the program, but we may want to change this as we test different options. Creating a constant will ensure the code is easier to understand, and will allow us to change the value if needed.

The result should look something like this:

```cpp
const int MAX_FLIES = 5;

typedef struct
{
  spider_data spider;
  fly_data    flies[MAX_FLIES];
} game_data;
```

This change will break the code, but there aren't too many places we need to update. We will need to update the way we initialise the game, update the flies, and draw the flies. The great this is that we already have the code to initialise, update, and draw a single fly, so these changes will only need to add the code to loop through the array and perform the action on each element.

## Initialising the game

In `main` we currently initialise the game by assigning a value to the spider and fly. With the change to an array we no longer have a fly, we have multiple flies.

Embed the code that initialises a fly within a loop, storing a new fly in each element of the array.

To start we have:

```cpp
game.spider = new_spider();
game.fly = new_fly();
```

We still need to create new flies, but there are multiple. So we need another for loop that starts at 0, and loops while `i < MAX_FLIES`. The result is:

```cpp
game.spider = new_spider();
for(int i = 0; i < MAX_FLIES; i++)
{
  game.flies[i] = new_fly();
}
```

Notice how this code nests the action we performed to initialise one fly within a loop that repeats the code for each element of the array.

## Updating the flies

We need to make similar changes in the `update_game` code. In `update_game`, we update the fly and then check if it was caught by the spider.

This same code and not be placed in the same for loop - looping `i` from 0 to `MAX_FLIES`. Within the loop, `game.fly` needs to become the fly in the array: `game.flies[i]`.

## Drawing the flies

The last place we need to change is `draw_game`. This code will draw each of the flies from the array. As with update game, you need to add in a loop and then access each of the fly one at a time from the array.

With these changes you should be able to compile and run the game. You should see multiple flies appearing on the screen at a time. Try playing around with the number of flies.

:::tip

Notice how nicely it works having functions and procedures that work with individual values - like `new_fly`, `draw_fly`, and `update_fly`. When you switch to an array, you just add a loop, and call the function/procedure. The function/procedure captures the action for a single value, and the loop repeats it once for each element in the array.

:::
