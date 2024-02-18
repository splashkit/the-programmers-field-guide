---
title: Activities
---

## Test Your Knowledge

### Adding more Products

Now that we have access to arrays, we can actually add some more stock and salespeople to our application without repeating ourselves!

For

Your program should:

- Have a Products array with up to 10 products allowed
  - Modify your StorePOS struct to use an Array for Products instead
- Have an "Add Product" screen which allows users to add a product to the system
- Have a "Delete Product" screen which allows users to list all products
  - Users can then select a product from this list to delete from the system
- Have a "View Products" screen which allows users to list all products
  - Users can then select a product from this list which they can then alter, delete, or view details of

### Adding Favourite Songs

We finally have access to arrays! This means we can add some more songs to our application without redundant code!

For 

Your program should:

- Have a Songs array with up to 10 songs allowed
  - Modify your Dotifin struct to use an Array for Songs instead
- Have an "Add Song" screen which allows users to add a song to Dotifin
- Have a "Delete Song" screen which allows users to list all songs
  - Users can then select a song from this list to delete from Dotifin
- Have a "View Songs" screen which allows users to list all songs
  - Users can then select a song from this list to listen to, alter, or delete

### Adding Multiple NPCs

We can finally bring our game to life by adding multiple NPCs which can all move around, hooray!

For

TO ADD HERE: Have NPCs die off over time, going close to them resets their duration, have them multiply if they get near each other.

Your program should:

- Have a NPCs array with up to 100 NPCs allowed
- Create a "Spawn NPC" function which spawns an NPC somewhere random on the screen
- Spawn in 3 NPCs at the beginning of the game
- Modify your render function to use this new NPCs array
- Modify your movement functionality from last task to all of the NPCs
- Modify collision functionality from last task to all of the NPCs and add:
  - If two NPCs enter "smaller" collision, then they should create a new NPC somewhere random on the screen
    - NPCs can only create other new NPCs after a 10 second cooldown after they just created a new NPC
