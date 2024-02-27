---
title: "Link errors"
sidebar:
    label: " - Link errors"
---

Error messages with the C/C++ compiler can be more challenging to decipher. One of the new kinds of error you may encounter are linker errors. These occur during the compilation process where you refer to a function coded elsewhere, such as in a library.

When you get these errors you will get a message from `ld`, the linker tool. An example is shown below, where we removed the `-l SplashKit` library reference. This means the linker cannot find the SplashKit functions we used.

```zsh
clang++ hello.cpp

ld: Undefined symbols:
  color_black(), referenced from:
      _main in hello-548382.o
  color_white(), referenced from:
      _main in hello-548382.o
  open_window(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char>>, int, int), referenced from:
      _main in hello-548382.o
  clear_screen(color), referenced from:
      _main in hello-548382.o
  refresh_screen(), referenced from:
      _main in hello-548382.o
  delay(int), referenced from:
      _main in hello-548382.o
  draw_text(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char>> const&, color const&, double, double), referenced from:
      _main in hello-548382.o
clang: error: linker command failed with exit code 1 (use -v to see invocation)
```

A linker error like this indicates you have a missing library reference, or you have not yet implemented some part of the code (as we will see later). For now, if you see these kinds of errors, make sure you have linked in the required libraries when you run the compiler.

:::tip[Order can matter!]
Order can matter with the older compilers like `g++`. In these cases make sure to link dependent libraries earlier than the library that provides those features.
:::
