---
title: Activities
---

## Test Your Knowledge

### Altering Products & Staff

We can now pass by reference! This means we can finally edit existing data, like our product to change its details!

Your program should:

- Introduce an "Alter Product" screen which allows the user to:
  - Alter a Product's Name
  - Alter a Product's Brand
  - Alter a Product's Price
  - Alter a Product's Current Stock
  - (For now, just alter your existing product)
- Modify your existing code to make use of indirect access

### Breaking Down Dotifin

Now that we can pass by reference, we can tidy up our main input loop a lot and make it look significantly nicer and add some functionality in to let us change existing songs!

Your program should:

- Introduce an "Alter Song" screen which allows the user to:
  - Alter a Song's File Name
  - Alter a Song's Name
  - Alter a Song's Genre (one of Pop, Rock, RnB)
  - Resets a Song's Number of Listens back to 0
  - (For now, just alter your existing Song)
- Add the functionality to increase number of listens for songs and Dotifin
- Modify your existing code to make use of indirect access

### Breaking Down our RPG

Now that we know how to pass by reference, our game will look much tidier once we move most of it outside of the main loop into separate functions! On top of that, we're going to make it so our NPCs have some life in them by moving them around the game!

Your program should:

- Add a Target Struct which has an:
  - X Pos
  - Y Pos
- Add this Target Struct to your NPC Struct
- Introduce a "New Target" function which creates a random location within a certain radius of an NPC and assigns it as its target
  - You might need to include math.h to help with this!
- Make it so your NPC will always move towards its target until it gets near it, where it will generate a new target
- Modify your existing code to make use of indirect access
  - This includes moving most of the logic out of main into a tick function
  