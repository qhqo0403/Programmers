import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[][] arr = new int[100][100];
		int N = sc.nextInt();
		int val = 0;
			
		for (int i = 0; i < N; i++) {
			int col = sc.nextInt();
			int row = sc.nextInt();
			
			for (int j = 0; j < 10; j++) {
				for (int k = 0; k < 10; k++) {
					if (arr[row + j][col + k] == 0) {
						arr[row + j][col + k] = 1;
						val++;
					}
				}
			}
		}
		System.out.println(val);
		
	}
}
