---
title: Debugging Your First Program
---

As you continue learning new coding concepts, you will inevitably come across errors (bugs) in your code. Don't be discouraged though! Even the most skilled programmers run into bugs in their programs. You will get better and faster at debugging the more you practice.

## Create new project

**TODO: Add about creating new TestingDebugging project to remind about these steps.**

Using this example code:

```cs
using static SplashKitSDK.SplashKit;

// download resources from online source
DownloadBitmap("skbox", "https://avatars.githubusercontent.com/u/16730454?s=400&u=1c5ea7f86f40253bd5883ab2380257f614b44187&v=4", 443);
DownloadFont("roboto-italic", "https://github.com/splashkit/the-programmers-field-guide/raw/main/public/resources/code-examples/part-0/Roboto-Italic.ttf", 443);

OpenWindow("SplashKit!", 400, 500);

ClearScreen();
DrawBitmap("skbox", 0, 0);
// RefreshScreen();
DrawText("SplashKit!", ColorBlack(), "roboto-italic", 50, 90, 410);
RefreshScreen();
Delay(5000);
```

## Using the VS Code Debugger

## Using Breakpoints
