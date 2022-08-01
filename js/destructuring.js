console.log('DESTRUCTURING')

const arr = ['Mariia', "Dima", "Petro"];
const [ , he, she] = arr;
// console.log('me', me);
console.log('he', he);
console.log('she', she);

const user ={
    name: 'Mariia',
    age: 31,
    isOnline: true
};

const isOnline = user;
console.log("isOnline", isOnline);