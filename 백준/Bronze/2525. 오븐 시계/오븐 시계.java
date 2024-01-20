import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int hour = sc.nextInt();
		int min = sc.nextInt();
		int time = sc.nextInt();
		
		min += (hour * 60) + time;
		hour = (min / 60) % 24;

		System.out.println(hour + " " + (min % 60));
	}
}