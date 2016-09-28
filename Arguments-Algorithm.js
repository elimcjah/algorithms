//You will be provided with an initial array (the first argument in the destroyer function), 
//followed by one or more arguments. Remove all elements from the initial array that are of 
//the same value as these arguments.


function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



//SOLUTION:


function destroyer(arr) {
   
  var args = Array.prototype.slice.call(arguments);
  return arr.filter(function(x) {
    
    return args.indexOf(x) == -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//  NOTES:
//  arguments are SINGLE VALUE OBJECTS a little different from arrays 
//  in the way that they cannot perform functions like arrays.
//  For this problem, know that the first array will be indexed array
//  in which the single value arguments are filtered by.  

