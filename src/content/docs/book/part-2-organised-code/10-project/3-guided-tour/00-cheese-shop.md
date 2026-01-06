---
title: Cheese Shop
---

In this walkthrough we will build out a program to manage a fictitious cheese shop. This will include managing stock on hand, and tracking sales.

:::tip[Monty Python Reference]

There is a classic Cheese Shop sketch from the Monty Python team. Unfortunately there isn't currently an official video on this. However, you may be able to find reference to this on [YouTube](https://www.youtube.com/results?search_query=cheese+shop+sketch+monty+python) if you search.

:::

An example of how this may work is shown below:

```txt
===================================
Main Menu:
===================================
0. Exit
1. Add cheese
2. Edit cheese
3. Print cheese list
Select an option (0-3): 1

Enter cheese name: Cheddar
Enter weight in stock (kg): 2.5
Enter price per kg (cents): 2100

===================================
Main Menu:
===================================
0. Exit
1. Add cheese
2. Edit cheese
3. Print cheese list
Select an option (0-3): 1

Enter cheese name: Gouda
Enter weight in stock (kg): 1.75
Enter price per kg (cents): 1523

===================================
Main Menu:
===================================
0. Exit
1. Add cheese
2. Edit cheese
3. Print cheese list
Select an option (0-3): 2

===================================
Select Cheese:
===================================
0: Select none
1: Cheddar: 2.50 kg, $21.00
2: Gouda: 1.75 kg, $15.23
Select cheese (0 - 2): 1


===================================
Edit Cheese:
===================================
Editing cheese: Cheddar: 2.50 kg, $21.00
Do you want to edit the name? (1 for yes, 0 for no): 0
Do you want to edit the weight? (1 for yes, 0 for no): 1
Enter new weight in stock (kg): 1.98
Do you want to edit the price? (1 for yes, 0 for no): 0

===================================
Main Menu:
===================================
0. Exit
1. Add cheese
2. Edit cheese
3. Print cheese list
Select an option (0-3): 3

===================================
Cheese stock list:
===================================
Cheddar: 1.98 kg, $21.00
Gouda: 1.75 kg, $15.23
===================================


===================================
Main Menu:
===================================
0. Exit
1. Add cheese
2. Edit cheese
3. Print cheese list
Select an option (0-3): 0

Exiting...
```

Switch on some Bazouki music, and let's consider how to build this program.
