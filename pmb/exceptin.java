import java.util.Scanner;
public class exceptin{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = 2;
        int b = 0;
        try{
            int c= a/b;
            System.out.println("The value of c is: " + c);
            
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException: Division by zero is not allowed.");
        } catch (Exception e) {
            System.out.println("An unexpected error occurred: " + e.getMessage());
        } finally {
            System.out.println("Execution completed.");
        }
        System.out.println("Please enter an integer:");
        int d= sc.nextInt();
        System.out.println("You entered: " + d);
    }
}