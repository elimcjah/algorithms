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
