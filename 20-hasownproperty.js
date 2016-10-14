// Make a function that looks through an array of objects (first argument) and returns an array of all objects that 
// have matching property and value pairs (second argument). Each property and value pair of the source object has 
// to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
// { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the 
// third object from the array (the first argument), because it contains the property and its value, that was passed
// on as the second argument.


// PROBLEM: 

function whatIsInAName(collection, source) {
  return array;
}
whatsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// SOLUTION:

function whatIsInAName(collection, source) {
  var arr = [];
  
  var keys = Object.keys(source);
   
  for(i=0;i<collection.length; i++){
    if(keys.length > 1 && 
       collection[i].hasOwnProperty(keys[0]) && 
       collection[i].hasOwnProperty(keys[1])){
         arr.push(collection[i]);
    } 
    else if(keys.length == 1 && 
            collection[i][keys[0]] == source[keys[0]]){
      arr.push(collection[i]);
    }
  }
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

