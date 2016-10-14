// SEARCH AND REPLACE

// SOLUTION:

function myReplace(str, before, after) {
  
  after = /[A-Z]/.test(before[0]) ? after.charAt(0).toUpperCase() + after.slice(1) : after;
  return str.replace(before, after);  
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
