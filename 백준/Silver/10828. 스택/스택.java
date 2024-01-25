import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public static int[] stack;
	public static int size = 0;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		int N = Integer.parseInt(br.readLine());
		stack = new int[N];
		
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			String command = st.nextToken();
			
			switch (command) {
			case "push" :
				int num = Integer.valueOf(st.nextToken());
				push(num);
				break;
			case "pop" :
				sb.append(pop()).append("\n");
				break;
			case "size" :
				sb.append(size()).append("\n");
				break;
			case "empty" :
				sb.append(empty()).append("\n");
				break;
			case "top" :
				sb.append(top()).append("\n");
				break;
			}
		}
		System.out.println(sb);
	
	}
	// 추가
	public static void push(int num) {
		stack[size] = num;
		size++;
	}
	// 삭제
	public static int pop() {
		if (size == 0) {
			return -1;
		}
		int removeItem = stack[size - 1];
		stack[size - 1] = 0;
		size--;
		
		return removeItem;
	}
	// 개수 출력
	public static int size() {
		return size;
	}
	// 비어있는지 확인
	public static int empty() {
		if (size == 0) {
			return 1;
		}
		
		return 0;
	}
	// 맨 위의 정수 출력
	public static int top() {
		if (size == 0) {
			return -1;
		}
		
		return stack[size - 1];
	}
}