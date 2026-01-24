---
title: Class
---

When we shift to object-oriented programming in C++, we should now code our entities in **classes**. In C++, classes and structs are almost identical, so switching to classes now should not be too difficult. This shift will be important, as most modern languages only provide classes.

*So what is the difference?*

As with structs, classes can have fields, member functions, and constructors. The only difference is that with a class, members are *hidden* so they are only accessible by the class's code. So you cannot access these members from code outside the class.

This comes from our change of perspective - we now call things on the entity, rather than passing the entity around to different functions/procedures. Given this change, we no longer need, or want, everything to be accessible outside the entity. This then gives you, the developer, the opportunity to say "you can access this" and "you can't access that". This makes it easier to ensure things are used correctly.

To control access, C++ give you two keywords you can place within a class or struct. You use `private:` to start a section of code where members are hidden, or you use `public:` where you want to give access to the following members.

![Class with private and public](./images/class.png)

:::note[Classes]

- are just like structs!
- hide their fields and member functions from the code outside the class.
- can include `public:` sections where the following members are visible outside the class. (the default for structs)
- can include `private:` sections where the following members are hidden inside the class. (the default for classes)

In the above illustration:

- We have explicitly made the fields private.
- The constructors and print method are public - available for others to use/call.
- `m1` uses the public constructor to initialise its data.
- We cannot access `m1.sender` in main - that is outside the class and from there you cannot *see* or *access* these fields.
- We can print, as that method is public.
- Notice that inside the class we can access public or private members.

:::

## Example

The following example implements `contact` using a class (rather than struct like [before](/book/part-2-organised-code/4-member-functions/5-reference/1-0-struct-members/#struct-with-functional-members-example)). The highlighted lines are the only changes! Though, we could no longer access the `name` and `phone` fields outside the class's code. So `main` could not read or change these values.


```c++ {3, 5, 9-10, 30, 34-37}
#include "splashkit.h"

class contact
{
    // name and phone are now both private!
    string name;
    string phone;

    // Things from here on are public now...
    public:

    contact(string init_name, string init_phone)
    {
        // We can access the name and phone in the struct directly
        // The parameters need different identifiers, so we renamed them
        name = init_name;
        phone = init_phone;
    }

    void print()
    {
        // Print is within the struct so it can
        // access the name and phone fields directly!
        write_line(name + " " + phone);
    }
}; // this is the end of the class!

int main()
{
    // Notice... this is the same!
    contact c("Joan", "12345678");
    c.print();

    // However, c.name is no longer public,
    // and so cannot be changed outside of the class!
    // c.name = "Jenny";
    // c.print();

    return 0;
}
```

:::tip
It is generally good practice to have fields private, then you can give controlled access to interact with these through member functions.
:::
