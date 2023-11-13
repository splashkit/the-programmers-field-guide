using SplashKitSDK;

namespace ShapeDrawer
{
  public abstract class Shape
  {
    private Color _color;
    private Point2D _Position;
    private int _Width;
    private int _Height;

    public Shape()
    {
      _Width = _Height = 0;
    }

    public Color Color
    {
      get { return _color; }
      set { _color = value; }
    }

    public Point2D Position
    {
      get { return _Position; }
      set { _Position = value; }
    }

    public int Width
    {
      get { return _Width; }
      set { _Width = value; }
    }

    public int Height
    {
      get { return _Height; }
      set { _Height = value; }
    }

    public bool IsAt(Point2D point)
    {
      return point.X >= Position.X &&
          point.X < Position.X + Width &&
          point.Y >= Position.Y &&
          point.Y < Position.Y + Height;
    }

    public abstract void Draw();
  }
}