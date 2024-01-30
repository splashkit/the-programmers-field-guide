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

  public static int[] Insert(int[] data, int position, int value)
  {
    int[] newArray = new int[data.Length + 1];

    for (int i = 0; i < position; i++)
    {
      newArray[i] = data[i];
    }

    newArray[position] = value;

    for (int i = position + 1; i < newArray.Length; i++)
    {
      newArray[i] = data[i-1];
    }

    return newArray;
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