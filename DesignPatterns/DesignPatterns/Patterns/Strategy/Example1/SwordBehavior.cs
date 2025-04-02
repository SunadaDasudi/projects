namespace Patterns.Strategy.Example1;

public class SwordBehavior : IWeaponBehavior
{
    public string UseWeapon()
    {
        return "I use sword as my weapon";
    }
}
