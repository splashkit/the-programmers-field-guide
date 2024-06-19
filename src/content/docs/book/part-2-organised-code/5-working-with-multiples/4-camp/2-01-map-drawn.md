---
title: Map explorer with map drawn
sidebar:
  label: " - Map drawn"
---

The first iteration of the map explorer had us put in place the data types and create the code to draw the map to the screen. Make sure to have a go at this yourself first, and only use this to help you if you get stuck.

Key new aspects include looping through two-dimensional arrays. In this case we are looping through the tiles in the map when the map is initialised and when it is drawn.

```cpp
/*
 * Program: Map Explorer
 * A top-down map explorer.
 */

#include "splashkit.h"

const int MAX_MAP_ROWS = 20;
const int MAX_MAP_COLS = 20;

const int TILE_WIDTH = 60;
const int TILE_HEIGHT = 60;

/**
 * There are different kinds of tiles in the map.
 * 
 * @field WATER_TILE   A water tile
 * @field GRASS_TILE   A grass tile
 * @field DIRT_TILE    A dirt tile
 * @field SAND_TILE    A sand tile
 */
typedef enum
{
  WATER_TILE,
  GRASS_TILE,
  DIRT_TILE,
  SAND_TILE
} tile_kind;

/**
 * A tile in the map.
 * 
 * @field kind  The kind of tile
 */
typedef struct
{
  tile_kind kind;
} tile_data;

/**
 * A map containing a two dimensional array of tiles.
 * 
 * @field tiles   The tiles in the map
 */
typedef struct
{
  tile_data tiles[MAX_MAP_COLS][MAX_MAP_ROWS];
} map_data;

/**
 * Initialise the map with all grass tiles.
 * 
 * @param map the map to initialise
 */
void init_map(map_data &map)
{
  for(int c = 0; c < MAX_MAP_COLS; c++)
  {
    for(int r = 0; r < MAX_MAP_ROWS; r++)
    {
      map.tiles[c][r].kind = GRASS_TILE;
    }
  }
}

/**
 * Returns the color for the indicated tile kind.
 * 
 * @param kind the tile kind to get the color for
 * @return color the color for the tile kind
 */
color color_for_tile_kind(tile_kind kind)
{
  // Return colors for each of the tile kinds
  switch(kind)
  {
    case WATER_TILE: return color_blue();
    case GRASS_TILE: return color_lawn_green();
    case SAND_TILE: return color_blanched_almond();
    case DIRT_TILE: return color_rosy_brown();
    default: return  color_white();
  }
}

/**
 * Draw a tile at the indicated location.
 * 
 * @param tile the tile to draw, passed by constant reference
 * @param x the x location of the top left of the tile
 * @param y the y location of the top left of the tile
 */
void draw_tile(const tile_data &tile, double x, double y)
{
  color tile_color = color_for_tile_kind(tile.kind);
  fill_rectangle(tile_color, x, y, TILE_WIDTH, TILE_HEIGHT);
}

/**
 * Draw the tiles in the map to the screen.
 * 
 * @param map 
 */
void draw_map(const map_data &map)
{
  for(int c = 0; c < MAX_MAP_COLS; c++)
  {
    for(int r = 0; r < MAX_MAP_ROWS; r++)
    {
      draw_tile(map.tiles[c][r], c * TILE_WIDTH, r * TILE_HEIGHT);
    }
  }
}

int main()
{
  open_window("Map Explorer", 800, 600);

  map_data map;
  init_map(map);

  while( ! quit_requested() )
  {
    clear_screen(color_white());
    draw_map(map);
    refresh_screen();

    process_events();
  }
}
```
