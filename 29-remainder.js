// PROBLEM:


function sumFibs(num) {
 
 return num;
}

sumFibs(75025);                       


// SOLUTION:


function sumFibs(num) {
  
  var fib = [1, 1];                   // Create an array for fib starting with given
                                      // sequence for fib[1] = [1, 1]
  for(i = 1; fib[i] <= num; i++){     // Create a for loop to iterate through to num  
    var x = fib[i] + fib[i-1];        // Create var x as sum of previous 2 numbers
     if(x<=num){                      // If num is less than or equal to x 
       fib.push(x);                   // push x to the end of fib array
     }                                // Now fib array has all numbers between 1 &
  }                                   // input num.
  var sumOdds = 0;                    // Create a var sumOdds to be total of Odd #s
  for(i=0; i<fib.length;i++){         // Iterate through the fib array
    if(fib[i] % 2 === 1 ){            // if the number is not divisible by 2
      sumOdds += fib[i];              // add that number to the sumOdds total.
    }  
  }
  return sumOdds;                     // Return the total of sumOdds
}

sumFibs(75025);                       
