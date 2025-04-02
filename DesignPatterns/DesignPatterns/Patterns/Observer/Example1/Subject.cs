namespace Patterns.Observer.Example1;

public class Subject : ISubject
{
    private List<IObserver> _observers;

    private int stateValue;
    public int StateValue { get => stateValue; }

    public void NotifyObservers()
    {
        foreach (var observer in _observers)
        {
            observer.Update(this);
        }
    }

    public void RegisterObserver(IObserver observer)
    {
        _observers.Add(observer);
    }

    public void RemoveObserver(IObserver observer)
    {
        _observers.Remove(observer);
    }

    public Subject()
    {
        _observers = new List<IObserver>();
    }

    public void DoSomething()
    {
        // Do something
        stateValue++;
        NotifyObservers();
    }
}
