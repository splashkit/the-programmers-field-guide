---
title: "Linked Lists"
type: "content"
date: 2023-08-07 16:45:00
draft: false
description: "..."
---

## Concept

Pointers and dynamic memory allocation make it possible to store values in new and interesting ways. One way of structuring this data is to dynamically allocate each value, and link these together using pointers. An illustration of this is shown in [Figure x.y](#FigureLinkedList).

Linked lists have the advantage of being very fast to perform insert and delete actions, when compared with arrays. The disadvantage is an increase in storage size to keep all the pointers, and the fact you must loop through the nodes to access any value in the list.

<a id="FigureLinkedList"></a>

![Figure x.y: Illustration of a linked list in memory](./images/linked-list.png "Illustration of a linked list in memory")
<div class="caption"><span class="caption-figure-nbr">Figure x.y: </span>Illustration of a linked list in memory</div><br/>

:::note

- A Linked List is a **term** given to a certain way data can be structured in memory.
- A Linked List has **Nodes**, the equivalent of the elements of an array.
- Each **Node**, has some data and a pointer to the **Next** element in the list.
- The **Last** element in the list has **Nothing** as its next node.
- To access a Node in the list you must loop through from the first node until you reach the node you are after.
- You can insert and delete elements by changing the links in the list. 
- If the grey node in [Figure x.y](#FigureLinkedList) is being *inserted* then the previous node must be adjusted to point to it, and it to point to the next element of the list.
- If the grey node in [Figure x.y](#FigureLinkedList) is being *deleted* then the previous node changes its link to skip that node and point to the next node in the list.
- The pseudocode in [Listing x.y](#ListingLinkedListLoopPseudoCode) shows the standard way of applying an action to each node of a Linked List.

:::


<a id="ListingLinkedListLoopPseudoCode"></a>

```bash
Procedure: ... Work with all nodes in a Linked Lists
----------------------------
Parameters:
  1. List (Linked List)
----------------------------
Locals:
  - Current (pointer to a Node)
----------------------------
Steps: 
1. Assign Current, the pointer to List's first Node
2. While Current is not Nothing
3.   ... Work with Current's data
4.   Assign Current, Current's Next
```
<div class="caption"><span class="caption-figure-nbr">Listing x.y: </span>Pseudocode for looping through a linked list</div>