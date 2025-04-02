namespace Patterns.Observer.Example1;

public class ObserverB : IObserver
{
    public void Update(ISubject subjectObject)
    {
        Console.WriteLine($"ObserverB: Subject state changed: {subjectObject.StateValue}");
    }
}
