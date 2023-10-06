---
title: Scope
sidebar:
  label: " - Scope"
---

Compound statements introduce a new programming concept called **scope** to our code. Scope refers to the lifetime and accessibility of variables within your code.

So far, variables have been accessible from where they are declared to the end of the program. This makes sense, as the variables are created within the program's instructions. So they live from when they are created until the program ends.

With [compound statements](../02-0-compound-statement), we create new groups of instructions. These have their own start and end, and the possibility for things to be created and used within these instructions. This is known as **block-level scope**.

## Block Level Scope

Languages like C# limit the lifetime, and access, of variables to the *block* in which they are declared. Let's work through this with some examples.

```csharp
string name = "My Name";
WriteLine($"We can access {name} here");

{
  // We are in a new block - one nested in the program's block
  int i = 0;
  WriteLine($"{name} amd {i} are accessible here");
}

// We are back in the program's blocl
WriteLine($"{name} is accessible here - but i is out of scope (and no longer exists)");

{
  int i = 1;
  WriteLine($"{name} amd a new/different {i} are accessible here");
}
```

Each compound statement creates a new block, beginning at the open brace (`{`) and ending at the close brace (`}`). Any variable or constant declared within that block will live until the block ends, at which time the variable is destroyed. As a result, these variables are only accessible within that block's code - which include any new blocks created within that block.

In the above code, the comments and `WriteLine` messages indicate which variables are accessible. Notice how name is accessible throughout the program, from when it is declared in the program's main block, and when the program ends. Within the two additional blocks, new `i` variables are created. These are only accessible within the block in which they are declared.

## The Stack

The stack is used to store the variables that you create within the blocks in the program. 

*Why is this called the stack?*

This is a visual metaphor - like a stack of books piled one on top of the other. The main program instructions form the base of the stack, then new blocks are added on top of this, like a book being added to the pile. Each block adds a marker for the current top of the stack when it is created. Any new variables are then added above that line, within the scope of the current block. At the end of the block, the top of the stack is reset - much like removing a book from the top of the pile. The block's variables are now gone, and the top of the stack is returned to the previous block.

**TODO - add slider here for the following code code**

```csharp
string name = "My Name";
WriteLine($"We can access {name} here"); <-- Slide 1 here ( name on stack )

{ <-- slide 2 here - add a line in the stack
  int i = 0; <-- slide 3 here - show i above stack marker
  WriteLine($"{name} amd {i} are accessible here");
} <-- slide 4 here - make i very light grey

WriteLine($"{name} but no i here”); <-- slide 5 here - i is gone
```

Slide 1 notes:
- The program has started
- The name variable is allocated on the stack

Slide 2:
- The block is added to the top of the stack

Slide 3:
- The i variable is added to the top of the stack
- This is within the new block
- You can still access name, as we are still within that block

Slide 4:
- The block has ended, so the top of the stack returns to the previous block

Slide 5:
- You can no longer access i, it is gone
