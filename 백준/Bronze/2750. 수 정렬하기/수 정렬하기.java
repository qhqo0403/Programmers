import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int[] nums = new int[N];
		for (int i = 0; i < nums.length; i++) {
			nums[i] = sc.nextInt();
		}
		for (int i = 0; i < nums.length; i++) {
			int lowest = i;
			for (int j = i + 1; j < nums.length; j++) {
				if (nums[j] < nums[lowest]) {
					lowest = j;
				}
			}
			if (i != lowest) {
				int temp = nums[i];
				nums[i] = nums[lowest];
				nums[lowest] = temp;
			}
		}
		for (int n : nums) {
			System.out.println(n);
		}
	}
}