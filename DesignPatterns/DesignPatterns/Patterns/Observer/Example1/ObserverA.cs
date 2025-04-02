namespace Patterns.Observer.Example1;

public class ObserverA : IObserver
{
    public void Update(ISubject subjectObject)
    {
        Console.WriteLine($"ObserverA: Subject state changed: {subjectObject.StateValue}");
    }
}
