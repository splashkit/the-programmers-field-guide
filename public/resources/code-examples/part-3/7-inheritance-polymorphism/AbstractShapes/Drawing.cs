using System.Collections.Generic;
using SplashKitSDK;

namespace ShapeDrawer
{
  public class Drawing
  {
    private List<Shape> _shapes;
    private Shape _SelectedShape;

    public Drawing()
    {
      _shapes = new List<Shape>();
    }

    public Shape SelectedShape
    {
      get { return _SelectedShape; }
    }

    public void AddShape(Shape toAdd)
    {
      _shapes.Add(toAdd);
    }

    public void SelectShape(Point2D point)
    {
      _SelectedShape = null;
      foreach (Shape s in _shapes)
      {
        if (s.IsAt(point))
        {
          _SelectedShape = s;
          return;
        }
      }
    }

    public void Draw()
    {
      foreach (Shape s in _shapes)
      {
        s.Draw();
      }
    }
  }
}