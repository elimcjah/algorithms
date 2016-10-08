// Remove all elements from the initial array that are of 
// the same value as the arguments at the end of the arr.

// Problem: 
function destroyer(arr) {
  return arr;  // Remove all values
}
destroyer([1, 2, 3, 1, 0, 3], 2, 3);

//SOLUTION:

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments); // Create an arguments array by slice()
  return arr.filter(function(x) {                   // Filter out numbers that 
  return args.indexOf(x) == -1;                     // do not have an index equal to -1                                                   
  });                                               // // or with no index.
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//  NOTES:
//  Arguments are SINGLE VALUE OBJECTS.  They are a little different from 
//  arrays as they cannot perform functions.
//  For this problem, know that the first array will be indexed 
//  and the arguments will be compared to these indexed values.

