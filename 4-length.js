// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.


// PROBLEM:

function findLongestWord(str) {  
  return str;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// SOLUTION:

function findLongestWord(str) {  
  var words = str.split(/\s/g);                  // Split the string into words using Regular Expressions.
  var longest = 0;                               // Create a blank string with value of 0.
  
  for(i = words.length - 1; i > 0; i--){         // Loop through all the words
    if(words[i].length > longest){               // If the current word in the loop has a length longer than
      longest = words[i].length;                 // the 'longest' variable, then the current word in the loop
    }                                            // becomes the 'longest' variable.
  }
  return longest;                                 // return the longest value.
}

findLongestWord("The quick brown fox jumped over the lazy dog");
