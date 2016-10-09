// Return true if the string in the first element of the array contains all of the letters 
// of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the 
// second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not 
// contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are 
// present in "Alien".

// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.

function mutation(arr) {
  var x = arr[0].toLowerCase();
  var y = arr[1].toLowerCase();
  var z = [];
  
  y = y.split("");
  for( i = y.length; i>0; i--){
    z.push(x.indexOf(y[i-1]));
  }
  if(z.indexOf(-1) !== -1 ){
    return false;
  }
    return true;
}

mutation(["hello", "Hello"]);

//This doesn't seem to be the most efficient, but it works just as well.
