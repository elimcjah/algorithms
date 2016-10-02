

// SOLUTION:
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  
  for (i = arr.length / size; i > 0; i--){
     
    var start = arr.length - i *size ; 
    var end = start + size;
     
    newArr.push(arr.slice(start, end));   
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
