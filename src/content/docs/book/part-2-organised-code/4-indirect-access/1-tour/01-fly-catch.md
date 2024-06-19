---
title: Fly Catch
---

We have been progressing nicely with the fly catch program. One of the main remaining challenges has been our inability to break up `main` and move the handle input and update game logic. We also have some inefficiencies in passing copies of struct parameters that we could now re-code as constant references to enhance performance.

These changes are relatively small, but will greatly help us grow the logic of any program we create.

## Handle Input

Within `main` we have a bunch of code that is associated with the handle input actions, as shown in the following pseudocode from the control flow chapter.

```
  Handle Input
    If the user is holding down the right arrow
      Increase spiderX by SPIDER_SPEED
    If the user is holding down the left arrow
      Decrease spiderX by SPIDER_SPEED
    ... and so on
```

For this game, input will always impact the spider. This is what the player can control. Now that we have references, we can move this logic into its own procedure and pass a reference to the spider to update.

```
Procedure: Handle Input
Parameters:
  spider - a reference to the spider
Steps:
  If the user is holding down the right arrow
    Increase spiderX by SPIDER_SPEED
  If the user is holding down the left arrow
    Decrease spiderX by SPIDER_SPEED
  ... and so on
```

When you code this, you can now call handle input and pass in the game's spider. The compiler will get the address of the spider, and pass that to the reference. So updates to this in the handle input code will affect the game's spider - thereby changing what is drawn to the screen.

:::tip

Remember when you declare the spider parameter, you need to add the `&` to indicate you want this to be passed by reference. The call to this will look the same, so there will be nothing special at that end.

:::

When you code this, you can mostly just copy and paste the code from `main` into a new `handle_input` procedure you create. You will need to change the `game.spider` to just be `spider`, which you should see as a sign that this is looking better now. We have reduced the scope so that we only see the things we need to deal with, and there is no longer the need to go through the game to get to the spider.

## Update Game

We can apply the same idea to the update game logic. The following code snippet shows the logic we set up for this part of main in the control flow chapter.

```
Update the game
  if it is time for the fly to appear
    Make the fly appear
    Give it a new position
    Set escapeAtTime to a random time 2 to 7 seconds in the future
  else if it is time for the fly to escape
    Remove the fly - set flyAppeared to false
    Set appearAtTime to a random time 1 to 3 seconds in the future

  If the spider caught the fly
    The fly is caught
    Set flyAppeared to false
    Set new appearAtTime  
```

Notice that this needs all the game data. We need to know about the fly and the spider. So here we can pass the `game_data` by reference to the `update_game` procedure.

Update game can also be passed the current time, so that the update game code does not need to know about the game timer. This will match what we did with the `time_to_appear` and `time_to_escape` functions.

You can implement this by copying and pasting the code from main into the new `update_game` procedure. In this case the code will only need minor changes to remove the need to access the time (replacing `timer_ticks(GAME_TIMER)` with `current_time`). The fly and spider details will still come from the `game` parameter which has the same name as the variable in main.

This doesn't get to as nice a place as we were with `handle_input` where we had reduced the scope to only have the details we need. So we can berak this down further.

### Update Fly

To improve this further, we can implement an `update_fly` procedure. This could take the logic from the first part of update game, and apply that to a passed in fly parameter.

We could potentially also pass in the spider, and include the logic for the caught test - but I think that may be better left outside the fly update logic. It is conceptually different, as it is no longer just about the fly.

```
Procedure: Update Fly
Parameters:
  - fly - a reference to fly data to update
  - current time - a long representing the current game time
Steps:
  if it is time for the fly to appear
    Make the fly appear
    Give it a new position
    Set escapeAtTime to a random time 2 to 7 seconds in the future
  else if it is time for the fly to escape
    Remove the fly - set flyAppeared to false
    Set appearAtTime to a random time 1 to 3 seconds in the future
```

Then `update_game` can just involve calling `update_fly` and then checking if the fly was caught.

```
Procedure: Update game
Parameters:
  - game: a reference to the game data to update
  - current time: the current time in the game
Steps:
  Update fly with the game's fly and the current time

  If the spider caught the fly
    The fly is caught
    Set flyAppeared to false
    Set new appearAtTime  
```

The event loop in main should look really nice now. Each of the steps is clear, with just a simple procedure call being made for each of the actions - handle input, update game, and draw game. The code for this section is shown below.

```cpp
int main()
{
  //...

  // The event loop
  while (!quit_requested())
  {
    handle_input(game.spider);
    update_game(game, timer_ticks(GAME_TIMER));
    draw_game(game);

    // Get any new user interactions
    process_events();
  }
}
```

This is making each of these procedures nice and small, dealing with a single task that takes in only the data that we need to make this work.

This is something we can build upon in the next chapter.

## Draw game and other struct parameters

In our draw game code, we can make a tiny change to the parameter declarations to make these constant references. The calls don't change, so little else is needed, but this will save some time and space as the program runs.

For examples:

```cpp
void draw_game(game_data game)
```

Becomes:

```cpp
void draw_game(const game_data &game)
```

Remember to change this for the `draw_fly`, `draw_spider`, and `draw_game` procedures and the `spider_caught_fly`, `time_to_escape`, and `time_to_appear` functions.
