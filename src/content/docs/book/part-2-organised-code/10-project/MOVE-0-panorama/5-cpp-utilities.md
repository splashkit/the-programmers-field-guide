---
title: C++ Utilities
---

In the tour in this chapter we will use some new C++ features. This section gives a quick overview of these mechanics.

## Default parameter values

In C++ you can provide a default value for a parameter when you declare a function. This allows the caller not to provide a value for this parameter, and the compiler will add the default in its place. This is a convenience, allowing you to call functions and use defaults.

There are some constraints here - you can only use default parameters at the end of the parameter and argument lists. So you cannot skip a parameter in the middle, as the compiler would have no way to know what you intended in many cases.

The following code shows an example function with three parameters. The first has no default, so the caller must provide a value, whereas `optional` and `another` both have default values.

```cpp
// Example function with parameters that have default values
void my_function(int required, int optional = 5, string another = "default");

// Example calls:
my_function(10); // optional is 5, another is "default"
my_function(-3, 10) // another is "default"
my_function(1, 2, "3") // defaults not used

// Invalid calls:
my_function(); // no value for required
my_function("other"); // required is an int
my_function(10, "other"); // optional is an int
```

:::tip
Many modern languages will allow you to provide default values to parameters. This is not unique to C++.
:::

## Format

Introduced in the 2020 version of C++ (known as C++20), the [format](https://en.cppreference.com/w/cpp/utility/format/format) function lets you easily create strings in a way similar to string interpolation we saw in C#.

The format function uses a format string (similar, but simpler than the version in `printf` and `scanf`) followed by the values to be inserted within the placeholders. Braces are used for the placeholders in the format string (`"{}"`) which may optionally include the index of the value to use, followed by a colon (`:`) and a [format specifier](https://en.cppreference.com/w/cpp/utility/format/basic_format_string).

We can keep this basic for now, but this can be a useful function as you work on combining components into a string.

The following code uses the `{:.2f}` format specifier to format doubles to have exactly 2 decimal places. Each placeholder matches up with the following parameter, so the first is the name, then the weight, then the price.

```cpp {3,15}
#include "splashkit.h"
#include <string>
#include <format>

using std::string;
using std::format;

int main()
{
    string name = "Cheddar";
    double weight = 1.5;
    double price_per_kg = 20.0;

    // Using std::format to create a formatted string
    string formatted_string = format("{}: {:.2f} kg, ${:.2f}", name, weight, price_per_kg);

    // Output the formatted string
    write_line(formatted_string);

    return 0;
}
```

To compile this you will need to let the compiler know that you are wanting to use the C++20 standard. Use the following call on the command line. The `-std=c++20` sets the standard to be used.

```sh
clang++ format-test.cpp -std=c++20 -l splashkit -o test -Wall
```

## Vector

In this project we will need a dynamic array. You can use the version you created, but if you want to use the C++ library then you need to use the [vector class](https://en.cppreference.com/w/cpp/container/vector).

:::tip

Don't focus too much on exploring vector at this stage. The C++ library is relatively cryptic in how it approaches things. For now, you only need to know a few basics. You can explore C++ and its library in more depth at a later time.

:::

```cpp
#include "splashkit.h"
#include <vector>
#include <string>

using std::vector;
using std::to_string;

int main()
{
    // A vector is like an array - you can initialise it with values
    // It uses generics in the same way as our dynamic array
    vector<int> numbers = {1, 2, 3, 4, 5};

    // You can use .size() to get the number of items in the vector
    // and access these items using the [] operator (as with our dynamic array)
    for(int i = 0; i < numbers.size(); i++)
    {
        write_line("Number: " + to_string(numbers[i]));
    }

    // To add elements to the vector, use .push_back()
    numbers.push_back(6);

    // To remove elements from the vector, use .erase()
    // This is relatively cryptic - but go with it for now
    // Our dynamic array is similar to more modern languages
    numbers.erase(numbers.begin() + 2); // removes the third element

    return 0;
}
```
