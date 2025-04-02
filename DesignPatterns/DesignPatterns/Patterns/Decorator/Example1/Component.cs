namespace Patterns.Decorator.Example1;

public class Component : IComponent
{
    public void Operation()
    {
        Console.WriteLine("Concrete implementation");
    }
}
