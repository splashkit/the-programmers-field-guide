---
title: Maze Game
---

In the chapter on [indirectly accessing values](../../../4-indirect-access/0-overview) we started to build out a [maze game](../../../4-indirect-access/2-put-together/02-maze). The idea of this was to have rooms that were connected by different paths. This is a great way of working with pointers, as the player could point to the room they were in, and paths can point to their destinations.

One of the limitations of the maze game at that point was that we didn't yet have arrays. Now that we have variable arrays we can return to the maze and add the paths into each room. In this way, each room can have its own paths that lead elsewhere.

## Recap

The maze game involved locations (rooms) connected by paths. For this we created the following structs:

```cpp
typedef struct room_struct *room_ptr;

typedef struct path_struct
{
  string    description;
  room_ptr  destination;
} path_data;

typedef struct room_struct
{
  string title;
  string description;
} room_data;
```

Each room had a title and description, and each path had a description and destination. The location of the player and the path destinations were all handled by using pointers to rooms.

Now that we have a dynamic array, we can expand our solution to include multiple paths within each room.

:::note
We could also redo the solution to embed member functions within the room and path structs. For now, we will not change the rooms to use member functions, but just embed the dynamic array we have created.
:::

## Adding Paths

Adding multiple paths to a room is as simple as adding a `paths` field to the `room_struct`. Doing this will mean that we then need to update the `new_room` code to make sure it initialises the result with an empty dynamic array.

The following code shows how you can create an empty dynamic array. The `{}` can be used to create empty path data to be used as the default if needed.

```cpp
room_data new_room(string title, string description)
{
  room_data result = { 
    title,
    description,
    dynamic_array<path_data>(0, {})
  };

  return result;
}
```

In `main` we had created a number of rooms and paths. You can now move the paths into a room. In my case, I am going to put my existing paths into room 1. Then I can add some more paths to the other rooms.

The code to add a path to a room would look like this:

```cpp
path_data p1 = new_path("A large sliding door", &r2);
// becomes
r1.paths.add(new_path("A large sliding door", &r2));
```

At this stage we have rooms that now contain a variable number of paths that lead to other rooms in the maze.

## Printing the room

With paths in a room we now need to change the code for printing a room so that it prints all the paths in the room as well.

We already have the code to print a path. So you can code this with a for loop where you access each path from `room->paths`, and pass it to the `print_path` procedure we previously created.

:::tip
Remember you can use `room->paths.size` to get the number of paths to be printed.
:::

I suggest you add a message above this list of paths saying something like "There are paths leading:". This will let the user know what the list refers to.

Now you can remove the printing of paths from main, as this is all done in `print_room` now.

## Exploring the maze

The player will be in the `current_room`. Now that the room has paths, we can ask the user which path they want to take. As they move around they will see the different paths in the different rooms.

To code this, let's create an `explore` procedure. This can take a parameter for the `room_ptr` where the player is located. As we want to update this, we need to pass this pointer by reference in the same way we have with `move_player`. This will mean we can update the passed in room pointer.

:::tip[Pointer by reference?]

Yes, you can pass a reference to a pointer. As you recall, a reference is just a pointer itself. So this is now, in a way, a pointer to a pointer.

If you want to work with the pointers yourself, you can create a pointer to a pointer using `room_data **`.

:::

Within `explore`, we can print the room, then read in the path the user wants to take. The index they provide us can then be used to access the path that the player should move through.

If the room pointer is in a `current_room` variable, and we read the path the user chooses into an `option` variable, then we can achieve this move using:

```cpp
move_player(current_room, current_room->paths[option]);
```

Notice here we get the paths from the `current_room`. This will mean the user only has access to the room they are currently in. When they move to a new room, they will only have access to the paths in that room.

## The main logic

In main, make sure you have a few rooms to play with. Set the current room, and then let the user keep exploring while there are exists in the current room. When they do reach the end, you can print a farewell message and show the details of the final room.

I achieved this with the following code.

```cpp
  while(current_room->paths.size > 0)
  {
    explore(current_room);
  }

  printf("You have reached the end of the maze!\n");
  print_room(current_room);
```

Compile and run the program, and you should be able to explore your maze. Make sure you have a room with no paths, that is reachable via paths from other rooms. Explore your maze and make sure it works as expected.

## Graphs

Have you noticed how the structure of the maze is similar to a [linked list](../../../6-deep-dive-memory/2-put-together/03-0-linked-list)?

You can think of the maze as a graph, and the player is able to traverse that graph exploring the data along the way. While we used a game style theme here, the skills you develop by thinking and working through this will help you in other contexts that use graphs. For example, exploring connections in a social media graph, finding files in a file system, and many other applications.
