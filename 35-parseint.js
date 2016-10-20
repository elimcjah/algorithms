// Return an English translated sentence of the passed binary string.
// The binary string will be space separated

// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 
// 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 
// 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
// binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 
// 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 
// 01101101 01110000 00100001") should return "I love FreeCodeCamp!"


// PROBLEM:

function binaryAgent(str) {
  return str;                             
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 
01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// SOLUTION:

function binaryAgent(str) {
  
  var answer = "";                           // Create empty string variable
  str = str.split(" ");                      // Split the string into array of strings
  for(i=0;i<str.length;i++){                 // Loop through all elements of array
    answer += String.fromCharCode(           // Build answer from CharCode
      parseInt(str[i],2));                   // parseInt(index, radix)
  }
  return answer;                             
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 
01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
