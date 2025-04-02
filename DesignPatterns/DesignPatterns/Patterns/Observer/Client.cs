using Patterns.Observer.Example1;

namespace Patterns.Observer;

public class Client
{
    public void Run()
    {
        Subject subject = new();
        IObserver observerA = new ObserverA();
        IObserver observerB = new ObserverB();
        subject.RegisterObserver(observerA);
        subject.RegisterObserver(observerB);
        subject.DoSomething();
    }
}
