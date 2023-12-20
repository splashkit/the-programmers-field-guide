---
title: Maze Game
---

In the chapter on [indirectly accessing values](../../../4-indirect-access/0-overview) we started to build out a [maze game](../../../4-indirect-access/2-put-together/02-maze). The idea of this was to have rooms that were connected by different paths. This is a great way of working with pointers, as the player could point to the room they were in, and paths can point to their destinations.

One of the limitations of the maze game at that point was that we didn't yet have arrays. Now that we have variable arrays we can return to the maze and add the paths into each room. In this way, each room can have its own paths that lead elsewhere.

## 