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

This looks like our [read integer](/book/part-2-organised-code/2-organising-code/2-put-together/00-2-explore-functions) code. All of this duplicated code can be removed and replaced with calls to read integer. The result will look much simplier!

Using read integer, all of that code above can now be achieved in the following two lines:

```cpp
    int cost_of_item = read_integer("Cost of item in cents: ");
    int amount_paid = read_integer("Payment in cents: ");
```

Check through your version of the change calculator and make use of your read integer function.
