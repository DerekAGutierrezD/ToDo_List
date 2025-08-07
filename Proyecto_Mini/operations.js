// Declared variables
let billValue;
let tipPercentage;
let tipValue;
let totalValue;

billValue = 100;                        //Thats bill value
tipPercentage = 0.10;                   //This is a tip percentage 
tipValue = billValue * tipPercentage;   //tip in money 
totalValue = tipValue + billValue;      //Total bill value


console.log(`Your bill comes to $${totalValue}, including a $${tipValue} tip.`)