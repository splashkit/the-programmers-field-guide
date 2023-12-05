---
title: "Map with Editor"
sidebar:
    label: " - Map editor"
---

In this iteration we have added an ability to switch between playing and editing the map. We can now randomise the map, and see the different tiles that make up the map. In editor mode, the user can update the map using their mouse.

```cpp
/*
 * Program: Map Explorer
 * A top-down map explorer.
 */

#include "splashkit.h"

using std::to_string;

const int MAX_MAP_ROWS = 20;
const int MAX_MAP_COLS = 20;

const int TILE_WIDTH = 60;
const int TILE_HEIGHT = 60;

typedef enum
{
  PLAY_STATE,
  EDIT_STATE
} explorer_state_kind;

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

typedef struct
{
  map_data map;
  explorer_state_kind state;
  tile_kind editor_tile_kind;
} explorer_data;

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
 * Initialise the map with random tiles.
 * 
 * @param map the map to initialise
 */
void random_map(map_data &map)
{
  for(int c = 0; c < MAX_MAP_COLS; c++)
  {
    for(int r = 0; r < MAX_MAP_ROWS; r++)
    {
      map.tiles[c][r].kind = (tile_kind)(rnd(4));
    }
  }
}

/**
 * Initialise the explorer data.
 * and the state to PLAY_STATE.
 * 
 * @param data the explorer data to initialise
 */
void init_explorer_data(explorer_data &data)
{
  data.state = PLAY_STATE;
  data.editor_tile_kind = GRASS_TILE;

  init_map(data.map);
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
 * @param map the map to draw
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

/**
 * Draw the explorer map to the screen.
 * 
 * @param data the explorer data with the map to draw
 */
void draw_explorer(const explorer_data &data)
{
  clear_screen(color_white());
  draw_map(data.map);
  if(data.state == EDIT_STATE)
  {
    fill_rectangle(color_white(), 0, 0, TILE_WIDTH + 10, TILE_HEIGHT + 18, option_to_screen());

    fill_rectangle(color_for_tile_kind(data.editor_tile_kind), 5, 13, TILE_WIDTH, TILE_HEIGHT, option_to_screen());

    draw_text("Editor", color_black(), 0, 0, option_to_screen());
    draw_text("Kind: " + to_string(((int)data.editor_tile_kind) + 1), color_black(), 7, 18, option_to_screen());
  }
  else
  {
    draw_text("Playing - Shift E to edit", color_black(), 0, 0, option_to_screen());
  }

  refresh_screen();
}

/**
 * Returns the next tile kind in the sequence.
 * 
 * @param kind 
 * @return tile_kind 
 */
tile_kind next_tile_kind(tile_kind kind)
{
  return (tile_kind)((((int)kind) + 1) % 4);
}

/**
 * Handle input when in edit mode.
 * 
 * @param data the explorer data to update
 */
void handle_edit_input(explorer_data &data)
{
  // Quit edit state
  if(key_typed(ESCAPE_KEY))
  {
    data.state = PLAY_STATE;
  }

  // Randomise map
  if(key_typed(R_KEY))
  {
    random_map(data.map);
  }

  // Change a tile
  if(mouse_down(LEFT_BUTTON))
  {
    point_2d mouse_pos = mouse_position();
    int c = mouse_pos.x / TILE_WIDTH;
    int r = mouse_pos.y / TILE_HEIGHT;

    if(c >= 0 && c < MAX_MAP_COLS && r >= 0 && r < MAX_MAP_ROWS)
    {
      data.map.tiles[c][r].kind = data.editor_tile_kind;
    }
  }

  if (key_typed(NUM_1_KEY))
  {
    data.editor_tile_kind = WATER_TILE;
  }
  if (key_typed(NUM_2_KEY))
  {
    data.editor_tile_kind = GRASS_TILE;
  }
  if (key_typed(NUM_3_KEY))
  {
    data.editor_tile_kind = DIRT_TILE;
  }
  if (key_typed(NUM_4_KEY))
  {
    data.editor_tile_kind = SAND_TILE;
  }
}

/**
 * Handle input, updating the explorer data.
 * 
 * @param data the explorer data to update
 */
void handle_input(explorer_data &data)
{
  if(key_down(LEFT_SHIFT_KEY) && key_typed(E_KEY))
  {
    data.state = EDIT_STATE;
  }

  if(data.state == EDIT_STATE)
  {
    handle_edit_input(data);
  }
}

int main()
{
  open_window("Map Explorer", 800, 600);

  explorer_data data;
  init_explorer_data(data);

  while( ! quit_requested() )
  {
    draw_explorer(data);

    process_events();
    handle_input(data);
  }
}
```
