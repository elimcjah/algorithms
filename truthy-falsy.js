// Remove all falsy values from an array.
// Falsy values in JavaScript are false, 
// null, 0, "", undefined, and NaN.


// Problem:

function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);

// Solution:

function bouncer(arr) {           // Filter the array with the Boolean object. The Boolean
 return arr.filter(Boolean);      // object returns false for all omitted values or values
}                                 // 0, -0, null, false, NaN, undefined, or the empty string ("")
                                  
bouncer([7, "ate", "", false, 9]);
