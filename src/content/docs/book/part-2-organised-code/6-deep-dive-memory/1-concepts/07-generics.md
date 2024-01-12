---
title: Generics
---

Ok, generics is not really related to memory management, but this is going to be really useful to know about as we start to build our own dynamic arrays to help handle memory efficiently.

In the [dynamic arrays](../../2-put-together/02-dynamic-array) task we will look at building our own structure to help manage arrays that can grow and shrink their allocations. Using the current tools we have, we would have to build this same code for each type. Giving us an `dynamic_int_array`, a `dynamic_double_array`, a `dynamic_user_array`, a `dynamic_currency_array`, and so on and so on. Each of these dynamic arrays would have *almost identical* code! The only difference would be the type of data that we store in the array.

When we have dealt with these kinds of similarities before we were able to abstract our code further by introducing things like variables, and loops, etc. If you think about this problem, what needs to change in this case?

*Can we have variable types in our code?*

Programming languages that let you support generics do allow you to have variable types within your code. This can be a super powerful feature, allowing you to create data structures that manage any kind of data - the programmer can the say what type of data when they use the structures and code that you provide.

## Generics - Why, When, and How

Most of the time you will use code that includes generics. Standard libraries that come with languages will have data structures that need to allow you to store any kind of data within these, and therefore they use generics to give you that capability.

However, if you need to build your own data structures to efficiently manage your data, then you can start to build code that uses generics to allow others to provide the type. We will touch on this a little here, and we will use it more in [Part 3](../../../../part-3-programs-as-concepts/00-part-3-programs-as-concepts) when we use the C# class libraries. But for now, let's look at how to build our own generic code.

When creating a generic struct of function, you do not need to worry about which type will be used. You create a placeholder, and then use that consistently in your code. The programmer who uses the generic type of function will indicate which type they want. This limits what you can do with the type, as you do not know what it is, but in general you can easily do things like store and retrieve these values - and that is mostly what we are after when we create a data structure.

## In C/C++

:::tip[Syntax]

C/C++ provides **templates** as their means of implementing generics. You can think of it like adding a placeholder type into your code, and then when you use the generic struct or function, you can indicate what the type is.

![Syntax for generic type or function using template](./images/template.png)

The syntax indicates you want to create a template, there the indicated identifier is now a type name that can be used in the function or struct code. When this function or struct is used, the programmer indicates that the type actually is.

:::

## Example

The following example creates a generic struct and generic procedure. The struct uses the variable type to store a value of that type. This can be any type the user wants. By protocol, we use the name `T` for the type variable. Anywhere within this *template*, `T` will be the type we indicate when we use the struct. If you look at main, you will see we can make the struct's T an int or a double.

We also have a generic function. This function allows us to pass in a `my_generic_data<T>` value. To allow this we need `T` to exist, so the function must be made within a template. When we call the function, the compiler works out what T is and then builds the function with that type.

```cpp
#include <cstdio>
#include <string>

using std::string;

// Declare T as a type variable
template<typename T>
struct my_generic_data
{
    string name;
    T value; // use T... it is a variable type!
};

// This function also uses a variable type - T
template<typename T>
void print(const char *format, my_generic_data<T> data)
{
    printf(format, data.name.c_str(), data.value);
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

    // We can call the generic functions, and T can be inferred from the
    // types we pass in. This allows us to pass in the my_generic_data<int>
    // where T is an int, and my_generic_data<double> where T is a double.
    print<int>("%s: %d\n", int_data);
    print("%s: %lf\n", double_data);

    return 0;
}
```

:::caution

Type using `my_generic_data<string>` this will work to create and initialise a variable, but you cannot call `print` as you cannot pass a C++ string to the `printf` function. That is ok for our example, but shows some the limitations of templates. We can work around this with some additional features, but for now we can use templates to build our dynamic array and have it manage storage for us. We can then loop over this and do things like printing in our code.

:::
