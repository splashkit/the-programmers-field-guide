---
title: Control Sequences & Signals
sidebar:
    label: " - Signals"
banner:
    content: |
        This is an optional concept in this chapter. Review it when you are on top of the other ideas.
---

Sometimes things go wrong with the programs you are running, particularly when you are building and running your own programs. In these cases, you need to signal the shell and have it perform a task for you. This is achieved through key combinations using the control key.

| **Action** | **Command** | **Description**                                           |
|------------|-------------|-----------------------------------------------------------|
| Kill       | **ctrl-c**  | Get the shell to kill the current program.                |
| Close      | **ctrl-d**  | Close the shell or standard input of the current program. |
| Suspend    | **ctrl-z**  | Move the current program to the background.               |

Related to these are some other shell commands:

| **Action**        | **Command** | **Description** |
|-------------------|-------------|-----------------------------------------------------------------------------------|
| Sleep             |`sleep`      | Do nothing for a number of seconds. |
| Read input        |`read`       | Read user input into the `$REPLY` environment variable. |
| List jobs         |`jobs`       | List the programs that are currently suspended or running in the background. |
| Run in background |`bg`         | Move a program to run in the background. Specify the program with an argument, or by default the last suspended program will be used. |
| Run in foreground |`fg`         | Move a program to run in the foreground. Specify the program with an argument, or by default the last suspended program will be used. |

## Killing a program (`ctrl-c`)

When things go wrong, you can signal the shell and have it kill the program for you. Pressing the control and c keys at the same time (**ctrl-c**) gets the shell to send a signal to the program that will cause it to be terminated. We can test this out using the `sleep` command to simulate a program that is running. Run `sleep` and terminate it rather than waiting for it to end.

```sh
sleep 120
# This will do nothing for 2 minutes - but dont wait!
# Press ctrl-c to kill sleep
```

:::tip
Keep **ctrl-c** in your toolkit. Sometimes the programs you create won't work as you expected. You will need this handy tool to kill those programs so you can get back to the shell.
:::

## Closing input or shell (`ctrl-d``)

You can use **ctrl-d** to close your current shell. It can also be used to send a signal that we are at the end of standard input (**stdin**). This works for programs that are reading input, and is a way of ending these programs without killing them. If you try this with `sleep` you will see it keeps running because there is no input to end, so to try this out we need to use `read`.

```sh
sleep 120
# ctrl-d ... nothing... kill with ctrl-c
read
# ctrl-d will end the input
```

## Jobs and background tasks

Unix was designed with the idea that you should be able to have a number of programs running at a time. While we don't really need this yet, it is good to know that it is there for the future.

:::tip
If you like, you can skip the next section on job processing. These are great tools, but not essential for now. If you do skip it, remember to come back and check out these advanced job processing options later.
:::

Use **ctrl-z** to suspend a foreground process, which is whatever process you are interacting with in the terminal. We can test this out with `sleep`. Pressing **ctrl-z** puts you back in control at the shell's prompt. The program is suspended, so it is not running, but waiting for you to resume it.

You can resume the program using `fg`. This will move the suspended program back into the foreground. Alternatively, you can use `bg` to run the program in the background. You can use `jobs` to see the list of things that you are running in the shell.

The following will help you explore these tools.

```sh
sleep 10
# press ctrl-z - sleep is suspended

jobs
# shows the 1 stopped program

fg
# sleep is now in the foreground - wait for it to end

sleep 120
# press ctrl-z
bg
# sleep is running... but you can keep doing things
sleep 60
# press ctrl-z
sleep 30 &
# the & tells the shell to immediately run sleep in the background
jobs
# You should see two jobs running and one suspended

bg 2
# You can resume the stopped sleep 60

fg 1
# You can connect to any program - sleep 120 here

# As the different sleep commands end you will see them listed as done
```

:::tip
These tools are great as you start to build programs that process things in the background. You can use these commands to keep using your terminal while such programs execute. Background processing is also used when you run programs that do not need user input via the terminal, for example those that respond to network communications or interact with hardware.
:::

Once you start working with background processes, there are a few more tools that will be helpful to know about. For the moment, the main thing will be to remember they exist. Then you can check back later when you need to use them!

| **Action**        | **Command** |**Description**|
|-------------------|-------------|-----------------------------------------------------------------------------------|
| Monitor processes |`top`        | Show the processes (programs) currently running, sorted from most to least CPU usage. Press "q" to quit. |
| Show processes    | `ps`        | List the processes currently running. |
| Stop a process    | `kill`      | Terminate a running program. |

Try these out, but be careful with `kill`!
