---
title: Files and File Systems
sidebar:
  order: 3
---

To start our exploration of the command line, we need to understand a little about files and file systems. When you interact with the terminal, the shell will position you within the file system to enable you to easily access and manipulate files.

Let’s return to our low-level thinking on how the computer actually works. You should recall that the computer is an electronic device. Current flows through the transistors within the computer, enabling different values and actions to be achieved. However, this all disappears when the power is turned off. In order to retain data, some other technologies are required.

Storage devices have the capability to retain data in a way that does not require power. In order to use this data, you need to read it from the storage device. This converts the stored data back into electronic current that can be used within the processors. New and changed data can then be written back to the storage device to be used again later.

Operating systems provide ways of organising this data, to help efficiently organise the information on the storage devices and make allow users to find the information they are after. To achieve this, operating systems opted for a metaphore based on paper based ways of organising information in **files** and **folders**.

### Files and Folders

A **file** stores data associated with a single thing - a document, image, sound track, program, etc. Through the operating system, programs can open files and read that data within them, change data stored, or write new data to the end of the file. You could picture this as a book, or sheets of paper, where you can change read, change, or add information.

**Folders** were then created to organise files. Files exist within folders, listed in a **directory** that records the details of each file such as its name, size, the owner, and permissions on who can accessess it. This allows files to be organised in groups, where users can list the files in the folder to see the one they want to interact with.

*How are folders organised?*

In addition to containing files, folders can also contain other folders. This gives you directories of files, that can contain sub-directories. This simple concept allows you to create large file systems, with folders and files organised in complex ways. For example, in your home folder you can have folders for documents, downloads, pictures, music, etc. In your documents folder you can have more folders to divide your documents between different projects, or create folders to organise them in any way that makes sense to you.

**TODO Add image to show folders**

### Tree Metaphor

This organisation results in files and folders organised in a tree, much like a family tree. This similarity resulted in the file system using metaphors based on genealogy and family relationship terms. The files and folders within a folder are called its children, making the parent the folder that contains a given folder.

You can picture this as a hierarchy. The file system starts with a folder we call the **root** of the file system. It is the one folder that does not have a **parent** folder. The name root comes from the tree analogy, as the basis for the tree on top of which the other folders grow. All other folders are within the root folder.

**TODO Add image showing labeling root, parent and child**

As a user, you need a way of saying which file you want to use. This means that each file must be uniquely identifiable. To achieve this, files and folders must have a unique name within their parent folder. If you move a file with the same name into a folder, it will replace the existing file. Losing the data associated with it. This ensures that you can uniquely identify files within each folder.

### Paths

To identify a file within the file system, you can list the **path** to follow from the root to the file you are wanting to identify. The path is a list of folder, separated by `/`. For example, `/home/multitool/Documents/code/program1.cs` is the path you take starting at the *root* of the file systems. First you go into the *home* folder, then into the *multitool* within *home*, followed by Documents, and code. The last element on the path is the *program.cs* file. Here we can see that *Documents* is the parent of the *code* folder, and *multitool* is the parent of the *Documents* folder.

:::tip[Where does it start?]

The root of the file system is the `/` folder - as this lists no folders in this path. 

:::

:::caution

To be different, Windows uses `\` to separate folders. This can be more challenging to program with as `\` also has special meaning in many programming languages.

:::
