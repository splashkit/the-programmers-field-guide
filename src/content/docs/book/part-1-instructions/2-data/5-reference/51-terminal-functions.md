---
title: Terminal Functions To Use
sidebar:
    label: " - Terminal Functions"
---

Interacting with the terminal is pretty simple in code. In addition to the `write` and `write_line` procedures, there is also the function `read_line`, along with some data conversion functions. Let's go over these now.

## Reading from the terminal

The `read_line` function allows you to read data from the Terminal, capturing the text the user types, and returning it to you in a string when the user hits the enter or return key.

Here is the signature for `read_line`:

```c++
string read_line();
```

We can see from this signature that `read_line` does not take any arguments, and it returns a `string`. This `string` will contain the text that the user typed. Here is a quick example of its use:

```c++
#include "splashkit.h"

int main()
{
  string name;
  
  write("Enter your name: ");
  
  // call the read_line function, and store the result in name
  name = read_line();

  write_line("Hello " + name);
}
```

:::tip

When working with a terminal based program, you will output prompts and messages and use `read_line` to read text from the user.

:::

## Converting data

As you can see above, `read_line` only returns string data. When you need this to be a number, you need to convert it. SplashKit provides a few conversion functions we can use with `read_line` to convert data the user enters into either an integer (int) or a double.

```c++
int to_integer(string value);
double to_double(string value);

// You can convert back to a string with this:
string to_string(int value);
string to_string(double value);
string to_string(double value, int precision);
```

SplashKit also has some string manipulation functions - the following two might come in handy:

```c++
string to_lowercase(string value);
string to_uppercase(string value);
```

As you can probably guess, `to_lowercase` return an all-lowercase version of the input string, while `to_uppercase` returns an all-uppercase version.

### Input Conversions

`read_line` will always return the user input as a string. So if they type 78, then the value returned is the string `"78"`. If you want this as a number you need to convert it using either `to_integer` or `to_double`. This means that when you want to read in a number, you will have input code that looks like this:

```c++
#include "splashkit.h"

int main()
{
  string user_input;
  int count;

  // Tell the user what to input
  write("Please enter the count: ");

  // read in the user input input a string
  user_input = read_line();

  // convert it to an integer or double
  weight_in_kg = to_integer(user_input); 

  // You can now use the number
  write_line(count / 3.0);
}
```

### Output Concatenation

Now that we have [variables](/book/part-1-instructions/2-data/5-reference/10-variable) and [functions](/book/part-1-instructions/2-data/5-reference/30-function), you will often want to write out messages that contain these stored or calculated values. You can output these on one line using multiple `write` procedure calls, but you can also achieve this by *concatenating* (joining) strings together.

In the above program we output the count divided by 3.0. If we want to make the output more descriptive, we could change it to be something like "One third of 5 is 1.33". This will require us to concatenate the string `"One third of "`, with the value in the count variable, `" is "` and then the value of `count / 3.0`. To achieve this we can use the `to_string` functions. Allowing us to convert these values back to strings so that they can be joined together and passed to `write_line`.

Here is an updated version of the program:

```c++
#include "splashkit.h"

int main()
{
  string user_input;
  int count;

  // Tell the user what to input
  write("Please enter the count: ");

  // read in the user input input a string
  user_input = read_line();

  // convert it to an integer or double
  weight_in_kg = to_integer(user_input); 

  // You can now use the number
  write_line( "One third of " + to_string(count) + 
              " is " + to_string(count / 3.0, 2));
}
```

If we imagine that the user enters the value 5, then when this runs the expression in the `write_line` call will be evaluated as follows:

<table style="margin: auto; display: table;">
  <tr><th>Steps to calculate the value of the expression</th></tr>
  <tr><td><code>"One third of " + to_string(count) + " is " + to_string(count / 3.0, 2)</code></td></tr>
  <tr><td><code>"One third of " + to_string(5) + " is " + to_string(count / 3.0, 2)</code></td></tr>
  <tr><td><code>"One third of " + "5" + " is " + to_string(count / 3.0, 2)</code></td></tr>
  <tr><td><code>"One third of 5" + " is " + to_string(count / 3.0, 2)</code></td></tr>
  <tr><td><code>"One third of 5 is " + to_string(count / 3.0, 2)</code></td></tr>
  <tr><td><code>"One third of 5 is " + to_string(5 / 3.0, 2)</code></td></tr>
  <tr><td><code>"One third of 5 is " + to_string(1.33333333333, 2)</code></td></tr>
  <tr><td><code>"One third of 5 is " + "1.33"</code></td></tr>
  <tr><td><code>"One third of 5 is 1.33"</code></td></tr>
</table>

This is then the text that is passed to `write_line`, and what will appear in the terminal.

## Example

The following code calculates a body mass index by reading the details from the user in the terminal.

```c++
#include "splashkit.h"

int main()
{
  string name, user_input;
  double weight_in_kg, height_in_m;
  double bmi;

  write_line("Welcome to the bmi calculator");

  // Read user name
  write("Please enter your name: ");
  name = read_line();

  write_line("Hello " + name);

  // Read weight
  write("Please enter your weight in kilograms: ");
  user_input = read_line();   // read in the user input
  weight_in_kg = to_double(user_input); // convert it to a double

  // Read height
  write("please enter your height in meters: ");
  user_input = read_line();   // read in the input
  height_in_m = to_double(user_input); // convert it

  // Calculate bmi
  bmi = weight_in_kg / (height_in_m * height_in_m);

  // Now output the calculated BMI
  // Use to_string to convert the data to text - with 2 decimal places
  write_line($"the BMI of the data entered is: " + to_string(bmi, 2));
}
```
