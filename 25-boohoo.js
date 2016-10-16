// PROBLEM:


function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool;
}

booWho(null);

// SOLUTION:


function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  
  if(bool === true || bool === false){ 
    return true;
  } else return false;
  }

booWho(true);
