console.log('STRING')
//length 123456
const name = 'Mariia';
//index 012345
const lastName = 'Melychyn';

//const fullName = name + '' + lastName;//ES5
const fullName = `${name} ${lastName}` //ES6 інтеприляція
console.log(fullName)


//Constructor String()
let num = 12;
console.log(typeof num, num);
num = String(num);
console.log(typeof num, num);

//PROPERTIES
console.log('length name', name.length);
console.log('length fullName', fullName.length);

//METHODS for string only
console.dir(String);
let str = 'VaLue'
console.log('toLowerCase():', str.toLowerCase());
console.log('toUpperCase():', str.toUpperCase());
let inputValue = '   value   ';
console.log('value length', inputValue.length);
inputValue = inputValue.trim(); //trim обрізає пробіли між '    value   '
console.log('inputValue.trim():', inputValue.length)



//METHODS for string and array
console.log('concat', name.concat(' ', lastName)); //[]
console.log('indexof:', name.indexOf('a'))//1

console.log('includes:', name.includes('a')) //повернне true or false

