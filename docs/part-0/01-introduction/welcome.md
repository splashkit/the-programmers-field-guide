---
sidebar_position: 1
---

# Welcome to the Programmer's Field Guide

This book will equip you with the skills you need to understand and build software, and engage with the growing capabilities that computing offers. We want you to come out of this with a good understanding of how programs work, with tools to help you create your own programs, and the skills necessary to keep learning programming languages, libraries, and tools as you grow in the field.

This first chapter will explain how we will be approaching the task of introducing you to these concepts and tools. It will give you an overview of computer systems and a big picture of how to computing works. The chapter will outline how the parts in the book are organised, and how the knowledge and skills you develop will build over these.

By the end of this chapter you will be able to:

- Describe 

## Why are computer systems everywhere?

Computers are everywhere, helping enhance many aspect of our lives. There are computers embedded within many every day items, most people carry around a computer in their pocket and possibly another on their wrist, and we interact with software for so many things each day. 

*Why are computers everywhere?*

In the video below, Steve Jobs, the co-founder of Apple, describes the computer as a tool that acts like a **bicycle for the mind**. From our perspective, this is trying to capture the role of the computer as a tool to *accelerate our thoughts and imaginations*. This sits at the root of the answer to why computers are so useful, and so connected to our daily lives. If we can imagine something, with some constraints, we can create this reality within code and have it accelerated by computing - which can quickly and reliably undertake the actions we wanted performed.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ob_GX50Za6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

If we follow this perspective, programs allow you to instruct the computer to build a reality that operates as if at a conceptual level. In a way this is a conceptual machine (a bicycle for the mind) with imaginary parts that can perform actions and interact with the real world.

Within these programs, you build the *things* you need to make the reality you are aiming for, *things* built upon information and instructions to modify that information based on external stimulus. Program can receive **inputs** from the real world, with buttons, mice and sensors turning real world actions and values into digital values that can be used. Motors, displays, speakers, and other devices enabling programs to change things within the real world - which we can think of as the **outputs** of the program.

In this way, we can think of each program as creating its own **digital reality**. One that contains the things the developers created through their program’s code, operating in the way the developers described in that code. These realities can respond to inputs, and generate outputs.

This capability makes computers very useful. If we can imagine a useful digital reality, and create this using programming tools, then this reality will exist within the computers running your program. You will be able to get the computer to respond in a meaningful way to inputs, and generate meaningful changes in the real world.

Learning to program will give you the skills and tools needed to create your own digital realities.

## Digital Reality

*What do we mean by a digital reality?*

Let’s think about some computer programs you will have interacted with. Take a word processor, for example. Within this you can create documents, that contain paragraphs, sentences, words, images, and other resources.  None of these things really exist within the computer, but we accept this reality. We can input values from the keyboard and use a mouse, touchscreen, or trackpad to interact with parts of the documents. We can see the documents on a screen, and print them paper to see them in the real world.

We can also think about things like banking. We know that banking operates mainly within banking computer systems. We can see our accounts, that contain our money - though there is no money within any computer. We accept this reality, and can interact with it by transferring to, or accepting funds from, others. This just changes values within these programs - no actual money moves in this process. We can use an ATM to withdraw money - where the computer powers motors within the machine to release actual money in response to changes within the digital reality.

Every computer game you have played is also a digital reality. The characters of these games do not really exist within the computer, but **they do exist** within the digital reality created by the programmers who developed these games. These are great examples of purely the fictional realities we can create.

Hopefully you can see how powerful this makes computing, and how valuable it can be to understand how computers work and how to build these digital realities.

### Digital Realities and Abstraction

Generally, you will find that programming texts will describe the creation of these digital realities as **abstraction**. This comes from thinking about how a computer works, and the process of how we enable these digital realities to exist.

To see this, we need to think about what a computer is. A computer is a electronic device. It operates by controlling voltage through its circuits, with transistors enabling us to detect the presence or absence of voltage at certain places within the computer. So, at this level, a computer is electrical current flowing through a circuit. So how does this become a digital reality? Through *abstraction*.

