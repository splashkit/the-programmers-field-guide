---
title: Set up my Linux Box
sidebar:
    attrs:
        class: linux
    label: " - Linux Box"
---

In this guide, we will walk through the steps to install the necessary applications and tools on your Linux PC. This guide will focus on Debian, which is the base for many popular Linux distros such as Ubuntu and Raspberry Pi OS. If you use a different Linux distro, you may need to follow the [manual install instructions](/book/appendix/0-installation/2-0-setup-linux).

Now, let's get started!

## 1. Open the Terminal

To open the Terminal on Debian, click **Activities** in the top left of the screen and type "Terminal" in the search bar, then click on the **Terminal** icon.

![Gif showing how to open the Terminal](/gifs/setup-linux/OpenTerminal.gif)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

## 2. Check you can run as a super user

`sudo` is a command that allows you to run a program with superuser privileges and is often required for installing software. Debian does not allow the main user to do this by default.

The following command will let you check if your user is in the "sudoers" group. Type it into the terminal and press "Enter" on your keyboard. If you see "sudo" in the list that is printed out, you are all good and can skip to the next step.

:::tip
When executing the terminal commands for this step, `username` with your username.
:::

```bash
groups username
```

If you did not see "sudo" in the output for the previous command, you will need to add your user to the "sudoers" group. The commands below will do that. Execute each command by typing it into the terminal and pressing the "Enter" key on your keyboard. You must reboot your computer at the end of this.

:::tip
You will need to know your root (i.e., admin) user password for this.
:::

```bash
su
sudo usermod -aG sudo username
exit
groups username
```

The following image shows what your terminal might look like if you use the above commands to check and add a user called "student" to the sudoers group.
Note that after `groups student` is run the second time, "sudo" is added to the output.
This shows that "student" was successfully added to the sudoers group.

![Image showing the above commands run in the terminal](./images/setup-linux/Setup_sudo.png)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

## 3. Make sure you have git and curl installed

Before we can set up the tools we need, we first need to ensure `git`, `curl`, and `clang` are installed.
To check if they are installed on your system, type `curl`, `clang++`, then `git` into the terminal, pressing the Enter key after each.

If you see the following error messages you will need to install the missing programs.

![image showing curl and git command not found error](./images/setup-linux/curlGitNotFound.png)
<div class="caption">Image not subject to The Programmer's Field Guide <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 License</a></div>

To install `curl`, `git`, and `clang`, run the following commands in the terminal.
If one or two of these are already installed, just delete from the `sudo apt install` command:

```bash
sudo apt update
sudo apt install curl git clang -y
```

## 4. Run the Installation Script

:::danger[Script asking for your password?]
Before running any script (particularly those that use **sudo**), make sure to review its contents to understand what it does. If you choose not to inspect the script, it should only be because you fully trust the source. Running unverified code with elevated privileges can pose serious security risks.
:::

Open the terminal and run the following command:

```bash
curl -s "https://programmers.guide/resources/Linux_InstallScript.sh" | bash /dev/stdin
```

:::note
This script will take a while to run (approx. 12-15 mins).
:::

When the script ends, review the output messages in the terminal. If there are errors, you will need to review the messages and try again or try the [manual install instructions](/book/appendix/0-installation/2-0-setup-linux).

## 5. Reopen the terminal

Once the automated script has finished running, close and reopen the terminal.

Run the command `skm` to check SplashKit is installed correctly.

## 6. All done!

If everything is working you should be all good to go!

:::tip[What next?]
Jump to the [next step](/book/part-0-getting-started/1-building-programs/3-guided-tour/2-disable-ai), where we will use these tools to build and run some programs.
:::

:::caution[Had problems?]

If you had problems with the automated installation, or want to do things yourself, you can follow the [manual install instructions](/book/appendix/0-installation/2-0-setup-linux).

:::
