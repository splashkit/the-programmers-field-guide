---
title: Using the Terminal
---

Now we need to get our hands dirty and start playing with the Terminal. This will be a very quick tour, but will help get you started. We will expand on this in the next chapter.

Open the terminal on your computer.

At this point, you should see a “prompt” within the terminal. This is the **shell** asking you to give it an instruction. You type commands, and press the Enter or Return key on your keyboard to get the shell to do what you have asked.

Try the following:

```sh
echo "Hello `whoami`"
```

:::caution[Make sure to use backticks]

For these commands to work, make sure you are using double quotes (") around the text and backticks (\`) not single quotes (') around the `whoami`. We will look at why soon.

:::

## Moving around

One of the main things you have to learn is to move around within the file system. Let's start by creating a **Code** folder in our Documents folder. We can then use this for all of our code projects later on.

1. Open or switch back to your terminal.
2. You can check where you are using the `pwd` command. Give that a go and see where you are now.
3. Let's now move to your Documents folder:
    - Linux and macOS: `cd ~/Documents`
    - Windows with MSys: `cd /c/Users/username/Documents`

    For Windows (MSYS2), you need to put the full path as MSys has its own "home" folder. Replace `username` with your username, and this should work.

    For Windows (WSL), you may need to first create the Documents folder using `mkdir ~/Documents`

    In Linux and macOS, the `~` symbol is a shortcut to indicate your home folder.

4. Use `pwd` again to see where you are, and try out `ls -lha` to see the files and folders in your Documents.
5. Next, use `mkdir` to create a new folder. Run `mkdir Code` - this passes the value `Code` to `mkdir`. It will then make a new folder (directory). This will be in the current folder, but you can create the folder anywhere by passing in a full path (eg `mkdir /c/Users/andrew/Documents/Code` (Windows MSYS2/MINGW64 terminal) or `mkdir ~/Documents/Code` for WSL, Linux and macOS terminals).
6. Open your file explorer or finder, and check that this folder now exists.

That will be enough for now. I encourage you to explore the ideas in this chapter further as you have time, but for now this should be enough for us to build upon in the next chapter.
