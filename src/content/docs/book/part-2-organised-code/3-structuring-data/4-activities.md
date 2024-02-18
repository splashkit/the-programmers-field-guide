---
title: Activities
---

## Test Your Knowledge

### Creating Stock and Salespeople

Now that we've got the backbone of the store POS, we need to actually add some functionality and things to fill it up! Here we're going to be creating some Stock and Salespeople objects and introducing some basic functionality.

Your program should:

- Have a Product struct with its:
  - Name
  - Description
  - Price
  - Current stock
- Have a Staff struct with their:
  - Name
  - Position (One of: Salesperson, Manager, Owner)
  - Sale count (How many Products they've sold)
- Have a StorePOS struct with:
  - A Product
  - A Staff
- Have a Staff
- Have a Product
- Have a StorePOS
- Modify your existing code to make use of these new structs
- Introduce a "View Product" screen which:
  - Shows a Product's Name
  - Shows a Product's Description
  - Shows a Product's Price
  - Shows a Product's Current Stock
- Introduce a "View Staff" screen which:
  - Shows a Staff's Name
  - Shows a Staff's Position
  - Shows a Staff's Sale Count

### Creating Songs and Artists

Now that we actually are able to accept and validate input, we actually need some Song and Artist information to store to make this feel more like a music application!

Your program should:

- Have an Artist struct with their:
  - Name
  - About (bio)
- Have a Song struct with its:
  - File Name
  - Name
  - Genre (one of Pop, Rock, RnB)
  - Runtime
- Have a Dotifin struct with:
  - An Artist
  - A Song
- Have an Artist
- Modify your existing code to make use of these new structs
- Introduce an "Add Song" screen which allows the user to:
  - Specify a file name for that song
  - Specify a name for that song
  - Specify a genre for that song
  - Create a Song
  - Play that Song
- Introduce a "Show Artist Details" screen which:
  - Shows the About section for an Artist
  - Shows the Bio section for an Artist

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
- Have a Player
- Have a NPC
- Have a Game
- Modify your existing functionality to make use of the new structs
  - This includes modifying your Render function to make use of the Game struct!
