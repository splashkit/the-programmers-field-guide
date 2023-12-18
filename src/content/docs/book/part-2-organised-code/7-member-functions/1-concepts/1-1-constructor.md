---
title: Constructors
sidebar:
    label: " - Constructors"
---

The constructors are probably the trickiest of the members to consider, but let's start with them anyway as we need to see how struct values are initialised before we start to perform other actions on them.

A constructor is a special method that is used to initialise a struct when it is created. This is called in one of two ways:

1. When a struct variable is declared.
2. When the **new** keyword is used to dynamically allocate memory on the heap.

## Constructor - Why, When, and How

When you start to work more within the struct, it is probably always a good idea to create a constructor that can initialise everything just the way you want. This can accept parameters, and use the provided values to set fields of the struct, or it can just allocate default values that make sure things work as expected. In any case, the idea is to make sure the struct is always set up in a way that will mean it works straight away.

In our example code, the `new_contact` function performed the same role in the original struct code. This can be coded into the constructor in our contact.

The great thing with the constructor is that it can be used to initialise values on the stack and on the heap, which our original `new_contact` function could not do.

## In C++

:::tip[Syntax]

Constructors are coded in the struct as a special looking function. It does not specify any return type, and it uses the same name as the struct for its function name.

![Constructors are coded as special functions in the struct](./images/constructor.png)

:::

### The new and delete keywords

C++ also include a **new** keyword that can be used to allocate memory on the heap, and **delete** to free that memory. This is given the name of the type to create, and will allocate space on the heap for that element calling the matching constructor as part of this process. When you are working with structs with members this would be the appropriate way of allocating memory for them. You can then free the memory using the `delete` keyword.

## Example

Here is another example of a struct with some fields, a constructor, and a method.

```cpp
#include "splashkit.h"

using std::to_string;

struct stock
{
    string id;
    int value;

    stock(string id_init, int value_init)
    {
        id = id_init;
        value = value_init;
    }

    void adjust_value(int diff)
    {
        value += diff;
    }

    void print()
    {
        write_line(id + " $" + to_string(value) );
    }
};

int main()
{
    stock *s1 = new stock("TEST", 123);
    
    s1->adjust_value(-4);
    s1->print();

    delete s1;
    s1 = nullptr;

    return 0;
}
```
