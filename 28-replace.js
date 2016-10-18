



// PROBLEM:


function spinalCase(str) {

  return str;
}

spinalCase('AllThe-small Things');



// SOLUTION:


function spinalCase(str) {
    
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\W/g, '-').replace(/_/gi, '-');
    return str.toLowerCase();
}

spinalCase('AllThe-small Things');
