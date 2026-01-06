---
title: Entity Manager
sidebar:
    label: " - Entity Manager"
---

Create a program that lets the user enter and display details associated with a book. This should include your own struct to manage the book data, with a function to read in the book, and a procedure to output the details of the book. Also show a simple menu, with an associated enumeration. Use the enumeration in a read menu option function.

An example of this running is shown below:

```txt
Book entry system:

Enter the name of the book: Programmers Guide
Enter book location: https://programmers.guide
Enter number of pages: 500

Menu:
1 - Read book
2 - Print book
3 - Quit
Option: 2

Book details:
Title: Programmers Guide
Location: https://programmers.guide
Pages: 500

Menu:
1 - Read book
2 - Print book
3 - Quit
Option: 3
```

:::tip[Hints:]

Make sure you have a [struct](/book/part-2-organised-code/2-structuring-data/5-reference/03-01-struct) for your book data. Use this in a function that returns a book, and a procedure that accepts a book as a parameter.

You should also have an [enumeration](/book/part-2-organised-code/2-structuring-data/5-reference/03-02-enum) for the menu options, and a function for [reading data from the user](/book/part-2-organised-code/2-structuring-data/3-guided-tour/0-1-explore-enums/#reading-data-from-the-user) that returns one of the enum values based on what the user chose (read menu option).

:::
