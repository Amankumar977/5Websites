package practiceset;

import java.util.*;

public class Trees {

	public static void main(String[] args) {
		int arr[] = { 78, 89, 45, 63, 78, 56};
		bubbleSort(arr);
		System.out.println(Arrays.toString(arr));
	}

	private static void bubbleSort(int[] arr) {
		int n = arr.length;
		for (int i = 0; i < n; i++) {
			boolean isSwapped = false;
			for (int j = 0; j < n - i - 1; j++) {
				if (arr[j] > arr[j+1]) {
					swap(arr, j, j+1);
					isSwapped = true;
				}
			}
			if(!isSwapped) {
				break;
			}
		}

	}

	private static void swap(int[] arr, int i, int j) {
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;

	}
}
