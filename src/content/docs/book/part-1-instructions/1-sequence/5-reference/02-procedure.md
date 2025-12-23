---
title: "Procedure"
---

The computer is unintelligent, so performing anything meaningful requires a lot of instructions. Coding all of these directly would be slow and time-consuming. To avoid this, programming languages offer the capability to group instructions into a **procedure**.

A procedure is a list of instructions that gets the computer to perform a specific task.
We can [call a procedure](/book/part-1-instructions/1-sequence/5-reference/03-procedure-call), which gives it control of the computer, allowing it to instruct the computer.
Often these instructions require data, so a procedure may need to be passed data when it is called.
This data is called the procedure's **arguments**.
When the procedure finishes its task, control is given back to the code that called the procedure.

The following diagram shows the concepts related to procedures.

![A procedure contains instructions to perform a task, and may need to be passed data in order to do this](./images/procedure-concept.png "A procedure calls runs a procedure, passing in values for the procedure to use")

## Procedure -- when, why, and how

For now, we will focus on using procedures that others have created.
This allows you to write programs that take advantage of code written by other programmers.
By doing this you are really just applying another layer of abstraction, enabling yourself to think about small tasks rather than the individual steps they require.
You are also saving yourself time, avoiding having to write everything in your program from scratch.

Every programming language comes with a **standard library**, containing procedures written by the language developers to perform common tasks such as writing to and reading from the terminal.
For other tasks, you can find libraries written by other programmers.

### Arguments

Procedures can require you to pass them values as **arguments**, just like the programs we run in the terminal. These arguments are used within the procedure to tailor the way it works. For example, you need to pass the `play_sound_effect` procedure from SplashKit an argument to indicate the sound effect you want to play. Arguments allow one procedure to be used for the same *general* action, while retaining flexibility to change the specifics of that action.

### Results

Some procedures also **return** a value. You can think of this like a machine where you give it some input material, and it gives you back something. Another way to think of it as a mathematical function -- you give it some values, and it comes back with a result. For example, an `add` procedure might take two arguments and return the sum of their values.

:::note[Describing procedure arguments]
There are a few different ways to describe a procedure that has arguments.
Three ways we have already used are to say that you can **pass** or **give** arguments to a procedure, and that a procedure can **take** arguments.
Other ways of saying the same thing are to say that a procedure **accepts**, **requires**, or **receives** arguments.

These different phrases all mean the same thing and can be used interchangeably depending on personal preference and sentence flow.
:::

## Examples

For the moment we will make use of procedures that others have provided.
Let's explore some of them.

We can make use of the following procedures to interact with the user in the terminal.

| <div style="width:85px">**Procdeure**</div> | **Required Arguments** | **Description** | <div style="width:130px">**Library Location**</div> |
|------------|------------------------|-----------------|----------------------|
|`write_line`| data to output | Writes a line of data to the terminal via standard out. | `splashkit.h` |
|`write`| data to output | Writes data to the terminal via standard out - this does not add a new line at the end. The cursor will stay on the same line and the next data out put will appear there. | `splashkit.h` |

The following are some example procedures from the SplashKit library. All of these are available in `splashkit.h`.

| <div style="width:160px">**Procdeure**</div> | <div style="width:200px">**Required Arguments**</div> | <div style="width:200px">**Description**</div> |
|-----------|------------------------|----------------|
|`open_window`| A title, and two numeric values for the width and height | Opens a window for you to draw to. |
|`clear_screen`| A color | Clears everything on the current window, making it the indicated color.  |
|`refresh_screen`| None | Display what has been drawn to the user |
|`fill_rectangle`, `draw_rectangle` | A color and four numeric values for the location (x and y), width, and height of the rectangle | Draws a filled or hollow rectangle to the screen. |
|`fill_ellipse`, `draw_ellipse` | A color and four numeric values for the location (x and y), width, and height of the ellipse | Draws a filled or hollow ellipse to the screen. |
|`fill_circle`, `draw_circle` | A color and three numeric values for the location (x and y) and radius of the circle | Draws a filled or hollow circle to the screen. |
|`delay` | A whole number of milliseconds | Causes the program to wait the specified number of milliseconds. For example, 5000 is 5 seconds. |
| `download_sound_effect` | A name, URL, and network port |  Access a sound effect from the specified URL and network port and load it into memory for your program to use by referring to the specified name. |
|`play_sound_effect` | The name of the sound effect to play | Play a loaded sound effect. |

Notice how each of procedure has an identifiable purpose that the library's developers have tried to capture in its name. There are very few constraints on the way you can name a procedure, but the names are very important. A `play_sound_effect` procedure should probably play a sound effect. The computer would not care if it draws a circle to the screen, but that would not help us when we want to think through how our programs work. As a rule, the name of a procedure should tell you what that procedure does.

## Activities

Think about a task you complete regularly in your daily life, like cooking a meal.
Once you have thought of a task, consider the following questions:

* What sub-tasks does this task contain?
* What data (if any) would each sub-task require?
* How would this data change the behaviour of the sub-task?

:::note[Summary]

* A procedure is a **building block**, something that can be created in code.
* A procedure can be called to perform a certain task, or calculate or return a certain value.
* [Libraries](/book/part-1-instructions/1-sequence/5-reference/10-library) can contain many procedures to perform common tasks.
* The standard library of every language will include procedures to write values to, and read values from, the terminal.
* The SplashKit library contains procedures that can draw images on the screen, play sounds, and perform other tasks needed to create small games.

:::
