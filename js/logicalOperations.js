console.log("logical Operators") // && || ! !!
// && = logical ANDD 
//верне останнє true значення, якщо усі true
//іншим чином перше false
console.log(true && 1)//1
console.log(true && 1 && 'user'); //user
console.log(true && 0 && 'user')// 0
console.log(true && 1 && '')// ''
console.log(false && 1 && 'user')// false



// && = logical OR 
//поверне перше true 
// або останнє false значення, якщо усі false
console.log(true || 1)//true
console.log(true || 1 || 'user')//true
console.log(true || 1 || "")//true

console.log(false || 1)//1
console.log(false || 1 || 'user')//1
console.log(false || 1 || "")//1

console.log(false || 1 || 'user')//user
console.log(false || 0 || ' ' || NaN)//" "
console.log(false || 0 || "" || NaN)//NaN


// && (last true if all true or last falls)(і)
// || (last false if all false or last true)(чи)

// && for diapasones 18-65 years 
// || for diferens values /one of some values



//! - logical NOT
//повертаэ для true => false; false=> true
console.log(!0)//true
console.log(!1)//false
console.log(!'')//true
console.log(!' ')//false
console.log(!'user');//false
console.log(!null);//true
console.log(!false)//true
console.log(!true)//false
console.log(!undefined)//true
console.log(!NaN)//true

//!!  робить наоборот від !
console.log(!!0)//false
console.log(!!1)//true
console.log(!!'')//false
console.log(!!' ')//true
console.log(!!'user');//true
console.log(!!null);//false
console.log(!!false)//false
console.log(!!true)//true
console.log(!!undefined)//false
console.log(!!NaN)//false


//?? - оператор нулевого слияния (null || undefined)
console.log('user' ?? 0)//user
console.log(0 ?? 'user')//0

console.log('user' ?? false)//user
console.log(false ?? 'user')//false

console.log('user' ?? '')//user
console.log('' ?? 'user')//
//==============!!==========
console.log('user' ?? null)//user
console.log(null ?? 'user')//user

console.log('user' ?? undefined)//user
console.log(undefined ?? 'user')//user
//==============!!=========
