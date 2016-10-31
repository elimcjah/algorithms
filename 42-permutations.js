// Return the number of total permutations of the provided string that don't have repeated 
// consecutive letters. Assume that all characters in the provided string are each unique.
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, 
// baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

// permAlone("aab") should return a number.
// permAlone("aab") should return 2.
// permAlone("aaa") should return 0.
// permAlone("aabb") should return 8.
// permAlone("abcdefa") should return 3600.
// permAlone("abfdefa") should return 2640.
// permAlone("zzzzzzzz") should return 0.
// permAlone("a") should return 1.
// permAlone("aaab") should return 0.
// permAlone("aaabb") should return 12.


// PROBLEM:

function permAlone(str) {
  return str;
}

permAlone('aab');

// SOLUTION:

//  NOT FINISHED YET
function permAlone(str) {
  
  var arr = str.split('');
  
  function swap(array, pos1, pos2){
    var x = pos1;
    pos1 = pos2;
    pos2 = x;
  }
  
  function heaps(array, output, n){
    n = n || array.length;
    if( n === 1){
      output(array);
    }
    else{
      for 
    }
  }
}

permAlone('aab');
