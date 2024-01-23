import java.util.Arrays;
import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[] height = new int[9];
		int sum = 0;
		
		for (int i = 0 ; i < height.length; i++) {
			height[i] = sc.nextInt();
			sum += height[i];
		}
		// 가짜 찾기 - 배열 전체 합에서 2개씩 빼기
		int fake1 = 0;
		int fake2 = 0;
		for (int i = 0; i < height.length - 1; i++) { // 중첩 for문에서 j 가 + 1 되기 때문에 length - 1
			for (int j = i + 1; j < height.length; j++) {
				if (sum - height[i] - height[j] == 100) { // 합이 100이 됐다면 변수에 해당 값을 저장
					fake1 = height[i];
					fake2 = height[j];
				}
			}
		}
		
		Arrays.sort(height);
		for (int i = 0; i < height.length; i++) {
			if (height[i] == fake1 || height[i] == fake2) { // 가짜는 제외하고 출력
				continue;
			}
			System.out.println(height[i]);
		}
	}
}
