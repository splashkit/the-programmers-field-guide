---
title: Message Objects
---

To play around with the idea of member functions, let's build a simple text message object. A message object will contain some text which it can print to the terminal.

```
Struct: Text Message
Fields:
 - text: the string text for the message
 - sender: the name of the person sending the message
Constructors:
  - Accept text and sender and initialise within the message
  - Default constructor sets both to empty string.
Methods:
 - print: outputs the details of the message to the terminal.
```

In main we can then create a few text message objects, and get them to print their details to the terminal.

:::caution

If you use SplashKit for this, it has a `message` type used in its networking code. So you will need to name your struct something like `text_message`.

:::

## Creating your struct

To start this program, you will need to declare the struct, and code within this the two fields as you would have before. You now have the struct and its data, which we can extend with the two constructors and the print method.

We will provide two [constructors](../../1-concepts/1-1-constructor) in the struct, one that will accept parameters for the text and sender and initialise these values within the struct and a default constructor that will initialise both the text and sender to empty strings. When implementing these remember that the constructor is a special method that has the same name as the struct.

Lastly, add the `print` [method](../../1-concepts/1-2-methods). This should output the message in any format you desire, as long as it shows the sender and the text. As this is coded within the method, it will have access to sender and text which are also coded within the struct.

## Testing your struct

Now we can add in a main to test out this new code. Try creating different message objects, some on the stack and some on the heap (remember to delete them). Get them to print out their messages. For example, the following is part of the test I created for this:

```cpp
int main()
{
  text_message m1("John", "Hello");
  text_message m2("Mary", "Hi");
  text_message m3("John", "How are you?");
  text_message m4("Mary", "I'm good thanks");
  text_message m5;

  text_message *m6 = new text_message("John", "I'm glad to hear it");

  m1.print();
  m2.print();
  m3.print();
  m4.print();
  m5.print();
  m6->print();

  delete m6;
}
```

When you get this working, focus on the mechanics of how this comes together. Play around with using `this->` within the struct. Try changing the sender or text of a message and printing it again.
