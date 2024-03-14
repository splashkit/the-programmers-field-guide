---
title: Static Members
---

We explored the idea of static members in the [Back to C# chapter](../../../1-back-to-c-sharp/1-concepts/4-static-methods), and so we should touch back on this again here.

Most members in a class should be instance members, as we described in this chapter. However, in some cases you can include static members that are available on the class itself. 

When thinking about static members, you can picture the class itself as an object at runtime. For example, the `Console` class defines a static `WriteLine` method. You can access this using `Console.WriteLine`, as if the `Console` class exists as an object you can reference at runtime.

This is one of the challenges with languages like C#, you need to be able to see which members (methods, fields, and properties) belong to objects of the class and which belong to the class itself. By default, members are associated with the objects of the class and only those with the `static` keyword are associated with the class.

:::caution

Avoid using static members. These should only be needed to rare circumstances. The `Main` method is the one case where you would use this.

:::
