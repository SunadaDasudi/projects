namespace DSA.ArraysAndStrings;

internal class Arrays
{
    //Given a sorted array of unique integers and a target integer,
    //return true if there exists a pair of numbers that sum to target, false otherwise.
    //This problem is similar to Two Sum. (In Two Sum, the input is not sorted).
    //For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.
    public static bool TwoSum(int[] arr, int target)
    {
        int left = 0;
        int right = arr.Length - 1;
        while (left < right)
        {
            int sum = arr[left] + arr[right];

            if (sum == target) return true;

            if (sum > target) right--;
            else left++;
        }

        return false;
    }
}
