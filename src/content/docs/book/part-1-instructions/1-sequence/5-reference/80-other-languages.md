---
title: Sequence in Other Languages
sidebar:
  label: Other Languages
---

One of the key goals of the guide is to support you in learning to program. As we have mentioned, this does not mean going in-depth with a particular language, but instead giving you a solid foundation upon which you can then explore many languages in depth yourself. These **Other Languages** sections will briefly give you some ideas of the things in other programming languages that are consistent with the language we're using, and things that are done differently.

## Imperative Programming Paradigms

Programming paradigms represent different ways of thinking about and doing programming.

Languages that use the **imperative** programming paradigm, such as C#, C/C++, Python, Pascal, Go, Java, JavaScript, TypeScript, and many others will have **sequence** at their core. Sequence is very close to what is happening within the computer, so it is not a surprise that most languages are imperative.

Here is an example Python program. Notice the key concepts are the same. These are the important things to focus on learning now. When you understand the concepts and know how to use them to get the results you want, then you can apply them in many contexts.
For example, even though Python is a different programming language, in this small program:

- There is a sequence.
- There are procedure calls.
- Things have a type -- you just can't see what it is as easily.
- Expressions are calculated before they are used.

```python
print("Hello world!")
print("Programming in python is fun")
print("It looks a little different to C/C++, but the concepts are the same!")

print("I can still print out text and numbers")
print(f"I can also use expressions to calculate values like {8 + 7 * 3}")
```

The differences are smaller things. These little things tend to change between languages, which means learning a language is really about picking up these details. When you know how to program by focusing on the concepts, then you can usually pick up a new language in a few hours with some searching or other resources which can help you find these details.
For example, some differences in our small Python program are:

- The procedure to write text to the termianl has a different names.
- There are no semicolons (`;`) at the end of the instructions.
- Use can use `f` syntax if you want to calculate an expression within some text to be printed out.

Imperative programming means to **command** the computer -- to tell it what to do. Do this, then do this, then do this, etc. These actions flow in sequence through the computer. As a result, algorithms are core to imperative programming. As a programmer, you need to be thinking through the steps you need the computer to perform to realise a solution.

We chose to start with imperative languages as they will help you understand how the computer works. Once you are used to this, you can start to imagine how other styles of programming work.

:::tip
Focus on the big picture now, then you can program in any imperative language!
:::

## Declarative Programming

Another style of programming is known as **declarative programming**. Programs in declarative languages focus on describing what you want, not how to achieve it. These generally work within other software that then turns your request into steps.

Two declarative programming languages include HTML and SQL. Web pages are built from HTML. In these files you describe the page and how you want it to appear. The web browser then reads these and runs an algorithm to lay out your page for the user to see. This is still programming, just not at all like imperative programming. Similarly, SQL is used to query databases. In SQL, you declare what you want out of the database and the database management system (DBMS) turns this into instructions for you.

The following is an example SQL program to get all of the data from a `Users` table, ordering the output rows by the value of `Username`.

```sql
SELECT * FROM Users ORDER BY Username;
```

In each of these cases, the outputs will follow predictable patterns. Learning declarative languages is about understanding how to structure your code so that the software interpreting it will generate the output you want.

## Functional Programming

Functional programming is a kind of declarative programming through which you can create programs. Unlike imperative programming, with functional programming you focus on the information required and how to transform it. Each function accepts input, performs some transformation, and returns a result. The program is then the composition of these functions. Languages like Haskell and LISP are classic functional languages.

With functional programming, you do not worry about the sequence of actions. Ideas from functional languages are embedded in some imperative programming libraries, and we will look at these when we get a bit further along in the journey.

## Logic Programming

Languages like Prolog allow you to set up and query knowledge bases. These languages let you set up facts and rules, and you can then ask questions that the system answers by using those facts and rules.

For the moment we will focus on imperative programming. So, let's get going with telling the computer what to do.
