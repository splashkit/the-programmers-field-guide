---
title: Terminal methods to use
---

To get started programming, you will need to know a few methods that you can call. We want to keep things relatively simple, so we will limit ourselves to just a few methods.

To interact with the user via the terminal you will need the following using directives:

```cs
using static SplashkitSDK.SplashKit;
using static System.Convert;
```

Then you will have access to the following methods. Make sure to stick with just these methods for now. You want to focus on sequence and data, and only using the language features we have covered so far. Remember this is about learning to program in general, so we will come back to explore the language libraries later.

```cs
// Output data to the terminal using
public static void WriteLine(...);
public static void Write(...);

// Read string data from the user using
public static string ReadLine();

// Convert string data to numbers using
public static int ToInt32(string value);
public static double ToDouble(string value);

```

Each line above represents a method. They all have the following structure (from left to right):

- They start with `public static`. In C# this can be called directly, which is what we are doing now.
- Following this is the type it returns `void` means it returns nothing, otherwise it is `string` if it returns text data, or `int` for whole numbers and `double` for real numbers.
- Next is the name of the method - for example `WriteLine` or `ToDouble`.
- Then, in parentheses you have a list of values that are required. For `WriteLine` and `Write` you can actually pass these either a string, an integer, or a double (so we just put `...` to mean there are a few options). Notice `ReadLine` needs no arguments, while `ToDouble` requires one string.

:::tip

When working with a terminal based program, you will output prompts and messages and use `ReadLine` to read text from the user. You can convert this to numbers when needed.

:::

## Example

The following code calculates a body mass index by reading the details from the user in the terminal.

```cs
using static SplashKitSDK.SplashKit;
using static System.Convert;

string name, userInput;
double weightInKg, heightInM;
double bmi;

WriteLine("Welcome to the BMI calculator");

// Read user name
Write("Please enter your name: ");
name = ReadLine();

WriteLine("Hi " + name);

// Read weight
Write("Please enter your weight in kilograms: ");
userInput = ReadLine();
weightInKg = ToDouble(userInput);

// Read height
Write("Please enter your height in meters: ");
userInput = ReadLine();
heightInM = ToDouble(userInput);

// Calculate bmi
bmi = weightInKg / (heightInM * heightInM);


WriteLine($"The BMI of the data entered is: {bmi}");
```
