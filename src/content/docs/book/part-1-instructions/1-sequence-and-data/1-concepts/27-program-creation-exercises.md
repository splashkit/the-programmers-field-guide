---
title: "Program creation exercises"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept Questions


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