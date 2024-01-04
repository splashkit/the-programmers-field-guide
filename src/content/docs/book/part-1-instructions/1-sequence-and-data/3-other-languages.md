---
title: Sequence in Other Languages
sidebar:
  label: Other Languages
---

One of the key goals of the guide is to support you in learning to program. As we have mentioned, this does not mean going in-depth with a particular language, but instead giving you a solid foundation upon which you can then explore many languages in depth yourself. These **Other Languages** sections will briefly give you some ideas of the things that are consistent and other languages that do things differently.

## Imperative Programming Paradigms

Programming paradigms represent different ways of thinking about and doing programming.

Languages that use the **imperative** programming paradigm, such as C#, C/C++, Python, Pascal, Go, Java, JavaScript, TypeScript, and many others will have **sequence** at their core. Sequence is very close to what is happening within the computer, so it is not a surprise that most languages are imperative.

Here is an example Python program. Notice the key concepts are the same. These are the important things to focus on learning now. When you understand these and know how to use them to get the results you want, then you can apply these in many contexts.

- There is a sequence.
- It has method calls
- There are variables (created when you first use them)
- Things have a type - you just can't see what it is as easily
- Expressions are calculated before they are used.

The differences are smaller things. These little things change between each language. Learning a language means picking up this kind of detail. When you know how to program, by focusing on the things above, then you can usually pick up a new language in a few hours with some searching or the use of generative AI to help you when you need to find these details.

- The methods have different names.
- No `;` at the end of each instruction.
- String interpolation uses `f""` instead of `$""`

```python
name = input("What is your name: ")
line = input("What is your favorite number: ")
favNum = int(line)

print(f"Hello {name}!")
print(f"I like {favNum} too. It is almost as good as {favNum + 1}")
```

Imperative programming means to **command** the computer - to tell it what to do. Do this, then do this, then do this. etc. These actions flow in sequence through the computer, as it steps through the instructions. As a result, algorithms are core to imperative programming. You will be thinking through the steps you need the computer to perform to realise a solution.

We chose to use imperative languages as they will help you understand how the computer works. Then you can start to imagine how other styles of programming work.

:::tip

Focus on the big picture now, then you can program in any imperative language!

:::

## Declarative Programming

Another style of programming is known as **declarative programming**. Programs in declarative languages focus on describing what you want, not how to achieve it. These generally work within other software that then turns your plan into steps, using algorithms coded within that software.

Two declarative programming languages include HTML and SQL. Web pages are built from HTML. In these files you describe the page and how you want it to appear. The web browser then reads these and runs an algorithm to lay out your page for the user to see. This is still programming, just not at all like imperative programming. Similarly, SQL is used to query databases. In SQL, you declare what you want out of the database and the database management system (DBMS) turns this into instructions for you.

The following is an example SQL program to get all of a Users table, ordered by user name.

```sql
SELECT * FROM Users ORDER BY Username;
```

In each of these cases, the outputs will follow predictable patterns. Learning declarative languages is about understanding how to structure your code so that the software (DBMS or Web Browser for example) will generate the output you want.

## Functional Programming

Functional programming is a kind of declarative programming through which you can create programs. Unlike imperative programming, with functional programming you focus on the information required and how to transform it. Each function accepts input performs some transformation and returns a result. The program is then the composition of these functions.

With functional programming, you do not worry about the sequence of actions and focus on how to transform it. Languages like Haskell and LISP are classic functional languages. Ideas from functional languages are embedded in some imperative programming libraries, and we will look at these when we get a bit further along in the journey.

## Logic Programming

Languages like Prolog allow you to set up and query knowledge bases. These languages let you set up facts and rules and the system uses logic to allow you to ask it questions that it can then infer the answer from the rules provided.

For the moment, we will focus on imperative programming. Let's get going with more on telling the computer what to do.
