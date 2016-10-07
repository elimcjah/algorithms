//  Reverse the provided string.

//  PROBLEM:

function reverseString(str) {
  return str;
}

//  Solution:

function reverseString(str) {
  return str.split("").reverse().join("");  // Split the String into an array. Reverse order.
}                                           // Join the reversed array back into a string. 
                                            
reverseString("reverseme");
