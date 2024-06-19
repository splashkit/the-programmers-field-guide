---
title: Fly Catch
---

The fly catch game is going to really benefit from structs to help model the entities in the game. When we think about the game, the entities are really clear. We know that the game is made up of a spider and a fly. We can now model these as structs in our code.

## Spider Struct

The player in the game controls a spider. Reviewing the existing code, we can see that the spider needs to store its location on the screen through a combination of `spider_x` and `spider_y` variables.

To create our spider, we can create a struct with the following details:

```
Struct: Spider Data
Fields:
    x - the distance from the left of the window
    y - the distance from the top of the window
```

:::tip[What to name the type?]

We could call the struct `spider` but then what would we call the variables. Naming it something like `spider_data` or `spider_struct` will help distinguish the type from the variable.

:::

## Fly Struct

The fly is a bit more interesting. It has a location on the screen, knows if it has appeared, and keeps track of the time to appear and time to escape. These are all individual variables that can now be coded into a fly data struct.

```
Struct: Fly Data
Fields:
    appeared - indicates if the fly is shown
    x - its distance from the left of the window (to the center)
    y - its distance from the top of the window (to the center)
    appear_at_time - the time when the fly will appear
    escape_at_time - the time when the fly will escape
```

:::tip[Point?]

The SplashKit code include a `point_2d` struct that contains an x and y value. This type can be used to represent locations within a 2 dimensional space (on the screen, for example). We could replace the x and y coordinates in the spider and fly with a `point_2d`.

For the moment we can stick with the x and y values.

:::

## Game Data

Looking at the code, there are hints at another type. We have a procedure called `draw_game` that draws everything to the screen. While we could pass this the spider and fly, it would be more convenient to pass it a single value representing the game. This will also mean that we can expand this type as the game grows, adding things like scores and other data.

```
Struct: Game Data
Fields:
    spider: The spider in the game
    fly:    The fly in the game.
```

## Implementing the code

Usually you would start with the structs, and then build the functions and procedures up to work with these. As we already have code, we are going to need to adjust this to work with the new data types.

Start by creating the types at the top of the cpp file. Remember that the types need to exist before you can use them. In our code we will need to code the `spider_data` and `fly_data` structs before the `game_data`.

Once you have all three structs, jump down to main, and you can replace the variable declarations with a single `game_data game;` declaration. This will contain all the data for the spider and the fly.

The old variable declarations also initialised the variables. We can create some functions to help us with this.

### New Spider

To initialise the spider data, I thought to create a `new_spider` function. This can set up all the fields of the spider, and then return this data to the caller. The pseudocode would look like this:

```
Function: New Spider
Local Variable:
    - result: Spider Data
Steps:
    - set result's x to SCREEN_WIDTH / 2
    - set result's y to SCREEN_HEIGHT / 2;
    - return result
```

In main, you can now call `new_spider` and assign the result to the game's spider:

```cpp
int main()
{
  game_data game;

  game.spider = new_spider();
  
  open_window("Flay Catch", SCREEN_WIDTH, SCREEN_HEIGHT);
  ...
}
```

### New Fly

As with the spider, we need to initialise the fly's data. We can use the same pattern to solve this, and create a function to perform this initialisation. This could be a `new_fly` function, using the pseudocode below.

```
Function: New Fly
Local Variable:
    - result: Fly Data
Steps:
    - Set result's x to a random value between 0 and SCREEN_WIDTH
    - Set result's y to a random value between 0 and SCREEN_HEIGHT

    - Set result's appeared to false

    - Set result's 'appear_at_time to the current_time + 1000 + rnd(2000)
    - Set result's escape_at_time to 0
```

In main, you can now call `new_fly` and assign the result to the game's fly:

```cpp
int main()
{
  game_data game;

  game.spider = new_spider();
  game.fly = new_fly();
  
  open_window("Flay Catch", SCREEN_WIDTH, SCREEN_HEIGHT);
  ...
}
```

## Handling Input

The code for handing input is the next part of main that needs to be updated. In this you will need to adjust the old `spider_x` and `spider_y` to access the spider in the game. To do this, `spider_x` will become `game.spider.x` and `spider_y` will become `game.spider.y`.

