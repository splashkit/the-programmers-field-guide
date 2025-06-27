---
title: AFL Score
sidebar:
    label: " - AFL score"
---

A game in the Australian Football League consists of two teams aiming to achieve the highest score. The score calculated from the number of goals and behinds each team kicks. A goal is worth six (6) points, and a behind is worth one (1) point. You can read further on this in the [AFL explained scoring page](https://afl-explained.com.au/scoring/).

Build a program that allows the user to enter details of an AFL game, output scores and winners, and provide a menu for the user to update game details and output scores.

An example of this running is shown below.

```txt
Welcome to the AFL score calculator!

Enter team 1 details:
name: Hawks
goals: five
Please enter a whole number
goals: 5
behinds: 12.1
Please enter a whole number
behinds: 12

Enter team 2 details:
name: Cats
goals: 7
behinds: 3

Calculating details...
The Cats are winning

Hawks: 5, 12, 42
Cats: 7, 3, 45

Menu:
1: Update Hawks goals
2: Update Hawks behinds
3: Update Cats goals
4: Update Cats behinds
5: Print details
6: Quit
Option: 7
Please enter a number between 1 and 6
Option: four
Please enter a whole number
Option: 4
behinds: 0

Menu:
1: Update Hawks goals
2: Update Hawks behinds
3: Update Cats goals
4: Update Cats behinds
5: Print details
6: Quit
Option: 5

Calculating details...
It is currently a draw!

Hawks: 5, 12, 42
Cats: 7, 0, 42

Menu:
1: Update Hawks goals
2: Update Hawks behinds
3: Update Cats goals
4: Update Cats behinds
5: Print details
6: Quit
Option: 6

Are you sure you want to quit? [Y/n]: 1
Please enter y or n
Are you sure you want to quit? [Y/n]: Yes
Please enter y or n
Are you sure you want to quit? [Y/n]: y

Bye!
```

:::caution

Make sure you are using this to demonstrate how to build this using functions and procedures. Here are some functions and procedures you may want to consider adding:

<details>
<summary>Functions to read and validate data from the user (strings, numbers, boolean)</summary>

| Return Type | Name      | Parameters |
| ----------- | --------- | ----------------- |
| `string` | read_string  | message prompt string |
| `int`    | read_integer | message prompt string |
| `int`    | read_integer_range | message prompt string,<br>minimum value,<br>maximum value |
| `bool`   | read_boolean | message prompt string |

</details>

<details>
<summary>Output calculated details of each team</summary>

This *procedure* should have **6** parameters:

Team 1's name, team 1's goals, team 1's behinds, team 2's name, team 2's goals, and team 2's behinds.

</details>

<details>
<summary>Print menu</summary>

This *procedure* should have **2** parameters:

Team 1's name, and team 2's name.

</details>

<details>
<summary>A function to calculate a score from a number of goals and behinds</summary>

This *function* should return an integer, and have **2** parameters:

Goals scored and behinds scored.

</details>

<details>
<summary>A function to calculate and return the name of the winner, from the two team names and scores</summary>

This *function* should return a string, and have **4** parameters:

Team 1's name, team 1's score, team 2's name, and team 2's score.

</details>

:::

<!-- Alternative below -->

Procedures:

| Name/Description | Parameters |
| ----------- | --------------- |
| Print menu | team 1's name, team 2's name |
| Output details (taking in the two team names, as well as each team's goals and behinds) | team 1's name, team 1's goals, team 1's behinds, team 2's name, team 2's goals, team 2's behinds |

User input functions:

| Return Type | Name/Description | Parameters |
| ----------- | ---------------- | ---------- |
| `string` | read in a string from the user | message prompt string |
| `int`    | read in an integer from the user | message prompt string |
| `int`    | read in an integer from the user, within a specified range | message prompt string, minimum value, maximum value |
| `bool`   | read in a boolean value from the user | message prompt string |

Other functions:

| Return Type | Name/Description | Parameters |
| ----------- | ---------------- | ---------- |
| `int` | A function to calculate a score from a number of goals and behinds | goals scored, behinds scored |
| `string` | A function to calculate and return the name of the winner, from the two team names and scores | team 1's name, team 1's score, team 2's name, team 2's score |
