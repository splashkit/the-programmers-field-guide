using System;
using SplashKitSDK;

namespace StockManagement
{
    public class Program
    {
        public static void Main()
        {
            StockManager stockManager = new StockManager();
            StockServer server = new StockServer(stockManager);
            server.Run();
        }
    }
}

