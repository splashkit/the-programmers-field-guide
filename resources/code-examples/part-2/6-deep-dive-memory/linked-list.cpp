#include <stdlib.h>
#include <stdio.h>
#include <new>

/**
 * A node is a struct that contains a pointer to the next node,
 * and a data value.
 * 
 * @tparam T The type of the data that will be stored in the node.
 * @field next A pointer to the next node in the list.
 * @field data The data that is stored in the node.
 */
template <typename T>
struct node {
    node *next;
    T data;
};

/**
 * A linked list is a struct that contains a pointer to the
 * first node, and the last node of the list.
 * 
 * @tparam T The type of the data that will be stored in the list.
 * @field first A pointer to the first node in the list.
 * @field last A pointer to the last node in the list.
 */
template <typename T>
struct linked_list {
    node<T> *first;
    node<T> *last;
};

/**
 * Creates a new linked list.
 * 
 * @tparam T The type of the data that will be stored in the list.
 * @return A pointer to the new linked list.
 */
template <typename T>
linked_list<T> *new_linked_list() 
{
    linked_list<T> *list = (linked_list<T> *) malloc(sizeof(linked_list<T>));
    list->first = nullptr;
    list->last = nullptr;
    return list;
}

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
    while (current != nullptr) 
    {
        node<T> *next = current->next;
        // Clear data from node
        current->next = nullptr;
        current->data.~T(); // Call destructor
        free(current);
        current = next;
    }
    // Clear old data from list
    list->first = nullptr;
    list->last = nullptr;
    free(list);
}

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
    new(&new_node->data) T; // Placement new to construct the data in the node
    new_node->data = data;
    new_node->next = nullptr;
    if (list->first == nullptr) 
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
    node<T> *previous = nullptr;

    // Removing the first node
    if (list->first == node_to_remove
    ) 
    {
        // Move first to the next node
        list->first = node_to_remove->next;
    }
    else
    {
        // Find the node before the node to remove
        node<T> *current = list->first;

        // Iterate through the list until we find the node to remove
        while (current != node_to_remove && current != nullptr) 
        {
            previous = current;
            current = current->next;
        }

        // Check if the node to remove was found
        if (current == nullptr) 
        {
            return;
        }

        // Skip the node to remove
        previous->next = node_to_remove->next;
    }

    // Check if we removed the last node
    if (list->last == node_to_remove) 
    {
        list->last = previous;
    }
    
    // Clear data from node
    node_to_remove->next = nullptr;
    node_to_remove->data.~T(); // Call destructor
    free(node_to_remove);
}

int main()
{
    linked_list<int> *list = new_linked_list<int>();
    add_node(list, 1);
    add_node(list, 2);
    add_node(list, 3);
    add_node(list, 4);

    node<int> *current = list->first;
    while (current != nullptr) 
    {
        printf("%d->", current->data);
        current = current->next;
    }
    printf("\n");

    remove_node(list, list->first->next->next);

    current = list->first;
    while (current != nullptr) 
    {
        printf("%d->", current->data);
        current = current->next;
    }
    printf("\n");

    delete_linked_list(list);
}