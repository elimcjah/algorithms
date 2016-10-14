// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

// convertToRoman(2) should return "II".
// convertToRoman(3) should return "III".
// convertToRoman(4) should return "IV".
// convertToRoman(5) should return "V".
// convertToRoman(9) should return "IX".
// convertToRoman(12) should return "XII".
// convertToRoman(16) should return "XVI".
// convertToRoman(29) should return "XXIX".
// convertToRoman(44) should return "XLIV".
// convertToRoman(45) should return "XLV"
// convertToRoman(68) should return "LXVIII"
// convertToRoman(83) should return "LXXXIII"
// convertToRoman(97) should return "XCVII"
// convertToRoman(99) should return "XCIX"
// convertToRoman(500) should return "D"
// convertToRoman(501) should return "DI"
// convertToRoman(649) should return "DCXLIX"
// convertToRoman(798) should return "DCCXCVIII"
// convertToRoman(891) should return "DCCCXCI"
// convertToRoman(1000) should return "M"
// convertToRoman(1004) should return "MIV"
// convertToRoman(1006) should return "MVI"
// convertToRoman(1023) should return "MXXIII"
// convertToRoman(2014) should return "MMXIV"
// convertToRoman(3999) should return "MMMCMXCIX"

//  PROBLEM:

function convertToRoman(num) {
 return;
}

convertToRoman(36);

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
