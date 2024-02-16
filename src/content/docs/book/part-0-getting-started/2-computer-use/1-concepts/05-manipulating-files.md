---
title: Manipulating Files
---

The terminal is also great at manipulating files. With just a few commands you will be able to quickly and easily copy, move, delete, and update files all from the command line.

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Make a folder (directory)|`mkdir`      |Creates a new folder at the indicated path.|
|Update timestamps        |`touch`      |Update the details on when a file was accessed. Creates the file if it does not exist.|
|Copy File(s)             |`cp`         |Copies files from one folder location to another.|
|Move File(s)             |`mv`         |Moves files from one folder location to another.|
|Delete File(s)           |`rm`         |Removes files from the computer. There is no recycle bin with this, so take care!|
|Open a file to edit.     |`nano`       |Launch a terminal editor to change a file.|

:::tip
Feel free to skim this section if you need to. Knowing these tools will be really handy and help make the terminal so much more useful, but if you just want to focus on the basics then you can live without these for now.
:::

## Creating folders and files

To get started, let's see how to create and edit files and folders.

### Making a directory (`mkdir`)

With [`mkdir`](https://man.cx/Mkdir), you will be able to quickly create folders on your computer using the command line. When you call `mkdir`, you pass it the names of the folder you want to create. For example, the following will create a new *Code* folder in the *Documents* directory of your home folder, move the terminal into that new folder, and then create a *HelloWorld* folder within the *Code* folder.

```sh
mkdir ~/Documents/Code
cd ~/Documents/Code
mkdir HelloWorld
cd ./HelloWorld
```

You can pass `mkdir` a number of folders to create, and there is a `-p` option to automate the creation of parent folders.

:::tip[Call?]
**Call** is the term we use to describe running a command. So we can describe `mkdir HelloWorld` as **calling mkdir**.
:::

### Making a file (`touch` and `cat`)

When you want to quickly create an empty file, the [touch](https://man.cx/Touch) command can be useful. This can be used to create empty files, or to update the "last edited" timestamp of an existing file to indicate that it was just updated. Let’s have a look at using `touch` to create an empty file.

```sh
cd ~/Documents/Code/HelloWorld
touch ReadMe.md
ls -lha
# You should now see the new ReadMe.md file in the list!
```

You only need the `cd` command if you are not already in the *HelloWorld* folder. In this case, the call to `touch` creates a file called **ReadMe.md**. You can then see this when you list the files in the current folder.

The [`cat`](https://man.cx/Cat) command reads the contents of a number of files and prints them to the terminal. The name `cat` comes from con**cat**enate, as you can use this to concatenate (combine) multiple files. Calling `cat ReadMe.md` will output the contents of the ReadMe.md file to the terminal. In this case it won't show anything because the file is empty.

### Editing a file (`nano`)

There are several command line file editors: [vi](https://man.cx/Vi), [vim](https://man.cx/Vim), [nano](https://man.cx/Nano), and [emacs](https://man.cx/Emacs) are some of the most popular. While we will mostly be working with graphical editors, it is good to know how to use one of these. This will enable you to edit files even when you only have command line access to a computer.

Try editing **ReadMe.md** using `nano`:

```sh
nano ReadMe.md
```

Use nano to enter the following text:

```md
# Hello World

This program outputs a simple message to the Terminal. It shows me that everything is setup and working.
```

Once you are done, use **ctrl-x** to exit.
As you have made changes to the file, you should be asked if you want to save first.
Alternatively, you can use **ctrl-o** to save changes to the file you are editing at any time.

Once you have exited nano, check the updated contents of the file using `cat ReadMe.md`.
This should output the current contents of ReadMe.md to the terminal.

:::tip[Are these still used?]

Terminal based editors still have a place, even now in a world dominated by graphical user interfaces. Why? When you are working with remote devices or servers you will often access these via a terminal. When you are there, if you want to edit a file you don't need to work out how to connect a fancy graphical interface, you can just fire up `nano` and get the job done there in the terminal!

:::

## Copying, Moving, and Deleting Files

In addition to making and editing files, you can also use the terminal to copy, move, and delete files.

### Copy and Move (`cp` and `mv`)

You can copy and move files using the [`cp`](https://man.cx/Cp) and [`mv`](https://man.cx/Mv) shell commands. These commands require two arguments - a **source** file or folder, and a **destination** path. For example, try using `cp ReadMe.md Other.md` to copy `ReadMe.md` to a new file named `Other.md` in the same folder. If the destination is a folder, the file will be copied into that directory. For example, `cp ReadMe.md ~/Documents/` will copy **ReadMe.md** to the **Documents** folder in your home directory.

The move (`mv`) command works in a similar way. You still provide a source and destination, but where the copy command will duplicate a file, the move command removes it from its original location and places it into a new one.

When you copy a folder, you need to pass the `cp` command the `-r` option to recursively copy the contents of that folder. This means that it will copy the folder including all files and folders within it.

:::tip[Recursive?]
When something is recursive, it means that the action is applied again for each element within the parent context.
So recursively moving a folder means recursively moving all folders within that folder as well. This in turn means recursively moving all folders within *those* folders too, and so on until there are no folders left.
:::

If you use `cp` or `mv` and provide a destination that already exists, the command will display a warning and cancel the copy or move operation.
The `-f` option can be used to **force** the copy or move to proceed regardless.
If used, the `-f` option will cause `cp` and `mv` to override the destination even if it already exists. 
It won't warn you that any data is being overridden, so be careful!

### Deleting a file (rm)

The [`rm`](https://man.cx/Rm) command is used to remove (i.e., delete) files and folders.
This command accepts an argument for the path (or paths) that you want to be removed.
For example, you can use `rm Other.md` to delete the **Other.md** file we created earlier with our `cp` command.

For folders, you need to pass in the `-r` option to remove the folder and its contents.
You can pass in the `-f` option to bypass any warning messages and force the computer to just remove the files you indicated.

:::danger[Take care with rm]
Remember that you are working **directly** with the operating system here. When you remove a file, it is gone. There is no recycle bin from which to restore these deleted files.
:::
