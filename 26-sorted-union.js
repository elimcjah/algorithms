// Problem:
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// SOLUTION:

function uniteUnique(arr) {
  var newArr = [];
  var args   = Array.prototype.slice.call(arguments,0);
  var merged = args.concat.apply([], args);
   
    for(var i in merged){
        if(newArr.indexOf(merged[i]) === -1){  
          //return newArr;
          newArr.push(merged[i]);
        } 
    }
  return newArr;      
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
