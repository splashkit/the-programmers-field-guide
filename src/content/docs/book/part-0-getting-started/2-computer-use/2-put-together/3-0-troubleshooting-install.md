---
title: Installation Troubleshooting
---

As you go through the **"Set up my ..."** installation guide for your operating system *(shown in the sidebar below this page)*, you may encounter errors or issues that prevent you from completing a particular step.

Troubleshooting these issues to find a solution that works can be difficult and discouraging if you're just getting started with programming. We hope to make things a little easier for you by sharing our troubleshooting tips and tricks!

:::tip[How to make it easier when you get stuck?]
This guide is here to help with general troubleshooting tips, as well as some specific issues that we have encountered already.
:::

## General Troubleshooting

To help make the installation/troubleshooting process as smooth and painless as possible, here are some suggested solutions that you can try if you run into issues during any of the installation steps:

### Check your firewall settings

One of the main causes for installation issues is that your firewall is preventing the software from accessing your computer's system or your network. This can happen when the software you are trying to download/install is not recognised, or is perceived as a threat in some way.

<iframe src="https://giphy.com/embed/FjhCTrjPaPy6s" width="480" height="226" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/male-FjhCTrjPaPy6s"></a></p>
<!-- We can remove this GIF if it is too distracting or too silly (but figured that some humour would help for this page) -->

It is most common the with terminal-based install commands such as the command used to install the SplashKit SDK.

If you are not confident with how to update your firewall settings to allow the required connection, try **turning your firewall off** ***temporarily*** while you perform the installation step again.  
*Only do this when you trust that the software is not malicious.*

:::caution
Don't forget to turn your firewall back on afterwards!
:::

If this does not solve your issue, try the next possible solution below.

### Disable antivirus software

Your antivirus software is another layer of protection against malicious software, and therefore can sometimes block harmless software accidentally.

Try **disabling your antivirus software** ***temporarily*** while you perform the installation step again.  
*Only do this when you trust that the software is not malicious.*

:::caution
Don't forget to turn your antivirus software back on afterwards!
:::

If your issue is persisting, don't be discouraged! Have a look at the suggestions below.

### Search the issue online

You probably already know how to search for information using [Google](https://www.google.com/), or your preferred search engine, but sometimes there is a bit of an art to getting the results you want.

If you ***can*** **see an error message**, try searching the entire error message text first.  
This is useful if the software is widely used, and the error is encountered often by users.

However, most of the time, you will need to simplify the text of the error message to make it as generic as possible. This will give you more results, and more chance to find helpful information.

:::tip
You can also try searching individual keywords, or a combination of just a few keywords.
:::

If you ***can't*** **see an error message**, or something is not quite working as expected, try searching using: the *name of the program/software*, the word "*error*" or "*issue*", and a *few keywords that describe the issue* you are experiencing.  
Adjust the descriptive keywords a few times if needed, to see if your results improve.

The next step would be to *refine your search*:

### Refine your search by learning

While you are searching for solutions to your issue, you will also be coming across a lot of potentially useful information related to what you are trying to do.

Take the time to try to *understand* what you are reading, especially related to "why" and "how" a suggested solution might have been formulated. Looking into the context behind the issue can give you a broader view of what is happening. This will then either help you solve the issue, or help you improve your search terms.

### Revise the concepts

Understanding a bit about the software or context of your issue can drastically improve your skills with searching for issues online, or understanding the suggested solutions enough to know if it could work for your situation.

It might be helpful to go back and revise the content in the "Concepts" pages in [1: Digital Realities](../../../1-digital-realities/1-concepts/1-programs) and [2: Computer Use](../../1-concepts/01-terminal) because you now have more context for how to interpret the information on those pages.

:::tip[Learning from errors]
Troubleshooting errors/issues can be a fantastic opportunity to learn more about how your computer works, or clarify your understanding of related concepts!

Although it can be frustrating and tedious, going through the process of troubleshooting an issue will inadvertently improve your problem-solving skills and understanding of your how your computer works.
:::

### Move to the next install step

Sometimes an issue can feel like it is defeating you in your battle to learn to code, which can be quite overwhelming and make it actually harder to solve the problem.

If you feel like you're spinning around in circles with no results, it is often helpful to change what you are doing.

<img src="https://y.yarn.co/5fb0bbbb-3698-46fd-8833-01b30eb30991_text.gif" alt="Gif of scene from 10 things I hate about you with caption: Oh, Goody. Something new and different for us.">
<!-- We can remove this GIF if it is too distracting or too silly (but figured that some humour would help for this page) -->

In the context of going through the installation/set up guide, you can move to the next step in the guide that doesn't rely on a previous step.

Completing other steps may also improve your understanding and skills that you can then use when you come back to the step you had issues with.

:::note[Using your time wisely]
Sometimes you will need some more specific help to solve a problem, and you may need to wait for someone to be available, or respond to your query.

You can use the time you are waiting!

By finishing all the installation steps that you are able to complete successfully, you will be able to get started with coding much quicker once you get the help to complete the installation step you were having trouble with.
:::

### Restart your computer

There is a reason there are so many jokes online about *"turning it off and on again"*.

<iframe src="https://giphy.com/embed/DUtVdGeIU8lmo" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-it-crowd-DUtVdGeIU8lmo"></a></p>
<!-- We can remove this GIF if it is too distracting or too silly (but figured that some humour would help for this page) -->

Restarting your computer is sometimes **needed** after installing software, but can be helpful if your computer ever starts giving you issues without an identifiable cause.

Restart your computer, and then try the troublesome installation step again.

## Specific Issues

Here are some specific solutions to known issues:

### macOS version pre-12.0

If you are using an older macOS version (pre version 12.0), you will likely encounter issues when trying to compile and run SplashKit programs. You will therefore need to change the SplashKit installation to a previous version.

:::note[If you can't run SplashKit programs:]
Follow the instructions below if you encounter an error message similar to `System.DllNotFoundException unable to load DLL splashkit.dll` when trying to compile or run code using SplashKit:
:::

**A.** First step is to make sure your macOS is fully updated to the latest OS software version, if possible. If your computer is able to update past 12.0, it will make your coding experience much simpler.

**B.** If you are using an older macOS version (pre version 12.0), you can use the following Terminal commands to change SplashKit to a previous version:

Open the Terminal app.

Copy each command below (one at a time), paste it into the Terminal, and hit Enter:

```bash
cd ~/.splashkit
```

```bash
git fetch –unshallow
```

```bash
git checkout cbb68dc
```

:::note
By using an older version of SplashKit, you won't be able to install SplashKit globally.

Therefore, you will need to use the commands mentioned in the [section below](#no-splashkit-global-install).
:::

### No SplashKit Global Install

If you have had issues installing the SplashKit global libraries, or you are using an older version of SplashKit, you will need to use `skm` at the start of any compiling/building commands, or when running C# programs.

For example, here is the updated versions of the terminal commands mentioned at the end of the [Build and Run](../../../3-building-programs/1-concepts/03-build-and-run) page:

- `skm dotnet new console` - create a new C# terminal project in the current working directory.
- `skm dotnet build` - compile the project in the current working directory (can be skipped).
- `skm dotnet run` - build if needed, then execute your program.

You may encounter other limitations, but with the commands above, you will be able to create and run SplashKit projects successfully.

<!-- Add other specific issues here -->