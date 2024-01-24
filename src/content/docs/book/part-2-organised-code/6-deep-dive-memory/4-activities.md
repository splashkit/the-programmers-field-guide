---
title: Activities
---

## Test Your Knowledge

### Having as many Products as we want

Now we have access to dynamic arrays, we can remove the limits on our previous arrays and add as many Products as we want!

For

Your program should:

- Change each of the arrays into dynamic arrays
- Modify existing functionality to handle dynamic arrays

### Adding Playlists

Now that we have access to dynamic arrays, we can let our user's add as many favourite songs as they want, and create Playlists!

For

Your program should:

- Modify existing code to make use of dynamic arrays
- Have a Playlist struct with its:
  - Name
  - Description
  - Songs
- Add a Playlist attribute to the Account struct
- Add the screen "Manage Playlists" which:
  - Allows the users to either select existing Playlists they have or create a new one
    - If creating a new Playlist, ask the user for its name and description
    - If selecting an existing Playlist:
      - Display all of the songs added to the playlist
      - Ask if the user would like to play the playlist, add songs, or remove songs
      - When adding songs, display all the songs in the application and get the user to select

### Having as many NPCs as we want

We finally have access to dynamic arrays which are one of the most useful things when managing a game, so let's make it so we can spawn in as many NPCs as we want!

For

Your program should:

- Modify existing code to make use of dynamic arrays
- Add functionality to the collision function for NPCs with other NPCs:
  - If two NPCs enter the "smaller circle" collision test, they should multiply which:
    - Creates a new NPC somewhere randomly on the screen, making sure to not initially overlap with other NPCs or the player Character
