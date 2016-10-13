// We'll pass you an array of two numbers. Return the sum of those two numbers 
// and all numbers between them.  The lowest number will not always come first.

// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.

// PROBLEM:

function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);

// SOLUTION:

function sumAll(arr) {
  var x = Math.min.apply(0,arr);             // Find the Minimum value in arr
  var y = Math.max.apply(0,arr);             // Find the Maximum value in arr

  for(i = x; i < y-1; i++){                  // Fill in all missing values
   arr.push(x+1);                            // between min & max values
   x++;  
   }
   
  return arr.sort().reduce(function(a,b){    // First .sort() to see the values 
    return a + b;                            // being added. Then reduce to 1 
  });                                        // value. 
}


sumAll([5, 10]);
