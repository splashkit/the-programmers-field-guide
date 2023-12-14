---
title: Testing the Linked List
sidebar:
    label: " - Testing"
---

If you haven't already created some tests, now is a good time. Add `main` and play with the different functions to test they work as expected.

Here is a simple version that I used to test this out. We should add some extra checks to make sure that we remove different elements (the first, last, and only for example) but this is a pretty good start on what is a nice bit of memory management code to think through.

```cpp
int main()
{
    linked_list<int> *list = new_linked_list<int>();
    add_node(list, 1);
    add_node(list, 2);
    add_node(list, 3);
    add_node(list, 4);

    node<int> *current = list->first;
    while (current != NULL) 
    {
        printf("%d->", current->data);
        current = current->next;
    }
    printf("\n");

    remove_node(list, list->first->next->next);

    current = list->first;
    while (current != NULL) 
    {
        printf("%d->", current->data);
        current = current->next;
    }
    printf("\n");

    delete_linked_list(list);
}
```

:::caution

Make sure you can see how the logic we created with Copilot is working. Getting this running is not as important as knowing why and how this works.

:::
