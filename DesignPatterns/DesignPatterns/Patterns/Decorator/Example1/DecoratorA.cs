namespace Patterns.Decorator.Example1;

public class DecoratorA(IComponent component) : BaseDecorator(component)
{
    public override void Operation()
    {
        base.Operation();
        Console.WriteLine("Decorator A operation");
    }
}
