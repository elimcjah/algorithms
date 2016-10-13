function sumAll(arr) {
  var x = Math.min.apply(0,arr);             // Find the Minimum value in arr
  var y = Math.max.apply(0,arr);             // Find the Maximum value in arr

  for(i = x; i < y-1; i++){                  // Fill in all missing values
   arr.push(x+1);                            // between min & max values
   x++;  
   }
   
  return arr.sort().reduce(function(a,b){    // First .sort() to see the values 
    return a + b;                            // being added. Then reduce to 1 
  });                                        // value. 
}


sumAll([5, 10]);
