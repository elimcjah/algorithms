// Flatten a nested array. You must account for varying levels of nesting.

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

// PROBLEM:

function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, {}, [3, [[4]]]]);

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