:::tip[Andrew's Tip]

Anytime I see something like `game.spider.x` I would see if there is a way of better breaking this code down. In the next chapter we will see some tools we can use there to make this work even better with these structs.

:::

## Update Game

In update game we need can switch the fly details to read from `game.fly`. The first place we encounter this is in the if statement to check if it is time for the fly to appear. The old code for this is:

```cpp
if (!fly_appeared && timer_ticks(GAME_TIMER) > appear_at_time) //...
```

Rather than just coding this as is, we can use this as an opportunity to make the code easier to follow. Here the test is checking if it is time for the fly to appear, so we could create a `time_to_appear` function. We be pass the fly and the current time, and return a boolean to say if it is time or not.

```
Function: Time To Appear
Parameters:
    - fly: the fly data to check
    - current_time: the current time
Steps:
    - return (not fly.appeared) and current_time > the fly's appear_at_time
```

In main, we can now call the new function using:

```cpp
if (time_to_appear(game.fly, timer_ticks(GAME_TIMER))) //...
```

Notice how this helps explain what program is doing at this point. While there is only one line of code in the function, it makes this part of the program easier to understand.

We can do the same thing for `time_to_escape`. This would look like this in our code:

```cpp
/**
 * Indicates if it is time for the fly to escape.
 * 
 * @param fly the fly to check
 * @param current_time  the current time
*/
bool time_to_escape(fly_data fly, long current_time)
{
  return fly.appeared && current_time > fly.escape_at_time;
}
```

Similarly, we can re-code the circle intersection test by creating another function `spider_caught_fly`. This can be passed the spider and the fly, and can return true if the spider has caught the fly, once again making the code easier to follow.

```
Function: Spider Caught Fly
Parameters:
    - Spider: the spider to check
    - Fly: the fly to check
Steps:
    - Return true if the fly has appeared, and the spider and fly circles intersect.
```

We can then call this in main using:

```cpp
if ( spider_caught_fly(game.spider, game.fly) )
{
  game.fly.appeared = false;
  game.fly.appear_at_time = timer_ticks(GAME_TIMER) + 1000 + rnd(2000);
}
```

## Draw Game

Lastly, we have `draw_game`. This already exists as a procedure, but now we can change this to accept just a single `game_data` parameter.

```cpp
draw_game(spider_x, spider_y, fly_appeared, fly_x, fly_y);
```

Becomes:

```cpp
draw_game(game);
```

The logic for draw game can now also be split out. Passing around spider and fly data is now easy, making it less of a challenge to create functions and procedures that work on this information. When we re-code draw game, we can create `draw_spider` and `draw_fly` procedures. These can be passed `spider_data`, or `fly_data`, and use that to draw the spider or fly to the screen. The logic in `draw_game` is now much more expressive, showing the digital reality we are creating.

```
Procedure: Draw the game
Parameters:
  - game: the details of the game to draw
Steps:
    Clear the screen white
    Draw Spider ( the game's spider )

    Draw Fly ( the game's fly )

    Refresh the screen to show it to the user
```

The logic for `draw_spider` is very simple at the moment. This will just draw a circle to the screen. The code for this is shown below:

```cpp
/**
 * Draw the spider on the screen
 * 
 * @param spider  the spider's data
*/
void draw_spider(spider_data spider)
{
  fill_circle(color_black(), spider.x, spider.y, SPIDER_RADIUS);
}
```

Draw fly will include the check to see if the fly should be drawn. We can code this up as a *guard*. This is an if statement at the start of the code that returns if the required *conditions* are not met.

```
Procedure: Draw Fly
Parameter:
    - fly: the fly data of the fly to draw
Steps:
    - If the fly has not appeared
        - Return
    - Draw a circle at the Fly's location (x, y) of FLY_RADIUS
```

You should now have reimplemented the fly catch game with the new structs. This has helped to make it easier to read and understand the code. We can now pass around spiders, flies, and the whole game data to our functions and procedures.

Going forward we can also make changes to these structs and to the functions and procedures that work on them. As we add new features, think first about the extra data we need and add this to the structs. You can then adjust the functionality in the functions and procedures, which will have access to any new data you add to these structs.

Notice, also, how the new code is starting to incorporate more of the details from the domain itself. We now have functions to test if the spider caught the fly, and things to draw spiders, flies, and the game. The more we can bring the game to life in the code, the easier it will be to work with.
