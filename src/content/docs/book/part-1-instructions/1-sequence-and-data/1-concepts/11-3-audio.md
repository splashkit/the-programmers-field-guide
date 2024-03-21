---
title: Audio Methods
sidebar:
  label: " - Audio Methods"
---

SplashKit also provides methods you can use to load and play sound effects and music. You can use sound effects to play multiple different sounds that are mixed together when played, while music is designed for longer running background sound for your applications with only one music track being able to be played at once.

### Playing sound effects

Sound effects are designed to be used for short sounds that are triggered by actions in your program. You can play several sound effects at the same time.

SplashKit can handle several file formats for sound effects, but the best and most reliable is [Ogg Vorbis](https://xiph.org/vorbis/). You can use programs like [Audacity](https://www.audacityteam.org) to edit and convert sound effects to the Ogg Vorbis format.

| <div style="width:130px">**Method**</div> | **Required Arguments** |**Description** |
|-----------|------------------------|----------------|
| [Load Sound Effect](https://splashkit.io/api/audio/#load-sound-effect) | the name of the sound effect and its filename | As with `LoadBitmap`, but this loads the sound effect into your program. You can use the name to access this sound effect in other method calls. The filename can be the full path to a file, or the filename of a file in the **Resources/sounds** folder.  |
| [Play Sound Effect](https://splashkit.io/api/audio/#play-sound-effect-1) | the name of a loaded sound effect | Plays the sound effect once at its full volume.  |
| | the name of a loaded sound effect, volume (`float`) | Plays the sound effect once at a percentage of its full volume. The volume should be between 0 and 1.0  |
| | the name of a loaded sound effect, times (`int`) | Plays the sound effect multiple times in a row at full volume.  |
| | the name of a loaded sound effect, times (`int`), volume (`float`) | Plays the sound effect multiple times in a row at a percentage of its full volume. |
| [Stop Sound Effect](https://splashkit.io/api/audio/#stop-sound-effect-1) | the name of a loaded sound effect | Stops playing the indicated sound effect. |

These methods have the following declaration:

```cs
// These need:
// using static SplashKitSDK.SplashKit;

public static SoundEffect LoadSoundEffect(string name, string filename);
public static void PlaySoundEffect(string name);
public static void StopSoundEffect(string name);
```

Find a sound effect you like and try out this program:

```csharp
using static SplashKitSDK.SplashKit;

// Copy "Hello.ogg" to Resources/sounds

LoadSoundEffect("hello", "Hello.ogg");
PlaySoundEffect("hello");
Delay(2500);

PlaySoundEffect("hello", 0.2f); // Play it quietly
Delay(2500);

PlaySoundEffect("hello", 2); // Play it twice
Delay(2500);

PlaySoundEffect("hello", 2, 0.2f); // Play it twice, quietly
Delay(2500);
```

:::note
You will need to provide your own sound effect and music files to test out these procedures. You can record something yourself or download something from the internet and convert it using [Audacity](https://www.audacityteam.org). Try [https://freesound.org/](https://freesound.org/) for audio you could use.

You could download the [hello world](https://programmers.guide/resources/code-examples/part-0/hello-world-snippet-saddle-club.ogg) audio from the examples in this chapter and use that as a start if you want. This would work for both sound effects and music. If you use this file then remember to change the code to match the filename.
:::

### Playing music

Music is designed to work with long playing background audio. Unlike sound effects, you can only play one music track at a time. This means you can have one music track playing and several sound effects.

As with sound effects, The Ogg Vorbis format works best with SplashKit for music.

| <div style="width:130px">**Method**</div> | **Required Arguments** |**Description** |
|-----------|------------------------|----------------|
| [Load Music](https://splashkit.io/api/audio/#load-music) | the name of the music and its filename | As with `LoadBitmap`, but this loads the music into your program. You can use the name to access this music in other method calls. The filename can be the full path to a file, or the filename of a file in the **Resources/sounds** folder. |
| [Play Music](https://splashkit.io/api/audio/#play-music-1) | the name of the loaded music | Plays the indicated music track once. This will switch tracks if other music was already playing. |
| | the name of the loaded music, a number of times to play | Plays the indicated music track the number of times indicated (-1 means infinitely). |
| [Fade Music In](https://splashkit.io/api/audio/#fade-music-in-1) | the name of the loaded music, and a number of milliseconds (int) | Plays the indicated music track, starting softly and increasing to full volume over the indicated time. |
| [Fade Music Out](https://splashkit.io/api/audio/#fade-music-out) | a number of milliseconds (int) | Stops playing music, fading out over the indicated time. |
| [Set Music Volume](https://splashkit.io/api/audio/#set-music-volume) | a value between 0 and 1.0 (float) | Set the volume to a proportion of full volume. |
| [Stop Music](https://splashkit.io/api/audio/#stop-music) | none | Stops the music playing. |

These have the following declarations in C#:

```cs
// These need:
// using static SplashKitSDK.SplashKit;

public static Music LoadMusic(string name, string filename);

public static void PlayMusic(string name);
public static void PlayMusic(string name, int times);

public static void FadeMusicIn(string name, int ms);

public static void FadeMusicOut(int ms);

public static void SetMusicVolume(float volume);

public static void StopMusic();
```

Try out playing some music using SplashKit with the following code:

```csharp
using static SplashKitSDK.SplashKit;

// Copy "ACoolSong.ogg" to Resources/music
// Copy "MoodSettingMusic.ogg" to Resources/music

LoadMusic("track1", "ACoolSong.ogg");
LoadMusic("track2", "MoodSettingMusic.ogg");

PlayMusic("track1");
Delay(2500);

FadeMusicOut(2000); // Fade out
Delay(2500);

FadeMusicIn("track2", 2); // Play it twice
Delay(2500);

SetMusicVolume(0.5f); // 50 %
Delay(500);

SetMusicVolume(0.75f); // 75 %
Delay(500);

StopMusic();
Delay(2500);
```

:::tip[Summary]

* Sound effects are used to play a multiple sounds that are designed to be mixed together.
* Music is used to play songs or background audio where there is only a single track playing at any time.
* As with images, the easiest way to use resources like images and sounds in your SplashKit program is to run `skm resources` in the terminal in the root folder of your project, and place the resource in the relevant folder.

:::
