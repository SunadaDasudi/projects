using Patterns.Strategy.Example1;

namespace Patterns.Strategy;

public class Client
{
   public void Run()
    {
        King king = new(new SwordBehavior());
        Console.WriteLine("King: " + king.weaponBehavior.UseWeapon());
        king = new(new AxeBehavior());
        Console.WriteLine("King: " + king.weaponBehavior.UseWeapon());
        king = new(new BowsAndArrowBehavior());
        Console.WriteLine("King: " + king.weaponBehavior.UseWeapon());
        king = new(new KnifeBehavior());
        Console.WriteLine("King: " + king.weaponBehavior.UseWeapon());
    }
}
