using System.Collections.Generic;
using SplashKitSDK;

namespace ShapeDrawer
{
  public class Drawing
  {
    private List<Shape> _Shapes;
    private Shape _SelectedShape;

    public Drawing()
    {
      _Shapes = new List<Shape>();
    }

    public void AddShape(Shape toAdd)
    {
      _Shapes.Add(toAdd);
    }

    public void Draw()
    {
      foreach (Shape s in _Shapes)
      {
        s.Draw();
      }
    }
  }
}