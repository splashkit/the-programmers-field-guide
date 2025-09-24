---
title: Environment Variables
sidebar:
    label: " - Environment Variables"
banner:
    content: |
        This is an optional concept in this chapter. Review it when you are on top of the other ideas.
---

Computer operating systems use **environment variables** to store information that is relevant to a variety of programs running on that computer.
Environment variables typically store configuration data, which can then be accessed and used by programs.
Some environment variables are set by the operating system, but others can be modified by you.

Changing the value of an environment variable will change the behaviour of any program which uses that variable.
This is particularly important to know as we continue exploring how to use the command line, because there are environment variables that impact the shell program.

:::note
The name "environment variables" comes from the idea that these values set the **environment** in which all programs on your computer run.
:::

## Important variables for the shell

There are a few variables that are really important as they can change how the shell works.
Knowing about these variables and what they do, will be useful in debugging issues when things are not working, as incorrectly set environment variables is a common cause for problems.
The main variables relevant to the shell are:

|**Environment Variable** |**Purpose**  |
|-------------------------|-----------------------------------------------------------------|
| PATH                    | The list of folders to search for programs run at the terminal. |
| SHELL                   | The path to your default shell program. |

### Programs to run (PATH)

The **PATH** is probably the most important environment variable. It contains a list of colon (:) separated paths that are searched for the commands you run in the shell. When you type a command, the shell looks in all of these folders to find the program you are trying to run.

We can access environment variables in the terminal by using the `$` followed by the variable name.
Therefore, `$PATH` is how we access the PATH environment variable.
To see the value of a variable, we can combine this with the `echo` command, which prints data to the terminal.
Try running `echo $PATH` in the terminal to see the value of your PATH environment variable.
The output should look something like "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin".

:::tip[Bin?]
In Unix the **bin** folders have nothing to do with rubbish.
They are used to store **binary** programs -- files with machine code to get the computer to do things.
:::

#### Using `which` to search the PATH

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Find a program           |`which`      | Outputs the path to a program if it can be found on the PATH. |

Unix provides a [`which`](https://man.cx/Which) program that is used to get the path to a program. It searches each of the folders on the PATH and outputs the path to the program it finds.

```sh
which cp
# outputs - /bin/cp

which echo
# outputs - /bin/echo

which zsh
# outputs - /usr/bin/zsh
```

:::tip
The `which` command can be very useful to check if your path is set up correctly. If the shell can't find a program, then you must pass in the full path to the command. For example, you can always run `cp` using `/bin/cp`, but it is easier if it is on the path and you can just use `cp`.
:::

:::tip[Programs vs. commands]
Some of the commands we have been looking at are programs that exist on your path. For example, try `which cp`. You will see that `cp` is a program that comes with the operating system. If you remove its folder from the PATH then you cannot copy files any more.

A small number of commands, like `cd`, exist within the shell itself. `which cd` will return nothing as it is not a program.
:::

### Which shell? (SHELL)

There are many different shell programs you can use. The `SHELL` variable contains the path to the shell that will be used when you open a new terminal.
Try running `echo $SHELL` to see what your SHELL environment variable contains.

## Environment variable commands

Let's explore the commands you can use to work with environment variables. You can use these to check things like your PATH, or to change its value.

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Change your shell        |`chsh`       | Change your default shell to a new program. |
|Export a value           |`export`     | Modify an environment variable, creating or updating the variable's value. |
|Delete a variable        |`unset`      | Removes the environment variable.|
|Output a message         |`echo`       | Output text to the terminal.|
|Output variables         |`env`        | Output all environment variables and their values.|

### Change your shell (`chsh`)

You can change your shell program using `chsh`. Use the `-s` option and provide the path to the new shell program you want to use. This must be one of the programs listed in the **/etc/shells** file.
When you run `chsh` you will be prompted for your password, as the operating system wants to ensure it is you changing such an important setting.

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

### Create or update a variable (`export`)

The [`export`](https://man.cx/Export) command allows you to assign a value to an environment variable. The command must be passed an argument that defines the variable to set and its new value. This is in the form **variable=value**. For example:

```sh
export MESSAGE="this is my"
echo $MESSAGE
# you will see the text "this is my"
```

You can also use `export` to add to a value of an existing variable. The following example extends the value of the message variable.

```sh
export MESSAGE="$MESSAGE message"
echo $MESSAGE
# you will see the text "this is my message"
```

:::caution
Environment variables are case sensitive.
This means that `MESSAGE` and `message` are two different variables, and `Message` is different again.
Generally, environment variables names are all **UPPERCASE**.
:::

:::tip
Place double-quotes around text in the terminal to create a single text value. This will allow you to place spaces within a value, otherwise the shell will take each word as a separate element for the command.
:::

### Delete a variable (`unset`)

You can remove variables that are set using the [`unset`](https://man.cx/Unset) command or by setting the variable to an empty value.
Both of these commands will do the same thing:

```sh
unset MESSAGE
export MESSAGE=
```

### Output the environment (`env`)

You can list all of the environment variables using the [env](https://man.cx/Env) command. This can be useful to see what variables exist.

```sh
env
# you will see a long list - all of the environment variables
```

:::tip
Programs can read environment variables and use their values to alter their behaviour. For example, in a server the back end of the web application may read environment variables to find the path to a database.
:::

### Output a message (`echo`)

We have already been using [`echo`](https://man.cx/Echo) to output the values of our environment variables.
However, you can write *any* data to the terminal using this command.
Pass `echo` any text and it will print it to the terminal.
Within the text, you can optionally inject values from variables.

```sh
export MESSAGE="this is my message"
echo "I am here, and $MESSAGE"
# This will output "I am here, and this is my message"

export MESSAGE="hello $MESSAGE"
echo $MESSAGE
# This will output - "hello this is my message"

unset MESSAGE
echo $MESSAGE
# This will output an empty line
```

## Saving environment values

All of the commands above only have effect as long as the shell in which you entered them is open.
This means that when you close the terminal, or open a new one, it will not have any of the changed or added environment variables.
To retain your changes you need to add these commands to a text file that is launched when the terminal starts.

The exact file depends on the specific shell you are using.
Two of the most common shells are **Bash** and **Zsh**.
Bash will read the hidden **.bashrc** file from your home directory, while Zsh reads the hidden **.zshrc** file.
The *rc* in this case stands for **read command**.
A terminal's *rc* file is read when you open a new terminal, and the commands within the file are run.

You can edit your terminal's rc file to include any commands you want run when you open a new terminal.

```sh
cd ~
ls -lha
# You should be able to see hidden files listed, including your terminal's rc file

echo $SHELL
# Check which shell you are using by default

# You can edit the file using nano
nano .zshrc # use this line if your shell is Zsh
nano .bashrc # use this line if your shell is Bash
```

:::tip
Try editing your rc file to add a custom message to yourself with the `echo` command.
Open a new terminal, and you should see your message appear!
:::

:::caution[Paths in Windows MSYS2]
While we usually adjust the `~` path for MSYS when finding *our* files. The rc files will be read from your MSYS home, so `~` is correct here.
:::
