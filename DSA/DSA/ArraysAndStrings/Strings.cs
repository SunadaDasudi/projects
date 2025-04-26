using System.Globalization;

namespace DSA.ArraysAndStrings;

internal static class Strings
{
    public static bool IsPalindrome(string str)
    {
        int left = 0;
        int right = str.Length - 1;
        while (left <= right)
        {
            if (str[left] == str[right])
            {
                left++;
                right--;
            }
            else return false;
        }
        return true;
    }

    public static char[] ReverseString(char[] s)
    {
        int left = 0;
        int right = s.Length - 1;

        while (left < right)
        {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
        return s;
    }

    public static int[] SortedSquares(int[] nums)
    {
        int[] result = [];

        return result;
    }

}
