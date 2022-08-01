console.log("FUNCTIONS")

getData('argument-1', 'argument-2')
//FUNCTION DECLARATION його можна викликати до обявлення
function getData(param1 = 'default1', param2 = 'default2', param3 = 'default3'){
    console.log(this);
    console.log("param1", param1);//param1: argument-1
console.log("param2", param2);//param2: argument-2
console.log("param3", param3);//param3: default-3
}


//rest
function getParams(...params){
    console.log('params:', params);
    params.forEach(elem=>console.log('elem', elem));
}
getParams(1, 2, 3)


//FUNCTION EXPRESSION не можна її визивати до її обявлення

const getParamsExpression = function (...params){
    console.log(this);
    console.log('params:', params);
    params.forEach(elem=>console.log('elem', elem));
}
getParamsExpression(1, 2, 3)



//ARROW FUNCTION
const getParamsArrow =  (...params)=>{
    console.log(this);
    console.log('params:', params);
    params.forEach(elem=>console.log('elem', elem));
}
getParamsArrow(1, 2, 3)



//THIS IN FUNCTION
console.log('global', this);
