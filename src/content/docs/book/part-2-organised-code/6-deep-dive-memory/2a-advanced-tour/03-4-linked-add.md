---
title: Adding Nodes to a Linked List
sidebar:
    label: " - Adding Nodes"
---

Before we let Copilot create the code for us, let's think about how this needs to work.

The following illustration shows what we need to happen in memory when we add our first element. This logic needs to allocate the space for the node, set its data, set its next to NULL, and then update it to be the first and last node in the list.

![Illustration of how to link in a new node when the list is empty](./images/list-add.png)

:::tip

Drawing out the memory allocations, and linking them with arrows is a great way to think through this kind of dynamic memory allocation tasks. Paper and pencil are your friend here.

Similarly, when things don't work you can create the drawing as you step through the code. This will allow you to *see* what is happening in a way that will be easier to understand than just looking at pointer address values.

:::

## Adding more nodes

The logic for the 2nd node, and all subsequent nodes, will differ as we need to link it to the existing nodes in the list. We need to add the node after the list's `last` node.

The following illustration shows how we need to connect the new node in the list. The logic includes allocating space for the node, set its data, set its next to `NULL`, update the `last` node's `next` to refer to the new node, and then change which node is `last` in the list.

![Illustration for adding any subsequent nodes](./images/list-add-2.png)

## The Code

Copilot has us covered for this. For me, Copilot generated the comment and the following code. Before we move on we need to make sure that this works as we want. Step through the code, and double check that things will work for the first and all subsequent nodes added to the list.

```cpp
/**
 * Add a new node to the end of the list.
 * 
 * @tparam T The type of the data that will be stored in the list.
 * @param list A pointer to the linked list to add the node to.
 * @param data The data to store in the new node.
 */
template <typename T>
void add_node(linked_list<T> *list, T data)
{
    node<T> *new_node = (node<T> *) malloc(sizeof(node<T>));
    new_node->data = data;
    new_node->next = NULL;
    if (list->first == NULL) 
    {
        list->first = new_node;
        list->last = new_node;
    } 
    else 
    {
        list->last->next = new_node;
        list->last = new_node;
    }
}
```
