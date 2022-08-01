console.log('ARRAYS');

const array = [];
console.log('array:', array);

const newArray = array;
console.log('array:', array);
console.log('newArray:', newArray);

console.log('array === newArray', array === newArray);

array.push('elem-1');
console.log('array === newArray:', array === newArray);
console.log('array:', array);
console.log('newArray:', newArray);


//добавляэмо до початку масива
array.unshift("elem-2" , 'elem-3');
console.log('array:', array);

//удаляємо едементи масива з кінця
array.pop();
console.log('array', array);

//удаляє 1 елемент масиву
array.shift();
console.log('array', array)




//копіюємо масив 
const initalArray = ['1', '2', '3'];
console.log('initalArray', initalArray);
//1
const nextArray = [...initalArray];
console.log("nextArray", nextArray);
console.log("initalArray === nextArray", initalArray === nextArray);
//2
const sliceArray = initalArray.slice();
console.log('sliceArray', sliceArray);

const shortArray = initalArray.slice(1, 2);
console.log("shortArray", shortArray);

//CONCAT ARRAY обєднує
const concatArray = nextArray.concat(sliceArray, shortArray)
console.log('concatArray', concatArray);

const fullArray = [...initalArray, ...nextArray.slice(1, 2)];
console.log("fullArray", fullArray);



//добавляти, удаляти елементи у різні місця splice

const splieDeliteArray = fullArray.splice(-1, 1);
console.log("splieDeliteArray", splieDeliteArray);
console.log("fullArray", fullArray);

//удаляє 1 індекс , і замінює  3 значення яке ми вказали 2
const sliceReplaceArray = fullArray.splice(1, 1, 2) ;
console.log(sliceReplaceArray);
console.log(fullArray);


//добавили після 2 індексу, де вказали 0 , що не удаляємо, і додали все що у сплайсі
const splicedAddArray = fullArray.splice(2, 0, 3, 4 , 5, 6, 9);
console.log("splicedAddArray", splicedAddArray);
console.log(fullArray);

const resultArray = fullArray.splice(0, 1, 1);
console.log(resultArray);
console.log(fullArray);


//SPLIT & JOIN розбиваємо на едементи масиву
const str = 'i love js';
console.log('str', str);

const stringToArray = str.split('o');
console.log(stringToArray)

//join обєднює у строку
const name =['nanya', 'dima', 'mariia'];
const arrayToString = name.join(' ,');
console.log(arrayToString);


//cicle for
const data = [1, 35, 24, 17, 199, 65];

for (let i=0; i< data.length; i+=2){
    console.log('for elem:', data[i]);
}


// FUNCTION METHODS

for(let elem of data){
    console.log('elem', elem)
}
const forEachArray = data.forEach((element, index, array)=>{
console.log("element", element, index, array);
});

console.log('forEachArray', forEachArray)//undefined



//map повертає масив новий з такою ж кількістю
const mapArray = data.map((item)=>{
    console.log('item', item)
    return item + '';//зберігає строчні елементи тому що ми добавили ""
});
console.log('mapArray:', mapArray);
console.log('data === mapArray', data === mapArray);//false


//щоб найти елемент: фільтрувати або find
const filterArray = data.filter((elem)=>{
    console.log(elem);
    return elem % 2 === 0;
}); 
console.log("filterArray", filterArray);//поверне строку масиву


const findElement = data.find((elem)=>{
    return elem % 2 === 0;
});
console.log('findElement:', findElement)//поверне число



//reduce перебирає масив, він має акумулятор під назвою memo, де ми передали ітерацію її 0 
const reducedArray = data.reduce((memo, elem)=>{
console.log('memo', memo)//undefined
console.log('elem', elem)//65
return memo + elem;
}, 0);
console.log('reducedArray', reducedArray);



const reduceNewArray = data.reduce((memo, elem)=>{
console.log(elem);
if(elem <= 50){
    memo.push(elem);
}
return memo
}, []);
console.log("reduceNewArray", reduceNewArray);

//вибрати круглі і не круглі числа
const obj = data.reduce((memo, elem)=>{
   if (!memo.hasOwnProperty("even") || !memo.hasOwnProperty('odd')){
    memo['even'] = [];
    memo['odd'] = [];
   }
  if(elem % 2 == 0){
    memo['even'].push(elem);
  }else{
    memo['odd'].push(elem);
  }
    return memo;
}, {});
console.log("obj", obj);




const reducedString = data.reduce((memo, elem)=>{
    console.log(memo);
    memo.concat(elem);
    return memo + elem
}, '');
console.log('reducedString', reducedString);


//SORT - MUTATED INITIAL ARRAY
console.log(data);
const x = data.sort((min, max)=>{
    return min - max;
});
console.log(x === data) //copy by reference



//сортує в алфавітному порядку
const fruts = ['apple', 'peach', 'melon', 'ananas'];
console.log(fruts.sort());


//some & every 
//some ||
//every &&
const someValue = data.some((elem)=>{
    return elem % 2 === 0;
})
console.log('someValue', someValue)//поверне true, бо якись один елемент дылиться на 0



const everyValue = data.every((elem)=>{
    return elem % 2 === 0
})
console.log('everyValue', everyValue)//поверне false , так як усі не пройшли провірку, а мають усі пройти


