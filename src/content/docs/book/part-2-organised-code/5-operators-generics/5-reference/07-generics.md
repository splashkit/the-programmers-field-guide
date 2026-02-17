---
title: Generics
---

In the [Array Class](/book/part-2-organised-code/4-member-functions/3-guided-tour/3-array/) tour, we had a go at writing a class to help us manage arrays. In our case, we wrote a `double_array` class, that stores...doubles! But only doubles. What if we want to store something else?

Using the current tools we have, we would have to build this same code for each type. Giving us an `int_array`, a `string_array`, a `user_array`, a `currency_array`, and so on and so on. Each of these dynamic arrays would have *almost identical* code! The only difference would be the type of data that we store in the array.

When we have dealt with these kinds of similarities before we were able to abstract our code further by introducing things like variables, and loops, etc. If you think about this problem, what needs to change in this case?

*Can we have variable types in our code?*

Programming languages that support **generics** allow you to have variable types within your code. This can be a super powerful feature, allowing you to create data structures that manage _any_ kind of data. The programmer can then say what type of data, when they use the structures and code that you provide.

## Generics - Why, When, and How

Generally, you will _use_ code that includes generics rather than write it yourself. The standard libraries that come with languages will have data structures that need to allow you to store any kind of data within them, and therefore they use generics to give you that capability.

However, if you need to build your own data structures, then you can start to build code that uses generics to allow others to provide the type.

When creating a generic type (struct/class) or function, you do not need to worry about which type will be used. Instead, you create a _placeholder_ type, and then use that consistently within the class/function. Then, the programmer who uses the generic type or function will indicate which type they want, when they use it.

Importantly, this limits what you can do with the type, as you do not know what it will be! If a generic procedure tried to add `100` to the parameter passed in, this would work fine with numeric types like `int` and `double`, but fail with types like `book` and `string`.

That said, in general you can easily do things like store and retrieve these values - and that is mostly what we are after when we create a data structure.

## In C/C++

:::tip[Syntax]

C/C++ provides **templates** as their means of implementing generics. You can think of it like adding a placeholder type into your code, and then when you use the generic struct or function, you can indicate what the type is.

![Syntax for generic type or function using template](./images/template.png)

The syntax indicates you want to create a template, there the indicated identifier is now a type name that can be used in the function or struct code. When this function or struct is used, the programmer indicates that the type actually is.

:::

Let's ensure this is clear with an example. We can create a templated struct like so:
```cpp "T"
// Declare T as a type variable
template<typename T>
struct my_generic_data
{
    string name;
    T value; // use T... it is a variable type!
};
```

We can now declare `my_generic_data` with various **different types**, like so:
```cpp /int(?=>)/ /double(?=>)/ /string(?=>)/ /point_2d(?=>)/ "200" "3.1415" "\"Hello!\"" "{10, 20}"
my_generic_data<int> int_data = {"An int", 200};
my_generic_data<double> double_data = {"A double", 3.1415};
my_generic_data<string> string_data = {"A string", "Hello!"};
my_generic_data<point_2d> point_2d_data = {"A point_2d", {10, 20}};
```

We can picture `my_generic_data<int>` as _instantiating_ a version of `my_generic_data` that looks like this:
```cpp "int"
struct my_generic_data<int>
{
    string name;
    int value;
};
```

In the same way, `my_generic_data<point_2d>` would look like this:
```cpp "point_2d"
struct my_generic_data<point_2d>
{
    string name;
    point_2d value;
};
```

:::tip
If you ever feel confused about what's happening with a template, this is the easiest way to understand - just substitute the template parameters with real types!
:::

## Example

The following example creates a generic struct and generic procedure. The struct uses the variable type to store a value of that type. This can be any type the user wants. By convention, we use the name `T` for the type variable. Anywhere within this *template*, `T` will be the type we indicate when we use the struct. If you look at main, you will see we can make the struct's T an int or a double, or any other type!

We also have a generic function. This function allows us to pass in a `my_generic_data<T>` value. To allow this we need `T` to exist, so the function must be made within a template. When we call the function, the compiler works out what T is and then builds the function with that type.

```cpp
#include "splashkit.h"

// Declare T as a type variable
template<typename T>
struct my_generic_data
{
    string name;
    T value; // use T... it is a variable type!
};

// This function also uses a variable type - T
template<typename T>
void print(my_generic_data<T> data)
{
    write_line(data.name + ": " + to_string(data.value));
}

int main()
{
    // Here we use the generic type, and say we want T to be 
    // an int. So the struct contains a string and an int.
    my_generic_data<int> int_data;

    // We can also use it elsewhere with different types.
    // So here we say T is a double for this variable.
    my_generic_data<double> double_data;

    int_data.name = "Test int data";
    int_data.value = 5;

    double_data.name = "Double data";
    double_data.value = 3.1415;

    // We can call the generic functions with our my_generic_data<int>
    // where T is an int, and my_generic_data<double> where T is a double.

    // We can pass the type T in manually:
    print<int>(int_data);
    print<double>(int_data);

    // Or we can allow T to be inferred from the parameters we pass in:
    print(int_data); // automatically becomes print<int>
    print(double_data); // automatically becomes print<double>

    return 0;
}
```

:::caution

We can place _any_ type into `my_generic_data`! It doesn't try to use its `value` for anything, and therefore there are no constraints on the type of data that can be stored.

`print` on the other, _does_ use the `value` - it converts it to a string (`to_string(data.value)`). This means that only types that can be converted to a string via `to_string` will work. We can declare a `my_generic_data<book>` without any issue, but if we try to pass that into `print`, it will fail: a `book` can't be converted into a `string`!

We can work around this with some additional features, but for now we will only rely on generics for "holding and moving different types of data", so this won't be an issue.

:::
