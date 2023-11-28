---
title: Map explorer camera
sidebar:
  label: " - Moving the Camera"
---

The map for the game is going to be larger than the screen, meaning we need a way to draw different locations on the screen. We can achieve this by creating a virtual camera to help simplify this operation.

:::note

What is the screen? It is nothing more than a 2-dimensional array of pixels. As you manipulate data on the screen you are setting pixel values that the video hardware turns into colors for the user to see. In this section we will look at mapping between these index values in these arrays to allow us to move around the map.

:::

## Drawing with the camera

We have two options if we want to map a large map onto a small part of the screen. Firstly, we could reposition everything manually as we move around changing the world to make sure that the right part appears on the screen. Alternatively, we can draw the world through a virtual camera that adjusts the part that appears on the screen.

![We can either move all the tiles on the map, or change where the screen is](./images/camera-coordinates.png)

The above image shows the two options. In the first case, we keep retain the current screen coordinates. The top left of the screen stays at 0,0, and we move all the tiles so that they appear on the screen in the right location.

This seems like a lot of work, because it is. Moving the world to position it on the screen isn't going to be the right way to approach this. Instead, we can introduce a camera that allows us to pretend that we move the coordinates of the screen. This is shown in the option on the right of the image. Here, the world stays where it is, and we move the position of the screen so that it appears in the right place.

In reality the screen coordinates will still start at 0,0, but by adding a virtual camera we can adjust each drawing operation as it is performed. If we move the camera so that the top left is at 10,15 then when we draw at 15,30 it will be adjusted to be at 5, 15.

Let's consider this one dimension at a time. If the top left of the screen is at `x = 10`, then drawing at `x = 15` will need to be 5 pixels from the left of the screen. If we move the camera to be at `x = 15`, then this same drawing operation will result in the shape appearing 0 pixels from the left of the screen. Move the camera again to `x = 20`, and now the shape is off the left of the screen by 5 pixels, having a screen location of `x = -5`.

As a result of this change, we have two sets of coordinates. World coordinates and screen coordinates. The tiles in the map will be our world coordinates, and the screen coordinates are calculated by subtracting the location of the camera from the respective world coordinate. So, as we saw, when the camera is at `x = 10`, then drawing a world coordinate of `x = 15` will appear at `15 - 10 = 5`.

### The Camera in SplashKit

You can implement your own camera if you want, but SplashKit already provides this functionality. Each time you draw, it will adjust the location of the drawing operation based on the position of the camera in SplashKit.

|**Function/Procedure** | **Required Arguments** |**Description** |
|-----------|------------------------|----------------|
|`set_camera_position`| a `point_2d` value | Moves the camera so that the provided point is the new value for the top left of the screen. |
|`camera_x`| none, returns a double | Returns the x location of the camera. |
|`camera_y`| none, returns a double | Returns the y location of the camera. |
|`option_to_screen`| none, returns a `drawing_options` value | Allows you to tell SplashKit to ignore the camera for a drawing operation. |
|`point_at`| an x and y value, returns a `point_2d` value | Returns a `point_2d` value that has the x and y set to the values provided. |

To implement the camera in the map explorer you will need to do the following:

- Add a `camera_position` field to the `explorer_data`.
- Initialise the `camera_position` to the point at 0,0
- Update `draw_explorer` to:
  - Use `set_camera_position` to move the camera to the point from the `camera_position` in the `explorer_data`.
  - Ignore the camera when drawing the editor details, and prompt text. For example
  
  ```cpp
  fill_rectangle(color_white(), 0, 0, TILE_WIDTH + 10, TILE_HEIGHT + 18, option_to_screen());
  //...
  draw_text("Editor", color_black(), 0, 0, option_to_screen());
  ```

- Update `handle_input` to move the camera by changing the data in `camera_position`.

Compile and run this and then explore the map. It looks like you are moving the map around on the screen, but we know we are really just moving where things are drawn.

Now try editing. We need to fix up the editor so that it takes the camera into consideration when we are clicking. To do this, we need to reverse the action performed by the camera. When we draw, the camera takes a world coordinate, subtracts the camera.x/y value to get a screen coordinate. Now we need to take a screen coordinate (the mouse location) and *add* the camera.x/y value to get the world coordinate. This is shown in the following image.

![Mapping mouse to screen coordinates requires you to add the camera x/y to the coordinate to determine the row/column.](./images/editor-plan-camera.png)

Notice how the location of the map's origin is offset by the camera values. We need to add these back to the screen coordinates to determine where in the world the user has clicked.

Go ahead and make the changes necessary to fix the editor:

- Update the `handle_edit_input` to find where you have clicked in the world.

Compile and run to make sure that the editor is all working again.

In this section we have seen how to map between two sets of array indexes. Allowing us to adjust how things are positioned by introducing a virtual camera.

One thing you may have wondered is the impact of drawing all the tiles, when only some appear on the screen. We should be able to optimise this by only drawing the tiles that are actually on the screen. Let's see how to do that next.

## Only draw visible tiles


