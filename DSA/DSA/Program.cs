// See https://aka.ms/new-console-template for more information
using DSA.ArraysAndStrings;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Welcome to the world of DSA!!");

        //StringMethods();
        ArrayMethods();
    }

    private static void ArrayMethods()
    {
        bool isTargetExists = Arrays.TwoSum(new int[] { 1, 2, 4, 6, 8, 9, 14, 15 }, 50);
        Console.WriteLine($"Is target exists: {isTargetExists}");
    }

    private static void StringMethods()
    {
        while (true)
        {
            Console.WriteLine("Enter a string to check if it is a palindrome:");
            var input = Console.ReadLine();
            bool isPalindrome = Strings.IsPalindrome(input);
            Console.WriteLine($"Is the string '{input}' a palindrome? {isPalindrome}");
        }
    }
}