console.log("BRANCHES");

// if(condition){
//     statemnts
// }

// if(condition_1){
//     statements_1
// } else if(condition_2){
// statements_2
// }else if(condition_3){
//     statements_3
// } else{
    // statements
// }




// if(condition){
//     statements_if
// }else{
//     statements_else
// }



//тернарний оператор
//(condition) ? statements_if : statements_else

let cond = true;
let result;
if(cond){
    result = 'hello'
}
console.log('result' , result)






let value = null;

if(value || typeof value === 'number'){
    console.log('ok');
}else{
    console.log('ne ok');
}
//тернарний оператор
(value || typeof value === 'number') ?  console.log('ok') : console.log('ne ok')


let age = 17;
if(age >= 18 && age <= 65){
    console.log('age ok')
}else{
    console.log('age ne ok')
}
//тернарний оператор
(age >= 18 && age <= 65) ? console.log('age ok') : console.log('age ne ok')


let user = {};
console.log(typeof user); //{}=>object
console.log(Boolean(!user)); //{}=>true

if(typeof user === 'object' && !user){
    console.log('user ok');
}else{
    console.log('user ne ok');
}

let data = null;
if(data === null){
    console.log('data null')
} else{
    console.log('data available')
}




// const arr = [1, 2, 3, 4, 5];
const arr = null;
// if(arr.length > 0){
    if(arr?.lenght >0){
    console.log('i have numbers')
}else{
    console.log('error')
}



let num = NaN;
if(!isNaN(num) && num !== null){
    if('num >= 0 && num < 3');
}
    if(num <=5){
    console.log('num <=5')
}
else{
    console.log('who knows')
}

let number = '1';
switch(number){
    case 1:
console.log('num === 1');
break;
default:
    console.log('default message')
}