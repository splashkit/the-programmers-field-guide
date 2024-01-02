---
title: Activities
---

Having explored this leg of the journey you are now approaching a rest stop and a chance to practice and reflect.

## TODO: Review these OLD PRogram Creation Exercises

Read over the concepts in this chapter and answer the following questions:

1.  What is a [Program](../00-program)? What does it contain?

2.  A program is an artefact, something you can create in code. Why would you want to create a program your code?

3.  What is the entry point of a program?

4.  Do you have to write all of the code for your program, or are you able to use artefacts from elsewhere?

5.  What is a [Statement](../01-statement)?

6.  What statement was introduced in this chapter?

7.  What is a [Method](../03-method)?

8.  Where can you find procedures you may be interested in using?

9.  What is an [Expression](../04-expression)?

10. Where are expressions coded? Give an example of an expression being used in code.

11. What are the three broad kinds of [Types](../06-type) that a language will provide?
    
12. What are the names of the types in the language you are using? Name the main type you are likely to work with for each of the broad kinds of types.

13. What are the values of the following expressions? Which types could these values be used with (possibly multiple)? Note: some answers are dependent of the language you are using.

|   |   |   |
|---|---|---|
| **(a)** 5 | **(d)** 3.1415 | **(g)** 2 + 1 / 2.0 \* 6 |
| **(b)** 3 + 5 \* 2 | **(e)** 1 / 2 | **(h)**  \"Fred Smith\" (C) |
| **(c)** (3 + 5) \* 2 | **(f)** 1.0 / 2.0 | **(i)** 'Fred Smith' (Pascal) |

14. Where can statements be coded in your program?

15. What is the role of an [Identifier](../07-identifier)? What artefacts be be identified?

16. What is a keyword?

17. Which of the following are valid identifiers?

|   |   |   |   |
|---|---|---|---|
| **(a)** hello | **(d)** my name | **(g)** void | **(j)** a1 |
| **(b)** \_123 | **(e)** my_name | **(h)** Main | **(k)** 3.1415 |
| **(c)** fred | **(f)** begin | **(i)** 1234 | **(l)** WOW_COOL |


18. What is a [Library](../08-library), and what does it contain?

19. What happens to [Comments](../09-comments) when you code is compiled? Why do languages include
    these? Why are they considered important by good developers?

20. What is the stack? What does it keep track of when your program is
    running?

21. What is loaded into memory when your program is started?

22. What happens in the computer when a procedure is called?

## Code Writing Questions: Applying what you have learnt

Apply what you have learnt to the following tasks:

