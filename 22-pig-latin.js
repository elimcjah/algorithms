// Code here


// PROBLEM:


function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");

// SOLUTION: 

function translatePigLatin(str) {
  var vowels = ['a','e','i','o','u'];    // Define vowels
  var arr = str.split('');               // Split the string into an 
                                         // array of characters
  if(vowels.indexOf(arr[0]) !== -1){     // If first letter is vowel
    arr.push('w','a','y');               // add 'way' to the end
    str = arr.join('');                  // connect the letters again
    return str;                          // return answer
  }
  
  // If letter is not a vowel
  if(vowels.indexOf(arr[0]) === -1){
    for(i=0;arr.length;i++){             // Iterate through array
      if(vowels.indexOf(arr[i]) !== -1){ // Find the index of vowel
        var x = arr.splice(0, i);        // Cut letters to the vowel
        arr = arr.concat(x);             // add those letters to end
        arr.push('a','y');               // add 'ay' to the end
        str = arr.join('');              // join letters of array
        return str;                      // return answer.
      } 
    }
  } 
}

translatePigLatin("glove");
