---
title: Environment Variables
sidebar:
  order: 6
---

There are some things that you will want to be able to configure for a program. There are many options to cater for this. **Environment variables** is one way the operating system provides to allow programmers to gain access to configuration data within their program. The values of these variables can be set and changed, and thereby change the way things work within the programs that read these values.

This is particularly important when we consider the variables that impact on the shell program itself.

## Important variables for the shell

There are a few variables that are really important, as they are used by the shell to change how it works. Knowing about these variables, and what they do, will be useful in debugging issues when things are not working on a computer. Incorrectly set environment variables is a common cause for problems. The main variables are:

|**Environment Variable** |**Purpose**  |
|-------------------------|-----------------------------------------------------------------|
| PATH                    | The list of folders to search for programs run at the terminal. |
| SHELL                   | The path to your default shell program. |

### Programs to run (PATH)

The **PATH** is probably the most important environment variable. It contains a list of colon (:) separated paths that are searched for the commands you run in the shell. When you type a command, the shell looks in all of these folders to find the program you are trying to run.

```sh
echo $PATH
# will output something like:
# /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
```

:::tip[Bin?]

In Unix the **bin** folders have nothing to do with rubbish. They are used to store **binary** programs - files with machine code to get the computer to do things.

:::

### Where is this program? (which)

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Find a program           |`which`      | Outputs the path to a program - if it can be found on the PATH. |

Unix provides a [which](https://man.cx/Which) program that is used to get the path to a program. This searches each of the folders on the PATH, and outputs the path to the program it finds.

```sh
which cp
# outputs - /bin/cp

which echo
# outputs - /bin/echo

which zsh
# outputs - /usr/bin/zsh
```

:::tip
The `which` command can be very useful to check if your path is setup correctly. If the shell cant find a program, then you must pass in the full path to the command. For example, you can always run `cp` using `/bin/cp`, but it is shorter if it is on the path.
:::

:::tip[Programs]

Some of the commands we have been looking at are programs that exist on your path. For example, try `which cp`. You will see that `cp` is a program that comes with the operating system. If you remove its folder from the PATH then you cannot copy files any more. 

A small number of commands, like `cd`, exist within the shell itself. `which cd` will return nothing - it is not a program.

:::

### Which shell? (SHELL)

There are many different shell programs you can use. The `SHELL` variable is one that outputs the path to the shell that will be used when you open a new terminal.

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Change your shell        |`chsh`       | Change your default shell to a new program. |

#### Change your shell (chsh)

You can change your shell program using `chsh`. You pass this the `-s` option with the path to the new shell program you want to use. This must be one of the programs listed in the **/etc/shells** file. You will be prompted for your password as part of this, as the operating system wants to ensure it is you changing something as important as the shell.

```sh
echo $SHELL
# this will show your default shell

cat /etc/shells
# you will see the list of shells you can use

chsh -s /bin/zsh
# this will switch you to the /bin/zsh shell

echo $SHELL
# this will now be /bin/zsh
```

## Environment variable commands

Let's explore the commands you can use to work with environment variables. You can use these to check things like your PATH, or to change its value.

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Export a value           |`export`     | Saves a value to a variable - creating or updating the variable's value. |
|Delete a variable        |`unset`      | Removes the variable.|
|Output a message         |`echo`       | Output text to the terminal.|
|Output variables         |`env`        | Output all of the environment variables and their values.|

### Create or update a variable (export)

The [export](https://man.cx/Export) command allows you to assign a value to an environment variable. The command must be passed an argument that defines the variable to set and its new value. This is in the form **variable=value**. For example:

```sh
export MESSAGE="this is my"
```

To read the value of a variable you add a `$` character to the start of the variable name. You can use this to add to a value of an existing variable. The following example extends the value of the message variable.

:::caution

Environment variables are case sensitive - meaning that `MESSAGE` and `message` are two different variables, and `Message` is different again, etc. Generally, environment variables names are all **UPPERCASE**.

:::

```sh
export MESSAGE="$MESSAGE message"
# the variable now has the value "this is my message"
```

:::tip
Place double-quotes around text in the terminal to create a single text value. This will allow you to place spaces within a single value - otherwise the shell will take each word as a separate element for the command. 
:::

### Delete a variable (unset)

You can remove variables that are set using the [unset](https://man.cx/Unset) command or by setting the variable to an empty value.

```sh
unset MESSAGE
export MESSAGE=
```

### Output the environment (env)

You can list all of the environment variables using the [env](https://man.cx/Env) command. This can be useful to see what variables exist, and the values they have.

```sh
env
# you will see a long list - all of the environment variables
```

:::tip

Programs can read environment variables and use their values to alter their behaviour. For example, in a server the back end of the web application may read environment variables to find the path to a database.

:::

### Output a message (echo)

You can write a message to the terminal using the [echo](https://man.cx/Echo) command. You can pass this any text and it will print that to the terminal. Within this text, you can inject values from variables.

```sh
export MESSAGE="this is my message"
echo "I am here, and $MESSAGE"
# This will output - I am here, and this is my message

export MESSAGE="hello $MESSAGE"
echo $MESSAGE
# This will output - hello this is my message

unset MESSAGE
echo $MESSAGE
# This will output an empty line
```

:::tip

You can use `echo` to explore the values of variables.

:::

## Saving environment values

All of the commands above only have effect for the duration of your current execution of the shell. When you close the terminal, or open a new one, it will not have any changed or added environment variables. To retain these, you need to add these commands to a text file that is launched when the terminal starts.

The exact file depends on the shell you are using. Two of the most common shells are **Bash** and **Zsh**. Bash will read the hidden **.bashrc** file from your home directory, while Zsh reads the hidden **.zshrc** file. The *rc* in this case stands for **read command**, and these files are read when you open a terminal, and the commands within it are run.

You can edit this file to include any commands you want run when you open a terminal.

```sh
cd ~
ls -lha
# You should be able to see hidden files listed

echo $SHELL
# Check which shell you are using by default

# You can edit the file using nano
nano .zshrc
nano .bashrc
```

:::tip
Try adding a custom message to yourself with the `echo` command. Open a new terminal and you should see your message appear!
:::
