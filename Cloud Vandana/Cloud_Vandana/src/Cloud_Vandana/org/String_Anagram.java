package Cloud_Vandana.org;
 import java.util.*;
 
public class String_Anagram {

	public static void main(String[] args) {
        String str1 = "listen";
        String str2 = "silent";
        
        String str3 = "Hello";
        String str4 = "World";

        // Convert strings to character arrays and sort them
        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();
        
        char[] arr3 = str3.toCharArray();
        char[] arr4 = str4.toCharArray();

        Arrays.sort(arr1);
        Arrays.sort(arr2);

        Arrays.sort(arr3);
        Arrays.sort(arr4);

        // Check if sorted arrays are equal
        if (Arrays.equals(arr1, arr2)) {
            System.out.println("Output: true"); // For "listen" and "silent"
        } else if (Arrays.equals(arr3, arr4)) {
            System.out.println("Output: true"); // For "Hello" and "World"
        } else {
            System.out.println("Output: false");
        }
    }

}
