---
title: Extending the Statistics Calculator
sidebar:
    label: " - Extensions"
---

Now we have the basics working, let's consider how we can make a few additions.

## Adding More Values

If we add a loop to main, after populating the array, we can give the user options to change the values in the array and recalculate the statistics. First, let's consider how we could handle adding more values to the array.

As with most design work, each new action is likely to be coded in a new function or procedure, which may in turn need additional functions and procedures to help implement its logic. So, for this we would probably want an `add_data` procedure.

`Add data` could accept the number data by reference, so that it can change the array and size details in the struct.

When you do this, you want to think of any cases where things may go wrong. Now, there are a couple that I can think of. Firstly, we need to make sure that we have not already run out of space in the array. We can only add new data if there is space for that data. We can guard against this with a simple if statement at the start of the `add data` code. If there is no space, then we can output an error message and return.

In add data, we can then use the current size to determine where to store the data in the array. We can use the `data.count` value as the index, as the count is one larger than the current highest index. The code would appear like this:

```cpp
void add_data(number_data &data)
{
  //...
  data[data.count] = read_double("Enter new value: ");
  data.count++;
}
```

Now this got me thinking of another issue. It is a bit more tricky, as you have to think about providing invalid data to make this happen.

What would happen if in the `populate array` code the user entered a negative value for the number of elements they want to add. This would work initially, as it would not read any values. But now we would have a problem, as the count would be negative. We do not have access to the data at a negative array index - this would be before the start of the array.

To fix this, we need to go back to the `populate array` code and add a second check to make sure that count is set to 0 if the user enters a negative number of values. Then this would now work here, as 0 would be the index of the first element in the array.

## Removing a value

Removing a value is an interesting process. We can't actually remove an element from an array. So we have to move the data around within the array to make it look like we have removed the element.

The easy way to do this would be to swap the last element of the array into the location where the element to be removed is. Then reduce the count, so that the old last element is no longer considered to be part of the data.

```
Procedure: Remove Element
Parameters:
- data: reference to number data
Local variables:
- index: integer of element to remove
Steps:
- Output the values in the array with their indexes
- Ask the user which index to remove
- If it is less than 0 or larger than the max index
  - Output an error message
  - Return
- Store the last element of data.values in data.values[index]
- Reduce data.count by one
```

The first action would probably be good as its own procedure. This could accept the number data as a const reference and loop through printing out each element and its index.

Once we have the index, we can validate it to ensure it is within the appropriate range. If not, we can return with an error message.

The removal is then simply the process of copying the data from the last element to the index we want to remove. Then, when we reduce the count, that value is retained (if it is not the element being removed).

With this approach, the issue is that the order of the values has changed. If you want to keep the order the same, then we need to shift more values around. In fact, we need to move *each* value that occurs after the element we are removing back one position in the array.

Most of the removal logic would remain the same, but now we need a for loop to loop for each element after index. Within that loop we can copy the values back one position in the array. Here we need to work with two positions in the array at the same time. As they are adjacent to each other we can use `i` and `i - 1`. Where `i` is the current element in the array (from the perspective of the for loop) and `i - 1` is one position earlier in the array. Similarly, we can use `i + 1` if we wanted the next position in the array.

```
Procedure: Remove Element
Parameters:
- data: reference to number data
Local variables:
- index: integer of element to remove
- i: integer to loop over array
Steps:
- Output the values in the array with their indexes
- Ask the user which index to remove
- If it is less than 0 or larger than the max index
  - Output an error message
  - Return
- For i = index + 1 to last index ( while i < data.count)
  - Set data.values[i - 1] = data.values[i]
- Reduce data.count by one
```

Any time you are using something like `i + 1` or `i - 1` to access an array element, you need to think about the array boundaries. You want to make sure your code can never go past the end of the array (back past the start, or on past the end). In our case, we start at `index + 1` and index much be >= 0. Therefore, `i - 1` will never read past the start of the array.

**TODO: add slider on how to remove element**

## Summary

Remember the point of this exercise has been to work through the actions you can perform with arrays. Things like adding a removing elements work the same regardless of the kind of data stored in the array. Understanding how this works using basic data types now, will mean that you can easily work with other data types going forward.
