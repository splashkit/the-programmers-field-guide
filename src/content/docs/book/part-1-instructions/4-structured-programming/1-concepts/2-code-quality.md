---
title: Code Quality
---

When it comes to implementation, there are two things that matter:

1. The software is functional - it does what it is expected to do.
2. The code is well written

The first of these is addressed by the testing phase of the software development lifecycle. Tests are designed to make sure that the program has the required features, and that they work as intended.

Making sure that the code is written well is a separate challenge. So what goes into making code good or bad?

In this section we will look at three main areas of code quality:

- Naming standards
- Indentation
- Commenting

Remember that getting a program working is one thing, and making sure that you can clearly see how it is working is another. Adhering to language coding conventions will help ensure that you and others will be able to understand the code, and fix issues or extend features as time goes on.

## Naming Standards

Programming is all about building digital realities. These abstract models that run within the computer are built up of many building blocks. So far we have seen how to create variables and constants, and next we will start looking at building other code constructs to help organise our code into reusable components. All of these things that we create need **names**.

It may seem strange, but naming things becomes one of the main challenges as your programs grow. The name that you give something can be quite powerful. It will shape how people see and think about that aspect of your program. So getting the name right is important.

:::tip
Always try to name the things in your code in a way that will help others understand what you intend that aspect to be used for.
:::

Associated with this is then the styling for these names. As we saw with [identifiers](../../../2-communicating-syntax/1-concepts/04-identifier), the names we give things can't have spaces in them. So languages usually have preferred ways for you to express these based on the thing you are creating. This helps ensure that people can easily get started with different programs written in the same language.

As you learn each language, these subtle differences in identifiers will help you understand what each thing is, without having to find where it is declared. This will become second nature as you progress, so breaking these conventions is a real problem.

  :::tip[In C#]

In C# the coding convention is to use the following:

- **Variables** - camelCase
- **Constants** - UPPER_CASE
- **Methods** - PascalCase

As we explore new language features, we will make sure to highlight the correct convention for the language we are using.

:::

## Indentation

Indentation is another important aspect that goes alongside naming conventions. Indentation relates to the way control flow statements are coded. Each [block](../../../3-control-flow/1-concepts/02-0-compound-statement) should be clearly visible within the code. This is achieved by indenting the code within each block by one additional tab than the current block.

For example, the following code illustrates indentation within the blocks of an if statement. Notice how, by indenting the code, you can see easily where the block starts and where it ends. This simple act of indenting the code is critically important, as it helps **show** you the structure of the algorithm.

```csharp
WriteLine("Demonstrating indentation");
if ( name == "Test" )
{
    WriteLine("See how this is indented");
}
else
{
    //..
}
```

An alternate style that achieves the same effect is to have the open brace on the same line as the statement within which the block is being nested. The following shows an example of this. Both styles are good, but the C# language recommends the above style with the braces on their own lines. This has the nice feature of being able to see the start and end brace within a single vertical line.

```csharp
WriteLine("Demonstrating indentation");
if ( name == "Test" ) {
    WriteLine("See how this is indented");
} else {
    //..
}
```

:::note

The importance of indentation can be seen in the Python programming language. This language does not use braces to group code, but requires you to indent the code. So the level of indentation has become part of the syntax rules of that language.

:::

## Commenting

Lastly we have commenting. Comments are a great way of capturing your thoughts as you build out an algorithm. You can start with comments to outline the steps and then write the code to flesh these out, or you can add in some comments once you have the first working version. The important thing is make sure these capture things not necessarily evident in the code itself. Don't say what each line does, unless what you are saying adds something that is not immediately evident. The best comments capture the intent of the code, rather than explain the syntax.

Write your comments for yourself in 6 months time. You will have forgotten what you were thinking when you wrote the code. So capturing those ideas as you go will make it easier when you have to come back and fix something, or make changes to incorporate new features.

Learning to write good comments can take time, but the effort will pay off when you start working in teams or on longer running projects.
