---
title: Methods and Libraries
---

Computers instructions are very simple, meaning you need many instructions to perform a meaningful task. In order to work with this, programming languages allow you to group instructions into reusable packages called **methods** in C#.

Programming languages further organise code that you can use into **Libraries**. These are larger bundles of coding artefacts that you can use within your program.

In C# there is the standard `System` library that contains methods organised into classes to perform different functions. For now, you can make use of the `System.Convert` class to give you access to methods to convert data. We will also use the SplashKit library and the `SplashKitSDK.SplashKit` class which contains methods you can use to draw graphics, play sounds, and interact with the user in the Terminal.

In your program you can access the methods in a class by adding a `using static` directive to the top of the code. This tells the compiler you want to have access to the methods in a class.

This illustration highlights how your code can access methods.

![An illustration of code that is using methods](./images/method-pano.png)

:::note[A method...]

- is a group of instructions to perform a task.
- has a name that will tell you what the method does.
- will expect to be passed a number of value, and may return a value you can use.
- will exist in a library or in our code (when we see how to build these ourselves)

:::

:::tip

To build a program, you need to be aware of the methods that already exist in the libraries you have access to. You can then use these methods to perform meaningful steps within your program's code.

:::

## Example

This program uses methods in the SplashKit and the C# libraries to create a test window that shows a random color for a period of time based on user input.

```cs
// Give us access to methods in SplashKit library
using static SplashKitSDK.SplashKit;

// Give us access to convert methods from C#
using static System.Convert;

string userInput;
int width, height, delaySeconds;

// Output a message
WriteLine("Window Test");

Write("How wide do you want the window? Enter width: ");
userInput = ReadLine();

// Call ToInt32 from Convert
width = ToInt32(userInput);

Write("How high do you want the window? Enter height: ");
userInput = ReadLine();

// Call ToInt32 from Convert
height = ToInt32(userInput);

Write("How many seconds do you want it to show for? Enter seconds: ");
userInput = ReadLine();

delaySeconds = ToInt32(userInput);

// Call open window from SplashKit
OpenWindow("Test Window", width, height);

ClearScreen(RandomColor());
RefreshScreen();

Delay(delaySeconds * 1000);

CloseAllWindows();
```

## Activities

Here are some method names from the SplashKit library. What do you think these methods do?

1. `WriteLine`
2. `OpenWidow`
3. `FillRectangle`
4. `PlaySoundEffect`
5. `Rnd`

<details>
  <summary role="button">Answers</summary>
  <ul>
    <li><strong>1: </strong><code>WriteLine</code> writes a line of text to the terminal.</li>
    <li><strong>2: </strong><code>OpenWindow</code> opens a graphical window you can draw to.</li>
    <li><strong>3: </strong><code>FillRectangle</code> will color a rectangular area in the window.</li>
    <li><strong>4: </strong><code>PlaySoundEffect</code> will play a sound effect that you have loaded.</li>
    <li><strong>5: </strong><code>Rnd</code> returns a random number - its name it not as clear as the others. Ideally each method's name should capture what it does.</li>
  </ul>
</details>

