namespace Patterns.Strategy.Example1;

public class KnifeBehavior : IWeaponBehavior
{
    public string UseWeapon()
    {
        return "I use knife as my weapon";
    }
}
