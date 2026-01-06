---
title: Building Solutions
---

Learning to build software takes practice. The main this is not to get too overwhelmed with everything. One of the key strategies for overcoming this is to break problems down into parts. This is referred to as **problem decomposition**, and is the key to dealing with the complexities of software development.

As you get started with this, make sure to approach things [iteratively](/book/part-2-organised-code/10-project/move-0-panorama/2-iterative-development). Do not try to do too much in any step. Get something simple working, then add a little, get it working, and repeat this until you achieve your goals.

Computer software is complicated, involving many parts working together to achieve desired results. Utilisation of **decomposition** is critical to helping us work effectively. There are several tools we can use to help with this: functional decomposition, data organisation, and structured programming.

:::tip
Make sure you have at least a basic plan of you are aiming to implement. This could be in your head or written down. If you find yourself randomly changing the code to try to get it working, then stop and think. Maybe you have not fully understood some concepts, or you are generally stuck. Get some help by talking someone through your program and how you are intending it to work.
:::

## Data management

In [structuring data](/book/part-2-organised-code/2-structuring-data/0-overview) we saw how to use structs and enumerations to model data values within our programs. This is probably the best place to start when you begin to design a procedural program.

The data is the heart of any program - and there will usually be a few key data elements that you need to organise. Think about the entities associated with your program - what information do they have? How are they related to each other? Then use this information to start to plan your data model (the structs and enumerations that make up your code).

You can use structs to create the main entities in your program, with fields to store the necessary values that each of these things *knows*. Use arrays to management multiples, and pointers to set up relationships between entities if needed.

These will be important things in your code, so you want them to be meaningful to everyone involved. Make sure you have a clear understanding of what each struct represents and why it has the different components it does. The way you structure the data will greatly impact the way you can process it, so you may have to come back and revisit decisions you have made as you think through how the program will use the data. This is normal, and a good reason why you want to spend some time thinking about how this will work before you start coding it up.

:::tip
Make use of utilities you have created - like the dynamic array or the user input utilities. These are very general, so could be useful in many project contexts.
:::

## Functional decomposition

In [organising code](/book/part-2-organised-code/1-structuring-code/0-overview) we explored the idea of grouping actions together in functions and procedures. This is the tool that you can use when you divide up your program's logic functionally.

Functional decomposition refers to the process of breaking the logic doing into separate routines (functions and procedures). In this process you are working out what kind of actions you want to perform, and how they are connected with each other.

The way you have structured the data will greatly impact the design of this. Think through each type and consider the functions that you can associate with it. You can then add these functions and procedures to your design, and start to build up to the solution you have in mind.

:::tip
Remember that at this stage you do not need to specify everything. You want to get a good idea of how it will all work so that you are confident it is going to work. Nicely structured data, should lead to efficient and easy to understand code. These are very important as your project size grows, and even more so when you start build projects in teams.
:::

## Structured Programming

When you start coding up your solution, you are breaking things down further into the blocks you have within your code. This is another way of organising your thinking and making your code easy to understand and maintain. Remember to lay out your code using indentation to make things visually easy to follow.
