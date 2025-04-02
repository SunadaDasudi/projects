namespace Patterns.Decorator.Example1;

public abstract class BaseDecorator : IComponent
{
    private IComponent _component;

    protected BaseDecorator(IComponent component)
    {
        _component = component;
    }

    protected void SetDecorator(IComponent component)
    {
        _component = component;
    }

    public virtual void Operation()
    {
        Console.WriteLine("Base decorator implementation");
    }
}
