---
title: Light Simulator
---

Below is my version of the code for the light simulator. I have used [Auto-Implemented Properties](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/auto-implemented-properties) for X and Y as we do not need special control over these fields.

```cs
using SplashKitSDK;

public class Program
{
    public static void Main()
    {
        SplashKit.OpenWindow("Light Switch", 300, 300);
        SplashKit.DownloadBitmap("On", "https://programmers.guide/resources/code-examples/part-3/2-abstraction/medium-on-light.png", 443);
        SplashKit.DownloadBitmap("Off", "https://programmers.guide/resources/code-examples/part-3/2-abstraction/medium-off-light.png", 443);

        Light light = new Light(20, 20);

        while (!SplashKit.QuitRequested())
        {
            SplashKit.ProcessEvents();
            if (SplashKit.MouseClicked(MouseButton.LeftButton) && light.IsUnderMouse)
            {
                light.TogglePower();
            }

            if (light.IsOn)
            {
                SplashKit.ClearScreen(Color.White);
            }
            else
            {
                SplashKit.ClearScreen(Color.Black);
            }

            Console.WriteLine($"Light is on: {light.IsOn}");

            light.Draw();
            SplashKit.RefreshScreen();
        }
    }
}

public class Light
{
    private bool _isOn;

    public Light(double x, double y)
    {
        X = x;
        Y = y;
        _isOn = false;
    }

    public bool IsOn
    {
        get { return _isOn; }
    }

    public void TogglePower()
    {
        _isOn = !_isOn;
    }

    private string BitmapName
    {
        get { return _isOn ? "On" : "Off"; }
    }

    public Bitmap Image
    {
        get { return SplashKit.BitmapNamed(BitmapName); }
    }

    public double X { get; set; }
    public double Y { get; set; }

    public bool IsUnderMouse
    {
        get { return Image.PointCollision(X, Y, SplashKit.MouseX(), SplashKit.MouseY()); }
    }

    public void Draw()
    {
        Image.Draw(X, Y);
    }
}
```
