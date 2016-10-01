// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the 
// letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string 
// "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the 
// letters in "line" are present in "Alien".

// PROBLEM:

function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);


// SOLUTION:

function mutation(arr) {

  var x = arr[0].toLowerCase();         // Create all lowercase variable 'x' for the first string in arr
  var y = arr[1].toLowerCase();         // Create all lowercase variable 'y' for the first string in arr
  var z = [];                           // Create new empty array variable 'z'
  
  y = y.split("");                      // Turn y into array of letters 
  
  for( i = y.length; i>0; i--){         // Create a for loop to iterate through each letter in y array
    
    z.push(x.indexOf(y[i-1]));          // Use empty arry z to store the index of each letter from y in x 
  }                                     // .indexOf() variable will return -1 if the value is not found 
  
  if(z.indexOf(-1) !== -1 ){            // If -1 value not found in array z
    return false;   
  }
    return true;                        // If -1 value is found in array z
}

mutation(["hello", "Hello"]);
