---
title: Activities
---

## Test Your Knowledge

### Altering Products & Staff

We can now pass by reference! This means we can finally edit existing data, like our product and staff member!

Your program should:

- Introduce an "Alter Product" screen which allows the user to:
  - Alter a Product's Name
  - Alter a Product's Description
  - Alter a Product's Price
  - Alter a Product's Current Stock
  - (For now, just alter your existing product)
- Introduce an "Alter Staff" screen which allows the user to:
  - Alter a Staff's Name
  - Alter a Staff's Position
  - (For now, just alter your existing staff)
- Modify your existing code to make use of indirect access

### Breaking Down Dotifin

Now that we can pass by reference, we can tidy up our main input loop a lot and make it look significantly nicer!

Your program should:

- Introduce an "Alter Song" screen which allows the user to:
  - Alter a Song's File Name
  - Alter a Song's Name
  - Alter a Song's Genre (one of Pop, Rock, RnB)
  - Alter a Song's Runtime
  - (For now, just alter your existing Song)
- Introduce an "Alter Artist" screen which allows the user to:
  - Alter a Staff's Name
  - Alter a Staff's Bio
  - (For now, just alter your existing Artist)
- Modify your existing code to make use of indirect access

### Breaking Down our RPG

Now that we know how to pass by reference, our game will look much tidier once we move most of it outside of the main loop into separate functions!

Your program should:

- Introduce an "Alter Player Colour" screen which allows the user to:
  - Change a Player's Colour
- Introduce an "Alter NPC Colour" function which allows the user to:
  - Change an NPC's Colour
- Add a Target Struct which has an:
  - X Pos
  - Y Pos
- Add this Target Struct to your NPC Struct
- Introduce a "New Target" function which creates a random location within a certain radius of an NPC and assigns it as its target
- Make it so your NPC will always move towards its target until it gets near it, where it will generate a new target
- Modify your collision check function to instead:
  - If the NPC/Player are in the smaller circle radius, change the colour of the NPC
  - If the NPC/Player are colliding, make sure they don't overlap
    - Then, push the NPC away from the player by an appropriate distance
