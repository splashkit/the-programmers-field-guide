---
title: "Method"
draft: false
---

The computer is unintelligent, so performing anything meaningful requires a large number of instructions. Coding all of these directly in the program would be slow and time consuming. To avoid this programming languages offer the capability to group the instructions to perform a task into a **method**.

A method is a list of instructions that gets the computer to perform a specific task. When a method is called it gets control of the computer and instructs it to perform the steps needed. Often these steps require data, so the method may need to be passed data when it is called. When the method finishes its task, control returns back to the code that called the method.

[Figure 5.5](#FigureMethod) shows the concepts related to methods.

<a id="FigureMethod"></a>

![Figure 5.5 A method contains instructions to perform a task, and may need to be passed data in order to do this](./images/method-concept.png "A method calls runs a method, passing in values for the method to use")
<div class="caption"><span class="caption-figure-nbr">Figure 5.5: </span>A method contains instructions to perform a task, and may need to be passed data in order to do this</div><br/>

For the moment we will make use of methods others have provided.

We can make use of the following methods to interact with the user in the terminal.

|**Method** | **Required Arguments** |**Description** | **Library Location**
|-----------|------------------------|----------------|----------------|
|`WriteLine`| the data to output | Writes a line to the Terminal via standard out. | `System.Console` or `SplashKitSDK.SplashKit` |
|`ReadLine`| none | Reads data from standard input and returns it for you to use. | `System.Console` or `SplashKitSDK.SplashKit` |

The following are some example methods from the SplashKit library. All of these are available in `SplashKitSDK.SplashKit`.

|**Method** | **Required Arguments** |**Description** |
|-----------|------------------------|----------------|
|`OpenWindow`| the title, width, and height | Opens a window for you to draw to. |
|`ClearScreen`| a color | Clears everything on the current window, making it the indicated color.  |
|`RefreshScreen`| none | present what has been drawn to the user |
|`ColorWhite`, ... | none | Returns a value that represents the color indicated in the name of the method.  |
|`FillRectangle`, `DrawRectangle` | a color, and four numeric values for the location (x and y) and width and height of the rectangle | Draws a filled or hollow rectangle to the screen. |
|`FillEllipse`, `DrawEllipse` | a color, and four numeric values for the location (x and y) and width and height of the ellipse | Draws a filled or hollow ellipse to the screen. |
|`FillCircle`, `DrawCircle` | a color, and three numeric values for the location (x and y) and radius of the circle | Draws a filled or hollow circle to the screen. |
|`Delay` | a number of milliseconds (whole number) | [Delay](https://splashkit.io/api/utilities/#delay) causes the program to wait. You pass this the number of milliseconds to wait, for example 5000 is 5 seconds. |
| `DownloadSoundEffect` | a name, url text, and network port (whole number) |  [DownloadSoundEffect](https://splashkit.io/api/networking/#download-sound-effect) will access a sound effect from the internet and load it into your program to use. It requires three arguments, the name to refer to the sound effect when you play it, the URL to download from, and the port for the network communication (443 for https or 80 for http). |
|`PlaySoundEffect` | the name of the sound effect to play | [PlaySoundEffect](https://splashkit.io/api/audio/#play-sound-effect-named) will play a loaded sound effect. You pass it the name of the sound effect you loaded.|
|`Rnd` | a whole number | [Rnd](https://splashkit.io/api/utilities/#rnd-integer) will return a random number between 0 and that value you provided. |

Notice how each of these methods has an identifiable purpose that the library's developers have tried to caapture in its name. There are very few constraints on the way you can name a method, but the names are very important. A `PlaySoundEffect` method should probably play a sound effect. The computer would not care if it draws a circle to the screen, but that would not help us when we want to think through how our programs work. As a rule, the name of a method should tell you what that method does.

## Arguments

Methods can require you to pass them values as **arguments**, just like the programs we run in the Terminal. These arguments are used within the method to tailor the way it works. For example, with `PlaySoundEffect` you pass it an argument to indicate the sound effect you want to play. This allows the one method to be used for the same *general* action - with the arguments customising how it works internally.

## Results

Some methods also **return** back a value. You can think of this like a machine where you give it some input material, and it gives you back something. Another way to think of it as a mathematical function, you give it some values and it comes back with a result. For example, you could have an `Add` method that takes two arguments and returns the sum of their values. You could call this using `Add(5, 2)`, and it would return the value `7` when it ends.

:::note[Summary]

- A method is an **building block**, something that can be created in code.
- A method can be called to perform a certain task, or calculate or return a certain value.
- [Libraries](../08-library) can contain many methods to perform common tasks.
- The standard library of every language will include methods to write values to, and read values from, the Terminal.
- The SplashKit library contain methods that can draw images on the screen, play sounds, and perform other tasks needed to create small games.
:::
