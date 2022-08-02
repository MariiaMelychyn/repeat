console.log('CONSTRUCTOR');

const user = {
    _name: 'user',
    login: 'login',
    password: 'qweqwe',
    _email: 'user@mail.com',
    telephone: '+123456789',
    get name(){
        return this._name;//повертає текуще імя
    },
    set name(value){
        return this._name = value;// змінює це значення
    },
    get email(){
        return this._email;//повертає текуще імя
    },
    set email(value){
        return this._email = value;// змінює це значення
    },
    validateEmail(value){
        return value.includes('@')//true false
    },
    setValidEmail(value){
        if(this.validateEmail(value)){
    this.email = value;
        }
        return
    }
};

function createUser(name, login, password, email, telephone){
    return{
        name, login, password, email, telephone
    }
}
const newUser = createUser('Mariia', '123', '111', 'lv0801m@gmail.com', '+380962153')
// console.log(newUser);

const getUserName = user.name;
// console.log(getUserName);


user.name = 'Tanya';
// console.log(user);

const validEmail = user.setValidEmail('maria@ukr.net');
// console.log(user);

 
//функція конструктор
function User(name, age = 0){
this.name = name;
this.age = age;
}

User.prototype.validateAge = function(ageValue){
    return !ageValue.match('[^ 0-9]', 'g');//конструктор для регулярних виражений. провіряє на число
}

User.prototype.method1 = function(){
   console.log('METHOD-1')
}
User.prototype.method2 = function(){
    console.log('METHOD-2')
 }
 User.prototype.method3 = function(){
    console.log('METHOD-3')
 }

// console.log("User.prototype", User.prototype)

const user1 = new User('Mariia');
// console.log(user1);
// console.log(user1.name);
// console.log(user1.validateAge('12hd'))


//наслідувальні ф-ції

function UpdateUser(name, age){
    //привязуємо старий конструктор
User.call(this, name, age);
//добавляємо нові значення, яких не було у конструкторі
this.skills = [];
}
//в прототип нового конструктора, записуємо прото старого
UpdateUser.prototype = User.prototype;
//перезаписуємо конструктор, назад на свій, 
// тому що вище перезаписався чужий
UpdateUser.prototype.constructor = UpdateUser
//тепер можна писати методи
UpdateUser.prototype.newMethod = function(){
    console.log('new method')
}
const updateUser1 = new UpdateUser('vasya', '18');
console.log('updateUser1', updateUser1);