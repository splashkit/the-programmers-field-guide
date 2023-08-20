---
title: Using X Windows
sidebar:
  order: 10
---

If you have been working through this on the multitool Raspberry Pi image, you will have only had access to the terminal interface. Now it is time to fire up the graphical user interface.

:::note

If you have been using macOS or Windows, there are a few things here that you will need. Make sure to read the section on [launching the editor from the terminal](#launching-editor-from-terminal).

:::

## Launch the graphical interface

The graphical environment is like everything else, it is a program that we can run on the computer. In Unix, the graphical interface is known as **X Windows**. To start this running you can use the `startx` command.

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Open graphical environment   | `startx`    | Open the graphical user interface |

This is really simple to use. Just type `startx` and run it as a command in the terminal. You will see the environment change and you can now use your mouse and interact with the computer as you are used to. Click items in menus, use buttons, drag windows around, etc.

:::tip

One of the cool things with X Windows is that you can choose between different **window managers**. Each window manager will give you a different look and feel. This is something to jot down now and play with in the future.

:::

### Open a graphical terminal

import { Tabs, TabItem } from '@astrojs/starlight/components';

<Tabs>
  <TabItem label="Raspberry Pi">
    To open the Terminal, click the applications…
  </TabItem>
  <TabItem label="Linux">
    This will depend on your window manager. Generally you should be able to find a link to the terminal application within the programs menu. Search in utilities, or similarly named menus.
  </TabItem>
  <TabItem label="macOS">
    The easiest way to find the Terminal is to search for it in Spotlight. It should be in the Utilities folder within Applications.
  </TabItem>
  <TabItem label="Windows">
    To open the Terminal, 
  </TabItem>
  
</Tabs>

**TODO: Add images and instructions above**

### Launching editor from terminal

From the terminal you can use all of the commands we have already seen as well as launch programs that use the X Windows environment.

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Open a file to edit.     | `code`       |Launch Visual Studio Code to edit a file or folder.|


Visual Studio Code (vscode) is a graphical text editor designed to write source code. You can launch Visual Studio Code using the `code` command in the Terminal. The [Visual Studio Code documentation](https://code.visualstudio.com/docs/editor/command-line) describes how to use this in detail, including how to install this shortcut if you have built your own setup.

The `code` command can be passed an argument to indicate the file or folder you want to open. For example, `code .` will launch vscode and have it open the folder from the current working directory. Use `code Program.cs` to open vscode with the *Program.cs* file.

```sh
cd ~/Documents/Code/HelloWorld
code .
# launch vscode with the HelloWorld folder open
```

## Changing the default start environment

The Raspberry Pi can be configured to boot into either a terminal or graphical mode. Terminal is great if you want to set the Pi up as a server or other processing node that does not need user interaction. As we will be developing code on our Pi, we should switch it to boot into X Windows.

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Run as super user.     | `sudo`       |Run a program with as the super user - used for admin tasks.|
|Change Pi config options.     | `raspi-config`       |Change Raspberry Pi configuration options.|

### Run as admin (sudo)

Operating systems restrict some actions to admin users, particularly when the actions will change the behaviour of the system. In Unix, you can use the `sudo` command from the Terminal to get the **super user** to **do** something. You follow the `sudo` command with the details of the command you want to do.

:::tip

If you have lots of things you want to run as the super user, you can use `sudo` to run a new shell. When you are finished, you can close that shell using **ctrl-d**.

```sh
sudo zsh
# You are now in a shell as the super user
```

:::

### Adjust Raspberry Pi Configuration

The `raspi-config` command will give you access to system configuration options. As this impacts the system, you need to run it as the super user.

```sh
sudo raspi-config
```

This will open the following display within the terminal. Choose **3 Boot Options** to change the way the Pi starts up. Choose **B1 Desktop / CLI**, and then choose either **B3 Desktop** or **B4 Desktop Autologin**. If you choose the autologin option, the system will automatically log in as the indicated user.

**TODO Add image of rasp-config**

When you select the required option it will take you back to the main menu. Choose **Finish** and then select to **Reboot** the Pi. When it restarts, X Windows will have been started and the desktop will have loaded.

### Accessing other terminals

|**Action**               |**Command**  |**Description**|
|-------------------------|-------------|-----------------------------------------------------------------------------------|
|Switch terminal.     | **Ctrl-Alt** & **F1** to **F6**    |Switch to virtual terminal 1|
|See who is logged in.     | `w`    |List the active terminals|

Unix was designed to handle multiple users connected to the system at the same from separate terminals. Modern Unix operating systems simulate this with multiple virtual terminals available. If you want to switch from the graphical Desktop to a terminal (not a terminal window) you can do this using the shortcut keys **Ctrl-Alt** followed by one of the first six function keys: **F1** to **F6**. This will switch to the associated virtual terminal.

To return to your graphical desktop you use **Alt-** and the function key corresponding to the displays terminal. The exact terminal differs between different Linux version. You can check which virtual terminals are in use, and identify which has your graphical desktop, using the `w` command. This will print a table of the users connected and their terminals (the TTY column). You want to locate the terminal that has *from* as **:0**. For example **tty7 :0** would mean that your desktop is on terminal 7, so **ALT-F7** would switch to it.

:::note
You can have more than one desktop running at the same time as well. Each must have a unique **DISPLAY**. The default *DISPLAY* is **:0**, but you can also start x with display set to **:1**.

```sh
startx -- :1
```
:::

