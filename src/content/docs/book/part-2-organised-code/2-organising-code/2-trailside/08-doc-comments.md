---
title: Documentation Comments
---

Now that we can create reusable functions and procedures, we need a way to communicate to others the details on what the function or procedure is for and how to use it.

Many programming languages include the ability to add specifically formatted comments designed to help communicate these details. These allow you to provide a short summary for each function or procedure, along with details on its parameters and return values.

## In C/C++

Documentation comments in C/C++ use the comment block syntax that starts with a `/**` and ends with a `*/`. Within this block, you start by providing a summary of the function or procedure that follows, and then outline the parameters using the format `@param name description`. For functions, you end with a comment that is formatted `@returns description`, to describe what the function returns.

If you add these comments to your code in the header file, or above the declaration where ever it is, this will be picked up by VS Code and shown to you through the IntelliSense.

The following examples show how to comment a function and a procedure.

```cpp
/**
 * Give the user change of the indicated amount.
 * 
 * @param change_value the amount of change to give
*/
void give_change(int change_value);

/**
 * Determine if a point is within the area of a circle.
 *
 * @param pt_x the x coordinate of the point
 * @param pt_y the y coordinate of the point
 * @param c_x the x coordinate of the center of the circle
 * @param c_y the y coordinate of the center of the circle
 * @param c_radius the radius of the circle
 * @return true when the point is in the circle, otherwise false.
*/
bool pount_in_circle(double pt_x, double pt_y, double c_x, double c_y, double c_radius);
```

:::tip[Summary]

Documentation comments help communicate the purpose and details of a function or procedure. Add this to each function or procedure to help communicate how it works.

:::
