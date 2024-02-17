---
title: Using an AI Copilot
---

[GitHub Copilot](https://docs.github.com/en/copilot) is an AI assistant designed to help us build things faster. These tools can help you quickly get code in place, but they need you to make sure they are doing the right thing.

At this stage you should have enough coding experience that you will be able to think through what the AI assistant is creating. These generative AI engines use patterns identified from the millions of code files they have access to. They are not building the code in a logical sense, but use prompts to generate patterns based on what is likely to occur next.

As a student you will have free access to GitHub Copilot, once you go through the process of verifying your student status. To get started:

- Follow the Step-by-Step guide on [Setting Up GitHub Student and GitHub Copilot as an Authenticated Student Developer](https://techcommunity.microsoft.com/t5/educator-developer-blog/step-by-step-setting-up-github-student-and-github-copilot-as-an/ba-p/3736279)
- [Set up VSC ode](https://code.visualstudio.com/docs/editor/github-copilot)
- Install the [GitHub Copilot Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot).

:::caution

You want to avoid using Copilot too early in your programming education. Make sure you feel confident with all the topics before this chapter before you start using it. If you use it too early, you may get things working without really understanding how to do it yourself. Then you will not have the skills and knowledge to be able to effectively judge what the AI tools create for you.

:::

## AI Copilot - Why, When, and How

The AI engine needs prompts to know what to generate. The easiest way to do this is by adding comments to your code. The AI can then use these comments to work out what comes next. This is where providing descriptive comments will be really important, the more descriptive you can be the more likely the AI is to generate something close to what you want.

In VS Code, once you have provided the prompt move to the next line where the code is to go, and wait a little. Code will magically appear, and you can press the tab key to insert it in your code. If it is not quite right, either update the comment, ignore the suggestion, or toggle through the suggestions it provides (Alt + ] / Option + ]).

Once you have the code, you will probably need to edit what it created. You can remove sections, add new comments and have it regenerate parts as you go. Alternatively, you can just make the fixes yourself. In the end you will be responsible for what happens, so make sure that you get the code the way you want before moving on.

Remember that sometimes it will generate things that look good, but will not actually work. This is why it is so important to know what you are doing. You need to read, double check, and test the code that it generates.
