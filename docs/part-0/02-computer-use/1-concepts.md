---
sidebar_position: 2
---

# Concepts

## The Terminal

Once upon a time, computers were rare, large, and shared between many users. Each computer (picture a whole room, not something in your pocket) had a number of connected monitors and keyboards to allow people to access the computer. These monitors and keyboards were built into a single box called a **terminal**. To use the computer, you would go to the terminal and respond to the prompts the computer provided you with.

The terminal gave you access to the low-level workings of the computer.

**ADD IMAGE - terminal machine**

Now, computers are everywhere, but we still need a way of access it at a lower level. The name *terminal* has stuck, but now the **Terminal** is a **program** that gives you command line access to the computer. With command line access the computer will give you a prompt to enter commands. You can type text, and hit *enter* (or *return*) to have the computer run that command. Programs you run at the terminal output details back to the Terminal for you to read, and interactive programs can also read input from you via this same Terminal.

 **ADD IMAGE - terminal window**

Being about to interact with programs via the Terminal will give you access to an entirely new world of computing. There are utilities and tools that you can run to do many useful tasks. These tools can be combined together, scripted, and built into programs. This kind of scripting will help you in analysing data, setting up servers, scripting repetitive tasks, and understanding errors or issues in getting complex programs to work.

Getting some experience with the command line will mean that you can start using these tools yourself. Understanding how they work, will also help you understand options available to you and help you debug any errors that occur.

The trouble with command line applications is that you need to remember the commands. There isn’t a convenient interface that tells you want to do - you are in control. You can do more, with more flexibility, but with less guidance. Think about how you will remember these tools. Maybe create a cheat-sheet you can refer to.

**ADD SOMETHING ON MEMORISATION**

## The Shell

*What commands can I enter at the terminal?*

The **Terminal** program provides a text environment, allowing text input and output much like the old physical terminals once did. We need something within the computer that receives the text you type, and can respond to it. We call this program a **shell**.

A **Shell** program runs within each terminal to interpret your commands. This is an interactive program that will display a prompt to you, at which you enter your commands.

There are a number of different Shell programs, each of which has its
own set of instructions. The Shell we are going to use in this book is
called **Bash**. This shell program is available on Linux, Mac OS, and
Windows. As a Unix shell it is native for Linux and Mac OS, and with
Windows you can install **MSys2** to use these commands.

![The Terminal running
Bash](./topics/programs-and-compilers/images/Bash.png){#fig:bash
width="60%"}

A shell program is very simple. It provides a text prompt at which you
can enter commands. The Shell then reads the text you entered, and
performs an action based on the text you entered. You can use the Shell
to perform operations like copying and deleting files, and starting
programs.

 
## The Execution Environment

Environment variables

Standard input, output and error

## Files and File Systems

Current through circuits disappears when the power is turned off.
Storage
Organise things

Files, folders

~
.
..

pwd
ls
cd
mkdir
cat
cp
rm
mv
find

permissions - chmod, chown




## Advanced tools

## Useful tools

man

top
ps
kill

grep
vim,nano,emacs,
curl wget
apt-get install (brew)


### Redirection

>>
>
<<
< 

2>>

### Pipes

|

