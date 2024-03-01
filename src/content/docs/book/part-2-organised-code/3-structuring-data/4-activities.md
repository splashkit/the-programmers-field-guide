---
title: Activities
---

## Test Your Knowledge

### Creating Products

Now that we've got the backbone of the store POS, we need to actually add some functionality and things to fill it up! Here we're going to be creating some Stock objects and introducing some basic functionality.

Your program should:

- Have a Product struct with its:
  - Name
  - Brand
  - Category (One of: Dairy, Bakery, Snack, Frozen)
  - Current stock
- Have a StorePOS struct with:
  - A Product
  - Salecount
- Have a Product
- Have a StorePOS
- Modify your existing code to make use of these new structs
  - This includes modifying your print_product function from last task to now only printing out product information
- Introduce an "Add Product" screen which allows the user to enter all of the a new product's details, then returns the product

### Creating Songs and Artists

Now that we actually are able to accept and validate input, we actually need some Song information to store to make this feel more like a music application!

Your program should:

- Have a Song struct with its:
  - File Name
  - Name
  - Genre (one of Pop, Rock, RnB)
  - Number of Listens
- Have a Dotifin struct with:
  - A Song
  - Total Listens
- Modify your existing code to make use of these new structs
- Introduce an "Add Song" screen which allows the user to:
  - Specify a file name for that song
  - Specify a name for that song
  - Specify a genre for that song
  - Create a Song
  - Play that Song
- Introduce a "Print Song" screen which outputs all of a song's details

### Creating the Player and NPCs

Now that we can move around the screen and "interact" with NPCs, let's actually give the player character and NPCs some attributes which we can use to make our life easier.

Your program should:

- Have a Player struct with their:
  - X position
  - Y position
  - Radius
  - Move speed
  - Colour
- Have a NPC struct with their:
  - Name
  - X position
  - Y position
  - Radius
  - Move speed
  - Alive status
  - Close status
  - Normal Colour
  - Close Colour
- Have a Game struct with:
  - A Player
  - A NPC
  - A Game State (One of: Running, Won, Lost)
- Have a Player
- Have a NPC
- Have a Game
- Modify your draw_npc() function to colour the NPC different colours depending on whether or not the player is close
  - You'll also need to modify your collision check to get this working!
- Modify your other existing functionality to make use of the new structs
  - This includes modifying your Render function to make use of the Game struct!
