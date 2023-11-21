---
title: Overloading Functions and Procedures
sidebar:
  label: Overloading
---

Sometimes it is useful to be able to have different options for how a function or procedure can be called. For example, in SplashKit you can call `refresh_screen();` or `refresh_screen(60);` where you pass in a frame rate to limit the program to. This looks like the same procedure, but is actually two different procedures with different parameters. Another example is `to_string`. This can take a double or an integer, and return you back its textual representation.

This language feature is called **overloading**. It allows you to create functions or procedures with the same name as long as they have different numbers or types of parameters. In our examples, `refresh_screen` has different numbers of parameters while `to_string` has different types of parameters. In either case, the compiler uses the arguments to work out which function or procedure to call.

While you can differ on the number or type of parameters, languages don't allow you to differ on the return type. So if you want to return different data, but have the same parameters, then you need a new name for this function.

Languages like C, Python, and some others do not support overloading. This means that you need to come up with unique names for all of your functions and procedures. C++ added this support, which is why we have been able to use this so far. Most modern languages would support this, but it is something to look our for as you start to work with other languages.
