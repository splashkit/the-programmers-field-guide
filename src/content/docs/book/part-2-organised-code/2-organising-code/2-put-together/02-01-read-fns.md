---
title: Read Functions
sidebar:
  label: " - Read Functions"
---

In the change calculator, we need to read in the cost of the item and the amount paid. This code involves identical steps, but is not easy to remove with just control flow statement. Thinking about this, we have a clear **task** we are performing here. We are "reading a number" from the user. This is the perfect time to create a function or procedure. Let's think through this now.

The code for this looks like this:

```cpp
    write("Cost of item in cents: ");
    line = read_line();
    while ( ! is_integer(line) )
    {
      write_line("Please enter a whole number.");
      write("Cost of item in cents: ");
      line = read_line();
    }
    int cost_of_item = stoi(line);

    write("Payment in cents: ");
    line = read_line();
    while ( ! is_integer(line) )
    {
      write_line("Please enter a whole number.");
      write("Payment in cents: ");
      line = read_line();
    }    
    int amount_paid = stoi(line);
```

What changes? In order to code this up, we will need ways to address these differences.

- We prompt the user with different messages:
  - `"Cost of item in cents: "`
  - `"Payment in cents: "`
- The result is stored in different variables:
  - `int cost_of_item = stoi(line);`
  - `int amount_paid = stoi(line);`

Other than this, the code is the same.

## What is it?

Is this a function or a procedure? To address the second difference, if we make this a function then the result returned from the function can be stored in any variable. So that will address this difference. Thinking about this, the action is about *getting* something. We want to read a number from the user.

## What will we call it?

This is always a part of the challenge. You want to name the functions you create in a way that clearly says what it does. We could call this `read_number`, but what kind of number? So how about `read_integer`?

:::tip

The compiler won't care what you call it. Name things you create in a way that will work for the people using it.

:::

## What does it need to know/be told?

The first difference we identified is different prompt messages. This will be something we need to tell the function. To do this, we can add a `prompt` `string` parameter. When the function is called, you can then pass it the prompt message to show the user when reading the number.

## What is the logic?

The logic is already captured in the code. We can now think of this in the context of the read integer function.

```
Function: Read Integer (read_integer)
Parameters:
  prompt: a string with the message to show the user
Local Variables:
  line: a string for the line the user enters
Steps:
  Write the prompt to the user
  Store their response in line

  While line is not an integer
      Output a message saying we need whole numbers
      Write the prompt to the user
      Store their response in line

  Convert line to an integer and return it (stoi)
```

In order to code this, we will need a `line` local variable to store the text value the user enters. This will only exist within the read integer function, but we do not need its value afterwards, so that is perfect.

At the end of the code we convert the line to a number. This can use C's [stoi](https://en.cppreference.com/w/cpp/string/basic_string/stol) function to convert text to an integer. The result of this is returned to the caller, who can then store it whatever they want.

Once you have created the `read_integer` function in your code, you can now call it. So the above block of code is replaced with the following:

```cpp
    int cost_of_item = read_integer("Cost of item in cents: ");
    int amount_paid = read_integer("Payment in cents: ");
```

How nice is this!

You get so many advantages with separating this out.

- When you code `read_integer` you can focus on **just those steps**. You dont need to worry about where this fits, what comes next, etc.
- You can now call this and the code is so much clearer. Furthermore, you can start to more clearly **see** the steps in that code. The repeated logic is cleared away, so the steps without the extra clutter.

This is the advantage of starting to organise your code. By building these functions and procedures, you make your code easier to read, easier to write, easier to extend.

## Is it Reusable?

Reading a number from the user sounds like something we may need elsewhere. This is a case where you could put this code into a utilities file. A separate cpp file with a matching header so that you, and others, can use it easily without having to re-code it.

With this all in place, we can look at the rest of the code to see if we can break it into smaller parts.
