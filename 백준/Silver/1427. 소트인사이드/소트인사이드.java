import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.next();
		String[] strArr = str.split("");
		int[] numArr = new int[strArr.length];
		
		for (int i = 0; i < strArr.length; i++) {
			numArr[i] = Integer.valueOf(strArr[i]);
		}
		for (int i = 0; i < numArr.length; i++) {
			int max = i;
			for (int j = i + 1; j < numArr.length; j++) {
				if (numArr[j] > numArr[max]) {
					max = j;
				}
			}
			if (i != max) {
				int temp = numArr[i];
				numArr[i] = numArr[max];
				numArr[max] = temp;
			}
		}
		for (int n : numArr) {
			System.out.print(n);
		}
	}
}