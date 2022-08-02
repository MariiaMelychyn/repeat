//ES6
console.log("CLASSES");

class User {
constructor(name, age = 0){
    this.name = name;
    this.age = age;
}
validateAge(){
    return !ageValue.match('[^ 0-9]', 'g');//конструктор для регулярних виражений. провіряє на число
}
method1n(){
    console.log('METHOD-1')
 }
method2(){//добавляє методи до прототипа
     console.log('METHOD-2')
  }
method3(){
     console.log('METHOD-3')
  }
}

const classUser1 = new User('Tania')
// console.log(classUser1)
const classUser2 = new User('Petro')
// console.log(classUser2)




class UpdateUser extends User{
    static className = 'не доступно новим обєктам';
   static classOwnMethod(){
    'меня нет в обєктах'
   }
    constructor(name, age, skills){
        super(name, age);
        this.skills = skills
    }
    newClassMethod(){
        console.log('my new class method');
    }
}

const classUpdateUser1 = new UpdateUser('vasia', '18', [moto]);
console.log("classUpdateUser1", classUpdateUser1);

classUpdateUser1.method1()

console.log('class UpdateUser', UpdateUser.className);
