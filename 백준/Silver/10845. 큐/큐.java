import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public static int[] queue;
	public static int front = -1;
	public static int back = -1;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		int N = Integer.parseInt(br.readLine());
		queue = new int[N];
		
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
			case "front" :
				sb.append(front()).append("\n");
				break;
			case "back" :
				sb.append(back()).append("\n");
				break;
			}
		}
		System.out.println(sb);
	
	}
	
	// push
	public static void push(int num) {
		back++;
		queue[back] = num;
	}
	// pop
	public static int pop() {
		if (front == back) {
			return -1;
		}
		
		int removeNum = queue[front + 1];
		queue[front + 1] = 0;
		if (front == back) {
			front = -1;
			back = -1;
		} else {
			front++;			
		}
		
		return removeNum;
	}
	// size
	public static int size() {
		return back - front;
	}
	// empty
	public static int empty() {
		if (front == back) {
			return 1;
		}
		
		return 0;
	}
	// front
	public static int front() {
		if (front == back) {
			return -1;
		}
		
		return queue[front + 1];
	}
	// back
	public static int back() {
		if (front == back) {
			return -1;
		}
		
		return queue[back];
	}
}