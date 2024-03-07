---
title: Member Visibility
sidebar:
  label: " - Member Visibility"
---

Objects give us meaningful entities to work with in our programs. By identifying these entities as separate individuals we can now start to think about the possibility that they do not need to share everything they know with the rest of the program. Instead, each object can hide details that should not be shared. This will help reduce the number of things that are visible as being accessible within an object. Focusing only on the things that we want others to be able to ask the object to do.

This is where the concept of **access modifiers** helps us.
An access modifier is a piece of information attached to every field and method within a class, telling the compiler what code can access the field or call the method.
There are several access modifiers we can use, but for now let's focus on the two most basic ones: **public** and **private**.

* **Public** methods and fields in a class can be accessed by any code that has an instance of the class, including within the class itself.
* **Private** methods and fields in a class can only be accessed by other code in the same class. It is not visible to other classes within our code.

Deciding what access modifier a field or method should have is one of the things that makes coding with classes challenging.
There are principles and best practices to help make these decisions.
In general, you keep fields private so that the class can control how these are updated and validate any changes.
Methods will be public or private depending on the purpose of the method.
Make methods public if they are intended to be used by others, otherwise mark them as private. For example, you may have private methods that are used by public methods to achieve their goals. These private methods will help you break the logic down into small, manageable chunks, and making them private means that others do not even need to know they exist. They are private, things that are used within the class to achieve its responsibilities.

Look back over the C# example code in the previous sections you will see that most of these members were public, but the field was private.

:::caution[Private fields?]

You may be thinking, "What? If fields are private how do you set these?". Read on, and we can have a look at the idea of [properties](../1-5-properties) to give access to things the objects' know in a controlled fashion.

:::
