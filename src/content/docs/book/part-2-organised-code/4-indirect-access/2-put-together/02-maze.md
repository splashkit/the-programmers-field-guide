---
title: Maze Game
---

Text based adventure games have a player move through a number of virtual rooms within the program. This code requires us to set up rooms and paths that move between them.

If you think about the game you will see that we need pointers to implement this. Each path needs to know the room it goes to. This cannot be a copy of the room - as circular paths would become impossible.

Instead, what we need is to have one place where the rooms exist, and have the paths point to their destination room.

The player's location can then also be a pointer to a room. You can think of the value as saying "this is the room I am in" and it points to the room.

:::note[Andrew's Note]

I remember playing the [adventure](https://quuxplusone.github.io/Advent/play.html) text game when I was younger. Building simple maze games became *the* thing that I did when I learnt a new language.

:::

## Understanding the program

To get started, we can build a part of the code to explore how this can work. We need some tools from the next chapter to wrap this up, but for now we can explore how paths could be created to move to a destination.

We are going to create a virtual world that the user can explore through text. The world will have **rooms** and **paths** between these rooms.

Each room will have a *title* and a *description*, and in the next chapter we will add a number of paths to other locations.

Each path will have a *description* and a *destination*. This will make it simpler to code, as paths go only one way and therefore have only one destination. This would require two paths if you want to join two rooms so that the user can travel in either direction, but alternatives involve more complexity with little savings or other benefits.

For now, the program can create three rooms. The user will be in the first room, and presented with details of two paths - one leading to each of the other rooms. The user will choose which path to take, and then be shown the details of their destination room. Then the program will terminate.

With this we have the main mechanics for a maze game, and when we learn to deal with multiples we can easily start to build multiple rooms each with multiple paths.

## Choosing Building Blocks

### Structs and Pointers

I would start with the main entities, and the data they will contain. For this, there are two clear entities which we can code as structs: **room** and **path**.

The room will have fields for title and description, while the path will have a description and a destination.

Going forward we will want to have paths within our rooms, so we can start by coding the path struct ahead of the room struct. There is a challenge here, we need to code the room pointer within the path, but the room will be declared after the path. To achieve this we can use a **forward declaration**.

To do this, we use a `typedef` and set up an alias for a pointer to a `struct room_struct`. We can name this type `room_ptr`. The code for this is shown below.

```cpp
typedef struct room_struct *room_ptr;
```

Then in the path, we can use this `room_ptr` type when we declare the destination field.

```cpp
typedef struct path_struct
{
  string    description;
  room_ptr  destination;
} path;
```

We also need to fulfil the forward declaration, and provide details of what the `struct room_struct` is. This can be coded as shown below:

```cpp
typedef struct room_struct
{
  string title;
  string description;
} room;
```

These are all the types we need, so now we can focus on the functions and procedures that work with these.

### Functions and Procedures

There isn't much logic in this small prototype, as the main objectives are to create rooms and paths. The logic for moving can be coded into main until such time as we can expand the structs with some additional details.

For this we will need to create:

- A `read_int` function - using either the SplashKit `read_line` code or `scanf`.
- A `new_room` function - to populate a room with a title and description.
- A `new_path` function - to populate a path between rooms.
- A `print_room` procedure - to output details of a room to the user.
- The `main` function - to create the rooms, and paths, position the player in the first room, print the details of the room they are in, print the details of the paths, get which path the user wants to take, move the player through the path


