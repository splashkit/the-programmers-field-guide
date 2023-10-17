---
title: Solving Problems
---

Things won't always go to plan, but working in small iterations will help. You will encounter two kinds of issues: syntax issues and logic issues.

## Syntax Errors

Syntax errors are the easiest, but probably more frequent, to deal with. When you get stuck with syntax errors, look back over the examples and sample programs to help you. Remember the computer is unintelligent, so you have to strictly adhere to the rules of the language.

Always start with the first error message, and work through them in order - rebuilding the program after each error is addressed. Remember the compiler is trying to keep going, but often it will get things wrong and give you errors that are not really there. Clearing the first error will let you know which of the subsequent errors still need to be addressed.

The good thing about syntax errors is that you know when they are solved. If the compiler is about to build your program, then you have the code right.

:::tip

Don't get overly worried about syntax errors. It is easy to make little mistakes here, and this will happen even when you have lots of experience. Just solve them methodically, and you will get there.

:::

## Logic Errors

The more challenging problems are the logic errors. These are the errors where you have a valid program, but it does not work as you intended. 

When you get a logic error, you need to identify its cause and work around this.

The first thing you need to work out is where the error is. Which line, or lines, of code are involved?

I would generally start by **observing what is happening**. What outputs are impacted? Then start to think backwards from that point. The issue could be a result of unexpected errors in the data or an expression, or an incorrect sequence of instructions.

:::tip[Plan or code?]

Remember that logic errors could be a problem with either the plan, or with the code itself? Check to make sure that the code matches what you intended - if it does, then you will have to see where you plan doesn't quite work.

:::

To find data issues, starting thinking about the data and expressions in that part of the program. What variables / data were involved in this? Do these variables and expressions have the right values?

I tend to find that, with experience, you can find most problems by thinking about the observed outcomes and reading through the related code. Often error are simple things like using `<` instead of `<=` or small errors in the expressions. So as a first pass I would suggest checking the code manually. Read through the lines where the error appears, and think "why is it doing that?". Then work backward to see what could have caused that.

Talking through your program logic can help. You can talk this through with other people, or even talk through it with yourself. This process aims to help you *see* what is actually happening in the code. Thinking though it as you talk through the steps can be surprisingly effective.

:::tip[Rubber Ducky Debugging]

The process of talking though your code is also known as [rubber ducky debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging). The idea being that you can talk through your program logic with a rubber ducky. Though you could replace this with a teddy bear, or pet. Anything that will be happy to sit there and listen to you talk through your plan.

:::

Generative AI can now help with this process, as it generate a summary from code that you give it. I am not sure that this has the same effect though, as the main idea is to think about the steps as *you* explain it.

Alongside rubber ducky debugging, 
