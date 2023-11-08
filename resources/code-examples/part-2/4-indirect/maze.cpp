#include <string>

using std::string;

typedef struct room_struct *room_ptr;

typedef struct path_struct
{
  string    description;
  room_ptr  destination;
} path;

typedef struct room_struct
{
  string title;
  string description;
} room;

room new_room(string title, string description)
{
  room result = { title = title, description = description };

  return result;
}

path new_path(string description, room_ptr destination)
{
  path result = { 
    description = description,
    destination = destination
  };

  return result;
}

void print_room(room_ptr room)
{
  printf("%s\n-----\n%s\n", room->title.c_str(), room->description.c_str());
}

double read_int(const string &prompt)
{
  int result = 0;
  
  printf("%s", prompt.c_str());
  while (scanf(" %d", &result) != 1) // Read value, and try to convert double
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
  room r1 = new_room("Room 1", "You are in a happy place");
  room r2 = new_room("Room 2", "This is room 2");
  room r3 = new_room("Room 3", "This is room 3");

  path p1 = new_path("A large sliding door", &r2);
  path p2 = new_path("An open corridor", &r3);

  room_ptr current_room = &r1;

  print_room(current_room);

  int option;

  printf("0 - %s\n", p1.description.c_str());
  printf("1 - %s\n", p2.description.c_str());
  option = read_int("Option: ");

  while(option < 0 || option > 1)
  {
    printf("Choose a value between 0 and 1\n");
    option = read_int("Option: ");
  }

  if ( option == 0 )
  {
    current_room = p1.destination;
  }
  else 
  {
    current_room = p2.destination;
  }

  print_room(current_room);
}
