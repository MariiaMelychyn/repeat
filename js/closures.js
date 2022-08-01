console.log('CLOSURES');//замикання

let globalVallue = 'global value'
function setClosure(){
    //LEXICAL ENVIRONMENT getValue
    let initValue = 'inner value'
    function getValue(value){
        console.log(value);
        return initValue
    }
    return {getValue}
    //LEXICAL ENVIRONMENT getValue
}

//LEXICAL ENVIRONMENT setClosure
// console.log('initValue', initValue);
const closure = setClosure()
console.log(closure);

const initValue = closure.getValue('oh my value')
console.log(initValue)



// EXAMPLE - COUNTER
const counter = function(){
    let countValue = 0;
    function decrementValue(){
        countValue -= 1
        document.querySelector('body').insertAdjacentHTML('afterbegin', `<h1>${countValue}</h1>`)
    }
    function incrementValue(){
        countValue += 1;
        document.querySelector('body').insertAdjacentHTML('afterbegin', `<h1>${countValue}</h1>`)
        
    }

    return{decrementValue, incrementValue}
}

const newCounter = counter()
console.log('newCounter', newCounter);
newCounter.decrementValue()