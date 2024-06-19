---
title: Functions to use
---

In C#, we had picked up a number of methods that we could use to achieve different results. The good thing is that all the SplashKit methods are available as C++ functions or procedures. In this section we can quickly look over the declarations of the C/C++ terminal and multimedia functions and procedures that you may want to use.

## Terminal functions and procedures

The following declarations provide the functions and procedures you use to interact with the user via the terminal. These match with the C# methods `WriteLine`, `Write`, and `ReadLine`.

```cpp
// These need..
// #include "splashkit.h"

void write_line(...);
void write(...);
string read_line();
```

There are also the data type testing and conversion functions you will need to convert data to and from strings.

```cpp
// These need...
// #include <string>

// Convert string to integer
int stoi(string text);
// Convert string to double
int stod(string text);
// Convert ... to a string
string to_string(...);

// These need..
// #include "splashkit.h"

bool is_integer(const string text);
bool is_double(const string text);

int convert_to_integer(string text);
double convert_to_double(string text);
```

The `to_string` function is something new that we will have to get used to using. In C#, you would have used string interpolation (eg. `$"Hello {name} you are {age}"`) to embed data within strings. In C++, you need to do this by adding strings together. You can't do `"you are " + age` if age is a number, instead you have to do `"you are " + to_string(age)` so that you are adding strings together.

## Example Terminal Program

You can use these as shown below:

```cpp
#include "splashkit.h"

using std::stoi;
using std::to_string;

int main()
{
  string name, line;
  int age;

  write("Enter your name: ");
  name = read_line();

  write_line("Hello " + name + "!");

  write("How old are you? Enter your age: ");
  
  line = read_line();
  while( ! is_integer(line) )
  {
    write_line("Sorry, I cannot convert that to a number");
    write("How old are you? Enter your age: ");
    line = read_line();
  }

  age = stoi(line);

  write_line("You are " + to_string(age) + "!");

  return 0;
}
```

## Multimedia functions and procedures

The following function and procedure declarations provide you with access to the functionality in SplashKit to open windows, draw things, and interact with the user. The main difference is the style of identifier used - for example `OpenWindow` is now `open_window`.

```cpp
// These needs...
// using static SplashKitSDK.SplashKit;

window open_window(string caption, int width, int height);
void clear_screen();
void refresh_screen();

// Event loop
void process_events();
bool quit_requested();

// Colors
color color_white();
color color_blue();
// and many others...

// Drawing
void fill_rectangle(Color clr, double x, double y, double width, double height);
void draw_rectangle(Color clr, double x, double y, double width, double height);

void fill_ellipse(Color clr, double x, double y, double width, double height);
void draw_ellipse(Color clr, double x, double y, double width, double height);

void fill_triangle(Color clr, double x1, double y1, double x2, double y2, double x3, double y3);
void draw_triangle(Color clr, double x1, double y1, double x2, double y2, double x3, double y3);

void draw_line(Color clr, double x1, double y1, double x2, double y2);


// Key input
// This also requiers... to get access to the KeyCode details.
// using SplashKitSDK;
bool key_down(KeyCode key);

// Random numbers
float rnd(); // 0 to 1
int rnd(int ubound); // 0 to ubound - 1
int rnd(int min, int max); // min to max


// Time tracking
timer create_timer(string name);
void start_timer(string name);
uint timer_ticks(string name);

// Collision detection
bool circles_intersect(double c1_x_, double c1_y_, double c1_radius, double c2_x, double c2_y, double c2_radius);

```

### Key Codes

The `key_code` values in C/C++ act like constants, so are all uppercase:

||||||
|--|--|--|--|--|
| BACKSPACE_KEY_ | TAB_KEY | RETURN_KEY | ESCAPE_KEY | SPACE_KEY |
| NUM0_KEY | NUM1_KEY | NUM2_KEY | NUM3_KEY | NUM4_KEY |
| NUM5_KEY | NUM6_KEY | NUM7_KEY | NUM8_KEY | NUM9_KEY |
| COLON_KEY | SEMICOLON_KEY | A_KEY | B_KEY | C_KEY |
| D_KEY | E_KEY | F_KEY | G_KEY | H_KEY |
| I_KEY | J_KEY | K_KEY | L_KEY | M_KEY |
| N_KEY | O_KEY | P_KEY | Q_KEY | R_KEY |
| S_KEY | T_KEY | U_KEY | V_KEY | W_KEY |
| X_KEY | Y_KEY | Z_KEY | DELETE_KEY | KEYPAD_0 |
| KEYPAD_1 | KEYPAD_2 | KEYPAD_3 | KEYPAD_4 | KEYPAD_5 |
| KEYPAD_6 | KEYPAD_7 | KEYPAD_8 | KEYPAD_9 | KEYPAD_PERIOD |
| KEYPAD_DIVIDE | KEYPAD_MULTIPLY | KEYPAD_MINUS | KEYPAD_PLUS | KEYPAD_ENTER |
| KEYPAD_EQUALS | UP_KEY | DOWN_KEY | RIGHT_KEY | LEFT_KEY |
| INSERT_KEY | HOME_KEY | END_KEY | PAGE_UP_KEY | PAGE_DOWN_KEY |
| F1_KEY | F2_KEY | F3_KEY | F4_KEY | F5_KEY |
| F6_KEY | F7_KEY | F8_KEY | F9_KEY | F10_KEY |
| F11_KEY | F12_KEY | F13_KEY | F14_KEY | F15_KEY |
| RIGHT_SHIFT_KEY | LEFT_SHIFT_KEY | RIGHT_CTRL_KEY | LEFT_CTRL_KEY | RIGHT_ALT_KEY |
| LEFT_ALT_KEY | LEFT_SUPER_KEY | RIGHT_SUPER_KEY | | |

:::

### Example Multimedia Code

The following code demonstrates how to use these functions and procedures to create an interactive program.

```cpp
#include "splashkit.h"

const int MOVE_SPEED = 3;

int main()
{
  open_window("Movement", 800, 600);

  // Event loop
  double x = 400;
  color clr = color_black();

  while( !quit_requested() )
  {
    process_events();

    if (key_down(RIGHT_KEY))
    {
      x += MOVE_SPEED;
    }

    if (key_down(LEFT_KEY))
    {
      x -= MOVE_SPEED;
    }

    if (key_typed(SPACE_KEY))
    {
      clr = random_color();
    }

    clear_screen(color_white());
    fill_circle(clr, x, 300, 50);
    refresh_screen(60);
  }
}
```
