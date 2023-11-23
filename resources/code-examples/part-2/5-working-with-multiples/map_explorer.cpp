/*
 * Program: Map Explorer
 * A top-down map explorer.
 */

#include "splashkit.h"

const int MAX_MAP_ROWS = 20;
const int MAX_MAP_COLS = 20;

const int TILE_WIDTH = 60;
const int TILE_HEIGHT = 60;

typedef enum
{
  PLAY_STATE,
  EDIT_STATE
} game_state_kind;

typedef enum
{
  WATER_TILE,
  GRASS_TILE,
  DIRT_TILE,
  SAND_TILE
} tile_kind;

typedef struct
{
  tile_kind kind;
} tile_data;

typedef struct
{
  tile_data tiles[MAX_MAP_COLS][MAX_MAP_ROWS];
} map_data;

typedef struct
{
  map_data map;
  point_2d camera_position;
  game_state_kind state;
} game_data;

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

void init_game(game_data &game)
{
  game.camera_position = point_at(0, 0);
  game.state = PLAY_STATE;

  init_map(game.map);
}

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

void draw_tile(const tile_data &tile, double x, double y)
{
  color tile_color = color_for_tile_kind(tile.kind);
  fill_rectangle(tile_color, x, y, TILE_WIDTH, TILE_HEIGHT);
}

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

void draw_game(const game_data &game)
{
  set_camera_position(game.camera_position);

  clear_screen(color_white());
  draw_map(game.map);

  refresh_screen();
}

tile_kind next_tile_kind(tile_kind kind)
{
  return (tile_kind)((((int)kind) + 1) % 4);
}

void handle_edit_input(game_data &game)
{
  if(key_typed(ESCAPE_KEY))
  {
    game.state = PLAY_STATE;
  }

  if(key_typed(R_KEY))
  {
    random_map(game.map);
  }

  if(mouse_clicked(LEFT_BUTTON))
  {
    point_2d mouse_pos = mouse_position();
    int c = (mouse_pos.x + game.camera_position.x) / TILE_WIDTH;
    int r = (mouse_pos.y + game.camera_position.y) / TILE_HEIGHT;

    if(c >= 0 && c < MAX_MAP_COLS && r >= 0 && r < MAX_MAP_ROWS)
    {
      game.map.tiles[c][r].kind = next_tile_kind(game.map.tiles[c][r].kind);
    }
  }
}

void handle_input(game_data &game)
{
  if(key_down(LEFT_SHIFT_KEY) && key_typed(E_KEY))
  {
    game.state = EDIT_STATE;
  }

  if(game.state == EDIT_STATE)
  {
    handle_edit_input(game);
  }

  if(key_down(LEFT_KEY))
  {
    game.camera_position.x -= 1;
  }

  if(key_down(RIGHT_KEY))
  {
    game.camera_position.x += 1;
  }

  if(key_down(UP_KEY))
  {
    game.camera_position.y -= 1;
  }

  if(key_down(DOWN_KEY))
  {
    game.camera_position.y += 1;
  }
}

int main()
{
  open_window("Map Explorer", 800, 600);

  game_data game;
  init_game(game);

  while( ! quit_requested() )
  {
    draw_game(game);

    process_events();
    handle_input(game);
  }
}
