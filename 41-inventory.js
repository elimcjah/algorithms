// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the 
// new item and quantity into the inventory array. The returned inventory array should be in alphabetical
// order by item.

// The function updateInventory should return an array.
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], 
// [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length should return an array with a length of 6.
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], 
// [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], 
// [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return 
// [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
// updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return 
// [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
// updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], 
// [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"],
// [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].


// PROBLEM:


function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

// SOLUTION:


function updateInventory(arr1, arr2) {
 
  // Loop each array in 2nd argument through the 1st argument. If item exists,
  // sum up total. Then remove that array from 2nd argument.
  for(i=0;i<arr2.length;i++){
    for(j=0;j<arr1.length;j++){
      if(arr2[i][1] === arr1[j][1]){
        arr1[j][0] = arr1[j][0] + arr2[i][0];
        arr2.splice(i,1);
      } 
    }
  }
  // We currently have duplicate items summed and array of non-duplicates. 
  // Concat the 2 arrays, sort alphabeticaly by the 2nd item in array and return
  arr1 = arr1.concat(arr2).sort(function(a,b){
   return a[1] > b[1];
  });
  return arr1;
}

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], 
                 [1, "Hair Pin"], [5, "Microphone"]], 
                [[2, "Hair Pin"], [3, "Half-Eaten Apple"],
                 [67, "Bowling Ball"], [7, "Toothpaste"]]);
