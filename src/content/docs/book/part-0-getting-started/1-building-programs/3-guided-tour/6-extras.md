---
title: Extras
hidden: true
---

Here are some extra steps that you may want to consider setting up on your computer:

## Add 'code' command to PATH

The Terminal is a powerful way of interacting with your computer. If you are going to be exploring the user of the Terminal further, then you should get VS Code to add the `code` command to your path. This will allow you to open any file or folder in a new Visual Studio Code window, right from your Terminal!

1. Launch VS Code
2. Open the Command Palette (Ctrl+Shift+P, or Cmd+Shift+P on macOS). Type 'shell command', select the "Shell Command: install 'code' command in PATH".

![Install code in the PATH](./images/install-path.png)

:::tip[Troubleshooting tip:]
If you are having issues with the `code` command not working after following the steps above, go to the ['zsh: command not found: code'](https://splashkit.io/troubleshoot/macos/issue-4-code-not-found/) page on the SplashKit website for to use an alternative installation process.
:::

## Install Extensions

VS Code includes extensions to help you work effectively with the languages that you use. SplashKit can help get you set up quickly by installing relevant *Extensions* in VS Code. Run the following command in your Terminal.

```bash
skm vscode extensions
```
