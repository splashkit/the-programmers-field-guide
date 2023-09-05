---
title: "Method Call"
---

A method call is an **instruction** that gets the computer to run the code in a [method](../03-method). You use the name of the method to identify which you want to run. Some methods require data, which you must **pass** as **arguments** to the method as part of the method call.

[Figure 5.3](#FigureMethodCall) shows the concepts related to the method call.

<a id="FigureMethodCall"></a>

![Figure 5.3 A method calls runs a method, passing in values for the method to use](./images/method-call-concept.png "A method calls runs a method, passing in values for the method to use")
<div class="caption"><span class="caption-figure-nbr">Figure 5.3: </span>A method calls runs a method, passing in values for the method to use</div><br/>

## Method Call - why, when, and how

As you have seen, [Methods](../03-method) are building blocks that contain instructions that do a task - sort of like mini-programs. A large part of your code will be calling these methods to get them to do the things you need done, in the order you need them done.

When you are thinking about calling a method, you need to know what it does, what to give it, and what it will give you back. The code is then simple, you provide the name and the list of values for arguments.

:::tip[Method Call]

- Know what the method does
- Know what you need to give it - arguments
- Know what it gives you back

:::

The name should help you know what the method does, and the method's documentation will help you understand what you need to provide the method for it to do its job.

### Arguments

When you call a Method, you need to pass a value for each argument. This value can be a [literal](../06-literal) or calculated value known as an [expression](../07-expression).

### Overloading

In languages like C# support something called **overloading**. This lets you create different methods with the same name, but requiring different arguments. If you are looking at the [SplashKit documentation](https://splashkit.io), you will see some methods require different arguments. So make sure to pay attention to which version of the method you want to call, and the arguments you will need to pass for that version.

### Method Calls and Sequence

Method calls are one instruction that gives you control of the **program counter**. A method call will save the current state of your program, and then set the program counter to the first instruction within the method. The sequence will then progress through the method, and when it ends, the location of the next instruction after the method call will be put into the program counter. In this way, the method is called and then **returns** to where it was called from. This allows us to maintain our focus on **sequence**. The method call lets you *direct* the sequence into the method and then back to your next instruction. As you read, design, or work with code for your program, you can focus on the program's **sequence** and not worry about what happens within the methods you call.

## In C#

A method call allows you to run the code in a [Method](../03-method), getting its instructions to run before control returns to the point where the method was called.

:::tip[Syntax]
[Figure 5.4](#FigureMethodCallSyntax) shows the syntax of a method call.

- A method call consists of a method name followed by an opening parenthesis, followed by zero or more arguments (delimited by commas), followed by a closing parenthesis.

<a id="FigureMethodCallSyntax"></a>

![Figure 5.4 The syntax of a method call](./images/method-call.png "The syntax of a method call")
<div class="caption"><span class="caption-figure-nbr">Figure 5.4: </span>The syntax of a method call</div><br/>
:::

## Examples

### Basic Example

The code in [Listing 5.6](#ListingMethodCalls) contains a C# program with four method calls. Each method call runs the `WriteLine` method to output text to the Terminal.

The method call starts with the method’s name that indicates the method to be called: `WriteLine`.

Following the identifier is a list of values within parenthesis (called **arguments**), these are the values that are passed to the method for it to use.

:::caution

C# is case sensitive so using `writeLine` instead of `WriteLine` will not work.

:::

<a id="ListingMethodCalls"></a>

```csharp
using static System.Console;

WriteLine("Count back from 2...");
WriteLine(2);
WriteLine(1);
WriteLine(0);
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.6: </span>Method calls within a C# program</div>

### SplashKit Example

The following code uses three different methods from the [SplashKit](https://splashkit.io) library. You can see the details for these on the [Methods](../02-method) page, but the names should give you a good idea of what this does.

<a id="ListingDrawShapes"></a>

```csharp
using static SplashKitSDK.SplashKit;

DownloadSoundEffect("hello", "https://programmers.guide/hello.wav", 443);
PlaySoundEffect("hello");
Delay(5000);
```

All of the arguments in this code are using literal values.

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Playing a sound effect</div>

**TODO Add file to website and adjust url**

### Example using result

Some methods return data, which you can use within any calculated value ([expression](../07-expression)) within your code. The following code demonstrates the use of the values returned by the `RandomColor` and `Rnd` methods.

<a id="ListingReturn"></a>

```csharp
using static SplashKitSDK.SplashKit;

OpenWindow("Random Color", 800, 600);
ClearScreen(RandomColor());
RefreshScreen();
Delay(1000 * Rnd(10));
```

<div class="caption"><span class="caption-figure-nbr">Listing 5.x: </span>Code demonstrating use of return values.</div>

Line 4 demonstrates the use of the result from calling `RandomColor` within the call to `ClearScreen`. In this case, the value returned from the `RandomColor` becomes the value for the argument passed to `ClearScreen`. As you would expect, this will clear the screen to a random color.

Line 6 demonstrates this again, the result of `1000 * Rnd(10)` is passed to `Delay`. The easiest way to approach this is to consider each value independently. `Rnd(10)` will return a random value between 0 and 10 - let us imagine this returns `6` so that we can see what that does. In this case, `1000 * Rnd(10)` becomes `1000 * 6`, as the value **returned** by `Rnd(10)` was `6`. This is then evaluated, and `Delay` will be passed the argument `6000`, causing it to delay for 6 seconds.

:::note[Summary]

- A method call is an **instruction** that commands the computer to run the code in a method.
- Use the name to identify the [Method](../02-method) to run.
- Data values passed to the method are called **arguments**. These are put between parentheses after the method name.
- When the method’s task is complete the program continues with the next instruction after the method call.

:::
