---
title: Terminal Procedures/Functions
sidebar:
    label: " - Terminal Procedures/Functions"
---

Interacting with the terminal is pretty simple in code. There are basically three procedures/functions that you need to care about: `write_line`, `write`, and `read_line`.

## Writing to the terminal

When you want to display something on the terminal, you use either the `write_line` or `write` procedure. There are lots of different versions of these procedures which will allow you to pass many values to be output - so we can think of these as having this declaration, where `...` is replaced with data of the different basic data types (integers, numbers, text):

```c++
void write_line(...);
void write(...);
```

These procedures differ only slightly. `write_line` writes your text, and then starts a new line. `write` on the other hand just stays on the same line. Here's a table showing the difference:
<table style="margin: auto; display: table;">
  <tr><th>Example code</th><th>Output</th></tr>
  <tr><td>

  ```c++
  write_line("A");
  write_line("B");
  write_line("C");
  ```

  </td><td>

  ```txt
  A
  B
  C
  ```

  </td></tr><tr><td>

  ```c++
  write("A");
  write("B");
  write("C");
  ```

  </td><td>

  ```txt
  ABC
  ```

  </td></tr>
</table>

## Reading from the terminal

You can use the Terminal for input as well as output. The `read_line` function allows you to read data from the Terminal, capturing the text the user types, placing it in a string, and returning it to you in a string when the user hits the enter or return key.

You can think of this as having the following function declaration:

```c++
string read_line();
```

## Converting data

As you can see above, `read_line` only returns string data. When you need this to be a number, you need to convert it. SplashKit provides a few conversion functions - we can use these with `read_line` to convert data the user enters into either an integer (int) or a double.

```c++
int to_integer(string value);
double to_double(string value);

// You can convert back to a string with this:
string to_string(...);
```

SplashKit also has some string manipulation functions - the following two might come in handy:

```c++
string to_lowercase(string value);
string to_uppercase(string value);
```

As you can probably guess, `to_lowercase` return an all-lowercase version of the input string, while `to_uppercase` returns an all-uppercase version.
