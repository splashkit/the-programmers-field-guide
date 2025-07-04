---
title: Dynamic Menu
sidebar: 
    label: " - Dynamic Menu"
---

In this activity you want to demonstrate that you can use classes, inheritance, and polymorphism to create a more dynamic program. Supporting new higher level abstractions.

## Scenario

So far, in the programs we have created the user interface has been hard coded with a set of options. If we show a menu of options, then we have a switch or set of if statements to select which action to perform. Adding a new action required us to adjust the output as well as the code to select and run the action.

For example, we may want something like this:

```sh
1: Say Hello
2: Simple Math
-1: Quit
Option:
```

The user then enters the number of the action they want to perform.

With objects, inheritance, and polymorphism we can now replace this with a list of "action" objects. If each action can output itself to the terminal, then we can assign each a number and use that number to select the action object we tell to `run` when the user chooses it.

## Creating User Actions

To do this, we will create the following User Action abstract class and a couple of child classes. Each user action will represent an item in the menu shown the user. We will be able to draw the menu from a list of user actions by calling each action's show method. The user will then be able to select the action to perform, and the code will call that user action's run method -- letting it perform what ever steps it required.

```txt
Class: User Action <<abstract>>
Methods: 
 - Show: Outputs itself to the terminal (one line)
 - Run: Performs the action <<abstract>>
```

As a test, create two specific actions:

```txt
Class: Say Hello Action
Inherits: User Action
Methods:
 - Show: Outputs "Say Hello"
 - Run: Ask the user for their name and then outputs a message based on the name entered.
```

Create your own second option. This could be something like "Take Simple Math Test" -- getting the user to answer a simple mathematics equation and outputting the result.

## Running the Menu Actions

In main, create an array (ideally a dynamic array using your code dynamic array class) of user action object pointers. Populate it with an object from each of the classes you have created (2 objects).

Create a `choose_and_run` procedure which accepts your array of user actions, loops through them, and outputs the options. Let the user select an option, and run it.

Test that you can run each of the two actions.

## Adding new actions

At this point you should have the program functioning, using inheritance and polymorphism to perform the different actions when the user chooses them.

The cool thing should be that we can add new options now, without needing to change how the menu code works. We can just create a new user action child class, and add an object to our array, and everything should just work.

Have a go at adding a third child class. Maybe this could ask the user to guess the value of a die roll, really anything should be fine. We want to see that you can add new menu options, and the code to handle the menu does not change.

Once you have created this new class, add an object to the array and test that it works. You want to see the three actions there now, and make sure that each does what is expected.

## Extensions

At this point there are a couple of ways we can extend this.

1: Dividers: As a menu grows you may want to be able to add dividers that cannot be selected by the user.
2: Data: Wondering how to handle data? You could store references/pointers within fields of a user object. This would then allow its run and show methods to access the data when they are called.

Have a go at coding up at least one of these options. That will help you think about how objects works, and the ways we may interact with this kind of code.
