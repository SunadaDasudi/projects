namespace Patterns.Strategy.Example1;

public abstract class Character(IWeaponBehavior weaponBehavior)
{
    public IWeaponBehavior weaponBehavior = weaponBehavior;

    public void SetWeapon(IWeaponBehavior weaponBehavior)
    {
        this.weaponBehavior = weaponBehavior;
    }
    public void Fight()
    {
        weaponBehavior.UseWeapon();
    }
}
