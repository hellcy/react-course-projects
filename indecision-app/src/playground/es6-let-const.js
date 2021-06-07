// you can reassign values to var
// you can also re-define values to var
var nameVar = 'Yuan';
var nameVar = 'Nancy';
console.log(nameVar);

// for let you can reassign values 
// but you cannot re-define values
// cannot redeclare variable using the same name
let nameLet = 'Yuan';
nameLet = 'Nancy';
console.log(nameLet);

// for const you cannot reassign values
const nameConst = 'Yuan';
console.log(nameConst);

// scope
// var is function scoped, meaning var defined inside 
// a function cannot be accessed from outside the function

// let and const are blocked scoped, more strict
// meaning let and const variables cannot be accessed
// from outside of any code blocks

const fullName = 'Yuan Cheng'
if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

// you cannot access firstName from here
// but if firstName was var then you can

// always use let and const because they are more secure