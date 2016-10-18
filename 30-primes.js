// PROBLEM:


function sumPrimes(num) {
  return num;
}

sumPrimes(0);


// SOLUTION:


function sumPrimes(num) {
  
  function check(number){
    for(i=2; i<number; i++){
      if(number%i === 0){
        return "Not Prime";
      }
    }
        return "Is Prime";
  }
  
  if(num === 0){
    return "How Am I Not Myself?\n-Brad Stand";
  }
  
  if(num === 1){                      
      return 0;
    }

  if(check(num) === "Not Prime"){ 
      return sumPrimes(num-1);
  }
  if(check(num) === "Is Prime"){
      return num + sumPrimes(num-1);
  }
}

sumPrimes(0);
