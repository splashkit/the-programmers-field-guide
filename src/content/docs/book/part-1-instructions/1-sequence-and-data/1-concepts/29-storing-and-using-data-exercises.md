---
title: "Storing and using data exercises"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept Questions

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