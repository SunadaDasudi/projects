using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

internal class Program
{
    private static void Main(string[] args)
    {
        InitializeApplication();

        Console.WriteLine("Strategy Pattern");
        var strategyClinet = new Patterns.Strategy.Client();
        strategyClinet.Run();

        Console.WriteLine("\nObserver Pattern");
        var observerClient = new Patterns.Observer.Client();
        observerClient.Run();

        Console.WriteLine("\nDecorator Pattern");
        var decoratorClient = new Patterns.Decorator.Client();
        decoratorClient.Run();

        Console.ReadLine();
    }

    private static void InitializeApplication()
    {
        // Initialize the application
        IHost host = Host.CreateDefaultBuilder()
            .ConfigureServices((context, services) =>
            {
                services.AddScoped<Patterns.Strategy.Client>();
            })
            .Build();
    }
}
