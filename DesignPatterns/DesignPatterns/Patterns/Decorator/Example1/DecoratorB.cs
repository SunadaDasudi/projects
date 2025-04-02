namespace Patterns.Decorator.Example1;

public class DecoratorB(IComponent component) : BaseDecorator(component)
{
    public override void Operation()
    {
        base.Operation();
        Console.WriteLine("Decorator B operation");
    }
}
