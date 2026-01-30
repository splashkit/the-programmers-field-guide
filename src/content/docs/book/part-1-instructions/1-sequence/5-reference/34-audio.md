---
title: Audio Procedures
sidebar:
  label: " - Audio Procedures"
---

SplashKit also provides procedures you can use to load and play sound effects and music. You can use sound effects to play multiple different sounds at once, while music is designed for longer running background sound for your applications with only one music track being able to be played at once.

## Playing sound effects

Sound effects are designed to be used for short sounds that are triggered by actions in your program. You can play several sound effects at the same time.

SplashKit can handle several file formats for sound effects, but the best and most reliable is [Ogg Vorbis](https://xiph.org/vorbis/). You can use programs like [Audacity](https://www.audacityteam.org) to edit and convert sound effects to the Ogg Vorbis format.

| <div style="width:130px">**Procedure**</div> | **Required Arguments** |**Description** |
|-----------|------------------------|----------------|
| [Load Sound Effect](https://splashkit.io/api/audio/#load-sound-effect) | the name of the sound effect and its filename | As with `load_bitmap`, but this loads the sound effect into your program. You can use the name to access this sound effect in other procedure calls. The filename can be the full path to a file, or the filename of a file in the **Resources/sounds** folder. |
| [Play Sound Effect](https://splashkit.io/api/audio/#play-sound-effect-named) | the name of a loaded sound effect | Plays the sound effect once at its full volume. |
| [Play Sound Effect](https://splashkit.io/api/audio/#play-sound-effect-named-with-volume) | the name of a loaded sound effect, volume | Plays the sound effect once at a percentage of its full volume. The volume should be between 0 and 1.0 |
| [Play Sound Effect](https://splashkit.io/api/audio/#play-sound-effect-named-with-times) | the name of a loaded sound effect, times | Plays the sound effect the specified number of times in a row at full volume. |
| [Play Sound Effect](https://splashkit.io/api/audio/#play-sound-effect-named-with-times-and-volume) | the name of a loaded sound effect, times, volume | Plays the sound effect multiple times in a row at a percentage of its full volume. |
| [Stop Sound Effect](https://splashkit.io/api/audio/#stop-sound-effect-named) | the name of a loaded sound effect | Stops playing the indicated sound effect. |

These procedures have the following signatures:

```c++
// These need:
// #include "splashkit.h"

sound_effect load_sound_effect(string name, string filename);
void play_sound_effect(string name);
void stop_sound_effect(string name);
```

Find a sound effect you like and try out this program:

```c++
#include "splashkit.h"

int main()
{
    // Copy "Hello.ogg" to Resources/sounds

    load_sound_effect("hello", "Hello.ogg");
    play_sound_effect("hello");
    delay(2500);

    play_sound_effect("hello", 0.2f); // Play it quietly
    delay(2500);

    play_sound_effect("hello", 2); // Play it twice
    delay(2500);

    play_sound_effect("hello", 2, 0.2f); // Play it twice, quietly
    delay(2500);
}
```

:::note
You will need to provide your own sound effect and music files to test out these procedures. You can record something yourself or download something from the internet and convert it using [Audacity](https://www.audacityteam.org). Try [https://freesound.org/](https://freesound.org/) for audio you could use.

You could download the [hello world](https://programmers.guide/resources/code-examples/part-0/hello-world-snippet-saddle-club.ogg) audio from the examples in this chapter and use that as a start if you want. This would work for both sound effects and music. If you use this file then remember to change the code to match the filename.
:::

## Playing music

Music is designed to work with long playing background audio. Unlike sound effects, you can only play one music track at a time. This means you can have one music track playing and several sound effects.

As with sound effects, The Ogg Vorbis format works best with SplashKit for music.

| <div style="width:130px">**Procedure**</div> | **Required Arguments** |**Description** |
|-----------|------------------------|----------------|
| [Load Music](https://splashkit.io/api/audio/#load-music) | the name of the music and its filename | As with `load_bitmap`, but this loads the music into your program. You can use the name to access this music in other procedure calls. The filename can be the full path to a file, or the filename of a file in the **Resources/sounds** folder. |
| [Play Music](https://splashkit.io/api/audio/#play-music-named) | the name of the loaded music | Plays the indicated music track once. This will switch tracks if other music was already playing. |
| [Play Music](https://splashkit.io/api/audio/#play-music-named-with-times) | the name of the loaded music, a number of times to play | Plays the indicated music track the number of times indicated (-1 means infinitely). |
| [Fade Music In](https://splashkit.io/api/audio/#fade-music-in-named) | the name of the loaded music, and a number of milliseconds (int) | Plays the indicated music track, starting softly and increasing to full volume over the indicated time. |
| [Fade Music Out](https://splashkit.io/api/audio/#fade-music-out) | a number of milliseconds (int) | Stops playing music, fading out over the indicated time. |
| [Set Music Volume](https://splashkit.io/api/audio/#set-music-volume) | a value between 0 and 1.0 | Set the volume to the indicated proportion of full volume. |
| [Stop Music](https://splashkit.io/api/audio/#stop-music) | none | Stops the currently playing music. |

These have the following signatures in C++:

```c++
// These need:
// #include "splashkit.h"

music load_music(string name, string filename);

void play_music(string name);
void play_music(string name, int times);

void fade_music_in(string name, int ms);

void fade_music_out(int ms);

void set_music_volume(float volume);

void stop_music();
```

Try out playing some music using SplashKit with the following code:

```c++
#include "splashkit.h"

int main()
{
    // Copy "ACoolSong.ogg" to Resources/music
    // Copy "MoodSettingMusic.ogg" to Resources/music

    load_music("track1", "ACoolSong.ogg");
    load_music("track2", "MoodSettingMusic.ogg");

    play_music("track1");
    delay(2500);

    fade_music_out(2000); // Fade out
    delay(2500);

    fade_music_in("track2", 2); // Play it twice
    delay(2500);

    set_music_volume(0.5f); // 50 %
    delay(500);

    set_music_volume(0.75f); // 75 %
    delay(500);

    stop_music();
    delay(2500);
}
```

:::tip[Summary]

* Sound effects are used to play a multiple sounds that are designed to be mixed together.
* Music is used to play songs or background audio where there is only a single track playing at any time.
* In SplashKit you can play up to one music file and any number of sound effects at the same time.
* As with images, the easiest way to use resources like sounds in your SplashKit program is to run `skm resources` in the terminal in the root folder of your project, and place the resource in the relevant folder.

:::
