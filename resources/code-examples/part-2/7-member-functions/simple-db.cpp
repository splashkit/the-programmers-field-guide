#include "dynamic-array.hpp"
#include "splashkit.h"

using std::to_string;

struct stock
{
  string symbol;
  dynamic_array<int> *prices;

  stock(string symbol)
  {
    this->symbol = symbol;
    this->prices = new dynamic_array<int>(10, 0);
  }

  ~stock()
  {
    delete prices;
  }

  void add_price(int price)
  {
    if(!prices->add(price))
    {
      write_line("Failed to add price");
    }
  }

  void print()
  {
    printf("Stock: %s\n", this->symbol.c_str());
    printf("Prices:\n");
    for(int i = 0; i < prices->size; i++)
    {
      printf("  %d\n", (*prices)[i]);
    }
  }

  int max_price()
  {
    if (prices->size == 0)
    {
      return 0;
    }

    int result = (*prices)[0];
    for(int i = 1; i < prices->size; i++)
    {
      int price = (*prices)[i];
      if (price > result)
      {
        result = price;
      }
    }
    return result;
  }

  void show_visualisation()
  {
    int width = 800;
    int height = 600;
    int margin = 10;
    int bar_width = (width - (margin * 2)) / prices->size;
    int max = max_price();

    open_window("Stock Visualisation", width, height);

    clear_screen(COLOR_WHITE);

    double height_scale = (height - (margin * 2)) / (double)max;

    for(int i = 0; i < prices->size; i++)
    {
      int price = (*prices)[i];
      double price_height = price * height_scale;

      int x = margin + (i * bar_width);
      int y = height - margin - price_height;
      fill_rectangle(COLOR_BLUE, x, y, bar_width, price_height);
    }

    refresh_screen(60);
    delay(5000);
  }
};

int main()
{
  stock s = stock("TEST");
  
  for(int i = 0; i < 20; i++)
  {
    s.add_price(rnd(100));
  }  

  s.print();
  s.show_visualisation();
}
