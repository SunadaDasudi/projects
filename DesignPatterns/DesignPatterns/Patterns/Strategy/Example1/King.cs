namespace Patterns.Strategy.Example1;

public class King : Character
{
    public King(IWeaponBehavior weaponBehavior) : base(weaponBehavior)
    {
        Fight();
    }
}
