#include "splashkit.h"

/**
 * @struct text_message
 * @brief Represents a simple text message with a sender and message text.
 * 
 * @field text The content of the message.
 * @field sender The sender of the message.
 */
struct text_message
{
  string text;   ///< The content of the message.
  string sender; ///< The sender of the message.

  /**
   * @brief Constructs a text_message with the given sender and text.
   * 
   * @param sender The sender of the message.
   * @param text The content of the message.
   */
  text_message(string sender, string text)
  {
    // within the struct, this refers to value we are called on
    // here we need to use this-> to refer to the fields as
    // the parameters have the same name
    this->sender = sender;
    this->text = text;
  }

  /**
   * @brief Constructs an empty text_message with no sender or text.
   */
  text_message()
  {
    // A default constructor lets you initialise the value when no parameters are passed
    sender = "";
    text = "";
  }

  /**
   * @brief Prints the message in the format: "Message from <sender>: <text>"
   */
  void print()
  {
    // You can access the fields directly here - also accessible via this->field
    write_line("Message from " + sender + ": " + text);
  }
};


/**
 * @brief Entry point for the message program. Demonstrates usage of text_message struct.
 */
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

//   text_message m1("John", "Hello");
//   m1.sender = "Mary";
//   m1.print();

  return 0;
}
