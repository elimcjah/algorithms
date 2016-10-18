// Sum all the prime numbers up to and including the provided number. A prime number is 
// defined as a number greater than one and having only two divisors, one and itself. For 
// example, 2 is a prime number because it's only divisible by one and two. The provided 
// number may not be a prime.

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.


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
