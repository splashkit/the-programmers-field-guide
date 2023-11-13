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
      Shape s;
      Point2D p;

      s = new Shape();
      s.Color = Color.Blue;
      s.Width = 30;
      s.Height = 50;
      s.X = 75;
      s.Y = 75;

      myDrawing.AddShape(s);

      //Game Loop
      do
      {
        SplashKit.ProcessEvents();

        window.Clear(Color.White);

        if (SplashKit.MouseClicked(MouseButton.LeftButton))
        {
          AddNewShape(myDrawing);
        }

        myDrawing.Draw();
        window.Refresh(60);

      } while (!window.CloseRequested);
    }

    public static void AddNewShape(Drawing toAddTo)
    {
      Shape s = new Shape();
      s.X = (int)SplashKit.MouseX();
      s.Y = (int)SplashKit.MouseY();
      s.Width = 100;
      s.Height = 100;
      s.Color = Color.RandomRGB(200);

      toAddTo.AddShape(s);
    }
  }
}
