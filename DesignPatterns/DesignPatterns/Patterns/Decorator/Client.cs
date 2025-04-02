using Patterns.Decorator.Example1;

namespace Patterns.Decorator;

public class Client
{
    public void Run()
    {
        IComponent component = new Component();
        component.Operation();

        Console.WriteLine();
        IComponent decoratorA = new DecoratorA(component);
        decoratorA.Operation();

        Console.WriteLine();
        IComponent decoratorB = new DecoratorB(decoratorA);
        decoratorB.Operation();
    }
}
