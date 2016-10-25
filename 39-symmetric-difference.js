// First attempt


function sym(args) {

 // Create an ascending sorted array of all numbers in all arguments
  
 var x = arguments.length -1;
 var flat = Array.from(arguments).toString().split(',').map(Number).sort();
  
  for(i=0;i<flat.length-arguments.length;i++){
    if(flat[i] === flat[i+x]){
     flat.splice(i,x+1); 
      i--;
    } 
  }
 flat = flat.filter( function (item, index, inputArray){
   return inputArray.indexOf(item) == index;
 });
  return flat;
 
}

// [1,1,1,2,2,2,3,3,3,3,3,3,4,5,5,5,6,6,7,8,9]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
