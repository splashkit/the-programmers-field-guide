using System;
using SplashKitSDK;
using System.Collections.Generic;
using System.IO;

namespace StockManagement
{
  public class StockManager
  {
    private const int RANGE = 10;
    private List<StockItem> _items = new List<StockItem>();

    public StockManager()
    {
      PopulateStore();
    }
    public void RemoveItem(StockItem itemToRemove)
    {
      _items.Remove(itemToRemove);
    }

    private void PopulateStore()
    {
      string line = "";
      int count = 0;
      try
      {
        using (StreamReader reader = new StreamReader(new FileStream("cars.csv", FileMode.Open)))
        {
          // Read first line to skip the first line
          reader.ReadLine();

          line = reader.ReadLine();
          while (line != null)
          {
            try
            {
              _items.Add(new StockItem(count, line, SplashKit.Rnd(100000)));
              count++;
            }
            catch (Exception e)
            {
              Console.WriteLine(e.Message);
            }
            line = reader.ReadLine();
          }
        }
      }
      catch
      {
        Console.WriteLine("Unable to open file");
      }
    }

    public string Search(string sortBy, int pageNum)
    {
      _items.Sort( SortByComparisonFor(sortBy) );
      List<StockItem> itemsFromRange = _items.GetRange(pageNum * RANGE - RANGE, RANGE);
      return ToJSON(itemsFromRange);
    }

    public string ToJSON(List<StockItem> items)
    {
      string data = "[\n";

      for (int i = 0; i < items.Count; i++)
      {
        data += items[i].ToJSON();
        data += items.Count - 1 != i ? ",\n" : "";
      }
      data += "\n]";
      return data;
    }

    public string ToJSON()
    {
      return ToJSON(_items);
    }

    private int CompareByCost(StockItem s1, StockItem s2)
    {
      return s1.Cost.CompareTo(s2.Cost);
    }

    /// <summary>
    /// Handles the incomming search string, and turns it into a delegate.
    /// Default is search by cost.
    /// </summary>
    /// <param name="order"></param>
    private Comparison<StockItem> SortByComparisonFor(string order)
    {
      // switch (order)
      // {
      //   case "name":
      //     return (s1, s2) => s1.Name.CompareTo(s2.Name);
      //   case "id":
      //     return (s1, s2) => s1.ID.CompareTo(s2.ID);
      //   default:
      //     return (s1, s2) => s1.Cost.CompareTo(s2.Cost);
      // }

      return (s1, s2) => {
        switch (order)
          {
            case "name":
              return s1.Name.CompareTo(s2.Name);
            case "id":
              return s1.ID.CompareTo(s2.ID);
            default:
              return s1.Cost.CompareTo(s2.Cost);
          }
        };
    }

  }
}