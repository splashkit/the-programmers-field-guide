---
title: Terminal Functions to Use
---

In C#, we had picked up a number of methods that we could use to achieve different results. The good thing is that all the SplashKit methods are available as C++ functions or procedures. In this section we can quickly look over the declarations of the C/C++ terminal and multimedia functions and procedures that you may want to use.

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

:::tip

Look below the surface. Is this really that different to the code you were doing before?

:::
