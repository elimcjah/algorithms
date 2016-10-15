// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("bcd") should return undefined.
// fearNotLetter("yz") should return undefined.

// PROBLEM:

function fearNotLetter(str) {
  return str;
}
fearNotLetter("abce");


// SOLUTION:

function fearNotLetter(str) {
  
  var alphabet =  "abcdefghijklmnopqrstuvwxyz";
  
  for(i=0;i<alphabet.length; i++){
    if (alphabet.charCodeAt(i) !== str.charCodeAt(i)){
     if(i>0)
       return String.fromCharCode(alphabet.charCodeAt(i));
     if(i<1)
       return undefined;  
    } 
  }  
}

fearNotLetter("bcd");
