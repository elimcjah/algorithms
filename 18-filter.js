// Compare two arrays and return a new array with any items only found in one of the two given 
// arrays, but not both. In other words, return the symmetric difference of the two arrays.

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
// should return ["pink wool"].
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
// should return ["diorite", "pink wool"].
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] 
// should return [].
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
// [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
// [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].

// PROBLEM:

function diffArray(arr1, arr2) {
  var newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// SOLUTION:

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  
  function filt1(val){
    if (arr1.indexOf(val) == -1)
      newArr.push(val);
  } 
  function filt2(val){
    if (arr2.indexOf(val) == -1)
      newArr.push(val);
  } 

  arr2.filter(filt1);
  arr1.filter(filt2);
  return newArr;
}

diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]);
