import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String text = sc.nextLine();
		String[] textArr = text.trim().split(" ");
		int count = textArr.length;
		
		if (text.equals("") || text.equals(" ")) {
			count = 0;
		}

		System.out.println(count);
	}
}