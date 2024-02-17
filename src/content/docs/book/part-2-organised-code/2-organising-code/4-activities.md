---
title: Activities
---
## Test Your Knowledge

### Store POS Input System

Over the next few activities, we're going to be creating a store's POS database to manage transactions and stock. Here we're going to set up the main input loop into separate functions, similarly to what we did in the earlier parts for our calculator.

As a start for our store POS database, we're going to have to start with the backbone of the application, which will handle printing "screens" to the terminal, handling user input for numbers, as well as changing screens based on those input numbers. Your program should ensure whatever input taken by the user is valid. At any input point, the user should be able to return to the main screen or quit the application. Make sure you're splitting up your code into functions!

Your program should:

- Ask the user which "screen/functionality" they would like to choose
  - This should ask the user to input an int which is displayed next to a "screen/functionality"
- Wait for user input, then change the "screen/functionality" based on what they chose
  - For now just include welcome messages for each "screen"
- Add a "screen/functionality" which prompts the user for staff details and then outputs them including:
  - Staff Name
  - Staff Position (eg: Salesperson, Manager, Owner, etc)
  - Staff Sale Count
- Allow the user to go back to the main screen at any point or quit the application

Validation:

- Ensure that the user input int your program takes matches the options of your "screens/functionality"

Functions you should have:

- read_int_range(string, outputMessage, int inputInt) - Prints a message to prompt user for input, reads an integer from user input, ensures it is in a specific range, then returns it
- process_int_input(int inputInt) - Performs different operations, like changing "screens" based on the integer input
- print_staff_details() - Asks the user for input for staff details, then outputs them

### Dotifin Input System

Over the next several activities, we're going to be creating our own music application... Dotifin! This application will allow us to play music, browse artists, search for our favourite songs, and more! Here we're going to be setting up the main input loop into separate functions, similar to what we did for the earlier music activities.

As a start for our Dotifin application, we're going to have to start with the backbone of the application, which will handle printing "screens/functionality" to the terminal, handling user input for numbers, changing screens, as well as the simple music file playing from the earlier activities. Your program should ensure whatever input taken by the user is valid. At any input point, the user should be able to return to the main screen or quit the application. Make sure you're splitting up your code into functions!

Your program should:

- Ask the user which "screen/functionality" they would like to choose
  - This should ask the user to input an int which is displayed next to a "screen/functionality"
- Wait for user input on each screen, then change the "screen/functionality" based on what option they choose
- Add a play song "screen" that asks the user for a music file's filename and what they would like to name it, then plays it
- Add a stop song "screen" which stops any music playing

Validation:

- Ensure that whatever user input your program takes matches the options
- Ensure any songs loaded are valid (hint: use music_valid(music musicToCheck))

Functions you should have:

- read_integer_range(string outputString, int inputInt) - Prints a message to prompt user for input, reads an integer from user input, ensures it is in a specific range, then returns it
- process_int_input() - Performs different operations, like changing "screens" based on the integer input
- load_song() - Asks the User for a File name and name for their music, loads it, then returns it (You can take this from your earlier tasks and adapt it for C++!)
- play_song() - Takes in a song and plays it
- stop_song() - Stops any music from playing

### RPG Collision Tests

Over the next lot of activities, we're going to be creating some functionality for our very own Role Playing Game (RPG)! This game will allow us to walk around, interact with Non-Player Characters (NPCs), pick up and use items, and more! Here we're going to be setting up the main event and render loop, as well as create some more efficient collision tests.

As a start to our RPG Game, we're going to start with our event loop and render loop. Your program should first spawn (draw) a player character to the screen, as well as a NPC to the screen. After that, the player should be able to move their character around the screen with WASD, not allowing them to leave the edges of the screen. Lastly, perform a series of collision checks, starting with a very large circle around the player character, then smaller circle, then a precise collision. If the player ever collides with the NPC, delete them for now. Make sure you're splitting up your code into functions!

Your program should:

- Draw the player character to the center of the screen (just a square for now!)
- Draw a NPC to the screen somewhere away from the character (just a triangle for now!)
- Allow the player to move their character around the screen with WASD
  - Don't let the character leave the edges of the screen
- Perform a series of collision checks:
  - First, see if anything is within a relatively large circle of the player
  - If that succeeds, then check a smaller circle that still fits the player inside comfortably
  - Finally, if that succeeds, check to see if something is actually colliding with our character
  - Don't Draw the NPC anymore for now if the player character ever collides with them
  
Functions you should have:

- render() - Performs the drawing of the characters and screen
- draw_player(int playerX, int playerY) - Draws the player character from their coordinates
- draw_NPC(int npcX, int npcY) - Draws the NPC from their coordinates
- collision_radius(float radius, int originX, int originY, int destinationX, int destinationY) - Checks to see if point (desintationX, destinationY) is in circle of size radius at (originX, originY)
- has_NPC_player_collided(int playerX, int playerY, int npcX, int npcY) - Checks three different collision tests and returns true if all three succeed

REMOVE LATER IF NOT NEEDED
- CollisionRadius - Takes two points and a radius and checks if the second point is in a circle around the first point of distance radius
