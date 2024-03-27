---
title: Maze Game
---

Here is our implementation of the maze game. This is an initial prototype to explore setting up rooms with paths between them. Pay attention to the use of pointers here, and how the path uses pointers to move the player to another room.

```cpp
#include <string>

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
  room_data result = { title, description };

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


int main()
{
  room_data r1 = new_room("Room 1", "You are in a happy place");
  room_data r2 = new_room("Room 2", "This is room 2");
  room_data r3 = new_room("Room 3", "This is room 3");

  path_data p1 = new_path("A large sliding door", &r2);
  path_data p2 = new_path("An open corridor", &r3);

  room_ptr current_room = &r1;

  print_room(current_room);
  print_path(0, p1);
  print_path(0, p2);

  int option = read_integer("Option: ");

  while(option < 0 || option > 1)
  {
    printf("Choose a value between 0 and 1\n");
    option = read_integer("Option: ");
  }

  if ( option == 0 )
  {
    move_player(current_room, p1);
  }
  else 
  {
    move_player(current_room, p2);
  }

  print_room(current_room);
}
```
