using SplashKitSDK;

namespace ShapeDrawer
{
  class Ellipse : Shape
  {
      public override void Draw()
      {
          SplashKit.FillEllipse(Color, Position.X, Position.Y, Position.X + Width,  Position.Y + Height);
      }
  }
}