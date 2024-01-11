---
title: Hello World Command Line
sidebar:
  label: " - Terminal Hello World"
---

&#127926; Hello World! This is me! &#127926;

<!-- Include all the extra details in these steps -->

<!-- TODO: Add preamble -->

:::note[Why "Hello World"?]
<!-- Discuss why coder use Hello World (hello world origin) -->
Coming soon
:::

## C# Hello World Program

<!-- TODO: Add preamble -->

Content coming soon....

<!-- Edit headings to be more casual/fun -->
### 1. Create SplashKit Project

<!-- TODO: Add text about using Code folder and 1 folder per project etc -->

Copy and paste the following command into your Terminal window:

```zsh
cd ~/Documents/Code
mkdir HelloWorldCSharp
cd HelloWorldCSharp
```

<!-- Edit to be more casual/fun -->

<!-- TODO: Add about NuGet packages -->

<!-- TODO: Add about SplashKit package -->

To create a SplashKit project using C#, you need to:

- Create a new *dotnet* project within the current folder.
- Install the SplashKit NuGet package in your project.
- Open the folder in Visual Studio Code.

Copy and paste the following commands into your Terminal window:

```bash
dotnet new console
dotnet add package splashkit
code .
```

<!-- TODO: Add gif here -->

<!-- TODO: Add note to remind about each command -->

Now you are ready to start coding your first program!

### 2. Edit Code

Finally, we are getting to the fun part now!

Open `Program.cs` file by double-clicking the file in the Explorer tab:

<!-- TODO: Add image showing files in Explorer tab -->

<!-- TODO: Add note about top-level statements? -->

Copy the following code into your Program.cs file (after the existing code):

```csharp
SplashKit.WriteLine("Coming soon... haha");
```
<!-- TODO: Add proper terminal-based code for testing -->

### 3. Build and Run

Let's turn your code into a program! Like magic!

```bash
dotnet run
```

<!-- TODO: Add build and run steps (and images/gifs) -->
<!-- TODO: Mention that 'dotnet run' also runs 'dotnet build' -->

```bash
dotnet build
```

## C++ Hello World Program

<!-- TODO: Add preamble -->

Content coming soon....

### 1. Create C++ program folder

<!-- TODO: Add text about using Code folder etc -->

```zsh
cd ~/Documents/Code
mkdir HelloWorldCPP
cd HelloWorldCPP
```

### 2. Create new C++ code file

<!-- TODO: Add text about using touch and code . -->

```zsh
touch program.cpp
code .
```

### 3. Compile your program

Open `program.cpp` file by double-clicking the file in the Explorer tab:

<!-- TODO: Add image showing files in Explorer tab -->

<!-- TODO: Add note about main (and that C++ is in Part 2, so don't worry about understanding everything now) -->

Copy the following code into the `main` function, in your program.cpp file:

```cpp
write_line("Coming soon... haha");
```
<!-- TODO: Add proper terminal-based code for testing -->

<!-- TODO: Add text leading into next page -->