Using abstraction, we can *imagine* that the presence of voltage at certain places becomes a **1** where as absence would be **0** - giving us a binary value. Other parts of the computer then use electronics to create gates that allow different behaviour in response to binary values that exist within other places in the computer. At this level, the computer is a binary machine capable of manipulating these binary values with things like simple mathematical operations build into the electronics.

Abstracting this further, we can combine individual binary values into numbers and use these to represent characters, images, sounds, text, and other kinds of data. We can take this further to combine these individual values into entities like bank accounts, characters and levels in games, or any other *thing* we want to represent within the digital realities we are creating.

Actions can also be abstracted, building from simple mathematical operations to become actions meaningful to the entities within our reality. We can transfer funds between bank accounts, move players within a game, add pages to documents, and any other action that makes sense within our reality.

By using abstraction, we can work at this higher level. Building things within the computer that represent the things we want to exist, and operate the way we want them to work.

This is what software development is all about.

## How do we get there?

Welcome to your journey to discover how to conceptualise and build these digital realities yourself!

In this book, we have decided to take a bottom up approach. We will work with the high level details, and explore a little down into the details at a binary level. If you want to explore lower levels, have a look at books on computer systems. These often explore the lower level aspects of how computers work, the gates and how these can be combined to build a computer.

We are currently in **Part 0**, which sets the background for the book. In this part the introduction outlines the approach of the book, with following chapters on computer use and building programs helping you start to work with the computer through command line instructions and low level tools.

**Part 1** of the book will focus on *programs as instructions*. This part will help you understand how the most basic of the elements work within these digital realities. You will see how each of these work, looking at these in details to think about how they work at lower levels of abstraction. Understanding how these work will help you understand how these core parts work within the programs we create. Programs in this section will be relatively small, enabling you to focus on the mechanics of how these programs work. Your learning from this will give you a solid foundation upon which to start building larger programs.

**Part 2** move up to consider how we can start building larger *things* within our digital realities - taking it to another level of abstraction. This will introduce you to tools to combine things together, helping package them into the kinds of entities that exist within even the most sophisticated digital realities. We will focus on how these packages work to group together data, instructions, and then combine together data and instruction. Programs in this section will start to get a little larger, as you build more meaningful entities. However, we will focus mostly on how the *programs as* ways of *organising* code. What you learn from this will help set you up to start thinking about how these come together.

In **Part 3**, we will move away from code to think more about software design. You will see how you can use the different kinds of packages (from part 2) to build complex  realities, with *programs as conceptual models*. Building upon your understanding of how to organise code, and your understanding of how programs work as instructions. With this understanding you will have the knowledge and skills needed to design and create your own digital realities.

We conclude the book in **Part 4** where we look at how to use the things you have learnt to build a range of real-world software system. This will give you an initial look at how to use the things you have learnt, with professional tools, to create any kind of software system.

## But what language will I learn?

There is often a fixation on which language you will use when learning to program. Should we pick this language or another, what should inform the choice of language?

In this book we will focus on common programming features, and we will reach out to other languages to help you understand that what you are learning is more than just a programming language. We have chosen to start with C#, transition to C/C++, then come back to C#. This will allow you to focus on a common style of programming syntax, the C style syntax, while giving you a modern language to work with. More importantly, these languages will help set a good foundation and we can ignore many language peculiarities.

While we will work mostly with one language at a time, each chapter will also have a section that will call out to other languages. This will help you see how the things you are learning exist in other languages, and related features and some peculiarities from interesting languages.

Most modern systems are build using multiple programming languages - as different languages are better at different things. There is no one best language, so our approach aims to show you the common features across languages and give you set you up to quickly pickup the language that best fits your needs. This is something we draw upon in Part 4, where we will use different programming languages as we build out these different real-world programs.

## Wrap Up

This book is about learning to program - learning to create digital realities that can exist and operate within a computer. We will use c-style syntax, while also pointing out other languages you can explore at a later stage.

Before we get into this, we need to explore how to use your computer like an IT professional.