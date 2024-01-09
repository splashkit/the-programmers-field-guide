---
title: Set up my macOS
sidebar:
  attrs:
    class: apple
---

TODO: Add small preamble

## 1. Install Xcode Command Line Tools

The Command Line Tools provided by Xcode provide a large amount of developer
tools required to compile and develop applications.

To install these tools, copy the command below:

```bash
xcode-select --install
```

Then, open your **Terminal** app and paste the copied text.

![Gif showing Spotlight Search to open Terminal and pasting Xcode install command](./images/terminal-xcode-install.gif)

:::note[How do I find the Terminal on my Mac?]
Press ***Command + Space bar*** to open the Spotlight Search.  
Start typing "Terminal".  
Click the **Terminal** app.
:::

**Note:** When you run the command above, if you get something like this:

![A Terminal window showing message that Command line tools are already installed](./images/xcode-install.png)

That means you've already installed it, and are ready to move to the next step!

## 2. Install the SplashKit SDK

Copy the following code and paste and run it within the Terminal.

  ```bash
  bash <(curl -s https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh)
  ```

- alternative if link not working ()

## 3. Install Visual Studio Code

- link to download
- mention M1 vs intel mac

### Recommended Extensions

- recommended extensions to install

## 4. Install Language Specific Tools

- TODO: Briefly discuss using C# and C++ in this book

### C# Tools

- link to dotnet 8.0 download
- maybe nuGet package?

### C++ Tools

- mention C++ already ready as compiler included in Xcode command line tools

## 5. Install SplashKit Globally

- maybe mention why?
- terminal command: 
  ```
  skm global install
  ```