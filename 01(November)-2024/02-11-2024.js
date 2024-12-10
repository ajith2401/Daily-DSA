
// You are given a string s. You can convert s to a 
// palindrome
//  by adding characters in front of it.

// Return the shortest palindrome you can find by performing this transformation.

 

// Example 1:

// Input: s = "aacecaaa"
// Output: "aaacecaaa"
// Example 2:

// Input: s = "abcd"
// Output: "dcbabcd"

// We can only add characters at the start of the string
// We need to make the entire string a palindrome
// We want the shortest possible result


const shortestPalindrome = (s)=>{

  let temporaryString = s + "#" + s.split("").reverse().join("")

  let patternArray = new Array(temporaryString.length).fill(0)
  let i = 1;
  let len = 0



  while ( i < temporaryString.length ){
    if(temporaryString[i]===temporaryString[len])
    {
      patternArray[i]= len +1
      i++;
      len++
    }
   else if(len > 0) 
   {
    len = patternArray[len-1]
            }
        else
        {
        patternArray[i]=0;
        i++
        }
  }

let maximumPalindrome = patternArray[temporaryString.length - 1] 

return s.slice(maximumPalindrome).split("").reverse().join("") + s

}

console.log(shortestPalindrome("ajith"))


//KMP - Method understanding

// I'll break down each function and explain every line in detail with examples.

// ### 1. First, let's understand buildKMPTable function:


function buildKMPTable(pattern) {
    // Creates array of same length as pattern, filled with zeros
    const table = new Array(pattern.length).fill(0);
    let len = 0;  // tracks length of current prefix that matches suffix
    let i = 1;    // starts from second character
    
    while (i < pattern.length) {
        // Case 1: Characters match
        if (pattern[i] === pattern[len]) {
            len++;              // increase matched length
            table[i] = len;     // store the length
            i++;                // move to next character
        }
        // Case 2: Mismatch but we had some match
        else if (len > 0) {
            len = table[len - 1];  // fall back to previous match
        }
        // Case 3: Mismatch and no previous match
        else {
            table[i] = 0;  // no match found
            i++;           // move to next character
        }
    }
    return table;
}


// Example with pattern "ABABCABAB":

// Step 0: table = [0,0,0,0,0,0,0,0,0]
// Step 1: i=1 ("B"), len=0 ("A") → no match → table = [0,0,...]
// Step 2: i=2 ("A"), len=0 ("A") → match → table = [0,0,1,...]
// Step 3: i=3 ("B"), len=1 ("B") → match → table = [0,0,1,2,...]
// ...and so on


// ### 2. Pattern Matching Function:


function findPattern(text, pattern) {
    // Get the KMP table for pattern
    const table = buildKMPTable(pattern);
    let matches = [];  // stores positions where pattern is found
    let i = 0;  // position in text
    let j = 0;  // position in pattern
    
    while (i < text.length) {
        // Case 1: Characters match
        if (pattern[j] === text[i]) {
            i++;    // move text pointer
            j++;    // move pattern pointer
        }
        
        // Case 2: Found complete pattern
        if (j === pattern.length) {
            matches.push(i - j);  // store starting position
            j = table[j - 1];     // move pattern pointer back
        }
        // Case 3: Mismatch
        else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = table[j - 1];  // use table to skip comparisons
            } else {
                i++;  // move to next text character
            }
        }
    }
    return matches;
}


// Example:

// Text: "ABABDABACDABABCABAB"
// Pattern: "ABABCABAB"
// Process:
// i=0,j=0: match 'A' → i=1,j=1
// i=1,j=1: match 'B' → i=2,j=2
// ...until mismatch or complete pattern found


// ### 3. Repeated Pattern Detection:


function findRepeatedPattern(str) {
    // Get KMP table
    const table = buildKMPTable(str);
    const len = str.length;
    const lastValue = table[len - 1];  // length of proper prefix-suffix
    
    // Check if string can be divided into repeated parts
    if (lastValue > 0 && len % (len - lastValue) === 0) {
        return str.substring(0, len - lastValue);  // return the pattern
    }
    return false;
}


// Example with "abcabcabc":

// 1. table = [0,0,0,1,2,3,4,5,6]
// 2. lastValue = 6
// 3. len = 9
// 4. 9 % (9-6) = 0 → divisible
// 5. Returns "abc" (the repeating pattern)


// ### 4. Longest Prefix-Suffix:


function longestPrefixSuffix(str) {
    // Get KMP table
    const table = buildKMPTable(str);
    // Return substring using last value in table
    return str.substring(0, table[str.length - 1]);
}


// Example with "ababab":

// 1. table = [0,0,1,2,3,4]
// 2. Last value = 4
// 3. Returns "abab" (longest prefix that's also suffix)


// ### Test Cases Explanation:


// // Test 1: Find pattern in text
// text = "ABABDABACDABABCABAB"
// pattern = "ABABCABAB"
// Result: [10]  // found at position 10

// // Test 2: Find repeated patterns
// "abcabc" → "abc"  // repeats twice
// "aaaa" → "a"      // repeats four times

// // Test 3: Find longest prefix-suffix
// "ababab" → "abab"   // longest prefix that's also suffix
// "aabaabaaa" → "aabaa"


