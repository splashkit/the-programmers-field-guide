---
title: Simple Music Player
sidebar:
  label: " - Simple Music Player"
---

With control flow we can now build a simple music player that lets the user load and play songs.
This program will:

- Show a menu for the user to select from
- Allows the user to load a song from a file
- Outputs a message to confirm if the music file was loaded
- Allows the user to play a song
- Will output a message if they try to play something they have not loaded
- Allows the user to stop the music
- Will output a message if they try to stop music and nothing is playing

Here is an example of the output from this:

```txt
Welcome to my simple music player

1: Load song
2: Play song
3: Stop song
4: Quit
Option: 1

What is the name of the song: Test
Path to the file: /c/Users/andrew/Downloads/test.ogg

Loading /c/Users/andrew/Downloads/test.ogg failed!

1: Load song
2: Play song
3: Stop song
4: Quit
Option: 3

No music is playing playing

1: Load song
2: Play song
3: Stop song
4: Quit
Option: 1

What is the name of the song: Test
Path to the file: /c/Users/andrew/Downloads/test.ogg

Loading /c/Users/andrew/Downloads/test.ogg passed!

1: Load song
2: Play song
3: Stop song
4: Quit
Option: 2

What is the name of the song: my song
There is nothing called 'my song' loaded

1: Load song
2: Play song
3: Stop song
4: Quit
Option: 2

What is the name of the song: Test
(music starts playing)

1: Load song
2: Play song
3: Stop song
4: Quit
Option: 4

Bye
```

:::tip
You can check if [Load Music](https://splashkit.io/api/audio/#load-music) succeeded by calling [Has Music](https://splashkit.io/api/audio/#has-music). If this returns false, then it failed to load the music.
:::
