---
title: Abstract Methods & Classes
banner:
    content: |
        Advanced topic! You may want to skip this and return later...
---

Inheritance and polymorphism open up some new opportunities for different ways to combine code within a program. As we saw with [polymorphism](/book/part-2-organised-code/4-member-functions/move-0-panorama/04-polymorphism), we have the ability to refer to objects of a child class anywhere we have a reference, or pointer, to the parent class. This can be a very useful feature, allowing you to interact with objects in a general manner without having to worry about the specifics of the kind of objects involved.

One limitation with this is that you can only access features that are coded into the parent class. These features may be overridden by child classes, but any new features added cannot be accessed as they are not present in the parent class (which is the reference being used). However, in some cases we may have base classes where we cannot implement features that we want to be able to access on all child classes. For example, in a drawing package we may have a `shape` class that acts as the base class for shapes that the user can draw on to the screen. We know that we want to draw the shapes, but we cannot implement this in the shape class. It is something we want to say that all shapes can do, but it is also something that can only be implemented in the specific child classes.

Abstract methods provide this capability. An abstract method is a placeholder declared in a base class that indicates all child classes must implement this method. You can think of this as a promise - the base class is saying "I promise that all objects will have this method - but I don't have an implementation of this here".

One implication of a class having an abstract method is that you can no longer create an object from this class. Instead, the class must be marked as *abstract*. Child classes that inherit from the abstract class must then provide an implementation for each abstract method, or they must be declared as abstract as well. In this way the language is able to guarantee that all objects will eventually have the required methods, even when called via a reference where the method is abstract (only a promise).

![Illustration of abstract classes](./images/abstract.png)

:::note

- In C++ `virtual ... = 0;` is used to mark a method as abstract, with the `= 0` indicating that there is no implementation of this method for this class. These are known as *pure virtual* methods in C++, but more generally as abstract methods.
- If a C++ class has one abstract/pure virtual method, then the class is abstract. There is no indication on the class that it is abstract, but you will not be able to create objects from this class.
- Child classes must override the abstract methods if you want to use them to create objects.
- References or pointers to the base class are still a useful way of referring to any object that inherits from this base class.

:::

### Example

The following example illustrates the creation of an abstract `shape` class, and two derived classes `circle_shape` and `rectangle_shape`. Each shape has a fill color and can be drawn. We cannot implement the draw method in the shape class so it is marked as abstract. The circle and rectangle classes inherit from shape, and provide specific implementations of the draw method along with fields needed to capture the required data.

In `main` we can code an array of shapes and have these refer to objects created from the rectangle and circle classes. When we draw these, the object knows what it is, so the rectangles will draw using the rectangle code and the circles will use the circle code.

```cpp
#include "splashkit.h"

using std::to_string;

/**
 * @brief A shape is an abstract class that represents a geometric shape.
 * 
 * All shapes can be drawn, but the specifics of how are left to derived classes.
 */
class shape
{
    public:
        /**
         * @brief The color used to fill the shape when drawn.
         */
        color fill_color = COLOR_BLUE;

        /**
         * @brief Virtual destructor to ensure proper clean up of derived classes.
         *
         * The destructor is called when objects of the class are deleted. Making
         * this virtual allows the language to ensure that objects of child
         * classes are cleaned up correctly.
         */
        virtual ~shape() = default;

        /**
         * 
         * @brief Draws the shape on the screen.
         * 
         * This method is pure virtual, meaning derived classes must implement it.
         */
        virtual void draw() const = 0;
};

/**
 * @brief A circle is a shape that can be drawn.
 * 
 * It has a center point and a radius.
 */
class circle_shape : public shape
{
    private:
        point_2d center; // The center of the circle
        double radius;   // The radius of the circle

    public:
        /**
         * @brief Constructs a circle with a specific center and radius.
         * @param center The center point of the circle.
         * @param radius The radius of the circle.
         */
        circle_shape(point_2d center, double radius) {
            this->center = center;
            this->radius = radius;
        }  

        /**
         * @brief Draws the circle on the screen.
         * 
         * This method overrides the draw method from the shape class.
         */
        void draw() const override
        {
            write_line("Drawing a circle");
            fill_circle(fill_color, center.x, center.y, radius);
        }
};

class rectangle_shape : public shape
{
    private:
        double x, y; // The top-left corner of the rectangle
        double width, height; // The dimensions of the rectangle

    public:
        /**
         * @brief Constructs a rectangle with a specific position and size.
         * @param x The x-coordinate of the top-left corner.
         * @param y The y-coordinate of the top-left corner.
         * @param width The width of the rectangle.
         * @param height The height of the rectangle.
         */
        rectangle_shape(double x, double y, double width, double height)
        {
            this->x = x;
            this->y = y;
            this->width = width;
            this->height = height;
        }

        /**
         * @brief Draws the rectangle on the screen.
         */
        void draw() const override
        {
            write_line("Drawing a rectangle");
            fill_rectangle(fill_color, x, y, width, height);
        }
};

int main()
{    
    // Create an array of two shape pointers
    shape *shapes[2];

    shapes[0] = new circle_shape(point_2d{400, 300}, 75);
    shapes[1] = new rectangle_shape(100, 100, 150, 250);
    
    // We can change the fill color of any shape
    shapes[0]->fill_color = COLOR_GREEN;
    shapes[1]->fill_color = COLOR_ORANGE;
    
    open_window("Abstract Shape Example", 800, 600);
    clear_screen(COLOR_WHITE);

    // Draw all shapes
    for(int i = 0; i < 2; i++)
    {
        // The object determines which draw method is actually called
        shapes[i]->draw();
    }

    refresh_screen();
    delay(5000);

    // Clean up memory
    for(int i = 0; i < 2; i++)
    {
        delete shapes[i];
    }
    
    return 0;
}
```
