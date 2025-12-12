---
title: "Program"
---

In most software projects the top-level building block you are aiming to create is a **program**. A program is something the user can **run** to get the computer to do something.

Each program consists of a **list of instructions** ([statements](/book/part-1-instructions/2-communicating-syntax/2-trailside/02-statement) in programming terminology) that the computer will perform when the program is run. When you create a program, think about the goal of that program and the steps you need the computer to perform to achieve that goal.

The image below shows a sketch of the program concept. It shows a program consisting of instructions (written in **source code**). Some key aspects of the program are the starting instruction and the libraries that it uses.

![A program contains instructions that tell the computer what to do](./images/program-concept.png "A program contains instructions that tell the computer what to do")

## Program -- when, why, and how

You will need to create a program to be able to run and share each digital reality/piece of software you create. A large software system may have several programs, but each program will create its own digital reality when it is executed.

When you think about a program, you are thinking **big picture**.
What do you want this program to do, and what are the steps to achieve this?
Each program will contain other building blocks to achieve its goals.
As you continue your journey, you will pick up more tools to expand what you can create in your programs.
For now, a program is simply a list of instructions that are followed when the program runs.

:::tip[Memorising syntax]

To master these concepts you will need to memorise the syntax so that you can start to use these concepts in programs of your own design. As you read through these, make sure to keep notes and create small test programs so that you can practice using these ideas and memorise the language syntax as you go. This is an important part of the process of learning to program.

:::

## In C++

:::tip[Syntax]
In a C++ project, you have one source code file that will contain the program's main code. The following illustration shows the structure of the syntax for this, for the concepts we've covered so far.

TODO:
![The simplified syntax for a C++ program](./images/program.png "The simplified for a C++ program")
:::

Each program starts with an optional list of **header includes**.
These allow you to tell the compiler to include extra files that declare new [procedures and functions](/book/part-1-instructions/1-sequence/2-trailside/02-method) that you call in your program.


After this you can declare a `main` function - then between the braces (`{ }`), you provide a list of instructions that each end with a semicolon (`;`).

:::tip[Directive?]
A directive is an instruction for the compiler, rather than an instruction that gets added to the program created by the compiler. You use these to let the compiler know something about the code you are writing.

For example, the `#include` preprocessor directive tells the compiler to literally paste in the code from the file specified. Files like `splashkit.h` contain declarations of the library's functions/procedures, which then allows you to use them in your code.
:::

## Examples

The following code shows a basic Hello World C++ Program. You should be able to match this up with the syntax defined above. This program uses code from `SplashKit` to access the `write_line` procedure, which can be called to output a message to [stdout](/book/appendix/2-computer-use/2-trailside/09-streams#input-output-and-errors). The important thing to see here is that **all** of this code is the program -- each line is a part of the program.

```c++
#include "splashkit.h"

int main()
{
    write_line("Hello World!");
}
```

The following program uses SplashKit to open a window and draw some shapes to it. Once again, the important thing to think about for now is that the program is **all** of these instructions. They all come together to create the program.

```c++
#include "splashkit.h"

int main()
{
    open_window("A House", 800, 600);
    clear_screen(color_white());

    // Draw a house shape
    fill_ellipse(color_bright_green(), 0, 400, 800, 400);
    fill_rectangle(color_gray(), 300, 300, 200, 200);
    fill_triangle(color_red(), 250, 300, 400, 150, 550, 300);

    refresh_screen();
    delay(5000);
}
```

:::tip[Code Comments]
C++ source code is [abstracted](/book/part-0-getting-started/1-building-programs/5-reference/6-source-code/#programming-with-a-third-generation-language) to make it more understandable for humans, but ultimately it is still written for computers.
Because of this, C++ and virtually all programming languages include syntax for writing [**code comments**](/book/part-1-instructions/1-sequence/2-trailside/09-comments).

In the code above the line starting with `//` is a code comment and will be ignored by the compiler.

You can also write "block comments" (multi-line comments) by starting them with `/*` and ending them with `*/`
:::

Data, which we'll explore in more detail in the next chapter, is also key within every program. Can you spot data in the examples above?

We use data to capture information we need a program to work with. The data in the above examples are all **fixed** or [literal](/book/part-1-instructions/1-sequence/2-trailside/05-literal) values. That means these values can not change when the program runs. They are fixed, being literally the value that appears in the code.

:::note[Summary]

- You can create something the user can run from a program's **source code**.
- Most importantly, you can't really *see* the program in the code. The program is **all** of the code together.
- The program has an **entry point** that indicates where the program’s instructions start -- in this case that is the first instruction in the `main` function.
- Your program can use code from [libraries](/book/part-1-instructions/1-sequence/2-trailside/10-library), giving it access to building blocks others have created.
- Data is central to a program.

:::
