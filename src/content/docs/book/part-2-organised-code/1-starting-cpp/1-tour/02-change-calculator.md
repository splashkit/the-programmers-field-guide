---
title: Change Calculator
---

Try converting the most recent version of your [change calculator](/book/part-1-instructions/3-control-flow/3-explore/01-0-change-calculator) to C/C++.
The logic of the program should remain the same, the syntax will just look a little different.

The change of library does mean that you cannot use C#'s `ToInt32` method.
However, C provides an equivalent called [stoi](https://en.cppreference.com/w/cpp/string/basic_string/stol) which also converts text to an integer.
We gave you a similar example of this [earlier](/book/part-2-organised-code/1-starting-cpp/2-trailside/4-1-variable-constant/#example) (which is using `stod` to convert to double instead of `stoi` to convert to integer).

Have a go.
If you really get stuck, you can look at [our solution](/book/part-2-organised-code/1-starting-cpp/4-camp/2-change-calc), but try to translate the entire program yourself.
