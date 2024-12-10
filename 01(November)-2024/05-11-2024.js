// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"



var reverseVowels = function(s) {
  let array = s.split('');
  let left =0;
  let right = s.length -1;
  const isVowel = (letter) => {
      return "aeiouAEIOU".includes(letter)
  }



while(left < right)
{
      while((left < right) && !isVowel(array[left])){
      left++;
      }
      while((left < right) && !isVowel(array[right])){
          right--;
      }
      if(left < right){
          [array[left],array[right]] = [array[right],array[left]]
          left++;
          right--;
      }
  }

   return array.join('')
};