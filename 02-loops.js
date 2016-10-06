// Return the factorial of the provided integer. If the integer is represented 
// with the letter n, a factorial is the product of all positive integers less 
// than or equal to n. Factorials are often represented with the shorthand 
// notation n!

// factorialize(5) should return a number.
// factorialize(5) should return 120.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.
// factorialize(0) should return 1.

// PROBLEM:

function factorialize(num) {
return num;
}

factorialize(3);

// SOLUTION:

function factorialize(num) {
 if(num === 0){                         // If number is equal to 0
   return 1;                            // Return 1.
 } 
 return num * (factorialize(num-1));    // Return the factorial of input.
}

factorialize(3);
