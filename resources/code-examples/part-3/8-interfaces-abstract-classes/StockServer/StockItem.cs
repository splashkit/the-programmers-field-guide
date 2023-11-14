using System;
using SplashKitSDK;

namespace StockManagement
{
  public class StockItem : IComparable<StockItem>
  {
    public decimal Cost { get; set; }
    public string Name { get; set; }
    public int ID { get; set; }

    public StockItem(int id, string name, decimal cost)
    {
      Cost = cost;
      Name = name;
      ID = id;
    }

    public string ToJSON()
    {
      string data = "{";
      data += $"\t\"name\": {Name},\n";
      data += $"\t\"cost\": \"{Cost}\",\n";
      data += $"\t\"id\": \"{ID}\"\n";
      data += "}";

      return data;
    }

    public int CompareTo(StockItem that)
    {
      // return (int)(Cost - that.Cost);

      // if ( Cost > that.Cost ) return 1;
      // else if ( Cost < that.Cost ) return -1;
      // else return 0;

      return Cost.CompareTo(that.Cost);
    }
  }
}