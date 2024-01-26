import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		LinkedList<Integer> list = new LinkedList<>();
		Scanner sc = new Scanner(System.in);
		
		int N = sc.nextInt();
		int idx = sc.nextInt();

		for (int i = 1; i <= N; i++) {
			list.add(i);
		}
		
		System.out.print("<");
		while (!list.isEmpty()) {
			for (int i = 0; i < idx - 1; i++) {
				list.add(list.remove());
			}
			int remove = list.remove();
			if (list.size() <= 0) {
				System.out.print(remove + ">");
			} else {
				System.out.print(remove + ", ");
			}
		}
	}
}