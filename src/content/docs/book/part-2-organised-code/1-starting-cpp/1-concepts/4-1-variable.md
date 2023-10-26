---
title: Variable Declarations
sidebar:
    label: " - Variables"
---

Variables are the same in C/C++ as in C#. They are used to store a value that you can change as the program runs.

:::tip[In C/C++]

Variable declaration in C/C++ are the same as in C#. You specify the name of the type first, and follow this with a comma separated list of names for the variables you want created. 

![Variable declaration syntax in C/C++](./images/variable-decl.png)

:::

The names of the basic types are also the same in C/C++ as they were in C#:

- `int` for the type you typically use for whole numbers.
- `double` for the type you typically use for real numbers.
- C++ has a `string` type and both C and C++ include a `char` type for data to represent text. As with C#, string if you want zero or more characters, or char for a single character.
- `bool` for Boolean values. In C/C++, 0 is false, and any other value is considered to be true. Though there are also constants for `true` and `false`.

## Example

Here is the example from the [variables page](../../../../part-1-instructions/1-sequence-and-data/1-concepts/07-variable). Notice that the **logic** is exactly the same, and that the code is only superficially different. Have a read through and compare it with the original code.

```cpp
#include "splashkit.h"

using std::to_string;
using std::stod;

int main()
{
    const double PI = 3.1415;
    double radius, height;
    string line;
    double bottle_volume, litres;

    write_line("Water Bottle Volume");
    write_line();
    write_line("Enter the radius and height of the bottle in centimeters");

    write("radius: ");
    line = read_line();
    radius = stod(line);

    write("height: ");
    line = read_line();
    height = stod(line);

    bottle_volume = PI * radius * radius * height;

    litres = bottle_volume / 1000;

    write_line();
    write_line("Volume " + to_string(bottle_volume) + " cm^3");
    write_line("       " + to_string(litres) + " litres");
}
```

Key changes include:

- Using different libraries
  - We can access the SplashKit library using `#import "splashkit.h`.
  - We need `using std::to_string;` and `using std::stod;` to gain access to these C++ functions from the standard (`std`) library.
    - The [to_string](https://en.cppreference.com/w/cpp/string/basic_string/to_string) function is used to convert numbers to text.
    - In C/C++ you can use [stod](https://en.cppreference.com/w/cpp/string/basic_string/stof) to convert a string to a double. There is also [stoi](https://en.cppreference.com/w/cpp/string/basic_string/stol) to convert text to an integer.
- Changing names of identifiers
  - `WriteLine` is now `write_line` - we are now using this code from [Write Line](https://splashkit.io/api/terminal/#write-line-empty) code from the SplashKit library.
  - `Write` becomes `write` - again from [Write](https://splashkit.io/api/terminal/#group-write)
  - We use [Read Line](https://splashkit.io/api/terminal/#read-line) from the SplashKit library. There are equivalent in C/C++, but they are more complicated so we will return to look at them later.

C/C++ also lacks the elegant **string interpolation** feature we had in C#. This means you cannot easily embed values within your strings. Instead, can use the `to_string` function to convert numbers into string, and then use string concatenation from C++ to combine these together.

:::tip[How do we work this out?]

Finding the appropriate things to call in the libraries of the language you use will take time. The great thing is that you have tools like search engines, and AI that can help. A simple search on how to convert a string to an integer in C++ will lead you to the [stod](https://en.cppreference.com/w/cpp/string/basic_string/stof) code, though there are also other options.

:::

Have a go at coding this up yourself, and run the program to see it working. The thought process to create this is the same as before, you just need to switch some details.
