import java.util.*;

class p {

	public static void main(String[] args) {
		String s = "anagram";
        String t = "nagaram";
        System.out.println(isAnagram(s, t));
	}
    public static boolean isAnagram(String s, String t) {
        int lengthOfs = s.length();
        int lengthOft = t.length();
        if(lengthOfs != lengthOft){
            return false;
        }
        Map<Character, Integer> scharValues = new HashMap<>();
        for(int i=0; i<lengthOfs; i++){
            scharValues.put(s.charAt(i), scharValues.getOrDefault(s.charAt(i), 0)+1);
        }
        scharValues.size()
        for(int i=0; i<lengthOft; i++){
            if(!scharValues.containsKey(t.charAt(i))){
                return false;
            }
            System.out.println(lengthOft--);
        
        }
        return true;
    }
} 
