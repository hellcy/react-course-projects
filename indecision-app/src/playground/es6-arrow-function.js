const square = function (x) {
    return x * x;
};

// arrow functions are anonymous so if you want to 
// reference it later you have to assign it to a variable
const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(8));

const getFirstName = name => name.split(' ')[0];

console.log(getFirstName('Yuan Cheng'));