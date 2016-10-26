

// SOLUTION:

function checkCashRegister(price, cash, cid) {
  
  // Attach the actual monetary value to each coin/bill. 
  cid[0][2] =   0.01;  // E.g. cid[0] returns '["PENNY",1.01,0.01]'
  cid[1][2] =   0.05;
  cid[2][2] =   0.10;
  cid[3][2] =   0.25;
  cid[4][2] =   1.00;
  cid[5][2] =   5.00;
  cid[6][2] =  10.00;
  cid[7][2] =  20.00;
  cid[8][2] = 100.00;
  
  var changeDue = (cash - price).toFixed(2);   // The amount of change due
  var avail  = 0;                     // Create empty string for sum of all cid values.
  for(i=0;i<cid.length;i++){    
     avail = (avail+ cid[i][1]);      // Total available cash-in-drawer 
  }
  avail = avail.toFixed(2);           // Round to 2 digits
  if(changeDue === avail){
    return "Closed";                  // If change due equals total cash-in-drawer,
  }                                   // return Closed
  
  var changeArr = [];                 // Create an array to place all bills/coins due.
  for(j=8;j>=0;j--){                  // Iterate from highest dollar value down 
    // Continues to meet criteria: 1. That denomination has money available. 2. Change 
    // due is greater than or equal to that denomination. 3. Subtracting the unit value 
    // from the change due will result in a positive number.
    if(cid[j][1] > 0 && changeDue >= cid[j][2] && (changeDue - cid[j][2]) >= 0){
      changeDue = changeDue - cid[j][2];      // Subtract denomination from Change Due.
      changeArr.push([cid[j][0], cid[j][2]]); // push label and value to bills/coins arr
      cid[j][1] = cid[j][1] - cid[j][2];      // update cid available.
      changeDue = changeDue.toFixed(2);       
      j++;                                    // Iterate through the same denomination.
    }
  }
  
  for(k=0;k<changeArr.length-1;k++){            // Iterate through each bill/coin added.
    // If bills are the same
    if(changeArr[k][0] === changeArr[k+1][0]){  
      changeArr[k][1] = changeArr[k][1]+changeArr[k+1][1]; // Add bills/coins together
      changeArr.splice(k+1, 1);                 // delete the added bill/coin
      k--;                                      // start back with the same bill/coin.
    }
  }
  
  // If the value of change due is more than total available cash-in-drawer
  if(changeDue > avail || changeDue > 0){
    return "Insufficient Funds"; 
  }
 return changeArr;  

}  


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) ;
