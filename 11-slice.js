// Return the remaining elements of an array after chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.

// PROBLEM:

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr;
}

slasher([1, 3, 5], 2);

//SOLUTION:
function slasher(arr, howMany) {            

  return arr.slice(howMany, arr.length);    
}

slasher([1, 2, 3], 2);
