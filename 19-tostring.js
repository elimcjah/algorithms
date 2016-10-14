
//  SOLUTION:

function convertToRoman(num) {
 
  var temp   = [" "," "," "," "];
  var single = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
  var double = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  var triple = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  var quad   = ["","M", "MM","MMM"];
  
  temp = num.toString().split('').reverse();
  return [quad[temp[3]],triple[temp[2]],double[temp[1]], single[temp[0]]].join('');
}

convertToRoman(36);
