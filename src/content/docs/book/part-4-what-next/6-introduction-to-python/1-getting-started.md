---
title: Getting Started
---

Python stands out for its simplicity and readability, making it an excellent starting point for those new to programming and a powerful tool for experienced developers. With its vast community support and popularity across various fields, Python is particularly well-suited for applications in web development, data science, artificial intelligence and networking.

To begin writing Python code, you'll need to install Python, set up your development environment, and run your first Python script.

## Install Python

Python installation is straightforward. While macOS and Linux usually come with Python pre-installed, Windows will require manual installation unless you've done so previously. No matter what operating system you use, it's a good habit to ensure you're using the latest version:

1. Visit the official Python website ([python.org/downloads/](https://www.python.org/downloads/)) and download the latest Python version.
1. Run the installer. If you're on Windows, make sure to select the "Add Python to PATH" checkbox to make Python accessible from the command line.
1. Verify the installation by opening a command prompt or terminal and typing `python --version`.

### Install Python Extensions in VS Code

To enhance your Python development experience, you can install Python extensions in Visual Studio Code (VS Code). These extensions provide additional features and tools for writing, debugging, and testing Python code.

Here's how you can install Python extensions in VS Code:

1. Open VS Code and go to the Extensions view by clicking on the square icon on the left sidebar or by pressing `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS).
2. In the search bar, type "Python" and press Enter.
3. Look for the official "Python" extension by Microsoft and click on the "Install" button.
4. Once the installation is complete, you can start using the Python extension in VS Code.

By installing the Python extension, you'll have access to features like IntelliSense for code completion, linting for identifying and fixing errors, debugging tools, and more.

Note: Make sure you have Python installed on your system before installing the Python extension in VS Code.

For more information on using the Python extension in VS Code, refer to the official [VS Code documentation](https://code.visualstudio.com/docs/languages/python).

## Key Differences from C++

Transitioning from C++ to Python, you'll notice several key differences aimed at simplifying the coding process:

### Syntax

Python eliminates the need for semicolons (`;`) at the end of statements and uses indentation instead of curly braces (`{}`) to define code blocks. This not only makes the code cleaner but enforces readability.

C++

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 5;
    int y = 10;
    if (x < y) {
        printf("x is less than y");
    }
    return 0;
}
```

Python

```py
x = 5
y = 10
if x < y:
    print("x is less than y")
```

### Dynamic Typing

Unlike C++, Python is dynamically typed, meaning you don't need to declare variable types explicitly. Python determines types at runtime, which simplifies variable declarations but requires attention to avoid type mismatches.

C++

```cpp

#include <iostream>
using namespace std;

int main() {
    int myInt = 5;            // explicitly declaring an integer
    double myDouble = 5.5;    // explicitly declaring a double

    // Changing types requires re-declaration or casting
    myInt = static_cast<int>(myDouble); // explicit type casting
    printf("%d", myInt);
    return 0;
}
```

Python

```python

myInt = 5           # int
myDouble = 5.5      # float
myInt = myDouble    # dynamically changes type from int to float
print(myInt)        # No need for explicit casting
```

### Variables and Data Types

Python's fundamental data types include `int`, `float`, `str`, and `bool`. Variables are assigned using the equals (`=`) sign, with the type inferred from the value:

### Basic Operators

Operators in Python are similar to those in C++, with logical operations using words (`and`, `or`, `not`) instead of symbols:

- **Arithmetic**: `+`, `-`, `*`, `/`, `%` (remainder), `**` (exponent).
- **Comparison**: `==`, `!=`, `<`, `>`, `<=`, `>=`.
- **Logical**: `and`, `or`, `not`.
- **Assignment**: `=`, `+=`, `-=`, `*=`, `/=`.

C++

```cpp
#include <iostream>
using namespace std;

int main() {
    int sum = 5 + 3;    // 8
    int diff = 5 - 3;   // 2

    // Logical AND, OR, NOT
    bool result = (5 > 3) && (5 != 4); // true (1)
    result = (5 < 3) || (5 == 5);      // true (1)
    result = !(5 == 5);                // false (0)
    printf("Sum: %d, Diff: %d, Result: %d", sum, diff, result);
    return 0;
}
```

Python

```python
sum = 5 + 3     # 8
diff = 5 - 3    # 2

# Logical AND, OR, NOT
result = (5 > 3) and (5 != 4)  # True
result = (5 < 3) or (5 == 5)   # True
result = not(5 == 5)           # False
print(f"Sum: {sum}, Diff: {diff}, Result: {result}")
```

This is just a basic overview to get you started, we will go more in depth later on.

## Create and Test Functions

Start with basic functions to get a feel for Python syntax and functionality:

```python
def add_numbers(num1, num2):
    return num1 + num2

result = add_numbers(3, 4)
print(f"The result is {result}")

# Output:
>>> The result is 7
```

## Running Your Application

Execute your Python script in VS Code by right-clicking the editor and selecting `Run Python File` or using the shortcut `F5`. The output will appear in the integrated terminal, marking your first successful Python code execution in VS Code.

## Understanding The Main Function

In some Python scripts, you might see a line like `if __name__ == '__main__':`. This line checks to see if your script is the main program being executed or if it's being imported as a module into another script. When your script is run directly, the `__name__` variable is set to `'__main__'`, triggering the code within this block to execute. This is a common practice in Python to designate the starting point of a script.

For instance, if you have a function called `add_numbers` that adds two numbers, and you want to test it within the same script, you would use this `if` block as follows:

```python
def add_numbers(num1, num2):
    return num1 + num2

if __name__ == '__main__':
    result = add_numbers(3, 4)
    print(f"The result is {result}")

# Output:
>>> The result is 7
```

Here, the script runs `add_numbers` with 3 and 4 as arguments and prints the result, but only if the script is executed directly. This setup helps in organizing your code, allowing you to include tests or executable sections that run only when the script is not being imported elsewhere. It's a straightforward yet effective way to manage the flow of your Python programs.
