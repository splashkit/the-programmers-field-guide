---
title: "Grammar"
---

Programming languages are driven by the compilers and interpreters that read and convert your code to machine code instructions. The developers who create these tools have the challenge of reading the code you write and making sense of it. In building these tools, the developers create a **grammar** that describes how code must be written to work with the compiler or interpreter. This section looks at how grammar will be expressed in this guide, and how to read, interpret, and use these.

## Designing Programs

When you design a program you **should** be think in terms of **concepts**. To create an animation, for example, you want to think about the variables you need, the methods you will call, and the values they will need.

You can capture your ideas in **pseudocode** - text that is not code, but captures the plan you have for the code. The following code is an example of pseudocode. It is structured in steps similar to the programming code, but is more free form, capturing the idea and sequence of the steps but without the requirement of matching the language grammar rules.

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

Once you have a conceptual plan, you use the language grammar to guide you in how to realise that plan within the language. These ideas and pseudocode notes are not in a form that can be used by a compiler. To make this into a program, your ideas must be translated into source code.

Each chapter will introduce you to new language features, giving you the **concepts** you can use to inform your **ideas** and then the **rules** you can use to convert these ideas into code. These will be accompanied by examples so you can see the rules in action, but understanding the grammar will mean you can apply the rules to build any ideas you have.

The programming language grammars are expressed as a number of related **syntax rules**. You will find the rules that you need to create a program, the rules for calling a method, creating a variable, assigning it a value, etc.

## Syntax Diagrams

In this book the syntax rules are expressed using **syntax diagrams**.

An example is shown in Figure **TODO reference**. This diagram shows the syntax related to two sample rules, **first rule**, and **second rule**, which we can use to explore the four main parts of all the syntax diagrams.

![A syntax diagram with two rules - first rule and second rule.](./images/basic_rules.png)

1. Text found at the start of a line (not contained in a box) is the name of a **rule**. There are two rules in the sample syntax: *first rule*, and *second rule*.
2. Arrows show the **order** in which the parts of the rule are applied. They start at the rule name, and point in the direction you need to follow. Each box pointed to by an arrow represents either another rule to apply, or the text that must written.
3. Rectangular boxes (nodes) on a line indicate points where other rules need to be applied. For example, the node within the **first rule** indicates that you **must** apply the *second rule* at this point.
4. Boxes with rounded corners represent **text** that must be entered into the code. For example, the rounded box within the **first rule** indicates that you **must** write the text `write in the code` at that point in your code.

In order to make use of these syntax diagrams, you must know what it is that you *want* to write in code. For this sample, let's assume we want to add *first rule* into our code. To do this we must:

1. Find that *first rule* in the grammar.
2. Follow the arrow from the rule through the different boxes - following any branches or loops to achieve your desired effect.
3. Reading the *first rule*, we follow the arrow to the right. It encounters the *second rule* box, this is another rule that must now apply.
4. Find the *second rule* in the grammar, and follow its arrows.
5. Following the arrows from the *second rule*, you encounter a grey box indicating that you must write the text '*stuff to*' in your code.
6. The vertical bar at the end of the line indicates the end of the *second rule*. This means at this stage the code is:

  ```
  stuff to
  ```

7. Having finished the *second rule*, you return back to finish the *first rule*. 
8. Continuing to follow the arrow, this indicates that you need to write '*write in the
code*' in the code. 
9. Following the arrow on, we get to the end of the *first rule*.
  
This is the end of the *first rule*, and so the code needed to write a *first rule* from the syntax diagram is:

```
stuff to write in the code
```

## Example

Let's have a look at a more realistic example. The syntax diagram for an identifier is shown below.

![Figure 5.12 The syntax of an Identifier.](./images/program-creation/IdentifierSyntax.png "The syntax of an Identifier")

There are three **rules** in this diagram: the **identifier** rule
itself and rules for **letter** and **digit**. These rules show arrows
that give you *options*, and the ability to *repeat* parts of the rules.

- A **letter** is one alphabetic character: i.e. one of 'A' to 'Z' or 'a' to 'z'. This is an example of options in the syntax, where you follow **one** of the available arrows.
- A **digit** is a single number: i.e. a number between '0' and '9'.
- The **identifier** has a more complicated rule, with the following parts:
    1. The first thing in an must be either a *letter* or an underscore (`_`).
    1. Next you have the **option** of following the top line and ending
        the identifier, or following the downward arrow and including
        other letters, numbers, and underscores.
    1. Following the downward arrow, you have a new option where you can
        choose to have either a *letter*, a *digit*, or an underscore as
        the second character in your identifier.
    1. Continuing after this option you have another option where you
        can return back to repeat the previous step, allowing you to
        have identifiers with more than one or two characters.

Syntax diagrams can help you to map a concept to actual code that needs to be written in your source code. To use these diagrams you must first know *what* it is that you want to create or use, and then you can *look up* the related syntax. This is where pseudocode code comes into play. It contains a description of the things that need to be created.

Let's assume we want to create an identifier for our "backpack items" variable. Following the rules for an identifier we can choose to start with a `b` and then follow through the options to repeat characters for `ackpack`. Now we have an *issue*. We have two words, but the rules say "no spaces". There is nowhere here that lets us put a space inside the identifier. We can make this **camel case**, so we choose `I` next and finish off with `tems`. So we end up with the valid idenfifier `backpackItems`.

:::tip
You have to know what you want - then use the rules to get it. While we came up with `backpackItems` to match the name we had originally, you could have called it `a` or `_1` or `_anythingYouWant_thatFOLLOWS_the_RULES`. These are all valid. 

The rules dont help you work out what you want - they just tell you how to structure your code to work with the compiler.
:::

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
