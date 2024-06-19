---
title: Removing Nodes from a Linked List
sidebar:
    label: " - Removing Nodes"
---

As a final step, let's add the code to remove a node. For this to work, we need to know which node to remove. The process of removing it involves routing the link from the previous node to the node that follows the node to be removed. This is shown in the following image.

![Illustration of the steps to remove a node](./images/list-delete.png)

With appropriate prompts, copilot can implement this for us. We need to check the basic logic, and the different cases that may need special attention, primarily removing the first node, removing the last node, and removing the only node.

Here is what Copilot created for me. It handles the removal of the first node, and last node. It clears the node, and even added the code to search for the previous node for me. I added some extra comments to make sure we can follow the code going forward.

```cpp
/**
 * Remove the indicated node from the list.
 * 
 * @tparam T The type of the data that will be stored in the list.
 * @param list A pointer to the linked list to remove the node from.
 * @param node The node to remove from the list.
 */
template <typename T>
void remove_node(linked_list<T> *list, node<T> *node)
{
    // Check if we are removing the first node.
    if (list->first == node) 
    {
        // Set first to the 2nd node, if it exists
        list->first = node->next;
    }

    // Similarly, check for removing the last node
    if (list->last == node) 
    {
        // Will this work?
        list->last = node->next;
    }

    // Find the previous node
    node<T> *current = list->first;
    while (current != NULL) 
    {
        // The previous node has the node as its next
        if (current->next == node) 
        {
            // Skip the next node
            current->next = node->next;
            break;
        }
        current = current->next;
    }

    // Clear data from node
    node->next = NULL;
    free(node);
}
```

This is a case when the code is pretty convincing, until you look and think about it. The check for removing the last node, has the wrong logic. The new last node should be the node *before* not *after* the node we are removing.

Similarly, we don't need to search for the previous node if we removed the first node. We should move searching for the previous node into an else branch, so it is skipped if we know we removed the first node.

Lastly, the `node` parameter will hide the `node` data type. We need to think of a new name for this parameter.

We can move this around to fix it up. This took some thinking, as we need to make sure we handle different cases we identified above (remove first, last, and only nodes). Here is what I came up with.

```cpp
/**
 * Remove the indicated node from the list.
 * 
 * @tparam T The type of the data that will be stored in the list.
 * @param list A pointer to the linked list to remove the node from.
 * @param node_to_remove The node to remove from the list.
 */
template <typename T>
void remove_node(linked_list<T> *list, node<T> *node_to_remove)
{
    node<T> *previous = NULL;

    // Removing the first node
    if (list->first == node_to_remove) 
    {
        // Move first to the next node
        list->first = node_to_remove->next;
    }
    else
    {
        // Find the node before the node to remove
        node<T> *current = list->first;

        // Iterate through the list until we find the node to remove
        while (current != node_to_remove && current != NULL) 
        {
            previous = current;
            current = current->next;
        }

        // Check if the node to remove was found
        if (current == NULL) 
        {
            return;
        }

        // Skip the node to remove
        previous->next = node_to_remove->next;
    }

    // Check if we removed the last node
    // needs to be here in case we remove the only node
    if (list->last == node_to_remove) 
    {
        list->last = previous;
    }
    
    // Clear data from node
    node_to_remove->next = NULL;
    free(node_to_remove);
}
```
