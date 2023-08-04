---
title: test
description: test
---

# Concepts

## The Terminal

Once upon a time, computers were rare, large, and shared between many users. Each computer (picture a whole room, not something in your pocket) had a number of connected monitors and keyboards to allow people to access the computer. These monitors and keyboards were built into a single box called a **terminal**. To use the computer, you would go to the terminal and respond to the prompts the computer provided you with.

The terminal gave you access to the low-level workings of the computer.

**ADD IMAGE - terminal machine**

Now, computers are everywhere, but we still need a way of access it at a lower level. The name *terminal* has stuck, but now the **Terminal** is a **program** that gives you command line access to the computer. With command line access the computer will give you a prompt to enter commands. You can type text, and hit *enter* (or *return*) to have the computer run that command. Programs you run at the terminal output details back to the Terminal for you to read, and interactive programs can also read input from you via this same Terminal.

 **ADD IMAGE - terminal window**

Being about to interact with programs via the Terminal will give you access to an entirely new world of computing. There are utilities and tools that you can run to do many useful tasks. These tools can be combined together, scripted, and built into programs. This kind of scripting will help you in analysing data, setting up servers, scripting repetitive tasks, and understanding errors or issues in getting complex programs to work.

Getting some experience with the command line will mean that you can start using these tools yourself. Understanding how they work, will also help you understand the options available to you and help you debug any errors that occur.

The trouble with command line applications is that you need to remember the commands. There isn’t a convenient interface that tells you what to do - you are in control. You can do more, with more flexibility, but with less guidance. Think about how you will remember these tools. Maybe create a cheat sheet you can refer to.

**ADD SOMETHING ON MEMORISATION**

## The Shell

*What commands can I enter at the terminal?*

The **Terminal** program provides a text environment, allowing text input and output much like the old physical terminals once did. We need something within the computer that receives the text you type and can respond to it. We call this program a **shell**.

*Why is this called a shell?*

This is a *nut* analogy. The shell is a thin wrapper around the kernel or core of the nut. In the computer, the shell is the command interpreter that gives you access to the core of the operating system. The core of the operating system maintains the same nut (or seed) analogy, with the core being known as the **kernel**. The kernel provides tools to abstract away many of the lower-level details related to interacting with the computer hardware. In this way, all other programs *grow* out of the kernel - as plants grow out of the kernel of a nut or seed.

`**ADD IMAGE - application <--> kernel <--> CPU, Memory, etc... see wikipedia**`

A **shell** program runs within each terminal to interpret your commands and instruct the kernel to perform the actions you request. This is an interactive program that will display prompts to you, at which you enter your commands by typing text. There are several different shell programs you can choose from, each of which has its advantages and disadvantages. The shell we are going to use for this journey will be **Z shell**. This is a shell built into most modern Unix operating systems.

A shell program is very simple. It provides a text prompt at which you can enter commands. The shell reads the text you entered, and performs an action based on this text. You can use the shell to perform operations like copying and deleting files, starting programs, and more.

### Accessing the Shell

Ok, enough talk. We need to get our hands dirty and start playing with the Terminal.
```
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**TODO make sure this works**

<Tabs>
  <TabItem value="pi" label="Raspberry Pi" default>
    * If you dont have a multitool SD card, then you will need to setup an SD card first. Download the Multitool image, and use the [Pi Imager](https://www.raspberrypi.com/software/) software to install this on an SD card.
    * Get your miltitool SD card and plug that into your pi.
    * Connect your display to the hdmi port of your pi
    * Connect a keyboard
    * Plug your pi and display into power
    * Watch it start… this will start at the terminal!
  </TabItem>
  <TabItem value="unx" label="Linux">
    Linux variants are all based on Unit, so you have a Terminal and shells built in. Follow the instructions in the [SplashKit installer](https://splashkit.io/articles/installation/ubuntu/) to install the tools you need.
    
    If you are using a Linux machine already, you probably already know how to access the Terminal. If not, you should be able to find it within your application launcher.
  </TabItem>
  <TabItem value="mac" label="macOS">
    The macOS operating system is based on Unix, so you have a Terminal and shells built in. Follow the instructions in the [SplashKit installer](https://splashkit.io/articles/installation/mac/) to install the tools you need.
    
    To access the Terminal, use Spotlight to search for “Terminal” and run the utility that it finds for you.
  </TabItem>
  <TabItem value="win" label="Windows">
    Unix is the most prevalent operating system in the world, and offers an elegant and effective terminal and shell experience. If you are using a Windows machine, then we need to install the Unix tools somehow.
    
    There are two ways you can do this: use a virtual machine, use MSys2.
    
    The easy way is to download the Multitool virtual machine image. You can then launch this within VirtualBox and run this to get access to a virtual version of the multitool environment.
    
    *MSys2* is the alternative, and emulates the Unix environment on top of your Windows operating system. Follow the steps in the [SplashKit installer](https://splashkit.io/articles/installation/windows/). The *Msys2 Shell* is then the equivalent of Terminal on the other operating systems. You will find this in **Program Files**, **MSys2** folder.
  </TabItem>
</Tabs>
```

