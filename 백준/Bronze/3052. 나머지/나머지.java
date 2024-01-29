import java.util.Arrays;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[] result = new int[10];
		int count = 1;
		
		for (int i = 0; i < result.length; i++) {
			result[i] = sc.nextInt() % 42;
		}
		
		Arrays.sort(result);
		
		int temp = result[0];
		for (int i = 1; i < result.length; i++) {
			if (result[i] != temp) {
				count++;
				temp = result[i];
			}
		}
		
		System.out.println(count);
	}
}