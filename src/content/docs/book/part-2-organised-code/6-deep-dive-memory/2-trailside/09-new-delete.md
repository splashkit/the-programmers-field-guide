---
title: C++ memory allocation
---

While we are aiming to focus on concepts, there are some underlying language aspects that impact on how we explore memory management. In our case, we need to have a little explore of some mechanics of C++ in terms of how it manages memory, as this will impact on our code here.

## C malloc, realloc, and free

C is very low level, which is great as we get to play around with all the mechanics that underlie other languages and tools we encounter. This is what we have looked at so far.

Working with these tools will be fine, as long as we stick to C. If we want to start using C++ features, like `string` for example, then we need to think about what C++ is doing on top of these basics.

## C++ new, new[], delete, and delete[]

C++ provides a number of operators for performing memory management - with the main categories being `new` to allocate memory and `delete` to free allocated memory. You use the `new` operator with a type, and it allocates space on the heap returning you a pointer to that (much like `malloc`). Where you indicate an array, the new operator will allocate space for the indicated number of elements. Similarly, you can use `delete` to free the memory allocated to a pointer or `delete[]` to free an array. These are shown below, with an integer pointer and array pointer.

```cpp
int main()
{
    // Use new to allocate space on the heap for an integer
    int* intPtr = new int;
    delete intPtr;
 
    // Use new [] to allocate space for an array of 10 integers
    int* arrayPtr = new int[10];
    delete[] arrayPtr;
}
```

Notice there is **no** equivalent of `realloc`. So you can allocate and free, but not change any memory allocation.

### Constructors and destructors

Behind the scenes, C++ adds additional features to its memory allocation functions for structs (and classes) to help developers initialise values when they are allocated, and clean up when they are freed. These are called **constructors** and **destructors**. Inside the C++ `new` operator, C++ will allocate space for the data and then call the constructor to initialise this space. Similarly, the `delete` operator will first call the destructor and then free the memory allocation.

If we want to play around with memory allocations, then `malloc`, `realloc`, and `free` are the tools we want to use, but we need to be aware of these extra steps that C++ is performing if we mix in the use of `string`.

:::caution

With C++, the general recommendation is to use the utilities the language provides to manage memory for you. This includes utilities for dynamic arrays, which is what we will be exploring.

Using the built-in library is very wise advice! With any production program you would **never** build your own code to dynamically allocate memory. Instead, you would use the provided utilities that do this for you.

However, our goal here is to understand how memory works behind the scenes. So we are doing this to explore and develop our understanding. The understanding you develop here will help you understand how other languages, libraries, and tools work.

:::

## Mixing malloc and new

