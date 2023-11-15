---
title: Pointers and Scope
sidebar:
  label: " - Pointers and Scope"
---

What is wrong with this code?

```cpp
#include<cstdio>

int *get_pointer()
{
  int value = 10;
  int *result = &value;
  return result;
}

int main()
{
  int *p = get_pointer();

  printf("%d\n", *p);
}
```

There is something bad here, but this will compile without warnings and will run and output the value 10.

Here is a hint. The following version prints 20, not 10!

```cpp
#include<cstdio>

int *get_pointer()
{
  int value = 10;
  int *result = &value;
  return result;
}

int get_value()
{
  int result = 20;
  return result;
}

int main()
{
  int *p = get_pointer();

  int other = get_value();

  printf("%d\n", *p);
}
```

Think about what is happening in memory here, and think back to the details on [the stack](../../../2-organising-code/1-concepts/01-1-the-stack) and how that works.

The problem relates to variable scope and lifetime.

## Dangling Pointers

Lets step through the actions of `get_pointer`. This creates a variable, `value`, and assigns it the value 10. This is allocated on the stack, which is within the current function call. We then create a `result` pointer and get it to point to the `value` variable. Then we return the `result`, which points to `value` in the `get_pointer` data on the stack. At this point, `get_pointer` has ended, and it is removed from the stack. Removing its allocation for the `value` variable. The pointer we returned is now pointing to memory that is not actually allocated to anything!

This is referred to as a **dangling pointer**, which is a pointer that does not point to a valid value. It was valid, up until the `get_pointer` function returned.

So why did the first version seem to work? The problem here is that the location where `value` was stored has not yet been used for anything else. So it *happens* to still have the same value (10). In the second version, the `get_value` function was called, and this overrode the same location in memory for its result variable. Now when you dereference `ptr` in main, you get the new value 20.

When working with pointers you need to be careful **never** to return a pointer to something you have allocated on the stack. It is probably ok to pass pointers to stack values to parameters, but returning these pointers is always going to cause problems. The challenge can be that it will work for some time, and then strangely break for no apparent reason. So this is one of those places where you need to make sure these errors do not occur.

:::tip

When working with pointers, keep value lifetime in your mind. Remember that local variables are *destroyed* at the end of the function or procedure call. Make sure that any pointers to these stack values are not saved, or returned to places where they can be accessed after the local variable is destroyed.

:::

## Dangling Pointers Up Close

**TODO: add slider**
