// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets 
// is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric 
// difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but 
// not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

// sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
// sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.

// PROBLEM:

function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);


// SOLUTION:

function sym(args) {
  
  var flat = [];
  // For each argument create an array inside of the flat array
  for(i=0;i<arguments.length;i++){
    // As each argument is turned into array delete duplicates
    flat[i] = arguments[i].filter(leaveOne);    
  }
  
  // If duplicates exist, delete all but one.
  function leaveOne(item,pos,self){
    return self.indexOf(item) == pos;
  }    
  
  // If duplicates exist, delete all of them.
  function noDupes(item,pos,self){
     return (item !== self[pos-1] && item !== self[pos+1]);
  }
  
  // Pass the first 2 arguments
  function combine(a,b){
    a = a.concat(b).sort(); // combine and sort them
    a = a.filter(noDupes);  // delete all if dupes exist
    flat.shift();           // delete the first argument
    flat[0] = a;            // replace 1st argument 
    if(flat[1]){            // if more than 1 array left
      return combine(flat[0],flat[1]); // run combine again
    }
    return flat[0];      // return the answer if only 1 array
  } 
 return combine(flat[0],flat[1]);  // send 2 arguments to combine
}
   
sym([1, 2, 3], [5, 2, 1, 4]);
