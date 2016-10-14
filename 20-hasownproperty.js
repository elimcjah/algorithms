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

