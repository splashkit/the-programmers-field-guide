---
title: Working with C-Strings
---

To wrap up this section, let's look at how strings works. While many of these features are likely to be handled by the language and its libraries, knowing how this works will help you understand what is happening when you perform operations with text. Many of these operations are time-consuming as you are working with arrays, so understanding their operations can help you optimise your code, thereby improving its speed and efficiency.

As you will recall, strings are just character arrays with a null terminator to mark the end of the string. Using this knowledge, let's think about how a function like SplashKit's `write_line` might work. We could code something like this ourselves in a program using the following steps:

* **Step 1**: We allocate a block of memory to store the string
* **Step 2**: We assign the string literal "Hello" to the string my_string (note that string literals automatically add a null terminator)
* **Step 3**: We print the string to the terminal by looping through the array until we reach the null terminator, and printing each character.

```c
#include <stdio.h>
const int MAX_STRING_LENGTH = 50;

int main(void)
{
  char my_string[MAX_STRING_LENGTH] = "Hello";

  // use a loop to print each character in the string
  for (int i = 0; my_string[i] != '\0' && i < MAX_STRING_LENGTH; i++)
  {
    printf("%c", my_string[i]);
  }

  return 0;
}
```

This is how the string function operate. Notice that we have two parts to the condition in the for loop, `my_string[i] != '\0'` is looking to end when the null terminator is encountered while `i < MAX_STRING_LENGTH` is making sure we do not got past the end of the string.

:::caution

If a C function accepts a char[] and not its size, it cannot be checking if it goes past the end of the string in memory.

Notice in the above code we have the two conditions in the for loop. We are checking for the null terminator, but also checking that we do not go past the array length.

:::

## String concatenation

There are many actions that you can perform with arrays, but let's have a look at how something like string concatenation would work. In C there are a whole range of functions to manipulate c-strings, but it is good to think about how they work.

```c
int main(void) 
{
  char first_name[] = "John";
  char last_name[] = "Smith";
  char full_name[50] = first_name + " " + last_name;
}
```

The above program looks simple right? It looks as though we simply take the two character arrays and create the final result "John Smith", and indeed it's a common operation when working with strings to concatenate them - but there's a catch. We aren't including using a string data type, and we can't simply add two arrays together, or string literals and character arrays.

The way to concatenate two strings in C without any libraries is quite simple, and entails looping through the first string, and copying each character into the new string, and then looping through the second string and copying each character into the new string. Let's take a look at how we can manually concatenate two names together (with a space in between):

```c
#include <stdio.h>

const int FULL_NAME_LEN = 50;

int main(void)
{
  // create two char arrays to store the first and last name
  char first_name[] = "Jo";
  char last_name[] = "Smith";

  // create a new char array to store the full name
  char full_name[FULL_NAME_LEN];

  // copy the first name into the full name, character by character
  int i = 0;
  while (first_name[i] != '\0')
  {
    full_name[i] = first_name[i];
    i++;
  }

  // add a space to the full name
  // using i++ here is a clever way to first read the value of i,
  // and then increment it as we need it later on.
  full_name[i++] = ' ';

  // Assign each letter of last name to the end of the full name
  int j = 0;
  while (last_name[j] != '\0')
  {
    full_name[i + j] = last_name[j];
    j++;
  }

  // don't forget the null terminator!
  full_name[j+i] = '\0';

  printf("%s\n", full_name);

  return 0;
}
```

This kind of thinking is needed whenever you want to concatenate any arrays, no matter what data they contain.
