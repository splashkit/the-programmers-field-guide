---
title: Method Calls and Arguments
---

Methods exist for us to use. A **method call** is a statement in your program code that tells the computer to run a particular method, and wait for it to complete before moving to the next instruction. When you call a method, you use its name and then provide a list of values between parenthesis. These values are called **arguments**, they give data to the method for it to use in its actions.

![Illustration of some method calls](./images/method-call-pano.png)

:::note[A method call...]

- starts with the name of the method to run.
- is followed by parenthesis which contain argument values.
- must pass an argument for each value the method is expecting.
- waits for the methods instructions to complete before it moves to the next step in the code.
- may return a value that you can use. (depending on which method you call)

:::

:::tip

To call a method you will need to know its name, the values it needs to be passed, and if it returns you any data.

:::

## Example

The following code demonstrates several method calls. Notice how each is always the name of the method, followed by 0 or more values within parenthesis. When the method returns data, we can store that in a variable or use it to pass as the value to another method.

```cs
// Give us access to methods in SplashKit library
using static SplashKitSDK.SplashKit;

// Give us access to convert methods from C#
using static System.Convert;

// Call the WriteLine method - the argument is the text to output
WriteLine("Testing method calls");

int delaySeconds;
string userInput;

// Call the Write method - the argument is the text to output
Write("How many seconds do you want it to show for? Enter seconds: ");

// Call ReadLine - this needs no arguments.
// It will return the string that the use entered.
// In this case we store it in userInput.
userInput = ReadLine();

// Call ToInt32 - passing it the text from userInput as the argument.
// This returns a number which we then store in delaySeconds.
delaySeconds = ToInt32(userInput);

// Call the open window method. This has three arguments
// - the first is the title of the window. We will make it Test Window
// - the second is the width - we want 1280 pixels on each line
// - the last is the height - we want 720 lines in the window
OpenWindow("Test Window", 1280, 720);

// Call RandomColor - it needs no data and it returns a color
// We then call ClearScreen, and pass it the data returned from RandomColor
ClearScreen(RandomColor());

// Call the RefreshScreen method
RefreshScreen();

// Call the Delay method - pass in the number of milliseconds to delay
Delay(delaySeconds * 1000);
```

## Activities

How many method calls and how many arguments does each method have?

1. `WriteLine("Hello World");`
2. `OpenWidow("Test", 1920, 1080);`
3. `int weight = (start + 10) * 2;`
4. `int age = ToInt32(line);`
5. `DrawLine(RandomColor(), x1, y1, Rnd(100), Rnd(100));`
6. `int width = Rnd(ToInt32(ReadLine()));`

Note: `Rnd` is a method that generates a random number.

<details>
  <summary role="button">Answers</summary>
  <ul>
    <li><strong>1: </strong>This has one method call to <code>WriteLine</code> with a single string argument.</li>
    <li><strong>2: </strong>This has one method call to <code>OpenWindow</code> with three arguments: a string and two numbers.</li>
    <li><strong>3: </strong>This does not have any method calls.</li>
    <li><strong>4: </strong>This has one method call to <code>ToInt32</code>, which is passed one argument.</li>
    <li><strong>5: </strong>There are four method calls on this line. <code>DrawLine</code>, <code>RandomColor</code>, and two calls to <code>Rnd</code>. <code>DrawLine</code> is passed five arguments, <code>RandomColor</code> none, and <code>Rnd</code> is passed one.</li>
    <li><strong>6: </strong>There are three method calls: <code>Rnd</code>, <code>ToInt32</code>, and <code>ReadLine</code>. <code>ReadLine</code> runs first and is passed no arguments. Both <code>Rnd</code> and <code>ToInt32</code> are passed one argument. The result of <code>ReadLine</code> is passed to <code>ToInt32</code>. The result of <code>ToInt32</code> is then passed into <code>Rnd</code>.</li>
  </ul>
</details>
