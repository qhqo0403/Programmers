import java.util.Arrays;
import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[] arr = new int[9];
		int idx = 0;
		
		for (int i = 0; i < arr.length; i++) {
			arr[i] = sc.nextInt();
		}
		
		int[] sorted = Arrays.copyOf(arr, arr.length);
		Arrays.sort(sorted);

		for (int i = 0; i < arr.length; i++) {
			if (arr[i] == sorted[sorted.length - 1]) {
				idx = i;
				break;
			}
		}
		System.out.println(sorted[sorted.length - 1]);
		System.out.println(idx + 1);
	}
}