---
title: Activities
---

## Test Your Knowledge

### Adding more Products

Now that we have access to arrays, we can actually add some more stock and salespeople to our application without repeating ourselves!

For

Your program should:

- Add more Products (let's say up to 5 for now)
- Add more Staff (again, up to 5 for now)
- Modify existing functionality to account for multiple Products and Staff
- Add a new "Check Stock" screen which:
  - Displays all of the Product's name and stock in order of greatest stock to fewest stock
  - For Products with stock 5 or fewer, have a warning message before this stock is displayed
- Add a new "Check Sales" screen which:
  - Displays all of the Staff's sale counts in order of greatest stock to fewest stock

### Adding Favourite Songs

We finally have access to arrays! This means we can add some more songs to our application without redundant code!

For 

Your program should:

- Allow the user to add more than one Song and Artist to the application (let's say up to 10 for now)
- Modify existing functionality to allow for multiple Songs and Artists
- Add an Account struct with their:
  - Name
  - Account creation date
  - Top 5 Favourite Songs
  - Favourite music genre
- Have a new "Add Favourite" screen which:
  - Lists all songs
  - Allows the User to select one and add it to their Account's favourite songs
- Have a new "Play Favourites" screen which:
  - Randomly shuffles the order of the user Account's favourite songs
  - Play each of the favourite songs
  - Allow the user to skip any of the songs at any point

### Adding Multiple NPCs

We can finally bring our game to life by adding multiple NPCs which can all move around, hooray!

For

Your program should:

- Spawn in 3 NPCs at different places throughout the screen
- Modify movement functionality from last task to all three of the NPCs
- Modify colliion functionality from last task to all three of the NPCs and add:
  - NPCs should avoid collisions with each other by turning around and moving in the opposite direction if they enter the "smaller" circle collision test