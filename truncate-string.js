// SOLUTION: 
function truncateString(str, num) {

  if(str.length > num && num > 3){
      return str.slice(0, (num-3))+ '...'; 
    } 
   else if (str.length > num && num < 4){
      return str.slice(0, num)+ '...';
    } 
    return str;
  }

truncateString("Absolutely Longer", -1);
