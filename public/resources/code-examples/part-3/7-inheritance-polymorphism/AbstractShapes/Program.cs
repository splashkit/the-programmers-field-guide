using System;
using SplashKitSDK;

namespace ShapeDrawer
{
  public class Program
  {
    public static void Main()
    {

      //Open a new Graphics Window
      Window window = new Window("Shape Drawer", 800, 600);

      Drawing myDrawing = new Drawing();

      //Create and add a Shape
      Shape s, secondShape;
      Point2D p;

      s = new Rectangle();
      s.Color = Color.Blue;
      s.Width = 30;
      s.Height = 50;
      p = new Point2D();
      p.X = 75;
      p.Y = 25;
      s.Position = p;

      secondShape = new Ellipse();
      secondShape.Color = Color.Red;
      p.X = 120;
      p.Y = 25;
      secondShape.Position = p;
      secondShape.Width = 100;
      secondShape.Height = 200;

      myDrawing.AddShape(s);
      myDrawing.AddShape(secondShape);

      //Game Loop
      do
      {
        SplashKit.ProcessEvents();

        window.Clear(Color.White);

        myDrawing.Draw();

        window.Refresh();
      } while (!window.CloseRequested);
    }
  }
}
