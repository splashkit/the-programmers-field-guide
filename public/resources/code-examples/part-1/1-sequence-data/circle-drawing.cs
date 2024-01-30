using static System.Convert;
using static SplashKitSDK.SplashKit;

const double SATURATION = 0.8;
const double BRIGHTNESS = 0.8;

string line;
int radius;
double hue;

WriteLine("Welcome to Circle Drawer!");
WriteLine();
WriteLine("Enter the radius of the circle to draw. (a whole number)");

// Read value from the user and conver to double for radius
Write("Circle radius: ");
line = ReadLine();
radius = ToInt32(line);

// Read value from the user and conver to double for hue
WriteLine("What color? Enter hue between 0 to 1");
Write("Hue: ");
line = ReadLine();
hue = ToDouble(line);

// Draw scene and delay
OpenWindow("Circle Drawing", 800, 600);
ClearScreen(ColorWhite());
FillCircle(HSBColor(hue, SATURATION, BRIGHTNESS), 400, 300, radius);
RefreshScreen();
Delay(5000);
