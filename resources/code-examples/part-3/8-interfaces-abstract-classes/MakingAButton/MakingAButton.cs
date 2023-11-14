using System.Collections.Generic;
using SplashKitSDK;

public class Program
{
  public static void Main(string[] args)
  {
    Window w = new Window("Hello Buttons!", 600, 300);
    Color backColor = Color.White;
    bool shouldQuit = false;

    List<Button> buttons = new List<Button>();

    Button b = new Button()
    {
      X = 10,
      Y = 250,
      Caption = "Click Me"
    };

    b.OnClick += (btn) => backColor = SplashKit.RandomRGBColor(255);

    buttons.Add(b);

    Button quit = new Button()
    {
      X = 120,
      Y = 250,
      Caption = "Quit"
    };

    quit.OnClick += (btn) => shouldQuit = true;

    buttons.Add(quit);

    buttons.Add(new Button { X = 230, Y = 250, Caption = "Move Window" });
    buttons[buttons.Count - 1].OnClick += (btn) => w.MoveTo(0, 0);

    while (!w.CloseRequested && !shouldQuit)
    {
      SplashKit.ProcessEvents();

      foreach (Button btn in buttons) btn.HandleInput();

      w.Clear(backColor);

      foreach (Button btn in buttons) btn.Draw();

      w.Refresh(60);
    }
  }
}

public delegate void ClickAction(Button b);

public class Button
{
  public Button()
  {
    Width = 100;
    Height = 25;
  }

  public int X { get; set; }
  public int Y { get; set; }
  public int Width { get; set; }
  public int Height { get; set; }

  public string Caption { get; set; }

  public void Draw()
  {
    SplashKit.FillRectangle(Color.LightGray, X, Y, Width, Height);
    SplashKit.DrawText(Caption, Color.Black, X + 5, Y + 5);
  }

  public Rectangle Rectangle
  {
    get
    {
      return new Rectangle() { X = X, Y = Y, Width = Width, Height = Height };
    }
  }

  public bool IsMouseHover
  {
    get
    {
      return SplashKit.PointInRectangle(SplashKit.MousePosition(), Rectangle);
    }
  }

  public event ClickAction OnClick;

  public void HandleInput()
  {
    if (SplashKit.MouseClicked(MouseButton.LeftButton) && IsMouseHover)
    {
      if (OnClick != null)
        OnClick(this);
    }
  }
}