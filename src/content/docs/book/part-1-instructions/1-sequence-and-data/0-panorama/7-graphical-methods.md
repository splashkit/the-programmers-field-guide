---
title: Graphical method to use
---

Drawing things to the screen can help you make much more interactive programs. The following methods will give you a start building graphical programs.

To create graphical programs you will need the following using directives:

```cs
using static SplashkitSDK.SplashKit;
using static System.Convert;
```

You can use the same terminal methods as described previously if you need to read values from the user in the terminal.

To do the drawing, you can use the following methods:

```cs
public static Window OpenWindow(string caption, int width, int height);
public static void ClearScreen();
public static void RefreshScreen();

public static Color ColorWhite();
public static Color ColorBlue();
// and many others...

public static void FillRectangle(Color clr, double x, double y, double width, double height);
public static void DrawRectangle(Color clr, double x, double y, double width, double height);

public static void FillEllipse(Color clr, double x, double y, double width, double height);
public static void DrawEllipse(Color clr, double x, double y, double width, double height);

public static void FillTriangle(Color clr, double x1, double y1, double x2, double y2, double x3, double y3);
public static void DrawTriangle(Color clr, double x1, double y1, double x2, double y2, double x3, double y3);

public static void DrawLine(Color clr, double x1, double y1, double x2, double y2);

public static Bitmap LoadBitmap(string name, string filename);
public static void DrawBitmap(string name, double x, double y);
```
