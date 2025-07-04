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
    int[] temperatures = new int[ReadInteger("How many temps???")];

    for(int i = 0; i < temperatures.Length; i++)
    {
        temperatures[i] = ReadInteger("Enter temperature for the day: ");
    }

    for(int i = 0; i < temperatures.Length; i++)
    {
        Console.WriteLine("Temperature on day " + i + " is " + temperatures[i]);
    }
  }
}