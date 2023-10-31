---
title: Manipulating files
---

The terminal is also great at manipulating files. For this journey, we only need a few basics but with a little further exploration, you will be able to automate a range of actions. Once you know the commands, you will be able to quickly and easily copy, move, delete, and update files.

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Make a folder (directory)|`mkdir`      |Creates a new folder at the indicated path.|
|Update timestamps        |`touch`      |Update the details on when a file was accessed. Creates the file if it does not exist.|
|Copy File(s)             |`cp`         |Copies files from one folder location to another.|
|Move File(s)             |`mv`         |Moves files from one folder location to another.|
|Delete File(s)           |`rm`         |Removes files from the computer. There is no recycle bin with this, so take care!|
|Open a file to edit.     |`nano`       |Launch a terminal editor to change a file.|

:::tip

Feel free to skim this section if you need to. Knowing these tools will be really handy, and help make the terminal so much more useful, but if you just want to focus on the basics then you can live without these for now.

:::

## Creating folders and files

To get started, let's see how to create and edit files and folders.

### Making a directory / folder (mkdir)

With [mkdir](https://man.cx/Mkdir), you will be able to quickly create folders on your computer using the command line. When you call `mkdir`, you pass it the names of the folders you want to create. For example, the following will create a new *Code* folder in the *Documents* directory of your home folder, and then create a *HelloWorld* folder within the *Code* folder.

```sh
mkdir ~/Documents/Code

cd ~/Documents/Code
mkdir HelloWorld
cd ./HelloWorld
```

You can pass `mkdir` a number of folders to create, and there is a `-p` option to automate the creation of parent folders.

:::tip[Call?]
**Call** is the term we use to describe running a command. So we can describe `mkdir HelloWorld` as **calling mkdir**. When you *call* something, you pass along th
:::

### Making a file (touch and cat)

When you want to quickly create an empty file, the [touch](https://man.cx/Touch) command can be useful. This can be used to create empty files, or to update the timestamps of an existing file (saying that it was just updated). Let’s have a look at using this to create an empty file.

```sh
cd ~/Documents/Code/HelloWorld
touch ReadMe.md
ls -lha
# You should now see the new ReadMe.md file in the list!
```

You only need the `cd` command if you are not already in the *HelloWorld* folder. In this case, the call to touch creates a file called **Program.cs**. You can then see this when you list the files in the current folder.

The [cat](https://man.cx/Cat) command reads the contents of a number of files and prints them to the terminal. The name `cat` comes from con**cat**enate, as you can use this to concatenate (combine) multiple files. Calling `cat Program.cs` will output the contents of this file to the terminal - which in this case won't show anything as the file is empty.

### Editing a file (nano)

*How can we add content to the file?*

There are several command line editors: [vi](https://man.cx/Vi), [vim](https://man.cx/Vim), [nano](https://man.cx/Nano), or [emacs](https://man.cx/Emacs). While we will mostly be working with graphical editors, it is good to know how to use one of these. This will enable you to edit files, even when you only have command line access.

Edit **ReadMe.md** using `nano`.

```sh
nano ReadMe.md
```

Enter the following text, then follow the on-screen prompts to use **ctrl-x** to exit. You can use **ctrl-o** to output (save) the file, though exiting with changes will prompt you to save it too.

```md
# Hello World

This program outputs a simple message to the Terminal. It shows me that everything is setup and working.

```

Check the contents of the file at the terminal using `cat ReadMe.md`.

**TODO: Add call out here to experience with first CLI editors and how we still use them today.**

## Copying, Moving, and Deleting Files

In addition to making and editing files, you can also use the terminal to copy, move, and delete files.

### Copy and Move (cp and mv)

You can also copy and move files using the [cp](https://man.cx/Cp) and [mv](https://man.cx/Mv) commands. You can pass these commands two arguments - the **source** file or folder to copy, and the **destination** path. For example, you can use `cp ReadMe.md Other.md` to copy `ReadMe.md` to a new file named `Other.md`. If the destination is a folder, the file will be copied into that directory. For example, `cp ReadMe.md ~/Documents/` will copy **ReadMe.md** to the **Documents** folder in your home directory.

The move (`mv`) command works in a similar way to copy. You pass it arguments for the source file and its new destination. The copy command will duplicate a file, whereas the move command removes it from its original folder and moves it to a new location.

When you copy a folder, you need to pass the `cp` command the `-r` option to recursively copy the contents of that folder. This means that it will copy the folder, all files and folders within it - and the files and folders within these as well.

The `-f` can be used to **force** the copy or move to proceed even if there is another file already in the destination. This will then override the destination if it already exists.

:::tip[Recursive?]

When something is recursive, it means that the action is applied again for each element within the parent context. So recursively removing a folder means recursively removing all folders within that folder as well. This in turn means recursively removing all folders within those folders too, and so on.

The file system is a recursive structure. Folders can contain folders. 

:::

### Deleting a file (rm)

The [rm](https://man.cx/Rm) command is used to remove (delete) files and folders. This tasks an argument for the path, or paths, that you want to be removed. For folders, you need to pass in the `-r` command to remove the folder and its contents. You can pass in the `-f` option to skip any prompts and force it to just remove the files you indicated.

You can use `rm Other.md` to delete the **Other.md** file we created earlier.

:::danger[Take care with rm]

Remember that you are working **directly** with the operating system here. When you remove a file, it is gone. There is no recycle bin from which to restore these deleted files.

:::
