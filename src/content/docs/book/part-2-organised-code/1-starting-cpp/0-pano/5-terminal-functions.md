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

// This needs..
// #include <format>
// and you need to add `-std=c++20` to your compiler call

// Format data into a string
string format(string format_string, ...);

// These need..
// #include "splashkit.h"

bool is_integer(const string text);
bool is_double(const string text);

int convert_to_integer(string text);
double convert_to_double(string text);
```

The `to_string` function is something new that we will have to get used to using. You can use this to convert numbers to their string representation. These strings can then be concatenated together. For example, in C# you can have string interpolation (eg. `$"Hello {name} you are {age}"`) to embed data within strings. In C++, you can do this by adding strings together. You can't do `"you are " + age` if age is a number, instead you have to do `"you are " + to_string(age)` so that you are adding strings together.

An alternate option is the `format` function, this takes a `format_string` and then the values to be embedded within this. It is closer to C# string interpolation, so will be useful. The C# code `$"Hello {name} you are {age}"` will become `format("Hello {} you are {}", name, age)`. The first `{}` is replaced with the next argument (`name` in this case), and the next `{}` with the following argument, and so on if you want to embed more values. The `format` function can also be used to round decimal values. Have a look at the following code for an example. To compile this you will need to add a `-std=c++20` to your compiler call in the Terminal, as this is a feature added in that version of the language -- the C++20 standard.

## Example Terminal Program

You can use these as shown below:

```cpp
#include "splashkit.h"
#include <format>

using std::stoi;
using std::to_string;
using std::format;

int main()
{
  string name, line;
  int age;
  double value;

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

  value = age * 1.333;

  // Format string to have value with 2 decimal places
  // Adding : into the {} lets you add a format specifier.
  // The .2 = 2 decimal places
  string message = format("Adding a 1/3 of your age gives: {:.2}", value);
  write_line(message);

  return 0;
}
```

To compile this you run the following in the terminal, assuming you saved your code as `program.cpp` and want the output program to be in a file called `test`.

```sh
clang++ program.cpp -o test -l splashkit -std=c++20
```

:::tip

Look below the surface. Is this really that different to the code you were doing before?

:::
