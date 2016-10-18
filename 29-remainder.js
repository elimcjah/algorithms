// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the 
// sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8. For 
// example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.

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
