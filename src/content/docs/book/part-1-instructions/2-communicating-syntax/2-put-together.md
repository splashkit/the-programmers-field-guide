---
title: Putting it Together
---

Every program you create needs to follow the syntax rules of the language you are using. These rules are captured in the grammar. This chapter has explored syntax diagrams, a visual style of communicating grammar. These diagrams help us connect with grammar rules and understand how to apply them.

A key thing to realise at this point is that syntax is not the most important thing. You shouldn't have the syntax in your mind as you think things through or plan things out. Focus instead on the concepts, then use the grammar to help you work out how to achieve your idea in a particular language.

If you can achieve this, then you are learning to program (which is the goal of this guide!). By thinking at this level you will be able to quickly and easily change languages. This is because the concepts between languages are often the same, even though the grammar rules might differ. So, while you will be using a particular language in each part of this journey, the skills you pick up will transfer to other languages.

## Designing Programs

When you design a program you should be thinking in terms of **concepts**. To create an animation, for example, you want to think about the variables you need, the methods you will call, and the values they will need.

You can capture your ideas in **pseudocode** -- text that is not code but captures the plan you have for the code. The following text is an example of pseudocode. It is structured in steps similar to actual code but is more free form, capturing the ideas and sequence of the steps but without matching the language grammar rules. Writing pseudocode is a great way to plan and think through the logic you want your code to follow without worrying about getting the syntax correct.

```txt
----------------------------
Program: Output Test
----------------------------
PI constant = 3.1415

Steps:
1: Output 'Output Test Program' to the terminal
2: Output ' 1 + 1 = ', and the result of 1 + 1
3: Output ' Area of a circle with radius 3 = ', and the result of PI * 3 * 3
```

Once you have a conceptual plan, you use the grammar of your chosen language to map your pseudocode to source code. As you memorise the rules, this will become a straightforward process. Switching language is then just a matter of learning the new way to code the same plan.

In this field guide, each chapter will introduce you to new language features. The goal is to give you the **concepts** you can use to inform your ideas and then the **rules** you can use to convert these ideas into code. These will be accompanied by examples so you can see the rules in action. By understanding the grammar, you can apply the rules to build any ideas you have.

## Using Syntax Diagrams

As you progress through this journey, you will most likely unconsciously memorise many of the syntax rules of C#. Until that happens, and whenever you're unsure, you can use the syntax diagrams to help you work out how to turn your ideas into code.
To do this:

1. Find the syntax rule you are interested in using.
2. Have a quick look at the **syntax diagram**. Read each rule, and get a
    basic *feel* for how it is going to come together for your program.
3. Read the **examples** to see some ways of using the rule.
4. Return to the diagram and make sure you can match each part of the
    example back to the rule that created it.
5. Now look up any related rules that are not explained in this rule's
    diagram. For example, a [method call](../1-sequence-and-data/1-concepts/03-method-call) has an identifier. The rule for an identifier
    has its [own page](./1-concepts/04-identifier).

As you follow this process it is also a good idea to take notes and to try to use these rules in your own programs. Have your code editor open, and see if you can follow the rules or mimic the examples. You can also try typing in some of the examples to see how they work.

Learning to program involves understanding the concepts and how to use them, as well as learning a language's syntax. This takes time and practice. Reading about the concepts is one thing, but being able to successfully apply them is something different. Make sure that you practices.

Using the rules we have seen so far, we can turn our example pseudocode from above into the following C# code.

```csharp
using static System.Console;

// Create PI constant = 3.1415
const double PI = 3.1415;

// 1: Output 'Output Test Program' to the Terminal
// - using a method call to WriteLine
WriteLine("Output Test Program");

// 2: Output ' 1 + 1 = ', and the result of 1 + 1
WriteLine($" 1 + 1 = {1 + 1}");

// 3: Output ' Area of a circle with radius 3 = ', and the result of PI * 3 * 3
WriteLine($" Area of a circle with radius 3 = {PI * 3 * 3}");
```

We could do the same thing in other languages. To do this we would need to know the syntax for a method call, constant declaration, and which method to call to output something to standard output. For example, the following shows the same program written in Python.

```python
# Create PI constant = 3.1415
PI = 3.1415

# 1: Output 'Output Test Program' to the Terminal
# - using a method call to WriteLine
print("Output Test Program")

# 2: Output ' 1 + 1 = ', and the result of 1 + 1
print(f" 1 + 1 = {1 + 1}")

#  3: Output ' Area of a circle with radius 3 = ',  and the result of PI * 3 * 3
print(f" Area of a circle with radius 3 = {PI * 3 * 3}")
```

Notice how similar it is. You do'n't really need to think differently, you just need to learn the new way of expressing the same ideas. Notice also that many things are the same. Expressions, identifiers, statements, literals. These are pretty much identical between these languages.

For now we will use one language (C#), but try to retain a focus on the concepts instead of the syntax. Think in terms of the *things* within your digital reality, then use the syntax rules to express these ideas as code.
