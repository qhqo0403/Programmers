import java.util.Arrays;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int[] cards = new int[N];
		int maxSum = sc.nextInt();
		
		for (int i = 0; i < N; i++) {
			cards[i] = sc.nextInt();
		}
		
		int cardSum = 0;
		for (int i = 0; i < N; i++) {
			for (int j = i + 1; j < N; j++) {
				for (int k = j + 1; k < N; k++) {
					int tempMax = cards[i] + cards[j] + cards[k];
					if (tempMax <= maxSum) {
						cardSum = Math.max(cardSum, tempMax);
					}
				}
			}
		}
		
		System.out.println(cardSum);
	}
}