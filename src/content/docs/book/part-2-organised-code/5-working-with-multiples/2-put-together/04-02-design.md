---
title: Design for Map Explorer
sidebar:
  label: " - Drawing the Map"
---

Before jumping into the code, we should think about the structure of our program and its data. Generally, I would start thinking about the data first, and then think through the functionality. Either way, you sort of have to keep both in mind. So as you think through the data, you think a little about how it will be processed. Similarly, as you think through the functionality, you think about the data and how it is structured.

There are several features we need here, too many to build all at once. So we need to break this down into a number of iterations. In this first iteration, let's get something onto the screen. Once we get something drawing, then we can move on and consider what we aim to achieve next.

## Data Design

Let's start with the data and the entities (things) we can see in the program. Getting these entities structured well at the start will help make sure that our code to manage this will be easy to write. So, as you think through this keep the processing in mind. Your goal, make the entities match the reality we are creating and ensure the data we need is where we need it.

For me, the things that jump out are:

- **Map** we are going to have a map that we are showing to the user.
- The map is made up of **Tiles**.
- Each tile will have a **kind** we can use to determine its appearance when drawn.

This should be enough to get us started.

Before we can go further we need to flesh out these ideas. The strategy I applied was to start with the simplest part and build back to the map itself.

### Tile Kind

Each tile in our map needs to have a different visual appearance. For the moment we can code these using an [enumeration](../../../3-structuring-data/1-concepts/03-02-enum). This will let us use the names we define to associate different tiles with different visual appearances. Going forward we may end up removing this as we move this to handle a whole range of different map tiles, but for now this will help us get started.

We can start with four tile kinds. These can then be drawn using blue, green, brown, and yellow colored tiles.

```
Enum: Tile Kind
Fields:
- WATER_TILE
- GRASS_TILE
- DIRT_TILE,
- SAND_TILE
```

:::tip

Doing this prompted me to think we can probably have a function to convert the tile kind to a color. This could then be used when we draw the tile to determine the color. That would be pretty simple code, we can use a switch statement and return the different colors based on the kind.

:::

### Tile

The map will have many tiles, so what do we need to know about each tile?

For the moment, it is probably just the kind of tile. This means we could do away with the tile for now, and just use the tile kind directly in the map. However, this feels wrong. It is a tile map, so we should have a tile. I also expect that as we go forward the tile will start to have new things added to it. For example, when we want to be able to move between areas we will want certain tiles that can connect to these other areas. Having it in place from the start will be good.

```
Struct: Tile Data
Fields:
- kind: the tile kind for this tile
```

### Map

Our world is going to be two-dimensional. Each map has a width and a height to create a grid of tiles. For our dimensions, we can use columns and rows. We will need to know the number of columns and rows we want to support. This can be captured as two constants, allowing us to easily adjust this going forward.

```
Constants:
- MAX_MAP_ROWS = 20
- MAX_MAP_COLS = 20

Struct: Map Data
Fields:
- tiles: a two-dimensional array of tile data organsied as columns and rows
```

:::tip
If we want maps of different sizes we could add extra fields to the map so that it could know how many columns and rows it contains. This would have to be more than 0 and less than or equal to the maximum we had set, but would allow maps of different sizes.
:::

## Functional Structure Design

This will be an event drive program, so we can use the [event loop](../../../../part-1-instructions/3-control-flow/1-concepts/04-1-while-loop) we first saw in the control flow chapter. We can code this in `main`, and for now we can just have it draw the map. The pseudocode for this is shown below. We need main to set up the map, and then loop drawing the map to the screen.

```
Function: Main
Local Variables:
- map: map data
Steps:
- Set up the map
- Loop until quit
  - Clear the Screen
  - Draw the Map
  - Refresh the Screen

  - Process events
```

### Initalise map

The map will need to have all of its tiles initialised when it is created. As this is a two-dimensional array, we will need to loop over both the columns and rows in the map. It won't matter which way we do this, so let's stick with columns and then rows. The map can start with all grass tiles, so this loop will need to set the kind of each tile to be grass initially. It will need to accept the map as a parameter passed by reference. We can then update the map that is passed in.

```
Procedure: Init Map
Parameters:
- map: the map to initialise, passed by reference
Steps:
- For each of the columns (c)
  - For each of the rows (r)
    - Set the kind of the tile at column c, row r to be a grass tile
```

:::tip
Remember to think in blocks - you have a map initially. Then you select a column in the first for loop, so inside that loop you have a column of the map. The inner for loop selects a row. At this point you are in the loop that selected a column (c) and in the loop the selected a row (r) so you can get an individual cell - the one at column c and row r.
:::

### Draw the map

Inside the event loop we need to be able to draw the map. This will involve drawing all the map's tiles, so we can use the same pattern we saw within the code to set up the map. We will need to loop over the columns and rows for the map, and draw these to the screen. To achieve this, we can create a procedure to draw a given tile. Looking at the tile data, a tile does not know where it appears in the map - it only knows its kind. This means we will need to pass `draw_tile` the tile, and the position to draw this on the screen. The pseudocode is shown below.

```
Constants:
- TILE_WIDTH = 60
- TILE_HEIGHT = 60

Procedure: Draw Map
Parameters:
- map: the map to draw, passed as const reference
Steps:
- For each of the columns (c)
  - For each of the rows (r)
    - Draw the tile at column c, row r, passing in a calculated x and y value
```

The only challenge here is how we calculate the position of each tile. If we know the width and height of each tile, then we can calculate the location to draw any tile based on its coordinates. The x location can be calculated by multiplying the column index by the width of a tile. So the first tile is at 0, the second one tile width to the right, the third two tile widths to the right, and so on. The same applies to the y value. You can calculate the tile y by multiplying the row index by the height of a tile.

![The position of a tile can be calculated from its row and column](./images/tile-position.png)

### Draw a tile

This procedure will be passed the tile, and its location on the screen. The logic is relatively straight forward here, we need to first determine the color of the tile, and then we can fill a rectangle with that color. The rectangle can be located based on the `x` and `y` parameters, and we can use the `TILE_WIDTH` and `TILE_HEIGHT` for the size. The documentation comment for this is shown below.

```cpp
/**
 * Draw a tile at the indicated location.
 * 
 * @param tile the tile to draw, passed by constant reference
 * @param x the x location of the top left of the tile
 * @param y the y location of the top left of the tile
 */
```

To build this we are going to need to be able to convert a tile kind to a color - as we thought originally when designing the data.

### Color for tile kind

This function will accept a tile kind, and return the color to be used for that kind of tile. We can use a [case statement](../../../../part-1-instructions/3-control-flow/1-concepts/03-2-case) to implement this. It can switch based on the passed in kind, and return a color for each of our different tile kinds. I used the following colors:

- WATER_TILE, `color_blue()`
- GRASS_TILE: `color_lawn_green()`
- SAND_TILE: `color_blanched_almond()`
- DIRT_TILE: `color_rosy_brown()`
- Anything else: `color_white()`

*What type do we return?*

SplashKit defines a color type that we need to use here. This means our function declaration looks like this:

```cpp
/**
 * Returns the color for the indicated tile kind.
 * 
 * @param kind the tile kind to get the color for
 * @return color the color for the tile kind
 */
color color_for_tile_kind(tile_kind kind)
{
  //...
}
```

This should be enough to get a first iteration going. Build and run your version of this. Make sure to focus on the use of multiple loops when you interact with the array of tiles within the map.

When you run this you should see... a green screen? The problem at the moment is that all the tiles are the same. So we cannot see the map grid yet. We can fix that next.
