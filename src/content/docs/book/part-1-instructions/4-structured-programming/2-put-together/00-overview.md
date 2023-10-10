---
title: Overview
---

The Control Flow Statements enable you to alter the purely sequential order in which instructions are performed. Using these Statements you can have the computer select a path to follow, or jump back and repeat statements a number of times. These capabilities make it possible to create programs that react to the data they receive, giving more interactive results than were possible before.


The example for this chapter is a guessing game, where the user is guessing a number between 1 and 100. An example of this program executing is shown in [Listing x.y](#ListingGuessingGame)

<br/>
<a id="ListingGuessingGame"></a>

```bash
$ ./GuessThatNumber
I am thinking of a number between 1 and 100

Guess 1: 73
The number is less than 73
Guess 2: 10
The number is larger than 10
Guess 3: 52
The number is larger than 52
Guess 4: 60
The number is less than 60
Guess 5: 57
The number is less than 57
Guess 6: 54
The numbar is larger than 54
Guess 7: 56
The number is less than 56
You ran out of guesses... the number was 55

Do you want to play again [Y/n]? n

Bye
```

<div class="caption"><span class="caption-figure-nbr">Listing x.y: </span>Execution output from our Guessing Game</div>


## Getting started

The hardest part of a program is usually getting started. Rather than trying to build this entire thing,
