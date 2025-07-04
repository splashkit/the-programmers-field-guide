using System;

class Program
{
  public static int ReadInteger(string prompt)
  {
    while (true)
    {
      try
      {
        Console.Write(prompt);
        return Convert.ToInt32(Console.ReadLine());
      }
      catch (Exception e)
      {
        Console.WriteLine(e.Message);
      }
    }
  }

  public static void Main()
  {
    int temperature_0;
    int temperature_1;
    int temperature_2;
    int temperature_3;
    int temperature_4;

    int temperature_0 = ReadInteger("Enter temperature for the day: ");
    int temperature_1 = ReadInteger("Enter temperature for the day: ");
    int temperature_2 = ReadInteger("Enter temperature for the day: ");
    int temperature_3 = ReadInteger("Enter temperature for the day: ");
    int temperature_4 = ReadInteger("Enter temperature for the day: ");

    Console.WriteLine("Temperature on day " + 0 + "is " + temperature_0);
    Console.WriteLine("Temperature on day " + 1 + "is " + temperature_1);
    Console.WriteLine("Temperature on day " + 2 + "is " + temperature_2);
    Console.WriteLine("Temperature on day " + 3 + "is " + temperature_3);
    Console.WriteLine("Temperature on day " + 4 + "is " + temperature_4);
    Console.WriteLine("Temperature on day " + 5 + "is " + temperature_5);
  }
}
