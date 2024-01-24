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
- Have a Staff
- Have a Product
- Introduce a "Sell Product" screen which allows the user to:
  - Select which Staff is responsible for the sale
  - Select which Product has been sold
  - Select how many of the Product has been sold
  - Reduces the stock of the Product and increases the sale count of the Staff
- Introduce an "Alter Stock" screen which is only accessible by Managers and Owners, and allows the user to:
  - Select a Product to restock
  - Input a number (either positive or negative) to change the stock by
  - Change the stock of the Product by that amount

Validation:

- Ensure that the current stock of an item cannot go below 0

### Creating Songs and Artists

Now that we actually are able to accept and validate input, we actually need some Song and Artist information to store to make this feel more like a music application!

Your program should:

- Have an Artist struct with their:
  - Name
  - About (bio)
  - Number of listens
- Have a Song struct with its:
  - Name
  - Genre (one of Pop, Rock, R&B)
  - Artist
  - Runtime
  - Number of listens
- Have an Artist
- Introduce a "Add Song" screen which allows the user to:
  - Select an artist for that song
  - Specify a file name for that song
  - Specify a name for that song
  - Specify a genre for that song
  - Create a Song
- Introduce a "Browse Artists" screen which allows the user to:
  - Select which Artist they would like to browse
    - Show the About section for that Artist
    - Show the songs by that Artist once selected
  - Select a song, and play that song
  - Increase the number of listens for both the artist and the song

### Creating the Player and NPCs

Now that we can move around the screen and "interact" with NPCs, let's actually give the player character and NPCs some attributes which we can use to make our life easier.

Your program should:

- Have an Actor struct with their:
  - Name
  - X position
  - Y position
  - Move speed
- Have a Player Actor
- Have a NPC Actor
- Modify your existing functionality to make use of the new Actors
- Modify your collision check function to instead:
  - If the NPC/Player are in the smaller circle radius, change the colour of the NPC
  - If the NPC/Player are colliding, make sure they don't overlap
    - Then, push the NPC away from the player by an appropriate distance