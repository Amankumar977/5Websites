import java.util.*;

class p {

	public static void main(String[] args) {
		int n = 8561;
		System.out.println(alternateDigitSum(n));
	}
	public static int alternateDigitSum(int n) {
        char nums[]= String.valueOf(n).toCharArray();
        int sum = 0;
        for(int i=0; i<nums.length; i++){
            if(i % 2==0){
              sum += (int)nums[i];
			  System.out.println(sum);
            }else{
                sum -= (int)nums[i];
				  System.out.println(sum);
            }
        }
        return sum;
    }
} 
