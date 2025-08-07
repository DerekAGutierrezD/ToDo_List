// Declared variables
let billAmount;
let tipPercentage;
let tipAmount;
let totalToPay;

billAmount = 100;                        //Thats bill value
tipPercentage = 0.10;                   //This is a tip percentage 
tipAmount = billAmount * tipPercentage;   //tip in money 
totalToPay = tipAmount + billAmount;      //Total bill value

console.log(`Your bill amount is: $${billAmount.toFixed(2)}`);
console.log(`The tip percentage is: ${tipPercentage * 100}%`);
console.log(`The tip amount is: $${tipAmount.toFixed(2)}`);
console.log(`Your total amount is: $${totalToPay.toFixed(2)}`)

/*
console.log('Your bill amount is: $' + billAmount);
console.log('The tip percentage is: ' + tipPercentage * 100 + '%');
console.log('The tip amount is: $' + tipAmount);
console.log('Your total amount is: $' + totalToPay);
*/

//console.log(`Your bill comes to $${totalToPay}, including a $${tipAmount} tip.`)