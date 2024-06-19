---
title: Deleting Nodes from a Linked List
sidebar:
    label: " - Deleting Nodes"
---

Now that we have creation in place, it is probably good to also add in the code to delete a list. Copilot wants to put the code to `add` a node to the list, but we can feed it a new comment prompt to get it going on the delete code.

Here is the comment I used, and the code it generated. I like to clear up the data as things are freed, so I added in some additional comments to get it clearing up the data as we go.

```cpp
/**
 * Delete a linked list.
 * 
 * @tparam T The type of the data that will be stored in the list.
 * @param list A pointer to the linked list to delete.
 */
template <typename T>
void delete_linked_list(linked_list<T> *list)
{
    node<T> *current = list->first;
    while (current != NULL) 
    {
        node<T> *next = current->next;
        // Clear data from node
        current->next = NULL;
        free(current);
        current = next;
    }
    // Clear old data from list
    list->first = NULL;
    list->last = NULL;
    free(list);
}
```
