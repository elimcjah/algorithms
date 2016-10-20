// Create a function that looks through an array (first argument) and returns the first element 
// in the array that passes a truth test (second argument). Remember to use Read-Search-Ask if 
// you get stuck. Try to pair program. Write your own code.

// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.


// PROBLEM:

function findElement(arr, func) {
 return num; 
}

findElement([1,2,3,4], function(num){ return num % 2 ===0; });

// SOLUTION:

function findElement(arr, func) {

  var num = arr.filter(func);      // Filter the arr by the given function
  return num[0];                   // Return the first number in answer array.
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
