---
title: "Link errors"
sidebar:
    label: " - Link errors"
---

Error messages with the C/C++ compiler can be more challenging to decipher. One of the new kinds of error you may encounter are linker errors. These occur during the compilation process where you refer to a function coded elsewhere, such as in a library.

When you get these errors you will get a message from `ld`, the linker tool. An example is shown below, where we removed the `-l SplashKitCPP` library reference so the linker cannot find the SplashKit functions we used.

```zsh
clang++ main.cpp -l SplashKit -Wl,-rpath,/usr/local/lib

ld: Undefined symbols:
  is_integer(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char>> const&), referenced from:
      _main in main-854ef3.o
      _main in main-854ef3.o
  write_line(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char>>), referenced from:
      _main in main-854ef3.o
      _main in main-854ef3.o
      _main in main-854ef3.o
  write_line(), referenced from:
      _main in main-854ef3.o
  write(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char>>), referenced from:
      _main in main-854ef3.o
      _main in main-854ef3.o
      _main in main-854ef3.o
      _main in main-854ef3.o
      _main in main-854ef3.o
      _main in main-854ef3.o
      _main in main-854ef3.o
      ...
  read_line(), referenced from:
      _main in main-854ef3.o
      _main in main-854ef3.o
      _main in main-854ef3.o
      _main in main-854ef3.o
      _main in main-854ef3.o
clang: error: linker command failed with exit code 1 (use -v to see invocation)
```

A linker error like this indicates you have a missing library reference, or you have not yet implemented some part of the code (as we will see later). For now, if you see these kinds of errors, make sure you have linked in the required libraries when you run the compiler.

:::tip[Order can matter!]
Order can matter with the older compilers like `g++`. For example, with SplashKit the SplashKitCPP library uses the SplashKit library itself. This means you need to link SplashKitCPP first, then link in the SplashKit library.

```zsh
g++ program.cpp -l SplashKitCPP -l SplashKit -Wl,-rpath,/usr/local/lib -o program
```

If you are using g++, try switching the order. You will see that when it links in the SplashKitCPP library it has a number of new links it needs to establish, so these will now appear as unresolved references.
:::
