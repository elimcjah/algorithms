// Create a function that sums two arguments together. If only one argument is provided, then 
// return a function that expects one argument and returns the sum.  For example, addTogether(2, 3) 
// should return 5, and addTogether(2) should return a function. Calling this returned function with
// a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.

// PROBLEM:


function addTogether() {
 return false; 
}

addTogether("http://bit.ly/IqT6zt");


// SOLUTION:

function addTogether() {
  
  var args = [...arguments];
      
    return function(y){
      if(!Number.isInteger(y)){
        return undefined;
      }
      return args[0]+y;
    };    
  }
  if(args.length === 2){
     return args[0]+args[1];
  }
  return undefined;  
}

addTogether("http://bit.ly/IqT6zt");
