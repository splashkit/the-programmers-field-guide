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

I would start with the main entities, and the data they will contain. For this, there are two clear entities which we can code as structs: **room_data** and **path_data**.

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
} path_data;
```

We also need to fulfil the forward declaration, and provide details of what the `struct room_struct` is. This can be coded as shown below:

```cpp
typedef struct room_struct
{
  string title;
  string description;
} room_data;
```

These are all the types we need, so now we can focus on the functions and procedures that work with these.

### Functions and Procedures

There isn't much logic in this small prototype, as the main objectives are to create rooms and paths. The logic for moving can be coded into main until such time as we can expand the structs with some additional details.

For this we will need to create:

- `read_int` function - using either the SplashKit `read_line` code or `scanf`.
- `new_path` function - to populate a path between rooms.
- `new_room` function - to populate a room with a title and description.
- `print_path` procedure - to output details of a path as part of a list the user can choose from
- `print_room` procedure - to output details of a room to the user.
- `move_player` procedure - to move a player to the destination of a path.
- The `main` function - to create the rooms, and paths, position the player in the first room, print the details of the room they are in, print the details of the paths, get which path the user wants to take, move the player through the path

#### Read Integer

Check out the code in the [printing and scanning](../../1-concepts/03-printing-scanning) section, or copy in your code that uses `read_line` from SplashKit. This function will ensure that the user enters a number so that we can determine which path they want to take.

The pseudocode for this is the same as we covered previously. So there should be nothing new here.

#### New Path

This function will populate a path struct value and return it to the caller. While this can be achieved with a single line at the moment, we will want to be able to expand the struct going forward and this will mean changes to the way things are initialised. Having a function that is responsible for this means we only have one place we need to update when we want to change how initialisation works.

Below if the header comment for the function. This captures the requirements for what this will need to do. In the code, you will need to declare a `path_data` variable, set its title and descriptions, and return it.

```cpp
/**
 * New path populates the data in a path struct and returns it.
 * 
 * @param description the description of the path
 * @param destination the destination of the path - a pointer to the room it goes to
 * @return path_data with the indicated details
 */
```

#### New Room

Like the new path function, this function will populate a room struct with the required data. Below if the header comment for the function.

```cpp
/**
 * New room populates the data in a room struct and returns it.
 *
 * @param title         The title of the room
 * @param description   The description of the room
 * @return room_data with the indicated details
 */
//...
```

#### Print Path

Print path will output a paths details to the terminal. This will always be printed in a list, so we can accept a parameter for the index of the path to include. This can then be used by the user to determine which path they want to take.

```cpp
/**
 * Outputs the path's description to the terminal. Showing the index of the path
 * and the description, but no details of where it goes.
 * 
 * @param idx   the index of the path - used to select it from the list
 * @param path  the path to print (const reference)
 */
//...
```

#### Print Room

This will also be a simple procedure at this stage. We can print the title, and room description. Going forward we will need to expand this to also display the paths from the room.

```cpp
/**
 * Output the room's title and description to the terminal.
 * 
 * @param room a pointer to the room to print
 */
//...
```

:::tip

If you are using `printf`, remember that `%s` is for c-strings. You will need to use `.c_str()` to get this from your C++ string object. You can access in the room's title like this for example:

```cpp
room->title.c_str()
```

:::

#### Move Player

Move player will perform the actions needed to move a player through a path to a new room. The player is represented by a pointer to `room_data`. As we need to update this, we can pass the pointer by reference. In effect, this is a pointer to the pointer that needs to be updated. When you dereference the pointer-pointer, you get to the pointer you want to update.

:::tip
This may take some time to picture, but when you get it you will know that you are well on the way to understanding how to use and work with pointers.
:::

```cpp
/**
 * Move the player through the selected path, setting the player's current room
 * to the destination of the path.
 * 
 * @param current_room a reference to the player's current room (a pointer to the room_data)
 * @param path a constant reference to the path to move through
 */
//...
```

**TODO: add slider**

#### Main

For now, main is going to be a test ground for this program. We can use this to get these building blocks working together.

We will need this to do the following:

- Set up the rooms
- Create some paths
- Get current room to point to room 1
- Show the user the room they are in (current room)
- Show them the paths we set up
- Ask which path they want to take
- Move them through that path
- Print the details of the room they are in (using the current room)

I would suggest you set up 3 rooms and 2 paths. You can picture these paths being in room 1. One path can go to room 2 and the other to room 3. Test it out by taking the different paths.

Try changing one of the paths to go to room 1. What happens to the current room when you take this path?

:::caution[Printing the room]
No cheating here... make sure you are always printing the current room. All the calls to print room should be passed the current room pointer. Changing where it points should then give you the different output messages.

```cpp
print_room(current_room);
```

:::

When you get this to work spend some time thinking about how this is all coming together. You want to focus on understanding how the pointer in current room is working. When this clicks, you will start to see the potential that pointers (and reference in other languages) offer you.

## NULL and nullptr

In C/C++ you can use `NULL` or `nullptr` to represent a pointer to nothing. We could use this to create a path that leads... nowhere.

Try updating one of your paths to have the `nullptr` as its destination. What happens when you run your program? Why does this happen?

You can guard against this in the `move_player` code. See if you can get this working so that it runs even when paths go nowhere.
