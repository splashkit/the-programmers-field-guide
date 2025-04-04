---
title: Music Player
sidebar:
    label: " - Music player"
---

Create a music player. This will allow the user to load and play songs, marking songs as ones they love, and keeping track of how many times songs are played.

The music player will have:

- a number of songs (the system needs to support up to 100 songs)
- the id for the next song (an integer, starting at 0)

Each song will have:

- a name
- a unique identifier (system generated string in the form "song-0", "song-1", etc.)
- a path to the file the song was loaded from
- a loved status (boolean)
- a number of times played

The program will need to allow the user to:

- Add a new song

  As long as there is capacity, the user will be asked to enter the name, path, and loved status of the song. The number of times played will be initialised to 0, and the unique identifier will be system generated.
  
  The song data will be allocated a unique identifier, using the next id from the music player data. For example, if the next id is 0 then the song's identifier will be "song-0". Once this is allocated, the music player data's next id needs to be incremented by one.
  
  Once the song data has its unique identifier, the system will load the file so that the song can be played. See [load music](https://splashkit.io/api/audio/#load-music). Pass `load_music` the song's unique identifier and the path the user entered.

- Delete a song

  The user is asked to enter the name to search for, and is then shown a numbered list of all the songs that contain that text to choose from. They enter the number of the song they want, and it is removed from the system.

- Update a song

  The user selects a song in the same way they did for delete song. In this case, they are shown the details of the song, and a list of options to choose from. These include:

  - Update name (they are asked to enter the new name)
  - Update loved (this will toggle loved)
  - Reset times played (sets times played to 0)
  - Quit update

  This menu will repeat until the user chooses to quit back to the main menu.

- Play a song

  The user selects a song as with delete or update. This will then update the times played, and use the [play music](https://splashkit.io/api/audio/#play-music-named) procedure to start the song playing. You can pass `play_music` the song's unique id.

- Pause / Resume song

  This will use [pause music](https://splashkit.io/api/audio/#pause-music) or [resume music](https://splashkit.io/api/audio/#resume-music) depending on if music is currently playing.

- Print status

  The user is shown a report that contains:

  - Total sale value
  - Total profit
  - Number of songs
  - Total number of songs played
  - Total number of loved songs.

- Quit

  Ends the program.

:::tip

Use a struct for the music player data, this can contain the array, the number of songs, and the next unique id. You can then pass this to functions and procedures you create.

:::

:::tip

Also have a song data struct. You can use this to store the data for one song, and pass it as a parameter when you are working with a single song.

:::

:::tip

Several of the features will require a search function. You can return the index of the song the user selected, and then the caller can determine what to do with the song selected.

:::
