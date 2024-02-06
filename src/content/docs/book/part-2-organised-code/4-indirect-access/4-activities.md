---
title: Activities
---

## Test Your Knowledge

### Breaking Down our POS System

We can now pass by reference! This means we can separate our code and move things outside of the main input loop to tidy things up!

Your program should:

- Be separated into separte functions for:
  - Handling input
  - Changing the screen
  - Selling a product
  - Changing the stock
- - Introduce a "Sell Product" screen which allows the user to:
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

### Breaking Down Dotifin

Now that we can pass by reference, we can tidy up our main input loop a lot and make it look significantly nicer!

Your program should:

- Be separated into separate functions for:
  - Handling input
  - Changing the screen
  - Adding a Song

### Breaking Down our RPG

Now that we know how to pass by reference, our game will look much tidier once we move most of it outside of the main loop into separate functions!

Your program should:

- Be separated into separate functions for:
  - Movement
  - Collision
  - Rendering/Drawing to screen
- Add the functionality to have the NPC:
  - Move back and forth
  - Wait at random points in their move cycle
