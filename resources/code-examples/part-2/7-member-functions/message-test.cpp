#include "splashkit.h"

struct text_message
{
  string text;
  string sender;

  text_message(string sender, string text)
  {
    this->sender = sender;
    this->text = text;
  }

  text_message()
  {
    this->sender = "";
    this->text = "";
  }

  void print()
  {
    write_line("Message from " + sender + ": " + text);
  }
};


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