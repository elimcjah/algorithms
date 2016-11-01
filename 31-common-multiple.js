// new file
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters. The range will be an 
// array of two numbers that will not necessarily be in numerical order. e.g. for 1 and 3 - find the 
// smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.

// PROBLEM:

function smallestCommons(arr) {
 return num;
}

smallestCommons([23,18]);


// SOLUTION:

// NOT FINISHED
function smallestCommons(arr) {
  
  var arr2 = [];
  var c = Math.max(arr[0], arr[1]);
  var d = Math.min(arr[0], arr[1]); 
  for(i=0; i <= (c- d); i++){ 
      arr2[i] =  d + i; 
  }
  
  var arr3 = [];
  arr3.push(arr2[0], arr2[1]);
  
  if(arr2.length>1){
  return gcd(arr3);
  }
  if(arr2.length == 1){
    return arr2[0];
  }
  
  return arr2;
  function gcd(arr3){
    var a = Math.max(arr3[0], arr3[1]);
    var b = Math.min(arr3[0], arr3[1]); 
   //return arr3;
    if(a > b){
      return gcd([a-b, b]);
    } 
    
    //return arr2;
    
    if (a === b){
      arr2.push(a);
      return arr2;
      return smallestCommons(arr2);
    }
    
  }
  
}
smallestCommons([23,18]);
