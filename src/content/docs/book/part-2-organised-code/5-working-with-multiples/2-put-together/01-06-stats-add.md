---
title: Adding Data to the Calculator
sidebar:
    label: " - Adding Data"
---

If we add a loop to main, after populating the array, we can give the user options to change the values in the array and recalculate the statistics. First, let's consider how we could handle adding more values to the array.

As with most design work, each new action is likely to be coded in a new function or procedure, which may in turn need additional functions and procedures to help implement its logic. So, for this we would probably want an `add_data` procedure.

`Add data` could accept the number data by reference, so that it can change the array and size details in the struct.

When you do this, you want to think of any cases where things may go wrong. Now, there are a couple that I can think of. Firstly, we need to make sure that we have not already run out of space in the array. We can only add new data if there is space for that data. We can guard against this with a simple if statement at the start of the `add data` code. If there is no space, then we can output an error message and return.

In add data, we can then use the current size to determine where to store the data in the array. We can use the `data.size` value as the index, as the size is one larger than the current highest index.

With this we also need to check if there is space, outputting an error message if the array is already full. The code would appear like this:

```cpp
void add_data(number_data &data)
{    
  if (data.size < MAX_NUMBERS)
  {
    double value = read_double("Enter a value to add: ");
    data.values[data.size] = value;
    data.size++;
  }
  else
  {
    printf("Sorry, you can only enter %d values.\n", MAX_NUMBERS);
  }
}
```

Now this got me thinking of another issue. It is a bit more tricky, as you have to think about providing invalid data to make this happen.

What would happen if in the `populate array` code the user entered a negative value for the number of elements they want to add. This would work initially, as it would not read any values. But now we would have a problem, as the size would be negative. We do not have access to the data at a negative array index - this would be before the start of the array.

To fix this, we need to go back to the `populate array` code and add a second check to make sure that size is set to 0 if the user enters a negative number of values. Then this would now work here, as 0 would be the index of the first element in the array.
