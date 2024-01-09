---
title: Maze Game
---

In the chapter on [indirectly accessing values](../../../4-indirect-access/0-overview) we started to build out a [maze game](../../../4-indirect-access/2-put-together/02-maze). The idea of this was to have rooms that were connected by different paths. This is a great way of working with pointers, as the player could point to the room they were in, and paths can point to their destinations.

One of the limitations of the maze game at that point was that we didn't yet have arrays. Now that we have variable arrays we can return to the maze and add the paths into each room. In this way, each room can have its own paths that lead elsewhere.

## Graphs

Have you noticed how the structure of the maze is similar to a [linked list](../../../6-deep-dive-memory/2-put-together/03-0-linked-list)?

You can think of the maze as a graph, and the player is able to traverse that graph exploring the data along the way. While we used a game style theme here, the skills you develop by thinking and working through this will help you in other contexts that use graphs. For example, exploring connections in a social media graph, finding files in a file system, and many other applications.
