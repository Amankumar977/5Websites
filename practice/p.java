import java.util.*;

class p {

	public static void main(String[] args) {
		int nums[] = { 4, 5, 6, 7, 8, 9, 10 , 11, 14, 15, 52, 89};
		int target = 6;
		int n = nums.length;
		int start = 0;
		int end = n - 1;
		System.out.println(binarySearch(nums, target, start, end));
	}

	private static int binarySearch(int[] nums, int target, int start, int end) {
		while (start <= end) {
			int mid = start + (end - start) / 2;
			if (nums[mid] == target) {
				return mid; 
			} else if (nums[mid] < target) {
				return binarySearch(nums, target, mid + 1, end);
			} else {
				return binarySearch(nums, target, start, mid - 1);
			}
		}
		return -1;
	}
} 
