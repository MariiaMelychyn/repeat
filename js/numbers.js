console.log("NUMBERS");

//CONSTRUCTOR NUMBER
console.log(Number('jhdcbshbc')); //NaN 
console.log(Number('100')) //100
console.log(Number('100jkbcjhs'))//NaN
console.log(Number(' '))//0

console.dir(Number);

//METHODS
let value = 3.14;
console.log('lenght:', value.length); //undefined
console.log('value', typeof value, value);
value = value.toFixed(2);//number => string
console.log('value:', typeof value, value);//string 3

let num = "5.567px";
console.log('parseFloat():', parseFloat(num));//5.567 string => number
console.log('parseFloat():', parseInt(num));//5 string => number

console.log('isNaN():', isNaN(num));// '5.567px'is Not a Number
console.log('isNaN():', isNaN(value));//3.14 false

console.log('isNaN():', isNaN(undefined))//true
console.log('isNaN():', isNaN(null))//false

//