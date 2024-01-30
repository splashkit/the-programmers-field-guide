using SplashKitSDK;

namespace ShapeDrawer
{
  public class Shape
  {
    private Color _color;
    private int _x;
    private int _y;
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

    public int X
    {
      get { return _x; }
      set { _x = value; }
    }

    public int Y
    {
      get { return _y; }
      set { _y = value; }
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

    public void Draw()
    {
      SplashKit.FillRectangle(Color, X, Y, Width, Height);
    }
  }
}