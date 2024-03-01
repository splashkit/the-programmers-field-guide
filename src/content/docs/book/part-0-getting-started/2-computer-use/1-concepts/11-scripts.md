---
title: Scripts and Permissions
sidebar:
    label: " - Scripts and Permissions"
banner:
    content: |
        This is an optional concept in this chapter. Review it when you are on top of the other ideas.
---

Manually entering commands is great, but sometimes you want to do the same thing again and again. Rather than having to type the commands every time, you can save your commands in a file and run that.

## Creating a shell script

A shell script is just a text file that contains shell commands. You can create a shell script in any text editor, but for now we will create and edit them in the terminal and with `nano``.

```sh
touch test.sh
nano test.sh
```

Enter the following code in the script file, and save it before exiting.

```sh
#!/bin/zsh
echo "Welcome to my script!"
sleep 10
echo "Done..."
```

The **shebang** (`#!`, a.k.a. hashbang) must be the first line of the shell script. When executing the script your shell will read this, and use the indicated path as the shell to run the script. This allows you to specify the shell you are targeting when you write the script.

The remainder of the file contains the commands you want to run, in the order you want them to run.

## Permissions

To be able to run the script you need to tell the operating system that this file is executable.
This is handled through the permissions system, which we can interact with using shell commands.

| **Action**         | **Command** | **Description**                              |
|--------------------|-------------|----------------------------------------------|
| Change permissions | `chmod`     | Adjust the permissions for a file or folder. |

Unix provides permissions to read, write, and execute files and folders.
Permissions can be associated with individual users or groups of users.
You can see the permissions on files and folders when you use `ls -l`, which shows them at the start of each line as three sets of "rwx" values.
These values begin with a single character indicating the type of file, which is most commonly a regular file ("-") or a directory ("D").

When using `ls -l` the presence of a permission is shown with the relevant character (i.e., "r", "w", or "x"), and the absence of that permission is shown with a "-".
The first set of rwx values indicates the permissions for the current user.
Next the permissions for the current user's group are shown.
Then, the last set of rwx values indicate the permissions for any other users.
For example, `-rwxrw-r--` indicates that the current user can read, write, and execute the file, other members of the same group and read and write to the file, but all other users can only read the file.

The `chmod` program lets you change permissions.
Permissions are also known as file **modifiers**, hence the name of the command. The easiest way to work with `chmod` is to use the format `<person>[+/-]<permission>` for arguments, where `person` is one of **u** user, **g** group, **o** other, or **a** all, and permission is one of **r** read, **w** write, or **x** execute. So, you can give all users execute permissions on something using `chmod a+x`, or remove read for other users with `chmod o-r`.

The following script demonstrates the use of `chmod`, and makes our script executable only by you.
For this example we assume that the current user is "multitool", and the current group is "devs".
Note that when you run these commands the permissions should match our output, but the dates and times will most likely be different!

```sh
ls -lh
# This will show files like:
# -rw-r--r--   1 multitool devs 2.1K Aug  9 10:10 test.sh
# In this case the permissions for test.sh are:
# -- user has read and write "rw-"
# -- group has read "r--"
# -- other have read "r--"

chmod u+x test.sh
ls -lh
# This will show this:
# -rwxr--r--   1 multitool devs 2.1K Aug  9 10:10 test.sh
# Note that now the user has read, write, and execute permissions

chmod o-r test.sh
ls -lh
# This will show this:
# -rwxr-----   1 multitool devs 2.1K Aug  9 10:10 test.sh
# Now others cannot read the file, because it has no permissions

chmod g+w test.sh
ls -lh
# This will show this:
# -rwxrw----   1 multitool devs 2.1K Aug  9 10:10 test.sh
# Now group members can read and write

chmod g-rw test.sh
ls -lh
# This will show this:
# -rwx------   1 multitool devs 2.1K Aug  9 10:10 test.sh
# Now group members have no access

# You have permission to run the script, so let's do that now.
./test.sh
# See your messages output!
```

:::tip
For now, the main thing you'll need is to change file permissions to make your scripts executable.
So `chmod u+x file.sh` is what you need to remember.
:::
