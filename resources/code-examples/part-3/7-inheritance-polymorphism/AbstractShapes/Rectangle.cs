using SplashKitSDK;

namespace ShapeDrawer
{
  class Rectangle : Shape
  {
      public override void Draw()
      {
          SplashKit.FillRectangle(Color, Position.X, Position.Y, Width, Height);
      }
  }
}