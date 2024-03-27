---
title: Graphs with the Maze
---

The maze game is a great way to start exploring the world of graphs. In this iteration of the program, we added the ability for each room to have a number of paths that lead to other rooms. This enabled us to allow the user to explore the maze, until they found the room with no exists.

```cpp
#include <string>
#include "dynamic-array-2.hpp"

using std::string;

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
  dynamic_array<path_data> paths;
} room_data;

/**
 * New path populates the data in a path struct and returns it.
 * 
 * @param description the description of the path
 * @param destination the destination of the path - a pointer to the room it goes to
 * @return path_data with the indicated details
 */
path_data new_path(string description, room_ptr destination)
{
  path_data result = { description, destination };

  return result;
}

/**
 * New room populates the data in a room struct and returns it.
 *
 * @param title         The title of the room
 * @param description   The description of the room
 * @returns             The new room data
 */
room_data new_room(string title, string description)
{
  room_data result = { title, description, dynamic_array<path_data>(0, {})};

  return result;
}

/**
 * Outputs the path's description to the terminal. Showing the index of the path
 * and the description, but no details of where it goes.
 * 
 * @param idx   the index of the path - used to select it from the list
 * @param path  the path to print (const reference)
 */
void print_path(int idx, const path_data &path)
{
  printf("%d - %s\n", idx, path.description.c_str());
}

/**
 * Output the room's title and description to the terminal.
 * 
 * @param room a pointer to the room to print
 */
void print_room(room_ptr room)
{
  printf("%s\n-----\n%s\n", room->title.c_str(), room->description.c_str());

  if ( room->paths.size > 0 )
  {
    printf("There are paths leading:\n");
    for (int i = 0; i < room->paths.size; i++)
    {
      print_path(i, room->paths[i]);
    }
  }
}

/**
 * Move the player through the selected path, setting the player's current room
 * to the destination of the path.
 * 
 * @param current_room a reference to the player's current room (a pointer to the room_data)
 * @param path a constant reference to the path to move through
 */
void move_player(room_ptr &current_room, const path_data &path)
{
  current_room = path.destination;
}

/**
 * Reads an integer value from the user. If the user enters a non-integer value,
 * the function will continue to prompt the user until they enter a valid value.
 * 
 * @param prompt the prompt message to display to the user
 * @return int the integer value entered by the user
 */
int read_integer(const string &prompt)
{
  int result = 0;
  
  printf("%s", prompt.c_str());
  while (scanf(" %d", &result) != 1) // Read value, and try to convert to int
  {
    // Convert failed, as input was not a number
    scanf("%*[^\n]"); // Read past the end of the current line
    printf("Please enter a whole number.\n");
    printf("%s", prompt.c_str());
  }
  
  return result;
}

void explore(room_ptr &room)
{
  int option = 0;

  print_room(room);

  option = read_integer("Which path do you want to take? ");

  while(option < 0 || option > room->paths.size - 1)
  {
    printf("Choose a value between 0 and %d\n", room->paths.size - 1);
    option = read_integer("Option: ");
  }

  move_player(room, room->paths[option]);
}

int main()
{
  room_data r1 = new_room("Room 1", "You are in a happy place");
  room_data r2 = new_room("Room 2", "This is room 2");
  room_data r3 = new_room("Room 3", "This is room 3");

  r1.paths.add(new_path("A large sliding door", &r2));
  r1.paths.add(new_path("An open corridor", &r3));
  r1.paths.add(new_path("A small door", &r1));

  r2.paths.add(new_path("A large sliding door", &r1));
  r2.paths.add(new_path("A small door", &r1));
  
  room_ptr current_room = &r1;

  while(current_room->paths.size > 0)
  {
    explore(current_room);
  }

  printf("You have reached the end of the maze!\n");
  print_room(current_room);
}
```