**ADD IMAGE(s) maybe above**

At this point, you should see a “prompt” within the terminal. This is the **shell** asking you to give it an instruction. You type commands, and press Enter or Return to ask the shell to do what you has asked.

Try the following:

```sh
echo “Hello `whoami`“
```

This command should output a message that says “Hello” followed by your username.

If you are using the multitool setup, then plug in a speaker to the multitool and give this a try: 

```sh
espeak “Hello `whoami`, welcome to the command line!”
```

:::warn Backticks

For these commands to work, make sure you are using double qutoes (“) around the text and backticks (`) not single quotes (‘) around the `whoami`. We will look at why soon.

::

This should get your pi to speak to you.

**TODO ADD curl example - check BoM data? **

## Files and File Systems

To start our exploration of the command line, we need to understand a little about files and file systems. When you interact with the terminal, the shell will position you within the file system to enable you to easily access and manipulate files.

Let’s return to our low-level thinking on how the computer actually works. You should recall that the computer is an electronic device. Current flows through the transistors within the computer, enabling different values and actions to be achieved. However, this all disappears when the power is turned off. In order to retain data, some other technologies are required.

Storage devices have the capability to retain data in a way that does not require power. In order to use this data, you need to read it from the storage device. This converts the stored data back into electronic current that can be used within the processors. New and changed data can then be written back to the storage device to be used again later.

Operating systems provide ways of organising this data, to help efficiently organise the information on the storage devices and make allow users to find the information they are after. To achieve this, operating systems opted for a metaphore based on paper based ways of organising information in **files** and **folders**.

A **file** stores data associated with a single thing - a document, image, sound track, program, etc. Through the operating system, programs can open files and read that data within them, change data stored, or write new data to the end of the file. You could picture this as a book, or sheets of paper, where you can change read, change, or add information.

**Folders** were then created to organise files. Files exist within folders, listed in a **directory** that records the details of each file such as its name, size, the owner, and permissions on who can accessess it. This allows files to be organised in groups, where users can list the files in the folder to see the one they want to interact with.

*How are folders organised?*

In addition to containing files, folders can also contain other folders. This gives you directories of files, that can contain sub-directories. This simple concept allows you to create large file systems, with folders and files organised in complex ways. For example, in your home folder you can have folders for documents, downloads, pictures, music, etc. In your documents folder you can have more folders to divide your documents between different projects, or create folders to organise them in any way that makes sense to you.

**TODO Add image to show folders**

This organisation results in files and folders organised in a tree, much like a family tree. This similarity resulted in the file system using metaphors based on genealogy and family relationship terms. The files and folders within a folder are called its children, making the parent the folder that contains a given folder.

You can picture this as a hierarchy. The file system starts with a folder we call the **root** of the file system. It is the one folder that does not have a **parent** folder. The name root comes from the tree analogy, as the basis for the tree on top of which the other folders grow. All other folders are within the root folder.

**TODO Add image showing labeling root, parent and child**

As a user, you need a way of saying which file you want to use. This means that each file must be uniquely identifiable. To achieve this, files and folders must have a unique name within their parent folder. If you move a file with the same name into a folder, it will replace the existing file. Losing the data associated with it. This ensures that you can uniquely identify files within each folder.

To identify a file within the file system, you can list the **path** to follow from the root to the file you are wanting to identify. The path is a list of folder, separated by `/`. For example, `/home/multitool/Documents/code/program1.cs` is the path you take starting at the *root* of the file systems. First you go into the *home* folder, then into the *multitool* within *home*, followed by Documents, and code. The last element on the path is the *program.cs* file. Here we can see that *Documents* is the parent of the *code* folder, and *multitool* is the parent of the *Documents* folder.

:::info

The root of the file system is the `/` folder - as this lists no folders in this path. 

:::

:::warn

To be different, Windows uses `\` to separate folders. This can be more challenging to program with as `\` also has special meaning in many programming languages.

:::

### Files and the Shell

Files store the data you want to work with, so the shell needs to provide you with convenient ways of accessing and interacting with your files and the folders that organise them. To achieve this, the shell has a **working directory** - i.e. the folder you are currently working within. You can then issue commands to list the files within the current folder (directory) move to new directories, and perform other commands on your files. 

You can directly access files within the current working directory, which we often shorten to just **current directory**. Now lets take a look at the main commands you need to get stared exploring files and manipulating the working directory in your Terminal:

:::info
  **Action**                **Command**   **Description**
  ------------------------- ------------- -----------------------------------------------------------------------------------
  Print Working Directory   `pwd`         Outputs the current working directory.
  Change Directory          `cd`          Moves the shell to a different working directory (folder).
  List Files                `ls`          Outputs a list of files.
  Copy File(s)              `cp`          Copies files from one folder location to another.
  Move File(s)              `mv`          Moves files from one folder location to another.
  Delete File(s)            `rm`          Removes files from the computer. There is no recycle bin with this, so take care!
  Create a Directory        `mkdir`       Makes a new directory (folder).

:::

#### pwd

The `pwd` command will let you know the path to the current working directory. Give it a go in your Terminal. Type `pwd` at the shell’s prompt, and see the path to where you currently are.

#### cd

Changing directory will require you to tell the shell where you want to go to. We call this **passing** information to a command, and there are some conventions on how you do this which we will look at as we go through these commands.

The first way to pass data is as **arguments** - derived from the notion of [mathematical arguments](https://softwareengineering.stackexchange.com/questions/186293/why-are-actual-parameters-called-arguments#:~:text=%22Formal%22%20parameters%20(also%20known,above%20to%20prevent%20any%20confusion.) passed to functions. This simple means listing the data you want to give to the command after the command itself, with spaces between each value. For example, `cd /home` passes the argument `/home` to the `cd` command.

The `cd` command takes one argument - the path to the directory you want to make the current working directory.

Give it a try. Move to the root of the file system using `cd /`.

To get back to your **home** directory, the one where your files are generally stored, you can either use the path you see printed above in the output from the `pwd` command or you can use the shortcut `~`. The shell knows that you will often want to go to your home folder, so it added `~` as a shortcut.

Give it a try. Move back home using `cd ~`. Use `pwd` to check where you are.

How about moving to the parent folder of your home. Once again you could use the full path, e.g. `cd /home` on the Pi, or you can use the convenient shortcut `..`. In the shell, `.` is a shortcut for the current directory and `..` is the shortcut for its parent.

:::info

There are three really useful shortcuts:

* `~` is the path to your home directory
* `.` is the path to the current working directory
* `..` is the path to the parent folder

:::

Using these shortcuts, you can create **relative** paths. This is the path from your current location, to another location within the file system. For example, if you run `cd ../presentations` in `/home/multitool/Documents/code` then this is move to the parent of `code` (the Documents folder) and then down into the `presentations` folder. This would move you to `/hone/multitool/Documents/presentations`.

You can combine these together. So in `/home/multitool/Documentations/presentations` you could run `cd ../../Downloads` and end up in `/home/multitool/Downloads`. You could get to your Documents folder from anywhere using `cd ~/Documents`.

:::tip Read the friendly manual

The `man` command in Unix opens the manual for a given command. To do this you pass `man` the name of the command you want help with. So `man pwd` will give you the instructions on how to use the `pwd` command. This can be useful if you are stuck, though searching the internet or accessing Bard or other generative AIs can help too. Online versions of these manuals are also available. For example, you can use this [cp command](https://man.cx/Cp).

:::

#### ls

To list the files in a folder you can use the [ls command](https://man.cx/Ls). By default, this lists the files in the current folder. Alternatively, you can pass `ls` the path to the folder you want to list.

In addition to arguments, you can pass options to commands. These are arguments that start with a `-`, and there are some useful options to help format the output of the list (ls) command. Generally, I use `ls -lha`, where the `l` option asks for a long format list (one file per line), `h` asks for file sizes in human readable numbers, and `a` asks for all files (including hidden files).

Give this a try. Move to your home directory, and then use `ls`, `ls -l` and `ls -lha` a go. 

You can also use arguments with wildcards to indicate the kind of file you want to list. Try `ls -lha D*` The `*` is a wildcard, meaning it can be replaced by anything. So `D*` will be any file or folder starting with the letter `D`.

Try moving around and explore your file system. Go to the root and list the files and folders there. Then move into some of these folders and list what they contain. Look at a file in your graphical file explorer, and see if you can find it in the Terminal.

:::tip

With many terminal programs, you can drag and drop files onto the Terminal program to inject their path at the cursor in the prompt.

:::
```
:::tip Auto-complete

If you start typing the parts of a path, you can auto-complete it using the tab key. For example, `cd ~/Doc<tab>` should complete to become `cd ~/Documents`, assuming you have a Documents folder within your home directory.

**Make sure you use auto-complete!**

The tab key is your friend.

:::


ls
cd
mkdir
cat
cp
rm
mv
find

permissions - chmod, chown


 
## The Execution Environment



Standard input, output and error

**ADD IMAGE - program with data for stein,out,err**

Environment variables

PATH



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
```
>>
>
<<
< 

2>>
```
### Pipes

|

