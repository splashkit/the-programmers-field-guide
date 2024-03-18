---
title: Terminal Methods
sidebar:
    label: " - Terminal Methods"
---

Interacting with the [Terminal](/book/part-0-getting-started/2-computer-use/1-concepts/01-terminal) is pretty simple in code. There are basically three methods that you need to care about: `WriteLine`, `Write`, and `ReadLine`. These are all described in the [Console](https://learn.microsoft.com/en-us/dotnet/api/system.console?view=net-8.0#methods) page in the .NET documentation which we will summarise below, along with some methods from the [Convert](https://learn.microsoft.com/en-us/dotnet/api/system.convert?view=net-8.0#methods) code.

## WriteLine and Write

When you want to display something on the terminal, you use either the `WriteLine` or `Write` method. There are lots of different versions of these methods which will allow you to pass many values to be output - so we can think of these as having this declaration, where `...` is replaced with data of the different basic data types (integers, numbers, text):

```cs
// These need..
// using static System.Console;
// OR
// using static SplashKitSDK.SplashKit;

public static void WriteLine(...);
public static void Write(...);
```

These methods differ only slightly. The `Write` method outputs the data that you pass it, while the `WriteLine` method outputs the data and adds a new line. This means that with `Write`, the cursor will remain on the same line, and the next output (or input) will appear on the same line as the data written out. Whereas, `WriteLine` will advance the cursor to the start of the next line.

:::note
The SplashKit library also includes version of these terminal interaction methods. We will generally use these from `System.Console`, but when you have a program that needs SplashKit for other features then **only** have `using static SplashKitSDK.SplashKit;` otherwise you will get errors that the compiler does not know which version of these methods you want to call.
:::

## ReadLine

You can use the Terminal for input as well as output. The `ReadLine` method allows you to read data from the Terminal, capturing the text the user types, placing it in a string, and returning it to you in a string when the user hits the enter or return key.

You can think of this as having the following method declaration:

```cs
// using static System.Console;
// OR
// using static SplashKitSDK.SplashKit;

public static string ReadLine();
```

:::tip
[ReadLine](https://learn.microsoft.com/en-us/dotnet/api/system.console.readline?view=net-8.0#system-console-readline) in the Console class uses a feature that lets you indicate that it may not return any data. This will generate warnings when we use it. To remove these warnings, for now, you need to set the *nullable* property in your *.csproj* file to *disable*.
:::

## Converting Data

As you can see above, `ReadLine` only returns string data. When you need this to be a number, you need to convert it. The C# library provides a number of conversion methods in its [Convert](https://learn.microsoft.com/en-us/dotnet/api/system.convert?view=net-8.0#methods) code. We can use these with `ReadLine` to convert data the user enters into either an integer (int32) or a double.

```cs
// These need..
// using static System.Convert;

public static int ToInt32();
public static double ToDouble();
```

## Example

You can use these as shown below:

```cs
using static System.Console; // or using static SplashKitSDK.SplashKit;
using static System.Convert;

string name;
int age;

Write("Enter your name: ");
name = ReadLine();

WriteLine($"Hello {name}!");

Write("How old are you? Enter your age: ");
age = ToInt32(ReadLine());
```

To remove the warning about the data returned from `ReadLine`, I have updated my csproj file to be as shown below.

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>disable</Nullable>
  </PropertyGroup>
</Project>
```
