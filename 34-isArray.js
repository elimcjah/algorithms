
// SOLUTION:

function steamrollArray(arr) {
  return arr.reduce(function(prev, curr){  // Reduce arr with 2 argument function
    return prev.concat(                    // Return the first argument added with
      Array.isArray(curr) ?                // If the arguement is an array
        steamrollArray(curr) : curr        // start over with concatted arr. If not
    );                                     // array, then concat prev with curr.
  }, []);                                  // Don't forget to create empty array.
}

steamrollArray([1, {}, [3, [[4]]]]);
