console.log('OBJECT');

const obj = {
    'prop-1': 'jhch'
};
console.log(obj);
console.log(obj.hasOwnProperty('name'))
obj.name = ''
console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('age'));

obj['age'] = 32;
console.log(obj.hasOwnProperty('age'));
console.log(obj["prop-1"]);


delete obj["prop-1"];
console.log(obj["prop-1"]);//undefined

const cat = {
    name: 'pushok'
};
console.log(cat)


//створити новий обєкт
// const kitten = Object.create(null)
// console.log(kitten.hasOwnProperty('gff'));//error
//  const kitten = Object.create({});
//  console.log('kitten', kitten);
//  console.log(kitten.hasOwnProperty('gff'));//false


 const kitten = Object.create(cat);
 console.log("kitten", kitten);


 const nextKitten = Object.create(kitten);
 console.log('nextKitten', nextKitten);
 console.log('nextKitten', nextKitten.hasOwnProperty('knb'));



 //SPREAD
 const settings = {
    prettier: true,
    eslint: true
 }

const upgradeSettings = {...settings, liveServer: true};
console.log(upgradeSettings);




const a ={
    a: 50
}
const b={
    b: 100,
    a: 500
}
const c = {...a, ...b}
console.log(c)// a: 500, b:100

const d = Object.create(a, ({b: {writable: true, configurable: true, value: 1000}}));
console.log(d) //b: 1000



const user = {
    name: 'Mariia',
    toShowName(param1, param2){
        // console.log(user.name);
        console.log(this.name, param1, param2)
    }
}
user.toShowName('i love', 'js');

const newUser = {
    name: "Dima"
}

//call | apply | bing
user.toShowName.apply(newUser, ['hello', 'world']);//dima hello world

function getData(callback) {
    callback()
}
 getData(user.toShowName.bind(newUser, 'hello', 'world'))


 console.log(this)//undefined