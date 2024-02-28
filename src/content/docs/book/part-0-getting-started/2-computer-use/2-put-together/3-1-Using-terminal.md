---
title: Using the Terminal
---

Now we need to get our hands dirty and start playing with the Terminal.

Open the terminal on your computer.

At this point, you should see a “prompt” within the terminal. This is the **shell** asking you to give it an instruction. You type commands, and press the Enter or Return key on your keyboard to get the shell to do what you have asked.

Try the following:

```sh
echo "Hello `whoami`"
```

This command should output a message that says “Hello” followed by your username.

If you are using the Raspberry Pi, then plug in a speaker and give this a try:

```sh
espeak "Hello `whoami`, welcome to the command line!"
```

This should get your pi to speak to you.

:::caution[Make sure to use backticks]

For these commands to work, make sure you are using double quotes (") around the text and backticks (\`) not single quotes (') around the `whoami`. We will look at why soon.

:::

## Run as admin (`sudo`)

Operating systems restrict some actions to admin users, particularly when the actions will change the behaviour of the system. In Unix, you can use the `sudo` shell command to get the **superuser** to **do** something. You follow the `sudo` command with the details of the command you want to do.

:::tip
If you have lots of things you want to run as the superuser, you can use `sudo` to run a new shell. When you are finished, you can close that shell using **ctrl-d**.

```sh
sudo zsh
# You are now in a shell as the super user
```

Please note that this won't work in the MSys as it does not have the capacity to escalate you to admin in the Windows operating system. Most of the setup in MSys will not need admin access, as you can install and work with MSys components as a standard user. If you do ever really need admin access you have to run the MSys terminal as the admin user.

:::
