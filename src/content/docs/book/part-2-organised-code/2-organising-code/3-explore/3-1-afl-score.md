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

*Hint: Have a look at the [Explore functions](/book/part-2-organised-code/2-organising-code/1-tour/00-2-explore-functions) page.*

</details>

<details>
<summary>Output calculated details of each team (taking in the names and score details of the two teams)</summary>

*Hint: This procedure should have 6 parameters.*

</details>

<details>
<summary>Print menu</summary>

*Hint: This procedure should have 2 parameters.*

</details>

<details>
<summary>A function to calculate a score from a number of goals and behinds</summary>

*Hint: This function should return an integer, and have 2 parameters.*

</details>

<details>
<summary>A function to calculate and return the name of the winner, from the two team names and scores</summary>

*Hint: This function should return a string, and have 4 parameters.*

</details>

:::
