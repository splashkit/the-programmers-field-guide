---
title: Methods
sidebar:
    label: " - Methods"
---

Method are functions or procedures that are declared within the scope of a struct. This is similar to our existing functions and procedures where we had passed a reference or pointer to the struct in as a parameter. Now, with the method declared within the struct, it will have direct access to the fields and other methods without needing additional parameters.

## Methods - Why, When, and How

Moving your functions and procedures into the struct allows you to connect the data and its functionality. You can start to see these as the think that the struct *can do*, with the fields being things the struct *knows*. This can be a really powerful idea, and lets you think about these things in new ways. For now, we can focus on the mechanic and the way this really helps organise your code even more than when the functions and procedures were separate. Moving them into the struct means that you can easily find all the things the struct can do - which is so much easier than having to search through all the different functions and procedures within your code. For small projects this is ok, but as your projects grow using methods will become more and more useful as the number of structs you have and the number of things that each struct can do will both grow over time.

## In C++



### Using this to access the current object

## Example
