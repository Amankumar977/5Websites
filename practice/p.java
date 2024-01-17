class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int k = flowerbed.length;
        for (int i = 0; i < k; i++) {
             if(i ==0){
                 if(flowerbed[i+1] ==0){
                     flowerbed[i]= 1;
                     n--;
                 }
              }else if(i == n-1){
                      if(flowerbed[n-2]= 0){
                           flowerbed[n-1]= 1;
                           n--;
                      }
                }
    }
}
}