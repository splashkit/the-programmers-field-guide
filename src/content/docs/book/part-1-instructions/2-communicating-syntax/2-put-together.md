---
title: Put Together
---

Every program you create needs to follow the syntax rules of the language you are using. These rules are captured in the grammar, which you need to learn as you get started. This chapter has explored the visual grammar style of syntax diagrams, which can help us connect with these grammar rules and how to apply them.

A key thing to realise at this point is that syntax is not the most important thing. You shouldn't have the syntax in your mind as you think things through or plan things out. Focus instead on the concepts, then use the grammar to help you work out how to achieve your idea in this particular language. 

If you can achieve this, then you are learning to program - which is the goal of this guide. By thinking at this level, you will be able to quickly and easily change languages. While the grammar rules differ between languages, the good thing is that the core concepts are often the same. So while you will be using a particular language in each part of this journey, the skills you pickup will transfer to other languages.

## Designing Programs

When you design a program you **should** be think in terms of **concepts**. To create an animation, for example, you want to think about the variables you need, the methods you will call, and the values they will need.

You can capture your ideas in **pseudocode** - text that is not code, but captures the plan you have for the code. The following text is an example of pseudocode. It is structured in steps similar to the programming code, but is more free form, capturing the idea and sequence of the steps but without the requirement of matching the language grammar rules. This is the kind of thing you should be thinking.

```
----------------------------
Program: Output Test
----------------------------
PI constant = 3.1415

Steps:
1: Output 'Output Test Program' to the Terminal
2: Output ' 1 + 1 = ', and the result of 1 + 1
3: Output ' Area of a circle with radius 3 = ', 
                           and the result of PI * 3 * 3
```

Once you have a conceptual plan, you use the language grammar to guide you in how to realise that plan within that language. These ideas and pseudocode notes are not in a form that can be used by a compiler. To make this into a program, your ideas must be translated into source code. This is where you need to utilise these grammar rules, and convert your ideas to code. As you memorise the rules, this will become a straightforward process. Switching language is then just a matter of learning the new way to code the same plan.

In the field guide, each chapter will introduce you to new language features, giving you the **concepts** you can use to inform your **ideas** and then the **rules** you can use to convert these ideas into code. These will be accompanied by examples so you can see the rules in action. By understanding the grammar, you can apply the rules to build any ideas you have.

The programming language grammars are expressed as a number of related **syntax rules**. You will find the rules that you need to create a program, the rules for calling a method, creating a variable, assigning it a value, etc.

## Using Syntax Diagrams

As you progress through this journey, you can use these diagrams to help you work out how to turn your ideas into code.

1. Find the syntax rule you are interested in knowing using.
1. Have a quick look at the **syntax diagram** and the rules it
    contains. Read each rule, and get a basic *feel* for how it is going
    to come together for your program.
1. Read the **examples** to see some ways of using the rule. A syntax
    diagram can be used to create any number of variations of the rule.
    Examples show you at least one way these rules can be coded.
1. Return to the diagram and make sure you can match each part of the
    example back to the rule that created it.
1. Now look up any related rules that are not explained in this rule's
    diagram. For example, a method call has an identifier. The
    actual rule for the identifier has its own page. When you read
    the rules for a method call you will need to also find the page with the
    rules for an identifier so that you know how to code these within the
    program.

As you follow this process it is also a good idea to take notes and to
try to use these rules in your own programs. Have your code editor open,
and see if you can follow the rules or mimic the examples to start
building your own program's code. You can also try typing in some of the
examples to see how they work.

To make this faster you will need to memorise some rules. Most of the rules are fairly easy to remember, and practice helps. So try to commit the patterns in the rules to memory as you explore them in your studies.

Learning to program involves understanding the concepts and how to ues them, as well as learning a language's syntax. This takes time and practice (like juggling). Reading about these concepts is one thing, but being able to successfully apply this ideas is something different. Make sure that you practice using these concepts and syntax.

Using the rules we have seen so far, we can turn our example pseudocode into the following C# code.

```csharp
using static System.Console;

// Create PI constant = 3.1415
const double PI = 3.1415;

// 1: Output 'Output Test Program' to the Terminal
// - using a method call to WriteLine
WriteLine("Output Test Program");

// 2: Output ' 1 + 1 = ', and the result of 1 + 1
WriteLine($" 1 + 1 = {1 + 1}");

// 3: Output ' Area of a circle with radius 3 = ', 
//                            and the result of PI * 3 * 3
WriteLine($" Area of a circle with radius 3 = {PI * 3 * 3}");
```

We could do the same thing in other languages. To do this we would need to know the syntax for a method call, constant declaration, and the method to call to output something to standard output. For example, the following shows the same program written in Python.

```python
# Create PI constant = 3.1415
PI = 3.1415

# 1: Output 'Output Test Program' to the Terminal
# - using a method call to WriteLine
print("Output Test Program")

# 2: Output ' 1 + 1 = ', and the result of 1 + 1
print(f" 1 + 1 = {1 + 1}")

#  3: Output ' Area of a circle with radius 3 = ', 
#                             and the result of PI * 3 * 3
print(f" Area of a circle with radius 3 = {PI * 3 * 3}")
```

Notice how similar it is. You dont really need to think differently, you just need to learn the new way of expressing the same ideas. 

Notice also that many things are the same. Expressions, identifiers, statements, literals. These are pretty much identical between these langauges.

For now we will use one language, but try to retain a focus on the concepts not the syntax. Think in terms of the things within your digital reality, then use the syntax rules to express these ideas as code.
