---
title: Iterating through a Linked List
sidebar:
    label: " - Iterating Nodes"
---

Notice the logic that Copilot added to delete for looping through the nodes of a linked list. This logic is akin to the use of the for loop to iterate over the indexes of an array.

With a linked list, you start with a `current` `node` pointer, and loop `while(current != NULL)`. Within the loop, you move `current` to `current->next` shifting the pointer along to the next node of the list. This ends when you get to the `NULL` pointer.

![Illustration showing moving between elements of a list](./images/list-iterate.png)

The general logic for this is shown below.

```cpp
node<T> *current = list->first;
while (current != NULL) 
{
    // Do something with current...

    // Move current to the next node
    node<T> *next = current->next;
    current = next;
}
```

Now it is time to actually put some data in our list!