Internally, `malloc` and `new` both allocate blocks of memory. The main difference is the missing call to the constructor when we are working with C++ structs (and classes).
The good news is that C++ provides the capability to call `new` on a previous memory allocation using [placement new](https://en.cppreference.com/w/cpp/language/new#Placement_new). Using this we can play around with memory using `malloc`, and `realloc` but still ensure that the constructors are called.

The following code illustrates how we can achieve this.

```cpp {22-24,26-31}
#include <cstdlib>
#include <string>

using std::string;

/**
* A test struct that contains a string... we need to 
* make sure that it's constructor is called.
*/
struct my_test_struct
{
    string name;
};

void print_test_struct_name(const my_test_struct& value)
{
    printf("Name: %s\n", value.name.c_str());
}

int main()
{
    // The standard C++ way to construct an object on the heap
    my_test_struct *p3 = new my_test_struct;
    p3->name = "P3 Name!";

    // Mixing new and malloc
    // - we first use malloc to get memory
    my_test_struct *p4 = (my_test_struct *)malloc(sizeof(my_test_struct));
    // - then call the placement new on this to run the default constructor
    new(p4) my_test_struct();
    p4->name = "P4 Name!";

    // Use our procedure to print these
    print_test_struct_name(p3);
    print_test_struct_name(p4);

    // Code to free and delete needs to be added here
    return 0;
}
```

:::caution
Make sure that you are calling placement new for any newly allocated space. This would include where you are using `malloc` but also `realloc`.
:::

## Mixing free and delete

Freeing the memory allocation has similar issues when we mix C++ with the standard C allocation functions. In C++, the `delete` operator will first call the destructor and then free the memory allocation. When using the standard C functions, you must first add a call to the destructor and then use `free` to clear the memory allocation.

We can complete the above example by adding in the code to free the memory allocations.

```cpp {37,38,40-45}
#include <cstdlib>
#include <string>

using std::string;

/**
* A test struct that contains a string... we need to 
* make sure that it's constructor is called.
*/
struct my_test_struct
{
    string name;
};

void print_test_struct_name(const my_test_struct& value)
{
    printf("Name: %s\n", value.name.c_str());
}

int main()
{
    // The standard C++ way to construct an object on the heap
    my_test_struct *p3 = new my_test_struct;
    p3->name = "P3 Name!";

    // Mixing new and malloc
    // - we first use malloc to get memory
    my_test_struct *p4 = (my_test_struct *)malloc(sizeof(my_test_struct));
    // - then call the placement new on this to run the default constructor
    new(p4) my_test_struct();
    p4->name = "P4 Name!";

    // Use our procedure to print these
    print_test_struct_name(p3);
    print_test_struct_name(p4);

    // Free our memory allocations using the standard C++ approach
    delete p3;

    // Mix destructor and free
    // - first we manually call the destructor. It is named "~ struct name"
    //   so it is  ~my_test_struct. We call this using:
    p4->~my_test_struct();
    // - then we call free to release the allocated memory
    free(p4);

    return 0;
}
```

:::caution
Make sure that you are calling the destructor for any freed memory allocation. This would include where you are using `realloc` to reduce a memory allocation. In these cases make sure to call the destructor before `realloc` for any elements that are being freed.
:::

## Doing this with arrays

When you use this to work with arrays, you need to make sure to call the constructor and destructor for each element of the array - when allocating or freeing space. The following code demonstrates this with the test struct we have been working with.

```cpp {19-27,29-36,44-51,53-59}
#include <cstdlib>
#include <string>

using std::string;
using std::to_string;

struct my_test_struct
{
    string name;
};

void print_test_struct_name(const my_test_struct& value)
{
    printf("Name: %s\n", value.name.c_str());
}

int main()
{
    // Mixing new and malloc for an array of my_test_struct
    // Create an array of 10 elements - first use malloc to get space
    my_test_struct *my_array = (my_test_struct *)malloc(sizeof(my_test_struct) * 10);
    // For each of the new elements...
    for (int i = 0; i < 10; i++)
    {
        // Call constructor to initialise each of the 10 elements
        new(&my_array[i]) my_test_struct();
    }

    // Add an element to the array - reallocate to get more space
    my_test_struct *tmp_ptr = (my_test_struct *)realloc(my_array, sizeof(my_test_struct) * 11);
    if ( tmp_ptr != nullptr )
    {
        my_array = tmp_ptr;
        // Call constructor on the new element
        new(&my_array[10]) my_test_struct();
    }

    for(int i = 0; i < 11; i++)
    {
        my_array[i].name = "Test name " + to_string(i);
        print_test_struct_name(my_array[i]);
    }

    // Remove an element - first call the destructor
    my_array[10].~my_test_struct();
    // Reallocate to release memory allocation for last element
    tmp_ptr = (my_test_struct *)realloc(my_array, sizeof(my_test_struct) * 10);
    if ( tmp_ptr != nullptr )
    {
        my_array = tmp_ptr;
    }

    // Destroy the array - loop to call destructor on each element
    for (int i = 0; i < 10; i++)
    {
        my_array[i].~my_test_struct();
    }
    // Free the array
    free(my_array);
}
```

## Doing this with generics

This also works with generics, with C++ ensuring that there are appropriate destructors and constructors for all primitive types. The following code shows an example of this where we use a generic function to allocate space on the heap, and a generic procedure to free that allocation. Notice that we can use this to allocate space for the struct, but also allocate space for an integer.

```cpp {15-28,30-37,41,42,47,48}
#include <cstdlib>
#include <string>

using std::string;

/**
* A test struct that contains a string... we need to 
* make sure that it's constructor is called.
*/
struct my_test_struct
{
    string name;
};

template <typename T>
T* make_on_heap(T init)
{
    // Allocate memory
    T *result = (T *)malloc(sizeof(T));
    // Call constructor
    new(result) T();

    // Copy in data
    *result = init;

    // Return pointer
    return result;
}

template <typename T>
void clear_from_heap(T *ptr)
{
    // Call destructor
    ptr->~T();
    // Free memory allocation
    free(ptr);
}

int main()
{
    my_test_struct *data = make_on_heap<my_test_struct>((my_test_struct){ "Hello"});
    int *p = make_on_heap<int>(5);

    printf("p -> %d\n", *p);
    printf("data->name = %s\n", data->name.c_str());

    clear_from_heap(p);
    clear_from_heap(data);

    return 0;
}
```

:::tip[More details?]
Want to explore this more? Read this [discussion](https://cplusplus.com/forum/general/163661/) for a range of ways to deal with the issues presented here.
:::

:::caution
Remember that we are only doing this so that we can explore dynamic memory management. In general, you should use the standard `new` and `delete` operators in C++ and use the built-in libraries to manage cases where you want a dynamic array.
:::
