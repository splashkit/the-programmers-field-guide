---
title: Separation of concerns
---

There are many ways that we can structure a program, but one common strategy is to divide the code into separate sections - each with its own focus. One common pattern is called the model-view-controller or MVC. This separates the model from the user interface code (handling the view/visuals and control of the application). 

In this approach, the model captures the essence of the program which could then be implemented with different kinds of user interfaces. The model is the heart of the application, it captures all the main program logic and functionality.

The user interface is then built around the model, and includes the code to show the user what is happening and the code to control the interactions with the user. This is often larger than the core model, and will involve the use of a range of frameworks and libraries to manage the user experience.

These factors will become increasingly important as you start to build larger and more complex systems. At this stage it is good to be aware of this important idea, and to start to think about building the model separately from the code to manage the user interface and interactions.
