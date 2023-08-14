---
title: Scripts and Permissions
sidebar:
  order: 9
---

Manually enterring commands is great, but sometimes you want to do the same thing again and again. Rather than having to type this every time, you can save your commands in a file and run that.

### Creating a shell script

A shell script is just a text file that contains your commands. You can create this in the terminal and edit it with vscode.

```sh
touch test.sh
code test.sh
```

Enter the following code in the script file, and save this in the terminal.

```sh
#!/bin/zsh
echo "Welcome to my script!"
sleep 10
echo "Done..."
```

The **shebang** (`#!`) must be the first line of the shell script. Your current shell will read this, and use the indicated path as the shell to run this script. This allows you to specify the shell you are targetting when you write the script.

The remainder of the file contains the commands you want run, in the order you want them run.

Save the file.

### Permissions

To be able to run the program you need to tell the operating system that this file is executable. This is handled through the permissions system.

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Change permissions           |`chmod`      | Adjust the permissions for a file or folder |

Unix gives you permissions to read, write, and execute files and folders which are arranged for the user, group, and other users. You can see these permissions when you use `ls -l`, they appear at the start as three sets of rwx values. The presence of the permission is shown with the character, the absence with a -. 

The `chmod` program lets you change permissions - known as the file **modifiers** hence the name. The easiest way to work with these is to use the format `<person>[+/-]<permission>` where `person` is one of **u** user, **g** group, **o** other, or **a** all, and permission is one of **r** read, **w** write, **x** execute. So you can give all users execute permissions on something using `a+x`, or remove read for other users with `o-w`.

The following script demonstrates the use of chmod, and makes our script executable only by you.

```sh
ls -lh
# This will show files like:
# In this context multitool is the user
# devs is the group
# user has read and write "rw-"
# group has read "r--"
# other have read "r--"
-rw-r--r--   1 multitool devs 2.1K Aug  9 10:10 test.sh

chmod u+x test.sh
ls -lh
# This will show this:
# Note user has read, write, and execute now "rwx"
-rwxr--r--   1 multitool devs 2.1K Aug  9 10:10 test.sh

chmod o-r test.sh
# Now others cannot read
ls -lh
# Note other has no permissions "---"
-rwxr-----   1 multitool devs 2.1K Aug  9 10:10 test.sh

chmod g+w test.sh
# Now group members can read and write
ls -lh
-rwxrw----   1 multitool devs 2.1K Aug  9 10:10 test.sh

chmod g-rw test.sh
# Now group members have no access
ls -lh
-rwx------   1 multitool devs 2.1K Aug  9 10:10 test.sh

# You have permission to run the script.
./test.sh
# See your messages output!
```

:::tip
For now, the main thing is that you need to be able to execute the shell scripts you create. So `chmod u+x file.sh` is what you need to remember.
::
