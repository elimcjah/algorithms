
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in 
// lower case. For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".

// PROBLEM:

function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

// SOLUTION:

function titleCase(str) {
   
  return str.replace(/\S*/gi, function(words) {
        return words.charAt(0).toUpperCase() + words.substr(1).toLowerCase();
    });
}

titleCase("I'm a little tea pot");
