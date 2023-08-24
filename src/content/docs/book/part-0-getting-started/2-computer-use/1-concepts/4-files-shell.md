---
title: Files in the Shell
sidebar:
  order: 4
---

Files store the data you want to work with, so the shell needs to provide you with convenient ways of accessing and interacting with your files and the folders that organise them. To achieve this, the shell has a **working directory** - i.e. the folder you are currently working within. You can then issue commands to list the files within the current folder (directory) move to new directories, and perform other commands on your files. 

## File Access Commands

You can directly access files within the current working directory, which we often shorten to just **current directory**. Now lets take a look at the main commands you need to get stared exploring files and manipulating the working directory in your Terminal:

|**Action**               |**Command**  |**Description** |
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Print Working Directory  |`pwd`        |Outputs the current working directory.|
|Change Directory         |`cd`         |Moves the shell to a different working directory (folder).|
|List Files               |`ls`         |Outputs a list of files.|

### Print Working Directory (pwd)

The `pwd` command will let you know the path to the current working directory. Give it a go in your Terminal. Type `pwd` at the shell’s prompt, and see the path to where you currently are.

```sh
pwd
```

### Change Directory (cd)

Changing directory will require you to tell the shell where you want to go to. We call this **passing** information to a command, and there are some conventions on how you do this which we will look at as we go through these commands.

The main way to pass data to a command is through an **argument**. In the shell, arguments are provided after the command name. You can pass 0, 1, or more arguments to a command, with each argument separated by a space.

:::tip[Argument?]
An **argument** is the term we use to provide data for a command to use. This is derived from the notion of [mathematical arguments](https://softwareengineering.stackexchange.com/questions/186293/why-are-actual-parameters-called-arguments#:~:text=%22Formal%22%20parameters%20(also%20known,above%20to%20prevent%20any%20confusion.)).
:::

Here is an example use of the change directory command. It will change into the folder at the `/home` path.

```sh
cd /home
```

The `cd` command takes one argument - the path to the directory you want to make the current working directory.

### Give it a try!

Move to the root of the file system, and back to your home folder.

```sh
cd /
pwd
# This will output > / (you are in the root folder)

cd /home/multitool
pwd
# This will output > /home/multitool (if you are using the username multitool)

```

## Looking around

Moving folders is great, but we also need to be able to see what is in these folders.

### Listing folder contents (ls)

Use [ls command](https://man.cx/Ls) to list the files in a folder. By default, this lists the files in the current folder. Alternatively, you can pass `ls` an arument for the path to the folder you want the details from.

```sh
ls
# You should see a list of the files and folders in the current directory (folder)
```

:::tip[Options]
In addition to arguments, many commands can also take **options**. These are arguments that start with a `-`, and there are some useful options for a command.
:::

There are a number of options you can use to help format the output of the list (ls) command. Generally, I use `ls -lha`, where the `l` option asks for a long format list (one file per line), `h` asks for file sizes in human readable numbers, and `a` asks for all files (including hidden files).

### Give it a try!

```sh
ls -l
# compare with the ls output

ls -lha
# check the file sizes and hidden files
```

You can also use arguments with wildcards to indicate the kind of file you want to list. Try `ls -lha D*` The `*` is a wildcard, meaning it can be replaced by anything. So `D*` will be any file or folder starting with the letter `D`.

Try moving around and explore your file system. Go to the root and list the files and folders there. Then move into some of these folders and list what they contain. Look at a file in your graphical file explorer, and see if you can find it in the Terminal.

## Folder shortcuts

The shell and file system provides some shortcuts to help move to common folders, and create relative paths.

### Going home (~)

To get back to your **home** directory, the one where your files are generally stored, you can either use the path you see printed above in the output from the `pwd` command or you can use the shortcut `~`. The shell knows that you will often want to go to your home folder, so it added `~` as a shortcut.

Give it a try. Move back home using `cd ~`. Use `pwd` to check where you are.

```sh
cd /
pwd
# This will output > / (we are in the root folder)

cd /
cd ~
pwd
# This will output > /home/multitool (if you are using the username multitool)
```

:::tip[Comments]
Adding a `#` at the start of a line makes a comment which is then ignored by the shell. We can use this here to show you the output from the commands.
:::

### Parent Folders (..)

*How about moving to the parent folder of your home?*

Once again you could use the full path, e.g. `cd /home` on the Pi, or you can use the convenient shortcut `..`. In the shell, `.` is a shortcut for the current directory and `..` is the shortcut for its parent.

:::tip[Shortcuts]

There are three really useful shortcuts:

* `~` is the path to your home directory
* `.` is the path to the current working directory
* `..` is the path to the parent folder

:::

Using these shortcuts, you can create **relative** paths. This is the path from your current location, to another location within the file system. The following examples demonstrate the use of this to navigate between sibling folders (those with the same parent).

```sh
cd /home/multitool/Documents/code
pwd
# This will output > /home/multitool/Documents/code

cd ../presentations
pwd
# This will output > /home/multitool/Documents/presentations
```

You can combine together multiple of these shortcuts. 

```sh
cd /home/multitool/Documentations/presentations
cd ../../Downloads
pwd
# This will output > /home/multitool/Downloads

cd ~/Documents
# This will output > /home/multitool/Documents

cd ~/../other-user
pwd
# This will output > /home/other-user (assuming this folder exists)
```

:::tip[Read the friendly manual]

The `man` command in Unix opens the manual for a given command. You pass `man` a single argument - the name of the command you want help with. So `man pwd` will give you the instructions on how to use the `pwd` command. This can be useful if you are stuck, though searching the internet or accessing Bard or other generative AIs can help too. Online versions of these manuals are also available. For example, you can use this to read about the [cp command](https://man.cx/Cp).

```sh
man pwd
# This will open the manual for the pwd command - press q to quit
man man
# This will open the manual for the man command - press q to quit
```

:::

### Current folder (.)

There is also a shortcut to the current folder - which will be useful later. You use `.` for the current folder.

```sh
cd /home
pwd
# This will output > /home

cd .
pwd 
# This will output > /home ... you moved to the current folder!

cd ./multitool
cd ./Documents
cd ./Code
pwd
# This will output > /home/multitool/Documents/Code
```

:::tip

With many terminal programs, you can drag and drop files onto the Terminal program to inject their path at the cursor in the prompt.

:::

:::tip[Auto-complete]

If you start typing the parts of a path, you can auto-complete it using the tab key. For example, `cd ~/Doc<tab>` should complete to become `cd ~/Documents`, assuming you have a Documents folder within your home directory.

**Make sure you use auto-complete!**

The tab key is your friend.

:::
