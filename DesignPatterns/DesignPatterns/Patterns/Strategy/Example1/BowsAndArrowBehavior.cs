namespace Patterns.Strategy.Example1;

public class BowsAndArrowBehavior : IWeaponBehavior
{
    public string UseWeapon()
    {
        return "I use bows and arrows as my weapon";
    }
}
