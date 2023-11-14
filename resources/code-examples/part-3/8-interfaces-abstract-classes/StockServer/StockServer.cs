using System;
using SplashKitSDK;

namespace StockManagement
{
  public class StockServer
  {
    /// <summary>
    /// Indicates if the server should keep running. This allows
    /// people to visit the /stop uri to kill the server.
    /// </summary>
    private bool _running = true;

    /// <summary>
    /// The web server used to process client requests.
    /// </summary>
    private WebServer _server = new WebServer(8080);

    private StockManager _stock;

    /// <summary>
    /// constructer for StockServer
    /// </summary>
    public StockServer(StockManager stock)
    {
      _stock = stock;
    }

    /// <summary>
    /// Stops the server.
    /// </summary>
    public void StopServer()
    {
      _running = false;
    }

    /// <summary>
    /// Runs the web server, listening to requests on port 8080.
    /// </summary>
    public void Run()
    {
      while (_running)
      {
        SplashKit.ProcessEvents();

        if (SplashKit.HasIncomingRequests(_server))
        {
          HttpRequest request = _server.NextWebRequest;
          HandleRequest(request);

          SplashKit.Delay(150);
        }
      }
    }

    /// <summary>
    /// Handles the incomming request, and sends it a response.
    /// </summary>
    /// <param name="r"></param>
    void HandleRequest(HttpRequest r)
    {
      try
      {
        if (r.IsGetRequestFor("/") || r.IsGetRequestFor("/index.html"))
        {
          r.SendHtmlFileResponse("index.html");
        }
        else if (r.IsGetRequestFor("/index.js"))
        {
          r.SendJavascriptFileResponse("index.js");
        }
        else if (r.IsGetRequestFor("/stop"))
        {
          r.SendResponse("Server stopped");
          StopServer();
        }
        else if (r.IsGetRequestFor("/search"))
        {
          int page = 1;
          Int32.TryParse(r.QueryParameter("page", "1"), out page);
          r.SendResponse(_stock.Search(r.QueryParameter("sort", "cost"), page));
        }
        else
        {
          Console.WriteLine("Recieved connection");
          r.SendResponse(HttpStatusCode.HttpStatusBadRequest);
        }
      }
      catch
      {
        r.SendResponse(HttpStatusCode.HttpStatusInternalServerError);
      }
    }
  }
}
