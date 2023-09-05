---
title: Introduction
sidebar:
  order: 0
---

## Welcome to the Programmer's Field Guide

Wherever you look, computers and software are driving the world. Your ability to understand and shape how these computers operate will ensure that you can make the most of these tools, and connect with the growing field of computing.

The Programmer's Field Guide will take you on a journey, guiding you to develop the skills you need to understand and build software, and engage with the growing capabilities that computing offers. Through your journey, you will explore computing, how computers work, and the code to make them work for you. You will acquire new tools for your toolbelt, with an understanding of what these tools do, when to use them, and how they work. The knowledge, skills, and attitudes you develop through this journey will set you up with the capability to engage in the computing profession and to keep learning programming languages, libraries, and tools as you and the field grow and change over time.

This introduction will describe the path ahead. It will give you an overview of the parts that comprise the book, and the chapters in this first part.

By the end of this introduction you will be able to:

- Describe the main parts of the field guide and the emphasis of each part.
- Gather the resources you need to get started learning to program.

## The Journey Ahead

This book focuses on helping you develop a strong mental model of programming. It takes a bottom-up approach to introducing tools and capabilities so that you can understand how different things build upon each other. Initially, you will explore how instructions in the computer work at the lower levels. This will help you understand what is happening as your programs run and how the different parts all work together. When you understand this, you'll be able to explain how your programs work and know how to get new things working in the future. If the lower levels are particularly interesting to you, have a look at books on computer systems. These often explore the lower-level aspects of how computers work, all the way down to logic gates and how these can be combined to build a computer. The book [From Nand to Tetris](https://www.nand2tetris.org) is a great example of this.

We are currently in **Part 0**, which sets the background for the book. In this part, the introduction outlines the approach of the book, and the remaining chapters on [Digital Realities](../1-digital-realities/0-overview), [Computer Use](../2-computer-use/0-overview), and [Building Programs](../3-building-programs/0-overview) help you start working with the computer through command line instructions and low-level tools.

**Part 1** of the book focuses on *programs as instructions*. This part will help you understand how the most basic elements or abstractions work within a digital reality. Understanding how these elements work individually will help you see how they are combined to create programs. The programs you make in this section will be relatively small, enabling you to focus on the mechanics and effects of each individual instruction. Your learning from this part will give you a solid foundation upon which to start building larger programs.

**Part 2** builds on this foundation, taking it to the next level of abstraction by exploring how you can start building larger *things* within your programs. We will introduce you to tools for combining elements and packaging instructions and data into entities. The programs you make in this section will start to get a little larger as you build more meaningful entities. However, this part focuses mostly on the *tools* available to organise the code in our programs. What you learn here will help set you up to start thinking about how we decide *which tools* to use and *when*.

**Part 3**, moves away from code to think more about software design. Building upon your understanding of how programs work as instructions, and how to organise these instructions to build larger *things*, you will learn how you can think about programs as *conceptual models*. With this understanding, you will have the knowledge and skills needed to design and create sophisticated programs.

The toolkit you develop over parts 1 to 3 enable you to create any kind of digital reality. We'll explore this further in **Part 4** by looking at how to use the things you have learnt to build a range of real-world software systems. We will introduce you to some of the new paths you will be able to travel.

## What do I need?

Programming is a practical skill that requires time and effort to be mastered. In order to practice, you will need access to a computer and a set of programming tools. The tasks and activities in the Programmer’s Field Guide are designed to work on a range of computers, using free and open source tools.

While you could use any computer, the field guide targets the [Raspberry Pi](https://www.raspberrypi.org) single-board computer. If you can get yourself a Raspberry Pi, then you will be set for the journey. For the adventurous, we recommend the **Programmer's Multi-Tool** - a custom designed hardware setup. This can be your physical companion on the quest to acquire mastery of the field. [Chapter 2](../2-computer-use/0-overview) has  instructions on getting your Raspberry Pi or computer set up.

:::tip[Multi-Tool]

The **Programmer's Multi-Tool** is a Raspberry Pi based project, with everything you need to build your own small computer. If you have access to a Makerspace, you can purchase the parts and put this together in no time.

:::

Another good thing to have is company. While you can travel this journey solo, it is usually better with friends. An ideal travel group would include an experienced guide and some companions who are taking the trip for the first time. If you are at school or university, this will be your tutor and fellow students. Your tutor can help you engage with ideas and provide you with feedback on activities as you go. Your fellow students can help you learn by discussing ideas together and sharing the successes and challenges you encounter along the way.

If you are not already doing this with others, you should consider finding a study group to join. Learning to program can be challenging, so having others to help guide and support you can make a big difference.

Each chapter will provide you with individual and group activities. Engage in these activities with your travel companions, and discuss your understanding of the different tools and sights as we go.

## What language will I learn?

There is often a fixation on which language you will use when learning to program. Should we pick this language or another? What should inform the choice of language?

This book focuses on building your mental model and helping you learn how to program. The focus is not on a particular language, but on things that are common across many languages. What you will learn is *more* than just a programming language. By the end of your journey, you will be capable of quickly picking up and using many different programming languages.

However, the examples and activities in this book will use a specific language. This will give you the chance to practice what you are learning and help you build a strong mental model. Each chapter will also contain a section that shows you how each concept exists or is different in other languages.

### *So which language will I use?*

The book starts with C# in Part 1, transitions to C/C++ at the start of Part 2, then returns to C#. This will ensure you are using an appropriate language when learning each concept because some things don’t really exist in C#, or are unnecessary challenging in C/C++. Mixing the two will give us an easier journey, while still allowing us to explore all of the necessary paths. The good thing is, both languages have a common syntax, known as "C-style", meaning the transition shouldn’t be too challenging.

While the guide uses these languages to demonstrate programming concepts, it will not explore either one in depth. It will not focus on or examine things that are not common elsewhere. This means that you will need further study and practice after finishing this book to say that you have *learnt* C# or C/C++ in detail. But the great thing is that after finishing this book you will have all of the skills and understanding you need to learn C#, C/C++, and many other languages using resources available online and through things like generative artificial intelligence.

Most modern systems are built using multiple programming languages, because different languages are better at different things. There is no one best language, so our approach aims to show you the common features across languages and set you up to quickly pick up the language that best fits your needs. This is something we draw upon in Part 4, where we will use different programming languages to build a variety of real-world programs.

## Overview of Part 0

Part 0 consists of three chapters: [Chapter 1](../1-digital-realities/0-overview) will begin your journey by looking at what programs are and how to start thinking about them. [Chapter 2](../2-computer-use/0-overview) will help you acquire the first tools for your toolbelt as you set up your Raspberry Pi or computer and learn how to interact with the command line. [Chapter 3](../3-building-programs/0-overview) will wrap up Part 0 by getting you started building your first program.

Now that we have this part of the journey mapped out, let's get going.
