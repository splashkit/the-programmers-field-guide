---
title: Map Explorer Levels and More
sidebar:
  label: " - Adding Levels"
---

We are now well on the way to starting to build an interesting tile-based map program. There are several ways that we could go to expand this further. As a design exercise let's plan out how we could add levels as another dimension to the game. We can then think through the next steps to taking this program further.

## Adding Levels

Levels add another dimension to the game. How can we handle this in the code?

We have two options here: we can add a dimension to the tiles in map data, or we can add another entity to our model. Let's quickly think through each of these options.

Map data contains a two-dimensional array of tile data. This can be extended to add a dimension to track the different levels. The code for this is shown below. We can then pass around the index to the current level when we perform drawing operations on the map.

```cpp
typedef struct
{
  tile_data tiles[MAX_LEVELS][MAX_MAP_COLS][MAX_MAP_ROWS];
} map_data;
```

This approach works well when the data need to be processed flexibly across the different dimensions. In this case we would never want to check a column or row across different levels. So while we can represent this as an additional dimension on the array, we should look for alternative ways to achieve this.

Looking at the explorer data, we can see that there is currently a single map. Rather than adding a dimension within the map, we can convert this to an array of maps as shown below. This ensures that all the existing code that works with maps will still work. We just need to add a current map index (or pointer) that will tell us which map we need to draw and interact with.

```cpp
typedef struct
{
  map_data maps[MAX_MAPS];
  int current_map; // or map_data *current_map;
  point_2d camera_position;
  explorer_state_kind state;
  tile_kind editor_tile_kind;
} explorer_data;
```

## What next?

There are many additions that you can do from this point. Here are some ideas if you are interested in progressing further.

### Adding a user avatar (player)

With the tile map working the next step would be to add a player. You would need to add a struct to model the player's data, and you can then draw them on top of the map. Positioning them in the center of the screen can help them connect with this as their representation within the digital reality we have created.

The user's avatar can move around in pixel coordinates, allowing them to move between the tiles that are drawn underneath them.

### Interactive elements

You know where the player is and which tile they are over (or trying to enter). You can use this to add interactive elements or to limit user movement within the digital world. You can use areas based on circles or rectangles to test which elements are touching, and then respond to these events like you do when handling input.