1.  Write a program that prints the 5 times table from 1 \* 5 to 10 \* 5. See [Table 5.x](#TableFiveTimesTable)

    -   Think about the artefacts you will create, and use.
    -   Write pseudocode for the program's instructions
    -   Convert your pseudocode to either C or Pascal
    -   Compile and Run your program, and check that the values are correctly calculated

<a id="TableFiveTimesTable"></a>

<div class="caption"><span class="caption-figure-nbr">Program Description</span></div>

|   |   |
|---|---|
| **Name** | *Five Times Table* |
| **Description** | Displays the 5 times table from `1 x 5` to `10 x 5` |
<div class="caption"><span class="caption-figure-nbr">Table 5.x: </span>Description of the <em>Five Times Table</em> program</div><br/>

2.  Write a program that prints the powers<sup>[a](#FootnotePowersOf Two)</sup> of 2 from 2<sup>1</sup> to 2<sup>8</sup>. See [Table 5.x](#TablePowersOfTwo).

    -   Think about the artefacts you will create, and use.
    -   Write pseudocode for the program's instructions
    -   Convert your pseudocode to either C or Pascal
    -   Compile and Run your program, and check that the values are
        correctly calculated

<a id="TablePowersOfTwo"></a>

<div class="caption"><span class="caption-figure-nbr">Program Description</span></div>

|   |   |
|---|---|
| **Name** | *Powers of Two* |
| **Description** | Displays the powers from 2<sup>1</sup> to 2<sup>8</sup> |
<div class="caption"><span class="caption-figure-nbr">Table 5.x: </span>Description of the <em>Powers of Two</em> program</div><br/>
<hr class="footnote">
<div id="FootnotePowersOfTwo" class="footnote">
<sup>a </sup>In the code you will need to calculate these manually using times (2<sup>1</sup> = 2, 2<sup>2</sup> = 2*2, 2<sup>3</sup> = 2*2*2 etc)<br/>
</div>

3.  Write a program that prints the 73 times table from 1 \* 73 to 10 \* 73. See [Table 5.x](#TableSeventyThreeTimesTable)

    -   Think about the artefacts you will create, and use.
    -   Write pseudocode for the program's instructions
    -   Convert your pseudocode to either C or Pascal
    -   Compile and Run your program, and check that the values are correctly calculated

<a id="TableSeventyThreeTimesTable"></a>

<div class="caption"><span class="caption-figure-nbr">Program Description</span></div>

|   |   |
|---|---|
| **Name** | *Seventy Three Times Table* |
| **Description** | Displays the 73 times table from `1 x 73` to `10 x 73` |
<div class="caption"><span class="caption-figure-nbr">Table 5.x: </span>Description of the <em>Seventy Three Times Table</em> program</div><br/>

4.  Write a program that prints a table showing calculations of circle dimensions. This should output the radius, circle area, diameter, and circumference of circles with a radius of 1cm, 1.5cm, and 2cm. See Table [Table 5.x](#TableCircleDimensions)

    -   Find the necessary calculations and think about the artefacts you will use and create.
    -   Write pseudocode for the program's instructions.
    -   Convert your pseudocode to either C or Pascal.
    -   Compile and Run your program, and check that the values are correctly calculated.

<a id="TableCircleDimensions"></a>

<div class="caption"><span class="caption-figure-nbr">Program Description</span></div>

|   |   |
|---|---|
| **Name** | *Circle Dimensions* |
| **Description** | Displays a table of circle dimensions for circles with a radius of 1cm, 1.5cm, and 2cm. This will output the radius, circle area, diameter, and circumference of circles. |
<div class="caption"><span class="caption-figure-nbr">Table 5.x: </span>Description of the <em>Circle Dimensions</em> program</div><br/>

5.  Write a program with SwinGame that draws a face using primitive shapes. See [Table 5.x](#TableFaceShape).

    -   Draw up an outline of the program. Work out the coordinates of the circles for the face, circles. Determine three points of the triangle for the mouth.
    -   Write up the pseudocode for the program's instructions. Remember to use the `RefreshScreen` and `Delay` procedures to see the results.
    -   Convert your pseudocode to either C or Pascal
    -   Compile and Run your program, and check that the values are correctly calculated

<a id="TableFaceShape"></a>

<div class="caption"><span class="caption-figure-nbr">Program Description</span></div>

|   |   |
|---|---|
| **Name** | *Face Shape* |
| **Description** | Displays face to the screen using SwinGame |
<div class="caption"><span class="caption-figure-nbr">Table 5.x: </span>Description of the <em>Face Shape</em> program</div><br/>

## Extension Questions

If you want to further your knowledge in this area you can try to answer
the following questions. The answers to these questions will require you
to think harder, and possibly look at other sources of information.

1.  C and Pascal are imperative programming languages. What does this
    mean, and how does it relate to the way you think about code?

2.  Artefacts are things that you can create. What artefacts where
    introduced in this chapter? If you could create these artefacts,
    what would you do with them?

## TODO: REview these

Read over the concepts in this chapter and answer the following
questions:

1.  What is a [Variable](../12-variable)?

2.  What is the relationship between a variable and a value?

3.  What is the relationship between a variable and a type?

4.  Where can you use variables? Think both reading the value, and
    storing a new value.

5.  What does it mean if a variable appears on the right hand side of an
    assignment? What will happen to this variable when the code is run?

6.  What does it mean if a variable appears on the left hand side of an
    assignment? What will happen to this variable when the code is run?

7.  What is a [Constant](../13-constant)? How does it differ from a variable?

8.  What is a local variable? What code can access the value in a local
    variable?

9.  What is a global variable? What code can access the value in a
    global variable?

10. Why is it considered good practice to use local variable, but not
    global variables?

11. How do parameters help make procedures more powerful?

12. What are the two parameter passing mechanisms for passing
    parameters? How are they different?

13. When would you use each of the parameter passing mechanisms? For
    what kind of parameters?

14. How does the Terminal input procedure store a value in the variable
    you pass to it? What kind of parameter passing is involved here?

15. What statement was introduced in this chapter?

16. What does this statement allow you to do?

17. What is a function? How does it differ from a procedure?

18. A procedure call is a statement. What is a function call? Why is
    this different?

19. What does it mean when you say a function returns a value?

20. What are the values of the following expressions?


| Question  | Expression  |  Given |
|---|---|---|
| **(a)** | `5` |  |
| **(b)** | `a` | `a` is 2.5 |
| **(c)** | `1 + 2 * 3` |  |
| **(d)** | `a + b` | `a` is 1 and `b` is 2 |
| **(e)** | `2 * a`  | `a` is 3 |
| **(f)** | `a * 2 + b` | `a` is 1.5 and `b` is 2 |
| **(g)** | `a + 2 * b`  | `a` is 1.5 and `b` is 2 |
| **(h)** | `(a + b) * c` | `a` is 1, b is 1 and `c` is 5 |
| **(i)** | `a + b * 2`  | `a` is 1.0 and `b` is 2 |


21.  When creating a program, types allow you to reason about the kind of data the program is using. The three most basic types of data are Double, Integer and String. Use the Double<sup>[a](#FootnoteFloatNumbers)</sup> data type to represent any real numeric value; such as 1, 2.5, -75.201 etc. The Integer data type is used to represent any whole numeric value; such as 1, 0, -27 etc. Use the String data type for any textual data. There are many other data types, but these three are the most frequently used.

When assigning a data type think about the following:

-  How will the data be used?
-  The range of values expected. Does the type have a sufficient range to cover this?
-  Is precision important? Think carefully, especially with fractional values represented as floating point numbers (i.e. Double).

What data type is most appropriate to store the following?

|   |   |   |
|---|---|---|
| **(a)** A person's name | **(f)** The runs scored in a cricket match |
| **(b)** The number of students in a class | **(g)**  A student's ID number |
| **(c)** The average age of a group of people | **(h)** The distance between planets (km) |
| **(d)** A temperature in Celsius | **(i)** A person's phone number |
| **(e)** The name of a subject | **(j)** The cost of an item |

<hr class="footnote">
<div id="FootnotePowersOfTwo" class="footnote">
<sup>a </sup>Computer programming languages often use floating point values to represent real numbers. This format stores an approximation for a large range of values. You need to keep this in mind when thinking about the kind of data you will use.<br/>
</div>

## Code Writing Questions: Applying what you have learnt

Apply what you have learnt to the following tasks:

1.  Take the [times tables](../28-storing-and-using-data-examples#times-tables) and re-implement it so that there are two procedures: `Print Times Table`, and `Print Times Table Line`. Use these to print the 42, 73, and 126 times tables, as well as printing a times table the user requests.

    -   The `Print Times Table Line` procedure will take two parameters. The first will be the number, the second will be the times. This will output a single line for the table, e.g. ' 1 x 73 = 73'.

    -   The `Print Times Table` procedure will have a single parameter called `number`. It will output a header for the table, and then call `Print Times Table Line` ten times. In each call it will pass 1, 2, 3, etc. for the times parameter, and pass across its `number` value to the `number` parameter. After printing the last line it will output a footer for the table.

2.  Correct and then implement the Trapezoid Area procedure from Section [3.5.5](#). Adjust the
    implementation to call a `Trapezoid Area` function that is passed the two base values and the height, and returns the area. Create a small program to test this procedure.

3.  Implement the Change Calculation program, and test it function as you expect.

4.  Revisit your Circle Dimensions program from Chapter [2](#) and adjust its implementation to make use of functions and procedures.

5.  Design the structure and then the code for a program that converts temperatures from Celsius to Fahrenheit. This should read the value to convert from the user, and output the results to the Terminal.

6.  Take the adjusted Face Shape program from  Chapter [\[cha:procedure_declaration\](#), and re-implement it so that the `Draw Face` procedure takes in an x and y coordinate for the location where the face will be drawn. Adjust the coordinates of the face's components in `Draw Face`, by the amounts in the `x` and `y` parameters. Use your new procedure to draw three faces to the screen at different positions.

7.  Write a `Swap` procedure that takes in two integer parameters (passed by reference) and swaps their values. Write a program to test this procedure. This should work so that if you call `Swap(a, b);` that the values in the `a` and `b` variables are swapped over. You can test this by printing the values before and after the call to the `Swap` procedure.

8.  Watch [http://www.youtube.com/watch?v=y2R3FvS4xr4](http://www.youtube.com/watch?v=y2R3FvS4xr4), which clearly demonstrates the importance of being able to calculate the airspeed velocity of a swallow. This can be calculated using an equation based on the Strouhal Number, see [http://www.style.org/strouhalflight](http://www.style.org/strouhalflight). Use this information to create a program that can be used to calculate the airspeed velocity of African and European Swallows. Use the following values:

    -   Strouhal Number of 0.33
    -   African Swallow: frequency 15hz, amplitude 21cm
    -   European Swallow: frequency 14hz, amplitude 22cm

## Extension Questions

If you want to further your knowledge in this area you can try to answer the following questions. The answers to these questions will require you to think harder, and possibly look at other sources of information.

1.  Write a small program to experiment with parameter passing. Create in this program a procedure called `Print It` that takes a integer parameter and prints it to the Terminal. Also create a **Double It** procedure that takes an integer parameter passed by reference[^31] and has its value doubled in the procedure. Try the following (not all will work):

    1.  Call `Print It`, passing in a literal value like `5`.
    2.  Call `Double It`, passing in a literal value like `5`.
    3.  Call `Print It`, passing in a calculated expression like `a + b`.
    4.  Call `Double It`, passing in a calculated expression like `a + b`.
    5.  Call `Print It`, passing in a variable's value.
    6.  Call `Double It`, passing in a variable's value.

2.  Further adjust your Face Drawing program so that the caller can pass in a custom color, width, and height for the face.

3.  Adjust the [bike race](../28-storing-and-using-data-examples#bicycle-race) example so that the racers have a rolling start. Each bike will then have a different initial speed, calculated as a random value. You will need to define a maximum starting speed, and recalculate the x scale factor to ensure that the bikes are all drawn to the screen.


## Rest Stop - Group Activity


## Personal Projects

To come...

## Test Your Knowledge

### Task 1 - Unit Converter

Here we will be putting together everything we learnt across the last section into something that might help us - A unit converter!

In this task, it is up to you to create a program that takes in a number of millimeters, and converts them into metric units such as centimeters, meters, and kilometers, as well as imperial units such as inches, feet, and miles.

For your reference:

- There are 10 millimeters in a centimeter
- There are 100 centimeters in a meter
- There are 1000 meters in a kilometer
- There are 25.4 millimeters in an inch
- There are 12 inches in a foot
- There are 5280 feet in a mile

Your program should:

- Ask the user how many millimeters they would like to convert.
- Return the resultant conversions for both metric and imperial units, from largest denomination to smallest denomination.

### Task 2 - Sound Player

Here we will be trying out some SplashKit functionality and playing a song (or part thereof) back to us!

In this task, it is up to you to create a program which will ask the user where a sound file is located, the name of that sound file, as well as what timestamp the sound is to start playing, and for how long.

You might need the following SplashKit functions:

Your program should:

- Ask the user the file path of the folder the song is located in (e.g: C:/Users/Desktop/Songs/)
- Ask the user the file name of the song
- Ask the user what timestamp they would like the song to start at (e.g: 00:45 for 45 seconds into the song)
- Ask the user how long they would like the song to play for in seconds
- Play the section of the song the user asked for

### Task 3 - Game Splash Screen

Here we will be creating the beginning of any good game; a splash-screen/title animation!

In this task, it is up to you to create a short sequence of SplashKit events, such as shapes, colours, and delays to act as an introduction or title animation to a game.

You might need the following SplashKit functions:


Your program should:

- Welcome the user to the game with an appropriate title
- Play an introductory animation users shapes, colours, and delays

## Further reading

- [C# Programming Guide - Methods](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)
- [Microsoft C# guide - Statements, expressions, and operators](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/statements)
- [Microsoft C# Language Reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/expressions)
