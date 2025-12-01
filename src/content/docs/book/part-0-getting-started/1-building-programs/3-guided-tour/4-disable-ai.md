---
title: AI in VS Code
---

VS Code includes plugins that allow it to interact with Gen AI to assist you with your code writing. This can be useful when you have mastered the basics, but for now we need to switch these off so that we can focus on how this works ourselves.

To disable AI for now, do the following:

1. Open the Command Palette (Ctrl+Shift+P, or Cmd+Shift+P on macOS), then type "open user settings".
   ![Enter open user settings at the command palette](./images/disable-ai-1.png)
2. Select the "Open User Settings (JSON)" version.
   This will open a file within VS Code that you can edit.
3. Add the following settings between the `{ }` in the file, making sure to leave any existing settings in place:
   
   - `"chat.disableAIFeatures": true,`

   This setting will disable the AI chat and code suggestions.
   - `"C_Cpp.default.cppStandard": "c++26",`

   This setting isn't needed for the AI, but will tell VS Code which version of C/C++ we are intending of using.

We will come back to look at how to work with AI productively in later chapters. For now, you want to be in control so that you are thinking through how each part of your program works.
